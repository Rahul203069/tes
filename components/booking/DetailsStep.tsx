//@ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, Loader2 } from 'lucide-react';

export default function DetailsStep({ onNext, onBack, data, isSubmitting }) {
  const [formData, setFormData] = useState({
    patient_name: data.patient_name || '',
    patient_email: data.patient_email || '',
    patient_phone: data.patient_phone || '',
    notes: data.notes || ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  const isFormValid = formData.patient_name && formData.patient_email && formData.patient_phone;

  return (
    <div className="flex flex-col h-full max-h-[500px]">
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-1 pb-4">
        <motion.div 
          initial={{ opacity: 0, y: 10 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ delay: 0.1 }} 
          className="space-y-4"
        >
          {/* Full Name Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              name="patient_name"
              type="text"
              placeholder="Enter your full name"
              value={formData.patient_name}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Email Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              name="patient_email"
              type="email"
              placeholder="your.email@example.com"
              value={formData.patient_email}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Phone Input */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Phone Number *
            </label>
            <input
              name="patient_phone"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.patient_phone}
              onChange={handleChange}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              required
            />
          </div>

          {/* Notes Textarea */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Additional Notes
              <span className="text-gray-500 font-normal ml-1">(optional)</span>
            </label>
            <textarea
              name="notes"
              placeholder="Any additional information, questions, or special requests..."
              value={formData.notes}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
            />
          </div>
        </motion.div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="flex gap-3 pt-4 border-t bg-white mt-4">
        <button
          onClick={onBack}
          disabled={isSubmitting}
          className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
          type="button"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isFormValid || isSubmitting}
          className="flex-1 px-4 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md hover:from-blue-700 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          type="button"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" /> 
              Submitting...
            </>
          ) : (
            <>
              Book Appointment <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </div>
  );
}