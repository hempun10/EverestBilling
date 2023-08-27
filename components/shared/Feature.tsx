"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";
import { TypingText } from "./TypingText";

interface Props {
  headText?: string;
  subHeading: string;
  icon: React.ReactNode;
  className?: string;
  BtnClassName?: string;
  subHeadClassName?: string;
  index: number;
  isHighlightFeature?: boolean;
}
const Feature = ({
  headText,
  subHeading,
  icon,
  className,
  BtnClassName,
  subHeadClassName,
  index,
  isHighlightFeature = false,
}: Props) => {
  return (
    <motion.li
      variants={fadeIn("up", "sween", index * 0.2, 0.5, isHighlightFeature)}
      className={cn(
        " flex  text-left gap-3  max-h-[50px] cursor-pointer ",
        className
      )}
    >
      <Button
        className={cn(
          "rounded-full p-3  bg-primary hover:bg-primary",
          BtnClassName
        )}
      >
        {icon}
      </Button>
      <div className="text_content">
        <h3 className=" text-base font-[500]">{headText}</h3>
        <p
          className={cn(
            " text-sm text-gray-500 line-clamp-2 ",
            subHeadClassName
          )}
        >
          {subHeading}
        </p>
      </div>
    </motion.li>
  );
};

export default Feature;
