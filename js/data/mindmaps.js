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
  },
  {
    id: "map-ransomware-ir",
    examId: "csa",
    title: "Live Ransomware Incident Response Playbook",
    description: "Step-by-step containment, forensic preservation, eradication, and lessons learned workflow.",
    steps: [
      {
        number: "1",
        title: "Detection & Escalation",
        role: "Tier 1 SOC Analyst",
        badge: "Triage",
        summary: "Alert triggers from unusual network spikes, locked file extensions (.locked, .crypt), or high CPU utilization.",
        details: [
          "Create incident ticket (#INC-xxx) and set high/critical severity.",
          "Escalate immediately to Tier 2 and activate the Incident Response Team (IRT)."
        ]
      },
      {
        number: "2",
        title: "Rapid Network Containment",
        role: "Network / Tier 2 IRT",
        badge: "Containment",
        summary: "Cut off lateral movement paths before encryption spreads across the organization.",
        details: [
          "Isolate affected VLANs or endpoints via EDR network isolation.",
          "Block outbound C2 IP addresses and suspicious domains on perimeter firewalls.",
          "Revoke active remote access sessions and disable compromised accounts."
        ]
      },
      {
        number: "3",
        title: "Volatile Evidence Acquisition",
        role: "Forensic Analyst",
        badge: "DFIR",
        summary: "Capture volatile evidence in memory before rebooting or powering off hosts.",
        details: [
          "Acquire live RAM dumps (using WinPmem / FTK Imager / Volatility).",
          "Collect active network connection sockets, process trees (Event ID 4688), and PCAPs.",
          "Preserve Security Event Logs (4624, 4625, 4616, 7045)."
        ]
      },
      {
        number: "4",
        title: "Eradication & Remediation",
        role: "Security Engineers / SysAdmins",
        badge: "Eradication",
        summary: "Address the root cause vulnerability that allowed initial entry.",
        details: [
          "Deploy emergency patches (e.g. KB hotfixes for exploited server CVEs).",
          "Update email filtering rules and WAF signatures to block malicious payloads.",
          "Remove malicious scheduled tasks, registry run keys, and unauthorized services."
        ]
      },
      {
        number: "5",
        title: "Recovery & Return-to-Service",
        role: "Operations & SOC",
        badge: "Recovery",
        summary: "Restore business operations safely from verified, immutable backups.",
        details: [
          "Restore data from clean, offline backup sets.",
          "Validate server integrity and verify monitoring telemetry is active.",
          "Re-enable network access under enhanced logging surveillance."
        ]
      },
      {
        number: "6",
        title: "Post-Incident Review (Lessons Learned)",
        role: "CISO / SOC Lead / Stakeholders",
        badge: "Post-Mortem",
        summary: "Evaluate financial and operational impact to prevent future recurrence.",
        details: [
          "Calculate downtime and financial loss (e.g. business impact report).",
          "Identify defensive gaps and update incident playbooks.",
          "Author new detection rules (Sigma/YARA) for threat behavior patterns."
        ]
      }
    ]
  },
  {
    id: "map-dga-hunting",
    examId: "csa",
    title: "Proactive Threat Hunting: DGA & C2 Beaconing",
    description: "Hunting workflow for stealthy Domain Generation Algorithms and command-and-control communication.",
    steps: [
      {
        number: "1",
        title: "Hypothesis & Anomaly Discovery",
        role: "Threat Hunter",
        badge: "Hypothesis",
        summary: "Identify suspicious high-entropy DNS queries or periodic beaconing bursts to external IPs.",
        details: [
          "Observation: Multiple failed NXDOMAIN responses with pseudo-random domain strings.",
          "Hypothesis: Active malware using Domain Generation Algorithms (DGA) for C2 fallback."
        ]
      },
      {
        number: "2",
        title: "Requirement Analysis (CTI Planning)",
        role: "Threat Intelligence Analyst",
        badge: "CTI Direction",
        summary: "Define intelligence requirements and required data sources.",
        details: [
          "Identify necessary telemetry: Passive DNS logs, proxy logs, EDR network sockets.",
          "Specify query thresholds, time windows, and reputation scoring metrics."
        ]
      },
      {
        number: "3",
        title: "Data Correlation & Process Attribution",
        role: "Tier 3 Analyst",
        badge: "Investigation",
        summary: "Link network connections to parent processes on the originating endpoint.",
        details: [
          "Query Event ID 4688 / Sysmon Event ID 1 to locate the initiating process.",
          "Inspect command line flags (e.g. `powershell.exe -ExecutionPolicy Bypass -NoProfile`).",
          "Extract embedded scripts or payloads via static code analysis (base64 decoding)."
        ]
      },
      {
        number: "4",
        title: "Containment & Rule Authoring",
        role: "SOC Engineering",
        badge: "Detection Ops",
        summary: "Mitigate active risk and convert findings into permanent detection rules.",
        details: [
          "Blacklist malicious domain patterns at the DNS resolver level.",
          "Author custom SIEM correlation rules and Sigma rules to detect similar executions automatically."
        ]
      }
    ]
  },
  {
    id: "map-web-app-ir",
    examId: "csa",
    title: "Web Application Intrusion & Tampering Playbook",
    description: "End-to-end incident handling workflow for web attacks (SQLi, XSS, Path Traversal, Parameter Tampering).",
    steps: [
      {
        number: "1",
        title: "Alert Trigger & Regex Match",
        role: "NIDS / WAF / SIEM",
        badge: "Detection",
        summary: "NIDS flags suspicious hex-encoded URI requests (%3Cimg, ' OR 1=1, %2E%2E%2F).",
        details: [
          "Identify targeted server and client source IP.",
          "Extract decoded HTTP query strings and POST payloads."
        ]
      },
      {
        number: "2",
        title: "Web Server Log Deep Dive",
        role: "Tier 1 / Tier 2 Analyst",
        badge: "Triage",
        summary: "Correlate NIDS alerts with IIS / Apache access logs.",
        details: [
          "Inspect IIS logs at `%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVCN`.",
          "Check HTTP status codes: 200 OK (potential exploit success) vs 403/404/500.",
          "Verify User-Agent header to identify automated bot scanners."
        ]
      },
      {
        number: "3",
        title: "Forensic Evidence & Chain of Custody",
        role: "Digital Forensic Analyst",
        badge: "DFIR",
        summary: "Preserve web application and backend database evidence.",
        details: [
          "Generate cryptographic hashes (SHA-256) of web access logs.",
          "Create and sign Chain of Custody forms immediately.",
          "Analyze backend database query logs for unauthorized data exfiltration."
        ]
      },
      {
        number: "4",
        title: "Eradication & Hardening",
        role: "AppSec / Systems Engineer",
        badge: "Remediation",
        summary: "Close the vulnerability and block active attacker infrastructure.",
        details: [
          "Deploy UrlScan / WAF filtering rules to block payload signatures.",
          "Enforce server-side parameter and price validation.",
          "Sanitize inputs using parameterized queries and output encoding."
        ]
      }
    ]
  },
  {
    id: "map-identity-compromise-soar",
    examId: "csa",
    title: "Compromised Account & Impossible Travel Playbook",
    description: "Automated SOAR and analyst workflow for credential theft, impossible travel, and privilege escalation.",
    steps: [
      {
        number: "1",
        title: "Alert Trigger & Impossible Travel Flag",
        role: "Microsoft Sentinel / SIEM",
        badge: "Detection",
        summary: "SIEM correlates concurrent logins from two distant geographic locations or non-business hours.",
        details: [
          "Evaluate user risk score and anomalous IP reputation.",
          "Flag Event ID 4624 (Logon Type 3 / Type 10) and Entra ID Sign-in logs."
        ]
      },
      {
        number: "2",
        title: "Automated SOAR Deprovisioning",
        role: "SOAR Playbook (Logic Apps)",
        badge: "Automated",
        summary: "Instant machine-speed containment to stop dwell time and data exfiltration.",
        details: [
          "Execute 'Deprovisioning Users' Playbook.",
          "Revoke active OAuth refresh tokens and terminate web sessions.",
          "Disable Active Directory / Cloud account temporarily and force password reset."
        ]
      },
      {
        number: "3",
        title: "Blast Radius & Lateral Movement Triage",
        role: "Tier 2 SOC Analyst",
        badge: "Investigation",
        summary: "Investigate whether the compromised account accessed restricted files or hopped to other servers.",
        details: [
          "Check Event ID 4624 Type 3 logons across multiple servers (Pass-the-Hash check).",
          "Inspect NetBIOS helper and SMB file share access (Event ID 5145).",
          "Review cloud audit logs (AWS CloudTrail / Microsoft Graph) for unauthorized API calls."
        ]
      },
      {
        number: "4",
        title: "Remediation & Account Hardening",
        role: "Identity Team & SOC Lead",
        badge: "Recovery",
        summary: "Restore legitimate user access under strengthened authentication controls.",
        details: [
          "Enforce FIDO2 / Phishing-Resistant Multi-Factor Authentication (MFA).",
          "Apply stricter Conditional Access policies (device compliance + trusted IP).",
          "Document incident root cause and update threat hunting baselines."
        ]
      }
    ]
  }
];
