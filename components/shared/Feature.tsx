import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

interface Props {
  headText?: string;
  subHeading: string;
  icon: React.ReactNode;
  className?: string;
  BtnClassName?: string;
  subHeadClassName?: string;
}
const Feature = ({
  headText,
  subHeading,
  icon,
  className,
  BtnClassName,
  subHeadClassName,
}: Props) => {
  return (
    <li
      className={cn(
        " flex  text-left gap-3  max-h-[50px] cursor-pointer ",
        className
      )}
    >
      <Button
        className={cn(
          "rounded-full p-3  bg-primary hover:bg-primary",
          BtnClassName
        )}
      >
        {icon}
      </Button>
      <div className="text_content">
        <h3 className=" text-base font-[500]">{headText}</h3>
        <p
          className={cn(
            " text-sm text-gray-500 line-clamp-2 ",
            subHeadClassName
          )}
        >
          {subHeading}
        </p>
      </div>
    </li>
  );
};

export default Feature;
