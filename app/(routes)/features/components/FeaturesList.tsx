"use client";
import FeatureCard from "@/components/shared/FeatureCard";
import React from "react";
import { featureData } from "@/constants/constants";
import Heading from "@/components/shared/Heading";

const FeaturesList = () => {
  return (
    <div className="mt-32">
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
    </div>
  );
};

export default FeaturesList;
