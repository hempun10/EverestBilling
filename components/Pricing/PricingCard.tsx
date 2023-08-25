import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { PlanData } from "@/constants/constants";
import Feature from "../shared/Feature";
import { CheckCircle2 } from "lucide-react";
import CustomBtn from "../shared/CustomBtn";

interface Props {
  PlanTitle: string;
  PlanTitleDes: string;
  PlanPrice: number;
  PlanPriceDesc: string;
  BtnContent: string;
  link: string;
}
const PricingCard = ({
  PlanTitle,
  PlanPrice,
  PlanPriceDesc,
  PlanTitleDes,
  BtnContent,
  link,
}: Props) => {
  return (
    <Card className="w-[300px] sm:w-[350px] bg-[#EFF0F7] shadow ">
      <CardHeader className=" text-left flex flex-col gap-4">
        <div>
          <CardTitle>{PlanTitle}</CardTitle>
          <CardDescription className=" mt-1">{PlanTitleDes}</CardDescription>
        </div>
        <div className=" flex items-center gap-1">
          <CardTitle>Rs.{PlanPrice} </CardTitle>
          <CardDescription>/month</CardDescription>
        </div>
        <CardDescription className=" text-black font-[300]">
          {PlanPriceDesc}
        </CardDescription>
      </CardHeader>
      <CardContent className=" flex flex-col gap-3">
        {PlanData.map((plan, index) => (
          <Feature
            subHeading={plan.planText}
            icon={<CheckCircle2 />}
            key={index}
            BtnClassName=" p-2 bg-green-600 hover:bg-green-600 p-0 w-[28px] h-[28px] sm:h-[20px] sm:max-w-[20px] items-center"
          />
        ))}
      </CardContent>
      <CardFooter className=" flex justify-center">
        <CustomBtn
          content={BtnContent}
          link={link}
          className=" text-base  px-4 py-1"
        />
      </CardFooter>
    </Card>
  );
};

export default PricingCard;
