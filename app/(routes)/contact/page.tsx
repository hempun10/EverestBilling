import Container from "@/components/shared/Container";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import { From } from "./components/from";
import CTA from "@/components/cta/CTA";
import Heading from "@/components/shared/Heading";

const ContactPage = () => {
  return (
    <>
      <Container className={"mt-20"}>
        <Wrapper>
          <HeadTextWrapper>
            <Heading
              FrontHeadText="Contact Us"
              spanText=""
              descText="We're available for any queries or support. Please send us a
              message here."
            />
          </HeadTextWrapper>
          <From />
        </Wrapper>
      </Container>
      <CTA />
    </>
  );
};

export default ContactPage;
