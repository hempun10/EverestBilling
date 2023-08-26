"use client";
import Container from "@/components/shared/Container";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cutomWrapperSectionData } from "@/constants/constants";
import Heading from "@/components/shared/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
interface Props {
  imgUrl: string;
  heading: string;
  desc: string;
  link: string;
}
const CustomWrapperSection = ({ imgUrl, heading, desc, link }: Props) => {
  return (
    <Link
      href={link}
      className="resources border rounded-xl py-3 px-4 flex items-center justify-start text-left w-full sm:w-1/2 hover:border-primary gap-5 "
    >
      <section className="relative w-full  sm:w-1/2 aspect-square">
        <Image
          src={imgUrl}
          alt="img"
          fill
          className=" object-contain rounded-lg"
          priority
        />
      </section>
      <div className="text_content flex flex-col gap-6 ">
        <h2 className=" font-[500] text-lg">{heading}</h2>
        <p>{desc}</p>
      </div>
    </Link>
  );
};

const ResourcesPage = () => {
  return (
    <Container className={"mt-20"}>
      <Wrapper>
        <HeadTextWrapper>
          <Heading
            TopSubHeadText="Explore the EBS"
            FrontHeadText="Learn How to use"
            spanText="EBS for your"
            LastHeadText="Business"
            descText="Get the most efficient way to manage accounting & finance for modern
            businesses"
          />
        </HeadTextWrapper>
        <motion.div
          className="custom_wrapper flex gap-10 flex-col sm:flex-row"
          variants={fadeIn("up", "tween", 0.3, 1)}
        >
          {cutomWrapperSectionData.map((item, i) => (
            <CustomWrapperSection
              key={i}
              imgUrl={item.imgUrl}
              heading={item.heading}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </motion.div>
      </Wrapper>
    </Container>
  );
};

export default ResourcesPage;
