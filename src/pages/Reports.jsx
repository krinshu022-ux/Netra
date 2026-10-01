import React, { useState } from 'react';
import {
  FileText,
  Download,
  Eye,
  PlusCircle,
  ShieldAlert,
  Printer,
  X,
  CheckCircle2,
  Filter,
  Calendar,
  Layers
} from 'lucide-react';
import { MOCK_REPORTS } from '../data/mockData';

export const Reports = () => {
  const [reports, setReports] = useState(MOCK_REPORTS);
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [previewReport, setPreviewReport] = useState(null);
  const [toastMessage, setToastMessage] = useState(null);

  const categories = [
    'ALL',
    'Case Summary Report',
    'Suspect Intelligence Report',
    'FIR Reports',
    'Criminal Network Reports',
    'Risk Analysis Reports'
  ];

  const filteredReports = reports.filter((r) => {
    if (selectedCategory === 'ALL') return true;
    return r.type === selectedCategory;
  });

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleGenerateNewReport = () => {
    const newRep = {
      id: `REP-00${reports.length + 1}`,
      title: `Ad-Hoc Tactical Intelligence Dossier: ${new Date().toLocaleDateString()}`,
      type: 'Case Summary Report',
      date: new Date().toISOString().split('T')[0],
      target: 'Multi-Station Cyber Cells',
      classification: 'RESTRICTED // LAW ENFORCEMENT',
      summary: 'Automated synthesis combining recent FIR submissions, high-risk node alerts, and graph centrality analysis.',
      pages: 6,
      leadInvestigator: 'Insp. A. Kumar'
    };
    setReports([newRep, ...reports]);
    showToast('New intelligence dossier compiled and added.');
  };

  const handleExportPDF = (rep) => {
    showToast(`Exporting PDF: ${rep.title}`);
  };

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-7xl mx-auto w-full">
      {/* Toast */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-900 text-emerald-100 px-4 py-3 rounded-xl shadow-2xl border border-emerald-500 flex items-center space-x-2 animate-in slide-in-from-top duration-200">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
          <span className="text-xs font-bold">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold mb-1">
            <span>Dashboard</span>
            <span>/</span>
            <span className="text-[#174EA6]">Evidence &amp; Case Dossiers</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
            <FileText className="w-6 h-6 text-[#123A72]" />
            <span>Investigation Intelligence Reports</span>
          </h1>
          <p className="text-xs text-slate-500 font-medium">
            Generate and export court-admissible dossiers, suspect summaries, and network centrality topology audits.
          </p>
        </div>

        <button
          onClick={handleGenerateNewReport}
          className="inline-flex items-center space-x-2 px-4 py-2.5 bg-[#071B3A] hover:bg-[#123A72] text-white rounded-lg text-xs font-bold shadow-md transition-colors border border-[#174EA6]"
        >
          <PlusCircle className="w-4 h-4 text-[#FF9933]" />
          <span>GENERATE NEW REPORT</span>
        </button>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 border-b border-slate-200 text-xs">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg font-bold transition-all whitespace-nowrap ${
              selectedCategory === cat
                ? 'bg-[#123A72] text-white shadow-sm'
                : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Reports Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredReports.map((rep) => (
          <div
            key={rep.id}
            className="bg-white rounded-xl border border-slate-200 shadow-gov hover:shadow-gov-md transition-all p-4 flex flex-col justify-between"
          >
            <div>
              {/* Top classification tag */}
              <div className="flex items-center justify-between gap-1 mb-2">
                <span className="font-mono text-[9px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-bold">
                  {rep.id}
                </span>
                <span className="text-[9px] font-black uppercase text-red-700 bg-red-50 px-2 py-0.5 rounded border border-red-200">
                  {rep.classification}
                </span>
              </div>

              {/* Title & Type */}
              <h3 className="font-extrabold text-slate-900 text-sm mb-1 line-clamp-2">
                {rep.title}
              </h3>
              <p className="text-[11px] font-semibold text-[#174EA6] mb-2">
                {rep.type}
              </p>

              <p className="text-xs text-slate-600 leading-relaxed mb-3 line-clamp-3">
                {rep.summary}
              </p>

              {/* Metadata */}
              <div className="bg-slate-50 border border-slate-100 rounded-lg p-2 space-y-1 text-[11px] text-slate-600 mb-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Target Focus:</span>
                  <span className="font-semibold text-slate-800">{rep.target}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Date:</span>
                  <span>{rep.date} ({rep.pages} pages)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Officer:</span>
                  <span className="font-medium text-slate-800">{rep.leadInvestigator}</span>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <button
                onClick={() => setPreviewReport(rep)}
                className="py-1.5 px-2 bg-slate-100 hover:bg-slate-200 text-slate-800 rounded-lg text-xs font-bold transition-colors inline-flex items-center justify-center space-x-1"
              >
                <Eye className="w-3.5 h-3.5 text-[#123A72]" />
                <span>VIEW</span>
              </button>

              <button
                onClick={() => handleExportPDF(rep)}
                className="py-1.5 px-2 bg-[#123A72] hover:bg-[#071B3A] text-white rounded-lg text-xs font-bold shadow-xs transition-colors inline-flex items-center justify-center space-x-1"
              >
                <Download className="w-3.5 h-3.5 text-sky-300" />
                <span>EXPORT PDF</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Document View / Print Modal */}
      {previewReport && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
          <div className="fixed inset-0 bg-slate-900/75 backdrop-blur-xs" onClick={() => setPreviewReport(null)} />
          <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-300 z-10 overflow-hidden text-xs">
            {/* Modal Top Bar */}
            <div className="p-3.5 bg-[#071B3A] text-white flex items-center justify-between no-print">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4 text-sky-400" />
                <span className="font-bold uppercase tracking-wider">{previewReport.id} Intelligence Dossier</span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => window.print()}
                  className="px-2.5 py-1 bg-[#123A72] hover:bg-[#174EA6] rounded text-white font-bold inline-flex items-center space-x-1"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>PRINT</span>
                </button>
                <button
                  onClick={() => setPreviewReport(null)}
                  className="p-1 text-slate-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Document Content */}
            <div className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto text-slate-800">
              <div className="border-b-2 border-slate-900 pb-4 text-center">
                <p className="text-[10px] font-black uppercase tracking-widest text-red-700">
                  {previewReport.classification}
                </p>
                <h2 className="text-lg font-black text-slate-900 uppercase mt-1">
                  NETRA CRIME INVESTIGATION WING
                </h2>
                <p className="text-xs text-slate-600">
                  Automated Evidence Synthesis &amp; Network Topological Report
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs bg-slate-50 p-3 rounded-lg border">
                <p><strong>Report Title:</strong> {previewReport.title}</p>
                <p><strong>Report Type:</strong> {previewReport.type}</p>
                <p><strong>Date of Compilation:</strong> {previewReport.date}</p>
                <p><strong>Investigating Officer:</strong> {previewReport.leadInvestigator}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase border-b pb-1 mb-2">Executive Summary</h4>
                <p className="leading-relaxed text-slate-700">{previewReport.summary}</p>
              </div>

              <div>
                <h4 className="font-bold text-slate-900 uppercase border-b pb-1 mb-2">Evidence &amp; Graph Metrics</h4>
                <ul className="list-disc pl-5 space-y-1 text-slate-700">
                  <li>Degree Centrality and betweenness computed across 15 active nodes.</li>
                  <li>Cross-referenced with Call Detail Records (CDR) and financial ledger audit logs.</li>
                  <li>Algorithmic confidence index: <strong>94.8%</strong> against synthetic baseline.</li>
                </ul>
              </div>

              <div className="pt-6 border-t text-[10px] text-slate-500 flex justify-between">
                <span>NETRA Intelligence Portal v1.0</span>
                <span>Page 1 of {previewReport.pages}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Reports;
