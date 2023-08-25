import React from "react";
import Container from "../shared/Container";
import { Button } from "../ui/button";
import Image from "next/image";

const Certificate = () => {
  return (
    <Container
      className={
        "bg-[#EFF0F7] mt-24 grid sm:grid-cols-2 p-10 gap-5 md:w-4/5 rounded-xl "
      }
    >
      <div className="text_content text-left flex flex-col gap-6 ">
        <h2 className=" text-3xl font-[500]">IRD verified billing</h2>
        <p>
          EBS is compliant with all the requirements of electronic billing
          procedure, 2074 (with Fourth Amendment) (विद्युतीय बीजक सम्बन्धी
          कार्यविधि, २०७४ (चौथौ संसोधन सहित)).
        </p>
        <Button className=" bg-primary sm:w-1/2">Learn More</Button>
      </div>
      <div className="image_content relative h-[220px]">
        <Image
          src={"/assets/certificate.png"}
          alt="certificate"
          fill
          className=" object-contain"
          priority
        />
      </div>
    </Container>
  );
};

export default Certificate;
