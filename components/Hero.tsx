"use client";
import Image from "next/image";
import Skills from "./Skills";
import { useLang } from "@/utils/LangContext";

const Hero = () => {
  const { lang } = useLang();
  return (
    <div className="bg-purpleN-600  w-[95vw] md:h-[85%] rounded-2xl flex justify-center items-center">
      <div className="md:h-[80%] w-[90%] mb-3 md:mb-0 mx-auto">
        <h1 className="hidden">Vincent Portfolio</h1>
        <p className="font-italiana text-center text-2xl my-6">
          Botoku Vincent Babajide
        </p>
        <div className="md:flex justify-between items-center">
          <div className="md:w-1/3">
            <h2 className="text-center text-lg font-bold">
              {lang === "en" ? "About Me" : "Sobre mí"}
            </h2>
            <p className="mb-3 text-sm">
              {lang === "en"
                ? "I develop full-stack applications using React, Next.js, Node.js, and MongoDB and I also work with a range of AWS services."
                : "Desarrollo aplicaciones full-stack utilizando React, Next.js, Node.js y MongoDB y también trabajo con diversos servicios de AWS."}
              <br />
              <span>
                {lang === "en"
                  ? "For the non-technical"
                  : "Para los no técnicos"}
              </span>
              <br />
              {lang === "en"
                ? "I build websites that do more than just display information like a portfolio. These are full web applications—fast, interactive, and connected to powerful back-end systems. In simple terms, I build websites that do things, not just show things"
                : "Creo sitios web que hacen mucho más que solo mostrar información, como lo haría un portafolio. Son aplicaciones web completas: rápidas, interactivas y conectadas a sistemas de backend robustos. En pocas palabras, construyo sitios web que hacen cosas, no solo que muestran cosas."}
            </p>
          </div>
          <div className="md:w-1/3 flex  items-center justify-center">
            <div className=" mx-auto rounded-lg  overflow-hidden">
              <Image
                width={589 / 5}
                height={837 / 5}
                alt="Vincent and a cat"
                src={"/profile2.jpg"}
              />
            </div>
          </div>
          <div className="md:w-1/3">
            <Skills />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
