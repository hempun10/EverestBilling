"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/motion";
interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}
const Wrapper = ({ className, children, id }: Props) => {
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={cn("px-12 mx-auto max-w-7xl", className)}
      id={id}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
