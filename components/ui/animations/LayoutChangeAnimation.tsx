"use client";
import { motion } from "framer-motion";

export default function LayoutChangeAnimation({
  children,
  key,
  className,
}: {
  children: React.ReactNode;
  key: string;
  className?: string;
}) {
  return (
    <motion.div className={className} layoutId={key}>
      {children}
    </motion.div>
  );
}
