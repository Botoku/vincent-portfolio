"use client";
import { useLang } from "@/utils/LangContext";
import React from "react";

const MyExperience = () => {
  const { lang } = useLang();

  return (
    <div className="" id="experience">
      <div className="w-[90%] mx-auto mb-20">
        <h2 className="text-center text-2xl font-bold">
          {lang === "en" ? "My Experience" : "Mi Experiencia"}
        </h2>
        <div className="md:flex gap-7 text-sm mt-10">
          <div className="md:w-1/2">
            <div className="flex gap-2 mb-4">
              <p className="font-bold">LetsWooHoo</p>
              <p className="italic">Nov 2023 - Present</p>
              <p className="text-xs my-auto ml-auto">
                {lang === "en"
                  ? "Full Stack Developer (Hybrid/Mexico)"
                  : "Desarrollador Full Stack (Híbrido/México)"}
              </p>
            </div>
            <div>
              <p className="text-sm">
                {lang === "en"
                  ? "  Ive been the sole developer responsible for creation of multiple Next.js websites. Working with various teams and designers we implemented modern UI designs optimized performance, improved SEO, and integrated backend functionalities where needed. I have managed end-to-end deployment and ensured smooth transitions with minimal downtime."
                  : "He sido el único desarrollador responsable de la creación de varios sitios web con Next.js. Trabajando con diversos equipos y diseñadores, implementamos diseños de interfaz de usuario modernos, optimizamos el rendimiento, mejoramos el SEO e integramos funcionalidades de backend donde fue necesario. Gestioné el despliegue de principio a fin y aseguré transiciones fluidas con un tiempo de inactividad mínimo."}
              </p>

              <ul className="list-disc mt-5">
                <li className="mb-1">
                  {lang === "en"
                    ? "Converted legacy WordPress sites into performant, scalable Next.js applications."
                    : "Convertí sitios antiguos de WordPress en aplicaciones Next.js más rápidas y escalables."}
                </li>
                <li className="mb-1">
                  {lang === "en"
                    ? "Collaborated closely with designers to bring Figma/Adobe XD layouts to life with React and Tailwind CSS."
                    : "Trabajé en colaboración con diseñadores para implementar diseños de Figma/Adobe XD en interfaces desarrolladas con React y Tailwind CSS."}
                </li>
                <li className="mb-1">
                  {lang === "en"
                    ? "Improved site speed, Core Web Vitals, and SEO through image optimization,lazy loading, and server-side rendering."
                    : "Mejora de la velocidad del sitio, las métricas web principales y el SEO mediante la optimización de imágenes la carga diferida y el renderizado del lado del servidor."}
                </li>
                <li className="mb-1">
                  {lang === "en"
                    ? "Integrated Sanity CMS for content management."
                    : "Implementé e integré Sanity CMS para la administración de contenidos."}
                </li>
                <li className="mb-1">
                  {lang === "en"
                    ? "Deployed projects using Vercel for Next.js apps and AWS for wordpress."
                    : "Desplegué proyectos utilizando Vercel para aplicaciones Next.js y AWS para sitios basados en WordPress."}
                </li>
                <li className="mb-1">
                  {lang === "en"
                    ? "Ensured responsive and accessible designs across devices."
                    : "Garantizó diseños adaptables y accesibles en todos los dispositivos."}
                </li>
                <li className="mb-1">
                  {lang === "en"
                    ? "Integrated Node.js and MongoDB backend."
                    : "Backend integrado con Node.js y MongoDB."}
                </li>
              </ul>
            </div>
          </div>
          <div className="text-sm mt-10 md:mt-0 md:w-1/2">
            <div className="flex gap-2 mb-4">
              <p className="font-bold">Team Croco</p>
              <p className="italic">July 2022 - Nov 2023</p>
              <p className="text-xs my-auto ml-auto">
                Front-End Developer (Remote)
              </p>
            </div>
            <div className="">
              <p>
                Collaborated with a remote team of 4 developers to implement and
                test design variations on live websites using a jQuery-based A/B
                testing tool. Integrated custom JavaScript snippets and event
                tracking to analyze user behavior through Google Analytics.
              </p>
              <ul className="list-disc  mt-5">
                <li className="mb-1">
                  Implemented and managed multiple A/B tests to optimize user
                  flows, resulting in improved conversion rates and reduced
                  bounce rates.
                </li>
                <li className="mb-1">
                  Enhanced UI/UX by improving layouts and interactive elements,
                  making navigation more intuitive for users.
                </li>
                <li className="mb-1">
                  Diagnosed and resolved user experience bottlenecks by
                  analyzing click heatmaps and session data.
                </li>
                <li className="mb-1">
                  Worked closely with marketing and design teams to translate
                  analytical insights into actionable design improvements.
                </li>
                <li className="mb-1">
                  Configured Google Analytics events to track key user
                  interactions and measure test performance.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyExperience;
