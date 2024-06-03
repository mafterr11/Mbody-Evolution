import React from "react";
import { Dumbbell } from "lucide-react";
import Image from "next/image";
import { useTranslations } from "next-intl";
const Despre = () => {
  const t = useTranslations("Despre");
  return (
    <div className="container py-[8rem]">
      <h2 className="flex items-center justify-center gap-x-3 md:justify-start">
      {t("title")} <Dumbbell size={45} className="text-accent" />{" "}
      </h2>
      {/* Separator */}
      <span className="mb-20 mt-2 block border-b-4 border-accent xl:w-[25rem]" />
      {/* Text */}
      <div className="flex flex-col-reverse items-start gap-x-24 gap-y-10 md:flex-row">
        <div className="flex max-w-3xl flex-col gap-y-8 xl:gap-y-14">
          <p>
            <span className="text-accent">&#9679;</span> {t("p1")}
          </p>
          <p>
            <span className="text-accent">&#9679;</span> {t("p2")}
          </p>
          <p>
            {" "}
            <span className="text-accent">&#9679;</span> {t("p3.1")}{" "}
            <span className="bg-accent px-1 font-semibold text-white">
            {t("p3.2")}
            </span>{" "}
            {t("p3.3")}
          </p>
          <p>
            <span className="text-accent">&#9679;</span> {t("p4.1")}{" "}
            <span className="bg-accent px-1 font-semibold text-white">
            {t("p4.2")}
            </span>
            {t("p4.3")}
          </p>
        </div>
        <div className="">
          <Image
            src="/about.jpg"
            width={800}
            height={800}
            alt="about section"
            className="rounded-br-[50%] rounded-tl-[50%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Despre;
