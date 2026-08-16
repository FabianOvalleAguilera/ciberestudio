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
  },
  {
    id: "fc-11",
    examId: "csa",
    category: "Malware Analysis",
    front: "Static Analysis vs Dynamic Analysis (Embedded Scripts)",
    back: "• Static Analysis: Inspecting and de-obfuscating code (base64, strings, functions, regex) WITHOUT executing it (Safe for live investigations).\n• Dynamic Analysis: Executing malware in an isolated sandbox to observe real-time behavior (risk of evasion/detonation).",
    module: 2
  },
  {
    id: "fc-12",
    examId: "csa",
    category: "Windows Logs",
    front: "Windows Event ID 4616 & 4618 (Time Tampering)",
    back: "• Event ID 4616: 'System time was changed' (critical indicator of timestomping or defense evasion).\n• Event ID 4618: Monitored security-relevant event patterns and audit condition monitoring.",
    module: 3
  },
  {
    id: "fc-13",
    examId: "csa",
    category: "Log Architecture",
    front: "Syslog Relay (Role in Distributed Logging)",
    back: "• An intermediate proxy/forwarder deployed in remote offices.\n• Receives local logs, buffers them during network outages, and forwards them efficiently over WAN to the central Syslog Server/Collector.",
    module: 3
  },
  {
    id: "fc-14",
    examId: "csa",
    category: "Log Parsing",
    front: "Grok Filters in SIEM & Log Pipelines",
    back: "• Pattern-matching syntax based on regular expressions.\n• Used to parse and convert raw, unstructured or semi-structured log strings into standardized, queryable fields (IP, user, timestamp, method).",
    module: 3
  },
  {
    id: "fc-15",
    examId: "csa",
    category: "Cloud Security",
    front: "CASB vs CSPM vs CWPP (Cloud SOC Architecture)",
    back: "• CASB: Cloud Access Security Broker - Enforces data loss prevention (DLP), user access policies, and SaaS governance.\n• CSPM: Cloud Security Posture Management - Audits misconfigurations and compliance in cloud infra.\n• CWPP: Cloud Workload Protection - Secures running VMs, containers, and serverless compute.",
    module: 1
  },
  {
    id: "fc-16",
    examId: "csa",
    category: "Incident Response",
    front: "Containment vs Eradication vs Recovery vs Post-Incident",
    back: "• Containment: Stopping active spread (VLAN isolation, account disable, session revoke).\n• Eradication: Eliminating root causes (emergency patching CVEs, filtering rules, removing malware/persistence).\n• Recovery: Restoring systems to clean production operations.\n• Post-Incident: Post-mortem, financial impact calculation, lessons learned.",
    module: 6
  },
  {
    id: "fc-17",
    examId: "csa",
    category: "SOC Management",
    front: "SOC CMM (Capability Maturity Model) Level 1 to 3",
    back: "• Level 1 (Initial/Ad-hoc): Disorganized, reactive, manual.\n• Level 2 (Managed): Basic metrics and unit-level procedures.\n• Level 3 (Defined): Standardized, documented, repeatable incident response processes and playbooks across the enterprise.",
    module: 1
  },
  {
    id: "fc-18",
    examId: "csa",
    category: "Threat Intelligence",
    front: "CTI Lifecycle: Requirement Analysis Phase",
    back: "• The initial Direction and Planning stage.\n• Defines specific intelligence questions (e.g. identifying DGA C2 patterns), critical telemetry data sources, and operational detection priorities.",
    module: 5
  },
  {
    id: "fc-19",
    examId: "csa",
    category: "Database Logging",
    front: "PostgreSQL: `log_collector` Parameter",
    back: "• Setting `log_collector = on` in `postgresql.conf` enables the background process that captures stderr/csv log output and writes it to log files for centralized SIEM ingestion and audit trail compliance.",
    module: 3
  },
  {
    id: "fc-20",
    examId: "csa",
    category: "SOC Technology",
    front: "XDR + XSOAR Architecture Integration",
    back: "• XDR (Extended Detection & Response): Provides high-fidelity cross-domain detection across endpoints, network, email, and cloud.\n• XSOAR (Security Orchestration & Automation): Executes automated playbooks to remediate and contain incidents in real time.",
    module: 4
  },
  {
    id: "fc-21",
    examId: "csa",
    category: "Windows Logs",
    front: "Event ID 4688 (Process Creation with Command Line)",
    back: "• Logs execution of new processes (e.g. `powershell.exe`).\n• With Command Line Auditing enabled, exposes arguments like `-ExecutionPolicy Bypass`, `-NoProfile`, and parent processes (`winrm.exe`).",
    module: 3
  },
  {
    id: "fc-22",
    examId: "csa",
    category: "SIEM & AI",
    front: "Dynamic Rule Optimization in AI SIEM",
    back: "• Uses machine learning to dynamically adapt alert thresholds based on historical baseline behavior, effectively suppressing redundant alerts and eliminating false-positive alert fatigue.",
    module: 4
  }
];
