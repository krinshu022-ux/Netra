import React, { useState } from 'react';
import { FileText, Search, Building2, ChevronDown, Filter } from 'lucide-react';
import FIRCard from './FIRCard';
import { POLICE_STATIONS } from '../data/mockData';

export const FIRPanel = ({ firs = [], onSelectFIR, selectedFIRId }) => {
  const [stationFilter, setStationFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Filter FIRs
  const filteredFIRs = firs.filter((fir) => {
    const matchesStation =
      stationFilter === 'All' || fir.station === stationFilter;
    const matchesSearch =
      fir.firNumber.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fir.incidentType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      fir.suspects.some((s) => s.toLowerCase().includes(searchQuery.toLowerCase())) ||
      fir.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesStation && matchesSearch;
  });

  // Group filtered FIRs by Station
  const groupedFIRs = filteredFIRs.reduce((acc, fir) => {
    if (!acc[fir.station]) {
      acc[fir.station] = [];
    }
    acc[fir.station].push(fir);
    return acc;
  }, {});

  return (
    <aside className="w-full lg:w-80 xl:w-96 bg-white border border-slate-200 rounded-xl shadow-gov flex flex-col h-[calc(100vh-13.5rem)] lg:sticky lg:top-20">
      {/* Panel Top Header */}
      <div className="p-3.5 border-b border-slate-200 bg-[#071B3A] text-white rounded-t-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <FileText className="w-4 h-4 text-sky-400" />
            <h3 className="text-xs font-extrabold uppercase tracking-wide">
              Station-Wise FIR
            </h3>
          </div>
          <span className="text-[10px] bg-[#123A72] text-sky-200 px-2 py-0.5 rounded font-mono font-bold border border-sky-400/30">
            {filteredFIRs.length} Active
          </span>
        </div>
        <p className="text-[11px] text-slate-300 mt-0.5">
          Recent Investigation Records
        </p>
      </div>

      {/* Filter Controls (Station Dropdown + Small Search) */}
      <div className="p-2.5 bg-slate-50 border-b border-slate-200 space-y-2">
        {/* Police Station Dropdown */}
        <div className="relative">
          <select
            value={stationFilter}
            onChange={(e) => setStationFilter(e.target.value)}
            className="w-full bg-white border border-slate-300 text-slate-800 text-xs py-1.5 pl-2.5 pr-8 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#174EA6] font-medium appearance-none cursor-pointer"
          >
            <option value="All">All Police Stations</option>
            {POLICE_STATIONS.map((stn) => (
              <option key={stn} value={stn}>
                {stn}
              </option>
            ))}
          </select>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
        </div>

        {/* Small Search */}
        <div className="relative">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search FIR number or suspect..."
            className="w-full bg-white border border-slate-300 text-slate-900 text-xs py-1.5 pl-8 pr-3 rounded-lg placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#174EA6]"
          />
        </div>
      </div>

      {/* Independently Scrollable FIR List */}
      <div className="flex-1 overflow-y-auto p-2.5 space-y-4">
        {Object.keys(groupedFIRs).length === 0 ? (
          <div className="text-center py-8 text-xs text-slate-400">
            No FIR records match filter.
          </div>
        ) : (
          Object.entries(groupedFIRs).map(([stationName, stationFIRList]) => (
            <div key={stationName} className="space-y-2">
              {/* Station Group Header */}
              <div className="flex items-center space-x-1.5 px-1 pt-1 text-[11px] font-bold text-slate-700 uppercase tracking-wide border-b border-slate-200 pb-1">
                <Building2 className="w-3 h-3 text-[#174EA6]" />
                <span className="truncate">{stationName}</span>
                <span className="text-[10px] text-slate-400 font-normal">({stationFIRList.length})</span>
              </div>

              {/* FIR Cards */}
              <div className="space-y-2">
                {stationFIRList.map((fir) => (
                  <FIRCard
                    key={fir.id}
                    fir={fir}
                    onSelectFIR={onSelectFIR}
                    isSelected={selectedFIRId === fir.id}
                  />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </aside>
  );
};

export default FIRPanel;
