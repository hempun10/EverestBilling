"use client";
import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion } from "framer-motion";
import { textVariant } from "@/lib/motion";

interface Props {
  content: string;
  className?: string;
  link: string;
}
const CustomBtn = ({ content, className, link }: Props) => {
  return (
    <motion.div className=" inline" variants={textVariant(1)}>
      <Button
        asChild
        className={cn(
          "inline-flex items-center justify-center w-full px-6 py-6 mb-2 text-lg text-white bg-primary rounded-full sm:w-auto sm:mb-0 transition-all",
          className
        )}
      >
        <Link
          href={link}
          className={cn("flex items-center justify-center gap-2")}
        >
          {content}
        </Link>
      </Button>
    </motion.div>
  );
};

export default CustomBtn;
