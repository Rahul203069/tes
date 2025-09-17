import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
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
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="space-y-4">
        <Input name="patient_name" placeholder="Full Name" value={formData.patient_name} onChange={handleChange} className="h-12" />
        <Input name="patient_email" type="email" placeholder="Email Address" value={formData.patient_email} onChange={handleChange} className="h-12" />
        <Input name="patient_phone" placeholder="Phone Number" value={formData.patient_phone} onChange={handleChange} className="h-12" />
        <Textarea name="notes" placeholder="Additional notes or questions (optional)" value={formData.notes} onChange={handleChange} />
      </motion.div>
      <div className="flex gap-4">
        <Button variant="outline" onClick={onBack} className="w-full" disabled={isSubmitting}>
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
        <Button
          onClick={handleNext}
          disabled={!isFormValid || isSubmitting}
          className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...
            </>
          ) : (
            <>
              Book Appointment <ArrowRight className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
}