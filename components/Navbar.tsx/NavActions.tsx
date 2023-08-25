import React from "react";
import { Button } from "../ui/button";

const NavActions = () => {
  return (
    <div className=" flex gap-4">
      <Button variant={"outline"} className=" rounded-full">
        Login
      </Button>
      <Button className=" bg-primary rounded-full text-white">Get Demo</Button>
    </div>
  );
};

export default NavActions;
