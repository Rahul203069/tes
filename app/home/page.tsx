"use client"
import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  CheckCircle, 
  Calendar,
  Shield,
  Heart,
  Smile,
  Award,
  Clock,
  Users,
  ArrowRight,
  Play
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

import HeroSection from '@/components/dental/HeroSection';
import ServicesSection from '@/components/ServiceSection';
import AboutSection from '@/components/dental/AboutSection';
import TestimonialsSection from '@/components/dental/TestimonialSection';
import TeamSection from '@/components/dental/TeamSection';
import ContactSection from '@/components/dental/ContactSection';
import NavigationBar from '@/components/dental/NavigationBar';
import BookingModal from '@/components/booking/BookingModal';

export default function page() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 200], [1, 0.8]);
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50">
      <NavigationBar onBookAppointment={() => setIsBookingModalOpen(true)} />
      
      <main className="relative">
        <HeroSection onBookAppointment={() => setIsBookingModalOpen(true)} />
       
        <AboutSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection onBookAppointment={() => setIsBookingModalOpen(true)} />
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg flex items-center justify-center">
                  <Smile className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">DentalCare Elite</h3>
              </div>
              <p className="text-slate-400 leading-relaxed">
                Transforming smiles with world-class dental care and cutting-edge technology.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li>Preventive Care</li>
                <li>Cosmetic Dentistry</li>
                <li>Orthodontics</li>
                <li>Oral Surgery</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Contact</h4>
              <div className="space-y-2 text-slate-400">
                <p className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  (555) 123-4567
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@dentalcare-elite.com
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  123 Dental Ave, City
                </p>
              </div>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-semibold text-lg">Hours</h4>
              <div className="space-y-1 text-slate-400 text-sm">
                <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
                <p>Saturday: 9:00 AM - 4:00 PM</p>
                <p>Sunday: Closed</p>
                <p className="text-teal-400 mt-2">Emergency calls 24/7</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-slate-700 pt-8 text-center">
            <p className="text-slate-400">
              © 2024 DentalCare Elite. All rights reserved. | Designed with excellence in mind.
            </p>
          </div>
        </div>
      </footer>
      
      <BookingModal isOpen={isBookingModalOpen} onClose={() => setIsBookingModalOpen(false)} />
    </div>
  );
}