import React from 'react';
import SuspectCard from './SuspectCard';
import { Users, AlertCircle } from 'lucide-react';

export const SuspectGrid = ({ suspects = [], onViewProfile, onViewNetwork }) => {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-3 flex-shrink-0">
        <div className="flex items-center space-x-2">
          <Users className="w-4 h-4 text-[#123A72]" />
          <h3 className="text-sm font-bold text-slate-800 uppercase tracking-wide">
            Persons of Interest
          </h3>
        </div>
        <span className="text-xs font-bold text-slate-600 bg-slate-200/70 px-2.5 py-0.5 rounded-full">
          {suspects.length} Records
        </span>
      </div>

      {/* Independently Scrollable Suspect Cards Grid */}
      <div className="flex-1 overflow-y-auto pr-1">
        {suspects.length === 0 ? (
          <div className="bg-white rounded-xl border border-dashed border-slate-300 p-8 text-center my-6">
            <AlertCircle className="w-8 h-8 text-slate-400 mx-auto mb-2" />
            <p className="text-sm font-bold text-slate-700">No suspects match current filters</p>
            <p className="text-xs text-slate-500 mt-1">Try clearing search terms or selecting 'ALL' risk level.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-3 pb-6">
            {suspects.map((suspect) => (
              <SuspectCard
                key={suspect.id}
                suspect={suspect}
                onViewProfile={onViewProfile}
                onViewNetwork={onViewNetwork}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuspectGrid;
