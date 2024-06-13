import { useState } from "react";

function Bg_Changer() {
  const [color, setColor] = useState("grey");
  return (
    <div
      className="h-screen w-full flex flex-wrap justify-center"
      style={{ backgroundColor: color }}
    >
      <div
        className="flex flex-wrap justify-center fixed bottom-12 px-3 py-2 w-10/12 gap-3"
        style={{ backgroundColor: "#fff" }}
      >
        <div
          className=" py-1 outline-none px-4  rounded-3xl"
          style={{ backgroundColor: "red" }}
          onClick={() => setColor("red")}
        >
          Red
        </div>
        <div
          className=" py-1 outline-none px-4  rounded-3xl"
          style={{ backgroundColor: "green" }}
          onClick={() => setColor("green")}
        >
          Green
        </div>
        <div
          className=" py-1 outline-none px-4  rounded-3xl"
          style={{ backgroundColor: "blue" }}
          onClick={() => setColor("blue")}
        >
          Blue
        </div>
        <div
          className=" py-1 outline-none px-4  rounded-3xl"
          style={{ backgroundColor: "yellow" }}
          onClick={() => setColor("yellow")}
        >
          Yellow
        </div>
        <div
          className=" py-1 outline-none px-4  rounded-3xl"
          style={{ backgroundColor: "orange" }}
          onClick={() => setColor("orange")}
        >
          Orange
        </div>
      </div>
    </div>
  );
}

export default Bg_Changer;
