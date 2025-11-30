"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import React, { useRef } from "react";
import { useLang } from "@/utils/LangContext";

gsap.registerPlugin(ScrollTrigger);
const StickyCards = () => {
  const cardData = [
    { text: "TEXT1", color: "blue" },
    { text: "TEXT13", color: "red" },
    { text: "TEXT18", color: "green" },
    { text: "2nD to last", color: "green" },
    { text: "LAST", color: "green" },
  ];
  const { lang } = useLang();

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

        if(index < stickyCards.length - 1) {
           ScrollTrigger.create({
            trigger: stickyCards[index + 1],
            start: "top bottom",
            end: "top top",
            onUpdate: (self) => {
              const progress = self.progress
              const scale = 1 - progress *.25
              const rotation = (index  %  2 === 0 ? 5 : -5) * progress
              const afterOpacity = progress

              gsap.set(card, {
                scale: scale,
                rotation: rotation,
                "--after-opacity":afterOpacity
              })
            }
           })
        }
      });
    },
    { scope: container }
  );

  return (
    <div
      id="work"
      ref={container}
      className="sticky-cards relative bg-full h-full"
    >
      <p className="text-2xl text-center font-bold">
        {lang === "en" ? "My Work" : "Mi Trabajo"}
      </p>
      <div
        className={`sticky-card after:opacity-(--after-opacity,0)  flex justify-center items-center   relative w-full h-svh  will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-opacity after:z-2 after:pointer-events-none`}
      >
        <div className="bg-purpleN-600 border w-[85%] rounded-2xl mx-auto h-[80%] flex items-center">
          <div className="md:flex gap-5 w-[90%] mx-auto h-[95%]">
            <div className="md:w-1/2">
              {" "}
              <p className="text-bold text-xl mb-2">
                {lang === "en"
                  ? "Letswoohoo Website"
                  : "Sitio web de Letswoohoo"}
              </p>
              <p className="italic text-sm">
                {lang === "en"
                  ? "A fully custom, high-performance website designed to showcase rich media content — including videos, animations, and imagery — while collecting and managing client leads efficiently."
                  : "Un sitio web totalmente personalizado y de alto rendimiento, diseñado para mostrar contenido multimedia —incluyendo videos, animaciones e imágenes— mientras recopila y gestiona clientes potenciales de manera eficiente."}
              </p>
              <div className="">
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold text-sm">
                    {lang === "en" ? "What I did:" : "Lo que hice:"}
                  </p>
                  <li>
                    {lang === "en"
                      ? "Developed the website from scratch using Next.js and Tailwind CSS, ensuring a fast, responsive, and visually appealing design."
                      : "Desarrollé el sitio web desde cero utilizando Next.js y Tailwind CSS, garantizando un diseño rápido, responsivo y visualmente atractivo."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Implemented smooth animations with GSAP to create an engaging and interactive user experience."
                      : "Implementé animaciones fluidas con GSAP para crear una experiencia de usuario más dinámica e interactiva."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Built a lead collection system using Node.js and Nodemailer that automatically sends form submissions to the company’s email."
                      : " Construí un sistema de captura de leads con Node.js y Nodemailer que envía automáticamente los formularios al correo de la empresa."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Integrated MongoDB to securely store leads and developed a dashboard to display and manage them in real time."
                      : "Integré MongoDB para almacenar leads de forma segura y desarrollé un dashboard para visualizarlos y gestionarlos en tiempo real."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Optimized the site for speed, accessibility, and SEO, ensuring excellent performance across all devices."
                      : "Optimicé el sitio en velocidad, accesibilidad y SEO, garantizando un excelente rendimiento en todos los dispositivos."}
                  </li>
                </ul>
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold  text-sm">
                    {lang === "en" ? "Outcome:" : "Resultado:"}
                  </p>
                  <li>
                    {lang === "en"
                      ? "Streamlined the lead management process by centralizing submissions in one dashboard while delivering a modern, dynamic website with seamless content updates and engaging animations."
                      : "Optimicé el proceso de gestión de leads al centralizar todas las solicitudes en un solo dashboard, entregando al mismo tiempo un sitio moderno, dinámico y con actualizaciones de contenido fluidas y animaciones atractivas."}
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
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
                <p className="text-sm  font-bold">
                  {lang === "en" ? "Tech Stack" : "Tecnologías utilizadas"}
                </p>
                <ul className="flex gap-2 italic">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <a
                className="text-sm  border-b "
                href="https://www.letswoohoo.com/"
                target="_blank"
              >
                {lang === "en" ? "View Website" : "Ver Sitio"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sticky-card after:opacity-(--after-opacity,0) flex justify-center items-center   relative w-full h-svh  will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-opacity after:z-2 after:pointer-events-none`}
      >
        <div className="bg-purpleN-600 border w-[85%] rounded-2xl mx-auto h-[80%] flex items-center">
          <div className="md:flex gap-5 w-[90%] mx-auto h-[95%]">
            <div className="md:w-1/2">
              {" "}
              <p className="text-bold text-xl mb-2">
                {lang === "en" ? "grupolvt Website" : "Sitio web de Grupolvt"}
              </p>
              <p className="italic text-sm">
                {lang === "en"
                  ? "A complete redesign and rebuild of a company website that was previously built on WordPress and difficult to navigate. The new version delivers a smoother, faster experience with modern animations and includes secure internal tools for company  members."
                  : "Un rediseño y reconstrucción completa de un sitio web corporativo que anteriormente estaba hecho en WordPress y era difícil de navegar. La nueva versión ofrece una experiencia más fluida y rápida, con animaciones modernas e incluye herramientas internas seguras para los miembros de la empresa."}
              </p>
              <div className="">
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold text-sm">
                    {lang === "en" ? "What I did:" : "Lo que hice:"}
                  </p>
                  <li>
                    {lang === "en"
                      ? "Migrated the entire website from WordPress to Next.js, improving performance, user experience, and maintainability."
                      : "Migré todo el sitio de WordPress a Next.js, mejorando el rendimiento, la experiencia de usuario y la mantenibilidad."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Implemented GSAP animations throughout the site to create smooth transitions, dynamic interactions, and a polished feel."
                      : "Implementé animaciones con GSAP en todo el sitio para crear transiciones suaves, interacciones dinámicas y una sensación más profesional."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Developed secure internal tools behind a NextAuth authentication system, allowing company members to log in and access private features."
                      : "Desarrollé herramientas internas seguras con un sistema de autenticación basado en NextAuth, permitiendo que los miembros de la empresa inicien sesión y accedan a funciones privadas."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Integrated MongoDB to handle data storage for internal tools, enabling members to submit and view information in real time."
                      : "Integré MongoDB para gestionar el almacenamiento de datos de las herramientas internas, permitiendo que los miembros envíen y visualicen información en tiempo real."}
                  </li>
                  {/*
                  <li className="hidden md:block">
                    {lang === "en"
                      ? "Ensured SEO optimization, performance tuning, and accessibility, maintaining fast load times despite heavy animations."
                      : "Optimizé el sitio en SEO, rendimiento y accesibilidad, manteniendo tiempos de carga rápidos a pesar de las animaciones pesadas."}
                  </li> */}
                </ul>
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold  text-sm hidden md:block">
                    {" "}
                    {lang === "en" ? "Outcome:" : "Resultado:"}
                  </p>
                  <li>
                    {lang === "en"
                      ? "Transformed an outdated, difficult-to-use WordPress site into a fast, visually engaging Next.js website with smooth GSAP animations and secure internal tools powered by NextAuth and MongoDB. The redesign improved team efficiency, enhanced user experience, and led to a significant increase in incoming leads."
                      : "  Transformé un sitio de WordPress anticuado y difícil de usar en un sitio Next.js rápido, visualmente atractivo y con animaciones fluidas creadas con GSAP, además de herramientas internas seguras impulsadas por NextAuth y MongoDB. El rediseño mejoró la eficiencia del equipo, elevó la experiencia de usuario y generó un aumento significativo en los leads entrantes."}
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
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
              <div className="mt-4 text-xs">
                <p className="text-sm  font-bold">
                  {lang === "en" ? "Tech Stack" : "Tecnologías utilizadas"}
                </p>
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
              <a
                className="text-sm  border-b "
                href="https://www.letswoohoo.com/"
                target="_blank"
              >
                {lang === "en" ? "View Website" : "Ver Sitio"}
              </a>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`sticky-card flex justify-center items-center   relative w-full h-svh  will-change-transform after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:transition-opacity after:z-2 after:pointer-events-none`}
      >
        <div className="bg-purpleN-600 border w-[85%] rounded-2xl mx-auto h-[80%] flex items-center">
          <div className="md:flex gap-5 w-[90%] mx-auto h-[95%]">
            <div className="md:w-1/2">
              {" "}
              <p className="text-bold text-xl mb-2">
                {lang === "en"
                  ? "Tulip Pictures Website"
                  : "Sitio web de Tulip Pictures"}
              </p>
              <p className="italic text-sm">
                {lang === "en"
                  ? "A visually rich website built to showcase a movie distribution company’s catalog. The platform highlights films through interactive layouts, a full-page home slider, and easy contentmanagement for the client."
                  : "Un sitio web visualmente atractivo creado para mostrar el catálogo de una distribuidora de cine. La plataforma destaca las películas mediante diseños interactivos, un slider de inicio a pantalla completa y una gestión de contenido sencilla para el cliente."}
              </p>
              <div className="">
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold text-sm">
                    {" "}
                    {lang === "en" ? "What I did:" : "Lo que hice:"}
                  </p>
                  <li>
                    {lang === "en"
                      ? "Developed the website using Next.js for fast performance, smooth navigation, and SEO-friendly architecture."
                      : "Desarrollé el sitio utilizando Next.js para lograr un rendimiento rápido, navegación fluida y una arquitectura optimizada para SEO."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Implemented a full-page home slider to feature highlighted movies in a dynamic and cinematic way."
                      : "Implementé un slider de inicio a pantalla completa para destacar las películas principales de forma dinámica y cinematográfica."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Created multiple portfolio sections for different categories of films, allowing visitors to explore each project easily."
                      : "Creé múltiples secciones de portafolio para diferentes categorías de películas, permitiendo a los visitantes explorar cada proyecto fácilmente."}
                  </li>
                  <li>
                    {lang === "en"
                      ? "Integrated Sanity CMS, enabling the client to effortlessly update movie posters, trailers, and details without needing a developer."
                      : "Integré Sanity CMS, permitiendo al cliente actualizar pósters, tráileres y detalles de películas sin necesidad de un desarrollador."}
                  </li>
                </ul>
                <ul className="my-3 text-xs list-disc">
                  <p className="font-bold  text-sm">
                    {lang === "en" ? "Outcome:" : "Resultado:"}
                  </p>
                  <li>
                    {lang === "en"
                      ? "Delivered a modern, easy-to-manage platform that keeps the company’s movie portfolio up to date, enhances user engagement through animations and performance optimization, and reflects the brand’s cinematic identity."
                      : "Entregué una plataforma moderna y fácil de administrar que mantiene el portafolio de películas siempre actualizado, mejora el engagement del usuario mediante animaciones y optimización de rendimiento, y refleja la identidad cinematográfica de la marca."}
                  </li>
                </ul>
              </div>
            </div>
            <div className="hidden md:block w-1/2">
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
                <p className="text-sm  font-bold">
                  {lang === "en" ? "Tech Stack" : "Tecnologías utilizadas"}
                </p>
                <ul className="flex gap-2 italic">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Typescript</li>
                  <li>Tailwind</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <a
                className="text-sm  border-b "
                href="https://www.letswoohoo.com/"
                target="_blank"
              >
                {lang === "en" ? "View Website" : "Ver Sitio"}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyCards;


