import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full border-b-[0.5px] border-black/50 py-[12px] transition-all duration-100 ease-in-out max-md:px-[25px] md:max-xl:px-[40px] xl:px-[55px]  backdrop-blur-md filter bg-white/5">
      <div className="flex items-center justify-between">
        <Logo />
        <NavBar containerStyles="hidden xl:flex gap-x-12 mr-24" />
      </div>
    </div>
  );
};

export default Header;
