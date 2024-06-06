import Intro from "@/components/servicii/Intro";
import Programe from "@/components/servicii/Programe";
import Particles from "@/components/ui/particles";
import React from "react";

const Servicii = () => {
  return (
    <>
      <Intro />
      <div className="relative">
        <Particles className="absolute inset-0" />
        <Programe />
      </div>
    </>
  );
};

export default Servicii;
