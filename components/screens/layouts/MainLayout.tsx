"use client";
import MainNav from "components/components/ui/nav/MainNav";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function MainLayout(props: Props) {
  return (
    <div className="max-w-2xl mx-auto">
      <MainNav />

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        {props.children}
      </motion.div>
    </div>
  );
}
