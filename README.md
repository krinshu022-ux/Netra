# NETRA: Network and Entity Tracking for Risk Analysis
### AI-Powered Criminal Network Intelligence System & Investigator Assistant

> **Secure Investigation Dashboard for Authorized Cyber-Security Personnel & Law Enforcement.**  
> *Note: This is a hackathon demonstration prototype using synthetic/demo data.*

---

## 📌 Project Overview

**NETRA** bridges the gap between raw, disconnected cyber crime data streams and actionable investigation intelligence. It ingests and correlates:
- **First Information Reports (FIRs)** across multi-station police jurisdictions
- **Call Detail Records (CDR)** for burst communication & proxy route detection
- **Financial Transaction Trails (IMPS/UPI/NEFT/Crypto P2P)** to uncover circular money laundering rings
- **Entity Relationships** (shared devices, IMEI switching, vehicle registrations, and suspect associations)

---

## 🚀 Key Features

1. **Secure Government Cyber-Security Portal Login**:
   - Authorized personnel access gate with role selection (`Cyber Security Analyst`, `Investigator`, `Team Lead`, `Administrator`).
   - Mock JWT authentication layer cleanly abstracted in `src/services/authService.js`.
2. **Investigation Dashboard**:
   - **4 Summary KPI Metrics**: Total Suspects (48), Active FIRs (27), High Risk (12), Active Alerts (8).
   - **Global Search & Multi-Faceted Filters**: Real-time filtering by name, phone, vehicle plate, police station, and criminal group.
   - **Risk Classification Filter**: Immediate switching between ALL, HIGH RISK (Red), MEDIUM RISK (Amber), and LOW RISK (Green).
   - **Independently Scrollable Suspects Grid & Station-Wise FIR Panel**.
3. **Suspect Intelligence Dossier**:
   - Explainable **Risk Score (0–100)** with itemized key risk drivers.
   - Chronological **Activity Timeline** (calls, transfers, FIR mentions, location matches).
   - Verified evidence codes (`CDR-104`, `TXN-208`, `IP-LOG-4412`).
4. **Interactive Criminal Network Intelligence Graph**:
   - Visual entity-relationship graph connecting suspects, phone MSISDNs, bank mule accounts, vehicles, and FIRs.
   - Dynamic link filtering (Calls, Money, FIRs, Locations, Devices).
   - Node dragging, interactive zoom/pan, and entity inspector panel.
5. **Real-Time Surveillance Crime Alerts (`/crime-alerts`)**:
   - Automated anomaly detection cards for **Burst Calling**, **Circular Money Transfers**, **Shared Devices (IMEI)**, **Cross-Group Syndicate Contacts**, and **Hardware Skimming**.
6. **Investigator AI Chatbot ("NETRA AI")**:
   - Floating assistant accessible anywhere on the dashboard.
   - Cites explicit verifiable evidence for every response.
   - **"HIGHLIGHT ON NETWORK"** button that directly focuses and animates the corresponding cluster in the network graph.
7. **Complete Application Route Suite**:
   - `/dashboard` — Main investigation console
   - `/crime-alerts` — Automated surveillance flags
   - `/reports` — Court-admissible dossier generation and PDF preview
   - `/settings` — Preferences, alert toggles, language, and police station defaults
   - `/account` — Officer credentials & badge details
   - `/help` — Knowledge base & FAQ accordion

---

## 🛠️ Technology Stack

- **ReactJS 18** (Functional components, custom hooks)
- **Vite 5** (Fast HMR development and optimized production build)
- **Tailwind CSS 3** (Custom government-grade navy and risk color system)
- **React Router DOM 6** (Protected route guards & nested layouts)
- **Lucide React** (Authoritative iconography)
- **Recharts** (Analytical telemetry)

---

## 📂 Project Structure

