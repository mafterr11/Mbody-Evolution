// Link
import Link from "next/link";
// Icons
import { RiInstagramLine } from "react-icons/ri";

const Socials = () => {
  return (
    <div className="xs:text-2xl flex items-center gap-x-5 text-[1.7rem] lg:text-3xl xl:text-2xl">
      <Link
        href={"https://www.instagram.com/micky_bordeianu?igsh=MWpvOGFidzEydHBkaA=="}
        target="blank"
        className="flex items-center justify-center gap-x-2 transition-all duration-300 hover:scale-95"
      >
        <span className="text-xl text-accent">Insta</span>{" "}
        <RiInstagramLine size={35} />
      </Link>
    </div>
  );
};

export default Socials;
