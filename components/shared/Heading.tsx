"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { textVariant } from "@/lib/motion";
import { TypingText } from "./TypingText";
interface Props {
  TopSubHeadText?: string;
  FrontHeadText: string;
  spanText: string;
  LastHeadText?: string;
  descText: string;
  headClassName?: string;
  descClassName?: string;
  spanClassName?: string;
  TopSubHeadClassName?: string;
}
const Heading = ({
  TopSubHeadText,
  FrontHeadText,
  spanText,
  LastHeadText,
  descText,
  headClassName,
  descClassName,
  spanClassName,
  TopSubHeadClassName,
}: Props) => {
  return (
    <>
      {TopSubHeadText && (
        <TypingText title={TopSubHeadText} className={TopSubHeadClassName} />
      )}
      <motion.h1
        variants={textVariant(1.1)}
        className={cn(
          "mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight",
          headClassName
        )}
      >
        <span>{FrontHeadText}</span>{" "}
        <span
          className={cn(
            "block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline",
            spanClassName
          )}
        >
          {spanText}
        </span>{" "}
        <span>{LastHeadText}</span>
      </motion.h1>
      <motion.p
        variants={textVariant(1.2)}
        className={cn(
          "px-0 mb-8 text-lg text-gray-600 md:text-lg lg:px-24",
          descClassName
        )}
      >
        {descText}
      </motion.p>
    </>
  );
};

export default Heading;
