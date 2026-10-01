import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Shield,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  AlertCircle,
  Network,
  Cpu,
  Fingerprint,
  Radio,
  FileCheck2,
  Share2,
  ChevronRight
} from 'lucide-react';
import authService from '../services/authService';
import ASSETS from '../assets/assets';

export const Login = () => {
  const navigate = useNavigate();
  const [memberId, setMemberId] = useState('OFFICER-8841');
  const [password, setPassword] = useState('NetraSecure#2026');
  const [role, setRole] = useState('Cyber Security Analyst');
  const [rememberMe, setRememberMe] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState({});

  const roles = [
    'Cyber Security Analyst',
    'Investigator',
    'Team Lead',
    'Administrator'
  ];

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    const errors = {};

    if (!memberId.trim()) errors.memberId = 'Member ID or Email is required';
    if (!password.trim()) errors.password = 'Password is required';
    if (password.length < 4) errors.password = 'Password must be at least 4 characters';

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }

    setFieldErrors({});
    setIsLoading(true);

    try {
      await authService.login(memberId, password, role);
      navigate('/dashboard');
    } catch (err) {
      setErrorMessage(err.message || 'Authentication failed. Please verify credentials.');
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative flex flex-col justify-between bg-[#071B3A] text-white selection:bg-sky-500 selection:text-white overflow-x-hidden">
      {/* Background with Dark Navy Overlay & Network Grid */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 mix-blend-luminosity"
        style={{ backgroundImage: `url(${ASSETS.loginBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-[#040E1E] via-[#071B3A]/95 to-[#0B2447]/90" />
      <div className="absolute inset-0 cyber-grid-pattern opacity-30 pointer-events-none" />

      {/* Tricolor National Strip Accent at Top */}
      <div className="relative z-20 h-1.5 w-full flex shadow">
        <div className="w-1/3 bg-[#FF9933]"></div>
        <div className="w-1/3 bg-[#FFFFFF]"></div>
        <div className="w-1/3 bg-[#138808]"></div>
      </div>

      {/* Top Header */}
      <header className="relative z-20 border-b border-sky-900/40 bg-[#071B3A]/60 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Left: NETRA Logo & Subtitle */}
          <div className="flex items-center space-x-3.5">
            <div className="w-11 h-11 rounded-xl bg-[#123A72] border border-sky-400/40 p-1 flex items-center justify-center shadow-lg">
              <img src={ASSETS.logo} alt="NETRA Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="font-black text-2xl tracking-widest text-white">NETRA</span>
                <span className="text-[10px] uppercase font-bold bg-[#174EA6] text-sky-200 px-2 py-0.5 rounded border border-sky-400/30">
                  LE-PORTAL
                </span>
              </div>
              <p className="text-[11px] text-sky-300 font-medium tracking-wide">
                Network Intelligence &amp; Risk Analysis
              </p>
            </div>
          </div>

          {/* Center: Full form text */}
          <div className="hidden lg:flex flex-col items-center text-center">
            <h1 className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-slate-100">
              Network and Entity Tracking for Risk Analysis
            </h1>
            <p className="text-[11px] text-sky-400 font-medium">
              National Cyber Crime &amp; Criminal Network Intelligence System
            </p>
          </div>

          {/* Right: Authorized Emblem Area */}
          <div className="flex items-center space-x-3">
            <img
              src={ASSETS.emblem}
              alt="Authorized Crest"
              className="h-11 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </header>

      {/* Main Hero & Login Card Section */}
      <main className="relative z-20 flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex items-center">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* LEFT COLUMN: HERO INFORMATION */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 px-3 py-1.5 rounded-full bg-[#123A72]/80 border border-sky-500/30 text-sky-300 text-xs font-semibold shadow-inner">
              <Shield className="w-3.5 h-3.5 text-emerald-400" />
              <span>SYNTHETIC DEMONSTRATION ENVIRONMENT</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                AI-Powered Criminal <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-blue-200 to-indigo-300">
                  Network Intelligence
                </span>
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-normal">
                Transforming disparate FIR records, CDR voice communication bursts, financial transactions, and multi-jurisdictional entity relations into connected actionable intelligence for evidence-driven investigations.
              </p>
            </div>

            {/* 4 Feature Indicator Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-[#0B2447]/80 border border-[#174EA6]/50 backdrop-blur-xs flex items-center space-x-3 shadow-md hover:border-sky-400 transition-colors">
                <div className="p-2 rounded-lg bg-[#123A72] text-sky-400">
                  <Network className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">Criminal Network Analysis</h4>
                  <p className="text-[11px] text-slate-400">Multi-hop graph &amp; centrality</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B2447]/80 border border-[#174EA6]/50 backdrop-blur-xs flex items-center space-x-3 shadow-md hover:border-sky-400 transition-colors">
                <div className="p-2 rounded-lg bg-[#123A72] text-[#FF9933]">
                  <FileCheck2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">FIR Intelligence</h4>
                  <p className="text-[11px] text-slate-400">Automated station aggregation</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B2447]/80 border border-[#174EA6]/50 backdrop-blur-xs flex items-center space-x-3 shadow-md hover:border-sky-400 transition-colors">
                <div className="p-2 rounded-lg bg-[#123A72] text-red-400">
                  <Radio className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">Suspicious Pattern Detection</h4>
                  <p className="text-[11px] text-slate-400">Burst calls &amp; circular layering</p>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-[#0B2447]/80 border border-[#174EA6]/50 backdrop-blur-xs flex items-center space-x-3 shadow-md hover:border-sky-400 transition-colors">
                <div className="p-2 rounded-lg bg-[#123A72] text-emerald-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white uppercase tracking-wide">Investigator AI Chatbot</h4>
                  <p className="text-[11px] text-slate-400">Verified evidence-based queries</p>
                </div>
              </div>
            </div>

            {/* Quick Demo Credentials Info Tag */}
            <div className="p-3 rounded-lg bg-sky-950/60 border border-sky-500/20 text-[11px] text-sky-200 flex items-center justify-between">
              <span>Demo Quick-Fill: <strong>OFFICER-8841</strong> | Pre-loaded with synthetic cyber crime syndicate data.</span>
              <span className="text-emerald-400 font-bold ml-2 hidden sm:inline">READY</span>
            </div>
          </div>

          {/* RIGHT COLUMN: SECURE LOGIN CARD */}
          <div className="lg:col-span-5">
            <div className="bg-white text-slate-900 rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
              
              {/* Card Header */}
              <div className="p-6 bg-gradient-to-b from-[#071B3A] to-[#0B2447] text-white border-b border-[#123A72] text-center">
                <div className="w-12 h-12 rounded-xl bg-[#174EA6] border border-sky-400/40 mx-auto flex items-center justify-center text-white shadow-lg mb-3">
                  <Lock className="w-6 h-6 text-sky-300" />
                </div>
                <h3 className="text-xl font-black tracking-wide uppercase text-white">
                  NETRA Secure Access
                </h3>
                <p className="text-xs text-sky-200 mt-1 font-medium">
                  Authorized Cyber Security Personnel Only
                </p>
              </div>

              {/* Card Form */}
              <form onSubmit={handleLogin} className="p-6 sm:p-8 space-y-4">
                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs flex items-center space-x-2">
                    <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Field 1: Member ID */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Member ID / Email
                  </label>
                  <input
                    type="text"
                    value={memberId}
                    onChange={(e) => setMemberId(e.target.value)}
                    placeholder="Enter Member ID or Email"
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#174EA6] focus:border-[#174EA6] font-medium"
                  />
                  {fieldErrors.memberId && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{fieldErrors.memberId}</p>
                  )}
                </div>

                {/* Field 2: Password */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter Password"
                      className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#174EA6] focus:border-[#174EA6] font-medium pr-10"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600 focus:outline-none"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                  {fieldErrors.password && (
                    <p className="text-[11px] text-red-600 mt-1 font-medium">{fieldErrors.password}</p>
                  )}
                </div>

                {/* Field 3: Role Dropdown */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                    Assigned Role
                  </label>
                  <select
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-300 rounded-lg text-xs sm:text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#174EA6] focus:border-[#174EA6] font-medium cursor-pointer"
                  >
                    {roles.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                {/* Row: Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <label className="flex items-center space-x-2 text-slate-600 cursor-pointer select-none">
                    <input
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="w-4 h-4 text-[#174EA6] rounded border-slate-300 focus:ring-[#174EA6]"
                    />
                    <span>Remember Me</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => alert('For hackathon demonstration, use the pre-filled credentials: OFFICER-8841 / NetraSecure#2026')}
                    className="font-semibold text-[#174EA6] hover:text-[#071B3A] hover:underline"
                  >
                    Forgot Password?
                  </button>
                </div>

                {/* Main Action Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full py-3 px-4 bg-[#071B3A] hover:bg-[#123A72] disabled:bg-slate-400 text-white font-extrabold text-sm uppercase tracking-wider rounded-xl shadow-lg hover:shadow-xl transition-all duration-150 flex items-center justify-center space-x-2 border border-[#174EA6]"
                    id="btn-secure-login-submit"
                  >
                    {isLoading ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Authenticating secure access...</span>
                      </div>
                    ) : (
                      <>
                        <Shield className="w-4 h-4 text-[#FF9933]" />
                        <span>SECURE LOGIN</span>
                        <ChevronRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Security Advisory Message */}
                <div className="pt-4 border-t border-slate-100 text-center space-y-1">
                  <p className="text-[11px] font-bold text-slate-700 flex items-center justify-center space-x-1">
                    <Lock className="w-3 h-3 text-red-600" />
                    <span>Restricted system. Access is limited to authorized personnel.</span>
                  </p>
                  <p className="text-[10px] text-slate-500">
                    All access attempts and queries are cryptographically logged for audit.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 border-t border-sky-900/40 bg-[#040E1E] text-slate-400 py-4 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">
          <p className="text-[11px]">
            &copy; 2026 NETRA — Network and Entity Tracking for Risk Analysis. Hackathon Prototype.
          </p>
          <div className="flex items-center space-x-4 text-[11px] text-slate-400">
            <span>Synthetic Demo Data</span>
            <span>&bull;</span>
            <span>Law Enforcement Architecture</span>
            <span>&bull;</span>
            <span>Secure TLS 1.3</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
