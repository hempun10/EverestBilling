import FeatureCard from "@/components/shared/FeatureCard";
import React from "react";
import { featureData } from "@/constants/constants";

const Features = () => {
  return (
    <div className="mt-32">
      <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
        Key{" "}
        <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline ">
          Features
        </span>
      </h1>
      {featureData.map((feature, index) => (
        <FeatureCard
          key={index}
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

export default Features;
