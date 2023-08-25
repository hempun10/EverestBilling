import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}
const WaveConatiner = ({ children, className }: Props) => {
  return <div className={cn("wavey_container", className)}>{children}</div>;
};

export default WaveConatiner;
