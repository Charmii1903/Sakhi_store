// components/GeometricShapes.tsx
'use client'
import React from 'react';
import { motion } from 'framer-motion';

const GeometricShapes: React.FC = () => {
  return (
    <div className="geometric-shapes-container">
      <motion.div
        className="rotating-square"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      />
      <motion.div
        className="floating-circle"
        animate={{ y: [0, -30, 30] }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
      />
    </div>
  );
};

export default GeometricShapes;
