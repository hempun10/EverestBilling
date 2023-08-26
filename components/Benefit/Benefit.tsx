import React from "react";
import Container from "../shared/Container";
import Features from "./Features";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";
import Heading from "../shared/Heading";

const Benefit = () => {
  return (
    <Container className={"pt-24 "}>
      <Wrapper>
        <HeadTextWrapper>
          <Heading
            TopSubHeadText=" Why Everest Billing"
            FrontHeadText="Easy,"
            spanText="Simple"
            LastHeadText=" , Affordable"
            descText=" Our platform helps your business in managing expenses. These are
            some of the reasons why you should use our platform in managing
            business finances."
            headClassName="md:text-5xl"
            descClassName="md"
          />
        </HeadTextWrapper>
        <Features />
      </Wrapper>
    </Container>
  );
};

export default Benefit;
