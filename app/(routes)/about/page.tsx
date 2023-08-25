import Container from "@/components/shared/Container";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <Container className={" mt-20"}>
        <Wrapper>
          <HeadTextWrapper>
            <p className="px-0 mb-4 text-lg text-primary font-[500] uppercase md:text-xl lg:px-24">
              Our Vision
            </p>
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
              <span> Transform Nepali business</span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
                with technology
              </span>{" "}
              <span>one business at a time.</span>
            </h1>
          </HeadTextWrapper>
        </Wrapper>
      </Container>
    </div>
  );
};

export default AboutPage;
