"use client";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = ({ linkStyles, containerStyles }) => {
  const t = useTranslations("Nav");
  const links = [
    {
      path: t("home.link"),
      name: t("home.name"),
    },
    {
      path: t("services.link"),
      name: t("services.name"),
    },
    {
      path: t("contact.link"),
      name: t("contact.name"),
    },
  ];
  const currentRoute = usePathname();
  return (
    <nav className={`${containerStyles}`}>
      {links.map((link, index) => {
        return (
          <Link
            key={index}
            href={link.path}
            className={`${linkStyles} ${
              currentRoute === link.path
                ? "font-semibold underline decoration-accent decoration-4 underline-offset-[1.8rem]"
                : "hover"
            } text-base capitalize`}
          >
            <span>{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default NavBar;
