import { useTranslations } from "next-intl";

const Intro = () => {
  const t = useTranslations("Servicii");
  return (
    <div>
      <div className="relative flex h-64 w-full flex-col items-center justify-center gap-y-4 overflow-hidden bg-servicii bg-[center_top_-20rem] xl:h-[28rem]">
        <div className="absolute inset-0 border-b border-accent bg-black/60" />
        <div className="relative text-center max-xl:pt-12">
          <h2 className="font-medium">{t("title")}</h2>
          <h3 className="flex flex-row items-center justify-center font-bold text-accent max-md:max-w-xs max-md:leading-8">
            {t("subtitle")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
