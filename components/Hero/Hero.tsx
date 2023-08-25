import React from "react";
import Container from "../shared/Container";
import NextImage from "next/image";
import Link from "next/link";
import CustomBtn from "../shared/CustomBtn";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";

const Hero = () => {
  return (
    <Container className={"pt-24"}>
      <Wrapper>
        <HeadTextWrapper>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>Is your</span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
              accounting still stuck
            </span>{" "}
            <span>in the past?</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Get the most efficient way to manage accounting & finance for modern
            businesses
          </p>
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
          <div className="relative z-0 w-full mt-8">
            <div className="relative overflow-hidden shadow-2xl lg:w-[800px] m-auto">
              <div className="flex items-center flex-none px-4 bg-primary rounded-b-none h-11 rounded-xl">
                <div className="flex space-x-1.5">
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                </div>
              </div>
              <NextImage
                src={"/assets/hero_img.png"}
                alt="hero-img"
                width={800}
                height={800}
                className=" object-contain "
                priority
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </Container>
  );
};

export default Hero;
