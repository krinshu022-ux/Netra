import React, { useState, useRef, useEffect } from 'react';
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Layers,
  Filter,
  Info,
  Maximize2,
  ShieldAlert,
  Phone,
  DollarSign,
  FileText,
  MapPin,
  Smartphone
} from 'lucide-react';
import { NETWORK_GRAPH_DATA } from '../data/mockData';

export const NetworkGraph = ({
  isOpen = true,
  onClose,
  initialFocusNodeId = null,
  highlightedNodeIds = [],
  isModal = true
}) => {
  const [nodes, setNodes] = useState(NETWORK_GRAPH_DATA.nodes);
  const [links, setLinks] = useState(NETWORK_GRAPH_DATA.links);
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);
  const [linkFilters, setLinkFilters] = useState({
    call: true,
    money: true,
    fir: true,
    location: true,
    device: true
  });
  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 40, y: 30 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [draggedNodeId, setDraggedNodeId] = useState(null);

  useEffect(() => {
    if (initialFocusNodeId) {
      const found = nodes.find((n) => n.id === initialFocusNodeId);
      if (found) {
        setSelectedNode(found);
      }
    }
  }, [initialFocusNodeId, nodes]);

  // Handle Pan
  const handleMouseDown = (e) => {
    if (e.target.tagName === 'svg' || e.target.id === 'graph-bg') {
      setIsDragging(true);
      setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
    }
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      setPan({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      });
    } else if (draggedNodeId) {
      const svgRect = e.currentTarget.getBoundingClientRect();
      const newX = (e.clientX - svgRect.left - pan.x) / zoom;
      const newY = (e.clientY - svgRect.top - pan.y) / zoom;
      setNodes((prev) =>
        prev.map((n) => (n.id === draggedNodeId ? { ...n, x: newX, y: newY } : n))
      );
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDraggedNodeId(null);
  };

  const resetView = () => {
    setZoom(1);
    setPan({ x: 40, y: 30 });
    setSelectedNode(null);
    setSelectedLink(null);
  };

  const toggleLinkFilter = (type) => {
    setLinkFilters((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const filteredLinks = links.filter((l) => linkFilters[l.type]);

  const getNodeColor = (node) => {
    if (node.type === 'fir') return '#9333EA';
    if (node.type === 'phone') return '#0284C7';
    if (node.type === 'bank') return '#059669';
    if (node.type === 'vehicle') return '#475569';
    if (node.risk === 'HIGH') return '#D32F2F';
    if (node.risk === 'MEDIUM') return '#F59E0B';
    return '#15803D';
  };

  const getLinkColor = (type) => {
    switch (type) {
      case 'call': return '#0284C7'; // Blue
      case 'money': return '#10B981'; // Green
      case 'fir': return '#8B5CF6'; // Purple
      case 'location': return '#F59E0B'; // Amber
      case 'device': return '#64748B'; // Slate
      default: return '#94A3B8';
    }
  };

  const isNodeHighlighted = (nodeId) => {
    if (highlightedNodeIds && highlightedNodeIds.length > 0) {
      return highlightedNodeIds.includes(nodeId);
    }
    if (selectedNode) {
      if (selectedNode.id === nodeId) return true;
      // Is neighbor?
      return filteredLinks.some(
        (l) =>
          (l.source === selectedNode.id && l.target === nodeId) ||
          (l.target === selectedNode.id && l.source === nodeId)
      );
    }
    return false;
  };

  const content = (
    <div className="bg-[#071B3A] text-slate-100 rounded-2xl flex flex-col h-full border border-[#123A72] shadow-2xl overflow-hidden">
      {/* Top Header */}
      <div className="px-4 py-3 bg-[#0B2447] border-b border-[#123A72] flex items-center justify-between">
        <div className="flex items-center space-x-2.5">
          <div className="w-8 h-8 rounded-lg bg-[#123A72] flex items-center justify-center text-sky-400">
            <Layers className="w-4 h-4" />
          </div>
          <div>
            <h3 className="text-sm font-bold tracking-wide text-white uppercase flex items-center gap-2">
              <span>Criminal Network Intelligence Graph</span>
              <span className="text-[10px] bg-sky-900/80 text-sky-300 px-2 py-0.5 rounded font-mono border border-sky-500/30">
                INTERACTIVE
              </span>
            </h3>
            <p className="text-[11px] text-slate-400">
              Visualizing multi-hop entity relationships (CDR calls, financial flows &amp; FIR co-accused)
            </p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          {/* Zoom Controls */}
          <div className="flex items-center bg-[#071B3A] border border-[#123A72] rounded-lg p-0.5 text-xs">
            <button
              onClick={() => setZoom((z) => Math.min(z + 0.15, 2.5))}
              className="p-1.5 hover:bg-[#123A72] rounded text-slate-300 hover:text-white"
              title="Zoom In"
              aria-label="Zoom In"
            >
              <ZoomIn className="w-4 h-4" />
            </button>
            <button
              onClick={() => setZoom((z) => Math.max(z - 0.15, 0.4))}
              className="p-1.5 hover:bg-[#123A72] rounded text-slate-300 hover:text-white"
              title="Zoom Out"
              aria-label="Zoom Out"
            >
              <ZoomOut className="w-4 h-4" />
            </button>
            <button
              onClick={resetView}
              className="p-1.5 hover:bg-[#123A72] rounded text-slate-300 hover:text-white"
              title="Reset View"
              aria-label="Reset View"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {isModal && onClose && (
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-[#123A72] transition-colors"
              aria-label="Close graph visualizer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Chips & Legend Bar */}
      <div className="px-4 py-2 bg-[#06162E] border-b border-[#123A72]/80 flex flex-wrap items-center justify-between gap-2 text-xs">
        {/* Link Filters */}
        <div className="flex items-center space-x-1 sm:space-x-2">
          <span className="text-[11px] font-semibold text-slate-400 mr-1 flex items-center">
            <Filter className="w-3 h-3 mr-1" /> Links:
          </span>
          <button
            onClick={() => toggleLinkFilter('call')}
            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors flex items-center gap-1 ${
              linkFilters.call
                ? 'bg-sky-950 text-sky-300 border-sky-500'
                : 'bg-slate-900 text-slate-500 border-slate-700 opacity-60'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#0284C7]"></span>
            <span>Calls (CDR)</span>
          </button>
          <button
            onClick={() => toggleLinkFilter('money')}
            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors flex items-center gap-1 ${
              linkFilters.money
                ? 'bg-emerald-950 text-emerald-300 border-emerald-500'
                : 'bg-slate-900 text-slate-500 border-slate-700 opacity-60'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>Money (TXN)</span>
          </button>
          <button
            onClick={() => toggleLinkFilter('fir')}
            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors flex items-center gap-1 ${
              linkFilters.fir
                ? 'bg-purple-950 text-purple-300 border-purple-500'
                : 'bg-slate-900 text-slate-500 border-slate-700 opacity-60'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#8B5CF6]"></span>
            <span>FIR Link</span>
          </button>
          <button
            onClick={() => toggleLinkFilter('location')}
            className={`px-2 py-0.5 rounded text-[11px] font-bold border transition-colors flex items-center gap-1 ${
              linkFilters.location
                ? 'bg-amber-950 text-amber-300 border-amber-500'
                : 'bg-slate-900 text-slate-500 border-slate-700 opacity-60'
            }`}
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]"></span>
            <span>Location</span>
          </button>
        </div>

        {/* Node Risk Legend */}
        <div className="flex items-center space-x-3 text-[11px] text-slate-400">
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D32F2F]"></span> High Risk
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]"></span> Med Risk
          </span>
          <span className="flex items-center gap-1">
            <span className="w-2.5 h-2.5 rounded-full bg-[#9333EA]"></span> FIR Record
          </span>
        </div>
      </div>

      {/* Main Canvas Area */}
      <div className="relative flex-1 bg-[#051329] overflow-hidden select-none cursor-grab active:cursor-grabbing">
        {/* Cyber node grid background */}
        <div className="absolute inset-0 cyber-grid-pattern opacity-40 pointer-events-none" />

        <svg
          id="graph-bg"
          className="w-full h-full"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <g transform={`translate(${pan.x}, ${pan.y}) scale(${zoom})`}>
            {/* Links */}
            {filteredLinks.map((link, idx) => {
              const src = nodes.find((n) => n.id === link.source);
              const tgt = nodes.find((n) => n.id === link.target);
              if (!src || !tgt) return null;

              const isLinkActive =
                selectedNode &&
                (selectedNode.id === src.id || selectedNode.id === tgt.id);

              const color = getLinkColor(link.type);
              const midX = (src.x + tgt.x) / 2;
              const midY = (src.y + tgt.y) / 2;

              return (
                <g key={`link-${idx}`} className="cursor-pointer" onClick={() => setSelectedLink(link)}>
                  <line
                    x1={src.x}
                    y1={src.y}
                    x2={tgt.x}
                    y2={tgt.y}
                    stroke={color}
                    strokeWidth={isLinkActive ? 3.5 : 2}
                    strokeOpacity={isLinkActive ? 1 : 0.6}
                    strokeDasharray={link.type === 'call' ? '4 2' : undefined}
                  />
                  {/* Link Label Tag */}
                  <rect
                    x={midX - 35}
                    y={midY - 8}
                    width={70}
                    height={16}
                    rx={4}
                    fill="#071B3A"
                    stroke={color}
                    strokeWidth={0.8}
                    opacity={0.9}
                  />
                  <text
                    x={midX}
                    y={midY + 3}
                    textAnchor="middle"
                    fill="#E2E8F0"
                    fontSize="7.5"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                  >
                    {link.label.length > 14 ? link.label.substring(0, 13) + '…' : link.label}
                  </text>
                </g>
              );
            })}

            {/* Nodes */}
            {nodes.map((node) => {
              const isSelected = selectedNode?.id === node.id;
              const isHigh = isNodeHighlighted(node.id);
              const color = getNodeColor(node);
              const isSuspect = node.type === 'suspect';
              const radius = isSuspect ? 22 : 16;

              return (
                <g
                  key={node.id}
                  transform={`translate(${node.x}, ${node.y})`}
                  className="cursor-pointer group"
                  onMouseDown={(e) => {
                    e.stopPropagation();
                    setDraggedNodeId(node.id);
                    setSelectedNode(node);
                    setSelectedLink(null);
                  }}
                >
                  {/* Pulse ring for highlighted nodes */}
                  {(isHigh || isSelected) && (
                    <circle
                      r={radius + 8}
                      fill="none"
                      stroke={color}
                      strokeWidth={2}
                      strokeDasharray="3 3"
                      className="animate-spin"
                      style={{ animationDuration: '6s' }}
                    />
                  )}

                  {/* Node Base Circle */}
                  <circle
                    r={radius}
                    fill="#071B3A"
                    stroke={color}
                    strokeWidth={isSelected ? 3.5 : isHigh ? 2.5 : 2}
                    className="transition-all duration-150 shadow-md"
                  />

                  {/* Inner Node Accent */}
                  <circle
                    r={radius - 4}
                    fill={color}
                    fillOpacity={0.25}
                  />

                  {/* Node text / icon label inside */}
                  <text
                    textAnchor="middle"
                    y={isSuspect ? -2 : 4}
                    fill="#FFFFFF"
                    fontSize={isSuspect ? '9' : '8'}
                    fontFamily="Inter, sans-serif"
                    fontWeight="700"
                  >
                    {isSuspect
                      ? node.label.split(' ')[0]
                      : node.type.toUpperCase()}
                  </text>

                  {isSuspect && (
                    <text
                      textAnchor="middle"
                      y={8}
                      fill="#93C5FD"
                      fontSize="7"
                      fontFamily="Inter, sans-serif"
                      fontWeight="500"
                    >
                      {node.score ? `${node.score} pts` : ''}
                    </text>
                  )}

                  {/* Node Label Below */}
                  <rect
                    x={-45}
                    y={radius + 4}
                    width={90}
                    height={16}
                    rx={3}
                    fill="#030C1C"
                    fillOpacity={0.85}
                    stroke="#1E3A8A"
                    strokeWidth={0.5}
                  />
                  <text
                    x={0}
                    y={radius + 15}
                    textAnchor="middle"
                    fill="#F1F5F9"
                    fontSize="8"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                  >
                    {node.alias ? `${node.alias}` : node.label}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>

        {/* Selected Entity Inspector Panel (Bottom Left Floating) */}
        {selectedNode && (
          <div className="absolute bottom-3 left-3 max-w-xs w-72 bg-[#071B3A]/95 backdrop-blur-md border border-[#174EA6] rounded-xl p-3 text-xs shadow-2xl text-slate-200 animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-700 pb-1.5 mb-2">
              <div className="flex items-center space-x-1.5">
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: getNodeColor(selectedNode) }} />
                <span className="font-bold text-white uppercase text-[11px] tracking-wider">
                  {selectedNode.type} Entity
                </span>
              </div>
              <button
                onClick={() => setSelectedNode(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="font-extrabold text-white text-sm">{selectedNode.label}</p>
            {selectedNode.alias && (
              <p className="text-sky-300 text-xs">Alias: {selectedNode.alias}</p>
            )}

            <div className="mt-2 space-y-1 text-[11px] text-slate-300">
              {selectedNode.group && <p>Group: <strong className="text-white">{selectedNode.group}</strong></p>}
              {selectedNode.risk && <p>Risk Classification: <strong className="text-red-400">{selectedNode.risk} ({selectedNode.score}/100)</strong></p>}
              <p className="text-[10px] text-slate-400 mt-1 font-mono">ID: {selectedNode.id}</p>
            </div>
          </div>
        )}

        {/* Selected Link Inspector */}
        {selectedLink && (
          <div className="absolute bottom-3 right-3 max-w-xs w-72 bg-[#071B3A]/95 backdrop-blur-md border border-[#174EA6] rounded-xl p-3 text-xs shadow-2xl text-slate-200 animate-in fade-in duration-150">
            <div className="flex items-center justify-between border-b border-slate-700 pb-1.5 mb-2">
              <span className="font-bold text-sky-400 uppercase text-[11px] tracking-wider">
                Relationship Link
              </span>
              <button
                onClick={() => setSelectedLink(null)}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>

            <p className="font-bold text-white text-xs">{selectedLink.label}</p>
            <div className="mt-1 space-y-0.5 text-[11px] text-slate-300">
              <p>Type: <strong className="uppercase text-emerald-400">{selectedLink.type}</strong></p>
              <p>Source Node: <span className="font-mono text-slate-400">{selectedLink.source}</span></p>
              <p>Target Node: <span className="font-mono text-slate-400">{selectedLink.target}</span></p>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  if (!isModal) {
    return <div className="h-full w-full min-h-[500px]">{content}</div>;
  }

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden flex items-center justify-center p-3 sm:p-6" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      <div className="relative w-full max-w-5xl h-[85vh] z-10 animate-in zoom-in-95 duration-150">
        {content}
      </div>
    </div>
  );
};

export default NetworkGraph;
