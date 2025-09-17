//@ts-nocheck
import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, Heart, CheckCircle, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function AboutSection() {
  const features = [
    {
      icon: Award,
      title: 'Award-Winning Care',
      description: 'Recognized for excellence in dental healthcare and patient satisfaction.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Board-certified specialists with decades of combined experience.'
    },
    {
      icon: Clock,
      title: 'Advanced Technology',
      description: 'State-of-the-art equipment for precise, comfortable treatments.'
    },
    {
      icon: Heart,
      title: 'Patient-Centered',
      description: 'Personalized care plans tailored to your unique needs and goals.'
    }
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-blue-50 px-4 py-2 rounded-full"
              >
                <Award className="w-4 h-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">About Our Practice</span>
              </motion.div>
              
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Excellence in Dental Care
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
                  Since 2009
                </span>
              </h2>
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                At DentalCare Elite, we combine cutting-edge technology with compassionate care 
                to deliver exceptional dental experiences. Our commitment to excellence has made 
                us the trusted choice for families throughout the community.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.4 }}
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white px-8"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Our Story
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Images */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-6">
                {/* Main large image */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="col-span-2 relative overflow-hidden rounded-3xl shadow-2xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=800&h=400&fit=crop"
                    alt="Modern dental office"
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
                </motion.div>

                {/* Two smaller images */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop"
                    alt="Dental equipment"
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="relative overflow-hidden rounded-2xl shadow-xl"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=300&h=200&fit=crop"
                    alt="Happy patient"
                    className="w-full h-24 sm:h-32 object-cover"
                  />
                </motion.div>
              </div>
            </motion.div>
            
            {/* Stats Card - adapted for mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="lg:absolute lg:-bottom-8 lg:-left-8 mt-8 lg:mt-0 bg-white rounded-2xl shadow-2xl p-6 border border-blue-100"
            >
              <div className="space-y-2 text-center lg:text-left">
                <p className="text-2xl font-bold text-slate-800">15+</p>
                <p className="text-sm text-slate-600">Years of Excellence</p>
                <div className="flex items-center justify-center lg:justify-start gap-1">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span className="text-xs text-slate-500">Certified Practice</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
