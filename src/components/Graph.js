import React from "react";
import GraphBar from "./GraphBar";

function Graph() {
  // return <div>mon tue wed thu fri sat sun</div>;
  const data = require("../data/data.json");
  let max = -99999999; //max amt in data
  for (let i = 0; i < data.length; i++) {
    if (data[i].amount > max) {
      max = data[i].amount;
    }
  }

  return (
    <div className="flex gap-1 justify-between">
      {/* <GraphBar day="mon" amt={data[0].amount} percent={100} />
      <GraphBar day="tue" amt={13.45} percent={100} />
      <GraphBar day="wed" amt={12.45} percent={100} />
      <GraphBar day="thu" amt={13.45} percent={100} />
      <GraphBar day="fri" amt={23.45} percent={100} />
      <GraphBar day="sat" amt={22.45} percent={100} />
      <GraphBar day="sun" amt={12.45} percent={100} /> */}
      {data.map((datum, index) => {
        return (
          <GraphBar
            day={datum.day}
            amt={datum.amount}
            percent={Math.round((datum.amount / max) * 100)}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Graph;
