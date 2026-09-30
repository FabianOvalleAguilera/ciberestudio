// Rapid Active Recall Flashcards for EC-Council CSA v2 (2026 Exam - 200 Qs Bank)
// Each flashcard is directly derived from scenarios, questions, and explanations in the 200 Qs PDF bank.

export const defaultFlashcards = [
  // =========================================================================
  // MODULE 1: SECURITY OPERATIONS & MANAGEMENT
  // =========================================================================
  {
    id: "fc-v2-1",
    examId: "csa-v2",
    category: "Network Architecture",
    front: "What network architecture component is used to isolate public-facing web servers from internal sensitive databases?",
    back: "• Demilitarized Zone (DMZ)\n• Functions as a controlled buffer zone to limit lateral movement and protect internal assets if the web server is compromised.",
    module: 1
  },
  {
    id: "fc-v2-2",
    examId: "csa-v2",
    category: "SOC Management",
    front: "What core principle should guide the design of a real-time SOC security dashboard?",
    back: "• Prioritize critical information and remove unnecessary details.\n• Avoids cognitive overload and alert fatigue, allowing analysts to focus on high-fidelity, high-impact alerts.",
    module: 1
  },
  {
    id: "fc-v2-3",
    examId: "csa-v2",
    category: "Risk Management",
    front: "In a standard Risk Matrix, what severity level is assigned to a threat with 'Likely' probability and 'Significant' impact?",
    back: "• High Severity\n• Combining a 'Likely' probability of occurrence with 'Significant' operational/financial damage results in a High risk rating.",
    module: 1
  },
  {
    id: "fc-v2-4",
    examId: "csa-v2",
    category: "Risk Management",
    front: "Which combination of risk assessment factors represents the highest overall risk to an organization?",
    back: "• High Likelihood + High Impact + High Asset Value\n• Risk is maximized when probability, operational damage, and asset criticality are all at their highest levels.",
    module: 1
  },
  {
    id: "fc-v2-5",
    examId: "csa-v2",
    category: "SOC Roles",
    front: "Which SOC role is critical for acquiring digital evidence, maintaining chain of custody, and establishing incident timelines?",
    back: "• Forensic Analyst (DFIR)\n• Specializes in deep artifact reconstruction, volatile RAM/disk acquisition, timeline creation, and root cause discovery.",
    module: 1
  },
  {
    id: "fc-v2-6",
    examId: "csa-v2",
    category: "SOC Governance",
    front: "Which executive role is responsible for cybersecurity governance, strategy, compliance, and SOC operational charters?",
    back: "• Chief Information Security Officer (CISO)\n• Oversees enterprise risk management, regulatory compliance (HIPAA, PCI-DSS, GDPR), and overall security posture.",
    module: 1
  },
  {
    id: "fc-v2-7",
    examId: "csa-v2",
    category: "Cloud SOC",
    front: "What is the primary role of a Cloud Access Security Broker (CASB)?",
    back: "• Enforces security policies, DLP, conditional access, and compliance between cloud consumers and cloud services (SaaS, PaaS, IaaS).",
    module: 1
  },
  {
    id: "fc-v2-8",
    examId: "csa-v2",
    category: "SOC Metrics",
    front: "What do MTTD and MTTR measure in SOC operational performance?",
    back: "• MTTD (Mean Time to Detect): Average time from initial adversary compromise until detection.\n• MTTR (Mean Time to Respond / Remediate): Average time from detection to full containment and remediation.",
    module: 1
  },

  // =========================================================================
  // MODULE 2: CYBER THREATS, IOCS & ATTACK METHODOLOGIES
  // =========================================================================
  {
    id: "fc-v2-9",
    examId: "csa-v2",
    category: "Web Attacks",
    front: "How does a Directory Traversal (Path Traversal) attack work?",
    back: "• Attacker manipulates URL paths using dot-dot-slash (`../` or `..\\`) sequences to escape the web root and access unauthorized system files (e.g. `/etc/passwd`).",
    module: 2
  },
  {
    id: "fc-v2-10",
    examId: "csa-v2",
    category: "Malware Analysis",
    front: "Static Analysis vs. Dynamic Analysis for suspicious embedded scripts (e.g., PowerShell)?",
    back: "• Static Analysis: Inspecting and de-obfuscating code (base64, strings, functions) WITHOUT executing it (Safe for live investigations).\n• Dynamic Analysis: Executing code in an isolated sandbox to observe runtime behavior.",
    module: 2
  },
  {
    id: "fc-v2-11",
    examId: "csa-v2",
    category: "APT Lifecycle",
    front: "What defines the Persistence phase of the Advanced Persistent Threat (APT) lifecycle?",
    back: "• Establishing mechanisms to maintain long-term access across reboots (e.g. unauthorized scheduled tasks, registry Run/RunOnce keys, rogue services, WMI event subscriptions).",
    module: 2
  },
  {
    id: "fc-v2-12",
    examId: "csa-v2",
    category: "APT Lifecycle",
    front: "What actions occur during the Cleanup (Defense Evasion / Anti-Forensics) phase of an APT?",
    back: "• Deleting or clearing event logs, timestomping files (modifying creation/access dates), wiping temporary scripts, and removing backdoors to evade detection.",
    module: 2
  },
  {
    id: "fc-v2-13",
    examId: "csa-v2",
    category: "Defensive Frameworks",
    front: "What is the MITRE D3FEND framework and how does it relate to MITRE ATT&CK?",
    back: "• MITRE D3FEND is a knowledge graph of defensive techniques (Model, Harden, Isolate, Deceive, Detect, Evict) systematically mapped to adversary tactics in ATT&CK.",
    module: 2
  },
  {
    id: "fc-v2-14",
    examId: "csa-v2",
    category: "Web Security",
    front: "How can Cross-Site Scripting (XSS) attacks be eradicated at the application layer?",
    back: "• Converting all non-alphanumeric characters into HTML character entities (e.g. `<` to `&lt;`, `>` to `&gt;`) before rendering user input, plus implementing Content Security Policy (CSP).",
    module: 2
  },
  {
    id: "fc-v2-15",
    examId: "csa-v2",
    category: "Password Attacks",
    front: "What is a Hybrid Password Attack?",
    back: "• Combines a dictionary wordlist with rule-based permutations (appending numbers, special symbols, and leetspeak substitutions) to crack passwords efficiently.",
    module: 2
  },
  {
    id: "fc-v2-16",
    examId: "csa-v2",
    category: "Web Attacks",
    front: "What indicates a Blind / Time-based SQL Injection in database web logs?",
    back: "• Queries containing SQL time delays and string functions (e.g. `WAITFOR DELAY '0:0:5'`, `UNICODE(SUBSTRING(...))`, `pg_sleep()`) used by attackers to infer data character-by-character.",
    module: 2
  },
  {
    id: "fc-v2-17",
    examId: "csa-v2",
    category: "Threat Protection",
    front: "Which service provides DNS-layer predictive phishing protection and web content filtering?",
    back: "• OpenDNS (Cisco Umbrella)\n• Enforces domain-level security blocking, malware C2 prevention, and content filtering at the DNS resolution layer.",
    module: 2
  },

  // =========================================================================
  // MODULE 3: INCIDENTS, EVENTS & LOGGING
  // =========================================================================
  {
    id: "fc-v2-18",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "Windows Security Event ID 4616 & 4618 (Defense Evasion)",
    back: "• Event ID 4616: 'The system time was changed' (critical indicator of timestomping or event log manipulation).\n• Event ID 4618: Monitored security-sensitive event patterns and audit condition anomalies.",
    module: 3
  },
  {
    id: "fc-v2-19",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "Windows Event ID 4624: Logon Type 2 vs Type 3 vs Type 10",
    back: "• Type 2: Interactive (Local console logon via direct keyboard).\n• Type 3: Network (Remote connection to SMB shares / IIS / lateral movement).\n• Type 10: RemoteInteractive (Remote Desktop Protocol / RDP connection).",
    module: 3
  },
  {
    id: "fc-v2-20",
    examId: "csa-v2",
    category: "Windows Lateral Movement",
    front: "What does a burst of Event ID 4624 Logon Type 3 + TCP/IP NetBIOS Helper service indicate?",
    back: "• Lateral Movement within the internal network (e.g., adversary using Pass-the-Hash, PsExec, or WMI execution across multiple endpoints).",
    module: 3
  },
  {
    id: "fc-v2-21",
    examId: "csa-v2",
    category: "Log Architecture",
    front: "What is the role of a Syslog Relay in a distributed enterprise network?",
    back: "• Acts as an intermediate forwarder in remote offices: collects local logs, buffers them during outages, and securely forwards them across WAN to the central Syslog Server.",
    module: 3
  },
  {
    id: "fc-v2-22",
    examId: "csa-v2",
    category: "Web Server Logs",
    front: "Common Log Format (CLF) vs. Extended Log Format (ELF)",
    back: "• CLF: `RemoteHost Ident AuthUser [Date] \"Request\" Status Bytes`\n• ELF (Combined): Adds `Referer` and `User-Agent` fields, crucial for identifying automated scanner tools and bot user agents.",
    module: 3
  },
  {
    id: "fc-v2-23",
    examId: "csa-v2",
    category: "Log Storage",
    front: "Why is Cloud Storage optimal for long-term regulatory compliance log retention?",
    back: "• Provides elastic scalability, built-in encryption at rest/in transit, tiered archival pricing (e.g. Glacier/Coldline), and high availability across data centers.",
    module: 3
  },
  {
    id: "fc-v2-24",
    examId: "csa-v2",
    category: "Database Logging",
    front: "Which parameter must be enabled in `postgresql.conf` for centralized log auditing?",
    back: "• `log_collector = on` (or `logging_collector = on`)\n• Enables the background collector process to capture stderr/CSV logs and write them to disk for SIEM log shipping.",
    module: 3
  },
  {
    id: "fc-v2-25",
    examId: "csa-v2",
    category: "Log Parsing",
    front: "What are Grok Filters and when are they used in SIEM ingestion pipelines?",
    back: "• Regex-based pattern matching syntax (e.g. `%{IP:client_ip}`)\n• Used to parse and structure unstructured or semi-structured raw log lines into named, searchable key-value fields.",
    module: 3
  },
  {
    id: "fc-v2-26",
    examId: "csa-v2",
    category: "Regular Expressions",
    front: "Which regex pattern extracts all 3-digit and 6-digit hexadecimal codes from logs?",
    back: "• `([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})`\n• Matches hex sequences (colors, hashes, encoded payload snippets) with uppercase and lowercase hex characters.",
    module: 3
  },
  {
    id: "fc-v2-27",
    examId: "csa-v2",
    category: "HTTP Status Codes",
    front: "HTTP Status Code Ranges: 2XX, 4XX, 5XX",
    back: "• 2XX: Success (e.g. 200 OK).\n• 4XX: Client Error (e.g. 401 Unauthorized, 403 Forbidden, 404 Not Found).\n• 5XX: Server Error (e.g. 500 Internal Server Error, 502 Bad Gateway).",
    module: 3
  },

  // =========================================================================
  // MODULE 4: INCIDENT DETECTION WITH SIEM
  // =========================================================================
  {
    id: "fc-v2-28",
    examId: "csa-v2",
    category: "SIEM Deployment",
    front: "What should be the very first phase in an enterprise SIEM deployment strategy?",
    back: "• Set up the log management component (collection, normalization, parsing, storage) BEFORE deploying analytics or correlation rules.",
    module: 4
  },
  {
    id: "fc-v2-29",
    examId: "csa-v2",
    category: "Cloud SOAR",
    front: "Which component of Microsoft Sentinel is used to create automated response workflows?",
    back: "• Microsoft Sentinel Playbooks (powered by Azure Logic Apps)\n• Automates alert triage, account deprovisioning, IP blocking, and incident ticket updates at machine speed.",
    module: 4
  },
  {
    id: "fc-v2-30",
    examId: "csa-v2",
    category: "Detection Engineering",
    front: "Signature-Based Detection vs. Anomaly-Based Detection",
    back: "• Signature-Based: Matches known byte patterns (e.g. Snort rule `' OR T=T`).\n• Anomaly-Based: Flags statistical deviations from an established baseline (e.g. 500 MB outbound transfer vs 5 MB/hr normal baseline).",
    module: 4
  },
  {
    id: "fc-v2-31",
    examId: "csa-v2",
    category: "AI in SIEM",
    front: "How does Dynamic Rule Optimization with AI reduce SOC analyst alert fatigue?",
    back: "• Uses machine learning baselines to dynamically adjust detection thresholds and suppress repetitive benign noise, eliminating false positives.",
    module: 4
  },
  {
    id: "fc-v2-32",
    examId: "csa-v2",
    category: "Alert Classification",
    front: "What is a False Negative in SIEM detection, and why is it dangerous?",
    back: "• A False Negative occurs when a real attack takes place, but security controls fail to detect it or raise an alert (detection gap — highest risk).",
    module: 4
  },
  {
    id: "fc-v2-33",
    examId: "csa-v2",
    category: "SOC Architecture",
    front: "Why integrate Extended Detection and Response (XDR) with XSOAR?",
    back: "• XDR provides high-fidelity cross-domain detection (endpoint, network, cloud, email).\n• XSOAR executes automated playbooks to remediate and contain incidents in real time.",
    module: 4
  },
  {
    id: "fc-v2-34",
    examId: "csa-v2",
    category: "SIEM Use Cases",
    front: "After validating telemetry event sources, what is the next step in SIEM use case development?",
    back: "• Define correlation rules, logic, and conditions that detect the specific threat pattern (e.g. threshold, timing window, key fields).",
    module: 4
  },

  // =========================================================================
  // MODULE 5: ENHANCED DETECTION WITH THREAT INTELLIGENCE
  // =========================================================================
  {
    id: "fc-v2-35",
    examId: "csa-v2",
    category: "Threat Intelligence",
    front: "What is Data Integration in modern Threat Hunting?",
    back: "• Aggregating, normalizing, and correlating external threat intelligence feeds with internal endpoint telemetry, firewall logs, and network flows.",
    module: 5
  },
  {
    id: "fc-v2-36",
    examId: "csa-v2",
    category: "Threat Hunting",
    front: "What is Unstructured Threat Hunting?",
    back: "• Analyst-driven exploration initiated from an anomalous, weak signal (e.g. periodic encrypted bursts without known IoCs) to discover Indicators of Attack (IoAs).",
    module: 5
  },
  {
    id: "fc-v2-37",
    examId: "csa-v2",
    category: "Intelligence Disciplines",
    front: "What is Human Intelligence (HUMINT) in Cyber Threat Intelligence?",
    back: "• Intelligence gathered through interpersonal interactions, social engineering analysis, insider interviews, deception detection, and psychological profiling.",
    module: 5
  },
  {
    id: "fc-v2-38",
    examId: "csa-v2",
    category: "CTI Standards",
    front: "Difference between STIX and TAXII",
    back: "• STIX (Structured Threat Information Expression): Language specifying WHAT the threat is (JSON format for IoCs, actors, TTPs).\n• TAXII: Application protocol over HTTPS specifying HOW STIX feeds are transported and shared.",
    module: 5
  },
  {
    id: "fc-v2-39",
    examId: "csa-v2",
    category: "CTI Sharing",
    front: "Traffic Light Protocol (TLP 2.0) Definitions",
    back: "• TLP:RED: Restricted to named individual recipients only.\n• TLP:AMBER / AMBER+STRICT: Restricted to the organization on need-to-know basis.\n• TLP:GREEN: Shareable within trusted community peers.\n• TLP:CLEAR: Publicly shareable without restrictions.",
    module: 5
  },
  {
    id: "fc-v2-40",
    examId: "csa-v2",
    category: "Adversary Profiling",
    front: "Pyramid of Pain: Top vs. Bottom Indicators",
    back: "• Bottom (Trivial to change): File Hashes (MD5, SHA256) and IP Addresses.\n• Middle: Domain Names, Network/Host Artifacts, Tools.\n• Top (Toughest / Most Painful to change): Adversary TTPs (Tactics, Techniques, and Procedures).",
    module: 5
  },

  // =========================================================================
  // MODULE 6: INCIDENT RESPONSE (IR)
  // =========================================================================
  {
    id: "fc-v2-41",
    examId: "csa-v2",
    category: "Incident Response",
    front: "What are the 4 main phases of NIST SP 800-61 Rev 2?",
    back: "1. Preparation\n2. Detection and Analysis (Triage & Validation)\n3. Containment, Eradication, and Recovery\n4. Post-Incident Activity (Lessons Learned)",
    module: 6
  },
  {
    id: "fc-v2-42",
    examId: "csa-v2",
    category: "SOAR Containment",
    front: "Which SOAR playbook is adapted when an account shows impossible travel or off-hours logins?",
    back: "• Deprovisioning Users SOAR Playbook\n• Automatically disables the account, invalidates active sessions, and revokes OAuth refresh tokens immediately to stop dwell time.",
    module: 6
  },
  {
    id: "fc-v2-43",
    examId: "csa-v2",
    category: "IR Triage",
    front: "What is the primary objective of the Incident Triage phase?",
    back: "• Rapid initial assessment to validate alert credibility, eliminate false positives, determine attack scope, and assign initial severity.",
    module: 6
  },
  {
    id: "fc-v2-44",
    examId: "csa-v2",
    category: "IR Phishing Analysis",
    front: "What is 'User Action Verification' during phishing containment?",
    back: "• Analyzing email gateway, proxy, and identity logs to determine exactly how users interacted with the email (opened, clicked URL, submitted credentials, downloaded attachment).",
    module: 6
  },
  {
    id: "fc-v2-45",
    examId: "csa-v2",
    category: "IR Eradication",
    front: "What eradication action directly addresses underlying system weaknesses exploited by malware?",
    back: "• 'Fixing Devices'\n• Applying emergency security patches (KB updates), removing misconfigurations, and hardening device baselines to prevent reinfection.",
    module: 6
  },
  {
    id: "fc-v2-46",
    examId: "csa-v2",
    category: "DDoS Mitigation",
    front: "How does 'Neutralizing Handlers' eradicate a botnet-driven DDoS attack?",
    back: "• Severs the adversary's control by sinkholing or blocking the command-and-control (C2) handler servers directing the infected zombie nodes.",
    module: 6
  },
  {
    id: "fc-v2-47",
    examId: "csa-v2",
    category: "Digital Forensics",
    front: "What is Chain of Custody in forensic evidence collection?",
    back: "• Detailed chronological documentation recording who collected, handled, transferred, analyzed, and stored digital evidence to maintain legal admissibility.",
    module: 6
  },
  {
    id: "fc-v2-48",
    examId: "csa-v2",
    category: "Live Forensics",
    front: "Why must RAM dumps be collected before rebooting or powering down an infected machine?",
    back: "• RAM contains volatile evidence (running processes, injected DLLs, unencrypted network sockets, decrypted encryption keys) that is permanently lost upon power loss.",
    module: 6
  },
  {
    id: "fc-v2-49",
    examId: "csa-v2",
    category: "IRT Escalation",
    front: "What is the FIRST action an Incident Response Team (IRT) performs upon receiving an escalated ticket?",
    back: "• Incident Analysis and Validation\n• Verifies forensic indicators, confirms the incident scope, and validates that it is a genuine security breach before initiating response actions.",
    module: 6
  },
  {
    id: "fc-v2-50",
    examId: "csa-v2",
    category: "Post-Incident Review",
    front: "What activities occur in the Post-Incident Review phase (Lessons Learned)?",
    back: "• Reviewing incident timeline, calculating financial & business downtime impact (e.g. Sarah's $157k review), identifying gaps, and updating playbooks & detection rules.",
    module: 6
  },
  // =========================================================================
  // MODULE 3 & 4: LOG ANALYSIS & SIEM DEEP-DIVE FLASHCARDS
  // =========================================================================
  {
    id: "fc-v2-log-1",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "What does Windows Event ID 4624 indicate, and why is Logon Type critical?",
    back: "• Event ID 4624: Successful Account Logon.\n• Logon Type identifies the connection vector: Type 2 = Local Interactive, Type 3 = Network (SMB/Lateral Movement), Type 10 = Remote Desktop (RDP).",
    module: 3
  },
  {
    id: "fc-v2-log-2",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "What does Windows Event ID 4625 represent, and what does Sub-Status 0xC000006A mean?",
    back: "• Event ID 4625: Failed Account Logon.\n• Sub-Status 0xC000006A indicates 'Wrong Password' (user exists). High bursts on a single user indicate Brute-Force; across many users indicate Password Spray.",
    module: 3
  },
  {
    id: "fc-v2-log-3",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "What is the meaning of Windows Event ID 1102 versus Event ID 104?",
    back: "• Event ID 1102: The Security Audit Log was cleared (Critical anti-forensics indicator).\n• Event ID 104: The System or Application Log was cleared.",
    module: 3
  },
  {
    id: "fc-v2-log-4",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "Which Windows Event ID records the installation of a new system service?",
    back: "• Event ID 7045 (in System log) / Event ID 4697 (in Security log).\n• Critical indicator for adversary persistence and PsExec/lateral movement execution.",
    module: 3
  },
  {
    id: "fc-v2-log-5",
    examId: "csa-v2",
    category: "Windows Event Logs",
    front: "What does Event ID 4688 with CommandLine auditing reveal to a SOC analyst?",
    back: "• New Process Created.\n• CommandLine auditing captures exact process execution arguments (e.g. `powershell.exe -ExecutionPolicy Bypass -enc ...`).",
    module: 3
  },
  {
    id: "fc-v2-log-6",
    examId: "csa-v2",
    category: "Active Directory Logs",
    front: "What do Kerberos Event IDs 4768, 4769, and 4771 signify?",
    back: "• 4768: Kerberos TGT Ticket Request (AS-REQ/AS-REP).\n• 4769: Kerberos Service Ticket Request (TGS-REQ - Kerberoasting indicator when RC4/0x17).\n• 4771: Kerberos Pre-Authentication Failed (Failure Code 0x18 = bad password / AS-REP Roasting).",
    module: 3
  },
  {
    id: "fc-v2-log-7",
    examId: "csa-v2",
    category: "Sysmon Logs",
    front: "What threat activities are detected by Sysmon Event ID 1, Event ID 8, and Event ID 10?",
    back: "• Event 1: Process Creation (parent-child lineage, command line, hashes).\n• Event 8: CreateRemoteThread (Process Injection into explorer.exe/svchost.exe).\n• Event 10: ProcessAccess (Handle to lsass.exe for Mimikatz credential dumping).",
    module: 3
  },
  {
    id: "fc-v2-log-8",
    examId: "csa-v2",
    category: "Syslog Standards",
    front: "What is the numeric range and meaning of Syslog Severity levels (RFC 5424)?",
    back: "• Levels 0 to 7:\n0 = Emergency (Panic) | 1 = Alert | 2 = Critical | 3 = Error | 4 = Warning | 5 = Notice | 6 = Informational | 7 = Debug.\n• Mnemonic: 'Every Alien Can Easily Win New Intergalactic Dogfights'.",
    module: 3
  },
  {
    id: "fc-v2-log-9",
    examId: "csa-v2",
    category: "Syslog Standards",
    front: "How is the Syslog Priority (PRI) value calculated in RFC 5424?",
    back: "• Formula: PRI = (Facility * 8) + Severity.\n• Example: Facility `auth` (4) + Severity `crit` (2) = (4 * 8) + 2 = 34 -> Represented as `<34>` in the syslog header.",
    module: 3
  },
  {
    id: "fc-v2-log-10",
    examId: "csa-v2",
    category: "Linux Logs",
    front: "What is recorded in /var/log/wtmp versus /var/log/btmp and /var/log/lastlog?",
    back: "• /var/log/wtmp: Successful user logins, logouts, and reboots (read with `last`).\n• /var/log/btmp: Bad/failed login attempts (read with `lastb`).\n• /var/log/lastlog: Most recent login timestamp and IP for every user (read with `lastlog`).",
    module: 3
  },
  {
    id: "fc-v2-log-11",
    examId: "csa-v2",
    category: "Linux Logs",
    front: "Where are Linux SSH authentication and sudo elevation logs stored on Ubuntu vs RHEL?",
    back: "• Ubuntu / Debian: `/var/log/auth.log`\n• RHEL / CentOS: `/var/log/secure`\n• Both capture PAM authentication failures, accepted public keys, and sudo privilege executions.",
    module: 3
  },
  {
    id: "fc-v2-log-12",
    examId: "csa-v2",
    category: "Web Server Logs",
    front: "What do the W3C log field prefixes `s-`, `c-`, `cs-`, and `sc-` mean in Microsoft IIS logs?",
    back: "• `s-`: Server property (e.g. `s-ip`, `s-port`).\n• `c-`: Client property (e.g. `c-ip`).\n• `cs-`: Client-to-Server request (e.g. `cs-method`, `cs-uri-stem`, `cs-uri-query`, `cs(User-Agent)`).\n• `sc-`: Server-to-Client response (e.g. `sc-status`, `sc-substatus`, `sc-bytes`).",
    module: 3
  },
  {
    id: "fc-v2-log-13",
    examId: "csa-v2",
    category: "Web Server Logs",
    front: "What default directory contains Microsoft IIS 7.0+ W3C web access logs?",
    back: "• `%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC<SiteID>`\n• Site 1 logs to `W3SVC1`, Site 2 logs to `W3SVC2`, named `u_exYYMMDD.log`.",
    module: 3
  },
  {
    id: "fc-v2-log-14",
    examId: "csa-v2",
    category: "Web Attack Signatures",
    front: "What regex pattern is used to detect Directory / Path Traversal in web server logs?",
    back: "• `/(.|(%|%25)2E)(.|(%|%25)2E)(\\/|(%|%25)2F|\\\\|(%|%25)5C)/i`\n• Decodes hexadecimal and URL-encoded representations of `../` and `..\\` sequences.",
    module: 4
  },
  {
    id: "fc-v2-log-15",
    examId: "csa-v2",
    category: "Snort IDS Logs",
    front: "What is the general syntax and action structure of a Snort IDS rule?",
    back: "• `[Action] [Protocol] [Src_IP] [Src_Port] [Direction ->] [Dst_IP] [Dst_Port] ( [Rule Options] )`\n• Example: `alert tcp any any -> any 80 (msg:\"SQLi\"; content:\"' OR T=T\"; sid:1000001;)`",
    module: 4
  },
  {
    id: "fc-v2-log-16",
    examId: "csa-v2",
    category: "DNS Log Analysis",
    front: "How do SOC analysts detect DNS Tunneling and data exfiltration from DNS query logs?",
    back: "• Abnormally high query volume to single domain.\n• High entropy, long randomized subdomains (e.g. `aW5maWx0cmF0aW9u.attacker.com`).\n• High ratio of `TXT` or `NULL` record query types carrying encoded payloads.",
    module: 4
  },
  {
    id: "fc-v2-log-17",
    examId: "csa-v2",
    category: "SIEM Architecture",
    front: "What are the 7 core stages of the SIEM Log Processing Pipeline?",
    back: "1. Log Ingestion / Collection\n2. Parsing / Field Extraction\n3. Normalization (CEF/LEEF/CIM)\n4. Enrichment (GeoIP, Asset, CTI)\n5. Indexing & Storage\n6. Correlation & Alerting\n7. Visualization & Automated SOAR Response.",
    module: 4
  },
  {
    id: "fc-v2-log-18",
    examId: "csa-v2",
    category: "Database Logs",
    front: "What parameter must be set to 'on' in `postgresql.conf` to enable background log collection?",
    back: "• `log_collector = on`\n• Directs PostgreSQL to capture stderr and CSV log outputs to disk files for SIEM ingestion.",
    module: 3
  }
];
