
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, Calendar, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';

export default function ContactSection({ onBookAppointment }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Call Us',
      info: '(555) 123-4567',
      description: '24/7 Emergency Line',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      info: 'hello@dentalcare-elite.com',
      description: 'Quick Response Guaranteed',
      color: 'from-teal-500 to-teal-600'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      info: '123 Dental Avenue, Suite 100',
      description: 'Downtown Medical District',
      color: 'from-indigo-500 to-indigo-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      info: 'Mon-Fri: 8AM-6PM',
      description: 'Saturday: 9AM-4PM',
      color: 'from-purple-500 to-purple-600'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
            Ready to Transform
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">
              Your Smile?
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Contact us today to schedule your consultation and take the first step 
            toward the smile you've always dreamed of.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="group hover:shadow-xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                    <CardContent className="p-6 flex items-center gap-4">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      >
                        <item.icon className="w-7 h-7 text-white" />
                      </motion.div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-slate-800 text-lg">{item.title}</h3>
                        <p className="text-slate-900 font-medium">{item.info}</p>
                        <p className="text-slate-600 text-sm">{item.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            {/* Quick Actions */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-slate-800">Quick Actions</h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button 
                  onClick={onBookAppointment}
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white flex-1"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Online
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 hover:text-blue-600 flex-1"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call Now
                </Button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
              <CardContent className="p-8">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-slate-800 mb-2">Send Us a Message</h3>
                  <p className="text-slate-600">We'll get back to you within 24 hours</p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="h-12 border-slate-200 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <Input
                        type="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="h-12 border-slate-200 focus:border-blue-400"
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <Input
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="h-12 border-slate-200 focus:border-blue-400"
                      />
                    </div>
                    <div>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({...formData, service: e.target.value})}
                        className="w-full h-12 px-3 border border-slate-200 rounded-md focus:border-blue-400 focus:outline-none bg-white"
                      >
                        <option value="">Select Service</option>
                        <option value="consultation">General Consultation</option>
                        <option value="cleaning">Dental Cleaning</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Orthodontics</option>
                        <option value="emergency">Emergency Care</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <Textarea
                      placeholder="Tell us about your dental needs or questions..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="min-h-32 border-slate-200 focus:border-blue-400 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg"
                    className="w-full bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 text-white h-12 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center gap-2 mt-6 text-sm text-slate-600"
                >
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>We respect your privacy and never share your information</span>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
