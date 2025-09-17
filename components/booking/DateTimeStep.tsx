//@ts-nocheck
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ChevronLeft, ChevronRight } from 'lucide-react';

const availableTimes = [
  '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
];

export default function DateTimeStep({ onNext, onBack, data }) {
  const [date, setDate] = useState(data.preferred_date ? new Date(data.preferred_date) : new Date());
  const [time, setTime] = useState(data.preferred_date ? new Date(data.preferred_date).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '');
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const handleNext = () => {
    if (date && time) {
      const [hours, minutes] = time.split(/:| /);
      const newDate = new Date(date);
      newDate.setHours(parseInt(hours, 10) + (time.includes('PM') && hours !== '12' ? 12 : 0));
      newDate.setMinutes(parseInt(minutes, 10));
      onNext({ preferred_date: newDate });
    }
  };

  // Generate calendar days for current month
  const getDaysInMonth = (date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    for (let i = 0; i < 35; i++) {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = currentDate.getMonth() === month;
      const isPast = currentDate < today;
      const isSelected = date && currentDate.toDateString() === date.toDateString();
      
      days.push({
        date: currentDate,
        day: currentDate.getDate(),
        isCurrentMonth,
        isPast,
        isSelected,
        isDisabled: isPast || !isCurrentMonth
      });
    }
    
    return days;
  };

  const days = getDaysInMonth(currentMonth);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const selectDate = (dayObj) => {
    if (!dayObj.isDisabled) {
      setDate(dayObj.date);
    }
  };

  return (
    <div className="flex flex-col h-full max-h-[500px]">
      {/* Scrollable Content */}
      <div className="flex-1 space-y-4 overflow-y-auto px-1 pb-4">
        {/* Date Selection */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3 text-sm">Select a Date</h3>
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }}
            className="bg-white border rounded-lg p-3"
          >
            {/* Calendar Header */}
            <div className="flex items-center justify-between mb-3">
              <button
                onClick={previousMonth}
                className="p-1 hover:bg-gray-100 rounded"
                type="button"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <h4 className="font-medium text-sm">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h4>
              <button
                onClick={nextMonth}
                className="p-1 hover:bg-gray-100 rounded"
                type="button"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Day Names */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map(day => (
                <div key={day} className="text-xs font-medium text-gray-500 text-center p-1">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {days.map((dayObj, index) => (
                <button
                  key={index}
                  onClick={() => selectDate(dayObj)}
                  disabled={dayObj.isDisabled}
                  className={`
                    text-xs p-1.5 rounded transition-colors min-h-[28px]
                    ${dayObj.isDisabled 
                      ? 'text-gray-300 cursor-not-allowed' 
                      : 'text-gray-700 hover:bg-blue-50 cursor-pointer'
                    }
                    ${dayObj.isSelected 
                      ? 'bg-blue-500 text-white hover:bg-blue-600' 
                      : ''
                    }
                    ${!dayObj.isCurrentMonth ? 'opacity-40' : ''}
                  `}
                  type="button"
                >
                  {dayObj.day}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="font-semibold text-slate-800 mb-3 text-sm">Select a Time</h3>
          <div className="grid grid-cols-2 gap-2">
            {availableTimes.map((t, index) => (
              <motion.button
                key={t}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.03 }}
                onClick={() => setTime(t)}
                className={`
                  px-3 py-2 text-sm rounded-md border transition-all duration-200
                  ${time === t 
                    ? 'bg-blue-500 text-white border-blue-500 shadow-md' 
                    : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }
                `}
                type="button"
              >
                {t}
              </motion.button>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Bottom Buttons */}
      <div className="flex gap-3 pt-4 border-t bg-white mt-4">
        <button
          onClick={onBack}
          className="flex-1 px-4 py-2.5 text-sm border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
          type="button"
        >
          <ArrowLeft className="w-4 h-4" /> Back
        </button>
        <button
          onClick={handleNext}
          disabled={!date || !time}
          className="flex-1 px-4 py-2.5 text-sm bg-gradient-to-r from-blue-600 to-teal-500 text-white rounded-md hover:from-blue-700 hover:to-teal-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
          type="button"
        >
          Continue <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}