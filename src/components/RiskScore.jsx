import React from 'react';
import { AlertCircle, ShieldAlert, CheckCircle } from 'lucide-react';

export const RiskScore = ({ score = 92, riskLevel = 'HIGH', riskFactors = [] }) => {
  const getBadgeStyle = () => {
    switch (riskLevel?.toUpperCase()) {
      case 'HIGH':
        return {
          textColor: 'text-red-700',
          bgColor: 'bg-red-50',
          barColor: 'bg-red-600',
          borderColor: 'border-red-200'
        };
      case 'MEDIUM':
        return {
          textColor: 'text-amber-700',
          bgColor: 'bg-amber-50',
          barColor: 'bg-amber-500',
          borderColor: 'border-amber-200'
        };
      case 'LOW':
      default:
        return {
          textColor: 'text-emerald-700',
          bgColor: 'bg-emerald-50',
          barColor: 'bg-emerald-600',
          borderColor: 'border-emerald-200'
        };
    }
  };

  const style = getBadgeStyle();

  return (
    <div className="bg-slate-50 border border-slate-200 rounded-xl p-3.5 space-y-3">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            AI Risk Score Index
          </span>
          <div className="flex items-baseline space-x-1.5 mt-0.5">
            <span className={`text-2xl font-black ${style.textColor}`}>{score}</span>
            <span className="text-xs font-bold text-slate-400">/ 100</span>
          </div>
        </div>

        <div className={`px-2.5 py-1 rounded-md border text-xs font-extrabold uppercase tracking-wider ${style.bgColor} ${style.textColor} ${style.borderColor}`}>
          {riskLevel} RISK
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div
          className={`h-full ${style.barColor} transition-all duration-500 rounded-full`}
          style={{ width: `${Math.min(score, 100)}%` }}
        />
      </div>

      {/* Risk Factors Explanation */}
      {riskFactors && riskFactors.length > 0 && (
        <div className="pt-2 border-t border-slate-200">
          <p className="text-[11px] font-bold text-slate-700 mb-1.5 flex items-center">
            <AlertCircle className="w-3.5 h-3.5 mr-1 text-slate-500" />
            <span>Key Risk Drivers:</span>
          </p>
          <ul className="space-y-1">
            {riskFactors.map((factor, idx) => (
              <li key={idx} className="text-[11px] text-slate-600 flex items-start space-x-1.5">
                <span className="text-red-500 font-bold leading-none mt-0.5">+</span>
                <span className="leading-tight">{factor}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RiskScore;
