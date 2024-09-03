import React from "react";

function Card() {
  return (
    <div className="flex flex-col px-4 py-2 rounded-lg border-black border-2 hover:bg-orange-300">
      <div className="border-2  rounded-lg ">
        {" "}
        <img
          className="max-w-[200px] object-cover min-w-[300px] aspect-square "
          src="https://thispersondoesnotexist.com"
        ></img>
      </div>
      <div className="border px-1 justify-center items-center flex py-2 font-semibold text-xl">
        Meta bhai
      </div>
    </div>
  );
}

export default Card;
