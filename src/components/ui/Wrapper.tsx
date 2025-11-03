"use client";
import { motion } from "framer-motion";
import React from "react";
interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper = ({ children, className }: WrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Wrapper;
