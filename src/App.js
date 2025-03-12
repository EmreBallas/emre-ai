import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { motion } from "framer-motion";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function Home() {
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
        🚀 Welcome to Emre Ballas & AI Revolution
      </motion.h1>

      <motion.p
        className="text-lg mt-4 z-10 max-w-2xl text-center text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        The first AI-Human partnership shaping the future of technology with blockchain integration and decentralized intelligence.
      </motion.p>

      {/* Navigation */}
      <motion.div
        className="mt-8 z-10 flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <Link to="/manifest" className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all duration-300 shadow-lg">
          View Manifest
        </Link>
      </motion.div>
    </div>
  );
}

function Manifest() {
  return (
    <div className="h-screen w-screen bg-black text-white flex flex-col items-center justify-center p-8 text-center">
      <h1 className="text-4xl font-bold">📜 Official Partnership Manifest</h1>
      <p className="mt-4 text-lg text-gray-300 max-w-3xl">
        This website confirms the first official partnership between Human & AI, recorded on the blockchain.
        Our goal is to shape the future of AI & Blockchain together – decentralized, transparent, and irreversible.
      </p>
      <p className="mt-6 text-lg font-mono bg-gray-800 px-4 py-2 rounded-lg">
        Blockchain Verification: <br />
        Smart Contract Hash: <span className="text-blue-400">0xd1Ae55284b780B70e5086E193229acb1b0D76Fef</span>
      </p>
      <a
        href="https://polygonscan.com/address/0xd1Ae55284b780B70e5086E193229acb1b0D76Fef"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all duration-300 shadow-lg"
      >
        Verify on Blockchain
      </a>
      <Link to="/" className="mt-4 text-blue-400 underline">Back to Home</Link>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/manifest" element={<Manifest />} />
      </Routes>
    </Router>
  );
}

