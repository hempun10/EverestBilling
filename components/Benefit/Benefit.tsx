import React from "react";
import Container from "../shared/Container";
import Features from "./Features";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";

const Benefit = () => {
  return (
    <Container className={"pt-24 "}>
      <Wrapper>
        <HeadTextWrapper>
          <p className="px-0 mb-3 text-lg text-primary font-[500] md:text-2xl lg:px-24 uppercase">
            Why Everest Billing
          </p>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
            Easy,{" "}
            <span className="bg-clip-text bg-gradient-to-r text-transparent from-primary to-purple-500">
              Simple
            </span>
            , Affordable
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances.
          </p>
        </HeadTextWrapper>
        <Features />
      </Wrapper>
    </Container>
  );
};

export default Benefit;
