import Bingo from "../../organism/Bingo/Bingo";
import Breadcrumb from "../../molecules/Breadcrumb/Breadcrumb";
import React from "react";

function Excercise1() {
  return (
    <main className="bingo_container">
      <Breadcrumb route={"Bingo"} />
      <Bingo />
    </main>
  );
}

export default Excercise1;
