import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface Props {
  textContainerClassName: string;
  imgContainerClassName: string;
  heading: string;
  desc: string;
  imgUrl: string;
}

const FeatureCard = ({
  textContainerClassName,
  imgContainerClassName,
  heading,
  desc,
  imgUrl,
}: Props) => {
  return (
    <section className=" mt-12 flex gap-10 items-center flex-col sm:flex-row ">
      <div
        className={cn(
          "text_content  sm:w-1/2 text-left ",
          textContainerClassName
        )}
      >
        <h1 className="mb-5 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-4xl md:tracking-tight">
          {" "}
          {heading}
        </h1>
        <p className="px-0 mb-0 md:mb-8 text-lg text-gray-600 md:text-xl ">
          {" "}
          {desc}
        </p>
      </div>
      <div
        className={cn("w-full text-center md:w-1/2  ", imgContainerClassName)}
      >
        <div className="relative z-0 w-full mt-8">
          <div className="relative overflow-hidden  shadow-2xl lg:w-[550px] m-auto ">
            <div className="flex items-center flex-none px-4 bg-primary rounded-b-none h-7 rounded-xl">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                <div className="w-3 h-3 border-2 border-white rounded-full"></div>
              </div>
            </div>
            <Image
              src={imgUrl}
              alt="hero-img"
              width={800}
              height={800}
              className=" object-contain "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCard;
