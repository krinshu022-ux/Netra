import React, { useState, useEffect } from 'react';
import { X, FilePlus, AlertCircle, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { POLICE_STATIONS, INCIDENT_TYPES } from '../data/mockData';

export const FIRRegistrationModal = ({ isOpen, onClose, onRegisterSuccess }) => {
  const [formData, setFormData] = useState({
    firNumber: `FIR-2026-${String(Math.floor(Math.random() * 900) + 100)}`,
    station: POLICE_STATIONS[0],
    date: new Date().toISOString().split('T')[0],
    time: new Date().toTimeString().substring(0, 5),
    complainant: '',
    suspectName: '',
    incidentType: 'Cyber Fraud',
    location: '',
    description: '',
    evidence: '',
    risk: 'HIGH'
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firNumber.trim()) newErrors.firNumber = 'FIR Number is required.';
    if (!formData.complainant.trim()) newErrors.complainant = 'Complainant name is required.';
    if (!formData.suspectName.trim()) newErrors.suspectName = 'Suspect name is required.';
    if (!formData.location.trim()) newErrors.location = 'Incident location is required.';
    if (!formData.description.trim()) newErrors.description = 'Incident description is required.';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      const newFIR = {
        id: `FIR-${Date.now()}`,
        firNumber: formData.firNumber,
        station: formData.station,
        date: formData.date,
        time: formData.time,
        incidentType: formData.incidentType,
        risk: formData.risk,
        investigator: "Insp. A. Kumar",
        status: "Under Investigation",
        complainant: formData.complainant,
        suspects: formData.suspectName.split(',').map((s) => s.trim()),
        location: formData.location,
        description: formData.description,
        evidence: formData.evidence ? formData.evidence.split(',').map((e) => e.trim()) : ["SEIZED-RECORDS-01"],
        relatedTransactions: [],
        relatedCalls: []
      };

      onRegisterSuccess(newFIR);
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/75 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 z-10 overflow-hidden animate-in zoom-in-95 duration-150">
        {/* Modal Header */}
        <div className="p-4 bg-[#071B3A] text-white flex items-center justify-between border-b border-[#123A72]">
          <div className="flex items-center space-x-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#123A72] flex items-center justify-center text-[#FF9933]">
              <FilePlus className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-sm font-bold tracking-wide uppercase">Register New FIR</h3>
              <p className="text-[11px] text-sky-300">Law Enforcement Crime Data Entry Portal</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-[#123A72] transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-4 sm:p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          {/* Row 1: FIR Number & Police Station */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                FIR Number <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.firNumber}
                onChange={(e) => handleChange('firNumber', e.target.value)}
                placeholder="e.g. FIR-2026-015"
                className={`w-full p-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:ring-2 font-mono ${
                  errors.firNumber ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-[#174EA6]'
                }`}
              />
              {errors.firNumber && <p className="text-[11px] text-red-600 mt-0.5">{errors.firNumber}</p>}
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Police Station <span className="text-red-500">*</span>
              </label>
              <select
                value={formData.station}
                onChange={(e) => handleChange('station', e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6]"
              >
                {POLICE_STATIONS.map((stn) => (
                  <option key={stn} value={stn}>{stn}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Row 2: Date & Time */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Date of Incident / Report</label>
              <input
                type="date"
                value={formData.date}
                onChange={(e) => handleChange('date', e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6]"
              />
            </div>
            <div>
              <label className="block text-slate-700 font-bold mb-1">Time</label>
              <input
                type="time"
                value={formData.time}
                onChange={(e) => handleChange('time', e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6]"
              />
            </div>
          </div>

          {/* Row 3: Complainant & Suspect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Complainant Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.complainant}
                onChange={(e) => handleChange('complainant', e.target.value)}
                placeholder="e.g. Ramesh Chandra"
                className={`w-full p-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:ring-2 ${
                  errors.complainant ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-[#174EA6]'
                }`}
              />
              {errors.complainant && <p className="text-[11px] text-red-600 mt-0.5">{errors.complainant}</p>}
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Suspect Name(s) <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.suspectName}
                onChange={(e) => handleChange('suspectName', e.target.value)}
                placeholder="e.g. Rakesh Kumar, Amit Kumar"
                className={`w-full p-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:ring-2 ${
                  errors.suspectName ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-[#174EA6]'
                }`}
              />
              {errors.suspectName && <p className="text-[11px] text-red-600 mt-0.5">{errors.suspectName}</p>}
            </div>
          </div>

          {/* Row 4: Incident Type, Risk Level & Location */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-slate-700 font-bold mb-1">Incident Type</label>
              <select
                value={formData.incidentType}
                onChange={(e) => handleChange('incidentType', e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6]"
              >
                {INCIDENT_TYPES.map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">Risk Level</label>
              <select
                value={formData.risk}
                onChange={(e) => handleChange('risk', e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6] font-bold"
              >
                <option value="HIGH">HIGH RISK</option>
                <option value="MEDIUM">MEDIUM RISK</option>
                <option value="LOW">LOW RISK</option>
              </select>
            </div>

            <div>
              <label className="block text-slate-700 font-bold mb-1">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                value={formData.location}
                onChange={(e) => handleChange('location', e.target.value)}
                placeholder="e.g. Boring Road, Patna"
                className={`w-full p-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:ring-2 ${
                  errors.location ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-[#174EA6]'
                }`}
              />
              {errors.location && <p className="text-[11px] text-red-600 mt-0.5">{errors.location}</p>}
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="block text-slate-700 font-bold mb-1">
              Incident Description &amp; Modus Operandi <span className="text-red-500">*</span>
            </label>
            <textarea
              rows="3"
              value={formData.description}
              onChange={(e) => handleChange('description', e.target.value)}
              placeholder="Provide full description of crime, transaction details, or suspect actions..."
              className={`w-full p-2.5 bg-slate-50 border rounded-lg text-slate-900 focus:outline-none focus:ring-2 ${
                errors.description ? 'border-red-500 focus:ring-red-400' : 'border-slate-300 focus:ring-[#174EA6]'
              }`}
            />
            {errors.description && <p className="text-[11px] text-red-600 mt-0.5">{errors.description}</p>}
          </div>

          {/* Evidence / Notes */}
          <div>
            <label className="block text-slate-700 font-bold mb-1">
              Evidence Identifiers (Comma-separated)
            </label>
            <input
              type="text"
              value={formData.evidence}
              onChange={(e) => handleChange('evidence', e.target.value)}
              placeholder="e.g. CDR-104, TXN-208, CCTV-ATM-09"
              className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6] font-mono"
            />
          </div>

          {/* Modal Actions */}
          <div className="pt-4 border-t border-slate-200 flex items-center justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-lg transition-colors"
            >
              CANCEL
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 bg-[#071B3A] hover:bg-[#123A72] text-white font-bold rounded-lg shadow transition-colors flex items-center space-x-2 border border-[#174EA6]"
            >
              {isSubmitting ? (
                <span>Registering...</span>
              ) : (
                <>
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>REGISTER FIR</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FIRRegistrationModal;
