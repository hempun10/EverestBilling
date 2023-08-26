import React from "react";
import Container from "../shared/Container";
import CustomBtn from "../shared/CustomBtn";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";
import Heading from "../shared/Heading";
import BrowseTabImg from "../shared/BrowseTabImg";

const Hero = () => {
  return (
    <Container className={"pt-24 overflow-x-hidden"}>
      <Wrapper>
        <HeadTextWrapper>
          <Heading
            FrontHeadText="Is your"
            spanText=" accounting still stuck"
            LastHeadText="in the past?"
            descText="Get the most efficient way to manage accounting & finance for modern
            businesses"
          />
          <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
            <CustomBtn content="Start 30 days Free Trial" link="#" />
            <CustomBtn
              content="See pricing"
              link="#pricing"
              className=" bg-transparent outline text-gray-900 hover:bg-primary hover:text-white transition-all"
            />
          </div>
        </HeadTextWrapper>
        <div className="w-full mx-auto mt-20 text-center md:w-10/12">
          <BrowseTabImg imgUrl="/assets/hero_img.png" />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Hero;
