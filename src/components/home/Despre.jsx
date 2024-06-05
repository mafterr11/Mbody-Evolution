"use client";
import React, { useRef } from "react";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Despre = () => {
  const t = useTranslations("Despre");
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.registerPlugin(useGSAP, ScrollTrigger);
      gsap.fromTo(
        ".despre__heading",
        { scale: 0.7, y: -50 },
        {
          scale: 1,
          ease: "power2.inOut",
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.3,
          scrollTrigger: {
            trigger: ".despre__heading",
            start: "top bottom-=20%",
            toggleActions: "play none none none",
          },
        },
      );
      gsap.fromTo(
        ".despre__image",
        { scale: 0.3, y: -50 },
        {
          scale: 1,
          ease: "power2.inOut",
          y: 0,
          opacity: 1,
          duration: 2,
          scrollTrigger: {
            trigger: ".despre__heading",
            start: "top bottom-=20%",
            toggleActions: "play none none none",
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <div ref={container} className="container py-[8rem]">
      <div className="despre__heading opacity-0">
        <h2 className="flex items-center justify-center gap-x-3 md:justify-start">
          {t("title")} <Dumbbell size={45} className="text-accent" />{" "}
        </h2>
        {/* Separator */}
        <span className="mb-20 mt-2 block border-b-4 border-accent xl:w-[25rem]" />
      </div>
      {/* Text */}
      <div className="flex flex-col-reverse items-start gap-x-24 gap-y-10 md:flex-row">
        <div className="flex max-w-3xl flex-col gap-y-8 xl:gap-y-14">
          <p className="despre__heading opacity-0">
            <span className="text-accent">&#9679;</span> {t("p1")}
          </p>
          <p className="despre__heading opacity-0">
            <span className="text-accent">&#9679;</span> {t("p2")}
          </p>
          <p className="despre__heading opacity-0">
            {" "}
            <span className="text-accent">&#9679;</span> {t("p3.1")}{" "}
            <span className="bg-accent px-1 font-semibold text-white">
              {t("p3.2")}
            </span>{" "}
            {t("p3.3")}
          </p>
          <p className="despre__heading opacity-0">
            <span className="text-accent">&#9679;</span> {t("p4.1")}{" "}
            <span className="bg-accent px-1 font-semibold text-white">
              {t("p4.2")}
            </span>
            {t("p4.3")}
          </p>
        </div>
        <div className="despre__image opacity-0">
          <Image
            src="/about.jpg"
            width={800}
            height={800}
            alt="about section"
          />
        </div>
      </div>
    </div>
  );
};

export default Despre;
