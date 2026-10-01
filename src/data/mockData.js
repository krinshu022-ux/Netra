// NETRA - Synthetic Demo Dataset for Cyber Investigation & Criminal Network Intelligence
// Note: All records, names, phone numbers, and FIR references are completely synthetic.

export const POLICE_STATIONS = [
  "Patna Cyber Police Station",
  "Kankarbagh Police Station",
  "Danapur Cyber Crime Cell",
  "Rajendra Nagar Crime Branch",
  "Boring Road Special Unit"
];

export const INCIDENT_TYPES = [
  "Cyber Fraud",
  "Financial Fraud",
  "Identity Theft",
  "Organized Crime",
  "Money Laundering",
  "Communication Fraud",
  "Other"
];

export const INITIAL_SUSPECTS = [
  {
    id: "SUS-001",
    name: "Rakesh Kumar",
    alias: "Rocky",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
    riskLevel: "HIGH",
    riskScore: 92,
    firCount: 6,
    connections: 14,
    group: "Group G-01 (Mule Ops)",
    location: "Patna, Bihar",
    lastActivity: "2 hours ago",
    phones: ["+91 98350 12345", "+91 94310 98765"],
    vehicles: ["BR-01-AB-4492 (White Scorpio)", "BR-01-CD-1029 (Pulsar 220)"],
    bankAccounts: ["SBI - AC#9982410291", "HDFC - AC#1029482190"],
    knownAssociates: ["Amit Kumar (A-1)", "Sunil Yadav (Fin-Lead)", "Vicky Sharma (Tech)", "Rohit Verma (SIM Handler)"],
    recentActivity: "Unusual burst of 12 calls to SIM handler Rohit Verma within 30 mins; ATM cash withdrawal of ₹1.2L in Kankarbagh.",
    evidenceReferences: ["FIR-2026-001", "CDR-104", "TXN-208", "IP-LOG-4412"],
    riskFactors: [
      "Multiple active FIR mentions across 3 police jurisdictions",
      "High network centrality (Degree: 14, Betweenness: 0.88)",
      "Circular transaction detected (₹1.78L loop via Sunil and Amit)",
      "Burst calling detected (12 calls / 30 mins with primary SIM mule)",
      "Cross-group communication with Group G-03 Syndicate"
    ],
    timeline: [
      { time: "09:30", type: "fir", title: "FIR Mention", desc: "Named in FIR-2026-001 at Patna Cyber PS" },
      { time: "10:15", type: "call", title: "Burst Call to Amit", desc: "Duration: 4m 12s | Tower: Boring Road" },
      { time: "11:20", type: "money", title: "₹80,000 Transfer", desc: "NEFT to Sunil Yadav (HDFC Bank)" },
      { time: "14:10", type: "location", title: "Location Match", desc: "Device ping co-located with Rohit Verma at Kankarbagh" },
      { time: "18:40", type: "alert", title: "Burst Calling Alert", desc: "Automated trigger: CDR-102 to CDR-114" }
    ]
  },
  {
    id: "SUS-002",
    name: "Amit Kumar",
    alias: "AK-47",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    riskLevel: "HIGH",
    riskScore: 88,
    firCount: 5,
    connections: 11,
    group: "Group G-01 (Mule Ops)",
    location: "Danapur, Bihar",
    lastActivity: "4 hours ago",
    phones: ["+91 97714 55667", "+91 88771 22334"],
    vehicles: ["BR-01-EE-8819 (Swift Dzire)"],
    bankAccounts: ["ICICI - AC#4491823019"],
    knownAssociates: ["Rakesh Kumar", "Sunil Yadav", "Mohan Lal"],
    recentActivity: "Received ₹50,000 from Rakesh and transferred ₹48,000 within 14 minutes to Sunil Yadav.",
    evidenceReferences: ["FIR-2026-001", "TXN-101", "TXN-102", "CDR-219"],
    riskFactors: [
      "Layering operator in circular transaction scheme",
      "Repeated IMEI switching across 4 forged SIMs",
      "Frequent calls to known cyber fraud call centers in Jamtara border"
    ],
    timeline: [
      { time: "08:15", type: "money", title: "Received ₹50,000", desc: "IMPS from Rakesh Kumar" },
      { time: "08:29", type: "money", title: "Transferred ₹48,000", desc: "UPI to Sunil Yadav" },
      { time: "12:00", type: "call", title: "VoIP Proxy Call", desc: "International routing via UAE gateway" },
      { time: "16:30", type: "device", title: "Device Switching", desc: "IMEI 8694019203 active with new SIM" }
    ]
  },
  {
    id: "SUS-003",
    name: "Sunil Yadav",
    alias: "Munna Builder",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80",
    riskLevel: "HIGH",
    riskScore: 95,
    firCount: 8,
    connections: 18,
    group: "Group G-02 (Financial Laundering)",
    location: "Kankarbagh, Patna",
    lastActivity: "1 hour ago",
    phones: ["+91 91223 90812"],
    vehicles: ["BR-01-ZZ-0007 (Fortuner)", "BR-01-XX-9911 (Innova)"],
    bankAccounts: ["Axis - AC#0019284192", "PNB - AC#8821940194"],
    knownAssociates: ["Rakesh Kumar", "Pooja Singh", "Vicky Sharma", "Deepak Roy"],
    recentActivity: "High-volume cash deposit in PNB current account followed by immediate crypto P2P buy orders.",
    evidenceReferences: ["FIR-2026-002", "FIR-2026-004", "TXN-301", "CYPTO-WALL-89"],
    riskFactors: [
      "Master recipient for 24 cyber extortion victim accounts",
      "Crypto P2P conversion node for illicit funds",
      "Linked to 8 active cyber extortion and OTP theft FIRs",
      "Cross-border Hawala coordination link"
    ],
    timeline: [
      { time: "07:00", type: "money", title: "Crypto P2P Txn", desc: "USDT buy of ₹4,50,000 on Telegram escrow" },
      { time: "11:45", type: "call", title: "Encrypted Voice Call", desc: "Session ID linked to SIM-91223" },
      { time: "15:20", type: "fir", title: "Warrant Issued", desc: "Patna Cyber PS requested custodial remand" }
    ]
  },
  {
    id: "SUS-004",
    name: "Vicky Sharma",
    alias: "Techie",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
    riskLevel: "MEDIUM",
    riskScore: 68,
    firCount: 3,
    connections: 8,
    group: "Group G-01 (Mule Ops)",
    location: "Rajendra Nagar, Patna",
    lastActivity: "5 hours ago",
    phones: ["+91 93041 88291"],
    vehicles: ["BR-01-JJ-3012 (Hero Splendor)"],
    bankAccounts: ["Canara - AC#5541920192"],
    knownAssociates: ["Rakesh Kumar", "Rohit Verma"],
    recentActivity: "Configured phishing SMS gateways using bulk SMS API tokens.",
    evidenceReferences: ["FIR-2026-003", "CDR-330", "SMS-LOG-90"],
    riskFactors: [
      "Technical infrastructure provider for spoofed SMS headers",
      "Shared IP address with 3 known phishing domains"
    ],
    timeline: [
      { time: "10:00", type: "device", title: "API Gateway Deploy", desc: "Uploaded script to server 194.26.29.11" },
      { time: "13:30", type: "call", title: "Call to Rakesh", desc: "Duration 1m 40s" }
    ]
  },
  {
    id: "SUS-005",
    name: "Rohit Verma",
    alias: "Chhotu SIM",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
    riskLevel: "HIGH",
    riskScore: 84,
    firCount: 4,
    connections: 12,
    group: "Group G-01 (Mule Ops)",
    location: "Boring Road, Patna",
    lastActivity: "30 mins ago",
    phones: ["+91 99341 00293", "+91 82103 44921"],
    vehicles: ["BR-01-CC-7712 (Activa 6G)"],
    bankAccounts: ["Paytm Payments Bank - AC#9934100293"],
    knownAssociates: ["Rakesh Kumar", "Vicky Sharma", "Manoj Tiwari"],
    recentActivity: "Procured 45 pre-activated SIM cards with forged Aadhaar biometrics.",
    evidenceReferences: ["FIR-2026-001", "CDR-105", "BIOMETRIC-AUDIT-12"],
    riskFactors: [
      "Forged KYC registration syndicate head",
      "Burst communication with 8 mule recruiters simultaneously",
      "Point of sale kiosk breach at 2 telecom retail outlets"
    ],
    timeline: [
      { time: "09:00", type: "alert", title: "Aadhaar Anomaly", desc: "12 duplicate biometric scans within 5 mins" },
      { time: "11:15", type: "call", title: "Call with Rakesh", desc: "SIM dispatch discussion" }
    ]
  },
  {
    id: "SUS-006",
    name: "Pooja Singh",
    alias: "Rani",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
    riskLevel: "MEDIUM",
    riskScore: 62,
    firCount: 2,
    connections: 6,
    group: "Group G-02 (Financial Laundering)",
    location: "Anisabad, Patna",
    lastActivity: "8 hours ago",
    phones: ["+91 94700 81234"],
    vehicles: ["BR-01-DK-1122 (i20)"],
    bankAccounts: ["Kotak Mahindra - AC#339182301"],
    knownAssociates: ["Sunil Yadav", "Deepak Roy"],
    recentActivity: "Rent-a-bank account facilitator receiving commission cut of 4% per transaction.",
    evidenceReferences: ["FIR-2026-002", "TXN-404"],
    riskFactors: [
      "Account holder for shell company accounts",
      "High-value deposits with immediate RTGS outflows"
    ],
    timeline: [
      { time: "11:00", type: "money", title: "RTGS Outflow ₹2.5L", desc: "Destination: Unknown shell firm" }
    ]
  },
  {
    id: "SUS-007",
    name: "Deepak Roy",
    alias: "Doctor",
    photo: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    riskLevel: "LOW",
    riskScore: 35,
    firCount: 1,
    connections: 4,
    group: "Group G-02 (Financial Laundering)",
    location: "Gardanibagh, Patna",
    lastActivity: "1 day ago",
    phones: ["+91 98352 77102"],
    vehicles: ["BR-01-MM-5561 (Honda City)"],
    bankAccounts: ["SBI - AC#1129482910"],
    knownAssociates: ["Sunil Yadav", "Pooja Singh"],
    recentActivity: "Provided notarized rent agreements for fictitious company registrations.",
    evidenceReferences: ["FIR-2026-002"],
    riskFactors: [
      "Documentation supplier for fraudulent current accounts"
    ],
    timeline: [
      { time: "Yesterday", type: "fir", title: "Notice Dispatched", desc: "Section 91 CrPC notice issued for ledger books" }
    ]
  },
  {
    id: "SUS-008",
    name: "Mohan Lal",
    alias: "Munim Ji",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80",
    riskLevel: "MEDIUM",
    riskScore: 71,
    firCount: 3,
    connections: 9,
    group: "Group G-03 (Identity Theft)",
    location: "Danapur, Patna",
    lastActivity: "6 hours ago",
    phones: ["+91 97711 44556"],
    vehicles: ["BR-01-PP-8821 (Baleno)"],
    bankAccounts: ["IDFC First - AC#772910294"],
    knownAssociates: ["Amit Kumar", "Suresh Paswan"],
    recentActivity: "Cross-group contact established with Group G-01 for sharing scraped bank employee credentials.",
    evidenceReferences: ["FIR-2026-005", "ALERT-XGROUP-01"],
    riskFactors: [
      "Cross-group coordinator between Identity and Mule networks",
      "Credential database broker on dark web forums"
    ],
    timeline: [
      { time: "06:45", type: "alert", title: "Cross-Group Contact", desc: "Encrypted ping with Amit Kumar" },
      { time: "12:10", type: "money", title: "Received ₹35,000", desc: "Commission payment via UPI" }
    ]
  },
  {
    id: "SUS-009",
    name: "Suresh Paswan",
    alias: "Kali",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    riskLevel: "LOW",
    riskScore: 28,
    firCount: 1,
    connections: 3,
    group: "Group G-03 (Identity Theft)",
    location: "Phulwari Sharif, Patna",
    lastActivity: "2 days ago",
    phones: ["+91 99551 88294"],
    vehicles: ["BR-01-RR-9912 (Discover 125)"],
    bankAccounts: ["Union Bank - AC#2291048291"],
    knownAssociates: ["Mohan Lal"],
    recentActivity: "Collected physical identity xerox copies from local computer centers.",
    evidenceReferences: ["FIR-2026-005"],
    riskFactors: [
      "Low-level document collector; limited digital footprint"
    ],
    timeline: [
      { time: "2 days ago", type: "fir", title: "Witness Statement", desc: "Recorded statement at Danapur PS" }
    ]
  },
  {
    id: "SUS-010",
    name: "Manoj Tiwari",
    alias: "Pandit",
    photo: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=300&q=80",
    riskLevel: "HIGH",
    riskScore: 89,
    firCount: 5,
    connections: 13,
    group: "Group G-04 (Voice Call Extortion)",
    location: "Boring Road, Patna",
    lastActivity: "3 hours ago",
    phones: ["+91 93340 77123", "+91 88091 22910"],
    vehicles: ["BR-01-GG-1008 (Creta)"],
    bankAccounts: ["ICICI - AC#99182301928"],
    knownAssociates: ["Rohit Verma", "Alok Pandey"],
    recentActivity: "Operated automated IVR dialer broadcasting fake electricity bill disconnection threats.",
    evidenceReferences: ["FIR-2026-006", "FIR-2026-008", "CDR-991"],
    riskFactors: [
      "High volume automated voice spoofing infrastructure",
      "5 FIRs across Patna and Muzaffarpur",
      "Victim extortion amounts totaling ₹34,00,000"
    ],
    timeline: [
      { time: "08:30", type: "call", title: "Dialer Session Started", desc: "2,400 spoofed calls broadcasted" },
      { time: "14:50", type: "alert", title: "High Risk Trigger", desc: "Multiple victim complaints registered simultaneously" }
    ]
  },
  {
    id: "SUS-011",
    name: "Alok Pandey",
    alias: "Software",
    photo: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    riskLevel: "MEDIUM",
    riskScore: 58,
    firCount: 2,
    connections: 5,
    group: "Group G-04 (Voice Call Extortion)",
    location: "Rajendra Nagar, Patna",
    lastActivity: "7 hours ago",
    phones: ["+91 94318 90123"],
    vehicles: ["BR-01-TT-4401 (Apache RTR)"],
    bankAccounts: ["HDFC - AC#4410293819"],
    knownAssociates: ["Manoj Tiwari"],
    recentActivity: "Developed Android APK payload (.apk disguised as electricity payment update).",
    evidenceReferences: ["FIR-2026-006", "APK-SAMPLE-88"],
    riskFactors: [
      "Malware author for credential-harvesting APK files"
    ],
    timeline: [
      { time: "11:20", type: "device", title: "APK Build Upload", desc: "Package net.power.bihar.apk compiled" }
    ]
  },
  {
    id: "SUS-012",
    name: "Karan Johar Sharma",
    alias: "KJ",
    photo: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80",
    riskLevel: "LOW",
    riskScore: 24,
    firCount: 1,
    connections: 3,
    group: "Group G-01 (Mule Ops)",
    location: "Kankarbagh, Patna",
    lastActivity: "12 hours ago",
    phones: ["+91 91024 11299"],
    vehicles: ["BR-01-WW-3321 (Hero Glamour)"],
    bankAccounts: ["BOB - AC#8830192841"],
    knownAssociates: ["Rakesh Kumar"],
    recentActivity: "Student account utilized for single transaction of ₹25,000 for ₹1,500 incentive.",
    evidenceReferences: ["FIR-2026-007"],
    riskFactors: [
      "First time mule recruit; student demographic"
    ],
    timeline: [
      { time: "Yesterday", type: "money", title: "Mule Account Hit", desc: "₹25,000 credited and withdrawn via ATM" }
    ]
  },
  {
    id: "SUS-013",
    name: "Neeraj Dubey",
    alias: "ND",
    photo: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=300&q=80",
    riskLevel: "MEDIUM",
    riskScore: 65,
    firCount: 2,
    connections: 7,
    group: "Group G-02 (Financial Laundering)",
    location: "Patna City, Bihar",
    lastActivity: "4 hours ago",
    phones: ["+91 98358 44321"],
    vehicles: ["BR-01-QQ-5510 (Amaze)"],
    bankAccounts: ["Kotak - AC#661928401"],
    knownAssociates: ["Sunil Yadav"],
    recentActivity: "Transferred funds via POS merchant machines in local gold jewelry markets.",
    evidenceReferences: ["FIR-2026-004", "POS-TXN-119"],
    riskFactors: [
      "Gold merchant POS terminal abuse for instant laundering"
    ],
    timeline: [
      { time: "09:40", type: "money", title: "POS Swipe ₹1.8L", desc: "Gold bullion purchase in Patna City" }
    ]
  },
  {
    id: "SUS-014",
    name: "Gaurav Sen",
    alias: "Babu",
    photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
    riskLevel: "HIGH",
    riskScore: 91,
    firCount: 7,
    connections: 16,
    group: "Group G-05 (Card Cloning & ATM Skimming)",
    location: "Boring Canal Road, Patna",
    lastActivity: "1 hour ago",
    phones: ["+91 93049 88102", "+91 88770 11928"],
    vehicles: ["BR-01-EE-9900 (Verna)"],
    bankAccounts: ["Axis Bank - AC#771928401"],
    knownAssociates: ["Prakash Jha", "Rakesh Kumar"],
    recentActivity: "Installed magnetic card skimmer at Boring Road junction ATM kiosk.",
    evidenceReferences: ["FIR-2026-009", "CCTV-ATM-04", "CARD-DUMP-210"],
    riskFactors: [
      "Hardware skimming operator with multi-state warrants",
      "Cloned card dump with over 180 extracted tracks",
      "Repeated CCTV face matches across 4 distinct ATM vestibules"
    ],
    timeline: [
      { time: "05:30", type: "device", title: "Skimmer Attached", desc: "ATM Vestibule Boring Canal Rd (CCTV Tag 04)" },
      { time: "11:00", type: "alert", title: "Skimming Alert", desc: "ATM sensor tamper flag raised by Bank SecOps" }
    ]
  },
  {
    id: "SUS-015",
    name: "Prakash Jha",
    alias: "Masterji",
    photo: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=300&q=80",
    riskLevel: "LOW",
    riskScore: 29,
    firCount: 1,
    connections: 4,
    group: "Group G-05 (Card Cloning & ATM Skimming)",
    location: "Danapur, Patna",
    lastActivity: "1 day ago",
    phones: ["+91 94314 00918"],
    vehicles: ["BR-01-AA-1299 (Passion Pro)"],
    bankAccounts: ["PNB - AC#449102948"],
    knownAssociates: ["Gaurav Sen"],
    recentActivity: "Provided electronic soldering and battery packs for skimming hardware.",
    evidenceReferences: ["FIR-2026-009"],
    riskFactors: [
      "Technical hardware fabricator"
    ],
    timeline: [
      { time: "Yesterday", type: "call", title: "Call to Gaurav", desc: "Duration 45s" }
    ]
  }
];

