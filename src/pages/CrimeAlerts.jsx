import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { TriangleAlert, Filter, BellRing, ShieldAlert, Sparkles, CheckCircle2 } from 'lucide-react';
import { CRIME_ALERTS } from '../data/mockData';
import AlertCard from '../components/AlertCard';

export const CrimeAlerts = () => {
  const context = useOutletContext();
  const onOpenNetworkWithHighlight = context?.onOpenNetworkWithHighlight;

  const [activeFilter, setActiveFilter] = useState('ALL');
  const [alerts, setAlerts] = useState(CRIME_ALERTS);

  const filteredAlerts = alerts.filter((alert) => {
    if (activeFilter === 'ALL') return true;
    return alert.riskLevel === activeFilter;
  });

  const counts = {
    all: alerts.length,
    high: alerts.filter((a) => a.riskLevel === 'HIGH').length,
    medium: alerts.filter((a) => a.riskLevel === 'MEDIUM').length,
    low: alerts.filter((a) => a.riskLevel === 'LOW').length,
  };

  const handleHighlightAlert = (alert) => {
    // Map entities to sample node IDs
    let nodeIds = ['SUS-001', 'SUS-002'];
    if (alert.category === 'Burst Calling') nodeIds = ['SUS-001', 'SUS-005'];
    if (alert.category === 'Circular Money Transfer') nodeIds = ['SUS-001', 'SUS-002', 'SUS-003'];
    if (alert.category === 'Cross-Group Contact') nodeIds = ['SUS-002', 'SUS-008'];
    if (alert.category === 'Hardware Skimming') nodeIds = ['SUS-014', 'SUS-015'];

    if (onOpenNetworkWithHighlight) {
      onOpenNetworkWithHighlight(nodeIds);
    }
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto w-full">
      {/* Breadcrumb & Header */}
      <div>
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold mb-1">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#174EA6]">Automated Anomaly Detection</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
              <TriangleAlert className="w-6 h-6 text-red-600" />
              <span>Suspicious Activity Alerts</span>
            </h1>
            <p className="text-xs text-slate-500 font-medium mt-0.5">
              Heuristic &amp; AI-driven surveillance flags: CDR burst spikes, circular fund layering, and multi-SIM associations.
            </p>
          </div>

          <div className="flex items-center space-x-2 bg-emerald-50 border border-emerald-200 text-emerald-900 px-3 py-1.5 rounded-lg text-xs font-bold shadow-xs">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>AI Real-time Surveillance Active</span>
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 text-xs">
        <button
          onClick={() => setActiveFilter('ALL')}
          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
            activeFilter === 'ALL'
              ? 'bg-[#071B3A] text-white shadow-sm'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          ALL ALERTS ({counts.all})
        </button>

        <button
          onClick={() => setActiveFilter('HIGH')}
          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
            activeFilter === 'HIGH'
              ? 'bg-[#D32F2F] text-white shadow-sm'
              : 'bg-white text-red-700 border border-red-200 hover:bg-red-50'
          }`}
        >
          HIGH RISK ({counts.high})
        </button>

        <button
          onClick={() => setActiveFilter('MEDIUM')}
          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
            activeFilter === 'MEDIUM'
              ? 'bg-[#F59E0B] text-white shadow-sm'
              : 'bg-white text-amber-700 border border-amber-200 hover:bg-amber-50'
          }`}
        >
          MEDIUM RISK ({counts.medium})
        </button>

        <button
          onClick={() => setActiveFilter('LOW')}
          className={`px-3 py-1.5 rounded-lg font-bold transition-all ${
            activeFilter === 'LOW'
              ? 'bg-[#15803D] text-white shadow-sm'
              : 'bg-white text-emerald-700 border border-emerald-200 hover:bg-emerald-50'
          }`}
        >
          LOW RISK ({counts.low})
        </button>
      </div>

      {/* Alerts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredAlerts.map((alert) => (
          <AlertCard
            key={alert.id}
            alert={alert}
            onViewNetwork={handleHighlightAlert}
          />
        ))}
      </div>
    </div>
  );
};

export default CrimeAlerts;
