"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useLang } from "@/utils/LangContext";


const Skills = () => {
  const {lang} = useLang()
  const barsRef = useRef<HTMLDivElement[]>([]);
  useGSAP(() => {
    const tl = gsap.timeline({ delay: 1 });

    // Animate each bar from width 0 to their final width
    tl.from(barsRef.current, {
      width: 0,
      duration: 1,
      ease: "bounce.out",
      stagger: 0.3, // adds a nice sequential effect
    });
  }, []);
  return (
    <div>
      <h2 className="text-center text-lg font-bold mb-4">{lang === "en" ? "Skills" : "Habilidades"}</h2>
      <div className="w-full">
        <div>
          <span className="mr-2  text-sm">HTML</span>
          <span className="mr-2  text-sm">CSS</span>
          <span className="mr-2  text-sm">Javascript</span>
          <span className="mr-2  text-sm">Next.js</span>
          <span className="mr-2  text-sm">React</span>
        </div>
        <div
          ref={(el) => {
            if (el) barsRef.current[0] = el;
          }}
          className="w-[75%] bg-green-300 h-1 rounded-full my-2"
        />
      </div>
      <div className="w-full">
        <div>
          <span className="mr-2  text-sm">Tailwind</span>
          <span className="mr-2  text-sm">Sanity CMS</span>
          <span className="mr-2  text-sm">Mongo DB</span>
          <span className="mr-2  text-sm">Node.js</span>
          <span className="mr-2  text-sm">Typescript</span>
        </div>
        <div
          ref={(el) => {
            if (el) barsRef.current[1] = el;
          }}
          className="w-[60%] bg-yellow-300 h-1 rounded-full my-2"
        />
      </div>
      <div className="w-full">
        <div>
          <span className="mr-2  text-sm">AWS</span>
          <span className="mr-2  text-sm">Three.js</span>
        </div>
        <div
          ref={(el) => {
            if (el) barsRef.current[2] = el;
          }}
          className="w-[60%] bg-red-300 h-1 rounded-full"
        />
      </div>
    </div>
  );
};

export default Skills;
