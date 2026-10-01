import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  TriangleAlert,
  FileText,
  Settings,
  User,
  CircleHelp,
  Shield,
  ChevronLeft,
  ChevronRight,
  Network
} from 'lucide-react';
import ASSETS from '../assets/assets';

export const Sidebar = ({ isCollapsed, onToggleCollapse, isMobileOpen, onCloseMobile }) => {
  const navItems = [
    { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { name: 'Crime Alerts', path: '/crime-alerts', icon: TriangleAlert, badge: '10' },
    { name: 'Reports', path: '/reports', icon: FileText },
    { name: 'Settings', path: '/settings', icon: Settings },
    { name: 'Account', path: '/account', icon: User },
    { name: 'Help & Guide', path: '/help', icon: CircleHelp },
  ];

  const sidebarContent = (
    <div className="h-full flex flex-col justify-between bg-[#071B3A] text-slate-200 border-r border-[#123A72]">
      {/* Top Branding / Collapse header */}
      <div>
        <div className="h-16 flex items-center justify-between px-4 border-b border-[#123A72]/60 bg-[#0B2447]">
          <div className="flex items-center space-x-2.5 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-[#123A72] flex-shrink-0 flex items-center justify-center p-1 border border-sky-400/30">
              <img src={ASSETS.logo} alt="NETRA" className="w-full h-full object-contain" />
            </div>
            {!isCollapsed && (
              <div className="leading-tight">
                <span className="font-extrabold tracking-wider text-white text-base">NETRA</span>
                <span className="block text-[9px] uppercase font-semibold text-sky-300">INVESTIGATION PORTAL</span>
              </div>
            )}
          </div>

          <button
            onClick={onToggleCollapse}
            className="hidden lg:flex p-1.5 rounded text-slate-400 hover:text-white hover:bg-[#123A72] transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-3 space-y-1.5" aria-label="Main Navigation">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={onCloseMobile}
                className={({ isActive }) => `
                  relative flex items-center gap-3 px-3.5 py-2.5 rounded-lg text-xs font-semibold tracking-wide transition-all duration-150
                  ${isActive
                    ? 'bg-[#123A72] text-white shadow-sm border-l-4 border-[#FF9933]'
                    : 'text-slate-300 hover:text-white hover:bg-[#0B2447] border-l-4 border-transparent'
                  }
                  ${isCollapsed ? 'justify-center px-2' : ''}
                `}
                title={isCollapsed ? item.name : undefined}
              >
                <Icon className={`w-4 h-4 flex-shrink-0 text-sky-400`} />
                {!isCollapsed && (
                  <span className="truncate flex-1">{item.name}</span>
                )}
                {!isCollapsed && item.badge && (
                  <span className="bg-red-600 text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full shadow-sm">
                    {item.badge}
                  </span>
                )}
              </NavLink>
            );
          })}
        </nav>
      </div>

      {/* Bottom Footer Info */}
      <div className="p-3 border-t border-[#123A72]/60 bg-[#06162E]">
        {!isCollapsed ? (
          <div className="p-3 rounded-lg bg-[#0B2447] border border-sky-500/20 text-center">
            <div className="flex items-center justify-center space-x-1.5 text-sky-300 text-xs font-bold mb-1">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>Secure System</span>
            </div>
            <p className="text-[10px] text-slate-400 leading-tight">
              Law Enforcement Intelligence Network
            </p>
            <div className="mt-2 text-[9px] bg-[#123A72] text-sky-200 py-0.5 px-1.5 rounded font-mono font-medium">
              NODE: IN-PAT-CYBER-01
            </div>
          </div>
        ) : (
          <div className="flex justify-center" title="Secure Investigation System">
            <Shield className="w-5 h-5 text-emerald-400" />
          </div>
        )}
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Persistent Sidebar */}
      <aside
        className={`hidden lg:block h-[calc(100vh-4rem)] sticky top-16 transition-all duration-300 z-30 ${
          isCollapsed ? 'w-20' : 'w-64'
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/70 backdrop-blur-sm transition-opacity"
            onClick={onCloseMobile}
            aria-hidden="true"
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-72 bg-[#071B3A] shadow-2xl z-50 animate-in slide-in-from-left duration-200">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
