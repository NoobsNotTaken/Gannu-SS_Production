import React from "react";

function Card(Props) {
  return (
    <div className="flex flex-col rounded-lg  hover:bg-white hover:text-black py-4 px-3 ">
      <div className="  rounded-lg min-w-[280px] max-w-[390px] h-80 border ">
        {" "}
        <img
          className=" object-cover h-full  rounded-lg "
          src="https://thispersondoesnotexist.com"
        ></img>
      </div>
      <div className=" px-1 justify-center items-center flex flex-col  py-2 ">
        <h1 className="font-semibold text-xl ">{Props.Name}</h1>
        <p className="font-sm text-sm text-gray-400 ">{Props.Position}</p>
      </div>
    </div>
  );
}

export default Card;
