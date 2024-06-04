"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";
import { Send } from "lucide-react";

const Cta = () => {
  const t = useTranslations("Cta");

  return (
    <section className="bg-cta relative mb-44 bg-fixed bg-[bottom_-22rem_center] py-24">
      <div className="absolute inset-0 bg-black/50" />
      <div className="container relative mx-auto">
        <div className="flex flex-col items-center">
          <h2 className="mb-6 flex max-w-5xl flex-col items-center justify-center gap-y-2 text-center">
            {t("title")}
            <span className="text-3xl font-medium md:max-xl:text-4xl">
              {t("title2")}
            </span>
          </h2>
          <div>
            <Link href="/">
              <Button className="group gap-x-2">
              {t("button")}{" "}
                <Send
                  size={18}
                  className="transition-all duration-300 ease-in-out group-hover:rotate-[20deg]"
                />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
