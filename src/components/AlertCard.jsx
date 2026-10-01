import React from 'react';
import { AlertTriangle, Clock, MapPin, ShieldAlert, Network, CheckSquare } from 'lucide-react';

export const AlertCard = ({ alert, onViewNetwork }) => {
  const isHigh = alert.riskLevel === 'HIGH';
  const isMed = alert.riskLevel === 'MEDIUM';

  const riskBadgeStyle = isHigh
    ? 'bg-red-50 text-red-700 border-red-200'
    : isMed
    ? 'bg-amber-50 text-amber-700 border-amber-200'
    : 'bg-emerald-50 text-emerald-700 border-emerald-200';

  const borderAccent = isHigh
    ? 'border-l-4 border-l-[#D32F2F]'
    : isMed
    ? 'border-l-4 border-l-[#F59E0B]'
    : 'border-l-4 border-l-[#15803D]';

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-gov hover:shadow-gov-md transition-shadow p-4 sm:p-5 flex flex-col justify-between ${borderAccent}`}
    >
      <div>
        {/* Top Header */}
        <div className="flex items-start justify-between gap-2 mb-2">
          <div className="flex items-center space-x-2">
            <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-slate-100 text-slate-700 border border-slate-200">
              {alert.category}
            </span>
            <span className={`text-[10px] font-black uppercase px-2 py-0.5 rounded border ${riskBadgeStyle}`}>
              {alert.riskLevel} RISK
            </span>
          </div>
          <div className="flex items-center text-[11px] text-slate-400 font-medium">
            <Clock className="w-3 h-3 mr-1" />
            <span>{alert.timestamp}</span>
          </div>
        </div>

        {/* Title & Description */}
        <h4 className="text-sm sm:text-base font-extrabold text-slate-900 mb-1.5">
          {alert.title}
        </h4>
        <p className="text-xs text-slate-700 leading-relaxed mb-3">
          {alert.summary}
        </p>

        {/* Detailed Pattern Visual Box */}
        {alert.category === 'Circular Money Transfer' && (
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 my-2 text-xs font-mono text-amber-950">
            <div className="flex flex-col sm:flex-row items-center justify-between text-center gap-2">
              <span className="bg-white px-2 py-1 rounded shadow-xs font-bold">Rakesh Kumar</span>
              <span className="text-red-600 font-bold">&darr; ₹50,000</span>
              <span className="bg-white px-2 py-1 rounded shadow-xs font-bold">Amit Kumar</span>
              <span className="text-red-600 font-bold">&darr; ₹48,000</span>
              <span className="bg-white px-2 py-1 rounded shadow-xs font-bold">Sunil Yadav</span>
              <span className="text-emerald-700 font-bold">&darr; ₹45,000</span>
              <span className="bg-white px-2 py-1 rounded shadow-xs font-bold">Rakesh (Loop)</span>
            </div>
          </div>
        )}

        {/* Entities involved */}
        <div className="mb-3 space-y-1.5 text-xs">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="font-semibold text-slate-500 text-[11px]">Entities:</span>
            {alert.entities?.map((ent, idx) => (
              <span key={idx} className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded-md font-bold text-[11px] border border-slate-200">
                {ent}
              </span>
            ))}
          </div>

          <div className="flex items-center text-slate-600 text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
            <span>{alert.location}</span>
          </div>

          <div className="flex items-center text-slate-600 text-[11px]">
            <CheckSquare className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
            <span>Evidence: <strong className="font-mono text-slate-800">{alert.evidence}</strong></span>
          </div>
        </div>
      </div>

      {/* Action footer */}
      <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
        <span className="text-[10px] text-slate-400 font-mono">CODE: {alert.id}</span>
        <button
          onClick={() => onViewNetwork && onViewNetwork(alert)}
          className="inline-flex items-center space-x-1.5 px-3 py-1.5 bg-[#123A72] hover:bg-[#071B3A] text-white rounded-lg text-xs font-bold transition-colors shadow-xs"
        >
          <Network className="w-3.5 h-3.5 text-sky-300" />
          <span>HIGHLIGHT ON GRAPH</span>
        </button>
      </div>
    </div>
  );
};

export default AlertCard;
