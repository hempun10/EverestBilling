import React from "react";
import Container from "../shared/Container";
import TestominalSlider from "./TestominalSlider";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";

const Testominal = () => {
  //Our User Kind Words
  return (
    <div className="bg-[#EFF0F7] py-32 mt-32">
      <Container>
        <Wrapper>
          <HeadTextWrapper>
            <p className="px-0 mb-3 text-lg text-primary font-[500] md:text-2xl lg:px-24">
              WHAT THEY SAY
            </p>
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
              Our{" "}
              <span className="bg-clip-text bg-gradient-to-r text-transparent from-primary to-purple-500">
                User Kind{" "}
              </span>
              Words
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              Here are some testimonials from our user after using EBS to manage
              their business.
            </p>
          </HeadTextWrapper>
          <TestominalSlider />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Testominal;
