"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
const MainNav = () => {
  const pathname = usePathname();
  const links = [
    {
      href: "/",
      label: "Home",
      isActive: pathname === "/",
    },
    {
      href: "/features",
      label: "Features",
      isActive: pathname === "/features",
    },
    {
      href: "/blog",
      label: "Blog",
      isActive: pathname === "/blog",
    },
    {
      href: "/resources",
      label: "Resources",
      isActive: pathname === "/resources",
    },
    {
      href: "/about",
      label: "About",
      isActive: pathname === "/about",
    },
    {
      href: "/contact",
      label: "Contact",
      isActive: pathname === "/contact",
    },
  ];
  return (
    <div className="nav_container text-2xl  flex gap-10 lg:text-lg text-gray-600  lg:gap-4 flex-col lg:flex-row">
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={cn(
            " font-[500] ",
            link.isActive && "text-primary font-[600]"
          )}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
};

export default MainNav;
