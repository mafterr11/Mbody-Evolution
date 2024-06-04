import { useTranslations } from "next-intl";

const Intro = () => {
  const t = useTranslations("Servicii");
  return (
    <div className="mb-12 xl:mb-24">
      <div className="bg-servicii relative h-64 w-full overflow-hidden bg-[center_top_-20rem] xl:h-[28rem]">
        <div className="absolute inset-0 border-b border-accent bg-black/60" />
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center gap-y-4">
          <h2 className="font-medium">{t("title")}</h2>
          <h3 className="flex flex-row items-center justify-center font-bold text-accent">
            {t("subtitle")}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Intro;
