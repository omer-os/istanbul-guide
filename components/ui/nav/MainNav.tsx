import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { motion } from "framer-motion";

export default function MainNav() {
  const [isOpen, setIsOpen] = useState(false);
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
    <header className="sticky top-0 left-0 z-50">
      <nav
        className={`
          bg-white rounded-b 
           px-5 py-4
        transition-all
          `}
        style={{
          boxShadow: scrolled ? "0 0 10px rgba(0,0,0,0.1)" : "none",
          paddingTop: scrolled ? "1em" : "2.5em",
        }}
      >
        <div className="font-bold">
          <HiMenuAlt2 size={25} />
        </div>
      </nav>
    </header>
  );
}
