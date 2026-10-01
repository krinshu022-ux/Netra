import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import {
  INITIAL_SUSPECTS,
  INITIAL_FIRS,
  CRIME_ALERTS,
  NETWORK_GRAPH_DATA
} from '../data/mockData';
import SummaryCards from '../components/SummaryCards';
import SearchBar from '../components/SearchBar';
import RiskFilter from '../components/RiskFilter';
import SuspectGrid from '../components/SuspectGrid';
import SuspectDetailsDrawer from '../components/SuspectDetailsDrawer';
import FIRPanel from '../components/FIRPanel';
import FIRDetailsDrawer from '../components/FIRDetailsDrawer';
import FIRRegistrationModal from '../components/FIRRegistrationModal';
import NetworkGraph from '../components/NetworkGraph';
import { CheckCircle2, ShieldCheck, Download, Layers } from 'lucide-react';

export const Dashboard = () => {
  const context = useOutletContext();
  const onOpenNetworkWithHighlight = context?.onOpenNetworkWithHighlight;

  // Local State
  const [suspects, setSuspects] = useState(INITIAL_SUSPECTS);
  const [firs, setFirs] = useState(INITIAL_FIRS);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStation, setSelectedStation] = useState('All');
  const [selectedGroup, setSelectedGroup] = useState('All');
  const [activeRiskFilter, setActiveRiskFilter] = useState('ALL');

  // Drawers & Modals
  const [selectedSuspect, setSelectedSuspect] = useState(null);
  const [isSuspectDrawerOpen, setIsSuspectDrawerOpen] = useState(false);
  const [selectedFIR, setSelectedFIR] = useState(null);
  const [isFIRDrawerOpen, setIsFIRDrawerOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  // Network Graph Single-view Modal
  const [networkModalNodeId, setNetworkModalNodeId] = useState(null);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);

  // Filter suspects
  const filteredSuspects = suspects.filter((s) => {
    const matchesRisk =
      activeRiskFilter === 'ALL' || s.riskLevel === activeRiskFilter;
    const matchesGroup =
      selectedGroup === 'All' || s.group.includes(selectedGroup.replace('All Groups', ''));
    const matchesSearch =
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (s.alias && s.alias.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.phones.some((p) => p.includes(searchQuery)) ||
      s.vehicles.some((v) => v.toLowerCase().includes(searchQuery.toLowerCase())) ||
      s.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesRisk && matchesGroup && matchesSearch;
  });

  // Calculate dynamic counts
  const riskCounts = {
    all: suspects.length,
    high: suspects.filter((s) => s.riskLevel === 'HIGH').length,
    medium: suspects.filter((s) => s.riskLevel === 'MEDIUM').length,
    low: suspects.filter((s) => s.riskLevel === 'LOW').length,
  };

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleRegisterFIRSuccess = (newFIR) => {
    setFirs((prev) => [newFIR, ...prev]);
    showToast(`FIR ${newFIR.firNumber} registered successfully.`);
  };

  const handleViewSuspectProfile = (suspect) => {
    setSelectedSuspect(suspect);
    setIsSuspectDrawerOpen(true);
  };

  const handleViewSuspectNetwork = (suspect) => {
    if (onOpenNetworkWithHighlight) {
      onOpenNetworkWithHighlight([suspect.id]);
    } else {
      setNetworkModalNodeId(suspect.id);
      setIsNetworkModalOpen(true);
    }
  };

  const handleSelectFIR = (fir) => {
    setSelectedFIR(fir);
    setIsFIRDrawerOpen(true);
  };

  const handleGenerateReport = (entity) => {
    showToast(`Case intelligence report for ${entity.name || entity.firNumber} generated successfully.`);
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedStation('All');
    setSelectedGroup('All');
    setActiveRiskFilter('ALL');
  };

  const hasActiveFilters =
    searchQuery !== '' || selectedStation !== 'All' || selectedGroup !== 'All' || activeRiskFilter !== 'ALL';

  return (
    <div className="p-3 sm:p-5 lg:p-6 space-y-4 max-w-7xl mx-auto w-full">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-900 text-emerald-100 px-4 py-3 rounded-xl shadow-2xl border border-emerald-500 flex items-center space-x-2 animate-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Breadcrumb & Title Section */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <div>
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold mb-1">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-[#174EA6]">Intelligence Overview</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
            Investigation Dashboard
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Monitor suspects, FIR records and criminal network intelligence across jurisdictions.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <button
            onClick={() => {
              if (onOpenNetworkWithHighlight) {
                onOpenNetworkWithHighlight(["SUS-001", "SUS-002", "SUS-003"]);
              } else {
                setIsNetworkModalOpen(true);
              }
            }}
            className="inline-flex items-center space-x-1.5 px-3.5 py-2 bg-white hover:bg-slate-50 text-[#071B3A] border border-slate-300 rounded-lg text-xs font-bold shadow-sm transition-colors"
          >
            <Layers className="w-4 h-4 text-[#174EA6]" />
            <span>OPEN NETWORK GRAPH</span>
          </button>
        </div>
      </div>

      {/* Summary Metrics Cards */}
      <SummaryCards
        totalSuspects={suspects.length}
        activeFIRs={firs.length}
        highRiskCount={riskCounts.high}
        activeAlerts={CRIME_ALERTS.length}
      />

      {/* Search & Investigation Filters Control Bar */}
      <SearchBar
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        selectedStation={selectedStation}
        onStationChange={setSelectedStation}
        selectedGroup={selectedGroup}
        onGroupChange={setSelectedGroup}
        onOpenRegisterModal={() => setIsRegisterModalOpen(true)}
        onClearFilters={handleClearFilters}
        hasActiveFilters={hasActiveFilters}
      />

      {/* Main 2-Column Investigation View: Left Suspects & Right Station-Wise FIR */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* Left Suspect Section */}
        <section className="flex-1 min-w-0 w-full">
          {/* Risk Classification Pills */}
          <RiskFilter
            activeRiskFilter={activeRiskFilter}
            onRiskFilterChange={setActiveRiskFilter}
            counts={riskCounts}
          />

          {/* Persons of Interest Grid */}
          <SuspectGrid
            suspects={filteredSuspects}
            onViewProfile={handleViewSuspectProfile}
            onViewNetwork={handleViewSuspectNetwork}
          />
        </section>

        {/* Right Station-Wise FIR List Panel */}
        <FIRPanel
          firs={firs}
          onSelectFIR={handleSelectFIR}
          selectedFIRId={selectedFIR?.id}
        />
      </div>

      {/* Modals & Drawers */}
      <SuspectDetailsDrawer
        suspect={selectedSuspect}
        isOpen={isSuspectDrawerOpen}
        onClose={() => setIsSuspectDrawerOpen(false)}
        onViewNetwork={handleViewSuspectNetwork}
        onGenerateReport={handleGenerateReport}
      />

      <FIRDetailsDrawer
        fir={selectedFIR}
        isOpen={isFIRDrawerOpen}
        onClose={() => setIsFIRDrawerOpen(false)}
        onViewNetwork={(fir) => {
          if (onOpenNetworkWithHighlight) {
            onOpenNetworkWithHighlight(fir.suspects || []);
          }
        }}
        onGenerateReport={handleGenerateReport}
      />

      <FIRRegistrationModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
        onRegisterSuccess={handleRegisterFIRSuccess}
      />

      {isNetworkModalOpen && (
        <NetworkGraph
          isOpen={isNetworkModalOpen}
          onClose={() => setIsNetworkModalOpen(false)}
          initialFocusNodeId={networkModalNodeId}
          isModal={true}
        />
      )}
    </div>
  );
};

export default Dashboard;
