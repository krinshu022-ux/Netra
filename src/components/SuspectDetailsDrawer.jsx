import React, { useEffect } from 'react';
import {
  X,
  Network,
  FileText,
  Phone,
  Car,
  CreditCard,
  Users,
  MapPin,
  Clock,
  ShieldAlert,
  Download,
  CheckSquare
} from 'lucide-react';
import RiskScore from './RiskScore';
import ActivityTimeline from './ActivityTimeline';
import ASSETS from '../assets/assets';

export const SuspectDetailsDrawer = ({
  suspect,
  isOpen,
  onClose,
  onViewNetwork,
  onGenerateReport
}) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !suspect) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
          
          {/* Drawer Top Header */}
          <div className="p-4 bg-[#071B3A] text-white flex items-center justify-between border-b border-[#123A72]">
            <div className="flex items-center space-x-2">
              <ShieldAlert className="w-5 h-5 text-red-400" />
              <div>
                <h3 className="text-sm font-bold tracking-wide uppercase">Suspect Intelligence Dossier</h3>
                <p className="text-[11px] text-sky-300 font-mono">NETRA-ID: {suspect.id}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#123A72] transition-colors"
              aria-label="Close details drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Drawer Body - Scrollable */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-5 text-xs text-slate-700">
            {/* Identity Card Profile */}
            <div className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
              <img
                src={suspect.photo || ASSETS.defaultSuspect}
                alt={suspect.name}
                onError={(e) => { e.currentTarget.src = ASSETS.defaultSuspect; }}
                className="w-20 h-20 rounded-xl object-cover border-2 border-white shadow-md bg-slate-200 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h2 className="text-base font-extrabold text-slate-900 truncate">{suspect.name}</h2>
                <p className="text-xs text-slate-600 font-semibold mt-0.5">
                  Alias: <span className="text-[#174EA6]">{suspect.alias || 'N/A'}</span>
                </p>
                <div className="mt-2 space-y-1 text-[11px]">
                  <p className="flex items-center text-slate-600">
                    <MapPin className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
                    <span>Location: <strong className="text-slate-800">{suspect.location}</strong></span>
                  </p>
                  <p className="flex items-center text-slate-600">
                    <Users className="w-3.5 h-3.5 text-slate-400 mr-1.5 flex-shrink-0" />
                    <span>Group: <strong className="text-slate-800">{suspect.group}</strong></span>
                  </p>
                </div>
              </div>
            </div>

            {/* AI Risk Score Breakdown */}
            <RiskScore
              score={suspect.riskScore}
              riskLevel={suspect.riskLevel}
              riskFactors={suspect.riskFactors}
            />

            {/* Evidence References */}
            <div className="bg-blue-50/70 border border-blue-200 rounded-xl p-3.5">
              <p className="text-xs font-bold text-navy-900 mb-2 flex items-center">
                <CheckSquare className="w-4 h-4 text-[#174EA6] mr-1.5" />
                <span>Verified Evidence References</span>
              </p>
              <div className="flex flex-wrap gap-1.5">
                {suspect.evidenceReferences?.map((ev, i) => (
                  <span key={i} className="px-2 py-1 bg-white border border-blue-300 text-[#071B3A] font-mono text-[10px] font-bold rounded shadow-xs">
                    {ev}
                  </span>
                ))}
              </div>
            </div>

            {/* Communications & Devices */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b pb-1">
                Telemetry &amp; Identifier Links
              </h4>

              {/* Phone Numbers */}
              <div>
                <p className="text-[11px] font-semibold text-slate-500 mb-1 flex items-center">
                  <Phone className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>Known Registered MSISDNs / Phones:</span>
                </p>
                <div className="flex flex-wrap gap-2">
                  {suspect.phones?.map((p, i) => (
                    <span key={i} className="bg-slate-100 border border-slate-200 text-slate-800 font-mono text-xs px-2 py-1 rounded font-medium">
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              {/* Vehicles */}
              <div>
                <p className="text-[11px] font-semibold text-slate-500 mb-1 flex items-center">
                  <Car className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>Known Vehicles / RTO Registrations:</span>
                </p>
                <div className="space-y-1">
                  {suspect.vehicles?.map((v, i) => (
                    <div key={i} className="bg-slate-100 border border-slate-200 text-slate-800 text-xs px-2.5 py-1 rounded font-medium">
                      {v}
                    </div>
                  ))}
                </div>
              </div>

              {/* Bank Accounts */}
              {suspect.bankAccounts && (
                <div>
                  <p className="text-[11px] font-semibold text-slate-500 mb-1 flex items-center">
                    <CreditCard className="w-3.5 h-3.5 mr-1 text-slate-400" />
                    <span>Beneficiary Accounts / Mules:</span>
                  </p>
                  <div className="space-y-1">
                    {suspect.bankAccounts.map((acc, i) => (
                      <div key={i} className="bg-emerald-50 border border-emerald-200 text-emerald-900 font-mono text-xs px-2.5 py-1 rounded font-medium">
                        {acc}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Known Associates */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b pb-1 mb-2">
                Known Syndicate Associates
              </h4>
              <div className="flex flex-wrap gap-2">
                {suspect.knownAssociates?.map((asc, i) => (
                  <span key={i} className="bg-indigo-50 border border-indigo-200 text-indigo-900 text-xs px-2.5 py-1 rounded-full font-semibold">
                    {asc}
                  </span>
                ))}
              </div>
            </div>

            {/* Activity Timeline */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider border-b pb-1 mb-3">
                Chronological Activity Timeline
              </h4>
              <ActivityTimeline events={suspect.timeline} />
            </div>
          </div>

          {/* Drawer Footer Actions */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onViewNetwork(suspect);
              }}
              className="flex-1 py-2.5 px-3 bg-[#123A72] hover:bg-[#071B3A] text-white rounded-lg text-xs font-bold tracking-wide shadow transition-colors inline-flex items-center justify-center space-x-1.5"
            >
              <Network className="w-4 h-4 text-sky-400" />
              <span>VIEW NETWORK</span>
            </button>

            <button
              onClick={() => onGenerateReport(suspect)}
              className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-lg text-xs font-bold tracking-wide shadow-sm transition-colors inline-flex items-center justify-center space-x-1.5"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>GENERATE CASE REPORT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuspectDetailsDrawer;
