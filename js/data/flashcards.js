// Rapid Active Recall Flashcards for CSA and SOC (English)
export const defaultFlashcards = [
  {
    id: "fc-1",
    examId: "csa",
    category: "SOC Metrics",
    front: "What do MTTD and MTTR stand for and measure?",
    back: "• MTTD (Mean Time to Detect): Average time from an intrusion occurring until security systems detect it.\n• MTTR (Mean Time to Respond / Remediate): Average time from detection to full containment and remediation.",
    module: 1
  },
  {
    id: "fc-2",
    examId: "csa",
    category: "Windows Logs",
    front: "Windows Event ID 4625 vs 4624",
    back: "• 4625: An account failed to log on (Authentication failure).\n• 4624: An account was successfully logged on (Successful authentication).",
    module: 3
  },
  {
    id: "fc-3",
    examId: "csa",
    category: "Windows Logs",
    front: "Windows Event ID 1102 and 7045",
    back: "• 1102: The audit log was cleared (Defense evasion - Critical alert).\n• 7045: A service was installed in the system (System log - Potential persistence).",
    module: 3
  },
  {
    id: "fc-4",
    examId: "csa",
    category: "Windows Logs",
    front: "Logon Types: Type 2 vs Type 3 vs Type 10",
    back: "• Type 2: Interactive (Direct local console logon via physical keyboard).\n• Type 3: Network (Remote network resource access via SMB/IIS).\n• Type 10: RemoteInteractive (Remote Desktop Protocol / RDP connection).",
    module: 3
  },
  {
    id: "fc-5",
    examId: "csa",
    category: "Threat Intelligence",
    front: "Difference between STIX and TAXII",
    back: "• STIX: Structured JSON/XML language defining WHAT the threat is (IoCs, actors, campaigns).\n• TAXII: Application protocol over HTTPS defining HOW STIX intelligence is transported.",
    module: 5
  },
  {
    id: "fc-6",
    examId: "csa",
    category: "Threat Intelligence",
    front: "Traffic Light Protocol (TLP 2.0)",
    back: "• TLP:RED: Strictly for named individual recipients only.\n• TLP:AMBER / AMBER+STRICT: Restricted to the organization on need-to-know basis.\n• TLP:GREEN: Shareable within trusted community peers.\n• TLP:CLEAR: Publicly shareable without restrictions.",
    module: 5
  },
  {
    id: "fc-7",
    examId: "csa",
    category: "Threat Methodologies",
    front: "Pyramid of Pain (Top vs. Bottom)",
    back: "• Bottom (Trivial to change for attacker): Hashes (MD5, SHA256) and IP addresses.\n• Top (Tough / Painful for attacker to change): TTPs (Tactics, Techniques, and Procedures).",
    module: 2
  },
  {
    id: "fc-8",
    examId: "csa",
    category: "Incident Response",
    front: "The 4 Phases of NIST SP 800-61 Rev 2",
    back: "1. Preparation\n2. Detection and Analysis\n3. Containment, Eradication, and Recovery\n4. Post-Incident Activity (Lessons Learned)",
    module: 6
  },
  {
    id: "fc-9",
    examId: "csa",
    category: "Detection & SIEM",
    front: "False Positive vs False Negative",
    back: "• False Positive (FP): SIEM generates an alert for benign, legitimate activity (Noise).\n• False Negative (FN): Real attack occurs but SIEM generates NO alert (Most dangerous).",
    module: 4
  },
  {
    id: "fc-10",
    examId: "csa",
    category: "Linux & Syslog",
    front: "Syslog: Default Port and Severity 0",
    back: "• Default Port: UDP 514 (or TCP 514 / TLS 6514).\n• Severity 0: Emergency / Panic (System is completely unusable).",
    module: 3
  }
];
