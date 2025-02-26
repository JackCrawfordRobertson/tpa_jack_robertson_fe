"use client";

import React from "react";
import Link from "next/link";
import { Github, BarChart, Code } from "lucide-react"; // Importing icons

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <BarChart size={24} className="text-white" /> {/* Replaceable logo */}
          <span className="text-lg font-semibold">Report Insights</span>
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-6 text-sm">
          <Link 
            href="https://github.com/JackCrawfordRobertson/TPA_CleanAndAnalysis" 
            target="_blank" 
            className="hover:underline flex items-center space-x-2 text-gray-400 hover:text-white">
            <Github size={18} />
            <span>Analytics GitHub</span>
          </Link>
          
          <Link 
            href="https://github.com/your-org/frontend-repo" 
            target="_blank" 
            className="hover:underline flex items-center space-x-2 text-gray-400 hover:text-white">
            <Code size={18} />
            <span>Frontend GitHub</span>
          </Link>
        </div>

      </div>
    </footer>
  );
}