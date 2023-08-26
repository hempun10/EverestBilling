import React from "react";
import Container from "../shared/Container";
import PricingCard from "./PricingCard";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";
import Heading from "../shared/Heading";

const Pricing = () => {
  return (
    <Container className={"mt-32"}>
      <Wrapper id="pricing">
        <HeadTextWrapper>
          <Heading
            FrontHeadText="Ready to"
            spanText="Get Started?"
            descText="Choose a plan that suits your business needs"
          />
        </HeadTextWrapper>
        <div className=" flex justify-around gap-4 lg:gap-0 flex-col sm:flex-row">
          <PricingCard
            PlanTitle="Free"
            PlanTitleDes="Perfect plan to get started"
            PlanPrice={0}
            PlanPriceDesc="Start a 30 days Free trail to see how your business boom🔥"
            BtnContent="Start 30 days Free Trail"
            link="#"
          />
          <PricingCard
            PlanTitle="Ultimate"
            PlanTitleDes="Best suits for great company!"
            PlanPrice={2000}
            PlanPriceDesc="For professional only! Start arranging your expenses with our best templates."
            BtnContent="Get Started"
            link="#"
          />
        </div>
      </Wrapper>
    </Container>
  );
};

export default Pricing;
