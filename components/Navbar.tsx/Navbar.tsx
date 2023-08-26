"use client";
import React from "react";
import Image from "next/image";
import MainNav from "./MainNav";
import NavActions from "./NavActions";
import { TabletNav } from "./TabletNav";
import { motion } from "framer-motion";
import { navVariants } from "@/lib/motion";

const Navbar = () => {
  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={
        "flex justify-around items-center py-2 shadow-xl sticky top-0  z-10 h-[86px] w-[100%] bg-white"
      }
    >
      <div className="logo ">
        <Image
          src={"/assets/logo.png"}
          alt="logo"
          width={150}
          height={150}
          priority
        />
      </div>
      <div className="hidden lg:block">
        <MainNav />
      </div>
      <div className="hidden lg:block">
        <NavActions />
      </div>
      <div className=" lg:hidden flex gap-3">
        <TabletNav />
      </div>
    </motion.div>
  );
};

export default Navbar;
