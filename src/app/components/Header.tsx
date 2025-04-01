'use client';

import React, { useState } from "react";
import Image from "next/image";

const Header: React.FC = () => {
  const [showNewsletter, setShowNewsletter] = useState(false);

  return (
    <header className="relative bg-gradient-to-r from-fun-purple via-fun-pink to-fun-blue py-12 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-white/10 rounded-full animate-float-slow"></div>
        <div className="absolute top-1/2 -right-20 w-40 h-40 bg-white/10 rounded-full animate-bounce-slow"></div>
        <div className="absolute -bottom-20 left-1/4 w-40 h-40 bg-white/10 rounded-full animate-pulse-slow"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Title Section */}
          <div className="flex items-center gap-4 group">
            <div className="relative w-16 h-16">
              <Image 
                src="/logo.png" 
                alt="Curious Hamster Logo" 
                fill
                sizes="64px"
                className="object-contain transform group-hover:rotate-12 transition-transform duration-300"
                priority
              />
            </div>
            <div className="text-left">
              <h1 className="font-comic text-4xl text-white drop-shadow-fun leading-tight">
                Curious Hamster
              </h1>
              <p className="font-display text-sm text-white/80">
                Fun Learning Adventures
              </p>
            </div>
          </div>

          {/* Description and CTA Section */}
          <div className="flex flex-col items-center gap-6">
            <div className="space-y-2 w-full max-w-[280px]">
              <p className="font-display text-xl text-white/90 text-center leading-relaxed">
                Dive into a world of exciting games, puzzles, and engaging activities that make learning an adventure!
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 w-full max-w-[280px]">
              <button 
                onClick={() => setShowNewsletter(true)}
                className="w-full group bg-fun-yellow text-fun-purple px-8 py-4 rounded-full font-display text-xl hover:bg-white hover:text-fun-pink transition-all duration-300 shadow-fun transform hover:scale-105"
              >
                <span className="flex items-center justify-center">
                  Subscribe
                  <svg
                    className="w-6 h-6 ml-2 transform group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </span>
              </button>
              <p className="font-display text-sm text-white/80 italic text-center">
                Get bi-monthly printables in your inbox for FREE!
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header; 