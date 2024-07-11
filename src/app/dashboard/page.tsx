import { ArrowLeftCircle, ArrowRightCircle, Bell } from "lucide-react";
import Image from "next/image";
import React from "react";
import nextSvg from "@/../public/next.svg";
import main_bg from "@/../public/main_bg.jpg";
import Link from "next/link";
import NavigationTab from "@/component/global/navigation_tabs";
import SearchTab from "@/component/global/search-tab";
import Header from "@/component/global/header";
import VipTab from "@/component/global/vip_tabs";
import Logo from "@/../public/LOGO.svg";
import homeIcon from "@/../public/home_h.png";
import recordIcon from "@/../public/records.png";
import FooterTab from "@/component/global/footer-tab";
import serviceIcon from "@/../public/service.png";
import eventIcon from "@/../public/Event.png";
import withdrawIcon from "@/../public/Withdrawal.png";
import depositIcon from "@/../public/Deposit.png";
import tcIcon from "@/../public/T&C.png";
import certificationIcon from "@/../public/Certificate.png";
import faqsIcon from "@/../public/FAQs.png";
import aboutIcon from "@/../public/About.png";
import vip0Icon from "@/../public/vip0.png";
import vip1Icon from "@/../public/vip1.png";
import vip2Icon from "@/../public/vip2.png";
import vip3Icon from "@/../public/vip3.png";
import vip4Icon from "@/../public/VIP4.png";

const Dashboard = () => {
  return (
    <div className="relative max-w-[990px] bg-[#F4F2F5] w-full overflow-hidden  mx-auto">
      <div>
        <Header />
        <div>
          <div className="relative w-full">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="w-full object-cover"
            >
              <source src="/video.mp4"></source>
            </video>
          </div>
        </div>
        <div>
          <div className="bg-[#EDECFE] w-full relative flex flex-col  ">
            <SearchTab />
            <ul className="grid lg:grid-cols-8 grid-cols-4 p-4 pt-10 w-full gap-3">
              <li>
                <NavigationTab
                  path="/services"
                  linkLabel="Service"
                  iconPath={serviceIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/event"
                  linkLabel="Event"
                  iconPath={eventIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/withdraw"
                  linkLabel="Withdraw"
                  iconPath={withdrawIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/deposit"
                  linkLabel="Deposit"
                  iconPath={depositIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/t&c"
                  linkLabel="T & C"
                  iconPath={tcIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/certification"
                  linkLabel="Certification"
                  iconPath={certificationIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/faqs"
                  linkLabel="FAQs"
                  iconPath={faqsIcon}
                />
              </li>
              <li>
                <NavigationTab
                  path="/about"
                  linkLabel="About"
                  iconPath={aboutIcon}
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white">
          <div className="flex items-center p-4 px-12 justify-between">
            <div className="font-semibold text-base">Vip levels</div>
            <div className="flex items-center gap-2">
              <div className="font-semibold text-base">View More</div>
              <svg
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
              >
                <path
                  d="M30 60C46.568 60 60 46.568 60 30C60 13.432 46.568 0 30 0C13.432 0 0 13.432 0 30C0 46.568 13.432 60 30 60ZM13 24.572L31.693 24.572V14L47 30L31.693 46L31.693 34.857H13V24.572Z"
                  fill="#6959F0"
                />
              </svg>
            </div>
          </div>
          <div className="grid lg:grid-cols-4 bg-white gap-3 mb-16 p-2 pb-16 grid-cols-2">
            <VipTab
              price={"50.00"}
              iconPath={vip0Icon}
              label="0"
              commission={"0.20"}
              days={30}
            />
            <VipTab
              price={"100.00"}
              iconPath={vip1Icon}
              label="1"
              commission={"0.40"}
              days={40}
            />
            <VipTab
              price={"5000.00"}
              iconPath={vip2Icon}
              label="2"
              commission={"0.80"}
              days={45}
            />
            <VipTab
              price={"1500.00"}
              iconPath={vip3Icon}
              label="3"
              commission={"0.80"}
              days={50}
            />
            <VipTab
              price={"1500.00"}
              iconPath={vip4Icon}
              label="4"
              commission={"0.80"}
              days={50}
            />
          </div>
        </div>
      </div>
      <footer className="w-full max-w-[990px] fixed bottom-0  px-32 py-2  shadow-2xl   border bg-white">
        <div className="flex items-end justify-between ">
          <FooterTab img={homeIcon} styles="w-8 h-8" path="/" label="Home" />
          <FooterTab
            img={Logo}
            path=""
            label="Starting"
            styles="rounded-full w-16 absolute -top-6 h-16"
          />
          <FooterTab
            img={recordIcon}
            path="/records"
            label="Records"
            styles="w-8 h-8"
          />
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
