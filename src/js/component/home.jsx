import React, { useState } from "react";

export const Home = () => {
  const [clickedColor, setClickedcolor] = useState("");
  return (
    <div className="text-center mt-5 ">
      <div className="traffic-light">
        <div
          onClick={() => setClickedcolor("red")}
          className={"light red" + (clickedColor === "red" ? " glow" : "")}
        ></div>
        <div
          onClick={() => setClickedcolor("yellow")}
          className={
            "light yellow" + (clickedColor === "yellow" ? " glow" : "")
          }
        ></div>
        <div
          onClick={() => setClickedcolor("green")}
          className={"light green" + (clickedColor === "green" ? " glow" : "")}
        ></div>
      </div>
    </div>
  );
};
