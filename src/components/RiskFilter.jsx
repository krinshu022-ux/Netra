import React from 'react';
import { ShieldAlert, AlertTriangle, CheckCircle2, Layers } from 'lucide-react';

export const RiskFilter = ({
  activeRiskFilter,
  onRiskFilterChange,
  counts = { all: 48, high: 12, medium: 21, low: 15 }
}) => {
  const categories = [
    {
      id: 'ALL',
      label: 'ALL',
      count: counts.all,
      icon: Layers,
      activeClass: 'bg-[#071B3A] text-white border-[#071B3A] shadow-sm',
      inactiveClass: 'bg-white text-slate-700 border-slate-300 hover:bg-slate-50'
    },
    {
      id: 'HIGH',
      label: 'HIGH RISK',
      count: counts.high,
      icon: ShieldAlert,
      badgeColor: 'bg-red-100 text-red-700',
      activeClass: 'bg-[#D32F2F] text-white border-[#D32F2F] shadow-sm',
      inactiveClass: 'bg-white text-red-700 border-red-200 hover:bg-red-50'
    },
    {
      id: 'MEDIUM',
      label: 'MEDIUM RISK',
      count: counts.medium,
      icon: AlertTriangle,
      badgeColor: 'bg-amber-100 text-amber-700',
      activeClass: 'bg-[#F59E0B] text-white border-[#F59E0B] shadow-sm',
      inactiveClass: 'bg-white text-amber-700 border-amber-200 hover:bg-amber-50'
    },
    {
      id: 'LOW',
      label: 'LOW RISK',
      count: counts.low,
      icon: CheckCircle2,
      badgeColor: 'bg-emerald-100 text-emerald-700',
      activeClass: 'bg-[#15803D] text-white border-[#15803D] shadow-sm',
      inactiveClass: 'bg-white text-emerald-700 border-emerald-200 hover:bg-emerald-50'
    }
  ];

  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
          Suspect Risk Classification
        </h3>
        <span className="text-[11px] text-slate-400 font-medium">Click to filter suspects</span>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
        {categories.map((cat) => {
          const Icon = cat.icon;
          const isActive = activeRiskFilter === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onRiskFilterChange(cat.id)}
              className={`flex-shrink-0 flex items-center space-x-2 px-3 py-1.5 rounded-lg border text-xs font-bold tracking-wide transition-all ${
                isActive ? cat.activeClass : cat.inactiveClass
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.label}</span>
              <span
                className={`px-1.5 py-0.2 text-[10px] font-extrabold rounded-full ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 text-slate-800'
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default RiskFilter;
