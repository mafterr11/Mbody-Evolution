import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative bg-hero bg-cover bg-no-repeat bg-center h-screen flex items-center justify-start">
            <div className="absolute bottom-0 right-32 z-30">
            <Image src="/hero2.png" width={400} height={400} alt="Hero Micky" quality={100} />
        </div>
      {/* Hero container */}
      <div className="relative p-36 z-30 flex items-center justify-center">
        {/* Left side */}
        <div>
          <h4 className="text-accent font-semibold">Transformă-ți stilul de viață</h4>
          <h1 className="mb-6 max-w-4xl">
            Atinge-ți obiectivele cu sesiuni de antrenament personalizate!
          </h1>
          <Button><span>Evoluția ta începe aici</span></Button>
        </div>
        {/* Right side */}
    
      </div>
      {/* Black overlay */}
      <div className="bg-black/65 absolute inset-0" />
    </div>
  );
};

export default Hero;
