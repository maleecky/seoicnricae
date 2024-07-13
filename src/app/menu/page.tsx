import MenuHeader from "@/component/global/menu-header";
import MenuOptions from "@/component/global/menu-options";
import WalletDisplay from "@/component/global/wallet-display";
import { Button } from "@/components/ui/button";
import React from "react";
import deposit_icon from "@/../public/Deposit.png";
import withdraw_icon from "@/../public/Withdrawal.png";
import personItem_icon from "@/../public/EditPersonal1.png";
import payments_icon from "@/../public/LinkCard1.png";
import contact_icon from "@/../public/ContactUs1.png";
import notification_icon from "@/../public/Notifications1.png";

const Menu = () => {
  return (
    <div className="bg-[#EDECFE]">
      <MenuHeader />
      <div className="w-[90%] mx-auto">
        <WalletDisplay />
        <div className="flex flex-col !pt-3 gap-4">
          <MenuOptions
            heading="My Financial"
            links={[
              { LinkLabel: "Deposit", path: "deposit", icon: deposit_icon },
              { LinkLabel: "Withdraw", path: "withdraw", icon: withdraw_icon },
            ]}
          />
          <MenuOptions
            heading="My Detail"
            links={[
              {
                LinkLabel: "Personal Information",
                path: "profileItem",
                icon: personItem_icon,
              },
              {
                LinkLabel: "Payment Methods",
                path: "paymentMethods",
                icon: payments_icon,
              },
            ]}
          />
          <MenuOptions
            heading="Other"
            links={[
              {
                LinkLabel: "Contact Us",
                path: "contact-us",
                icon: contact_icon,
              },
              {
                LinkLabel: "Notifications",
                path: "notifications",
                icon: notification_icon,
              },
            ]}
          />
        </div>
        <Button className="w-full my-8 bg-transparent hover:bg-transparent text-[#323233] text-base font-bold border border-[#A69B99] p-6">
          Log out
        </Button>
      </div>
    </div>
  );
};

export default Menu;
