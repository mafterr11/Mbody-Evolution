import { useTranslations } from "next-intl";
import React from "react";

const Programe = () => {
  const t = useTranslations("Servicii");
  return (
    <div className="container grid gap-x-40 pb-40 pt-12 max-md:gap-y-20 md:max-xl:max-w-[90%] md:grid-cols-2 md:max-xl:gap-x-12 xl:pt-24">
      <div>
        <h2 className="mb-2 max-md:text-center">ONLINE COACHING</h2>
        {/* Separator */}
        <span className="mb-20 mt-2 block border-b-4 border-accent max-md:mx-auto max-md:w-[90%] xl:w-[26rem]" />
        <div className="flex flex-col gap-y-4 max-md:text-center">
          <p>{t("online.1")}</p>

          <p>{t("online.2")} </p>
          <ul className="flex flex-col gap-y-4 md:gap-y-8">
            <li>
              <span className="text-accent">&#9679;</span> {t("online.3")}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("online.4")}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("online.5")}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("online.6")}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("online.7")}
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="mb-2 max-md:text-center">1-1 COACHING</h2>
        {/* Separator */}
        <span className="mb-20 mt-2 block border-b-4 border-accent max-md:mx-auto max-md:w-[80%] xl:w-[19rem]" />
        <div className="flex flex-col gap-y-4 max-md:text-center">
          <p>{t("one-one.1")}</p>
          <p>{t("one-one.2")} </p>
          <ul className="flex flex-col gap-y-4 md:gap-y-8">
            <li>
              <span className="text-accent">&#9679;</span> {t("one-one.3")}{" "}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("one-one.4")}
            </li>

            <li>
              <span className="text-accent">&#9679;</span> {t("one-one.5")}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("one-one.6")}
            </li>
            <li>
              <span className="text-accent">&#9679;</span> {t("one-one.7")}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Programe;
