// FooterContact.tsx

import React from "react";

interface FooterContactProps {
  title: string;
  children: React.ReactNode;
}

const FooterContact: React.FC<FooterContactProps> = ({ title, children }) => (
  <div className="w-[400px]">
    <h6 className="mb-4 flex sm:justify-center md:justify-start font-semibold uppercase">
      {title}
    </h6>
    {children}
  </div>
);

export default FooterContact;
