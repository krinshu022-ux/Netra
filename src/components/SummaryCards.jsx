import React from 'react';
import { Users, FileText, AlertOctagon, BellRing, TrendingUp } from 'lucide-react';

export const SummaryCards = ({ 
  totalSuspects = 48, 
  activeFIRs = 27, 
  highRiskCount = 12, 
  activeAlerts = 8 
}) => {
  const stats = [
    {
      title: 'Total Suspects',
      value: totalSuspects,
      label: 'Tracked Entities',
      icon: Users,
      color: 'text-[#123A72]',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      title: 'Active FIRs',
      value: activeFIRs,
      label: '5 Stations',
      icon: FileText,
      color: 'text-[#174EA6]',
      bgColor: 'bg-indigo-50',
      borderColor: 'border-indigo-200'
    },
    {
      title: 'High Risk',
      value: highRiskCount,
      label: 'Score ≥ 80/100',
      icon: AlertOctagon,
      color: 'text-[#D32F2F]',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    },
    {
      title: 'Active Alerts',
      value: activeAlerts,
      label: 'Automated Triggers',
      icon: BellRing,
      color: 'text-[#F59E0B]',
      bgColor: 'bg-amber-50',
      borderColor: 'border-amber-200'
    }
  ];

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-4">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className={`bg-white rounded-xl p-3.5 sm:p-4 border ${stat.borderColor} shadow-gov hover:shadow-gov-md transition-shadow duration-150 flex items-center justify-between`}
          >
            <div>
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">{stat.title}</p>
              <div className="flex items-baseline space-x-2 mt-1">
                <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">{stat.value}</span>
                <span className="text-[11px] font-medium text-slate-500 hidden sm:inline">{stat.label}</span>
              </div>
            </div>
            <div className={`p-2.5 rounded-lg ${stat.bgColor} ${stat.color}`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SummaryCards;
