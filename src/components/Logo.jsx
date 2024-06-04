import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <h3>
        <span className="font-bold text-accent">MB</span>odyEvolution
      </h3>
    </Link>
  );
};

export default Logo;
