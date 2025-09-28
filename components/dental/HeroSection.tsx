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

          {/* Right Content - Image with Floating Cards */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{ y, opacity }}
            className="relative mt-12 lg:mt-0"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative bg-gradient-to-br from-blue-50 via-white to-teal-50 rounded-3xl shadow-2xl overflow-hidden">
                <div className="aspect-[4/5]">
                  {/* Replace this src with your dental image URL */}
                  <img 
                    src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                    alt="Modern dental care and beautiful smile"
                    className="w-full h-full object-cover"
                  />
                  {/* Optional overlay for better contrast with floating cards */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent"></div>
                </div>
                
                {/* Floating Cards - Same as before */}
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