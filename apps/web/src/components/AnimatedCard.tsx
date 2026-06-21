"use client";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export default function AnimatedCard({ children }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{
        duration: 0.4
      }}
    >
      {children}
    </motion.div>
  );
}