export const INITIAL_FIRS = [
  {
    id: "FIR-001",
    firNumber: "FIR-2026-001",
    station: "Patna Cyber Police Station",
    date: "2026-10-01",
    time: "09:15",
    incidentType: "Cyber Fraud",
    risk: "HIGH",
    investigator: "Insp. A. Kumar",
    status: "Under Investigation",
    complainant: "Rajeshwar Prasad (Retd. Govt. Officer)",
    suspects: ["Rakesh Kumar", "Amit Kumar", "Rohit Verma"],
    location: "Patna Cyber PS Jurisdiction (Boring Road)",
    description: "Complainant duped of ₹14,50,000 under pretext of digital arrest by impersonating CBI cyber crime officers via spoofed video calls. Funds distributed within minutes across 8 mule accounts.",
    evidence: ["CDR-104", "TXN-208", "IP-LOG-4412", "AUDIO-REC-01"],
    relatedTransactions: [
      { id: "TXN-208", amount: "₹4,50,000", from: "Complainant SBI", to: "Rakesh Kumar SBI (AC#9982410291)", timestamp: "2026-10-01 08:30" },
      { id: "TXN-209", amount: "₹3,80,000", from: "Complainant SBI", to: "Amit Kumar ICICI (AC#4491823019)", timestamp: "2026-10-01 08:34" }
    ],
    relatedCalls: [
      { id: "CDR-104", caller: "+91 98350 12345 (Rakesh)", receiver: "+91 99341 00293 (Rohit)", duration: "4m 12s", timestamp: "2026-10-01 08:10" },
      { id: "CDR-105", caller: "+91 98350 12345 (Rakesh)", receiver: "+91 97714 55667 (Amit)", duration: "2m 45s", timestamp: "2026-10-01 08:15" }
    ]
  },
  {
    id: "FIR-002",
    firNumber: "FIR-2026-002",
    station: "Patna Cyber Police Station",
    date: "2026-09-30",
    time: "14:20",
    incidentType: "Financial Fraud",
    risk: "MEDIUM",
    investigator: "SI R. Singh",
    status: "Evidence Review",
    complainant: "Dr. Smita Bannerjee",
    suspects: ["Sunil Yadav", "Pooja Singh", "Deepak Roy"],
    location: "Kankarbagh, Patna",
    description: "Unauthorized net-banking sweep of ₹6,80,000 executed using malware APK. Funds converted to cryptocurrency via OTC Telegram channel.",
    evidence: ["TXN-301", "CYPTO-WALL-89", "CDR-219"],
    relatedTransactions: [
      { id: "TXN-301", amount: "₹6,80,000", from: "Victim HDFC", to: "Axis - AC#0019284192 (Sunil Yadav)", timestamp: "2026-09-30 13:45" }
    ],
    relatedCalls: [
      { id: "CDR-219", caller: "+91 91223 90812 (Sunil)", receiver: "+91 94700 81234 (Pooja)", duration: "6m 10s", timestamp: "2026-09-30 14:00" }
    ]
  },
  {
    id: "FIR-003",
    firNumber: "FIR-2026-003",
    station: "Kankarbagh Police Station",
    date: "2026-09-29",
    time: "11:00",
    incidentType: "Identity Theft",
    risk: "HIGH",
    investigator: "Insp. S. K. Verma",
    status: "Under Investigation",
    complainant: "Vipin Bihari (Branch Manager, Gramin Bank)",
    suspects: ["Vicky Sharma", "Rohit Verma"],
    location: "Kankarbagh Main Rd",
    description: "Mass synthesis of fake identity profiles using forged Aadhaar biometrics to open 65 bogus accounts at local microfinance branch.",
    evidence: ["BIOMETRIC-AUDIT-12", "SMS-LOG-90", "SEIZED-SIM-45"],
    relatedTransactions: [
      { id: "TXN-389", amount: "₹1,20,000", from: "Microfinance Pool", to: "Canara - AC#5541920192 (Vicky)", timestamp: "2026-09-29 10:15" }
    ],
    relatedCalls: [
      { id: "CDR-330", caller: "+91 93041 88291 (Vicky)", receiver: "+91 99341 00293 (Rohit)", duration: "8m 05s", timestamp: "2026-09-29 09:40" }
    ]
  },
  {
    id: "FIR-004",
    firNumber: "FIR-2026-004",
    station: "Kankarbagh Police Station",
    date: "2026-09-28",
    time: "16:45",
    incidentType: "Money Laundering",
    risk: "HIGH",
    investigator: "Insp. A. Kumar",
    status: "Charge Sheet Prepared",
    complainant: "State Cyber Cell via Intelligence Bureau",
    suspects: ["Sunil Yadav", "Neeraj Dubey"],
    location: "Patna City Bullion Market",
    description: "Laundering of cyber scam proceeds exceeding ₹85,00,000 through multiple shell merchants and direct purchase of 24K physical gold bars.",
    evidence: ["POS-TXN-119", "BANK-STMT-901", "INVOICE-JEWEL-44"],
    relatedTransactions: [
      { id: "TXN-401", amount: "₹18,50,000", from: "Axis - AC#0019284192", to: "Patna Bullion Merchant", timestamp: "2026-09-28 15:20" }
    ],
    relatedCalls: [
      { id: "CDR-412", caller: "+91 91223 90812 (Sunil)", receiver: "+91 98358 44321 (Neeraj)", duration: "3m 15s", timestamp: "2026-09-28 15:00" }
    ]
  },
  {
    id: "FIR-005",
    firNumber: "FIR-2026-005",
    station: "Danapur Cyber Crime Cell",
    date: "2026-09-27",
    time: "10:30",
    incidentType: "Organized Crime",
    risk: "MEDIUM",
    investigator: "SI Vikramaditya",
    status: "Evidence Review",
    complainant: "Cyber Intelligence Alert System",
    suspects: ["Mohan Lal", "Suresh Paswan", "Amit Kumar"],
    location: "Danapur Cantonment Area",
    description: "Operating illicit SIM-box setup routing cross-border phishing voice traffic with stolen SIP credentials.",
    evidence: ["SIP-LOG-881", "SIM-BOX-HARDWARE-02"],
    relatedTransactions: [
      { id: "TXN-502", amount: "₹35,000", from: "IDFC First (Mohan)", to: "Union Bank (Suresh)", timestamp: "2026-09-27 09:30" }
    ],
    relatedCalls: [
      { id: "CDR-509", caller: "+91 97711 44556 (Mohan)", receiver: "+91 97714 55667 (Amit)", duration: "5m 20s", timestamp: "2026-09-27 10:00" }
    ]
  },
  {
    id: "FIR-006",
    firNumber: "FIR-2026-006",
    station: "Danapur Cyber Crime Cell",
    date: "2026-09-26",
    time: "15:10",
    incidentType: "Communication Fraud",
    risk: "HIGH",
    investigator: "SI Vikramaditya",
    status: "Under Investigation",
    complainant: "Mridula Devi",
    suspects: ["Manoj Tiwari", "Alok Pandey"],
    location: "Saguna More, Danapur",
    description: "Victim received SMS claiming electricity bill overdue with malicious APK link. ₹3,20,000 drained upon clicking APK payload.",
    evidence: ["APK-SAMPLE-88", "CDR-991", "SMS-HEADER-SB-BIHAR"],
    relatedTransactions: [
      { id: "TXN-601", amount: "₹3,20,000", from: "Victim PNB", to: "ICICI - AC#99182301928 (Manoj)", timestamp: "2026-09-26 14:40" }
    ],
    relatedCalls: [
      { id: "CDR-602", caller: "+91 93340 77123 (Manoj)", receiver: "+91 94318 90123 (Alok)", duration: "11m 40s", timestamp: "2026-09-26 14:10" }
    ]
  },
  {
    id: "FIR-007",
    firNumber: "FIR-2026-007",
    station: "Rajendra Nagar Crime Branch",
    date: "2026-09-25",
    time: "12:00",
    incidentType: "Cyber Fraud",
    risk: "LOW",
    investigator: "Insp. P. C. Jha",
    status: "Pending Verification",
    complainant: "Animesh Roy",
    suspects: ["Karan Johar Sharma"],
    location: "Kankarbagh Colony",
    description: "Work from home part-time telegram review scam. Victim paid ₹25,000 task deposit fee.",
    evidence: ["TG-CHAT-LOG-91", "UPI-REF-9921"],
    relatedTransactions: [
      { id: "TXN-701", amount: "₹25,000", from: "Victim PhonePe", to: "BOB - AC#8830192841 (Karan)", timestamp: "2026-09-25 11:30" }
    ],
    relatedCalls: []
  },
  {
    id: "FIR-008",
    firNumber: "FIR-2026-008",
    station: "Rajendra Nagar Crime Branch",
    date: "2026-09-24",
    time: "17:30",
    incidentType: "Financial Fraud",
    risk: "HIGH",
    investigator: "Insp. P. C. Jha",
    status: "Under Investigation",
    complainant: "Kiran Mazumdar (Senior Citizen)",
    suspects: ["Manoj Tiwari", "Sunil Yadav"],
    location: "Rajendra Nagar Sector 3",
    description: "Fake investment advisory app fraud promising 300% monthly returns on IPO pre-allocation.",
    evidence: ["IP-APP-883", "WHATSAPP-EXPORT-02"],
    relatedTransactions: [
      { id: "TXN-801", amount: "₹12,00,000", from: "Victim Axis", to: "Axis - AC#0019284192 (Sunil)", timestamp: "2026-09-24 16:50" }
    ],
    relatedCalls: []
  },
  {
    id: "FIR-009",
    firNumber: "FIR-2026-009",
    station: "Boring Road Special Unit",
    date: "2026-09-23",
    time: "08:45",
    incidentType: "Cyber Fraud",
    risk: "HIGH",
    investigator: "ACP N. Sharma",
    status: "Under Investigation",
    complainant: "State Bank of India Security Cell",
    suspects: ["Gaurav Sen", "Prakash Jha"],
    location: "Boring Canal Road ATM Vestibule",
    description: "Physical card skimmer and micro-pinhole camera unit detected during routine bank maintenance inspection.",
    evidence: ["CCTV-ATM-04", "CARD-DUMP-210", "SKIMMER-HARDWARE-99"],
    relatedTransactions: [],
    relatedCalls: [
      { id: "CDR-901", caller: "+91 93049 88102 (Gaurav)", receiver: "+91 94314 00918 (Prakash)", duration: "1m 30s", timestamp: "2026-09-23 05:40" }
    ]
  },
  {
    id: "FIR-010",
    firNumber: "FIR-2026-010",
    station: "Boring Road Special Unit",
    date: "2026-09-22",
    time: "18:00",
    incidentType: "Identity Theft",
    risk: "MEDIUM",
    investigator: "ACP N. Sharma",
    status: "Evidence Review",
    complainant: "Aditya Telecom Distributorship",
    suspects: ["Rohit Verma"],
    location: "Boring Road Market",
    description: "Illegal POS application bypass enabling biometric capture without customer verification.",
    evidence: ["POS-DUMP-221", "SEIZED-TABLET-01"],
    relatedTransactions: [],
    relatedCalls: []
  },
  {
    id: "FIR-011",
    firNumber: "FIR-2026-011",
    station: "Patna Cyber Police Station",
    date: "2026-09-21",
    time: "13:15",
    incidentType: "Financial Fraud",
    risk: "LOW",
    investigator: "SI R. Singh",
    status: "Resolved",
    complainant: "Pankaj Srivastava",
    suspects: ["Deepak Roy"],
    location: "Kadamkuan, Patna",
    description: "Fake courier delivery OTP phishing. Funds frozen within 1 hour under Golden Hour protocol.",
    evidence: ["RECOVERY-RECEIPT-99"],
    relatedTransactions: [
      { id: "TXN-1101", amount: "₹45,000", from: "Pankaj SBI", to: "Deepak Roy SBI", timestamp: "2026-09-21 12:45" }
    ],
    relatedCalls: []
  },
  {
    id: "FIR-012",
    firNumber: "FIR-2026-012",
    station: "Danapur Cyber Crime Cell",
    date: "2026-09-20",
    time: "10:00",
    incidentType: "Money Laundering",
    risk: "MEDIUM",
    investigator: "SI Vikramaditya",
    status: "Evidence Review",
    complainant: "Financial Intelligence Unit (FIU-IND)",
    suspects: ["Pooja Singh", "Sunil Yadav"],
    location: "Anisabad, Patna",
    description: "Suspicious Transaction Report (STR-2026-9021) regarding 14 structured deposits just below ₹50,000 threshold.",
    evidence: ["STR-DOC-9021", "BANK-LEDGER-77"],
    relatedTransactions: [
      { id: "TXN-1201", amount: "₹49,500", from: "Cash Deposit", to: "Kotak - AC#339182301 (Pooja)", timestamp: "2026-09-20 09:15" },
      { id: "TXN-1202", amount: "₹49,000", from: "Cash Deposit", to: "Kotak - AC#339182301 (Pooja)", timestamp: "2026-09-20 09:20" }
    ],
    relatedCalls: []
  }
];

