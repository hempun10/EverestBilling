import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import React from "react";

const Mission = () => {
  return (
    <div className="mt-20">
      <HeadTextWrapper>
        <p className="px-0 mb-4 text-lg text-primary font-[500] uppercase md:text-xl lg:px-24">
          Our Mission
        </p>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
          <span>Making</span>{" "}
          <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
            digitalize
          </span>{" "}
          <span>business in Nepal</span>
        </h1>
        <p className="px-0 mb-8 text-base text-gray-600 md:text-lg lg:px-24">
          We help business to achieve independence by making it easier to start,
          run, and grow a business. We believe the future of commerce has more
          voices, not fewer, so we’re reducing the barriers to business
          ownership to make commerce better for everyone.
        </p>
      </HeadTextWrapper>
    </div>
  );
};

export default Mission;
