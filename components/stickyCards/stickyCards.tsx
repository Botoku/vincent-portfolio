"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";

gsap.registerPlugin(ScrollTrigger);
const StickyCards = () => {
  const cardData = [
    { text: "TEXT1", color: "blue" },
    { text: "TEXT13", color: "red" },
    { text: "TEXT18", color: "green" },
    { text: "2nD to last", color: "green" },
    { text: "LAST", color: "green" },
  ];

  const container = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const stickyCards = document.querySelectorAll(".sticky-card");
      stickyCards.forEach((card, index) => {
        if (index < stickyCards.length - 1) {
          ScrollTrigger.create({
            trigger: card,
            start: "top top",
            endTrigger: stickyCards[stickyCards.length - 1],
            end: "top top",
            pin: true,
            pinSpacing: false,
          });
        }
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className="sticky-cards relative bg-full h-full">
      <div
        className={`sticky-card flex justify-center items-center   relative w-full h-svh  will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-opacity after:z-2 after:pointer-events-none`}
      >
        <div className="bg-purpleN-600 w-[85%] rounded-2xl mx-auto h-[80%] flex items-center">
          <div className="flex gap-5 w-[90%] mx-auto h-[95%]">
            <div className="w-1/2">
              {" "}
              <p className="text-bold text-xl mb-2">letswoohoo Website</p>
              <p className="italic text-sm">
                A fully custom, high-performance website designed to showcase
                rich media content — including videos, animations, and imagery —
                while collecting and managing client leads efficiently.
              </p>
              <div className="">
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold text-sm">What I did:</p>
                  <li>
                    Developed the website from scratch using Next.js and
                    Tailwind CSS, ensuring a fast, responsive, and visually
                    appealing design.
                  </li>
                  <li>
                    Implemented smooth animations with GSAP to create an
                    engaging and interactive user experience.
                  </li>
                  <li>
                    Built a lead collection system using Node.js and Nodemailer
                    that automatically sends form submissions to the company’s
                    email.
                  </li>
                  <li>
                    Integrated MongoDB to securely store leads and developed a
                    dashboard to display and manage them in real time.
                  </li>
                  <li>
                    Optimized the site for speed, accessibility, and SEO,
                    ensuring excellent performance across all devices.
                  </li>
                </ul>
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold  text-sm">Outcome:</p>
                  <li>
                    Streamlined the lead management process by centralizing
                    submissions in one dashboard while delivering a modern, dynamic website with seamless content
                    updates and engaging animations.
                  </li>

                </ul>
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <div className="relative w-full h-[300px] max-h-[300px] overflow-hidden rounded-2xl">
                <Image
                  unoptimized
                  alt="lets woohoo gif"
                  src="https://cdn.sanity.io/images/57xt2rom/production/0d11160825088f23791ca045c29712af149d3191-800x349.gif"
                  fill
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="mt-4 text-xs">
                <p className="text-sm  font-bold">Tech Stack</p>
                <ul className="flex gap-2 italic">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <a className="text-sm  border-b border-golden-yellow" href="https://www.letswoohoo.com/" target="_blank">
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sticky-card flex justify-center items-center   relative w-full h-svh  will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-opacity after:z-2 after:pointer-events-none`}
      >
        <div className="bg-purpleN-600 w-[85%] rounded-2xl mx-auto h-[80%] flex items-center">
          <div className="flex gap-5 w-[90%] mx-auto h-[95%]">
            <div className="w-1/2">
              {" "}
              <p className="text-bold text-xl mb-4">grupolvt Website</p>
              <p className="italic text-sm">
                A fully custom, high-performance website designed to showcase
                rich media content — including videos, animations, and imagery —
                while collecting and managing client leads efficiently.
              </p>
              <div className="">
                <ul className="my-3 text-sm list-disc">
                  <p className="font-bold text-base">What I did:</p>
                  <li>
                    Developed the website from scratch using Next.js and
                    Tailwind CSS, ensuring a fast, responsive, and visually
                    appealing design.
                  </li>
                  <li>
                    Connected the website to Sanity CMS, allowing the client to
                    easily update text, images, and videos without coding.
                  </li>
                  <li>
                    Implemented smooth animations with GSAP to create an
                    engaging and interactive user experience.
                  </li>
                  <li>
                    Built a lead collection system using Node.js and Nodemailer
                    that automatically sends form submissions to the company’s
                    email.
                  </li>
                  <li>
                    Integrated MongoDB to securely store leads and developed a
                    dashboard to display and manage them in real time.
                  </li>
                  <li>
                    Optimized the site for speed, accessibility, and SEO,
                    ensuring excellent performance across all devices.
                  </li>
                </ul>
                <ul className="my-3 text-sm list-disc">
                  <p className="font-bold  text-base">Outcome:</p>
                  <li>
                    Streamlined the lead management process by centralizing
                    submissions in one dashboard.
                  </li>
                  <li>
                    Delivered a modern, dynamic website with seamless content
                    updates and engaging animations.
                  </li>
                  <li>
                    Improved user engagement and ease of maintenance for the
                    client.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <div className="relative w-full h-[300px] max-h-[300px] overflow-hidden rounded-2xl">
                <Image
                  unoptimized
                  alt="grupolvt gif"
                  src="https://cdn.sanity.io/images/57xt2rom/production/b90011da98842f4e3715c5fd62139d7a53d8801e-800x351.gif"
                  fill
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="mt-4">
                <p className="text-lg  font-bold">Tech Stack</p>
                <ul className="flex gap-2 italic">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Javascript</li>
                  <li>Tailwind</li>
                  <li>MongoDB</li>
                  <li>NextAuth</li>
                  <li>Node.js</li>
                </ul>
              </div>
              <a href="https://www.letswoohoo.com/" target="_blank">
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sticky-card flex justify-center items-center   relative w-full h-svh  will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-opacity after:z-2 after:pointer-events-none`}
      >
        <div className="bg-purpleN-600 w-[85%] rounded-2xl mx-auto h-[80%] flex items-center">
          <div className="flex gap-5 w-[90%] mx-auto h-[95%]">
            <div className="w-1/2">
              {" "}
              <p className="text-bold text-xl mb-4">Tulip Pictures Website</p>
              <p className="italic text-sm">
                A fully custom, high-performance website designed to showcase
                rich media content — including videos, animations, and imagery —
                while collecting and managing client leads efficiently.
              </p>
              <div className="">
                <ul className="my-3 text-sm list-disc">
                  <p className="font-bold text-base">What I did:</p>
                  <li>
                    Developed the website from scratch using Next.js and
                    Tailwind CSS, ensuring a fast, responsive, and visually
                    appealing design.
                  </li>
                  <li>
                    Connected the website to Sanity CMS, allowing the client to
                    easily update text, images, and videos without coding.
                  </li>
                  <li>
                    Implemented smooth animations with GSAP to create an
                    engaging and interactive user experience.
                  </li>
                  <li>
                    Built a lead collection system using Node.js and Nodemailer
                    that automatically sends form submissions to the company’s
                    email.
                  </li>
                  <li>
                    Integrated MongoDB to securely store leads and developed a
                    dashboard to display and manage them in real time.
                  </li>
                  <li>
                    Optimized the site for speed, accessibility, and SEO,
                    ensuring excellent performance across all devices.
                  </li>
                </ul>
                <ul className="my-3 text-sm list-disc">
                  <p className="font-bold  text-base">Outcome:</p>
                  <li>
                    Streamlined the lead management process by centralizing
                    submissions in one dashboard.
                  </li>
                  <li>
                    Delivered a modern, dynamic website with seamless content
                    updates and engaging animations.
                  </li>
                  <li>
                    Improved user engagement and ease of maintenance for the
                    client.
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-1/2">
              {" "}
              <div className="relative w-full h-[300px] max-h-[300px] overflow-hidden rounded-2xl">
                <Image
                  unoptimized
                  alt="Tulip gif"
                  src="https://cdn.sanity.io/images/57xt2rom/production/9a5842b3bfc468110f89611242d3be82be22661a-800x348.gif"
                  fill
                  className="object-cover w-full h-auto"
                />
              </div>
              <div className="mt-4">
                <p className="text-lg  font-bold">Tech Stack</p>
                <ul className="flex gap-2 italic">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <a href="https://www.letswoohoo.com/" target="_blank">
                View Website
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default StickyCards;
