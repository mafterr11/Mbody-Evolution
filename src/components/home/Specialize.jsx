"use client"
import { Apple, ChevronsUp, MoveRight } from "lucide-react";
import React from "react";
import FatLoss from "./FatLoss";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import ScrollTrigger from "gsap/src/ScrollTrigger";

const Specialize = () => {
  const t = useTranslations("Specialize");
  const container = useRef(null);
  
  useGSAP(
    () => {
      gsap.registerPlugin(useGSAP, ScrollTrigger);
      gsap.fromTo(
        ".circle__rotate",
        { rotate: 0 },
        {
          rotate: 360,
          ease: "power2.inOut",
          duration: 1,
          scrollTrigger: {
            trigger: ".circle__rotate",
            start: "top bottom-=60%",
            toggleActions: "play pause resume reverse",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="mb-56 mt-12 p-8 text-center">
      <h1 className="mb-4 text-4xl font-bold uppercase">{t("title")}</h1>
      <p className="mb-24 uppercase text-accent">{t("subtitle")}</p>
      <div className="container flex items-center justify-evenly max-md:flex-col max-md:space-y-8">
        {/* First */}
        <div className="flex flex-col items-center">
          <div className="circle__rotate relative mb-2 rounded-full border-[0.8rem] border-gray-200 p-5 circle__animate">
            <div className="absolute -right-2 top-5 h-5 w-12 rotate-[50deg] bg-[#191919]" />
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-accent">
              <Apple size={37} />
            </div>
          </div>
          <h4 className="mt-2">{t("1")}</h4>
        </div>
        {/* Arrow */}
        <div className="mb-12 text-4xl text-accent max-md:rotate-90">
          <MoveRight size={50} />
        </div>
        {/* Second */}
        <div className="flex flex-col items-center">
          <div className="circle__rotate relative mb-2 rounded-full border-[0.8rem] border-gray-200 p-5 circle__animate">
            <div className="absolute -right-2 top-5 h-5 w-12 rotate-[50deg] bg-[#191919]" />
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-accent">
              <ChevronsUp size={40} />
            </div>
          </div>
          <h4 className="mt-2">{t("2")}</h4>
        </div>
        {/* Arrow */}
        <div className="mb-12 text-4xl text-accent max-md:rotate-90">
          <MoveRight size={50} />
        </div>
        {/* Third */}
        <div className="flex flex-col items-center">
          <div className="circle__rotate relative mb-2 rounded-full border-[0.8rem] border-gray-200 p-5 circle__animate">
            <div className="absolute -right-2 top-5 h-5 w-12 rotate-[50deg] bg-[#191919]" />
            <div className="flex h-32 w-32 items-center justify-center rounded-full bg-accent">
              <FatLoss />
            </div>
          </div>
          <h4 className="mt-2">{t("3")}</h4>
        </div>
      </div>
    </div>
  );
};

export default Specialize;
