import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import CustomBtn from "../shared/CustomBtn";
import Wrapper from "../shared/Wrapper";

const CTA = () => {
  // Start Track Your Business Expenses Today
  return (
    <div className="bg-[#EFF0F7] pt-32 mt-32">
      <Container>
        <Wrapper className="flex gap-10 lg:gap-0 items-center flex-col lg:flex-row">
          <div className="text_container lg:w-1/2 w-full">
            <div className="w-full text-left md:w-11/12 xl:w-9/12  ">
              <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
                <span>Start Track Your </span>{" "}
                <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
                  Business Expenses Today
                </span>
              </h1>
              <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl ">
                Choose a plan that suits your business needs
              </p>
              <CustomBtn content="Start 30 days Free Trail" link="#" />
            </div>
          </div>
          <div className="img_container relative w-full  lg:w-1/2 aspect-video ">
            <Image
              src={"/assets/cta.png"}
              alt="img"
              fill
              className=" object-cover rounded-xl"
              priority
            />
          </div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CTA;
