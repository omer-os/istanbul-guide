"use client";
import { motion } from "framer-motion";

export default function LayoutChangeAnimation({
  children,
  key,
}: {
  children: React.ReactNode;
  key: string;
}) {
  return <motion.div layoutId={key}>{children}</motion.div>;
}
