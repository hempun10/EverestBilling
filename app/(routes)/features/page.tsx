import CTA from "@/components/cta/CTA";
import Container from "@/components/shared/Container";
import CustomBtn from "@/components/shared/CustomBtn";
import HeadTextWrapper from "@/components/shared/HeadTextWrapper";
import Heading from "@/components/shared/Heading";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";
import FeaturesList from "./components/FeaturesList";

const FeaturesPage = () => {
  return (
    <>
      <Container className={"mt-32 px-24"}>
        <Wrapper>
          <HeadTextWrapper>
            <Heading
              FrontHeadText="More than"
              spanText="just accounting"
              descText="We help Nepali SMEs to manage their finances & taxes while also giving them real-time business intelligence they need to chase growth"
            />
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <CustomBtn content="Know More" link="#" />
              <CustomBtn
                content="See pricing"
                link="/#pricing"
                className=" bg-transparent outline text-gray-900 hover:bg-primary hover:text-white transition-all"
              />
            </div>
          </HeadTextWrapper>
        </Wrapper>
        <FeaturesList />
      </Container>
      <CTA />
    </>
  );
};

export default FeaturesPage;
