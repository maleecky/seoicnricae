import Image from "next/image";
import React from "react";
import user_photo from "@/../public/user.png";
import vip0_photo from "@/../public/vip0.png";
import bg_photo from "@/../public/profile_bg.png";

const WalletDisplay = () => {
  return (
    <div className="!rounded-tl-[50px] z-10 my-4 h-full relative overflow-hidden !rounded-tr-[50px] rounded-xl">
      <Image
        src={bg_photo}
        fill
        alt=""
        className="w-full -z-10  object-cover object-[100%_0]"
      />
      <div className="p-[1.25rem] text-white flex gap-2 flex-col z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={user_photo}
                height={80}
                width={80}
                alt=""
                className="w-[4rem] h-[4rem]"
              />
            </div>
            <div>
              <h4 className="text-lg font-bold">Wikie01</h4>
              <div className="text-[#DDDDDD] text-xs">
                Invitation Code:{" "}
                <span className="text-white font-medium">6SLUCG</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src={vip0_photo}
              height={40}
              width={40}
              alt=""
              className="w-14 h-14"
            />

            <div>VIP0</div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex  text-xs justify-between">
            <div>Credit Score:</div>
            <div>100%</div>
          </div>
          <div className="bg-[#FBDD67] w-full h-2 rounded-lg"></div>
        </div>

        <div className="flex w-[60%] mt-4 text-[#dddddd] justify-between mx-auto items-center">
          <div className="flex flex-col gap-1 items-center">
            <div>Wallet Amount</div>
            <div className="text-xs  flex gap-1">
              <p className="font-bold text-white">5968.18</p>{" "}
              <span className="text-[#fffbfb]">USDT</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <div>Frozen Amount</div>
            <div className=" text-xs flex gap-1">
              <p className="text-white font-bold">0</p>
              <span className="text-[#dddddd]">USDT</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletDisplay;
