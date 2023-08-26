"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { slideIn } from "@/lib/motion";

interface Props {
  imgUrl: string;
}

const BrowseTabImg = ({ imgUrl }: Props) => {
  return (
    <motion.div
      className="relative z-0 w-full "
      variants={slideIn("right", "tween", 1, 1)}
    >
      <div className="relative overflow-hidden shadow-2xl lg:w-[800px] m-auto">
        <div className="flex items-center flex-none px-4 bg-primary rounded-b-none h-11 rounded-xl">
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
    </motion.div>
  );
};

export default BrowseTabImg;
