import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
  id?: string;
}
const Wrapper = ({ className, children, id }: Props) => {
  return (
    <div className={cn("px-12 mx-auto max-w-7xl", className)} id={id}>
      {children}
    </div>
  );
};

export default Wrapper;
