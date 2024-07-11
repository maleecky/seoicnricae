import React from "react";
import icnLogo from "@/../public/LOGO.svg";
import Image from "next/image";

const Header = () => {
  return (
    <div className="flex items-center bg-white py-3 w-full justify-between">
      <div>
        <Image src={icnLogo} width={40} height={40} alt="" />
      </div>
      <div>
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 bg-[#6959F0] p-2 rounded-full"
        >
          <path
            d="M40 40C34.5 40 29.7917 38.0417 25.875 34.125C21.9583 30.2083 20 25.5 20 20C20 14.5 21.9583 9.79167 25.875 5.875C29.7917 1.95833 34.5 0 40 0C45.5 0 50.2083 1.95833 54.125 5.875C58.0417 9.79167 60 14.5 60 20C60 25.5 58.0417 30.2083 54.125 34.125C50.2083 38.0417 45.5 40 40 40ZM0 80V66C0 63.1667 0.730001 60.5633 2.19 58.19C3.65 55.8167 5.58667 54.0033 8 52.75C13.1667 50.1667 18.4167 48.23 23.75 46.94C29.0833 45.65 34.5 45.0033 40 45C45.5 44.9967 50.9167 45.6433 56.25 46.94C61.5833 48.2367 66.8333 50.1733 72 52.75C74.4167 54 76.355 55.8133 77.815 58.19C79.275 60.5667 80.0033 63.17 80 66V80H0Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
