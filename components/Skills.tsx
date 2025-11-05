import React from "react";

const Skills = () => {
  return (
    <div>
      <h2 className="text-center">Skills</h2>
      <div className="w-full">
        <div>
          <span>HTML</span>
          <span>CSS</span>
          <span>Javascript</span>
          <span>Next.js</span>
          <span>React</span>
        </div>
        <div className="w-[75%] bg-green-300 h-2" />
      </div>
      <div className="w-full">
        <div>
          <span>Tailwind</span>
          <span>Sanity CMS</span>

          <span>Mongo DB</span>
          <span>Node.js</span>
          <span>Typescript</span>
        </div>
        <div className="w-[60%] bg-yellow-300 h-2" />
      </div>
      <div className="w-full">
        <div>
          <span>AWS</span>
          <span>Three.js</span>
        </div>
        <div className="w-[60%] bg-red-300 h-2" />
      </div>
 
    </div>
  );
};

export default Skills;
