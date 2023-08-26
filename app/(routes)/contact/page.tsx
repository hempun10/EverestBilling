import Container from "@/components/shared/Container";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import { From } from "./components/from";
import CTA from "@/components/cta/CTA";

const ContactPage = () => {
  return (
    <>
      <Container className={"mt-20"}>
        <Wrapper>
          <HeadTextWrapper>
            <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span>Contact Us</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              We&apos;re available for any queries or support. Please send us a
              message here.
            </p>
          </HeadTextWrapper>
          <From />
        </Wrapper>
      </Container>
      <CTA />
    </>
  );
};

export default ContactPage;
