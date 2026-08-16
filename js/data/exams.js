// Base catalog of certifications and exams (English)
export const defaultExams = [
  {
    id: "csa",
    name: "EC-Council CSA",
    code: "312-39",
    title: "Certified SOC Analyst",
    description: "SOC operations, log architecture, SIEM correlation, cyber threat intelligence, and incident response.",
    passingScore: 70,
    totalQuestionsRealExam: 100,
    durationMinutes: 180,
    modules: [
      { id: 1, name: "Module 1: Security Operations & Management", shortName: "SOC Ops" },
      { id: 2, name: "Module 2: Cyber Threats, IoCs & Attack Methodologies", shortName: "Threats & IoCs" },
      { id: 3, name: "Module 3: Incidents, Events & Logging", shortName: "Logs & Events" },
      { id: 4, name: "Module 4: Incident Detection with SIEM", shortName: "SIEM & Detection" },
      { id: 5, name: "Module 5: Enhanced Detection with Threat Intelligence", shortName: "Threat Intel (CTI)" },
      { id: 6, name: "Module 6: Incident Response (IR)", shortName: "Incident Response" }
    ]
  },
  {
    id: "cysa",
    name: "CompTIA CySA+",
    code: "CS0-003",
    title: "Cybersecurity Analyst",
    description: "Security operations, vulnerability management, incident response, and security reporting.",
    passingScore: 75,
    totalQuestionsRealExam: 85,
    durationMinutes: 165,
    modules: [
      { id: 1, name: "Domain 1: Security Operations", shortName: "SecOps" },
      { id: 2, name: "Domain 2: Vulnerability Management", shortName: "Vulnerability Mgmt" },
      { id: 3, name: "Domain 3: Incident Response & Management", shortName: "IR & Mgmt" },
      { id: 4, name: "Domain 4: Reporting & Communication", shortName: "Reporting" }
    ]
  },
  {
    id: "btl1",
    name: "Security Blue Team BTL1",
    code: "BTL-1",
    title: "Blue Team Level 1",
    description: "Practical defensive security: SIEM investigation, memory/disk forensics, network analysis, and phishing triage.",
    passingScore: 70,
    totalQuestionsRealExam: 20,
    durationMinutes: 1440,
    modules: [
      { id: 1, name: "Phishing Analysis", shortName: "Phishing" },
      { id: 2, name: "Threat Intelligence (CTI)", shortName: "Threat Intel" },
      { id: 3, name: "Digital Forensics (DFIR)", shortName: "Forensics" },
      { id: 4, name: "SIEM Operations", shortName: "SIEM" },
      { id: 5, name: "Incident Response", shortName: "IR" }
    ]
  }
];
