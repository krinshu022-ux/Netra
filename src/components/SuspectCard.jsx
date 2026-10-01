import React from 'react';
import { Network, UserCheck, MapPin, Clock, FileText, Share2, ShieldAlert } from 'lucide-react';
import ASSETS from '../assets/assets';

export const SuspectCard = ({ suspect, onViewProfile, onViewNetwork }) => {
  const isHigh = suspect.riskLevel === 'HIGH';
  const isMed = suspect.riskLevel === 'MEDIUM';

  const riskBadgeStyle = isHigh
    ? 'bg-red-50 text-red-700 border-red-200'
    : isMed
    ? 'bg-amber-50 text-amber-700 border-amber-200'
    : 'bg-emerald-50 text-emerald-700 border-emerald-200';

  const riskBorderAccent = isHigh
    ? 'border-l-4 border-l-[#D32F2F]'
    : isMed
    ? 'border-l-4 border-l-[#F59E0B]'
    : 'border-l-4 border-l-[#15803D]';

  return (
    <div
      className={`bg-white rounded-xl border border-slate-200 shadow-gov hover:shadow-gov-md transition-all duration-200 p-4 flex flex-col justify-between ${riskBorderAccent}`}
    >
      <div>
        {/* Top Header: Photo, Name, Alias & Risk Score */}
        <div className="flex items-start gap-3 mb-3">
          <div className="relative flex-shrink-0">
            <img
              src={suspect.photo || ASSETS.defaultSuspect}
              alt={suspect.name}
              onError={(e) => {
                e.currentTarget.src = ASSETS.defaultSuspect;
              }}
              className="w-14 h-14 rounded-lg object-cover border border-slate-200 shadow-sm bg-slate-100"
            />
            <div
              className={`absolute -bottom-1 -right-1 w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-black text-white ${
                isHigh ? 'bg-red-600' : isMed ? 'bg-amber-500' : 'bg-emerald-600'
              } ring-2 ring-white`}
              title={`Risk Score: ${suspect.riskScore}/100`}
            >
              {suspect.riskScore}
            </div>
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-1">
              <h4 className="text-sm font-bold text-slate-900 truncate" title={suspect.name}>
                {suspect.name}
              </h4>
            </div>

            <p className="text-[11px] text-slate-500 font-medium">
              Alias: <span className="font-semibold text-slate-700">{suspect.alias || 'None'}</span>
            </p>

            <div className="flex items-center gap-2 mt-1">
              <span className={`inline-block px-2 py-0.5 rounded text-[10px] font-extrabold uppercase border ${riskBadgeStyle}`}>
                {suspect.riskLevel} RISK
              </span>
              <span className="text-[10px] text-slate-400 font-mono font-medium truncate">
                {suspect.id}
              </span>
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-3 gap-1.5 bg-slate-50 border border-slate-100 rounded-lg p-2 text-center mb-3">
          <div>
            <span className="text-[9px] font-semibold text-slate-500 uppercase block">FIRs</span>
            <span className="text-xs font-bold text-slate-800">{suspect.firCount}</span>
          </div>
          <div className="border-x border-slate-200">
            <span className="text-[9px] font-semibold text-slate-500 uppercase block">Links</span>
            <span className="text-xs font-bold text-[#174EA6]">{suspect.connections}</span>
          </div>
          <div>
            <span className="text-[9px] font-semibold text-slate-500 uppercase block">Score</span>
            <span className="text-xs font-bold text-red-600">{suspect.riskScore}/100</span>
          </div>
        </div>

        {/* Metadata Details */}
        <div className="space-y-1 text-xs text-slate-600 mb-3">
          <div className="flex items-center text-[11px]">
            <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
            <span className="truncate">Location: <strong className="text-slate-800">{suspect.location}</strong></span>
          </div>
          <div className="flex items-center text-[11px]">
            <Share2 className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
            <span className="truncate">Group: <strong className="text-slate-800">{suspect.group}</strong></span>
          </div>
          <div className="flex items-center text-[11px]">
            <Clock className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
            <span className="truncate">Last Active: <span className="text-slate-500 font-medium">{suspect.lastActivity}</span></span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
        <button
          onClick={() => onViewProfile(suspect)}
          className="w-full inline-flex items-center justify-center space-x-1 py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors"
        >
          <UserCheck className="w-3.5 h-3.5 text-[#123A72]" />
          <span>View Profile</span>
        </button>

        <button
          onClick={() => onViewNetwork(suspect)}
          className="w-full inline-flex items-center justify-center space-x-1 py-1.5 px-2 bg-[#123A72] hover:bg-[#071B3A] text-white rounded-lg text-xs font-bold shadow-sm transition-colors"
        >
          <Network className="w-3.5 h-3.5 text-[#38BDF8]" />
          <span>View Network</span>
        </button>
      </div>
    </div>
  );
};

export default SuspectCard;
