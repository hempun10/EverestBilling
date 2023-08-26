"use client";
import Container from "@/components/shared/Container";
import FeatureCard from "@/components/shared/FeatureCard";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import React from "react";
import Mission from "./components/Mission";
import CTA from "@/components/cta/CTA";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

const AboutPage = () => {
  return (
    <div className=" overflow-y-hidden">
      <motion.div
        className=" bg-[#EFF0F7] h-[83vh] flex items-center w-full pt-16"
        variants={fadeIn("up", "tween", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
      >
        <Container className={"flex lg:flex-row flex-col"}>
          <Wrapper className="w-full lg:w-1/2">
            <HeadTextWrapper>
              <div>
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
                  The all-in-one billing software platform to start, run, and
                  grow a business.
                </p>
              </div>
            </HeadTextWrapper>
          </Wrapper>
          <div className="w-full lg:w-1/2 relative aspect-video">
            <Image
              src={"/assets/about-1.webp"}
              alt="img"
              fill
              priority
              className=" object-cover"
            />
          </div>
        </Container>
      </motion.div>
      <Container>
        <Wrapper className=" mt-32">
          <FeatureCard
            index={-2}
            heading="Our Story"
            desc="A crew of engineers, chartered accountants, lawyers and management experts walked into a bar...and the rest is history."
            imgUrl="/assets/about-2.png"
            imgContainerClassName=""
            textContainerClassName=" text-left"
            shouldUseVariants={false}
          />
          <Mission />
        </Wrapper>
      </Container>
      <CTA />
    </div>
  );
};

export default AboutPage;
