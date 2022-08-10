import React from "react";

function Total() {
  const data = require("../data/data.json");
  // let amts = data.map(function (datum) {
  //   return datum.amount;
  // });

  let sum = data.reduce(function (total, datum) {
    return total + datum.amount;
  }, 0);

  console.log(sum);

  return (
    <div className="flex justify-between items-end">
      <div className="">
        <h2 className="text-[0.6rem] text-fem-400">Total this month</h2>
        <h3 className="font-bold text-2xl">{"$" + sum}</h3>
      </div>
      <div className="flex flex-col items-end">
        <h2 className="font-bold">+2.4%</h2>
        <h3 className="text-xs text-fem-400 text-[0.6rem]">from last month</h3>
      </div>
    </div>
  );
}

export default Total;
