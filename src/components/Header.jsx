import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Bell, User, Settings, LogOut, ShieldCheck, Menu, X, ChevronDown } from 'lucide-react';
import authService from '../services/authService';
import ASSETS from '../assets/assets';

export const Header = ({ onToggleMobileSidebar, unreadAlertsCount = 5 }) => {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const notifRef = useRef(null);
  const currentUser = authService.getCurrentUser() || {
    name: "A. Kumar",
    role: "Cyber Security Analyst",
    badgeNumber: "IND-CYBER-8841"
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
      if (notifRef.current && !notifRef.current.contains(event.target)) {
        setNotificationsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    authService.logout();
    navigate('/login');
  };

  return (
    <header className="sticky top-0 z-40 bg-[#071B3A] text-white border-b border-[#123A72] shadow-md">
      {/* Top subtle tricolor accent bar */}
      <div className="h-1 w-full flex">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-[#FFFFFF]"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Left Section: Mobile Menu Toggle & NETRA Branding */}
        <div className="flex items-center space-x-3">
          <button
            onClick={onToggleMobileSidebar}
            className="lg:hidden p-2 rounded-md text-slate-300 hover:text-white hover:bg-[#123A72] focus:outline-none focus:ring-2 focus:ring-sky-400"
            aria-label="Toggle navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>

          <Link to="/dashboard" className="flex items-center space-x-3 group">
            <div className="w-9 h-9 rounded-lg bg-[#123A72] border border-sky-500/30 flex items-center justify-center p-1 shadow-inner group-hover:border-sky-400 transition-colors">
              <img src={ASSETS.logo} alt="NETRA Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <span className="font-extrabold text-lg sm:text-xl tracking-wider text-white">NETRA</span>
                <span className="text-[10px] uppercase font-bold bg-[#174EA6] text-sky-200 px-1.5 py-0.5 rounded border border-sky-400/30 hidden sm:inline-block">PROTOTYPE</span>
              </div>
              <p className="text-[10px] text-slate-300 font-medium tracking-tight hidden sm:block">
                Network Intelligence &amp; Risk Analysis
              </p>
            </div>
          </Link>
        </div>

        {/* Center Section: Main Portal Header Title */}
        <div className="hidden md:flex flex-col items-center text-center">
          <h1 className="text-sm font-bold tracking-wide text-slate-100 uppercase">
            Network and Entity Tracking for Risk Analysis
          </h1>
          <p className="text-[11px] text-sky-300 font-medium flex items-center space-x-1">
            <ShieldCheck className="w-3 h-3 text-emerald-400 inline" />
            <span>AI-Powered Criminal Network Intelligence System</span>
          </p>
        </div>

        {/* Right Section: Notifications, Authorized Emblem & Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Authorized Emblem Placeholder */}
          <div className="hidden xl:flex items-center border-r border-slate-700 pr-3 mr-1">
            <img 
              src={ASSETS.emblem} 
              alt="Authorized Portal Crest" 
              className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity" 
              title="Authorized Law Enforcement Cyber Investigation Portal"
            />
          </div>

          {/* Notifications Popover */}
          <div className="relative" ref={notifRef}>
            <button
              onClick={() => setNotificationsOpen(!notificationsOpen)}
              className="relative p-2 rounded-full text-slate-300 hover:text-white hover:bg-[#123A72] transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
              aria-label="View notifications"
            >
              <Bell className="w-5 h-5" />
              {unreadAlertsCount > 0 && (
                <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#D32F2F] text-[9px] font-bold text-white shadow">
                  {unreadAlertsCount}
                </span>
              )}
            </button>

            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-80 sm:w-96 rounded-lg bg-white text-slate-800 shadow-2xl border border-slate-200 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="p-3 bg-[#071B3A] text-white rounded-t-lg flex items-center justify-between border-b border-navy-700">
                  <div className="flex items-center space-x-2">
                    <Bell className="w-4 h-4 text-sky-400" />
                    <span className="text-xs font-bold uppercase tracking-wider">Investigation Alerts</span>
                  </div>
                  <span className="text-[10px] bg-red-600 px-2 py-0.5 rounded-full font-bold">{unreadAlertsCount} High Risk</span>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-slate-100 text-xs">
                  <div className="p-3 hover:bg-slate-50 transition-colors">
                    <p className="font-semibold text-red-600 flex items-center justify-between">
                      <span>Unusual Burst Calling Detected</span>
                      <span className="text-[10px] text-slate-400 font-normal">28m ago</span>
                    </p>
                    <p className="text-slate-600 mt-0.5">12 calls within 30m: Rakesh Kumar ↔ Rohit Verma</p>
                  </div>
                  <div className="p-3 hover:bg-slate-50 transition-colors">
                    <p className="font-semibold text-red-600 flex items-center justify-between">
                      <span>Circular Money Transfer Flag</span>
                      <span className="text-[10px] text-slate-400 font-normal">1h ago</span>
                    </p>
                    <p className="text-slate-600 mt-0.5">3-node loop ₹1.78L: Rakesh → Amit → Sunil → Rakesh</p>
                  </div>
                  <div className="p-3 hover:bg-slate-50 transition-colors">
                    <p className="font-semibold text-amber-600 flex items-center justify-between">
                      <span>Shared Hardware Association</span>
                      <span className="text-[10px] text-slate-400 font-normal">3h ago</span>
                    </p>
                    <p className="text-slate-600 mt-0.5">5 distinct SIMs detected on IMEI 8694019203</p>
                  </div>
                </div>
                <div className="p-2.5 bg-slate-50 border-t border-slate-200 text-center rounded-b-lg">
                  <Link
                    to="/crime-alerts"
                    onClick={() => setNotificationsOpen(false)}
                    className="text-xs font-semibold text-[#174EA6] hover:text-[#071B3A] inline-flex items-center space-x-1"
                  >
                    <span>View All Active Crime Alerts</span>
                    <span>&rarr;</span>
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* User Profile Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center space-x-2 p-1.5 rounded-lg hover:bg-[#123A72] transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400 text-left"
              aria-expanded={dropdownOpen}
            >
              <div className="w-8 h-8 rounded-full bg-[#174EA6] border border-sky-400/40 flex items-center justify-center font-bold text-white text-xs shadow-sm">
                {currentUser.name ? currentUser.name.charAt(0) : 'A'}
              </div>
              <div className="hidden md:block leading-tight">
                <div className="text-xs font-semibold text-white truncate max-w-[130px]">
                  {currentUser.name}
                </div>
                <div className="text-[10px] text-sky-300 font-medium truncate max-w-[130px]">
                  {currentUser.role}
                </div>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 hidden md:block" />
            </button>

            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-56 rounded-lg bg-white text-slate-800 shadow-2xl border border-slate-200 z-50 py-1.5 animate-in fade-in duration-100">
                <div className="px-4 py-2 border-b border-slate-100">
                  <p className="text-xs font-bold text-slate-900">{currentUser.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{currentUser.email}</p>
                  <span className="inline-block mt-1 text-[9px] font-semibold bg-blue-50 text-blue-800 px-2 py-0.5 rounded border border-blue-200">
                    {currentUser.role}
                  </span>
                </div>

                <Link
                  to="/account"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center space-x-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <User className="w-4 h-4 text-slate-500" />
                  <span>My Account</span>
                </Link>

                <Link
                  to="/settings"
                  onClick={() => setDropdownOpen(false)}
                  className="flex items-center space-x-2.5 px-4 py-2 text-xs text-slate-700 hover:bg-slate-100 transition-colors"
                >
                  <Settings className="w-4 h-4 text-slate-500" />
                  <span>Settings</span>
                </Link>

                <div className="border-t border-slate-100 my-1"></div>

                <button
                  onClick={handleLogout}
                  className="w-full flex items-center space-x-2.5 px-4 py-2 text-xs text-red-600 hover:bg-red-50 transition-colors text-left font-medium"
                >
                  <LogOut className="w-4 h-4 text-red-500" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
