import React from "react";
import PropTypes from "prop-types";

function GraphBar(props) {
  const { day, amt, percent } = props;
  const height = " h-[" + percent + "px] ";
  console.log(day + " : " + percent + " : " + height);
  //TODO convert 100 to percent
  //   console.log(data);
  return (
    <div className="w-fit flex flex-col items-center group cursor-pointer gap-2">
      <div className="bg-fem-300 text-[0.6rem] text-fem-600 p-[2px] group-hover:visible invisible group-hover:opacity-100 opacity-0 duration-300 rounded-sm">
        {"$" + amt}
      </div>
      <div className="mt-auto">
        <div
          className={
            " w-[28px] rounded-sm group-hover:opacity-60 duration-400 " +
            (percent === 100 ? "bg-fem-200" : "bg-fem-100")
          }
          style={{ height: percent + "px" }}
        ></div>
        {/* <div
          className={
            "w-0 border-x-[14px] border-solid rounded " +
            height +
            (percent === 100 ? "border-fem-200" : "border-fem-100")
          }
        ></div> */}
        <div className="text-center text-xs text-fem-400">{day}</div>
      </div>
    </div>
  );
}

GraphBar.propTypes = {
  day: PropTypes.string,
  amt: PropTypes.number,
  percent: PropTypes.number,
};

export default GraphBar;
