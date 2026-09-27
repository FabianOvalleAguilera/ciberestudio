// Technical Notes and Cheat Sheets for EC-Council CSA v2 (2026 Exam - 200 Qs Bank)
// Each note is directly tailored to cover all testable tables, formulas, event IDs, and concepts in the 200 Qs PDF bank.

export const defaultNotes = [
  {
    id: "note-winevents",
    examId: "csa-v2",
    category: "Windows Event Logs",
    title: "Critical Windows Security Event IDs & Audit Codes",
    description: "Essential Windows Security and System audit event IDs tested across exam questions.",
    type: "table",
    headers: ["Event ID", "Description", "Exam Scenario & SOC Context", "Severity"],
    rows: [
      ["4616", "System Time Changed", "System clock modified (Timestomping / Defense Evasion to tamper with event chronology).", "Critical"],
      ["4618", "Security Event Monitored", "Monitored security-sensitive event patterns and audit condition anomalies.", "High"],
      ["4624", "Successful Logon", "Account logged on successfully. Examine Logon Type (Type 2 local, Type 3 network, Type 10 RDP).", "Informational"],
      ["4625", "Failed Logon", "Authentication failed. High burst indicates brute-force or password spraying.", "High"],
      ["4663", "Object Access Attempt", "Access to specific file, folder, or database on shared servers (audit who accessed/modified files).", "Medium"],
      ["4688", "New Process Created", "Process execution. With CommandLine auditing, exposes arguments (e.g. `powershell -ExecutionPolicy Bypass`).", "High"],
      ["7045", "Service Installed (System)", "New Windows service created. Frequently used for persistent adversary backdoors.", "Critical"],
      ["1102", "Audit Log Cleared", "The Security audit log was cleared. Critical indicator of adversary Cleanup / anti-forensics.", "Critical"],
      ["4719", "Audit Policy Changed", "Audit policy modified to disable logging of security events.", "Critical"],
      ["4720", "User Account Created", "New user account provisioned. Used to detect rogue administrative persistence.", "High"]
    ]
  },
  {
    id: "note-logontypes",
    examId: "csa-v2",
    category: "Windows Event Logs",
    title: "Windows Logon Types (Event ID 4624 Reference)",
    description: "Detailed breakdown of logon type codes used to identify access vectors and lateral movement.",
    type: "table",
    headers: ["Logon Type", "Name", "Real-world Scenario & Exam Relevance"],
    rows: [
      ["Type 2", "Interactive", "Local console logon via direct physical keyboard and monitor."],
      ["Type 3", "Network", "Remote connection to shared resources (SMB, IIS, RPC). Burst across machines indicates Lateral Movement (Pass-the-Hash / PsExec)."],
      ["Type 4", "Batch", "Logon by Scheduled Tasks or batch scripts (frequently leveraged for APT persistence)."],
      ["Type 5", "Service", "Logon initiated by a Windows background service."],
      ["Type 7", "Unlock", "Workstation unlocked by an active user."],
      ["Type 8", "NetworkCleartext", "Network authentication with plaintext credentials (e.g., Basic Auth in IIS)."],
      ["Type 9", "NewCredentials", "Used by `runas /netonly` to impersonate credentials on the network only."],
      ["Type 10", "RemoteInteractive", "Remote Desktop Protocol (RDP) or Terminal Services connection."],
      ["Type 11", "CachedInteractive", "Logon with locally cached credentials when Domain Controller is unreachable."]
    ]
  },
  {
    id: "note-syslog-rfc",
    examId: "csa-v2",
    category: "Linux & Network Logs",
    title: "Syslog Standards (RFC 5424) & Architecture",
    description: "Numeric syslog severity levels ranging from 0 (Emergency) to 7 (Debug) and deployment components.",
    type: "table",
    headers: ["Level (Code)", "Severity", "Description & Operational Example"],
    rows: [
      ["0", "Emergency (emerg)", "System is completely unusable (Panic). Requires immediate enterprise intervention."],
      ["1", "Alert (alert)", "Action must be taken immediately (e.g., primary transaction database corrupted)."],
      ["2", "Critical (crit)", "Critical conditions (e.g., vital security subsystem or hardware failure)."],
      ["3", "Error (err)", "Error conditions within running applications."],
      ["4", "Warning (warning)", "Warning conditions indicating potential issues."],
      ["5", "Notice (notice)", "Normal but significant operational events."],
      ["6", "Informational (info)", "Standard operational informational messages."],
      ["7", "Debug (debug)", "Detailed debugging information for developers and engineers."]
    ]
  },
  {
    id: "note-web-attack-master",
    examId: "csa-v2",
    category: "Web Security & Detection",
    title: "Web Attack Signatures, HTTP Codes & Regex Master Table",
    description: "Common payload signatures, regular expressions, and HTTP response codes tested in web intrusion scenarios.",
    type: "table",
    headers: ["Attack / Concept", "Payload / Regex Pattern", "Decoded Signature", "Mitigation / Control"],
    rows: [
      ["Directory / Path Traversal", "/(.|(%|%25)2E)(.|(%|%25)2E)(\\/|(%|%25)2F|\\\\|(%|%25)5C)/i", "%2E = . | %2F = / | %5C = \\ (Detects `../` and `..\\` sequences)", "Strict Path Canonicalization, Restricting Web Root Permissions"],
      ["SQL Injection (Tautology)", "alert tcp any any -> any 80 content:\"' OR T=T\"", "' OR T=T / ' OR 1=1 (Always evaluates to true to bypass login)", "Parameterized Queries (Prepared Statements), UrlScan filter (IIS)"],
      ["Blind / Time-based SQLi", "WAITFOR DELAY '0:0:5' / UNICODE(SUBSTRING(...))", "Forces DB server to delay response to extract data character-by-character", "Input Sanitization, Parameterized SQL Queries"],
      ["Cross-Site Scripting (XSS)", "<img src=x onerror=alert(1)>", "Injects client-side executable script into web application context", "Convert all non-alphanumeric chars to HTML character entities (&lt;, &gt;), CSP"],
      ["Hex Code Regex Pattern", "([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})", "Matches 3-digit shorthand or 6-digit full hexadecimal codes in logs", "Used in regex filters for hexadecimal pattern extraction"],
      ["HTTP 2XX (Success)", "200 OK / 201 Created", "Request succeeded (may indicate successful exploit payload execution)", "Log auditing & correlation with WAF alerts"],
      ["HTTP 4XX (Client Error)", "401 Unauthorized / 403 Forbidden / 404 Not Found", "Client-side error or blocked resource access attempt", "Monitor for 403/404 bursts during web scanning/reconnaissance"],
      ["HTTP 5XX (Server Error)", "500 Internal Server Error / 502 Bad Gateway / 503 Unavailable", "Server error (indicates unhandled backend exception or SQL syntax error)", "Investigate error stack traces to detect application exploitation"]
    ]
  },
  {
    id: "note-ir-frameworks",
    examId: "csa-v2",
    category: "Incident Response",
    title: "Incident Response Lifecycle (NIST SP 800-61 vs. SANS)",
    description: "Comprehensive mapping of IR phases, operational SOC tasks, and IRT escalation procedures.",
    type: "table",
    headers: ["Phase / Step", "Primary Objective", "Key SOC Actions & Exam Context"],
    rows: [
      ["1. Preparation", "Readiness & tool provisioning", "Deploying EDR/SIEM, establishing SOPs, training analysts, and configuring automated SOAR playbooks."],
      ["2. Detection & Analysis (Triage)", "Alert validation & scoping", "Jennifer's triage: inspecting EDR, SIEM, and email logs; verifying false positives to confirm true attack."],
      ["IRT Escalation Handover", "IRT First Step", "Incident Analysis and Validation: verifying forensic indicators and confirming incident scope before action."],
      ["3. Containment", "Halt adversary spread & dwell time", "Executing Deprovisioning Users SOAR Playbooks, host network isolation, user action verification, and MFA enforcement."],
      ["4. Eradication", "Eliminate root cause & persistence", "Fixing Devices (emergency CVE patching), neutralizing botnet C2 handlers, and deleting rogue scheduled tasks/services."],
      ["5. Recovery", "Restore trusted business operations", "Rebuilding systems from clean golden images, restoring validated offline backups, and verifying monitoring telemetry."],
      ["6. Post-Incident Review", "Lessons learned & defense hardening", "Sarah's review: calculating downtime & financial loss ($157k impact), identifying 7 improvements, updating detection rules."]
    ]
  },
  {
    id: "note-cti-frameworks",
    examId: "csa-v2",
    category: "Threat Intelligence",
    title: "Cyber Threat Intelligence (CTI) Frameworks & Hunting Models",
    description: "Core CTI standards, sharing protocols, intelligence disciplines, and threat hunting classifications.",
    type: "cards",
    items: [
      {
        title: "Unstructured Threat Hunting",
        code: "Weak Signal / Anomaly-Driven",
        desc: "Initiated from weak signals or subtle anomalies (e.g. encrypted periodic traffic to unfamiliar IP without existing IoCs) where the analyst freely explores telemetry to identify Indicators of Attack (IoAs)."
      },
      {
        title: "Human Intelligence (HUMINT) in CTI",
        code: "Interpersonal & Psychological Profiling",
        desc: "Leverages interpersonal communication, social engineering analysis, insider interviews, and deception detection to uncover adversary motives and planned campaigns."
      },
      {
        title: "Data Integration in Threat Intelligence",
        code: "Cross-Domain Telemetry Aggregation",
        desc: "Ingests, normalizes, and correlates external threat intelligence feeds (STIX/TAXII) with internal EDR events, network flows, and authentication logs to maximize detection fidelity."
      },
      {
        title: "STIX & TAXII Protocols",
        code: "STIX = What (JSON Schema) | TAXII = How (HTTPS Protocol)",
        desc: "STIX standardizes threat intelligence representation (IoCs, actors, TTPs). TAXII provides the secure transport protocol over HTTPS to automate feed sharing with SIEMs."
      },
      {
        title: "Traffic Light Protocol (TLP 2.0)",
        code: "RED | AMBER | AMBER+STRICT | GREEN | CLEAR",
        desc: "RED: Named recipients only. AMBER: Within the organization (need-to-know). GREEN: Trusted community peers. CLEAR: Publicly shareable."
      },
      {
        title: "Pyramid of Pain Hierarchy",
        code: "Hashes -> IPs -> Domains -> Host Artifacts -> Tools -> TTPs",
        desc: "Hashes & IPs are trivial for attackers to change (bottom). Adversary TTPs (Tactics, Techniques, and Procedures) are the most painful and costly to modify (top)."
      }
    ]
  },
  {
    id: "note-mitre-d3fend",
    examId: "csa-v2",
    category: "Defensive Frameworks",
    title: "MITRE D3FEND Defensive Technique Matrix",
    description: "Systematic mapping of defensive techniques to adversary tactics in MITRE ATT&CK.",
    type: "table",
    headers: ["D3FEND Tactic", "Defensive Technique", "Adversary Threat Neutralized", "SOC Implementation"],
    rows: [
      ["Model", "System Baseline Profiling", "Anomalous execution & APT persistence", "Host Integrity Monitoring (diffing before/after system snapshots)."],
      ["Harden", "Credential Encryption & MFA", "Brute-force / Credential Stuffing", "Enforcing Multi-Factor Authentication (MFA) during containment."],
      ["Isolate", "Process & Network Isolation", "Lateral Movement & Worm propagation", "Demilitarized Zone (DMZ) buffer zone and EDR host network isolation."],
      ["Deceive", "Decoy Environment / Honeypots", "Network Reconnaissance & Discovery", "Deploying honey-tokens and fake service listeners to trap attackers."],
      ["Detect", "Dynamic Rule Optimization", "Signature evasion & Alert fatigue", "AI-driven machine learning baselines to tune alert thresholds dynamically."],
      ["Evict", "User Deprovisioning & Token Revocation", "Account takeover / Impossible travel", "Executing 'Deprovisioning Users SOAR Playbooks' to terminate sessions."]
    ]
  },
  {
    id: "note-cloud-soar-tech",
    examId: "csa-v2",
    category: "Cloud SOC & Technologies",
    title: "Enterprise SOC, Cloud & SOAR Technologies Matrix",
    description: "Summary of defensive tools, cloud security services, and automation architectures tested in the exam.",
    type: "cards",
    items: [
      {
        title: "Cloud Access Security Broker (CASB)",
        code: "Policy Enforcement Point (SaaS / IaaS / PaaS)",
        desc: "Governs cloud application access, enforces Data Loss Prevention (DLP), restricts unauthorized file sharing, and ensures regulatory compliance."
      },
      {
        title: "Microsoft Sentinel Playbooks",
        code: "Azure Logic Apps Automated SOAR",
        desc: "Automates routine SOC workflows: alert triage, incident enrichment, account deprovisioning, IP blocking on firewalls, and notifying stakeholders at machine speed."
      },
      {
        title: "XDR + XSOAR Integration",
        code: "Cross-Domain Detection + Automated Remediation",
        desc: "XDR provides unified correlation across endpoints, network, email, and cloud. XSOAR executes automated containment and remediation playbooks in real time."
      },
      {
        title: "AI SIEM: Dynamic Rule Optimization",
        code: "Machine Learning Adaptive Baselines",
        desc: "Automatically adjusts static thresholds based on historical behavior, eliminating repetitive benign alerts and reducing analyst alert fatigue."
      },
      {
        title: "OpenDNS (Cisco Umbrella)",
        code: "DNS-Layer Predictive Threat Protection",
        desc: "Enforces domain-level phishing protection, malware C2 domain blocking, and acceptable use web content filtering at the DNS resolution layer."
      },
      {
        title: "AlienVault OSSIM Reputation Database",
        code: "Path: /etc/ossim/server/reputation.data",
        desc: "Local database of known malicious IP reputations, threat scores, and threat intelligence indicators integrated with SIEM correlation rules."
      }
    ]
  },
  {
    id: "note-os-paths-configs",
    examId: "csa-v2",
    category: "Paths & Configurations",
    title: "Critical Operating System Log Paths & Service Configs",
    description: "Direct reference for default log locations across Linux, Windows IIS, PostgreSQL, and Snort.",
    type: "table",
    headers: ["Platform / System", "Path / Configuration Parameter", "SOC Function & Forensic Utility"],
    rows: [
      ["Microsoft IIS 7.0+", "%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC<SiteID>", "Default directory for W3C web server access and error logs (W3SVC1, W3SVC2)."],
      ["Linux User Logins", "/var/log/wtmp", "Binary database recording all logins, logouts, reboots, and runlevels (read with `last`)."],
      ["Linux Kernel Logs", "/var/log/kern.log", "Kernel logging destination for iptables firewall rules tagged with `-j LOG`."],
      ["PostgreSQL Auditing", "log_collector = on (in postgresql.conf)", "Enables background collector to capture stderr/CSV logs to files for SIEM ingestion."],
      ["Snort IDS Signature", "alert tcp any any -> any 80 content:\"' OR T=T\"", "Signature-based detection rule matching specific SQL injection string patterns in HTTP packets."],
      ["Syslog Relay Proxy", "Intermediate forwarder on branch networks", "Collects logs locally, buffers them during outages, and forwards them to central Syslog Server."]
    ]
  },
  {
    id: "note-risk-metrics",
    examId: "csa-v2",
    category: "Risk & Metrics",
    title: "Risk Assessment Matrix & SOC Performance Metrics",
    description: "Formulas and scoring criteria for risk classification and operational SOC triage.",
    type: "table",
    headers: ["Metric / Concept", "Formula / Criteria", "Classification & Operational Meaning"],
    rows: [
      ["Risk Matrix Rating", "Likely Probability + Significant Impact", "High Severity risk classification in standard enterprise risk assessment matrices."],
      ["Highest Risk Scenario", "High Likelihood + High Impact + High Asset Value", "Maximum overall risk rating requiring immediate executive mitigation."],
      ["False Negative (FN)", "Real attack occurs + NO alert generated", "Most dangerous alert classification representing a blind spot or detection gap in SIEM rules."],
      ["False Positive (FP)", "Benign activity + Alert generated", "Generates noise and contributes to analyst alert fatigue; tuned via Dynamic Rule Optimization."],
      ["True Positive (TP)", "Real attack + Alert generated", "Valid security incident requiring immediate triage and containment."],
      ["True Negative (TN)", "Normal benign activity + NO alert", "Expected baseline state of secure system operations."]
    ]
  }
];
