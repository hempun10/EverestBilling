import React from "react";
import Container from "../shared/Container";
import TestominalSlider from "./TestominalSlider";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";
import Heading from "../shared/Heading";

const Testominal = () => {
  return (
    <div className="bg-[#EFF0F7] py-32 mt-32">
      <Container>
        <Wrapper>
          <HeadTextWrapper>
            <Heading
              TopSubHeadText="WHAT THEY SAY"
              FrontHeadText="Our"
              spanText="User Kind"
              LastHeadText="Words"
              descText="  Here are some testimonials from our user after using EBS to manage
              their business."
            />
          </HeadTextWrapper>
          <TestominalSlider />
        </Wrapper>
      </Container>
    </div>
  );
};

export default Testominal;
