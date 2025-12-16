import React from 'react';
import { Activity } from '../types';
import { Clock, CheckCircle2, AlertCircle, CircleDashed } from 'lucide-react';

interface Props {
  activities: Activity[];
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case 'Resolved': return <CheckCircle2 size={16} className="text-green-600" />;
    case 'In Progress': return <Clock size={16} className="text-blue-600" />;
    case 'Open': return <AlertCircle size={16} className="text-orange-500" />;
    default: return <CircleDashed size={16} className="text-gray-400" />;
  }
};

const getStatusColor = (status: string) => {
    switch (status) {
      case 'Resolved': return 'bg-green-50 text-green-700 border-green-200';
      case 'In Progress': return 'bg-blue-50 text-blue-700 border-blue-200';
      case 'Open': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-gray-50 text-gray-700 border-gray-200';
    }
  };

export const RecentActivity: React.FC<Props> = ({ activities }) => {
  return (
    <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
        <h3 className="text-lg font-semibold text-gray-800">Recent Activity</h3>
        <button className="text-sm text-boubyan-red font-medium hover:underline">View All</button>
      </div>
      <div className="divide-y divide-gray-100">
        {activities.map((activity) => (
          <div key={activity.id} className="p-4 hover:bg-gray-50 transition flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-full ${getStatusColor(activity.status)} bg-opacity-20`}>
                 {getStatusIcon(activity.status)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900 group-hover:text-boubyan-red transition-colors">{activity.summary}</p>
                <p className="text-xs text-gray-500 flex items-center gap-2">
                    <span className="font-mono bg-gray-100 px-1 rounded">{activity.ticketId}</span>
                    <span>•</span>
                    <span>{activity.date}</span>
                </p>
              </div>
            </div>
            <div className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(activity.status)}`}>
              {activity.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};