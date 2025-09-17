
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Shield, Sparkles, Zap, Crown, Heart, Smile, ArrowRight } from 'lucide-react';

const services = [
  { icon: Shield, name: 'Preventive Care', color: 'text-blue-500' },
  { icon: Sparkles, name: 'Cosmetic Dentistry', color: 'text-teal-500' },
  { icon: Zap, name: 'Restorative Care', color: 'text-indigo-500' },
  { icon: Crown, name: 'Orthodontics', color: 'text-purple-500' },
  { icon: Heart, name: 'Pediatric Dentistry', color: 'text-pink-500' },
  { icon: Smile, name: 'Emergency Care', color: 'text-red-500' },
];

export default function ServiceStep({ onNext, data }) {
  const [selectedService, setSelectedService] = useState(data.service || '');

  const handleNext = () => {
    if (selectedService) {
      onNext({ service: selectedService });
    }
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {services.map((service, index) => (
          <motion.div
            key={service.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <button
              onClick={() => setSelectedService(service.name)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-300 ${
                selectedService === service.name
                  ? 'border-blue-500 bg-blue-50/80 shadow-lg'
                  : 'border-slate-200 hover:border-blue-300 hover:bg-slate-100/80'
              }`}
            >
              <div className="flex items-center gap-3">
                <service.icon className={`w-6 h-6 ${service.color}`} />
                <span className="font-semibold text-slate-800 text-sm sm:text-base">{service.name}</span>
              </div>
            </button>
          </motion.div>
        ))}
      </div>
      <Button
        onClick={handleNext}
        disabled={!selectedService}
        className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white"
      >
        Continue <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
}
