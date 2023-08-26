"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../shared/Container";
import Feature from "../shared/Feature";
import { ConsData, ProsData } from "@/constants/constants";
import { CheckCircle2, XCircle } from "lucide-react";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import Heading from "../shared/Heading";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/motion";

export function Highlights() {
  return (
    <Container className={"pt-24 "}>
      <Wrapper className=" md:px-3">
        <div className="w-full text-left md:w-11/12 lg:w-4/6  ">
          <Heading
            TopSubHeadText=" INCREASE PRODUCTIVITY"
            FrontHeadText="Reduce Time in"
            LastHeadText=" Managing Expenses"
            descText=""
            spanText="Doing Manual Work"
            TopSubHeadClassName=" lg:px-0"
          />
        </div>
        <motion.div variants={fadeIn("up", "tween", 1.2, 1)}>
          <Tabs defaultValue="with" className="w-full text-left  ">
            <TabsList className="grid w-full md:w-1/3 lg:w-1/4 grid-cols-2">
              <TabsTrigger value="with">With EBS</TabsTrigger>
              <TabsTrigger value="without">Without EBS</TabsTrigger>
            </TabsList>
            <TabsContent value="with">
              <div className=" flex flex-col sm:flex-row  items-center gap-4">
                <div className="cons flex flex-col gap-3 w-full sm:w-1/2">
                  <h1 className=" text-2xl font-[500] mb-[1rem]">
                    Track Business Expenses until its Millisecond
                  </h1>
                  {ProsData.map((data, index) => (
                    <Feature
                      index={index}
                      isHighlightFeature={true}
                      key={index}
                      subHeading={data.content}
                      icon={<CheckCircle2 />}
                      className=" flex gap-3 "
                      BtnClassName=" p-2 bg-green-600 hover:bg-green-600 p-0 w-[50px] h-[25px] sm:h-[20px] sm:max-w-[20px] items-center"
                      subHeadClassName=" text-base"
                    />
                  ))}
                </div>
                <div className="pros_img relative w-full sm:w-1/2 aspect-video ">
                  <Image
                    src={"/assets/with_img.png"}
                    alt="img"
                    fill
                    className=" object-cover rounded-xl"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="without">
              <div className=" flex flex-col sm:flex-row  items-center gap-4">
                <div className="cons flex  flex-col gap-3 sm:w-1/2 w-full">
                  <h1 className=" text-2xl font-[500] mb-[1rem]">
                    Taking too long to tidy up administrative files makes it
                    unproductive
                  </h1>
                  {ConsData.map((data, index) => (
                    <Feature
                      isHighlightFeature={true}
                      index={index}
                      key={index}
                      subHeading={data.content}
                      icon={<XCircle />}
                      className=" flex gap-3"
                      BtnClassName="bg-red-600 hover:bg-red-600 p-0 w-[45px] h-[20px] sm:max-w-[20px]"
                      subHeadClassName=" text-base"
                    />
                  ))}
                </div>
                <div className="cons_img relative w-full  sm:w-1/2 aspect-video ">
                  <Image
                    src={"/assets/without_img.png"}
                    alt="img"
                    fill
                    className=" object-cover rounded-xl"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </Wrapper>
    </Container>
  );
}
