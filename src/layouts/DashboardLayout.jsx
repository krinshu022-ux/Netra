import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Chatbot from '../components/Chatbot';
import NetworkGraph from '../components/NetworkGraph';

export const DashboardLayout = ({
  unreadAlertsCount = 5,
  globalNetworkHighlightNodes = [],
  onSetGlobalNetworkHighlight = null
}) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [isNetworkModalOpen, setIsNetworkModalOpen] = useState(false);
  const [highlightedNodes, setHighlightedNodes] = useState([]);

  const handleOpenNetworkWithHighlight = (nodeIds) => {
    setHighlightedNodes(nodeIds || []);
    setIsNetworkModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] flex flex-col font-sans">
      {/* Top Government Navigation Header */}
      <Header
        onToggleMobileSidebar={() => setIsMobileSidebarOpen((prev) => !prev)}
        unreadAlertsCount={unreadAlertsCount}
      />

      {/* Main Container Layout */}
      <div className="flex-1 flex max-w-[1920px] w-full mx-auto">
        {/* Sidebar */}
        <Sidebar
          isCollapsed={isSidebarCollapsed}
          onToggleCollapse={() => setIsSidebarCollapsed((prev) => !prev)}
          isMobileOpen={isMobileSidebarOpen}
          onCloseMobile={() => setIsMobileSidebarOpen(false)}
        />

        {/* Dynamic Route Content */}
        <main className="flex-1 flex flex-col min-w-0 overflow-x-hidden">
          <Outlet context={{ onOpenNetworkWithHighlight: handleOpenNetworkWithHighlight }} />
        </main>
      </div>

      {/* Floating AI Investigator Chatbot */}
      <Chatbot onHighlightNetwork={handleOpenNetworkWithHighlight} />

      {/* Modal Network Graph */}
      <NetworkGraph
        isOpen={isNetworkModalOpen}
        onClose={() => setIsNetworkModalOpen(false)}
        highlightedNodeIds={highlightedNodes}
        isModal={true}
      />
    </div>
  );
};

export default DashboardLayout;