```
netra/frontend/
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── README.md
├── public/
│   └── favicon.svg
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── index.css
    ├── assets/
    │   ├── assets.js              <-- Asset registry & image URLs
    │   ├── netra-logo.svg         <-- NETRA Logo
    │   ├── emblem.svg             <-- Authorized Emblem / Seal Placeholder
    │   ├── default-suspect.svg    <-- Suspect silhouette placeholder
    │   └── login-bg.svg
    ├── data/
    │   └── mockData.js            <-- 15 Suspects, 12 FIRs, Alerts, Graph Topology, AI engine
    ├── services/
    │   └── authService.js         <-- Auth service (ready for FastAPI/JWT backend)
    ├── layouts/
    │   └── DashboardLayout.jsx    <-- Persistent header, sidebar, outlet, AI assistant
    ├── components/
    │   ├── Header.jsx             <-- Top navigation & notification popover
    │   ├── Sidebar.jsx            <-- Collapsible navy sidebar with tricolor accent
    │   ├── ProtectedRoute.jsx     <-- Auth route guard
    │   ├── SummaryCards.jsx       <-- KPI summary cards
    │   ├── SearchBar.jsx          <-- Search & filter controls
    │   ├── RiskFilter.jsx         <-- High / Med / Low pills
    │   ├── SuspectCard.jsx        <-- Suspect card with badges & quick actions
    │   ├── SuspectGrid.jsx        <-- Scrollable suspect container
    │   ├── SuspectDetailsDrawer.jsx <-- Deep-dive suspect profile drawer
    │   ├── RiskScore.jsx          <-- Explainable risk index (0-100)
    │   ├── ActivityTimeline.jsx   <-- Event chronological timeline
    │   ├── FIRPanel.jsx           <-- Station-grouped FIR list
    │   ├── FIRCard.jsx            <-- FIR summary card
    │   ├── FIRDetailsDrawer.jsx   <-- FIR dossier drawer
    │   ├── FIRRegistrationModal.jsx <-- "+ REGISTER FIR" modal form
    │   ├── NetworkGraph.jsx       <-- Interactive SVG graph visualizer
    │   ├── AlertCard.jsx          <-- Suspicious pattern alert card
    │   └── Chatbot.jsx            <-- Investigator AI chatbot
    └── pages/
        ├── Login.jsx              <-- Page 1: Secure Login
        ├── Dashboard.jsx          <-- Page 2: Main Investigation Dashboard
        ├── CrimeAlerts.jsx        <-- Page 3: Suspicious Activity Alerts
        ├── Reports.jsx            <-- Page 4: Case Intelligence Reports
        ├── Settings.jsx           <-- Page 5: System Preferences
        ├── Account.jsx            <-- Page 6: Officer Credentials
        └── Help.jsx               <-- Page 7: User Guide & FAQ
```

---

## ⚡ Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Locally in Development Mode
```bash
npm run dev
```
The application will launch on **`http://localhost:5173/`**.

### 3. Build for Production
```bash
npm run build
```

---

## 🔑 Demo Credentials

| Field | Default Value | Notes |
| :--- | :--- | :--- |
| **Member ID / Email** | `OFFICER-8841` | Or `a.kumar@cybercell.gov.in` |
| **Password** | `NetraSecure#2026` | Any password &ge; 4 chars accepted |
| **Role** | `Cyber Security Analyst` | Dropdown: Analyst, Investigator, Lead, Admin |

---

## 🖼️ How to Replace Assets

All media references are centralized in [src/assets/assets.js](file:///c:/Users/RINSHU/OneDrive/Documents/netra/frontend/src/assets/assets.js):

1. **NETRA Logo**: Replace `src/assets/netra-logo.svg` (or `.png`) or update the `ASSETS.logo` import.
2. **Authorized Emblem**: Replace `src/assets/emblem.svg` (or `.png`) or update `ASSETS.emblem`.
3. **Login Background**: Update `ASSETS.loginBg` with your local image path or high-resolution command center image URL.
4. **Suspect Photos**: Replace `photo` fields in [src/data/mockData.js](file:///c:/Users/RINSHU/OneDrive/Documents/netra/frontend/src/data/mockData.js) or replace `src/assets/default-suspect.svg`.

---

## 🔌 Connecting to a Python / FastAPI Backend

The frontend is architected with a decoupled service layer. To connect to FastAPI:

1. **Authentication ([src/services/authService.js](file:///c:/Users/RINSHU/OneDrive/Documents/netra/frontend/src/services/authService.js))**:
   ```javascript
   async login(memberId, password, role) {
     const response = await fetch('http://localhost:8000/api/v1/auth/login', {
       method: 'POST',
       headers: { 'Content-Type': 'application/json' },
       body: JSON.stringify({ username: memberId, password: password, role: role })
     });
     if (!response.ok) throw new Error('Invalid credentials');
     const data = await response.json();
     localStorage.setItem('netra_auth_session', JSON.stringify(data.user));
     return data.user;
   }
   ```

2. **Graph Intelligence & FIR Data**:
   Replace static calls in `Dashboard.jsx` and `NetworkGraph.jsx` with `fetch('http://localhost:8000/api/v1/network/graph')` and `fetch('http://localhost:8000/api/v1/firs')`.

3. **FastAPI Investigator AI Chatbot ([src/components/Chatbot.jsx](file:///c:/Users/RINSHU/OneDrive/Documents/netra/frontend/src/components/Chatbot.jsx))**:
   Route chatbot queries to `POST http://localhost:8000/api/v1/ai/query` connected to LangChain / LlamaIndex / OpenAI / Gemini over your Neo4j or SQL graph database.
