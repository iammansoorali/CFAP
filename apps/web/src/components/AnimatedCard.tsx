"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function AnimatedCard({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}
