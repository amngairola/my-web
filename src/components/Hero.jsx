import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto overflow-hidden`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi I'm <span className="text-[#915eff]"> Aman Gairola</span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            
          </p> */}
        </div>
      </div>

      <ComputersCanvas />

      <div
        className=" relative bottom-[5] sm:bottom-20 md:bottom-32  w-full flex justify-center items-center 
       "
      >
        <a href="#about" className="outline-none">
          <div className="w-9 h-20  rounded-full border-4 border-purple-300 flex justify-center items-center p-2 shadow-lg hover:shadow-xl transition duration-300">
            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-purple-600 "
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