export const CRIME_ALERTS = [
  {
    id: "ALERT-001",
    title: "Unusual Burst Calling Detected",
    riskLevel: "HIGH",
    category: "Burst Calling",
    timestamp: "28 mins ago",
    summary: "12 calls initiated within 30 minutes between primary suspect and SIM distributor.",
    entities: ["Rakesh Kumar (Rocky)", "Rohit Verma (Chhotu SIM)"],
    evidence: "CDR-102 to CDR-114",
    location: "Tower Sector 4, Boring Road",
    details: "High-frequency burst calling pattern matches pre-operational synchronization before fund offloading."
  },
  {
    id: "ALERT-002",
    title: "Circular Money Transfer Ring Identified",
    riskLevel: "HIGH",
    category: "Circular Money Transfer",
    timestamp: "1 hour ago",
    summary: "Structured circular fund layering detected: Rakesh → (₹50k) → Amit → (₹48k) → Sunil → (₹45k) → Rakesh.",
    entities: ["Rakesh Kumar", "Amit Kumar", "Sunil Yadav"],
    evidence: "TXN-101, TXN-102, TXN-103",
    location: "Cross-Bank Flow (SBI ↔ ICICI ↔ Axis)",
    details: "Layering mechanism designed to obfuscate origin of proceeds from cyber extortion case FIR-2026-001."
  },
  {
    id: "ALERT-003",
    title: "Shared Hardware / Multi-Identity Association",
    riskLevel: "MEDIUM",
    category: "Shared Device",
    timestamp: "3 hours ago",
    summary: "Single IMEI device (869401920381029) associated with 5 distinct subscriber identities within 48 hours.",
    entities: ["Amit Kumar", "Rohit Verma"],
    evidence: "CDR-IMEI-MATCH-88",
    location: "Danapur Tower B-12",
    details: "High risk of mule burner phone operation utilizing forged SIM cards."
  },
  {
    id: "ALERT-004",
    title: "Cross-Group Syndicate Interlink",
    riskLevel: "HIGH",
    category: "Cross-Group Contact",
    timestamp: "5 hours ago",
    summary: "First recorded direct encrypted comms between Group G-01 (Mules) and Group G-03 (Identity Brokers).",
    entities: ["Amit Kumar (G-01)", "Mohan Lal (G-03)"],
    evidence: "ALERT-XGROUP-01, CDR-509",
    location: "Patna Cantonment",
    details: "Indicates merger or coordinated joint cyber operations across previously separated criminal factions."
  },
  {
    id: "ALERT-005",
    title: "Multi-Suspect Physical Co-Location Match",
    riskLevel: "MEDIUM",
    category: "Same Location",
    timestamp: "6 hours ago",
    summary: "Simultaneous cellular tower pings detected for 3 high-risk suspects within 150m radius.",
    entities: ["Rakesh Kumar", "Rohit Verma", "Vicky Sharma"],
    evidence: "TOWER-LOC-PATNA-09",
    location: "Kankarbagh Colony Market",
    details: "Physical meeting point identified coinciding with recent ATM cash offloading time."
  },
  {
    id: "ALERT-006",
    title: "Rapid High-Value Crypto Conversion",
    riskLevel: "HIGH",
    category: "Financial Laundering",
    timestamp: "8 hours ago",
    summary: "Immediate conversion of ₹4,50,000 bank deposit into USDT via P2P decentralized wallet.",
    entities: ["Sunil Yadav (Munna Builder)"],
    evidence: "CYPTO-WALL-89, TXN-301",
    location: "Telegram Escrow Group #88",
    details: "Golden Hour window elapsed. Cold wallet transfer in progress."
  },
  {
    id: "ALERT-007",
    title: "ATM Hardware Tampering Flag",
    riskLevel: "HIGH",
    category: "Hardware Skimming",
    timestamp: "10 hours ago",
    summary: "Optical sensor distortion on card reader slot at Boring Canal Road ATM kiosk.",
    entities: ["Gaurav Sen", "Prakash Jha"],
    evidence: "CCTV-ATM-04, SEC-TAMP-01",
    location: "Boring Canal Road, Patna",
    details: "Live CCTV feed captured suspect installing micro-camera assembly at 05:30 AM."
  },
  {
    id: "ALERT-008",
    title: "Malicious APK Broadcaster Detected",
    riskLevel: "MEDIUM",
    category: "Malware Distribution",
    timestamp: "12 hours ago",
    summary: "Cloud server 194.26.29.11 actively pushing 'bihar-bijli-update.apk' with keylogging capabilities.",
    entities: ["Alok Pandey", "Manoj Tiwari"],
    evidence: "APK-SAMPLE-88, IP-LOG-4412",
    location: "Hosting: Netherlands Proxy",
    details: "Server command and control IP linked to developer phone +91 94318 90123."
  },
  {
    id: "ALERT-009",
    title: "Mule Account Rapid Onboarding Spike",
    riskLevel: "LOW",
    category: "Mule Activity",
    timestamp: "18 hours ago",
    summary: "15 new savings accounts opened at single branch using biometric overrides.",
    entities: ["Rohit Verma", "Karan Johar Sharma"],
    evidence: "BIOMETRIC-AUDIT-12",
    location: "Gramin Bank Kankarbagh",
    details: "Under branch internal compliance review."
  },
  {
    id: "ALERT-010",
    title: "Gold Merchant POS Velocity Anomaly",
    riskLevel: "MEDIUM",
    category: "Laundering Velocity",
    timestamp: "1 day ago",
    summary: "3 consecutive POS card swipes of ₹1,80,000 within 4 minutes at jewelry store.",
    entities: ["Neeraj Dubey", "Sunil Yadav"],
    evidence: "POS-TXN-119",
    location: "Patna City Bullion Market",
    details: "Merchant verified receipt of funds; invoice issued against cash KYC."
  }
];

