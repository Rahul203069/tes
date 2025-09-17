//@ts-nocheck
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Calendar, Shield, Award, Play, ArrowRight, Star, Heart, Sparkles } from 'lucide-react';

export default function HeroSection({ onBookAppointment }) {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.7]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/20 pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-32 lg:pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-blue-100/20 to-teal-100/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8 text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-blue-100"
            >
              <Award className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-slate-700">Award-Winning Dental Care</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-800 leading-tight"
              >
                Transform Your
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Smile Today
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0"
              >
                Experience world-class dental care with cutting-edge technology and personalized treatment plans designed just for you.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button 
                onClick={onBookAppointment}
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 rounded-lg flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Your Consultation
                <ArrowRight className="w-5 h-5" />
              </button>
              
              <button 
                className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 px-8 py-6 text-lg bg-white/80 backdrop-blur-sm rounded-lg flex items-center justify-center gap-2 transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                Watch Our Story
              </button>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex items-center gap-4 sm:gap-8 pt-8 justify-center lg:justify-start"
            >
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-400 to-teal-400 border-2 border-white flex items-center justify-center text-white font-semibold text-sm">
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div className="ml-3 text-left">
                  <div className="flex items-center gap-1">
                    {[1,2,3,4,5].map((i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-600">1,200+ Happy Patients</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Beautiful Dental Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y, opacity }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Main Illustration Container */}
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-3xl shadow-2xl overflow-hidden p-12">
                <div className="aspect-[4/5] flex items-center justify-center">
                  {/* Clean & Modern Dental Illustration */}
                  <svg viewBox="0 0 400 500" className="w-full h-full max-w-sm">
                    <defs>
                      <linearGradient id="toothGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ffffff" />
                        <stop offset="100%" stopColor="#f1f5f9" />
                      </linearGradient>
                      <linearGradient id="blueGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#3b82f6" />
                        <stop offset="100%" stopColor="#1e40af" />
                      </linearGradient>
                      <linearGradient id="tealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#0d9488" />
                      </linearGradient>
                      <filter id="glow">
                        <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                        <feMerge> 
                          <feMergeNode in="coloredBlur"/>
                          <feMergeNode in="SourceGraphic"/>
                        </feMerge>
                      </filter>
                    </defs>
                    
                    {/* Background */}
                    <rect width="400" height="500" fill="transparent"/>
                    
                    {/* Main Content Area */}
                    <g transform="translate(200, 250)">
                      
                      {/* Large Central Tooth - Clean & Minimalist */}
                      <motion.g
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      >
                        <path 
                          d="M-30,-60 C-30,-75 -15,-90 0,-90 C15,-90 30,-75 30,-60 L30,45 C30,60 15,75 0,75 C-15,75 -30,60 -30,45 Z" 
                          fill="url(#toothGrad)" 
                          stroke="#e2e8f0" 
                          strokeWidth="2"
                          filter="url(#glow)"
                        />
                        
                        {/* Tooth Highlight */}
                        <ellipse cx="-10" cy="-30" rx="6" ry="20" fill="white" opacity="0.7"/>
                        
                        {/* Sparkle Effect */}
                        <motion.g
                          animate={{ 
                            rotate: 360,
                            scale: [1, 1.2, 1]
                          }}
                          transition={{ 
                            rotate: { duration: 8, repeat: Infinity, ease: "linear" },
                            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                          }}
                        >
                          <circle cx="-25" cy="-50" r="2" fill="#fbbf24" opacity="0.8"/>
                          <circle cx="25" cy="-40" r="1.5" fill="#06b6d4" opacity="0.9"/>
                          <circle cx="-20" cy="30" r="1" fill="#10b981" opacity="0.7"/>
                          <circle cx="20" cy="20" r="1.5" fill="#8b5cf6" opacity="0.6"/>
                        </motion.g>
                      </motion.g>
                      
                      {/* Floating Icons Around Tooth */}
                      
                      {/* Shield Icon - Top Left */}
                      <motion.g
                        transform="translate(-55, -55)"
                        animate={{ y: [-5, 5, -5] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <circle cx="0" cy="0" r="22" fill="white" stroke="url(#blueGrad)" strokeWidth="2" opacity="0.95"/>
                        <path 
                          d="M-10,-6 L0,-12 L10,-6 L10,6 C10,10 6,14 0,14 C-6,14 -10,10 -10,6 Z" 
                          fill="url(#blueGrad)"
                        />
                        <path d="M-5,0 L-2,3 L6,-5" stroke="white" strokeWidth="2" strokeLinecap="round" fill="none"/>
                      </motion.g>
                      
                      {/* Heart Icon - Top Right */}
                      <motion.g
                        transform="translate(55, -55)"
                        animate={{ 
                          y: [5, -5, 5],
                          scale: [1, 1.1, 1]
                        }}
                        transition={{ 
                          y: { duration: 2.5, repeat: Infinity, ease: "easeInOut" },
                          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        <circle cx="0" cy="0" r="22" fill="white" stroke="#ef4444" strokeWidth="2" opacity="0.95"/>
                        <path 
                          d="M0,5 C0,5 -7,-2 -7,-5 C-7,-8 -4,-12 0,-9 C4,-12 7,-8 7,-5 C7,-2 0,5 0,5 Z" 
                          fill="#ef4444"
                        />
                      </motion.g>
                      
                      {/* Star Icon - Bottom Left */}
                      <motion.g
                        transform="translate(-55, 55)"
                        animate={{ 
                          rotate: 360,
                          y: [-3, 3, -3]
                        }}
                        transition={{ 
                          rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                          y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                      >
                        <circle cx="0" cy="0" r="22" fill="white" stroke="url(#tealGrad)" strokeWidth="2" opacity="0.95"/>
                        <path 
                          d="M0,-8 L2,-3 L8,-3 L4,1 L6,7 L0,5 L-6,7 L-4,1 L-8,-3 L-2,-3 Z" 
                          fill="url(#tealGrad)"
                        />
                      </motion.g>
                      
                      {/* Plus/Medical Icon - Bottom Right */}
                      <motion.g
                        transform="translate(55, 55)"
                        animate={{ y: [3, -3, 3] }}
                        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                      >
                        <circle cx="0" cy="0" r="22" fill="white" stroke="url(#blueGrad)" strokeWidth="2" opacity="0.95"/>
                        <rect x="-7" y="-3" width="14" height="6" fill="url(#blueGrad)" rx="3"/>
                        <rect x="-3" y="-7" width="6" height="14" fill="url(#blueGrad)" rx="3"/>
                      </motion.g>
                      
                      {/* Connecting Lines */}
                      <motion.g
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 0.3 }}
                        transition={{ duration: 2, delay: 0.5 }}
                      >
                        <path 
                          d="M-40,-40 Q-20,-20 0,0 Q20,20 40,40" 
                          stroke="url(#blueGrad)" 
                          strokeWidth="2" 
                          fill="none"
                          strokeDasharray="5,5"
                          opacity="0.4"
                        />
                        <path 
                          d="M40,-40 Q20,-20 0,0 Q-20,20 -40,40" 
                          stroke="url(#tealGrad)" 
                          strokeWidth="2" 
                          fill="none"
                          strokeDasharray="5,5"
                          opacity="0.4"
                        />
                      </motion.g>
                      
                      {/* Background Circles */}
                      <g opacity="0.1">
                        <circle cx="0" cy="0" r="120" fill="none" stroke="url(#blueGrad)" strokeWidth="1"/>
                        <circle cx="0" cy="0" r="160" fill="none" stroke="url(#tealGrad)" strokeWidth="1"/>
                      </g>
                      
                    </g>
                  </svg>
                </div>
                
                {/* Floating Cards */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-6 -right-4 sm:top-6 sm:right-4 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-blue-100"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
                    <div>
                      <p className="font-semibold text-slate-800 text-sm sm:text-base">Pain-Free</p>
                      <p className="text-xs sm:text-sm text-slate-600">Guarantee</p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -bottom-4 -left-4 sm:bottom-6 sm:left-6 bg-white rounded-xl sm:rounded-2xl shadow-xl p-3 sm:p-4 border border-teal-100"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xs sm:text-sm">24/7</span>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-800 text-sm sm:text-base">Emergency</p>
                      <p className="text-xs sm:text-sm text-slate-600">Support</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}