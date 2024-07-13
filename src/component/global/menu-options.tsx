import { ChevronRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
interface linksProps {
  path: string;
  LinkLabel: string;
  icon: StaticImageData;
}
interface props {
  heading: string;
  links: linksProps[];
}

const MenuOptions = ({ heading, links }: props) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-base font-bold">{heading}</div>

      <div className="w-full relative border border-[#dddddd] shadow-sm bg-white flex p-2 rounded-lg flex-col gap-2 ">
        {links.map((link, index) => (
          <Link
            key={index}
            className="p-2 flex justify-between  "
            href={`/${link.path}`}
          >
            <div className="flex items-center gap-2">
              <Image
                src={link.icon}
                height={40}
                width={40}
                alt=""
                className="w-5 h-5"
              />
              <span>{link.LinkLabel}</span>
            </div>
            <ChevronRight color="#A69B99" width={20} />
          </Link>
        ))}
        <div className="h-[1px] absolute top-1/2 left-0 w-full bg-[#dddddd]"></div>
      </div>
    </div>
  );
};

export default MenuOptions;
