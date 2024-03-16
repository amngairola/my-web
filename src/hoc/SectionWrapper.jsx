import React, { Component } from "react";
import { motion } from "framer-motion";
import { styles } from "../utils/styles";
import { staggerContainer } from "../utils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <motion.section>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
