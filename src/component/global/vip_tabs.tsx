import Image, { StaticImageData } from "next/image";
import React from "react";

interface props {
  price: string;
  iconPath: StaticImageData;
  commission: string;
  days: number;
  label: string;
}

const VipTab = ({ iconPath, commission, days, label, price }: props) => {
  return (
    <div className="bg-[#F6F6F8] w-full flex flex-col gap-6 p-5 rounded-xl">
      <div className="flex justify-between">
        <Image src={iconPath} height={50} width={50} alt="" />
        <div>
          <div>
            <h4 className="text-base ">VIP{label}</h4>
            <p className="text-xs">{price}USDT</p>
          </div>
        </div>
      </div>
      <p className="text-xs">
        Commission rate {commission}% orders per day {days} taken
      </p>
    </div>
  );
};

export default VipTab;
