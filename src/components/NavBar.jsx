"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export const links = [
  {
    name: "Acasa",
    path: "/",
  },
  {
    name: "Servicii",
    path: "/servicii",
  },
  {
    name: "Contact",
    path: "/contact",
  },

];

const NavBar = ({ linkStyles, containerStyles }) => {
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
                ? " font-semibold underline decoration-accent decoration-4 underline-offset-[1.8rem]"
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
