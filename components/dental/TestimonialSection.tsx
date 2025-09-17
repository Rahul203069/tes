
import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      role: 'Marketing Manager',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b776?w=80&h=80&fit=crop&crop=face',
      content: 'The team at DentalCare Elite transformed my smile completely. The entire process was comfortable, professional, and the results exceeded my expectations. I finally have the confidence to smile freely!',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      content: 'After years of avoiding the dentist, Dr. Johnson made me feel completely at ease. The pain-free procedures and amazing results have made me a patient for life. Highly recommend!',
      rating: 5
    },
    {
      name: 'Maria Rodriguez',
      role: 'Teacher',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face',
      content: 'Bringing my children here was the best decision. Dr. Rodriguez is incredible with kids, and the office environment is so welcoming. My whole family loves coming here!',
      rating: 5
    },
    {
      name: 'David Park',
      role: 'Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      content: 'The technology and precision here is unmatched. From digital x-rays to 3D imaging, everything is state-of-the-art. The quality of care is simply exceptional.',
      rating: 5
    },
    {
      name: 'Lisa Chen',
      role: 'Architect',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=80&h=80&fit=crop&crop=face',
      content: 'I was nervous about getting dental implants, but Dr. Chen walked me through every step. The results look completely natural, and the healing was faster than expected.',
      rating: 5
    },
    {
      name: 'Robert Taylor',
      role: 'Consultant',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face',
      content: 'Emergency dental care at 2 AM? They were there for me. The 24/7 support and immediate attention during my dental emergency was incredible. True professionals.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
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
            What Our Patients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Are Saying
            </span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our valued patients have to say 
            about their experience with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 bg-slate-50/50 backdrop-blur-sm h-full">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <motion.div
                    whileHover={{ rotate: 15 }}
                    className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center"
                  >
                    <Quote className="w-5 h-5 text-white" />
                  </motion.div>

                  {/* Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-slate-600 leading-relaxed text-sm">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <motion.img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div>
                      <p className="font-semibold text-slate-800">{testimonial.name}</p>
                      <p className="text-sm text-slate-500">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-slate-50 rounded-2xl px-6 py-4 sm:px-8 sm:py-4 shadow-lg">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 4).map((testimonial, i) => (
                <img
                  key={i}
                  src={testimonial.image}
                  alt=""
                  className="w-10 h-10 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <div className="text-center sm:text-left">
              <p className="font-semibold text-slate-800">Join 2,500+ Happy Patients</p>
              <p className="text-sm text-slate-600">Experience the difference today</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
