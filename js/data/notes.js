// Technical Notes and Cheat Sheets for SOC & CSA Preparation (English)
export const defaultNotes = [
  {
    id: "note-winevents",
    examId: "csa",
    category: "Windows Event Logs",
    title: "Critical Windows Security Event IDs",
    description: "Quick reference table of the most frequently tested Windows Security audit IDs for SOC analysts.",
    type: "table",
    headers: ["Event ID", "Description", "SOC Relevance & Context", "Severity"],
    rows: [
      ["4624", "Successful Logon", "Account logged on successfully. Analyze Logon Type and source IP.", "Informational"],
      ["4625", "Failed Logon", "Authentication failed. High burst indicates brute-force or password spraying.", "High"],
      ["4672", "Special Privileges Assigned", "Admin privileges assigned during logon (e.g. SeDebugPrivilege).", "Medium"],
      ["4720", "User Account Created", "New user account provisioned. Used to detect adversary persistence.", "High"],
      ["4726", "User Account Deleted", "A user account was removed from the system.", "Medium"],
      ["4738", "User Account Modified", "Attributes changed (e.g., password never expires, group changes).", "Medium"],
      ["7045", "Service Installed (System)", "New Windows service created. Common malware persistence mechanism.", "Critical"],
      ["4688", "New Process Created", "Process execution. If CommandLine auditing is enabled, shows executed arguments.", "High"],
      ["1102", "Audit Log Cleared", "The Security audit log was cleared. Immediate critical defense evasion indicator.", "Critical"],
      ["4719", "Audit Policy Changed", "Audit policy modified to disable logging of security events.", "Critical"]
    ]
  },
  {
    id: "note-logontypes",
    examId: "csa",
    category: "Windows Event Logs",
    title: "Windows Logon Types (Event ID 4624)",
    description: "Essential logon type breakdown for forensic and SOC investigations.",
    type: "table",
    headers: ["Logon Type", "Name", "Real-world Scenario & Explanation"],
    rows: [
      ["Type 2", "Interactive", "Local console logon via direct keyboard and monitor."],
      ["Type 3", "Network", "Remote connection to shared resources (SMB shares, IIS auth, RPC)."],
      ["Type 4", "Batch", "Logon by Scheduled Tasks or batch scripts."],
      ["Type 5", "Service", "Logon initiated by a Windows background service."],
      ["Type 7", "Unlock", "Workstation unlocked by an active user."],
      ["Type 8", "NetworkCleartext", "Network authentication with plaintext credentials (e.g., Basic Auth in IIS)."],
      ["Type 9", "NewCredentials", "Used by `runas /netonly` to impersonate credentials on the network only."],
      ["Type 10", "RemoteInteractive", "Remote Desktop Protocol (RDP) or Terminal Services connection."],
      ["Type 11", "CachedInteractive", "Logon with locally cached credentials when Domain Controller is unreachable."]
    ]
  },
  {
    id: "note-syslog",
    examId: "csa",
    category: "Linux & Network Logs",
    title: "Syslog Severities & Standards (RFC 5424)",
    description: "Numeric syslog severity codes ranging from 0 (Emergency) to 7 (Debug).",
    type: "table",
    headers: ["Level (Code)", "Severity", "Description and Example"],
    rows: [
      ["0", "Emergency (emerg)", "System is completely unusable (Panic)."],
      ["1", "Alert (alert)", "Action must be taken immediately (e.g., primary database corrupted)."],
      ["2", "Critical (crit)", "Critical conditions (e.g., vital subsystem failure)."],
      ["3", "Error (err)", "Error conditions within running applications."],
      ["4", "Warning (warning)", "Warning conditions indicating potential issues."],
      ["5", "Notice (notice)", "Normal but significant operational events."],
      ["6", "Informational (info)", "Standard operational informational messages."],
      ["7", "Debug (debug)", "Detailed debugging information for developers."]
    ]
  },
  {
    id: "note-splunk",
    examId: "csa",
    category: "SIEM & SPL",
    title: "Splunk SPL (Search Processing Language) Cheatsheet",
    description: "Core commands and operators used in SOC threat investigations.",
    type: "cards",
    items: [
      {
        title: "Basic Search & Filtering",
        code: "index=security sourcetype=WinEventLog:Security EventCode=4625",
        desc: "Filters events in the 'security' index matching failed Windows logon attempts."
      },
      {
        title: "Aggregation & Statistics (stats)",
        code: "index=firewall action=blocked | stats count by src_ip, dest_port | sort -count",
        desc: "Aggregates and counts dropped packets grouped by source IP and destination port."
      },
      {
        title: "Time Evolution (timechart)",
        code: "index=web status>=400 | timechart span=1h count by status",
        desc: "Plots the hourly trend of HTTP client/server errors over time."
      },
      {
        title: "Dynamic Field Calculation (eval)",
        code: "index=proxy | eval response_kb = bytes_out / 1024 | where response_kb > 5000",
        desc: "Calculates outbound transfer size in KB and alerts on data exfiltration > 5MB."
      },
      {
        title: "Deduplication (dedup)",
        code: "index=antivirus signature=* | dedup signature, host | table _time, host, signature",
        desc: "Removes repetitive alerts, keeping only the first unique detection per host."
      }
    ]
  },
  {
    id: "note-ir",
    examId: "csa",
    category: "Incident Response",
    title: "NIST SP 800-61 vs. SANS Incident Response Lifecycle",
    description: "Direct comparison between the two main IR industry frameworks.",
    type: "table",
    headers: ["Phase #", "NIST SP 800-61 Rev 2 (4 Phases)", "SANS PICERL (6 Steps)"],
    rows: [
      ["1", "1. Preparation", "1. Preparation (Policies, tooling, IR jump kits)"],
      ["2", "2. Detection and Analysis", "2. Identification / Detection (Triage, IoC validation)"],
      ["3", "3. Containment, Eradication & Recovery", "3. Containment (Network isolation, firewall IP block)"],
      ["4", "-", "4. Eradication (Malware removal, credential reset)"],
      ["5", "-", "5. Recovery (Restoration from backups, monitoring)"],
      ["6", "4. Post-Incident Activity (Lessons Learned)", "6. Lessons Learned (Incident documentation, defense improvements)"]
    ]
  },
  {
    id: "note-cti",
    examId: "csa",
    category: "Threat Intelligence",
    title: "Cyber Threat Intelligence Frameworks & Standards",
    description: "Key CTI concepts: STIX, TAXII, TLP 2.0, Diamond Model, and the Pyramid of Pain.",
    type: "cards",
    items: [
      {
        title: "STIX (Structured Threat Information Expression)",
        code: "JSON/XML Structured Language",
        desc: "Standardized language to describe threat info: IoCs, Threat Actors, Campaigns, and Attack Patterns."
      },
      {
        title: "TAXII (Trusted Automated eXchange of Intel)",
        code: "Application Protocol (HTTPS / REST API)",
        desc: "Defines transport mechanisms and services (Collections & Channels) for sharing STIX intelligence."
      },
      {
        title: "Traffic Light Protocol (TLP 2.0)",
        code: "TLP:RED | TLP:AMBER | TLP:AMBER+STRICT | TLP:GREEN | TLP:CLEAR",
        desc: "RED: Named individuals only. AMBER: Within organization (need-to-know). GREEN: Trusted community. CLEAR: Public."
      },
      {
        title: "Diamond Model of Intrusion Analysis",
        code: "4 Vertices: Adversary, Capability, Infrastructure, Victim",
        desc: "Connects who attacked (Adversary), using what weapon (Capability), through where (Infrastructure), targeting whom (Victim)."
      }
    ]
  },
  {
    id: "note-ir-deep",
    examId: "csa",
    category: "Incident Response",
    title: "Granular SOC Incident Response Actions Matrix",
    description: "Operational classification of SOC actions across every stage of an active incident.",
    type: "table",
    headers: ["IR Phase", "Primary Goal", "Key SOC Actions & Artifacts", "Real-world Exam Scenario"],
    rows: [
      ["Recording & Assignment", "Formal logging & ownership", "Ticket generation (#INC-xxx), assigning to Tier 2/IRT, setting initial severity.", "Logging an encrypted spreadsheet ticket and escalating to Tier 2."],
      ["Triage & Identification", "Verify and determine scope", "User action verification (who clicked/opened), hash lookup, event log review.", "Checking mail filter trace and sign-in logs to identify compromised users."],
      ["Containment", "Stop the bleeding / limit spread", "VLAN isolation, network disconnection, credential revocation, blocking C2 IPs/domains.", "Isolating the Finance VLAN upon confirming LockBit ransomware."],
      ["Evidence Gathering & DFIR", "Preserve volatile evidence", "RAM dump acquisition (Volatility), forensic disk imaging, PCAP network captures.", "Deploying forensic workstation to dump RAM and collect event logs."],
      ["Eradication", "Eliminate root cause & threats", "Emergency CVE patching, mail filtering rules, removing persistence (services/tasks), fixing devices.", "Applying emergency patch KB5025941 for CVE-2024-0123 on mail server."],
      ["Recovery", "Restore trusted operations", "Rebuilding systems from clean golden images, restoring backups, validating telemetry.", "Bringing patched mail server back online with enhanced monitoring."],
      ["Post-Incident Activities", "Learn and harden defenses", "Post-mortem timeline review, calculating business/financial impact, updating playbooks.", "Holding review meeting 1 week later, calculating $157k impact, fixing gaps."]
    ]
  },
  {
    id: "note-cloud-soc",
    examId: "csa",
    category: "Cloud SOC & Advanced Tech",
    title: "Cloud Security, AI & Automation Frameworks",
    description: "Architecture breakdown of CASB, CSPM, CWPP, XDR, XSOAR, and AI-driven SIEM optimizations.",
    type: "cards",
    items: [
      {
        title: "CASB (Cloud Access Security Broker)",
        code: "Policy Enforcement Point (SaaS / IaaS / PaaS)",
        desc: "Governs cloud application access, enforces Data Loss Prevention (DLP), blocks unauthorized file sharing, and ensures regulatory compliance."
      },
      {
        title: "CSPM vs CWPP",
        code: "CSPM = Posture / Config | CWPP = Workload Runtime",
        desc: "CSPM audits misconfigurations and compliance drift across cloud infrastructure. CWPP protects compute instances, containers, and serverless runtime."
      },
      {
        title: "XDR + XSOAR Synergy",
        code: "XDR (Detection) + XSOAR (Automated Orchestration)",
        desc: "XDR correlates telemetry across endpoint, network, cloud, and email. XSOAR runs automated playbooks for immediate containment and response."
      },
      {
        title: "AI SIEM: Dynamic Rule Optimization",
        code: "Machine Learning Adaptive Baselines",
        desc: "Automatically tunes static thresholds and suppresses repetitive benign noise, drastically reducing analyst alert fatigue and false positives."
      },
      {
        title: "NLP in SOC Operations",
        code: "Natural Language Processing for Textual Telemetry",
        desc: "Extracts entities, evaluates intent, and detects threats in human-readable communications, phishing email bodies, and unstructured tickets."
      }
    ]
  },
  {
    id: "note-logging-deep",
    examId: "csa",
    category: "Log Architecture & Auditing",
    title: "Enterprise Log Architecture & Service Configuration",
    description: "Essential configuration parameters, regex patterns, and logging roles for SOC monitoring.",
    type: "table",
    headers: ["Component / Technology", "Configuration / Syntax", "Function & SOC Relevance"],
    rows: [
      ["Syslog Relay", "Intermediate forwarder", "Collects logs from branch routers/servers and forwards upstream to central Syslog Server over WAN."],
      ["PostgreSQL Auditing", "log_collector = on", "Enables writing stderr/CSV logs to files in postgresql.conf for SIEM log shipping and compliance."],
      ["Grok Log Parsing", "%{IP:client} %{WORD:method}", "Pattern matching using regex to convert raw unstructured text logs into normalized structured fields."],
      ["Hex Color Code Regex", "([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})", "Regex pattern to extract 3-digit shorthand or 6-digit full hexadecimal codes from logs."],
      ["Windows Time Tampering", "Event ID 4616 & 4618", "Logs system time changes (timestomping) and monitored security condition anomalies in Windows Security log."],
      ["Process Execution Scoping", "Event ID 4688", "Logs new process creation with command-line arguments (e.g. powershell.exe -ExecutionPolicy Bypass)."]
    ]
  },
  {
    id: "note-web-attack-signatures",
    examId: "csa",
    category: "Web Security & Detection",
    title: "Web Attack Signatures & Encoded Regex Master Table",
    description: "Decoding URL hex encodings and regex detection rules frequently tested in SOC exams.",
    type: "table",
    headers: ["Attack Type", "Signature Regex / Payload Pattern", "Hex Encodings Decoded", "Defensive Control"],
    rows: [
      ["XSS (Cross-Site Scripting)", "/((%3C)|<).*((%69)|i).*((%6D)|m).*((%67)|g)[^\\n]+((%3E)|>)/i", "%3C = < | %69 = i | %6D = m | %67 = g | %3E = > (Detects <img> tag injections)", "WAF, Output Encoding, Content Security Policy (CSP)"],
      ["SQL Injection (Tautology)", "/\\w*((%27)|('))((%6F)|o|(%4F))((%72)|r|(%52))/ix", "%27 = ' | %6F/%4F = o/O | %72/%52 = r/R (Detects ' OR authentication bypass)", "Parameterized Queries (Prepared Statements), UrlScan (IIS)"],
      ["Directory / Path Traversal", "/(.|(%|%25)2E)(.|(%|%25)2E)(\\/|(%|%25)2F|\\\\|(%|%25)5C)/i", "%2E = . | %2F = / | %5C = \\ | %252E = double-encoded dot (Detects ../ and ..\\ traversal)", "Strict Path Normalization, Least-Privilege Web Root Permissions"],
      ["Parameter / Price Tampering", "GET /buy.aspx?item=12&price=10 (Client modifies price/role)", "Tampering with query parameters or POST form fields directly in browser/proxy", "Server-side Price & Role Validation, HMAC token signing"]
    ]
  },
  {
    id: "note-paths-and-commands",
    examId: "csa",
    category: "System Paths & CLI Commands",
    title: "Critical Operating System Log Paths & SOC CLI Commands",
    description: "Direct reference for default log locations across Linux, Windows IIS, Cisco routers, and SIEM appliances.",
    type: "table",
    headers: ["Platform / System", "Path / Command", "Description & Forensic Utility"],
    rows: [
      ["Microsoft IIS 7.0+", "%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC<SiteID>", "Default directory for W3C web server access and error logs."],
      ["Linux User Logins", "/var/log/wtmp", "Binary database of all logins, logouts, reboots, and runlevels (read via `last`)."],
      ["Linux Kernel & iptables", "/var/log/kern.log", "Kernel logging destination for iptables rules tagged with `-j LOG`."],
      ["Linux iptables Logging", "iptables -A INPUT -j LOG", "Appends rule to log all matching inbound packet headers to kernel log."],
      ["AlienVault OSSIM SIEM", "/etc/ossim/server/reputation.data", "Local database of known malicious IP reputations and threat intelligence indicators."],
      ["Cisco IOS Router Logs", "show logging | include <ACL_number>", "Pipes router log buffer output through an include filter (e.g. ACL 210 matches)."],
      ["Incident Report Automation", "MagicTree", "Tree-based data management and automated report generation tool for incident handlers."],
      ["Incident Remediation", "CrowdStrike Falcon Orchestrator", "Security automation and orchestration platform for recovering from endpoint/app compromises."]
    ]
  },
  {
    id: "note-mitre-d3fend-matrix",
    examId: "csa",
    category: "Defensive Frameworks",
    title: "MITRE D3FEND: Defensive Technique Ontology",
    description: "Systematic mapping of defensive techniques to adversary tactics defined in MITRE ATT&CK.",
    type: "table",
    headers: ["D3FEND Tactic", "Defensive Technique", "Offensive Threat Neutralized", "SOC Implementation"],
    rows: [
      ["Model", "System Baseline Profiling", "Anomalous execution & APT footholds", "Host Integrity Monitoring (diffing before/after snapshots)."],
      ["Harden", "Credential Encryption & MFA", "Credential Stuffing / Brute-Force", "FIDO2, conditional access, and password rotation."],
      ["Isolate", "Process & Network Isolation", "Lateral Movement & Worm propagation", "VLAN segmentation, EDR host isolation, container sandboxing."],
      ["Deceive", "Decoy Environment / Honeypots", "Network Reconnaissance & Discovery", "Deploying honey-tokens and fake service listeners."],
      ["Detect", "Dynamic Rule Optimization & Behavioral ML", "Signature evasion & Zero-days", "Machine learning baselines to tune alert thresholds."],
      ["Evict", "User Deprovisioning & Session Invalidation", "Account takeover / Impossible travel", "SOAR playbooks revoking tokens and resetting AD passwords."]
    ]
  },
  {
    id: "note-cloud-threat-ops",
    examId: "csa",
    category: "Cloud SOC & SOAR",
    title: "AWS Cloud Threat Monitoring & Sentinel SOAR Guide",
    description: "Core cloud threat detection services and automated SOAR response workflows.",
    type: "cards",
    items: [
      {
        title: "Amazon GuardDuty",
        code: "ML Threat Detection Engine",
        desc: "Ingests CloudTrail, VPC Flow Logs, and DNS query logs to detect account compromise, Bitcoin mining, unauthorized API calls, and C2 communication."
      },
      {
        title: "Amazon Macie vs AWS Config",
        code: "Macie = S3 DLP | Config = Compliance",
        desc: "Macie scans S3 buckets for exposed PII/PHI. AWS Config monitors configuration drift and compliance against governance rules."
      },
      {
        title: "Microsoft Sentinel: TAXII Connector",
        code: "Automated Threat Intel Sharing",
        desc: "Ingests machine-readable STIX indicator feeds (IPs, domains, hashes) over standard HTTPS TAXII servers directly into Sentinel analytics."
      },
      {
        title: "Sentinel Playbooks (Azure Logic Apps)",
        code: "Automated SOAR Execution",
        desc: "Executes automated workflows: isolate compromised endpoint, deprovision user account, block malicious IP on firewall, and alert incident commander."
      }
    ]
  }
];
