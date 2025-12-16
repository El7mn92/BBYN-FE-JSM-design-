import React, { useState } from 'react';
import { SubService } from '../types';
import { 
  ArrowLeft, 
  Paperclip, 
  HelpCircle, 
  Info, 
  CheckCircle2 
} from 'lucide-react';

interface Props {
  service: SubService;
  onBack: () => void;
  onSubmit: () => void;
}

export const TicketForm: React.FC<Props> = ({ service, onBack, onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      // Wait a moment then go back
      setTimeout(() => {
        onSubmit();
      }, 1500);
    }, 1000);
  };

  if (showSuccess) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center animate-fade-in bg-white rounded-xl shadow-sm border border-gray-200 p-8">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 size={40} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Ticket Submitted!</h2>
        <p className="text-gray-500 text-center max-w-md">
          Your request regarding <span className="font-semibold text-gray-800">{service.name}</span> has been received. 
          Ticket ID: <span className="font-mono bg-gray-100 px-2 py-0.5 rounded">INC-2023-892</span>
        </p>
      </div>
    );
  }

  return (
    <div className="animate-slide-up max-w-5xl mx-auto">
      {/* Header Navigation */}
      <button 
        onClick={onBack}
        className="group flex items-center gap-2 text-sm text-gray-500 mb-6 hover:text-boubyan-red transition-colors"
      >
        <div className="p-1.5 rounded-full bg-white border border-gray-200 group-hover:border-boubyan-red transition-colors">
          <ArrowLeft size={16} />
        </div>
        <span className="font-medium">Back to Catalog</span>
      </button>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Form Area */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100 bg-gray-50 flex items-center gap-3">
              <div className="p-2 bg-boubyan-red/10 text-boubyan-red rounded-lg">
                <service.icon size={20} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-gray-900">{service.name}</h2>
                <p className="text-xs text-gray-500">Please provide details about your request</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-6">
              {/* Requester Info (Read Only) */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Requester</label>
                  <input 
                    type="text" 
                    value="Abdulrahman Bin Hussain" 
                    disabled 
                    className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-700 text-sm font-medium"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5">Department</label>
                  <input 
                    type="text" 
                    value="IT Operations" 
                    disabled 
                    className="block w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-md text-gray-700 text-sm font-medium"
                  />
                </div>
              </div>

              {/* Urgency */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Urgency</label>
                <div className="flex gap-4">
                  {['Low', 'Medium', 'High', 'Critical'].map((level) => (
                    <label key={level} className="relative flex items-center cursor-pointer">
                      <input type="radio" name="urgency" className="peer sr-only" defaultChecked={level === 'Medium'} />
                      <div className="px-4 py-2 border border-gray-200 rounded-lg text-sm font-medium text-gray-600 hover:bg-gray-50 peer-checked:border-boubyan-red peer-checked:bg-red-50 peer-checked:text-boubyan-red transition-all">
                        {level}
                      </div>
                    </label>
                  ))}
                </div>
              </div>

              {/* Summary */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Summary <span className="text-red-500">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  placeholder="Briefly describe the issue..."
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-boubyan-red focus:border-boubyan-red text-sm"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description <span className="text-red-500">*</span>
                </label>
                <textarea 
                  rows={6}
                  required
                  placeholder="Please provide detailed information about your request..."
                  className="block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-boubyan-red focus:border-boubyan-red text-sm resize-none"
                ></textarea>
                <p className="mt-1 text-xs text-gray-500">Please include any error messages or steps to reproduce.</p>
              </div>

              {/* Attachments */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Attachments</label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 flex flex-col items-center justify-center hover:bg-gray-50 hover:border-boubyan-red transition-colors cursor-pointer">
                  <div className="p-3 bg-gray-100 rounded-full mb-3 text-gray-500">
                    <Paperclip size={20} />
                  </div>
                  <p className="text-sm text-gray-600 font-medium">Click to upload or drag and drop</p>
                  <p className="text-xs text-gray-400 mt-1">SVG, PNG, JPG or PDF (max. 10MB)</p>
                </div>
              </div>

              {/* Actions */}
              <div className="pt-4 flex items-center justify-end gap-3 border-t border-gray-100">
                <button 
                  type="button" 
                  onClick={onBack}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-6 py-2.5 bg-boubyan-red text-white rounded-lg text-sm font-medium hover:bg-red-800 transition-all shadow-sm flex items-center gap-2"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Ticket'}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-6">
           {/* Service Details Card */}
           <div className="bg-white p-5 rounded-xl shadow-sm border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                <Info size={18} className="text-blue-500" />
                About this Service
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {service.description}
                <br /><br />
                Standard SLA for this request type is <span className="font-semibold text-gray-900">4 hours</span> for response and <span className="font-semibold text-gray-900">2 business days</span> for resolution.
              </p>
           </div>

           {/* Knowledge Base Suggestions */}
           <div className="bg-blue-50 p-5 rounded-xl border border-blue-100">
              <h3 className="font-semibold text-blue-900 mb-3 flex items-center gap-2">
                <HelpCircle size={18} />
                Related Articles
              </h3>
              <ul className="space-y-3">
                {[1, 2, 3].map((i) => (
                   <li key={i} className="flex items-start gap-2 group cursor-pointer">
                     <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-400 group-hover:bg-blue-600"></span>
                     <span className="text-sm text-blue-800 group-hover:text-blue-900 underline-offset-2 group-hover:underline leading-tight">
                       How to troubleshoot {service.name} issues before submitting a ticket
                     </span>
                   </li>
                ))}
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
};