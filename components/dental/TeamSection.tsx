//@ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Award, GraduationCap, MapPin } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TeamSection() {
  const doctors = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Lead Cosmetic Dentist',
      image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop&crop=face',
      specialties: ['Cosmetic Dentistry', 'Veneers', 'Smile Design'],
      education: 'Harvard School of Dental Medicine',
      experience: '12 Years',
      description: 'Specializing in transformative smile makeovers and advanced cosmetic procedures.'
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Oral Surgeon',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop&crop=face',
      specialties: ['Oral Surgery', 'Implants', 'Extractions'],
      education: 'UCSF School of Dentistry',
      experience: '15 Years',
      description: 'Expert in complex oral surgical procedures and dental implant placement.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Pediatric Dentist',
      image: 'https://images.unsplash.com/photo-1594824881313-6d1b6d22c0c8?w=400&h=400&fit=crop&crop=face',
      specialties: ['Pediatric Care', 'Preventive', 'Orthodontics'],
      education: 'Columbia University',
      experience: '8 Years',
      description: 'Gentle, child-focused care with expertise in pediatric dental health.'
    }
  ];

  return (
    <section id="team" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Meet Our Expert
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Dental Team
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our team of board-certified specialists brings decades of experience and 
            a passion for exceptional patient care.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => (
            <motion.div
              key={doctor.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm overflow-hidden">
                <div className="relative overflow-hidden">
                  <motion.img 
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700"
                    whileHover={{ scale: 1.05 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent"></div>
                  
                  {/* Floating Badge */}
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.5 }}
                    className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg"
                  >
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-slate-700">{doctor.experience}</span>
                    </div>
                  </motion.div>
                </div>
                
                <CardContent className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {doctor.name}
                    </h3>
                    <p className="text-blue-600 font-medium">{doctor.role}</p>
                  </div>
                  
                  <p className="text-slate-600 text-sm leading-relaxed min-h-[60px]">
                    {doctor.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-slate-600">
                      <GraduationCap className="w-4 h-4 text-blue-500" />
                      <span>{doctor.education}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialties.map((specialty, i) => (
                        <span 
                          key={i}
                          className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full border border-blue-100"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
