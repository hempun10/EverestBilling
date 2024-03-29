"use client";
import Image from "next/image";
import React from "react";
import { FeatureData } from "@/constants/constants";
import Feature from "../shared/Feature";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

const Features = () => {
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row gap-4 ">
      <motion.div
        className="img_conatiner  relative w-11/12 sm:w-1/2 shadow-2xl rounded-lg overflow-hidden "
        variants={slideIn("left", "stagger", 0.5, 0.7)}
      >
        <Image
          src={"/assets/benefit.png"}
          alt="img"
          priority
          width={500}
          height={500}
          quality={100}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className=" object-contain"
        />
      </motion.div>
      <div className="feature_container flex-1 max-h-[500px] order-1">
        <ul className="grid gap-5 p-4 flex-1  ">
          {FeatureData.map((feature, index) => (
            <Feature
              key={index}
              index={index}
              headText={feature.headText}
              subHeading={feature.subHeading}
              icon={feature.icon}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
