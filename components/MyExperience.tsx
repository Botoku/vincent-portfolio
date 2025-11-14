import React from "react";

const MyExperience = () => {
  return (
    <div className="" id="experience">
      <div className="w-[90%] mx-auto mb-20">
        <h2 className="text-center text-2xl font-bold">My Experience</h2>
        <div className="md:flex gap-7 text-sm mt-10">
          <div className="md:w-1/2">
            <div className="flex gap-2 mb-4">
              <p className="font-bold">LetsWooHoo</p>
              <p className="italic">Nov 2023 - Present</p>
              <p className="text-xs my-auto ml-auto">
                Full Stack Developer (Hybrid/Mexico)
              </p>
            </div>
            <div>
              <p className="text-sm">
                Ive been the sole developer responsible for creation of multiple
                Next.js websites. Working with various teams and designers we
                implemented modern UI designs optimized performance, improved
                SEO, and integrated backend functionalities where needed. I have
                managed end-to-end deployment and ensured smooth transitions
                with minimal downtime.
              </p>

              <ul className="list-disc mt-5">
                <li className="mb-1">
                  Converted legacy WordPress sites into performant, scalable
                  Next.js applications.
                </li>
                <li className="mb-1">
                  Collaborated closely with designers to bring Figma/Adobe XD
                  layouts to life with React and Tailwind CSS.
                </li>
                <li className="mb-1">
                  Improved site speed, Core Web Vitals, and SEO through image
                  optimization,lazy loading, and server-side rendering.
                </li>
                <li className="mb-1">
                  Integrated Sanity CMS for content management.
                </li>
                <li className="mb-1">
                  Deployed projects using Vercel for Next.js apps and AWS for
                  wordpress.
                </li>
                <li className="mb-1">
                  Ensured responsive and accessible designs across devices.
                </li>
                <li className="mb-1">
                  Integrated Node.js and MongoDB backend.
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
