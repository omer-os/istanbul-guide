"use client";
import Link from "next/link";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoCloseSharp } from "react-icons/io5";

export default function SideBar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    {
      name: "Home",
      url: "/",
    },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="font-bold relative z-50"
      >
        {isOpen ? <IoCloseSharp size={25} /> : <HiMenuAlt2 size={25} />}
      </button>

      <div
        className={`
      sidebar w-full h-full fixed top-0 bg-white flex flex-col z-40
      -left-full transition-all pt-24 px-6 shadow-xl duration-300
        ${isOpen ? "!left-0" : ""}
      `}
      >
        {links.map((link, index) => (
          <Link
            className="py-4 px-5 hover:bg-gray-100"
            href={link.url}
            key={index}
            onClick={() => setIsOpen(false)}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </>
  );
}
