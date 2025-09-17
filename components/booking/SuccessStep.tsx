import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle, Calendar, Clock, User, Smile } from 'lucide-react';
import { format } from 'date-fns';

export default function SuccessStep({ data, onClose }) {
  return (
    <motion.div 
      className="text-center space-y-6"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
        <CheckCircle className="w-12 h-12 text-white" />
      </div>
      
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-slate-800">Thank You, {data.patient_name}!</h2>
        <p className="text-slate-600">
          Your appointment request has been sent. We will contact you shortly to confirm.
        </p>
      </div>

      <div className="p-6 bg-slate-100 rounded-xl text-left space-y-4">
        <h3 className="font-bold text-slate-800 text-lg">Appointment Details</h3>
        <div className="space-y-3 text-sm">
          <div className="flex items-center gap-3">
            <Smile className="w-4 h-4 text-blue-500" />
            <span className="text-slate-600">Service: <strong>{data.service}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-blue-500" />
            <span className="text-slate-600">Date: <strong>{format(new Date(data.preferred_date), 'EEEE, MMMM d, yyyy')}</strong></span>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-4 h-4 text-blue-500" />
            <span className="text-slate-600">Time: <strong>{format(new Date(data.preferred_date), 'h:mm a')}</strong></span>
          </div>
        </div>
      </div>
      
      <Button onClick={onClose} className="w-full bg-gradient-to-r from-blue-600 to-teal-500 text-white">
        Done
      </Button>
    </motion.div>
  );
}