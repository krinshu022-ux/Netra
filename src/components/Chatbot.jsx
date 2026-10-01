import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  Bot,
  X,
  Send,
  Sparkles,
  Network,
  ShieldCheck,
  CheckCircle,
  CornerDownRight,
  Maximize2,
  Minimize2
} from 'lucide-react';
import { AI_SUGGESTIONS, getAIResponse } from '../data/mockData';

export const Chatbot = ({ onHighlightNetwork }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'msg-init',
      sender: 'ai',
      text: 'Greetings Officer. I am the NETRA AI Investigation Assistant. You can query interconnected FIRs, CDR call bursts, financial flows, and high-risk criminal nodes.',
      evidence: ['NETRA-KG-INDEX-2026'],
      details: [
        'Ask me about specific suspect associations (e.g. Rakesh, Sunil)',
        'Inquire about high-value transaction laundering loops',
        'Inspect graph centrality and cross-group links'
      ],
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputQuery, setInputQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isTyping]);

  const handleSendMessage = (textToSend) => {
    const query = (textToSend || inputQuery).trim();
    if (!query) return;

    const userMessage = {
      id: `user-${Date.now()}`,
      sender: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputQuery('');
    setIsTyping(true);

    // Simulate AI inference delay
    setTimeout(() => {
      const responseData = getAIResponse(query);
      const aiMessage = {
        id: `ai-${Date.now()}`,
        sender: 'ai',
        text: responseData.text,
        evidence: responseData.evidence,
        details: responseData.details,
        highlightNodes: responseData.highlightNodes,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 450);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {/* Floating Assistant Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="group relative flex items-center space-x-2.5 px-4 py-3 bg-[#071B3A] hover:bg-[#123A72] text-white rounded-full shadow-2xl border-2 border-sky-400/40 hover:border-sky-400 transition-all duration-200 transform hover:scale-105 active:scale-95"
          id="btn-netra-ai-chat"
        >
          {/* Green active status indicator */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-500 border-2 border-white"></span>
          </span>

          <div className="w-6 h-6 rounded-full bg-[#174EA6] flex items-center justify-center text-sky-300">
            <Bot className="w-4 h-4" />
          </div>
          <span className="font-extrabold text-xs sm:text-sm tracking-wider uppercase">
            NETRA AI
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF9933] group-hover:rotate-12 transition-transform" />
        </button>
      )}

      {/* Expanded Chatbot Modal / Panel */}
      {isOpen && (
        <div className="w-[92vw] sm:w-96 max-w-md h-[550px] bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden animate-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-[#071B3A] text-white flex items-center justify-between border-b border-[#123A72]">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#123A72] flex items-center justify-center text-sky-300 border border-sky-500/30">
                <Bot className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wide flex items-center gap-1.5">
                  <span>Investigator Assistant</span>
                  <span className="text-[9px] bg-emerald-950 text-emerald-300 px-1.5 py-0.2 rounded font-mono border border-emerald-500/30">
                    ONLINE
                  </span>
                </h3>
                <p className="text-[10px] text-slate-300">
                  Ask questions about the analysed data.
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-[#123A72] transition-colors"
              aria-label="Close assistant"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Suggestions Chips */}
          <div className="bg-slate-50 border-b border-slate-200 p-2 overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 text-[11px]">
            {AI_SUGGESTIONS.slice(0, 4).map((sug, idx) => (
              <button
                key={idx}
                onClick={() => handleSendMessage(sug)}
                className="inline-block px-2.5 py-1 bg-white hover:bg-blue-50 border border-slate-200 hover:border-blue-300 text-slate-700 rounded-full text-[10px] font-semibold transition-colors shadow-2xs"
              >
                {sug}
              </button>
            ))}
          </div>

          {/* Messages Container */}
          <div className="flex-1 overflow-y-auto p-3 space-y-3 bg-[#F4F7FB] text-xs">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[88%] rounded-xl p-3 shadow-xs ${
                    msg.sender === 'user'
                      ? 'bg-[#123A72] text-white rounded-br-none'
                      : 'bg-white text-slate-800 border border-slate-200 rounded-bl-none'
                  }`}
                >
                  <p className="leading-relaxed text-xs">{msg.text}</p>

                  {/* Bulleted Details */}
                  {msg.details && msg.details.length > 0 && (
                    <ul className="mt-2 space-y-1 pt-1.5 border-t border-slate-100 text-[11px] text-slate-600">
                      {msg.details.map((d, i) => (
                        <li key={i} className="flex items-start space-x-1.5">
                          <CornerDownRight className="w-3 h-3 text-[#174EA6] mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{d}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Evidence References Tag */}
                  {msg.evidence && msg.evidence.length > 0 && (
                    <div className="mt-2.5 pt-1.5 border-t border-slate-100 flex flex-wrap items-center gap-1">
                      <span className="text-[9px] font-bold text-slate-400 uppercase">Evidence:</span>
                      {msg.evidence.map((ev, i) => (
                        <span
                          key={i}
                          className="bg-blue-50 text-[#071B3A] font-mono text-[9px] font-bold px-1.5 py-0.2 rounded border border-blue-200"
                        >
                          {ev}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Highlight on Network Action Button */}
                  {msg.highlightNodes && msg.highlightNodes.length > 0 && (
                    <button
                      onClick={() => {
                        if (onHighlightNetwork) {
                          onHighlightNetwork(msg.highlightNodes);
                        }
                      }}
                      className="mt-2.5 w-full py-1.5 px-2.5 bg-[#071B3A] hover:bg-[#123A72] text-white text-[11px] font-bold rounded-lg shadow transition-colors flex items-center justify-center space-x-1.5 border border-sky-500/30"
                    >
                      <Network className="w-3.5 h-3.5 text-sky-400" />
                      <span>HIGHLIGHT ON NETWORK</span>
                    </button>
                  )}

                  <span className="block text-[9px] text-slate-400 text-right mt-1">
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white border border-slate-200 rounded-xl p-2.5 rounded-bl-none flex items-center space-x-1.5 text-slate-500 text-xs">
                  <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-bounce"></span>
                  <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-bounce delay-100"></span>
                  <span className="w-1.5 h-1.5 bg-sky-600 rounded-full animate-bounce delay-200"></span>
                  <span className="text-[10px] ml-1 font-medium">Cross-referencing evidence...</span>
                </div>
              </div>
            )}
            <div ref={chatBottomRef} />
          </div>

          {/* Input Footer */}
          <div className="p-2.5 bg-white border-t border-slate-200">
            <div className="flex items-center space-x-2">
              <input
                type="text"
                value={inputQuery}
                onChange={(e) => setInputQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about suspect, FIR, or fund trails..."
                className="flex-1 bg-slate-50 border border-slate-300 rounded-lg px-3 py-2 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-[#174EA6]"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputQuery.trim()}
                className="p-2 bg-[#071B3A] hover:bg-[#123A72] disabled:opacity-40 text-white rounded-lg transition-colors"
                aria-label="Send query"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
