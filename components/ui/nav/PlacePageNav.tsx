"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function PlacePageNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed z-50 w-full top-0 left-0 text-white">
      <nav
        className={`
flex py-5 px-4 justify-between items-center
 transition-all

${scrolled ? "bg-white text-black shadow-xl" : "bg-transparent text-white"}

      `}
      >
        <Link
          href="/"
          className="w-10 h-10 rounded-full hover:bg-black/10 flex items-center justify-center  -ml-2 active:scale-90 transition-all"
        >
          <IoIosArrowBack size={30} />
        </Link>
      </nav>
    </header>
  );
}
