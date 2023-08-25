import Container from "@/components/shared/Container";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { cutomWrapperSectionData } from "@/constants/constants";

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
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>Learn How to use</span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
              EBS for your
            </span>{" "}
            <span>Business</span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Get the most efficient way to manage accounting & finance for modern
            businesses
          </p>
        </HeadTextWrapper>
        <div className="custom_wrapper flex gap-10 flex-col sm:flex-row">
          {cutomWrapperSectionData.map((item, i) => (
            <CustomWrapperSection
              key={i}
              imgUrl={item.imgUrl}
              heading={item.heading}
              desc={item.desc}
              link={item.link}
            />
          ))}
        </div>
      </Wrapper>
    </Container>
  );
};

export default ResourcesPage;
