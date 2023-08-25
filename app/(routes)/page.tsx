import Benefit from "@/components/Benefit/Benefit";
import Hero from "@/components/Hero/Hero";
import { Highlights } from "@/components/Highlights/Highlights";
import Pricing from "@/components/Pricing/Pricing";
import Testominal from "@/components/Testominal/Testominal";
import Certificate from "@/components/certficate/certificate";
import CTA from "@/components/cta/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefit />
      <Certificate />
      <Highlights />
      <Testominal />
      <Pricing />
      <CTA />
    </>
  );
}
