import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LangSwitch } from "./LangSwitch";

const Header = () => {
  return (
    <div className="flex justify-between">
      <div className="relative w-10 h-10 rounded overflow-hidden">
        <Link href={"/"}>
          <Image  src="/logo-black.png" fill  alt="logo"/>
        </Link>
      </div>
      <ul className="flex justify-between md:w-1/3">
        <li>
          <Link href="/#experience">Experience</Link>
        </li>
        <li>
          <Link href="/#work">My Work</Link>
        </li>
        <li>
          <Link href="/#contact">Lets Talk</Link>
        </li>
      </ul>
      <LangSwitch />
    </div>
  );
};

export default Header;
