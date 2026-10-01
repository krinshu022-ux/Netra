import React, { useState } from 'react';
import {
  User,
  Shield,
  Key,
  Mail,
  Phone,
  Building,
  Calendar,
  CheckCircle2,
  Lock,
  Edit3,
  Save,
  X
} from 'lucide-react';
import authService from '../services/authService';

export const Account = () => {
  const [user, setUser] = useState(authService.getCurrentUser() || {
    id: "NETRA-OFFICER-789",
    memberId: "OFFICER-8841",
    name: "Insp. A. Kumar",
    badgeNumber: "IND-CYBER-8841",
    role: "Cyber Security Analyst",
    department: "Cyber Crime Investigation Division",
    email: "a.kumar@cybercell.gov.in",
    phone: "+91 94310 99881",
    station: "Patna Cyber Police Station",
    securityClearance: "LEVEL-4 RESTRICTED",
    lastLogin: "01 Oct 2026, 11:30 AM"
  });

  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({ ...user });
  const [toastMessage, setToastMessage] = useState(null);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const updated = authService.updateProfile(formData) || formData;
    setUser(updated);
    setIsEditing(false);
    setToastMessage('Officer profile updated successfully.');
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-4xl mx-auto w-full">
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
          <span className="text-[#174EA6]">Officer Dossier</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <User className="w-6 h-6 text-[#123A72]" />
          <span>Officer Credentials &amp; Account</span>
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Authorized personnel identity record and investigation access badge.
        </p>
      </div>

      {/* Account Info Card */}
      <div className="bg-white rounded-2xl border border-slate-200 shadow-gov overflow-hidden">
        {/* Top Banner */}
        <div className="h-28 bg-gradient-to-r from-[#071B3A] via-[#123A72] to-[#174EA6] p-4 flex items-end justify-between relative">
          <span className="text-[10px] font-mono uppercase bg-black/40 text-sky-200 px-2.5 py-1 rounded backdrop-blur-xs font-bold border border-white/10">
            CLEARED: {user.securityClearance}
          </span>
        </div>

        {/* Profile Details Container */}
        <div className="px-6 pb-6 pt-0 relative">
          {/* Avatar floating */}
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 -mt-12 mb-6">
            <div className="flex items-end space-x-4">
              <div className="w-24 h-24 rounded-2xl bg-[#071B3A] border-4 border-white shadow-xl flex items-center justify-center text-white text-3xl font-black ring-1 ring-slate-200">
                {user.name.charAt(0)}
              </div>
              <div className="mb-1">
                <h2 className="text-xl font-extrabold text-slate-900">{user.name}</h2>
                <p className="text-xs font-semibold text-[#174EA6]">{user.role}</p>
                <p className="text-[11px] text-slate-500">{user.department}</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className="px-3.5 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors inline-flex items-center space-x-1.5"
              >
                <Edit3 className="w-3.5 h-3.5 text-[#123A72]" />
                <span>{isEditing ? 'Cancel Edit' : 'EDIT PROFILE'}</span>
              </button>

              <button
                onClick={() => alert('Password reset token generated and sent to registered department terminal.')}
                className="px-3.5 py-2 bg-[#071B3A] hover:bg-[#123A72] text-white rounded-lg text-xs font-bold transition-colors inline-flex items-center space-x-1.5 border border-[#174EA6]"
              >
                <Key className="w-3.5 h-3.5 text-[#FF9933]" />
                <span>CHANGE PASSWORD</span>
              </button>
            </div>
          </div>

          {/* Details Form / Read View */}
          {isEditing ? (
            <form onSubmit={handleSaveProfile} className="space-y-4 text-xs pt-4 border-t">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-lg focus:ring-1 focus:ring-[#174EA6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-lg focus:ring-1 focus:ring-[#174EA6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone</label>
                  <input
                    type="text"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-lg focus:ring-1 focus:ring-[#174EA6]"
                  />
                </div>
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Assigned Station</label>
                  <input
                    type="text"
                    value={formData.station}
                    onChange={(e) => setFormData({ ...formData, station: e.target.value })}
                    className="w-full p-2.5 bg-slate-50 border rounded-lg focus:ring-1 focus:ring-[#174EA6]"
                  />
                </div>
              </div>
              <div className="flex justify-end space-x-2 pt-2">
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="px-4 py-2 bg-slate-100 text-slate-700 font-bold rounded-lg"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#071B3A] text-white font-bold rounded-lg flex items-center space-x-1.5"
                >
                  <Save className="w-4 h-4 text-[#FF9933]" />
                  <span>Save Profile</span>
                </button>
              </div>
            </form>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-4 border-t border-slate-100">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-3">
                <Shield className="w-5 h-5 text-[#174EA6]" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Badge / Member ID</span>
                  <span className="font-mono font-bold text-slate-800">{user.memberId}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#174EA6]" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Official Email</span>
                  <span className="font-semibold text-slate-800">{user.email}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#174EA6]" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Contact Phone</span>
                  <span className="font-mono font-semibold text-slate-800">{user.phone}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-3">
                <Building className="w-5 h-5 text-[#174EA6]" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Police Station Jurisdiction</span>
                  <span className="font-semibold text-slate-800">{user.station}</span>
                </div>
              </div>

              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 flex items-center space-x-3 sm:col-span-2">
                <Calendar className="w-5 h-5 text-[#174EA6]" />
                <div>
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Last Authenticated Session</span>
                  <span className="font-semibold text-slate-800">{user.lastLogin} (Encrypted TLS session)</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Account;
