import React from "react";

function Card(Props) {
  return (
    <div className="flex flex-col rounded-lg  hover:bg-white hover:text-black py-4 px-3 ">
      <div className=" min-w-[315px] max-w-[450px] rounded-lg ">
        {" "}
        <img
          className=" object-cover  rounded-lg "
          src="https://thispersondoesnotexist.com"
        ></img>
      </div>
      <div className=" px-1 justify-center items-center flex flex-col  py-2 ">
        <div className="font-semibold text-xl">{Props.Name}</div>
        <div className="font-sm text-sm">{Props.Position}</div>
      </div>
    </div>
  );
}

export default Card;
