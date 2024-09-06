import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";
import { faRss } from "@fortawesome/free-solid-svg-icons"; // Import faRss from the solid icons

function Footer() {
  return (
    <footer className="text-white py-10 w-[100vw] bg-[#040406] px-10">
      <div className="container mx-auto flex justify-between items-start">
        {/* Left Section */}
        <div className="space-y-2">
          <span className="text-[#ff0901] text-2xl font-bold font-serif">
            {" "}
            Gannu'SS
          </span>
          <span className="text-2xl text-[#25a315] font-shadows font-bold">
            {" "}
            Productions
          </span>
          <p className="text-gray-400">SOLOGAN COMPANY</p>
        </div>
        {/* Middle Section */}
        <div className="flex space-x-16 pr-2">
          <div className="space-y-2">
            <p>WEEBLY THEMES</p>
            <p>PRE-SALE FAQS</p>
            <p>SUBMIT A TICKET</p>
          </div>
          <div className="space-y-2">
            <p>SERVICES</p>
            <p>THEME TWEAK</p>
          </div>
          <div className="space-y-2">
            <p>SHOWCASE</p>
            <p>WIDGETKIT</p>
            <p>SUPPORT</p>
          </div>
          <div className="space-y-2">
            <p>ABOUT US</p>
            <p>CONTACT US</p>
            <p>AFFILIATES</p>
            <p>RESOURCES</p>
          </div>
        </div>
      </div>
      {/* Social Icons */}
      <div className="flex justify-center mt-10 space-x-5">
        <a href="#" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faFacebookF} />
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faRss} />
        </a>
        <a href="#" className="text-white hover:text-gray-400">
          <FontAwesomeIcon icon={faFlickr} />
        </a>
      </div>
      {/* Copyright */}
      <div className="text-center mt-5 text-gray-500">
        &copy; Copyright. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
