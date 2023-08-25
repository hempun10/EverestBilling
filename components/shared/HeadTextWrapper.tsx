import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const HeadTextWrapper = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default HeadTextWrapper;
