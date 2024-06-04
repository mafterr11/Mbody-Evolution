import React from "react";
import NavBar from "./NavBar";
import Logo from "./Logo";
import LocaleSwitcher from "./ui/LocalSwitcher";
import NavMobile from "./NavMobile";

const Header = () => {
  return (
    <div className="fixed left-0 right-0 top-0 z-50 w-full border-b-[0.5px] border-black/50 bg-white/5 py-[12px] filter backdrop-blur-md transition-all duration-100 ease-in-out max-md:px-[25px] md:max-xl:px-[40px] xl:px-[55px]">
      <div className="flex items-center justify-between">
        <Logo />
        <div className="flex items-center justify-center">
          <NavBar containerStyles="hidden xl:flex gap-x-12 mr-20" />
          <LocaleSwitcher styles="max-md:hidden"/>
        </div>
        <NavMobile
          containerStyles="xl:hidden"
          iconStyles="text-accent"
          linkStyles="uppercase"
        />
      </div>
    </div>
  );
};

export default Header;
