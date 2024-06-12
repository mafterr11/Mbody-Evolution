import { useTranslations } from "next-intl";
import { FlipWords } from "../ui/flip-words";

const Intro = () => {
  const t = useTranslations("Servicii");
  const words = [
    t("subtitle.1"),
    t("subtitle.2"),
    t("subtitle.3"),
    t("subtitle.4")
  ];

  return (
    <div>
      <div className="relative flex h-64 w-full flex-col items-center justify-center gap-y-4 overflow-hidden bg-servicii bg-[center_top_-20rem] xl:h-[28rem]">
        <div className="absolute inset-0 border-b border-accent bg-black/60" />
        <div className="relative text-center max-xl:pt-12 flex flex-col justify-center items-center">
          <h2 className="font-medium">{t("title")}</h2>
          <div className="h-16 flex items-center justify-center"> {/* Set a fixed height for the h3 container */}
            <h3 className="font-bold text-accent max-md:leading-8">
            {t("subtitle.subtitle")} <FlipWords words={words} />
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
