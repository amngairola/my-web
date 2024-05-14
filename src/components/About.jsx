import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
// import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[200px] w-full ">
      <motion.div
        variants={fadeIn("right", "spring", 0.7 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card  "
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertiary rounded-[20px] py-5 px-12
          min-h-[200px] flex justify-evenly items-center flex-col
          "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant(0.2)}>
        <p className={styles.sectionSubText}>Inroduction</p>
        <h2 className={styles.sectionHeadText}> overView</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", " ", 0.3, 1)}
        className="mt-1 text-secondary text-[17px] max-w-3xl  leading-[30px]"
      >
        B.Tech. Computer Science student specializing in full-stack development.
        Experienced in front-end and back-end solutions. Proficient in MERN
        stack – React, Node.js, Express.js, MongoDB. Skilled polyglot in C, C++,
        Java, and JavaScript. Committed to collaboration, problem-solving, and
        user-centric design. Actively engaged in tech community, and continuous
        learning. Let's connect and build something remarkable!
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
