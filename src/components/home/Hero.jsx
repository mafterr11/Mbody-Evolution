import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Link from "next/link";

const Hero = () => {
  const t = useTranslations("Hero");
  return (
    <div className="relative flex h-screen w-screen items-center justify-start bg-hero bg-cover bg-center bg-no-repeat max-md:pb-20">
      {/* Image */}
      <div className="hidden md:block md:absolute bottom-20 right-0 z-30 xl:right-52">
        <Image
          src="/hero2.jpg"
          width={500}
          height={500}
          alt="Hero Micky"
          quality={100}
          className=" rounded-tr-[50%] rounded-bl-[50%]"
        />
      </div>
      {/* Hero container */}
      <div className="relative z-30 max-md:text-center xl:p-36 max-md:pt-20">
        <h4 className="font-semibold text-accent">
         {t("subtitle")}
        </h4>
        <h1 className="mb-6 px-2 xl:max-w-4xl">
        {t("title")}
        </h1>
        <Link href={t("contact-link")}> 
        <Button>
          <span>{t("contact-button")}</span>
        </Button>
        </Link>
      </div>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black/65" />
    </div>
  );
};

export default Hero;
