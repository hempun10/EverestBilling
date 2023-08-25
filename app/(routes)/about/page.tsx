import Container from "@/components/shared/Container";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <div className=" bg-[#EFF0F7] h-[80vh] flex items-center w-full">
        <Container className={"flex lg:flex-row flex-col"}>
          <Wrapper className="w-full lg:w-1/2">
            <HeadTextWrapper>
              <p className="px-0 mb-4 text-left  text-lg text-primary font-[500] uppercase md:text-xl">
                Our Vision
              </p>
              <h1 className="mb-4 text-left text-4xl  font-extrabold leading-none tracking-normal text-black md:text-5xl md:tracking-tight">
                <span> Transform Nepali business</span>{" "}
                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-purple-800 to-primary lg:inline">
                  with technology
                </span>{" "}
                <span>one business at a time.</span>
              </h1>
              <p className="px-0 mb-4 text-lg text-gray-500 font-[300] md:text-xl  text-left">
                The all-in-one billing software platform to start, run, and grow
                a business.
              </p>
            </HeadTextWrapper>
          </Wrapper>
          <Wrapper className="w-full lg:w-1/2 relative aspect-video">
            <Image
              src={"/assets/about-1.webp"}
              alt="img"
              fill
              priority
              className=" object-cover"
            />
          </Wrapper>
        </Container>
      </div>
    </>
  );
};

export default AboutPage;
