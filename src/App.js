import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";

export default function App() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <Canvas className="absolute top-0 left-0 w-full h-full">
        <Stars radius={100} depth={50} count={5000} factor={4} fade speed={1} />
        <OrbitControls enableZoom={false} />
      </Canvas>

      {/* Hero Section */}
      <motion.h1
        className="text-5xl font-bold z-10 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        🚀 Welcome to the Future of AI & Blockchain

      </motion.h1>

      <motion.p
        className="text-lg mt-4 z-10 max-w-2xl text-center text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The first AI-Human partnership shaping the future of technology with blockchain integration and decentralized intelligence.
      </motion.p>

      {/* Call to Action */}
      <motion.button
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg z-10 hover:bg-blue-700 transition-all duration-300 shadow-lg"
        whileHover={{ scale: 1.1 }}
      >
        Learn More
      </motion.button>
    </div>
  );
}
