"use client";
import React from "react";
import FooterSection from "./FooterSection";
import FooterContact from "./FooterContact";
import { usefulLinks, contactLinks } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { footerVariants } from "@/lib/motion";

const MainFooter = () => {
  const data = new Date();
  let year = data.getFullYear();
  return (
    <motion.footer
      className="bg-white text-center text-neutral-600 lg:text-left"
      variants={footerVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="mx-6 py-10 text-left">
        <div className=" flex  gap-8 flex-col sm:flex-row justify-center">
          <FooterSection>
            <Image
              src={"/assets/logo.png"}
              alt=" logo"
              width={100}
              height={100}
              priority
              className=" mb-8 mx-auto"
            />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi ipsa
              nam quaerat quos voluptatum id.
            </p>
          </FooterSection>

          {/* Useful links section */}
          <FooterSection title="Useful links">
            {usefulLinks.map((item, index) => (
              <p className="mb-4" key={index}>
                <Link
                  href={item.link}
                  className="text-neutral-600 dark:text-neutral-200"
                >
                  {item.text}
                </Link>
              </p>
            ))}
          </FooterSection>
          {/* Contact section */}
          <FooterContact title="Contact">
            {contactLinks.map((item, index) => (
              <Link
                href={item.link}
                className="mb-4 flex items-center sm:justify-center md:justify-start gap-2"
                key={index}
                target="_blank"
              >
                {item.icon}
                {item.text}
              </Link>
            ))}
          </FooterContact>
        </div>
      </div>

      <div className="bg-white p-6 text-center ">
        <span>© {year} </span>
        <a
          className="font-semibold text-primary"
          href="https://everesttechnologies.com.np/"
        >
          Everest Billing System
        </a>
      </div>
    </motion.footer>
  );
};

export default MainFooter;
