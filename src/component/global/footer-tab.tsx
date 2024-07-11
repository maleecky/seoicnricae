import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

interface props {
  path: string;
  img: StaticImageData;
  label: string;
  styles?: string;
}

const FooterTab = ({ path, img, label, styles }: props) => {
  return (
    <Link href={path} className="flex space-y-[2px] flex-col items-center">
      <Image
        src={img}
        height={40}
        width={40}
        alt=""
        className={styles ? styles : ""}
      />
      <div className="text-xs">{label}</div>
    </Link>
  );
};

export default FooterTab;
