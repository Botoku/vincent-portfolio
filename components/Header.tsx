'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { LangSwitch } from "./LangSwitch";
import { useLang } from "@/utils/LangContext";

const Header = () => {
  const {lang} = useLang()
  return (
    <div className="flex justify-between items-center px-3 w-[90%] mx-auto mt-2">
      <div className="relative w-10 h-10 rounded overflow-hidden">
        <Link href={"/"}>
          <Image  src="/logo-black.png" fill  alt="logo"/>
        </Link>
      </div>
      <ul className="flex justify-between md:w-1/3">
        <li>
          <Link href="/#experience">{lang === "en" ? "Experience" : "Experiencia"}</Link>
        </li>
        <li>
          <Link href="/#work">{lang === "en" ? "My Work" : "Mi trabajo"}</Link>
        </li>
        <li>
          <Link href="/#contact">{lang === "en" ? "Lets Talk" : "Hablemos"}</Link>
        </li>
      </ul>
      <LangSwitch />
    </div>
  );
};

export default Header;
