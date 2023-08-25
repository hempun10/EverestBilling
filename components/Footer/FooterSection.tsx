import React from "react";

interface Props {
  title?: string;
  children: React.ReactNode;
}

const FooterSection = ({ title, children }: Props) => (
  <div className="mb-8 md:mb-0 w-[400px]">
    <h6 className="mb-4 flex sm:items-center sm:justify-center md:justify-start font-semibold uppercase">
      {title}
    </h6>
    {children}
  </div>
);

export default FooterSection;
