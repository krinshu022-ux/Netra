import React, { useState } from 'react';
import {
  Settings as SettingsIcon,
  Shield,
  Bell,
  Sliders,
  Globe,
  CheckCircle2,
  Building,
  Save,
  Lock
} from 'lucide-react';
import { POLICE_STATIONS } from '../data/mockData';

export const Settings = () => {
  const [defaultStation, setDefaultStation] = useState(POLICE_STATIONS[0]);
  const [language, setLanguage] = useState('English');
  const [themeMode, setThemeMode] = useState('Standard Government Light');
  const [burstAlerts, setBurstAlerts] = useState(true);
  const [circularAlerts, setCircularAlerts] = useState(true);
  const [highRiskEmail, setHighRiskEmail] = useState(true);
  const [sessionTimeout, setSessionTimeout] = useState('30');
  const [toastMessage, setToastMessage] = useState(null);

  const handleSave = (e) => {
    e.preventDefault();
    setToastMessage('System preferences and portal settings saved successfully.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto w-full">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-900 text-emerald-100 px-4 py-3 rounded-xl shadow-2xl border border-emerald-500 flex items-center space-x-2 animate-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold mb-1">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#174EA6]">System Preferences</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <SettingsIcon className="w-6 h-6 text-[#123A72]" />
          <span>System &amp; Portal Settings</span>
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Configure investigation console preferences, alert thresholds, and security parameters.
        </p>
      </div>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Appearance & Localization */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-gov p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2 border-b pb-2">
            <Globe className="w-4 h-4 text-[#174EA6]" />
            <span>Localization &amp; Appearance</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Console Language</label>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-[#174EA6]"
              >
                <option value="English">English (National Portal Default)</option>
                <option value="Hindi">हिंदी (Hindi)</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Default Police Station Jurisdiction</label>
              <select
                value={defaultStation}
                onChange={(e) => setDefaultStation(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-[#174EA6]"
              >
                {POLICE_STATIONS.map((stn) => (
                  <option key={stn} value={stn}>{stn}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Theme Mode</label>
              <select
                value={themeMode}
                onChange={(e) => setThemeMode(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-[#174EA6]"
              >
                <option value="Standard Government Light">Standard Government Light</option>
                <option value="Dark Command Centre">Dark Command Centre</option>
                <option value="High Contrast Accessible">High Contrast Accessible</option>
              </select>
            </div>
          </div>
        </div>

        {/* Alert Notifications */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-gov p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2 border-b pb-2">
            <Bell className="w-4 h-4 text-[#174EA6]" />
            <span>Surveillance &amp; Automated Alert Flags</span>
          </h3>

          <div className="space-y-3 text-xs">
            <label className="flex items-center space-x-3 p-2.5 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                checked={burstAlerts}
                onChange={(e) => setBurstAlerts(e.target.checked)}
                className="w-4 h-4 text-[#174EA6] rounded"
              />
              <div>
                <p className="font-bold text-slate-800">CDR Burst Calling Triggers</p>
                <p className="text-[11px] text-slate-500">Alert investigator when ≥10 calls occur in &lt;30 mins between suspect nodes.</p>
              </div>
            </label>

            <label className="flex items-center space-x-3 p-2.5 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                checked={circularAlerts}
                onChange={(e) => setCircularAlerts(e.target.checked)}
                className="w-4 h-4 text-[#174EA6] rounded"
              />
              <div>
                <p className="font-bold text-slate-800">Circular Financial Layering Loops</p>
                <p className="text-[11px] text-slate-500">Flag structured 3-tier round-trip banking transfers.</p>
              </div>
            </label>

            <label className="flex items-center space-x-3 p-2.5 bg-slate-50 rounded-lg cursor-pointer hover:bg-slate-100">
              <input
                type="checkbox"
                checked={highRiskEmail}
                onChange={(e) => setHighRiskEmail(e.target.checked)}
                className="w-4 h-4 text-[#174EA6] rounded"
              />
              <div>
                <p className="font-bold text-slate-800">Urgent High Risk Dispatch Notification</p>
                <p className="text-[11px] text-slate-500">Immediate broadcast on score ≥ 90/100 node activities.</p>
              </div>
            </label>
          </div>
        </div>

        {/* Security & Access Controls */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-gov p-5 space-y-4">
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide flex items-center gap-2 border-b pb-2">
            <Lock className="w-4 h-4 text-[#174EA6]" />
            <span>Security &amp; Session Configuration</span>
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Inactivity Session Timeout</label>
              <select
                value={sessionTimeout}
                onChange={(e) => setSessionTimeout(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-300 rounded-lg text-slate-900 focus:ring-1 focus:ring-[#174EA6]"
              >
                <option value="15">15 Minutes (High Security Strict)</option>
                <option value="30">30 Minutes (Recommended)</option>
                <option value="60">60 Minutes</option>
              </select>
            </div>

            <div>
              <label className="block font-bold text-slate-700 mb-1.5">Cryptographic Audit Logging</label>
              <input
                type="text"
                disabled
                value="ENABLED (HMAC-SHA256 Signed)"
                className="w-full p-2.5 bg-slate-100 border border-slate-200 rounded-lg text-slate-600 font-mono font-bold"
              />
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="px-6 py-2.5 bg-[#071B3A] hover:bg-[#123A72] text-white font-bold text-xs uppercase tracking-wider rounded-lg shadow-md transition-colors flex items-center space-x-2 border border-[#174EA6]"
          >
            <Save className="w-4 h-4 text-[#FF9933]" />
            <span>SAVE CHANGES</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Settings;
