import { createLocalizedPathnamesNavigation } from "next-intl/navigation";

export const pathnames = {
  "/servicii": {
    ro: "/servicii",
    en: "/services",
  },
};

export const { Link, redirect, usePathname, useRouter, getPathname } =
  createLocalizedPathnamesNavigation({  pathnames });
