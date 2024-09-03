import React from "react";

function Header() {
  return (
    <div className="flex px-10 py-5 fixed z-50 bg-white top-0 left-0 right-0 ">
      {/* name of the website */}
      <div className=" flex justify-center items-center text-2xl font-kanit ">
        {" "}
        <a href="">Gannu'SS Productions</a>
      </div>
      <div className="flex-1"></div>
      {/* navbar links */}
      <div className="flex gap-5 ">
        <div className="flex justify-center items-center px-2 ">
          <a href="#">Home</a>
        </div>
        <div className="flex justify-center items-center px-2 ">
          {" "}
          <a href="#">Portfolio</a>
        </div>
        <div className="flex justify-center items-center px-2 ">
          {" "}
          <a href="#">Reviews</a>
        </div>
        <div className="flex justify-center items-center px-2 ">
          <a href="#">About Us</a>
        </div>
      </div>
      <div className="flex-1"></div>
      {/* contact us Butoon */}
      <div className="flex justify-center items-center border px-1 hover:bg-black hover:text-white rounded-lg">
        <button className=""> Contact us</button>{" "}
      </div>
    </div>
  );
}
//vfx works
export default Header;
