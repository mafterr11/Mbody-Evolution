import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t-2 border-accent bg-[#0f0f0f] py-4">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-center">
          <div className="my-2 flex flex-col items-center justify-center gap-x-1 text-center xl:flex-row">
            <a href="https://myriad-tech.ro" target="_blank" className="hover">
              <span className="font-medium hover:font-semibold">
                Myriad Tech
              </span>
            </a>
            &copy; {currentYear} - {t("rights")}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
