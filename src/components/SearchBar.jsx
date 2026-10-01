import React from 'react';
import { Search, FilePlus, Filter, X, Calendar, Building, Users } from 'lucide-react';
import { POLICE_STATIONS } from '../data/mockData';

export const SearchBar = ({
  searchQuery,
  onSearchChange,
  selectedStation,
  onStationChange,
  selectedGroup,
  onGroupChange,
  onOpenRegisterModal,
  onClearFilters,
  hasActiveFilters
}) => {
  const groups = [
    "All Groups",
    "Group G-01 (Mule Ops)",
    "Group G-02 (Financial Laundering)",
    "Group G-03 (Identity Theft)",
    "Group G-04 (Voice Call Extortion)",
    "Group G-05 (Card Cloning & ATM Skimming)"
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 shadow-gov p-3 sm:p-4 mb-4">
      {/* Top Row: Search Input + Register FIR Button */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
            <Search className="w-4 h-4" />
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Search suspect, FIR, phone number, vehicle or location..."
            className="w-full pl-10 pr-9 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#174EA6] focus:border-[#174EA6] transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
              aria-label="Clear search text"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        <button
          onClick={onOpenRegisterModal}
          className="flex-shrink-0 inline-flex items-center justify-center space-x-2 px-4 py-2.5 rounded-lg bg-[#071B3A] hover:bg-[#123A72] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg transition-all border border-[#174EA6]"
          id="btn-register-fir-primary"
        >
          <FilePlus className="w-4 h-4 text-[#FF9933]" />
          <span>+ REGISTER FIR</span>
        </button>
      </div>

      {/* Bottom Filter Row */}
      <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-100 text-xs">
        <div className="flex items-center text-slate-500 font-semibold mr-1">
          <Filter className="w-3.5 h-3.5 mr-1 text-slate-400" />
          <span>Filters:</span>
        </div>

        {/* Police Station Filter */}
        <select
          value={selectedStation}
          onChange={(e) => onStationChange(e.target.value)}
          className="bg-slate-50 border border-slate-300 text-slate-700 py-1.5 px-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#174EA6] text-xs font-medium cursor-pointer"
        >
          <option value="All">All Police Stations</option>
          {POLICE_STATIONS.map((stn) => (
            <option key={stn} value={stn}>{stn}</option>
          ))}
        </select>

        {/* Criminal Group Filter */}
        <select
          value={selectedGroup}
          onChange={(e) => onGroupChange(e.target.value)}
          className="bg-slate-50 border border-slate-300 text-slate-700 py-1.5 px-2.5 rounded-md focus:outline-none focus:ring-1 focus:ring-[#174EA6] text-xs font-medium cursor-pointer"
        >
          {groups.map((grp) => (
            <option key={grp} value={grp === "All Groups" ? "All" : grp}>{grp}</option>
          ))}
        </select>

        {/* Clear Filters button if active */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="inline-flex items-center space-x-1 px-2.5 py-1.5 text-xs text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md border border-red-200 transition-colors ml-auto font-medium"
          >
            <X className="w-3 h-3" />
            <span>Clear Filters</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
