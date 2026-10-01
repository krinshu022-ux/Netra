import React, { useEffect } from 'react';
import {
  X,
  FileText,
  Network,
  Download,
  Calendar,
  Building,
  User,
  MapPin,
  CreditCard,
  PhoneCall,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';

export const FIRDetailsDrawer = ({
  fir,
  isOpen,
  onClose,
  onViewNetwork,
  onGenerateReport
}) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !fir) return null;

  const isHigh = fir.risk === 'HIGH';
  const isMed = fir.risk === 'MEDIUM';

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-lg bg-white shadow-2xl border-l border-slate-200 flex flex-col animate-in slide-in-from-right duration-200">
          
          {/* Header */}
          <div className="p-4 bg-[#071B3A] text-white flex items-center justify-between border-b border-[#123A72]">
            <div className="flex items-center space-x-2">
              <FileText className="w-5 h-5 text-sky-400" />
              <div>
                <h3 className="text-sm font-bold tracking-wide uppercase">First Information Report</h3>
                <p className="text-[11px] text-sky-300 font-mono">{fir.firNumber}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#123A72] transition-colors"
              aria-label="Close FIR details"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4 text-xs text-slate-700">
            {/* Meta Card */}
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-4 space-y-2">
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold text-slate-900">{fir.firNumber}</span>
                <span
                  className={`px-2.5 py-0.5 rounded text-[10px] font-extrabold uppercase border ${
                    isHigh
                      ? 'bg-red-50 text-red-700 border-red-200'
                      : isMed
                      ? 'bg-amber-50 text-amber-700 border-amber-200'
                      : 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  }`}
                >
                  {fir.risk} RISK
                </span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-slate-200">
                <div>
                  <span className="text-slate-400 block">Incident Type</span>
                  <span className="font-bold text-slate-800">{fir.incidentType}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Status</span>
                  <span className="font-bold text-blue-700">{fir.status}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Date &amp; Time</span>
                  <span className="font-medium text-slate-800">{fir.date} {fir.time && `| ${fir.time}`}</span>
                </div>
                <div>
                  <span className="text-slate-400 block">Investigating Officer</span>
                  <span className="font-bold text-slate-800">{fir.investigator}</span>
                </div>
              </div>
            </div>

            {/* Jurisdiction & Location */}
            <div className="space-y-1.5 text-xs">
              <div className="flex items-center text-slate-700">
                <Building className="w-3.5 h-3.5 text-slate-400 mr-2 flex-shrink-0" />
                <span>Station: <strong className="text-slate-900">{fir.station}</strong></span>
              </div>
              <div className="flex items-center text-slate-700">
                <MapPin className="w-3.5 h-3.5 text-slate-400 mr-2 flex-shrink-0" />
                <span>Location: <strong className="text-slate-900">{fir.location}</strong></span>
              </div>
              {fir.complainant && (
                <div className="flex items-center text-slate-700">
                  <User className="w-3.5 h-3.5 text-slate-400 mr-2 flex-shrink-0" />
                  <span>Complainant: <strong className="text-slate-900">{fir.complainant}</strong></span>
                </div>
              )}
            </div>

            {/* Suspects Named */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                Identified Persons / Accused
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {fir.suspects.map((s, idx) => (
                  <span key={idx} className="bg-red-50 text-red-800 border border-red-200 px-2.5 py-1 rounded-md text-xs font-bold">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1">
                Incident Description &amp; Modus Operandi
              </h4>
              <p className="p-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-700 leading-relaxed text-xs">
                {fir.description}
              </p>
            </div>

            {/* Evidence References */}
            <div>
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5">
                Seized Evidence &amp; Audit Logs
              </h4>
              <div className="flex flex-wrap gap-1.5">
                {fir.evidence?.map((ev, idx) => (
                  <span key={idx} className="bg-slate-100 text-slate-800 font-mono font-bold text-[10px] px-2 py-1 rounded border border-slate-200">
                    {ev}
                  </span>
                ))}
              </div>
            </div>

            {/* Related Financial Transactions */}
            {fir.relatedTransactions && fir.relatedTransactions.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center">
                  <CreditCard className="w-3.5 h-3.5 text-emerald-600 mr-1" />
                  <span>Connected Financial Trail</span>
                </h4>
                <div className="space-y-1.5">
                  {fir.relatedTransactions.map((tx, idx) => (
                    <div key={idx} className="p-2.5 bg-emerald-50/50 border border-emerald-200 rounded-lg text-[11px]">
                      <div className="flex justify-between font-bold text-emerald-950 mb-0.5">
                        <span>{tx.id}: {tx.amount}</span>
                        <span className="text-[10px] text-slate-500 font-normal">{tx.timestamp}</span>
                      </div>
                      <p className="text-slate-600">From: {tx.from} &rarr; To: {tx.to}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Related Call Detail Records */}
            {fir.relatedCalls && fir.relatedCalls.length > 0 && (
              <div>
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-1.5 flex items-center">
                  <PhoneCall className="w-3.5 h-3.5 text-blue-600 mr-1" />
                  <span>Corroborating Call Records (CDR)</span>
                </h4>
                <div className="space-y-1.5">
                  {fir.relatedCalls.map((cdr, idx) => (
                    <div key={idx} className="p-2.5 bg-blue-50/50 border border-blue-200 rounded-lg text-[11px]">
                      <div className="flex justify-between font-bold text-blue-950 mb-0.5">
                        <span>{cdr.id} ({cdr.duration})</span>
                        <span className="text-[10px] text-slate-500 font-normal">{cdr.timestamp}</span>
                      </div>
                      <p className="text-slate-600">{cdr.caller} &rarr; {cdr.receiver}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onViewNetwork(fir);
              }}
              className="flex-1 py-2.5 px-3 bg-[#123A72] hover:bg-[#071B3A] text-white rounded-lg text-xs font-bold tracking-wide shadow transition-colors inline-flex items-center justify-center space-x-1.5"
            >
              <Network className="w-4 h-4 text-sky-400" />
              <span>VIEW NETWORK</span>
            </button>

            <button
              onClick={() => onGenerateReport(fir)}
              className="flex-1 py-2.5 px-3 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 rounded-lg text-xs font-bold tracking-wide shadow-sm transition-colors inline-flex items-center justify-center space-x-1.5"
            >
              <Download className="w-4 h-4 text-slate-600" />
              <span>GENERATE REPORT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FIRDetailsDrawer;
