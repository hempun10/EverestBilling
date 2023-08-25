import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Container from "../shared/Container";
import Feature from "../shared/Feature";
import { ConsData, ProsData } from "@/constants/constants";
import { Check, CheckCircle2, X, XCircle } from "lucide-react";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";

export function Highlights() {
  // Reduce Time in Doing Manual Work Managing Expenses
  return (
    <Container className={"pt-24 "}>
      <Wrapper className=" md:px-3">
        <div className="w-full text-left md:w-11/12 lg:w-4/6  ">
          <p className="px-0 mb-3 text-lg text-primary font-[500] md:text-2xl ">
            INCREASE PRODUCTIVITY
          </p>
          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-5xl md:tracking-tight">
            Reduce Time in{" "}
            <span className="bg-clip-text bg-gradient-to-r text-transparent from-primary to-purple-500">
              Doing Manual Work
            </span>{" "}
            Managing Expenses
          </h1>
        </div>
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
      </Wrapper>
    </Container>
  );
}
