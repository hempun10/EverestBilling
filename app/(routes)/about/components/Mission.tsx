import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import React from "react";
import { missionData } from "@/constants/constants";
import FeatureCard from "@/components/shared/FeatureCard";
import CTA from "@/components/cta/CTA";
import Heading from "@/components/shared/Heading";

const Mission = () => {
  return (
    <div className="mt-20">
      <HeadTextWrapper>
        <Heading
          TopSubHeadText="Our Mission"
          FrontHeadText="Making"
          spanText="digitalize"
          LastHeadText="business in Nepal"
          descText="   We help business to achieve independence by making it easier to start,
          run, and grow a business. We believe the future of commerce has more
          voices, not fewer, so we’re reducing the barriers to business
          ownership to make commerce better for everyone."
        />
      </HeadTextWrapper>
      {missionData.map((item, i) => (
        <FeatureCard
          index={i}
          key={i}
          heading={item.heading}
          header={item.header}
          desc={item.desc}
          imgUrl={item.imgUrl}
          imgContainerClassName=""
          shouldUseVariants={true}
          textContainerClassName=" text-left"
        />
      ))}
    </div>
  );
};

export default Mission;
