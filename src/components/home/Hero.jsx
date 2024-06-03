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
      <div className="absolute bottom-0 right-10 z-30 xl:right-0">
        <Image
          src="/hero-micky.png"
          width={1000}
          height={1000}
          alt="Hero Micky"
          quality={100}
        />
      </div>
      {/* Hero container */}
      <div className="relative z-30 max-md:text-center xl:p-36">
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