// Graph Nodes & Links for Interactive Network Visualizer
export const NETWORK_GRAPH_DATA = {
  nodes: [
    { id: "SUS-001", label: "Rakesh Kumar", alias: "Rocky", type: "suspect", risk: "HIGH", score: 92, group: "G-01", x: 300, y: 220 },
    { id: "SUS-002", label: "Amit Kumar", alias: "AK-47", type: "suspect", risk: "HIGH", score: 88, group: "G-01", x: 180, y: 120 },
    { id: "SUS-003", label: "Sunil Yadav", alias: "Munna Builder", type: "suspect", risk: "HIGH", score: 95, group: "G-02", x: 450, y: 220 },
    { id: "SUS-004", label: "Vicky Sharma", alias: "Techie", type: "suspect", risk: "MEDIUM", score: 68, group: "G-01", x: 160, y: 320 },
    { id: "SUS-005", label: "Rohit Verma", alias: "Chhotu SIM", type: "suspect", risk: "HIGH", score: 84, group: "G-01", x: 300, y: 380 },
    { id: "SUS-006", label: "Pooja Singh", alias: "Rani", type: "suspect", risk: "MEDIUM", score: 62, group: "G-02", x: 580, y: 140 },
    { id: "SUS-008", label: "Mohan Lal", alias: "Munim Ji", type: "suspect", risk: "MEDIUM", score: 71, group: "G-03", x: 80, y: 200 },
    { id: "SUS-010", label: "Manoj Tiwari", alias: "Pandit", type: "suspect", risk: "HIGH", score: 89, group: "G-04", x: 440, y: 400 },
    { id: "SUS-013", label: "Neeraj Dubey", alias: "ND", type: "suspect", risk: "MEDIUM", score: 65, group: "G-02", x: 590, y: 300 },
    { id: "SUS-014", label: "Gaurav Sen", alias: "Babu", type: "suspect", risk: "HIGH", score: 91, group: "G-05", x: 320, y: 80 },

    // Entity nodes
    { id: "ENT-FIR-01", label: "FIR-2026-001", type: "fir", risk: "HIGH", x: 230, y: 190 },
    { id: "ENT-FIR-02", label: "FIR-2026-002", type: "fir", risk: "MEDIUM", x: 510, y: 180 },
    { id: "ENT-PHONE-01", label: "+91 98350 12345", type: "phone", x: 250, y: 300 },
    { id: "ENT-ACC-01", label: "SBI ...410291", type: "bank", x: 370, y: 160 },
    { id: "ENT-VEH-01", label: "BR-01-AB-4492", type: "vehicle", x: 380, y: 300 }
  ],
  links: [
    { source: "SUS-001", target: "SUS-002", type: "call", label: "45 Calls (CDR-105)", value: 45 },
    { source: "SUS-001", target: "SUS-003", type: "money", label: "₹80,000 (TXN-208)", value: 80000 },
    { source: "SUS-001", target: "SUS-005", type: "call", label: "12 Burst Calls (CDR-104)", value: 12 },
    { source: "SUS-001", target: "SUS-004", type: "fir", label: "Co-Accused FIR-001", value: 1 },
    { source: "SUS-002", target: "SUS-003", type: "money", label: "₹48,000 Transfer (TXN-102)", value: 48000 },
    { source: "SUS-003", target: "SUS-006", type: "money", label: "₹2,50,000 RTGS (TXN-404)", value: 250000 },
    { source: "SUS-003", target: "SUS-013", type: "money", label: "₹1,80,000 POS Swipe", value: 180000 },
    { source: "SUS-002", target: "SUS-008", type: "call", label: "Cross-Group Link (G01↔G03)", value: 8 },
    { source: "SUS-005", target: "SUS-010", type: "call", label: "SIM Supply Channel", value: 15 },
    { source: "SUS-001", target: "SUS-014", type: "location", label: "Same ATM Kiosk Ping", value: 1 },

    // Links to entities
    { source: "SUS-001", target: "ENT-FIR-01", type: "fir", label: "Primary Suspect", value: 1 },
    { source: "SUS-002", target: "ENT-FIR-01", type: "fir", label: "Beneficiary Mule", value: 1 },
    { source: "SUS-003", target: "ENT-FIR-02", type: "fir", label: "Laundering Node", value: 1 },
    { source: "SUS-001", target: "ENT-PHONE-01", type: "device", label: "Registered SIM", value: 1 },
    { source: "SUS-001", target: "ENT-ACC-01", type: "money", label: "Account Owner", value: 1 },
    { source: "SUS-001", target: "ENT-VEH-01", type: "device", label: "Registered Vehicle", value: 1 }
  ]
};

