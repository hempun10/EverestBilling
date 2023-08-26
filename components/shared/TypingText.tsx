import { textContainer, textVariant2 } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface Props {
  title: string;
  className?: string;
}
export const TypingText = ({ title, className }: Props) => (
  <motion.p
    variants={textContainer}
    className={cn(
      "px-0 mb-3 text-lg text-primary font-[500] md:text-2xl lg:px-24 uppercase",
      className
    )}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === " " ? "\u00A0" : letter}
      </motion.span>
    ))}
  </motion.p>
);
