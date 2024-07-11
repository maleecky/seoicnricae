import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  path: string;
  iconPath: StaticImageData;
  linkLabel: string;
}

const NavigationTab = ({ path, iconPath, linkLabel }: props) => {
  return (
    <div className="bg-white p-5 rounded-xl   border flex items-center justify-center">
      <Link href={path} className="flex flex-col gap-1 items-center">
        <Image
          src={iconPath}
          height={50}
          width={50}
          alt=""
          className="w-6 h-6"
        />
        <span className="text-xs">{linkLabel}</span>
      </Link>
    </div>
  );
};

export default NavigationTab;