// Investigator Chatbot AI Knowledge Base & Synthetic Response Engine
export const AI_SUGGESTIONS = [
  "Who is connected to Rakesh within 2 steps?",
  "Show transactions above ₹50,000.",
  "Which suspects are high risk?",
  "Show FIRs related to Group 1.",
  "Who has the highest network centrality?",
  "Explain the circular money transfer detected today.",
  "What evidence is available against Sunil Yadav?"
];

export const getAIResponse = (userQuery) => {
  const q = userQuery.toLowerCase().trim();

  if (q.includes("rakesh") && (q.includes("connected") || q.includes("2 step") || q.includes("network") || q.includes("associates"))) {
    return {
      text: "Rakesh Kumar (Rocky) is directly and 2-step connected to 6 key entities in the network. Primary connections include Amit Kumar (Layering Mule) and Sunil Yadav (Financial Node).",
      highlightNodes: ["SUS-001", "SUS-002", "SUS-003", "SUS-004", "SUS-005", "ENT-FIR-01"],
      evidence: ["FIR-2026-001", "CDR-104", "CDR-105", "TXN-208"],
      details: [
        "1-Step: Amit Kumar (45 Calls, ₹50,000 Transfer)",
        "1-Step: Sunil Yadav (₹80,000 Fund Routing)",
        "1-Step: Rohit Verma (12 Burst Calls in 30 mins)",
        "2-Step: Pooja Singh (via Sunil Yadav ₹2.5L RTGS)",
        "2-Step: Mohan Lal (via Amit Kumar Cross-Group Contact)"
      ]
    };
  }

  if (q.includes("transaction") || q.includes("50,000") || q.includes("50000") || q.includes("money") || q.includes("transfer")) {
    return {
      text: "Found 5 major financial transactions exceeding ₹50,000 within the active investigation scope, indicating coordinated layering.",
      highlightNodes: ["SUS-001", "SUS-002", "SUS-003", "SUS-006", "SUS-013"],
      evidence: ["TXN-101", "TXN-102", "TXN-208", "TXN-301", "TXN-401"],
      details: [
        "TXN-401: ₹18,50,000 from Sunil Yadav Axis to Patna Bullion Merchant (Gold Bar Purchase)",
        "TXN-301: ₹6,80,000 from Victim HDFC to Sunil Yadav (Crypto P2P Outflow)",
        "TXN-208: ₹4,50,000 from Victim SBI to Rakesh Kumar SBI",
        "TXN-404: ₹2,50,000 RTGS from Sunil Yadav to Pooja Singh Kotak",
        "POS-119: ₹1,80,000 POS Swipe by Neeraj Dubey"
      ]
    };
  }

  if (q.includes("high risk") || q.includes("risk score") || q.includes("dangerous") || q.includes("top suspect")) {
    return {
      text: "Identified 6 HIGH RISK suspects with risk scores ≥ 84/100 based on multi-FIR involvement, high network centrality, and active alert triggers.",
      highlightNodes: ["SUS-001", "SUS-002", "SUS-003", "SUS-005", "SUS-010", "SUS-014"],
      evidence: ["FIR-2026-001", "FIR-2026-002", "FIR-2026-006", "FIR-2026-009"],
      details: [
        "1. Sunil Yadav (Score: 95/100 | 8 FIRs | Master Laundering Node)",
        "2. Rakesh Kumar (Score: 92/100 | 6 FIRs | Degree Centrality 14)",
        "3. Gaurav Sen (Score: 91/100 | 7 FIRs | ATM Skimmer Operator)",
        "4. Manoj Tiwari (Score: 89/100 | 5 FIRs | Voice IVR Extortion)",
        "5. Amit Kumar (Score: 88/100 | 5 FIRs | Layering Mule)",
        "6. Rohit Verma (Score: 84/100 | 4 FIRs | Forged SIM Syndicate)"
      ]
    };
  }

  if (q.includes("group 1") || q.includes("group g-01") || q.includes("g-01") || q.includes("mule ops")) {
    return {
      text: "Group G-01 (Mule Ops) comprises 5 identified members primarily involved in SIM procurement, mule account onboarding, and initial victim contact.",
      highlightNodes: ["SUS-001", "SUS-002", "SUS-004", "SUS-005", "SUS-012"],
      evidence: ["FIR-2026-001", "FIR-2026-003", "FIR-2026-007", "BIOMETRIC-AUDIT-12"],
      details: [
        "Key Operatives: Rakesh Kumar (Ops Lead), Amit Kumar (Layering), Rohit Verma (SIMs)",
        "Associated FIRs: FIR-2026-001 (Patna Cyber PS), FIR-2026-003 (Kankarbagh PS)",
        "Recent Flag: Cross-group coordination with Group G-03 (Identity Brokers)"
      ]
    };
  }

  if (q.includes("centrality") || q.includes("hub") || q.includes("most connected")) {
    return {
      text: "Sunil Yadav (Score 95) and Rakesh Kumar (Score 92) exhibit the highest Betweenness Centrality (0.88 and 0.82) and Degree Centrality in the network.",
      highlightNodes: ["SUS-001", "SUS-003"],
      evidence: ["GRAPH-METRIC-2026", "TXN-GRAPH-01", "CDR-GRAPH-01"],
      details: [
        "Sunil Yadav acts as the bridge connecting cyber fraud squads to physical bullion markets & crypto offramps.",
        "Rakesh Kumar acts as the primary operational coordinator across callers, SIM providers, and cash mules."
      ]
    };
  }

  if (q.includes("circular") || q.includes("loop") || q.includes("ring")) {
    return {
      text: "A 3-node circular transaction loop was detected between Rakesh Kumar, Amit Kumar, and Sunil Yadav designed to split and re-aggregate illicit funds.",
      highlightNodes: ["SUS-001", "SUS-002", "SUS-003"],
      evidence: ["TXN-101", "TXN-102", "TXN-103", "ALERT-002"],
      details: [
        "Step 1: Rakesh Kumar transfers ₹50,000 to Amit Kumar via IMPS (TXN-101)",
        "Step 2: Amit Kumar transfers ₹48,000 to Sunil Yadav via UPI (TXN-102)",
        "Step 3: Sunil Yadav returns ₹45,000 to Rakesh Kumar subsidiary account (TXN-103)",
        "Net commission retained: ₹5,000 / 10% layering cost"
      ]
    };
  }

  if (q.includes("sunil") || q.includes("munna")) {
    return {
      text: "Evidence against Sunil Yadav (Munna Builder) spans 8 FIRs and multiple financial intelligence traces.",
      highlightNodes: ["SUS-003", "ENT-FIR-02", "SUS-006", "SUS-013"],
      evidence: ["FIR-2026-002", "FIR-2026-004", "TXN-301", "CYPTO-WALL-89", "POS-TXN-119"],
      details: [
        "Direct beneficiary of ₹6.8L from victim Dr. Smita Bannerjee (FIR-2026-002)",
        "₹18.5L gold purchase in Patna bullion market (FIR-2026-004)",
        "Crypto P2P USDT conversion node verified via Telegram escrow logs"
      ]
    };
  }

  // Default intelligent fallback
  return {
    text: `Analyzed query: "${userQuery}". The NETRA graph repository contains 15 suspects, 12 registered FIRs, 48 entity connections, and 10 active crime alerts.`,
    highlightNodes: ["SUS-001", "SUS-002", "SUS-003"],
    evidence: ["FIR-2026-001", "CDR-104", "TXN-208"],
    details: [
      "Tip: Try asking 'Who is connected to Rakesh?', 'Show transactions above ₹50,000', or 'Which suspects are high risk?'",
      "You can click 'HIGHLIGHT ON NETWORK' to visualize the related intelligence cluster."
    ]
  };
};

