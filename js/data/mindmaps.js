// Interactive Mindmaps and SOC Workflows for EC-Council CSA v2 (2026 Exam - 200 Qs Bank)
// Each workflow directly models real scenarios, test objectives, and IR playbooks from the 200 Qs PDF bank.

export const defaultMindmaps = [
  {
    id: "map-incident-escalation",
    examId: "csa-v2",
    title: "SOC Escalation, Triage & IRT Validation Flow",
    description: "End-to-end incident lifecycle: from sensor alert ingestion to IRT escalation, validation, and post-mortem review.",
    steps: [
      {
        number: "1",
        title: "Alert Generation & Ingestion",
        role: "SIEM / EDR / Snort IDS / CASB",
        badge: "Ingestion",
        summary: "Sensors normalize incoming telemetry and trigger automated alerts based on signatures, anomalies, or threat intelligence.",
        details: [
          "Ingested sources: Windows Security logs (4624/4625/4688), Syslog Relay streams, perimeter firewalls, and cloud audit trails.",
          "Signature & Anomaly matching: Snort rules (e.g. ' OR T=T) and anomaly deviations (e.g. 500 MB outbound burst vs 5 MB baseline).",
          "Initial priority assigned: Low, Medium, High, or Critical based on Risk Matrix (Likelihood + Impact)."
        ]
      },
      {
        number: "2",
        title: "Incident Triage (Tier 1 SOC Analyst)",
        role: "Jennifer / Tier 1 SOC Analyst",
        badge: "Triage",
        summary: "Rapid initial assessment within 15 minutes to eliminate false positives and validate alert credibility.",
        details: [
          "Verification: Check EDR logs, network traffic patterns in SIEM, and email gateway logs for suspicious attachments.",
          "False Positive Filter: Validate if activity is legitimate admin maintenance or benign software behavior.",
          "Decision: If True Positive -> Open formal incident ticket (#INC-xxx) and escalate immediately to Tier 2 / IRT."
        ]
      },
      {
        number: "3",
        title: "IRT Handover: Incident Analysis and Validation",
        role: "Incident Response Team (IRT)",
        badge: "IRT Step 1",
        summary: "The very FIRST step performed by the IRT upon receiving an escalated ticket from the SOC.",
        details: [
          "Forensic indicator verification: Validate host artifacts (scheduled tasks, registry autoruns, hashes).",
          "Scope confirmation: Identify all affected endpoints, user accounts, and compromised network segments.",
          "Severity re-evaluation: Determine blast radius and activate emergency response protocols."
        ]
      },
      {
        number: "4",
        title: "Containment & Active Threat Neutralization",
        role: "Tier 2 Responder / IRT",
        badge: "Containment",
        summary: "Halt ongoing adversary propagation and sever attacker command-and-control channels.",
        details: [
          "Endpoint & Network Isolation: Isolate affected hosts via EDR and sever lateral movement paths.",
          "Identity Containment: Execute Deprovisioning Users SOAR Playbooks, revoke active tokens, and enforce MFA.",
          "C2 Severing: Neutralize botnet handlers and sinkhole malicious C2 IP/domain destinations."
        ]
      },
      {
        number: "5",
        title: "Post-Incident Review & Lessons Learned",
        role: "Sarah / SOC Lead & CISO",
        badge: "Post-Mortem",
        summary: "Formal review meeting one week post-incident to calculate business impact and harden defenses.",
        details: [
          "Financial & Operational Impact: Calculate downtime and data loss costs (e.g. Sarah's $157k review).",
          "Gap Analysis: Identify detection weaknesses and implement critical process improvements.",
          "Rule Tuning: Author new Sigma/YARA rules and update SOAR playbooks to prevent future recurrence."
        ]
      }
    ]
  },
  {
    id: "map-ransomware-dfir",
    examId: "csa-v2",
    title: "Ransomware Outbreak & Live Forensics Playbook",
    description: "Standard operating procedure for containing ransomware, capturing volatile memory, root-cause eradication, and clean recovery.",
    steps: [
      {
        number: "1",
        title: "Detection & Immediate Alerting",
        role: "Tier 1 SOC Analyst",
        badge: "Detection",
        summary: "SIEM triggers alert on mass file rename events, abnormal CPU spikes, or unusual outbound connections.",
        details: [
          "Correlate EDR process creation events (Event ID 4688) with unauthorized PowerShell scripts.",
          "Flag suspicious command line flags (e.g. `-ExecutionPolicy Bypass -NoProfile`).",
          "Open emergency incident ticket and activate the Incident Response Team (IRT)."
        ]
      },
      {
        number: "2",
        title: "VLAN & Host Network Isolation",
        role: "Network Engineer / Tier 2 IRT",
        badge: "Containment",
        summary: "Prevent lateral movement across the enterprise without powering down machines.",
        details: [
          "Execute network isolation at the EDR/switch level to keep infected machines running.",
          "Block outbound C2 IP addresses and suspicious domains at perimeter firewalls.",
          "IMPORTANT: Do NOT reboot or power off machines to prevent loss of volatile memory."
        ]
      },
      {
        number: "3",
        title: "Volatile RAM & Evidence Acquisition",
        role: "Forensic Analyst (DFIR)",
        badge: "Evidence",
        summary: "Capture volatile live artifacts and preserve strict legal Chain of Custody.",
        details: [
          "Acquire live RAM dumps using forensic tools (WinPmem, FTK Imager, Volatility) to extract encryption keys and injected DLLs.",
          "Collect Windows Security Event Logs (4624, 4625, 4616, 7045) and network PCAPs.",
          "Document Chain of Custody forms with cryptographic hashes (SHA-256) for all collected evidence."
        ]
      },
      {
        number: "4",
        title: "Eradication: Fixing Devices & Root Cause",
        role: "Security Engineers & SysAdmins",
        badge: "Eradication",
        summary: "Eliminate the underlying vulnerabilities that allowed initial adversary entry.",
        details: [
          "Fixing Devices: Apply emergency security patches (KB hotfixes) for exploited software vulnerabilities.",
          "Remove Persistence: Delete malicious scheduled tasks, rogue services (Event ID 7045), and registry Run keys.",
          "Update email filtering rules, WAF signatures, and DNS blocklists."
        ]
      },
      {
        number: "5",
        title: "Recovery from Clean Backups",
        role: "IT Operations & SOC",
        badge: "Recovery",
        summary: "Safely restore operational capacity from validated immutable backup sets.",
        details: [
          "Restore systems from clean, verified offline/immutable backups.",
          "Re-image severely compromised endpoints with verified golden OS images.",
          "Re-introduce hosts to the network under heightened SIEM/EDR logging surveillance."
        ]
      }
    ]
  },
  {
    id: "map-soar-identity",
    examId: "csa-v2",
    title: "Identity Compromise & Impossible Travel SOAR Playbook",
    description: "Automated SOAR orchestration and analyst triage workflow for credential stuffing, impossible travel, and lateral movement.",
    steps: [
      {
        number: "1",
        title: "Alert Trigger: Anomalous Activity & Impossible Travel",
        role: "Microsoft Sentinel / SIEM",
        badge: "Detection",
        summary: "SIEM correlates concurrent logins from distant countries or unusual off-hours user access.",
        details: [
          "Evaluate user risk score, IP reputation, and anomalous authentication timestamps.",
          "Flag Event ID 4624 (Logon Type 3 / Type 10) and Entra ID Sign-in logs."
        ]
      },
      {
        number: "2",
        title: "Automated SOAR Deprovisioning",
        role: "Microsoft Sentinel Playbooks (Logic Apps)",
        badge: "Automated SOAR",
        summary: "Machine-speed containment to instantly eliminate attacker dwell time.",
        details: [
          "Execute 'Deprovisioning Users SOAR Playbook' automatically via Logic Apps.",
          "Revoke active OAuth refresh tokens and terminate all active web/VPN sessions.",
          "Disable compromised Active Directory account and force administrative password reset."
        ]
      },
      {
        number: "3",
        title: "Blast Radius & Lateral Movement Triage",
        role: "Tier 2 SOC Analyst",
        badge: "Investigation",
        summary: "Investigate whether the compromised credentials were used to move laterally or access sensitive files.",
        details: [
          "Check Event ID 4624 Logon Type 3 bursts across multiple machines + TCP/IP NetBIOS Helper service.",
          "Inspect Windows Object Access logs (Event ID 4663) to verify if sensitive shared files were accessed.",
          "Review cloud audit logs (AWS CloudTrail / Graph API) for unauthorized resource creation."
        ]
      },
      {
        number: "4",
        title: "Hardening & Long-term MFA Enforcement",
        role: "Identity Team & SOC Lead",
        badge: "Containment & Hardening",
        summary: "Strengthen authentication controls to prevent future credential-based attacks.",
        details: [
          "Enforce Phishing-Resistant Multi-Factor Authentication (MFA) across all corporate accounts.",
          "Apply strict Conditional Access policies requiring compliant, managed devices and trusted IP ranges.",
          "Document incident root cause and update threat hunting baselines."
        ]
      }
    ]
  },
  {
    id: "map-web-intrusion-dfir",
    examId: "csa-v2",
    title: "Web Application Intrusion & Log Analysis Playbook",
    description: "Investigation workflow for web exploits (Directory Traversal, SQLi, XSS) targeting DMZ web servers.",
    steps: [
      {
        number: "1",
        title: "Architecture & Perimeter Ingestion",
        role: "DMZ Web Server / WAF / Snort IDS",
        badge: "Ingestion",
        summary: "Public-facing web servers in the DMZ buffer zone receive client requests monitored by Snort IDS & WAF.",
        details: [
          "DMZ Isolation: Isolates web servers from private internal networks containing customer data.",
          "Snort Rule Alert: Triggers on payload patterns (e.g. `alert tcp any any -> any 80 content:\"' OR T=T\"`).",
          "WAF alerts on dot-dot-slash sequences (`../` or `..\\`) and hex-encoded strings (`%2E%2E%2F`)."
        ]
      },
      {
        number: "2",
        title: "Web Server Log Deep Dive (CLF vs ELF)",
        role: "Tier 1 / Tier 2 SOC Analyst",
        badge: "Log Analysis",
        summary: "Correlate IDS/WAF alerts with Microsoft IIS and Apache web server access logs.",
        details: [
          "Log Location: Inspect IIS logs at `%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC<SiteID>`.",
          "Extended Log Format (ELF): Analyze Referer and User-Agent headers to identify automated scanners.",
          "HTTP Status Codes: Correlate 200 OK (potential exploit success) vs 403 Forbidden / 500 Server Error (5XX)."
        ]
      },
      {
        number: "3",
        title: "Exploit Classification & Database Correlation",
        role: "Tier 2 SOC Analyst",
        badge: "Classification",
        summary: "Identify specific web application attack vector and check backend database logs.",
        details: [
          "Directory Traversal: Attacker accessed `/etc/passwd` or `boot.ini` via manipulated URL paths.",
          "SQL Injection: Look for Blind/Time-based payloads (`WAITFOR DELAY`, `UNICODE(SUBSTRING(...))`).",
          "Database Auditing: Verify PostgreSQL logs enabled via `log_collector = on` in `postgresql.conf`."
        ]
      },
      {
        number: "4",
        title: "Eradication & Application Hardening",
        role: "AppSec Team & Systems Engineer",
        badge: "Remediation",
        summary: "Close application vulnerabilities and deploy defense-in-depth filters.",
        details: [
          "XSS Mitigation: Convert all non-alphanumeric characters to HTML character entities (`&lt;`, `&gt;`).",
          "SQLi Mitigation: Enforce parameterized queries (prepared statements) and deploy UrlScan filter on IIS.",
          "Path Traversal Mitigation: Implement strict path canonicalization and least-privilege web root permissions."
        ]
      }
    ]
  },
  {
    id: "map-threat-hunting-apt",
    examId: "csa-v2",
    title: "Unstructured Threat Hunting & APT Lifecycle",
    description: "Proactive threat hunting methodology to detect hidden APT persistence, C2 beaconing, and anti-forensic cleanup.",
    steps: [
      {
        number: "1",
        title: "Weak Signal Discovery (Unstructured Hunting)",
        role: "Threat Hunter",
        badge: "Hunting",
        summary: "Analyst detects anomalous encrypted outbound bursts at irregular intervals without existing IoCs or alerts.",
        details: [
          "Observation: Periodic small outbound data bursts to an unfamiliar external IP address.",
          "Approach: Launch unstructured hunting to discover Indicators of Attack (IoAs) and map adversary behavior."
        ]
      },
      {
        number: "2",
        title: "Host & Network Telemetry Correlation",
        role: "Threat Hunter / Tier 3 Analyst",
        badge: "Correlation",
        summary: "Aggregate threat intelligence with internal EDR telemetry and firewall logs (Data Integration).",
        details: [
          "Network Log Analysis: Inspect proxy/firewall logs to confirm active external C2 communication.",
          "Endpoint Scoping: Query Event ID 4688 to trace parent processes launching PowerShell or script engines.",
          "Static Analysis: Safely de-obfuscate embedded scripts and base64 payloads without executing them."
        ]
      },
      {
        number: "3",
        title: "APT Persistence Phase Identification",
        role: "Forensic Analyst",
        badge: "Persistence",
        summary: "Locate hidden mechanisms designed by the adversary to survive reboots and maintain access.",
        details: [
          "Inspect unauthorized scheduled tasks executing during off-peak hours.",
          "Audit Windows Registry Run / RunOnce autorun keys and newly installed background services (Event ID 7045).",
          "Collect host-based artifacts to map attacker dwell time."
        ]
      },
      {
        number: "4",
        title: "Anti-Forensics & Cleanup Detection",
        role: "Forensic Analyst",
        badge: "Cleanup / Evasion",
        summary: "Uncover attacker efforts to tamper with evidence and wipe audit logs.",
        details: [
          "Audit Time Tampering: Review Windows Security Event ID 4616 ('System time changed') and 4618.",
          "Audit Log Clearing: Check for Event ID 1102 ('The audit log was cleared').",
          "Host Integrity Monitoring: Diff before/after snapshots to uncover timestomped files and wiped artifacts."
        ]
      },
      {
        number: "5",
        title: "Detection Engineering & Rule Deployment",
        role: "SOC Engineering Team",
        badge: "Detection Ops",
        summary: "Convert threat hunting discoveries into automated detection and prevention rules.",
        details: [
          "Deploy DNS blocking rules (OpenDNS / Cisco Umbrella) and block C2 IPs on perimeter firewalls.",
          "Author custom SIEM correlation rules and Sigma rules to detect similar execution patterns automatically."
        ]
      }
    ]
  },
  {
    id: "map-siem-architecture",
    examId: "csa-v2",
    title: "Enterprise SIEM & Centralized Logging Architecture",
    description: "Phased deployment model for enterprise SIEM: from collection and normalization to AI dynamic rule optimization.",
    steps: [
      {
        number: "1",
        title: "Phase 1: Log Management Deployment",
        role: "SIEM Architect & Engineers",
        badge: "Phase 1",
        summary: "Establish the foundational log management layer BEFORE deploying SIEM analytics or automation.",
        details: [
          "Deploy Syslog Relays in branch offices as intermediate proxies to buffer and forward logs over WAN.",
          "Configure cloud storage with elastic scaling and encryption for long-term compliance retention.",
          "Enable database auditing parameters (e.g. `log_collector = on` in `postgresql.conf`)."
        ]
      },
      {
        number: "2",
        title: "Phase 2: Ingestion & Normalization",
        role: "SIEM Integration Engineer",
        badge: "Normalization",
        summary: "Accept logs from heterogeneous sources and convert them into standardized, structured schemas.",
        details: [
          "Log Normalization: Convert disparate logs from firewalls, IDS, servers, and cloud into unified field formats.",
          "Grok Filters: Use regex pattern matching to parse raw unstructured text into structured key-value pairs.",
          "Regex Utilities: Apply standard patterns (e.g. `([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})` for hex codes)."
        ]
      },
      {
        number: "3",
        title: "Phase 3: SIEM Use Case Development",
        role: "SOC Detection Engineer",
        badge: "Use Cases",
        summary: "Define correlation logic, thresholds, and conditions after identifying and validating telemetry sources.",
        details: [
          "Define correlation rules: Link related events across multiple systems (user, source IP, time window).",
          "Incorporate contextual data: Integrate HR user context to differentiate legitimate activity from insider threats.",
          "Contextual enrichment: Correlate with threat intelligence reputation databases (AlienVault OSSIM)."
        ]
      },
      {
        number: "4",
        title: "Phase 4: AI & Dynamic Rule Optimization",
        role: "SOC Manager & AI SIEM",
        badge: "AI Optimization",
        summary: "Apply AI and machine learning to eliminate alert fatigue and detect genuine threats faster.",
        details: [
          "Dynamic Rule Optimization: Automatically adapt alert thresholds based on historical baseline behavior.",
          "Noise Suppression: Suppress redundant non-malicious alerts and eliminate false positives.",
          "Alert Triage Dashboard: Prioritize critical information and remove unnecessary visual clutter."
        ]
      }
    ]
  },
  {
    id: "map-cti-lifecycle-d3fend",
    examId: "csa-v2",
    title: "CTI Lifecycle & MITRE D3FEND Defensive Mapping",
    description: "Operationalizing threat intelligence across the 6 CTI stages and systematically mapping defenses using MITRE D3FEND.",
    steps: [
      {
        number: "1",
        title: "1. Planning & Direction",
        role: "Threat Intel Lead & CISO",
        badge: "PIRs",
        summary: "Establish Priority Intelligence Requirements (PIRs) aligned with business risks and critical crown jewels.",
        details: [
          "Identify critical assets: Financial transaction databases, customer PII, DMZ web applications.",
          "Define threat intelligence scope: External adversary campaigns, industry-targeted APT groups."
        ]
      },
      {
        number: "2",
        title: "2. Collection (HUMINT, OSINT & Telemetry)",
        role: "CTI Collection Analyst",
        badge: "Collection",
        summary: "Gather raw intelligence from diverse external feeds, technical sensors, and human sources.",
        details: [
          "Technical Feeds: Commercial STIX/TAXII indicator feeds, honeypot telemetry, passive DNS.",
          "Human Intelligence (HUMINT): Interpersonal interactions, psychological profiling, social engineering reports."
        ]
      },
      {
        number: "3",
        title: "3. Processing & 4. Analysis (Data Integration)",
        role: "Threat Intelligence Analyst",
        badge: "Data Integration",
        summary: "Aggregate, normalize, and correlate external threat intelligence with internal telemetry.",
        details: [
          "Data Integration: Correlate IoCs with EDR telemetry, firewall logs, and user activity.",
          "Pyramid of Pain: Focus defense on top-tier adversary TTPs rather than easily changed IP/hash indicators.",
          "Diamond Model: Map Adversary -> Capability -> Infrastructure -> Victim relationships."
        ]
      },
      {
        number: "4",
        title: "5. Dissemination & MITRE D3FEND Mapping",
        role: "SOC Engineer / AppSec",
        badge: "D3FEND Mapping",
        summary: "Systematically map defensive countermeasures to neutralized adversary tactics.",
        details: [
          "Model: System baseline profiling and Host Integrity Monitoring (diffing before/after snapshots).",
          "Harden: Credential encryption, MFA enforcement, and input sanitization.",
          "Isolate: DMZ network architecture and EDR host isolation.",
          "Evict: User Deprovisioning SOAR playbooks and session invalidation.",
          "DDoS Mitigation: Neutralizing C2 handlers to sever botnet control."
        ]
      },
      {
        number: "5",
        title: "6. Feedback & Continuous Refinement",
        role: "SOC Lead & CTI Team",
        badge: "Feedback Loop",
        summary: "Evaluate intelligence effectiveness, close detection gaps, and refine collection requirements.",
        details: [
          "Assess whether threat briefings and indicator feeds prevented active breaches.",
          "Share tactical intelligence with trusted peer communities using TLP:GREEN protocols."
        ]
      }
    ]
  },
  {
    id: "map-siem-pipeline",
    examId: "csa-v2",
    title: "End-to-End SIEM Log Pipeline & Normalization Lifecycle",
    description: "Architectural stages of log collection, field extraction, taxonomic normalization (CEF/CIM), enrichment, and correlation.",
    steps: [
      {
        number: "1",
        title: "1. Log Collection & Transport",
        role: "Log Collectors & Syslog Relays",
        badge: "Ingestion",
        summary: "Raw telemetry is pushed or pulled from heterogeneous enterprise endpoints and security appliances.",
        details: [
          "Sources: Windows Security EVTX (via WEC/Winlogbeat), Syslog relays (UDP/TCP 514, TLS 6514), Linux auditd, CloudTrail API connectors.",
          "Syslog Relays buffer messages locally during network disruptions and forward them to central SIEM collector."
        ]
      },
      {
        number: "2",
        title: "2. Parsing & Field Extraction",
        role: "SIEM Parsing Engine (Grok / Regex)",
        badge: "Parsing",
        summary: "Dissects raw string streams into structured key-value attributes (timestamp, IP, username, process, payload).",
        details: [
          "Extracts headers according to RFC 5424 / RFC 3164 standards.",
          "Extracts W3C web log prefixes (`s-ip`, `c-ip`, `cs-method`, `cs-uri-stem`, `sc-status`, `sc-bytes`)."
        ]
      },
      {
        number: "3",
        title: "3. Taxonomic Normalization",
        role: "Normalization Module (CEF / LEEF / CIM / ECS)",
        badge: "Normalization",
        summary: "Maps vendor-specific field names into universal, standardized schema definitions.",
        details: [
          "Standardizes IP fields: `c-ip` (IIS), `src` (CheckPoint), `SourceAddress` (Windows) -> `source_ip`.",
          "Ensures cross-vendor correlation rules can match events across heterogeneous firewalls, EDRs, and proxies."
        ]
      },
      {
        number: "4",
        title: "4. Contextual Enrichment",
        role: "Enrichment Engine & Threat Feeds",
        badge: "Enrichment",
        summary: "Appends external threat intelligence, asset criticality, and identity context to parsed events.",
        details: [
          "GeoIP lookup and AlienVault OSSIM reputation scoring (`/etc/ossim/server/reputation.data`).",
          "Active Directory LDAP mapping (attaching department, manager, and privilege level to usernames).",
          "STIX/TAXII IoC feed tag matching."
        ]
      },
      {
        number: "5",
        title: "5. Multi-Event Correlation & Detection",
        role: "SIEM Correlation Engine (Rules + UEBA)",
        badge: "Detection",
        summary: "Evaluates real-time sliding time windows across millions of normalized events to trigger high-fidelity alerts.",
        details: [
          "Rule Correlation: 5x Failed Logons (4625) within 60s followed by 1x Success (4624) -> Brute Force Success Alert.",
          "Dynamic Rule Optimization: Machine learning baselines to dynamically adjust thresholds and prevent alert fatigue."
        ]
      },
      {
        number: "6",
        title: "6. Tiered Storage & Forensic Preservation",
        role: "Data Management & Storage Tiers",
        badge: "Archival",
        summary: "Stores logs across tiered lifecycle architecture while ensuring tamper-proof legal admissibility.",
        details: [
          "Hot Tier (0-30 days): High-performance NVMe for active real-time queries and dashboard analytics.",
          "Warm/Cold Tier (30-365+ days): Compressed object storage for compliance and historical threat hunting.",
          "Tamper-Proofing: WORM storage, SHA-256 digital hashing, and strict NTP stratum-1 time synchronization."
        ]
      }
    ]
  },
  {
    id: "map-windows-auth-triage",
    examId: "csa-v2",
    title: "Windows Authentication & Lateral Movement Log Triage Flow",
    description: "Step-by-step forensic analysis of Windows Security event streams to uncover unauthorized access and lateral movement.",
    steps: [
      {
        number: "1",
        title: "1. Authentication Event Ingestion",
        role: "Domain Controller / Member Server",
        badge: "Auth Logs",
        summary: "Capture raw logon requests and pre-authentication status across Active Directory and endpoints.",
        details: [
          "Kerberos AS-REQ / AS-REP (Event 4768) and TGS-REQ (Event 4769).",
          "Pre-auth failure (Event 4771 with Failure Code 0x18) indicates bad password / brute force.",
          "NTLM validation on Domain Controller (Event 4776)."
        ]
      },
      {
        number: "2",
        title: "2. Success vs Failure Assessment",
        role: "Tier 1 SOC Analyst",
        badge: "Logon Status",
        summary: "Differentiate between benign user error, password spraying, and successful compromise.",
        details: [
          "Event 4625: Check Sub-Status code (`0xC0000064` no user, `0xC000006A` wrong password, `0xC0000234` locked out).",
          "Event 4624: Examine Logon Type code (Type 2 Interactive, Type 3 Network, Type 10 RDP)."
        ]
      },
      {
        number: "3",
        title: "3. Lateral Movement Correlation",
        role: "Tier 2 SOC Investigator",
        badge: "Lateral Movement",
        summary: "Identify rapid hops across internal network workstations and servers.",
        details: [
          "Burst of Event 4624 Logon Type 3 (Network) across multiple servers from a single workstation IP.",
          "Explicit credential usage (Event 4648) or Pass-the-Hash artifact indicators.",
          "File share object access (Event 5140 / 5145) to administrative C$ or ADMIN$ shares."
        ]
      },
      {
        number: "4",
        title: "4. Execution & Persistence Verification",
        role: "Forensic Analyst (DFIR)",
        badge: "Persistence",
        summary: "Correlate authentication with host-level process execution and persistence artifacts.",
        details: [
          "Event 4672: Check if administrative privileges (SeDebugPrivilege) were assigned.",
          "Event 7045 / 4697: Detect newly installed Windows service (e.g. PsExec service `PSEXESVC`).",
          "Sysmon Event 1: Inspect CommandLine for encoded PowerShell execution or Lolbins usage."
        ]
      },
      {
        number: "5",
        title: "5. Containment & Remediation",
        role: "IRT / Automated SOAR",
        badge: "Containment",
        summary: "Execute immediate containment playbooks to isolate endpoints and revoke compromised credentials.",
        details: [
          "Execute 'Deprovisioning Users SOAR Playbook' to terminate active sessions and reset Kerberos TGT.",
          "Isolate compromised source host via EDR network containment.",
          "Enforce mandatory Multi-Factor Authentication (MFA) on all remote access points."
        ]
      }
    ]
  }
];
