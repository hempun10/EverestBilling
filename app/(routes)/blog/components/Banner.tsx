"use client";
import Heading from "@/components/shared/Heading";
import { textVariant2 } from "@/lib/motion";
import { motion } from "framer-motion";

function Banner() {
  return (
    <div className="mb-10 flex flex-col justify-between px-10 py-5 font-bold lg:flex-row lg:space-x-5 items-center flex-wrap">
      <div>
        <Heading
          FrontHeadText="All"
          spanText="Blogs"
          descText=" Welcome to  EBS Blog"
          headClassName=" text-left mb-4"
          descClassName=" lg:px-0 text-left mb-0"
        />
      </div>

      <motion.p
        className="mt-5 max-w-sm text-black md:mt-2 font-[500]"
        variants={textVariant2}
        initial="hidden"
        whileInView="show"
      >
        Why Billing System | How to use Billing Software | Which Biling Software
      </motion.p>
    </div>
  );
}
export default Banner;
