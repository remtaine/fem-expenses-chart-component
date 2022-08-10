import React from "react";
import Balance from "./components/Balance";
import Graph from "./components/Graph";
import Spending from "./components/Spending";
import Total from "./components/Total";

function App() {
  return (
    <div className="App w-screen min-h-screen flex items-center justify-center bg-fem-500 font-dm-sans selection:bg-neutral-800 selection:text-neutral-50">
      <section className="flex flex-col gap-4 w-[350px]">
        <div className="bg-fem-100 p-4 rounded-lg">
          <Balance />
        </div>
        <div className="bg-fem-600 p-4 rounded-lg flex flex-col gap-2">
          <Spending />

          <div className="h-[1px] bg-fem-100 opacity-10"></div>

          <Total />
        </div>
      </section>
    </div>
  );
}

export default App;
