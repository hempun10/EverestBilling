import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: any;
}
const Container = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "w-[100%] mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center",
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
