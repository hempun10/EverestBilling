"use client";
import FeatureCard from "@/components/shared/FeatureCard";
import React from "react";
import { featureData } from "@/constants/constants";
import Heading from "@/components/shared/Heading";
import { motion } from "framer-motion";
const FeaturesList = () => {
  return (
    <motion.div
      className="mt-32"
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.1 }}
    >
      <Heading FrontHeadText="Key" spanText="Features" descText="" />
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
          index={index}
          heading={feature.heading}
          desc={feature.desc}
          imgUrl={feature.imgUrl}
          textContainerClassName={feature.textContainerClassName}
          imgContainerClassName={feature.imgContainerClassName}
        />
      ))}
    </motion.div>
  );
};

export default FeaturesList;
