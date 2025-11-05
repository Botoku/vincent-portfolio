import Image from "next/image";
import Skills from "./Skills";

const Hero = () => {
  return (
    <div className="bg-purpleN-600  w-[95vw] h-full rounded-2xl flex justify-center items-center">
      <div className="h-[80%] w-[90%] mx-auto">
        <h1 className="hidden">Vincent Portfolio</h1>
        <p className="font-italiana text-center text-2xl mt-6">
          Botoku Vincent Babajide
        </p>
        <div className="md:flex justify-between items-center">
          <div className="md:w-1/3">
            <h2 className="text-center">About Me</h2>
            <p className="mb-3 text-sm">
              Hi, Im Vincent and I specialize in developing full-stack
              applications using React, Next.js, Node.js, and MongoDB. I enjoy
              building fast, responsive interfaces and robust backends, and I’m
              comfortable handling everything from RESTful APIs to database
              design and deployment on AWS or Vercel.
            </p>
         
          </div>
          <div className="md:w-1/3 flex  items-center justify-center">
            <div className="relative  max-w-[300px] rounded-lg  overflow-hidden">
              <Image
                width={589 / 4}
                height={837 / 4}
                alt="Vincent and a cat"
                src={"/profile2.jpg"}
              />
            </div>
          </div>
            <div>
              <Skills />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
