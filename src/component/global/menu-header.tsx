import { ChevronLeft } from "lucide-react";
import React from "react";

const MenuHeader = () => {
  return (
    <div className="bg-black relative p-3 flex justify-center items-center font-bold font-base text-white">
      <div className="absolute left-2">
        <ChevronLeft width={20} />
      </div>
      <div>
        <h3>My</h3>
      </div>
    </div>
  );
};

export default MenuHeader;
