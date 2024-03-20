import React, { Component } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../utils/motion";
import { useInView } from "react-intersection-observer";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    const { ref, inView } = useInView({
      triggerOnce: true, // Only trigger animation once
      threshold: 0.39, //Trigger animation when 39% of the component is visible
    });
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        animate={inView ? "show" : "hidden"}
        viewport={{ once: true, amount: 0.39 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-0 `}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
