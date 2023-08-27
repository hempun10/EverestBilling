"use client";
import React from "react";
import Container from "../shared/Container";
import Image from "next/image";
import CustomBtn from "../shared/CustomBtn";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const CTA = () => {
  return (
    <div className="bg-[#EFF0F7] pt-32 mt-32">
      <Container>
        <Wrapper className="flex gap-10 lg:gap-0 items-center flex-col lg:flex-row">
          <div className="text_container lg:w-1/2 w-full">
            <div className="w-full text-left md:w-11/12 xl:w-9/12  ">
              <Heading
                FrontHeadText="Start Track Your"
                spanText="Business Expenses Today"
                descText="Choose a plan that suits your business needs"
                descClassName=" lg:px-0"
              />
              <CustomBtn content="Start 30 days Free Trail" link="#" />
            </div>
          </div>
          <motion.div
            className="img_container relative w-full  lg:w-1/2 aspect-video "
            variants={fadeIn("up", "tween", 0.5, 0.5)}
          >
            <Image
              src={"/assets/cta.png"}
              alt="img"
              fill
              className=" object-cover rounded-xl"
              priority
            />
          </motion.div>
        </Wrapper>
      </Container>
    </div>
  );
};

export default CTA;
