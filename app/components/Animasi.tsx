import { motion, Variants } from "framer-motion";
import React, { useMemo } from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  onClick?: any;
}

export function AnimasiScroll({ children, className = "" }: WrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollKiri({
  children,
  className = "",
  id = "",
}: WrapperProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollKanan({
  children,
  className = "",
  id = "",
}: WrapperProps) {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollPop({ children, className = "", id = "" }: WrapperProps) {
  return (
    <motion.div
      className={className}
      id={id}
      initial={{ opacity: 0, y: 0 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.div>
  );
}

export function AnimasiPatas({ children, className = "" }: WrapperProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, y: -50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export function AnimasiPkiri({ children, className = "" }: WrapperProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export function AnimasiH1kiri({ children, className = "" }: WrapperProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export function AnimasiH1kanan({ children, className = "" }: WrapperProps) {
  return (
    <motion.p
      className={className}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.p>
  );
}

export function AnimasiKiri({ children, className = "" }: WrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
}

export function AnimasiKanan({ children, className = "" }: WrapperProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.2 }}
    >
      {children}
    </motion.div>
  );
}

// * Button Animation
export function AnimasiBkiri({
  children,
  className = "",
  onClick = "",
}: WrapperProps) {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.button>
  );
}

export function AnimasiBkanan({
  children,
  className = "",
  onClick = "",
}: WrapperProps) {
  return (
    <motion.button
      onClick={onClick}
      className={className}
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.button>
  );
}
// * Button Animation