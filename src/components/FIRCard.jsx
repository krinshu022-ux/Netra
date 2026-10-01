import React from 'react';
import { FileText, Calendar, User, ShieldAlert, ArrowRight } from 'lucide-react';

export const FIRCard = ({ fir, onSelectFIR, isSelected = false }) => {
  const isHigh = fir.risk === 'HIGH';
  const isMed = fir.risk === 'MEDIUM';

  const riskBadgeStyle = isHigh
    ? 'bg-red-50 text-red-700 border-red-200'
    : isMed
    ? 'bg-amber-50 text-amber-700 border-amber-200'
    : 'bg-emerald-50 text-emerald-700 border-emerald-200';

  const statusStyle = fir.status === 'Resolved'
    ? 'bg-emerald-100 text-emerald-800'
    : fir.status === 'Under Investigation'
    ? 'bg-blue-100 text-blue-800'
    : 'bg-slate-100 text-slate-800';

  return (
    <div
      onClick={() => onSelectFIR(fir)}
      className={`p-3 rounded-xl border transition-all duration-150 cursor-pointer text-xs ${
        isSelected
          ? 'bg-blue-50/90 border-[#174EA6] shadow-md ring-2 ring-[#174EA6]/20'
          : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-gov'
      }`}
    >
      {/* Top Station Header */}
      <div className="flex items-center justify-between gap-1 mb-1">
        <span className="font-mono text-[10px] font-bold text-slate-500 uppercase truncate">
          {fir.station}
        </span>
        <span className={`px-1.5 py-0.2 rounded text-[9px] font-extrabold uppercase border ${riskBadgeStyle}`}>
          {fir.risk}
        </span>
      </div>

      {/* FIR Number & Incident Type */}
      <div className="flex items-center justify-between mb-1.5">
        <h4 className="font-extrabold text-slate-900 text-xs tracking-tight flex items-center gap-1.5">
          <FileText className="w-3.5 h-3.5 text-[#123A72]" />
          <span>{fir.firNumber}</span>
        </h4>
        <span className="font-semibold text-slate-700 text-[11px]">
          {fir.incidentType}
        </span>
      </div>

      {/* Description Snippet */}
      <p className="text-[11px] text-slate-600 line-clamp-2 mb-2 leading-relaxed">
        {fir.description}
      </p>

      {/* Bottom Metadata */}
      <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[10px] text-slate-500">
        <div className="flex items-center space-x-1">
          <Calendar className="w-3 h-3 text-slate-400" />
          <span>{fir.date}</span>
        </div>
        <div className="flex items-center space-x-1">
          <User className="w-3 h-3 text-slate-400" />
          <span className="truncate max-w-[100px]">{fir.investigator}</span>
        </div>
      </div>
    </div>
  );
};

export default FIRCard;
