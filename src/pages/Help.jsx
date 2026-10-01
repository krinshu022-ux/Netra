import React, { useState } from 'react';
import {
  CircleHelp,
  BookOpen,
  Network,
  FilePlus,
  TriangleAlert,
  FileText,
  ChevronDown,
  ChevronUp,
  Headphones,
  Mail,
  ShieldCheck,
  Bot
} from 'lucide-react';

export const Help = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: "What is NETRA and how does it calculate the suspect Risk Score?",
      a: "NETRA (Network and Entity Tracking for Risk Analysis) uses a multi-factor risk index combining FIR cross-jurisdiction occurrences, graph centrality metrics, Call Detail Record (CDR) burst calling frequency, and circular fund layering patterns. Scores range from 0 to 100 with explainable risk drivers."
    },
    {
      q: "How does the Interactive Network Graph connect different data sources?",
      a: "The network graph aggregates nodes across 5 entity types: Suspects, Phone MSISDNs, Bank Mule Accounts, Vehicles, and registered FIRs. Links between nodes are established through direct call logs, IMPS/UPI/NEFT bank statements, and co-accused FIR mentions."
    },
    {
      q: "How does the Investigator AI Chatbot work and what can I ask it?",
      a: "The AI Assistant cross-references the knowledge graph in real-time. You can ask natural questions such as 'Who is connected to Rakesh within 2 steps?', 'Show transactions above ₹50,000', or 'Which suspects are high risk?'. Every AI response cites explicit evidence codes and offers a one-click 'HIGHLIGHT ON NETWORK' button."
    },
    {
      q: "How do I register a new FIR and will it update the investigation dashboard immediately?",
      a: "Click the '+ REGISTER FIR' button in the dashboard or search bar. Fill in the incident type, complainant, suspects, and evidence codes. Upon submission, the new FIR is instantly registered into local state and immediately appears in the Station-Wise FIR panel."
    },
    {
      q: "Is the data in this system real criminal information?",
      a: "No. This prototype is populated entirely with synthetic demonstration data for hackathon evaluation purposes. No real individual records or official seals are represented."
    }
  ];

  const guideSections = [
    {
      title: "Dashboard & Search Operations",
      icon: BookOpen,
      desc: "Use the unified query bar to filter by suspect name, phone number, vehicle plate, or FIR ID. Filter suspects by risk levels (High, Medium, Low)."
    },
    {
      title: "Network Centrality & Graph Exploration",
      icon: Network,
      desc: "Pan, zoom, and drag nodes in the interactive graph. Filter relationship links (Calls, Money, FIR, Location) and inspect node attributes."
    },
    {
      title: "FIR Registration & Station Grouping",
      icon: FilePlus,
      desc: "Manage FIRs categorized by station jurisdiction. Inspect related financial flows and CDR call logs directly inside the FIR dossier drawer."
    },
    {
      title: "Surveillance Crime Alerts",
      icon: TriangleAlert,
      desc: "Automated anomaly detectors flag burst calling patterns, structured circular transactions, and shared hardware IMEI footprints in real-time."
    }
  ];

  return (
    <div className="p-4 sm:p-6 space-y-6 max-w-5xl mx-auto w-full">
      {/* Header */}
      <div>
        <div className="flex items-center space-x-2 text-xs text-slate-500 font-semibold mb-1">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#174EA6]">Knowledge Base</span>
        </div>
        <h1 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight flex items-center gap-2">
          <CircleHelp className="w-6 h-6 text-[#123A72]" />
          <span>NETRA User Guide &amp; Documentation</span>
        </h1>
        <p className="text-xs text-slate-500 font-medium">
          Comprehensive manual for cyber crime analysts, investigators, and incident response teams.
        </p>
      </div>

      {/* Guide Modules Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {guideSections.map((sec, idx) => {
          const Icon = sec.icon;
          return (
            <div key={idx} className="bg-white rounded-xl border border-slate-200 shadow-gov p-4 flex items-start space-x-3.5">
              <div className="p-2.5 rounded-lg bg-blue-50 text-[#123A72] flex-shrink-0">
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-xs sm:text-sm mb-1">{sec.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{sec.desc}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* FAQ Section */}
      <div className="bg-white rounded-xl border border-slate-200 shadow-gov p-5 space-y-3">
        <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide border-b pb-2">
          Frequently Asked Questions (FAQ)
        </h3>

        <div className="space-y-2 text-xs">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div key={index} className="border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-3 bg-slate-50 hover:bg-slate-100 flex items-center justify-between font-bold text-slate-800 text-left transition-colors"
                >
                  <span>{faq.q}</span>
                  {isOpen ? <ChevronUp className="w-4 h-4 text-slate-500" /> : <ChevronDown className="w-4 h-4 text-slate-500" />}
                </button>
                {isOpen && (
                  <div className="p-3.5 bg-white text-slate-600 leading-relaxed text-xs border-t border-slate-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Support Box */}
      <div className="bg-[#071B3A] text-white rounded-xl p-5 border border-[#123A72] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center space-x-3.5 text-center sm:text-left">
          <div className="w-10 h-10 rounded-xl bg-[#123A72] flex items-center justify-center text-[#FF9933]">
            <Headphones className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-extrabold text-sm uppercase tracking-wide">Technical Support &amp; Integration</h4>
            <p className="text-xs text-sky-300">FastAPI &amp; Neo4j Backend Integration Desk</p>
          </div>
        </div>

        <div className="flex items-center space-x-3 text-xs">
          <a
            href="mailto:support@netra-intel.gov.demo"
            className="px-4 py-2 bg-[#174EA6] hover:bg-blue-600 text-white font-bold rounded-lg transition-colors flex items-center space-x-1.5"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contact Support</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Help;
