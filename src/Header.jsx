import React, { useEffect, useState } from "react";
import "./index.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`flex px-10 py-5 fixed z-50 top-0 left-0 ${
        !isScrolled && "bg-transparent text-white border-none"
      } bg-[#030304] right-0 border-gray-900 border-b-2`}
    >
      {/* name of the website */}
      <div className=" flex justify-center items-center font-kanit flex-col  ">
        {" "}
        <h2 className=" text-2xl cursor-default  " href="">
          <span className="text-[#ff0901] font-bold font-serif"> Gannu'SS</span>
          <span className=" text-[#25a315] font-shadows font-bold">
            {" "}
            Productions
          </span>
        </h2>
        <span className="text-sm">where Vision Meets Reality</span>
      </div>
      <div className="flex-1"></div>
      {/* navbar links */}
      <ul className="flex gap-5 ">
        <li className="flex justify-center items-center px-2   ">
          <a className="underline-animation" href="#">
            Home
          </a>
        </li>
        <li className="flex justify-center items-center px-2 ">
          {" "}
          <a className="underline-animation" href="#">
            Portfolio
          </a>
        </li>
        <li className="flex justify-center items-center px-2 ">
          {" "}
          <a className="underline-animation" href="#">
            Reviews
          </a>
        </li>
        <li className="flex justify-center items-center px-2 ">
          <a className="underline-animation" href="#">
            About Us
          </a>
        </li>
      </ul>
      <div className="flex-1"></div>
      {/* contact us Butoon */}
      <div className="flex justify-center items-center border px-1 my-2 hover:bg-white hover:text-black rounded-lg">
        <button className=""> Contact us</button>{" "}
      </div>
    </div>
  );
}
//vfx works
export default Header;
