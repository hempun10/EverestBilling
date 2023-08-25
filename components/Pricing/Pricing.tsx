import React from "react";
import Container from "../shared/Container";
import PricingCard from "./PricingCard";
import Wrapper from "../shared/Wrapper";
import HeadTextWrapper from "../shared/HeadTextWrapper";

const Pricing = () => {
  return (
    <Container className={"mt-32"}>
      <Wrapper id="pricing">
        <HeadTextWrapper>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
            <span>Ready to</span>{" "}
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-primary to-purple-500 lg:inline">
              Get Started?{" "}
            </span>
          </h1>
          <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
            Choose a plan that suits your business needs
          </p>
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
