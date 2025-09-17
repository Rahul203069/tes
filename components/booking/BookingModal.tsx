//@ts-nocheck
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { appointment } from '@/Entities/appointment';
import { Smile, X } from 'lucide-react';

import ServiceStep from './ServiceStep';
import DateTimeStep from './DateTimeStep';
import DetailsStep from './DetailsStep';
import SuccessStep from './SuccessStep';
const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const steps = [
  { id: 1, title: 'Select a Service', description: 'Choose the service you are interested in.' },
  { id: 2, title: 'Choose Date & Time', description: 'Select a convenient date and time for your appointment.' },
  { id: 3, title: 'Your Details', description: 'Please provide your contact information.' },
  { id: 4, title: 'Booking Confirmed', description: 'Your appointment has been successfully requested.' },
];

export default function BookingModal({ isOpen, onClose }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [appointmentData, setAppointmentData] = useState({
    service: '',
    preferred_date: null,
    patient_name: '',
    patient_email: '',
    patient_phone: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleNext = (data) => {
    setAppointmentData(prev => ({ ...prev, ...data }));
    if (currentStep < 4) {
      setCurrentStep(s => s + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(s => s - 1);
    }
  };

  const handleSubmit = async (data) => {
    setIsSubmitting(true);
    const finalData = { ...appointmentData, ...data };
    setAppointmentData(finalData);
    
    try {
     await wait(1000);
      setIsSubmitting(false);
      handleNext(finalData);
    } catch (error) {
      console.error('Failed to book appointment:', error);
      // You could add error handling state here
      setIsSubmitting(false);
    }
  };
  
  const handleClose = () => {
    setCurrentStep(1);
    setAppointmentData({
      service: '',
      preferred_date: null,
      patient_name: '',
      patient_email: '',
      patient_phone: '',
      notes: '',
    });
    onClose();
  };

  const currentStepInfo = steps[currentStep - 1];

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg p-0 bg-slate-50 border-0 shadow-2xl rounded-2xl">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-400 rounded-xl flex items-center justify-center">
                <Smile className="w-6 h-6 text-white" />
              </div>
              <div>
                <DialogTitle className="text-xl font-bold text-slate-800">{currentStepInfo.title}</DialogTitle>
                <DialogDescription className="text-slate-600">{currentStepInfo.description}</DialogDescription>
              </div>
            </div>
            {currentStep < 4 && (
              <div className="text-sm font-bold text-slate-500">
                Step {currentStep} / 3
              </div>
            )}
          </div>
        </DialogHeader>

        <div className="p-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 300, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -300, opacity: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {currentStep === 1 && <ServiceStep onNext={handleNext} data={appointmentData} />}
              {currentStep === 2 && <DateTimeStep onNext={handleNext} onBack={handleBack} data={appointmentData} />}
              {currentStep === 3 && <DetailsStep onNext={handleSubmit} onBack={handleBack} data={appointmentData} isSubmitting={isSubmitting} />}
              {currentStep === 4 && <SuccessStep data={appointmentData} onClose={handleClose} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
}