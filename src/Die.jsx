import PropTypes from "prop-types";

export default function Die(props) {
  return (
    <div
      onClick={props.holdDice}
      className={`flex justify-center items-center box-border cursor-pointer text-[2rem] ${
        props.isHeld ? "bg-[#59e391]" : "bg-white"
      } rounded-md shadow-[0px_2px_2px_rgba(0,0,0,0.15)] w-[50px] h-[50px]`}
    >
      <div className="relative flex justify-center items-center w-full">
        {props.value === 1 && (
          <div className="absolute w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
        )}
        {props.value === 2 && (
          <div className="absolute flex justify-around items-center w-full">
            <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
          </div>
        )}
        {props.value === 3 && (
          <div className="absolute flex justify-center items-center gap-2 w-full">
            <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
          </div>
        )}
        {props.value === 4 && (
          <div className="absolute flex justify-center items-center gap-4 mx-auto w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            </div>
          </div>
        )}
        {props.value === 5 && (
          <div className="absolute flex justify-center items-center gap-1 mx-auto w-full">
            <div className="flex flex-col items-center gap-4">
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            </div>
            <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            <div className="flex flex-col items-center gap-4">
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            </div>
          </div>
        )}
        {props.value === 6 && (
          <div className="absolute flex justify-center items-center gap-4 mx-auto w-full">
            <div className="flex flex-col items-center gap-1">
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
              <div className="w-2 h-2 bg-black shadow-[inset_0_5px_2px_rgba(0,0,0,0.4),_inset_0_-5px_4px_rgba(255,255,255,0.4)] rounded-full"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

Die.propTypes = {
  holdDice: PropTypes.func,
  isHeld: PropTypes.bool,
  value: PropTypes.number,
};
