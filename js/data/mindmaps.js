// Interactive Mindmaps and SOC Workflows (English)
export const defaultMindmaps = [
  {
    id: "map-soc-escalation",
    examId: "csa",
    title: "SOC Escalation Flow & Analyst Roles",
    description: "End-to-end alert journey from ingestion to deep response and proactive hunting.",
    steps: [
      {
        number: "1",
        title: "Alert Generation & Ingestion",
        role: "SIEM / EDR / NIDS / Sensors",
        badge: "Automated",
        summary: "Collectors normalize logs; correlation rules trigger high-fidelity alerts.",
        details: [
          "Ingested sources: Windows Security, Syslog, Firewalls, Cloud (AWS CloudTrail, Entra ID).",
          "Real-time correlation: Matched against threat intelligence feeds (known IoCs).",
          "Initial priority assigned: Low, Medium, High, Critical."
        ]
      },
      {
        number: "2",
        title: "Tier 1: Initial Triage & Validation",
        role: "SOC Analyst Tier 1 (Triage)",
        badge: "Tier 1",
        summary: "Analyst investigates the alert within 15 minutes to rule out false positives.",
        details: [
          "Quick verification: Is this an authorized admin performing scheduled tasks?",
          "Context enrichment: Query IPs/hashes on VirusTotal, AbuseIPDB, and WHOIS.",
          "Decision: If False Positive -> Document and close. If True Positive -> Open ticket and escalate to Tier 2."
        ]
      },
      {
        number: "3",
        title: "Tier 2: Deep Investigation & Containment",
        role: "SOC Analyst Tier 2 (Incident Responder)",
        badge: "Tier 2",
        summary: "Determines blast radius, executes containment strategies, and eliminates threats.",
        details: [
          "Endpoint forensic triage: Inspect running volatile processes, active network sockets, and registry run keys.",
          "Containment actions: Isolate host via EDR, block malicious domains on firewalls, and reset compromised credentials.",
          "Eradication & Recovery: Remove malware artifacts and verify host integrity."
        ]
      },
      {
        number: "4",
        title: "Tier 3: Threat Hunting & Advanced Forensics",
        role: "SOC Analyst Tier 3 (Threat Hunter / Forensic Expert)",
        badge: "Tier 3",
        summary: "Proactive hypothesis-driven hunting for evasive threats and malware reverse engineering.",
        details: [
          "Hypothesis-based hunting: Searching for stealthy adversary techniques using MITRE ATT&CK.",
          "Malware analysis: Static and dynamic sandboxing of unfamiliar binaries.",
          "Feedback loop: Author new Sigma/YARA rules to prevent future blindspots."
        ]
      },
      {
        number: "5",
        title: "Incident Management & Post-Mortem",
        role: "SOC Lead / Incident Commander",
        badge: "Management",
        summary: "Formal documentation, executive reporting, and lessons learned review.",
        details: [
          "Incident timeline and root-cause analysis documentation.",
          "Lessons learned meeting with key stakeholders.",
          "Standard Operating Procedures (SOPs) and risk matrix updates."
        ]
      }
    ]
  },
  {
    id: "map-killchain-mitre",
    examId: "csa",
    title: "Cyber Kill Chain vs. MITRE ATT&CK",
    description: "Mapping the 7 attack phases with corresponding defense and detection techniques.",
    steps: [
      {
        number: "1",
        title: "1. Reconnaissance",
        role: "External Phase",
        badge: "Kill Chain #1",
        summary: "Adversary gathers intelligence on target (OSINT, active port scans, spear-phishing prep).",
        details: [
          "MITRE Tactic: Reconnaissance (TA0043).",
          "Key Techniques: Active Scanning (T1595), Search Open Technical Databases (T1596).",
          "SOC Detection: Inbound port scan alerts on perimeter firewalls and anomalous external DNS queries."
        ]
      },
      {
        number: "2",
        title: "2. Weaponization & 3. Delivery",
        role: "Vector Delivery",
        badge: "Kill Chain #2-3",
        summary: "Pairing exploit with payload (e.g., malicious Office macro) and transmitting to victim.",
        details: [
          "MITRE Tactics: Initial Access (TA0001) and Resource Development (TA0042).",
          "Key Techniques: Spearphishing Attachment (T1566.001), Drive-by Compromise (T1189).",
          "SOC Detection: Email gateway telemetry (SPF/DKIM/DMARC failures), sandboxing alerts."
        ]
      },
      {
        number: "3",
        title: "4. Exploitation & 5. Installation",
        role: "Endpoint Execution",
        badge: "Kill Chain #4-5",
        summary: "Malicious code execution on the endpoint and establishing local persistence.",
        details: [
          "MITRE Tactics: Execution (TA0002), Persistence (TA0003), Privilege Escalation (TA0004).",
          "Key Techniques: PowerShell (T1059.001), Registry Run Keys (T1547.001), Scheduled Task (T1053).",
          "SOC Detection: Sysmon Event ID 1 (Process Create), Event ID 7045 (Service Installed), Event ID 4688."
        ]
      },
      {
        number: "4",
        title: "6. Command and Control (C2)",
        role: "Communication Channel",
        badge: "Kill Chain #6",
        summary: "Malware opens encrypted/stealthy outbound channel to receive adversary commands.",
        details: [
          "MITRE Tactic: Command and Control (TA0011).",
          "Key Techniques: Application Layer Protocol (T1071 - HTTP/HTTPS/DNS Tunneling), Dynamic Resolution (T1568).",
          "SOC Detection: Regular interval beaconing traffic on proxy/firewall, unusually long DNS TXT queries (DGA)."
        ]
      },
      {
        number: "5",
        title: "7. Actions on Objectives",
        role: "Final Impact",
        badge: "Kill Chain #7",
        summary: "Adversary fulfills their mission: sensitive data exfiltration or ransomware encryption.",
        details: [
          "MITRE Tactics: Collection (TA0009), Exfiltration (TA0010), Impact (TA0040).",
          "Key Techniques: Data Encrypted for Impact (T1486), Exfiltration Over C2 Channel (T1041).",
          "SOC Detection: Massive spike in outbound bandwidth on NetFlow, burst of file rename events with ransomware extensions."
        ]
      }
    ]
  },
  {
    id: "map-cti-lifecycle",
    examId: "csa",
    title: "Threat Intelligence Lifecycle (CTI)",
    description: "The 6 continuous stages of generating and operationalizing threat intelligence.",
    steps: [
      {
        number: "1",
        title: "1. Planning & Direction",
        role: "Requirements Definition",
        badge: "PIRs",
        summary: "Establish Priority Intelligence Requirements (PIRs) based on business risks.",
        details: ["Who are our most likely adversaries?", "Which critical crown jewel assets require protection?"]
      },
      {
        number: "2",
        title: "2. Collection",
        role: "Data Ingestion",
        badge: "Ingestion",
        summary: "Gather raw data from diverse sources: OSINT, commercial feeds, internal telemetry, and dark web.",
        details: ["STIX/TAXII feeds, honeypots, underground forums, and historical incident artifacts."]
      },
      {
        number: "3",
        title: "3. Processing",
        role: "Structuring",
        badge: "Parsing",
        summary: "Transform unstructured raw data into standardized formats (deduplication, IoC extraction).",
        details: ["Normalization to STIX 2.1 schemas, IP reputation scoring calculations."]
      },
      {
        number: "4",
        title: "4. Analysis & Production",
        role: "Value Creation",
        badge: "Analysis",
        summary: "Synthesize processed data into actionable, contextualized intelligence.",
        details: ["Correlation with Diamond Model and mapping against MITRE ATT&CK techniques."]
      },
      {
        number: "5",
        title: "5. Dissemination",
        role: "Distribution",
        badge: "Delivery",
        summary: "Deliver intelligence to the appropriate stakeholder in the right format (Strategic, Tactical, Operational, Technical).",
        details: ["Update firewall/SIEM blocklists, deliver executive threat briefings to the CISO."]
      },
      {
        number: "6",
        title: "6. Feedback",
        role: "Continuous Improvement",
        badge: "Evaluation",
        summary: "Assess if the delivered intelligence answered the original requirements effectively.",
        details: ["Refine PIRs and optimize collection feeds for future iterations."]
      }
    ]
  }
];
