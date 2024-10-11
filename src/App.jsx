import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import { FaTrashAlt } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { FaDice } from "react-icons/fa";
import Die from "./Die";
import Confetti from "react-confetti";

function App() {
  const [dice, setDice] = useState(allNewDice());
  const [tenzies, setTenzies] = useState(false);
  const [rollCount, setRollCount] = useState(0);
  const [leastRoll, setLeastRoll] = useState(() => JSON.parse(localStorage.getItem("leastRoll")) || "none");
  const [roundTime, setRoundTime] = useState(0);
  const [timeRunning, setTimeRunning] = useState(false);
  const [bestTime, setBestTime] = useState(() => JSON.parse(localStorage.getItem("bestTime")) || {time: null, roundTime: 99999});

  const sec = Math.floor((roundTime % 6000) / 100);
  const min = Math.floor((roundTime % 360000) / 6000);
  const time = min.toString().padStart(2, "0")+":"+sec.toString().padStart(2, "0");

  useEffect(() => {
    const allHeld = dice.every((die) => die.isHeld);
    const firstValue = dice[0].value;
    const allSameValue = dice.every((die) => die.value === firstValue);
    if (allHeld && allSameValue) {
      setTenzies(true);
    }
  }, [dice]);

  useEffect(() => {
    let intervalId;
    if (timeRunning && !tenzies) {
      intervalId = setInterval(() => setRoundTime(roundTime + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [timeRunning, roundTime, tenzies]);

  function deleteBestTime(){
    localStorage.removeItem("bestTime")
  }

  function generateNewDie() {
    return {
      id: nanoid(),
      value: Math.floor(Math.random() * 6) + 1,
      isHeld: false,
    };
  }

  function allNewDice() {
    let newDice = [];

    for (let i = 0; i < 10; i++) {
      newDice.push(generateNewDie());
    }

    //const randNumArray = [...Array(10)].fill().map(() => Math.floor(Math.random() * 6) + 1);
    return newDice;
  }

  function rollDice() {
    if (!tenzies) {
      setDice((oldDice) =>
        oldDice.map((die) => {
          return die.isHeld ? die : generateNewDie();
        })
      );
      setRollCount(rollCount + 1);
      setTimeRunning(true);
    } else {
      setTenzies(false);
      setDice(allNewDice());
      setRollCount(0);
      setRoundTime(0);
      setTimeRunning(false)

      if(leastRoll === "none"){
        setLeastRoll(rollCount)
        localStorage.setItem("leastRoll", JSON.stringify(rollCount))
      }
      else if(rollCount < leastRoll){
        setLeastRoll(rollCount)
        localStorage.setItem("leastRoll", JSON.stringify(rollCount))
      }
      if(bestTime.time === null){
        setBestTime({time: time, roundTime: roundTime})
        localStorage.setItem("bestTime", JSON.stringify({time: time, roundTime: roundTime}))
      }
      else if(roundTime < bestTime.roundTime){
        setBestTime({time: time, roundTime: roundTime})
        localStorage.setItem("bestTime", JSON.stringify({time: time, roundTime: roundTime}));
      }
    }
  }

  const holdDice = (id) => {
    setDice((oldDice) =>
      oldDice.map((die) => {
        return die.id === id ? { ...die, isHeld: !die.isHeld } : die;
      })
    );
  };

  const diceElement = dice.map((die) => (
    <Die
      key={die.id}
      value={die.value}
      isHeld={die.isHeld}
      holdDice={() => holdDice(die.id)}
    />
  ));


  return (
    <>
      <div className="flex justify-center items-center font-karla bg-[#0b2434] p-[20px] h-svh">
        {tenzies && (
          <div>
            <Confetti width={screen.availWidth} height={screen.availHeight} />
          </div>
        )}
        <div className="flex flex-col gap-[20px] justify-center items-center bg-[#f5f5f5] rounded-sm max-w-[800px] aspect-square h-[95%] p-[20px]">
          <div className="font-bold text-[40px]">Tenzies</div>
          <div className="text-center">
            {tenzies
              ? "You won!!!"
              : "Roll until all dice are the same. Click each die to freeze it at its current value between rolls."}
          </div>
          <div className="flex items-center gap-2"><div>Your best time: {bestTime.time === null ? "none" : bestTime.time}</div>
          <button onClick={deleteBestTime}><FaTrashAlt /></button>
          </div>
          <div className="text-3xl">
            {time}
          </div>
          <div>Your least no. of rolls: {leastRoll}</div>
          <div className="text-3xl">You rolled {rollCount} times</div>
          <div className="flex flex-wrap justify-center items-center gap-[20px] w-[350px]">
            {diceElement}
          </div>
          <button
            onClick={rollDice}
            className="active:shadow-[inset_5px_5px_10px_-3px_rgba(0,0,0,0.7)] font-karla text-[1.2rem] text-white bg-[#5035ff] rounded-sm py-1 px-7"
          >
            {tenzies ? (
              <div className="flex justify-center items-center gap-2">
                <GrPowerReset />
                New game
              </div>
            ) : (
              <div className="flex justify-center items-center gap-2">
                <FaDice />
                Roll
              </div>
            )}
          </button>
        </div>
      </div>
    </>
  )
}

export default App
