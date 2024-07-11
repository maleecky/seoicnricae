import { Bell } from "lucide-react";
import React from "react";

const SearchTab = () => {
  return (
    <div className="left-0 -top-6  absolute w-full px-4">
      <div className="border relative items-center overflow-hidden gap-2 shadow w-full border-[#DDDCEC] bg-white p-3  rounded-full">
        <div className="absolute z-10 left-0 w-max pl-3 h-full   bg-white pr-3">
          <svg
            width="60"
            height="70"
            viewBox="0 0 60 70"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-4  h-4 "
          >
            <path
              d="M60 56.6667V60H0V56.6667L6.66667 50V30C6.66667 19.6667 13.4333 10.5667 23.3333 7.63333V6.66667C23.3333 4.89856 24.0357 3.20286 25.286 1.95262C26.5362 0.702379 28.2319 0 30 0C31.7681 0 33.4638 0.702379 34.714 1.95262C35.9643 3.20286 36.6667 4.89856 36.6667 6.66667V7.63333C46.5667 10.5667 53.3333 19.6667 53.3333 30V50L60 56.6667ZM36.6667 63.3333C36.6667 65.1014 35.9643 66.7971 34.714 68.0474C33.4638 69.2976 31.7681 70 30 70C28.2319 70 26.5362 69.2976 25.286 68.0474C24.0357 66.7971 23.3333 65.1014 23.3333 63.3333"
              fill="black"
            />
          </svg>
        </div>
        <div className="whitespace-nowrap font-light ml-10  flex-1">
          <p className="sliding-text w-full">
            Dear user, thank you for your continued support and cooperation with
            ICR. To reward everyone for your support, we will first launch the
            third anniversary deposit bonus. Deposit 500USD to get a 30USD
            deposit bonus; recharge 1,000USD to get a 60USD deposit bonus. For
            more details, please refer to the activity log or online customer
            service.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SearchTab;
