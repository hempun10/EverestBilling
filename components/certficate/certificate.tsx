"use client";
import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/motion";

const Certificate = () => {
  return (
    <motion.div
      //@ts-ignore
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
    >
      <Container
        className={
          "bg-[#EFF0F7] mt-24 grid sm:grid-cols-2 p-10 gap-5 md:w-4/5 rounded-xl "
        }
      >
        <motion.div
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="text_content text-left flex flex-col gap-6 "
        >
          <h2 className=" text-3xl font-[500]">IRD verified billing</h2>
          <p>
            EBS is compliant with all the requirements of electronic billing
            procedure, 2074 (with Fourth Amendment) (विद्युतीय बीजक सम्बन्धी
            कार्यविधि, २०७४ (चौथौ संसोधन सहित)).
          </p>
          <Button className=" bg-primary sm:w-1/2">Learn More</Button>
        </motion.div>
        <motion.div
          className="image_content relative h-[220px]"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          <Image
            src={"/assets/certificate.png"}
            alt="certificate"
            fill
            className=" object-contain"
            priority
          />
        </motion.div>
      </Container>
    </motion.div>
  );
};

export default Certificate;