export const MOCK_REPORTS = [
  {
    id: "REP-001",
    title: "Comprehensive Case Dossier: Patna Cyber Digital Arrest Ring",
    type: "Case Summary Report",
    date: "2026-10-01",
    target: "FIR-2026-001 & FIR-2026-003",
    classification: "CONFIDENTIAL // LAW ENFORCEMENT ONLY",
    summary: "Complete breakdown of the 6-tier syndicate involved in spoofed CBI digital arrest extortions targeting senior citizens in Patna metropolitan region.",
    pages: 14,
    leadInvestigator: "Insp. A. Kumar"
  },
  {
    id: "REP-002",
    title: "Suspect Intelligence Profile: Sunil Yadav (Munna Builder)",
    type: "Suspect Intelligence Report",
    date: "2026-09-30",
    target: "SUS-003",
    classification: "RESTRICTED",
    summary: "Detailed asset mapping, 8 FIR cross-references, bank transaction graphs, and Telegram P2P crypto wallet telemetry.",
    pages: 8,
    leadInvestigator: "Insp. A. Kumar"
  },
  {
    id: "REP-003",
    title: "Station-Wise FIR Synthesis: Kankarbagh & Patna Cyber PS",
    type: "FIR Reports",
    date: "2026-09-29",
    target: "12 Consolidated FIRs",
    classification: "OFFICIAL USE",
    summary: "Monthly crime pattern analysis showing 42% rise in APK-based electricity bill spoofing during Q3 2026.",
    pages: 22,
    leadInvestigator: "ACP N. Sharma"
  },
  {
    id: "REP-004",
    title: "Criminal Network Centrality & Layering Topology",
    type: "Criminal Network Reports",
    date: "2026-09-28",
    target: "Group G-01 & G-02",
    classification: "SECRET",
    summary: "Mathematical graph analysis highlighting 3 single points of failure in the mule distribution network.",
    pages: 11,
    leadInvestigator: "SI Vikramaditya"
  },
  {
    id: "REP-005",
    title: "High Risk Threat Assessment Matrix: Q3 2026",
    type: "Risk Analysis Reports",
    date: "2026-09-27",
    target: "All 15 Suspects",
    classification: "RESTRICTED",
    summary: "Multi-parameter risk scoring evaluating CDR burst frequency, transaction velocity, and cross-group expansion.",
    pages: 18,
    leadInvestigator: "State Cyber Cell"
  }
];
