import React from 'react';
import { Phone, DollarSign, FileText, MapPin, AlertTriangle, Smartphone } from 'lucide-react';

export const ActivityTimeline = ({ events = [] }) => {
  if (!events || events.length === 0) {
    return (
      <div className="text-center py-4 text-xs text-slate-400">
        No recent activity logged for this entity.
      </div>
    );
  }

  const getIconAndColor = (type) => {
    switch (type) {
      case 'call':
        return { icon: Phone, bg: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-300' };
      case 'money':
        return { icon: DollarSign, bg: 'bg-emerald-100', text: 'text-emerald-700', border: 'border-emerald-300' };
      case 'fir':
        return { icon: FileText, bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-300' };
      case 'location':
        return { icon: MapPin, bg: 'bg-indigo-100', text: 'text-indigo-700', border: 'border-indigo-300' };
      case 'device':
        return { icon: Smartphone, bg: 'bg-slate-100', text: 'text-slate-700', border: 'border-slate-300' };
      case 'alert':
      default:
        return { icon: AlertTriangle, bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-300' };
    }
  };

  return (
    <div className="relative pl-4 space-y-4 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-200">
      {events.map((ev, index) => {
        const { icon: Icon, bg, text, border } = getIconAndColor(ev.type);
        return (
          <div key={index} className="relative flex items-start space-x-3 text-xs">
            {/* Timeline Marker */}
            <div className={`-ml-4 mt-0.5 w-6 h-6 rounded-full ${bg} ${text} ${border} border flex items-center justify-center flex-shrink-0 shadow-sm`}>
              <Icon className="w-3 h-3" />
            </div>

            {/* Event Content */}
            <div className="flex-1 bg-white border border-slate-200 rounded-lg p-2.5 shadow-sm">
              <div className="flex items-center justify-between mb-0.5">
                <span className="font-bold text-slate-800">{ev.title}</span>
                <span className="font-mono text-[10px] text-slate-500 bg-slate-100 px-1.5 py-0.2 rounded font-semibold">
                  {ev.time}
                </span>
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">{ev.desc}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ActivityTimeline;
