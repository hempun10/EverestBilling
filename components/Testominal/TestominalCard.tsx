import * as React from "react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  headText: string;
  descText: string;
  imgUrl: string;
  name: string;
  postion: string;
}

export function TestominalCard({
  headText,
  descText,
  imgUrl,
  name,
  postion,
}: Props) {
  return (
    <Card className="w-[300px] lg:w-[30 0px] flex flex-col justify-between min-h-[280px] ">
      <CardHeader className=" text-left ">
        <CardTitle className=" text-xl">{headText}</CardTitle>
        <CardDescription>{descText}</CardDescription>
      </CardHeader>
      <hr className=" w-[90%] mx-auto h-2" />
      <CardFooter className="flex  gap-4 text-left">
        <Avatar>
          <AvatarImage src={imgUrl} alt="@shadcn" />
          <AvatarFallback>IMG</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle className=" text-xl text-primary">{name}</CardTitle>
          <CardDescription>{postion}</CardDescription>
        </div>
      </CardFooter>
    </Card>
  );
}
