"use client";
import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);
const Hero = () => {
  const t = useTranslations("Hero");
  const container = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });
      tl.fromTo(
        ".hero__heading",
        { scale: 0.5, translateY: -200, translateX: 50 },
        { scale: 1, opacity: 1, duration: 1.2, translateY: 0, translateX: 0 },
      );
      tl.fromTo(
        ".hero__subtitle",
        { scale: 0.5, x: -200 },
        { scale: 1, x: 0, opacity: 1, duration: 1 },
        "-=0.6",
      );
      tl.fromTo(
        ".hero__button",
        { scale: 0.5, translateY: -200, translateY: -100 },
        { scale: 1, opacity: 1, duration: 1.2, translateY: 0, translateX: 0 },
        "-=0.8",
      );
      tl.fromTo(
        ".hero__image",
        { y: 100, rotate: 45 },
        { y: 0, opacity: 1, duration: 1.1, rotate: 0 },
        "-=1",
      );
    },
    { scope: container },
  );

  return (
    <div
      ref={container}
      className="relative h-screen w-screen bg-hero bg-cover bg-center bg-no-repeat"
    >
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="flex flex-col items-center justify-center xl:justify-evenly xl:flex-row h-full xl:px-20 2xl:px-0">
        {/* Hero container */}
        <div className="relative z-30 max-xl:pt-20 max-xl:text-center">
          <h4 className="hero__subtitle font-semibold text-accent opacity-0">
            {t("subtitle")}
          </h4>
          <h1 className="hero__heading mb-6 px-2 opacity-0 md:max-xl:px-7 xl:max-w-4xl">
            {t("title")}
          </h1>
          <Link href={t("contact-link")}>
            <Button className="hero__button opacity-0">
              <span>{t("contact-button")}</span>
            </Button>
          </Link>
        </div>
        {/* Image */}
        <div className="z-30 hidden md:flex md:pt-24 shrink-0">
          <Image
            src="/hero2.jpg"
            width={500}
            height={500}
            alt="Hero Micky"
            quality={100}
            className="hero__image rounded-bl-[50%] rounded-tr-[50%] opacity-0 md:h-[450px] md:w-[400px] lg:h-[550px] lg:w-[500px] xl:max-2xl:w-[450px] xl:max-2xl:h-[500px] "
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
