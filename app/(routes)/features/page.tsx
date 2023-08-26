import Container from "@/components/shared/Container";
import CustomBtn from "@/components/shared/CustomBtn";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import Features from "./components/Features";
import CTA from "@/components/cta/CTA";
import Heading from "@/components/shared/Heading";

const FeaturesPage = () => {
  // More than just accounting
  return (
    <>
      <Container className={"mt-12"}>
        <Wrapper>
          <HeadTextWrapper>
            <Heading
              FrontHeadText="More than just"
              spanText=" Accounting"
              descText=" We help Nepali business to manage their stocks,repots & finance
              while also giving them real-time business intelligence they need
              to chase growth."
            />
            {/* <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span> More than just </span>{" "}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
                Accounting
              </span>{" "}
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              We help Nepali business to manage their stocks,repots & finance
              while also giving them real-time business intelligence they need
              to chase growth.
            </p> */}
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <CustomBtn content="Start 30 days Free Trial" link="#" />
              <CustomBtn
                content="See pricing"
                link="/#pricing"
                className=" bg-transparent outline text-gray-900 hover:bg-primary hover:text-white transition-all"
              />
            </div>
          </HeadTextWrapper>
          <Features />
        </Wrapper>
      </Container>
      <CTA />
    </>
  );
};

export default FeaturesPage;
