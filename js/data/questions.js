// Official 115+ Practice Question Bank for EC-Council CSA (312-39) - English
// Validated and curated with detailed technical explanations.

export const initialQuestions = [
  // =========================================================================
  // SALAH AL-ATTAR QUESTIONS (q1 to q100)
  // =========================================================================
  {
    id: "csa-q1",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following tools is BEST suited to inspect and block HTTP requests containing SQL injection payloads?",
    options: [
      "Nmap",
      "URL filtering module on a Web Application Firewall (WAF)",
      "WHOIS",
      "Traceroute"
    ],
    correctAnswer: 1,
    explanation: "A Web Application Firewall (WAF) operates at Layer 7 (Application) to inspect inbound HTTP/HTTPS traffic and block web application attacks like SQL Injection, XSS, and parameter tampering.",
    difficulty: "Easy"
  },
  {
    id: "csa-q2",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "An attacker leverages a publicly known vulnerability in a web server before the organization has applied a patch. This scenario BEST describes:",
    options: [
      "Slow DoS attack",
      "Vulnerability exposure window / Zero-day / N-Day exploitation",
      "DNS poisoning",
      "DHCP spoofing"
    ],
    correctAnswer: 1,
    explanation: "This describes the window of exposure where an unpatched vulnerability is actively exploited prior to organizational patch deployment.",
    difficulty: "Easy"
  },
  {
    id: "csa-q3",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "What is the MOST appropriate first phase in a typical SOC monitoring workflow?",
    options: [
      "Incident response",
      "Evidence preservation",
      "Event and log collection",
      "Ticket closure"
    ],
    correctAnswer: 2,
    explanation: "Before any analysis or detection can occur, the SOC must first ingest, normalize, and collect logs and telemetry across the network and endpoints.",
    difficulty: "Easy"
  },
  {
    id: "csa-q4",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "An L2 SOC analyst validates that a suspicious alert is a true security incident and assigns an initial priority. What should be the NEXT step?",
    options: [
      "Announce the incident on social media",
      "Open and update an incident ticket",
      "Power off the affected server",
      "Notify all employees by email"
    ],
    correctAnswer: 1,
    explanation: "Once validated as a true positive with assigned severity, the incident ticket must be formally created and updated to document all triage context for the Incident Response Team (IRT).",
    difficulty: "Easy"
  },
  {
    id: "csa-q5",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A user receives an email with a link that loads: 'http://example.com/welcome.php?name=<script>alert(\"X\");</script>'. This is an example of:",
    options: [
      "SQL injection",
      "Cross-Site Scripting (Reflected XSS)",
      "Directory traversal",
      "Session hijacking"
    ],
    correctAnswer: 1,
    explanation: "Injecting executable JavaScript payload tags via URL parameters that reflect back into the victim's browser is classic Reflected Cross-Site Scripting (XSS).",
    difficulty: "Easy"
  },
  {
    id: "csa-q6",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A malicious user changes the product price parameter in the URL from 'price=500' to 'price=5' and completes the purchase. Which attack BEST fits this behavior?",
    options: [
      "Session fixation",
      "Parameter tampering",
      "Cross-Site Request Forgery (CSRF)",
      "DNS rebinding"
    ],
    correctAnswer: 1,
    explanation: "Parameter Tampering involves manipulating client-side parameters (in URLs, hidden form fields, or cookies) that the backend fails to validate server-side.",
    difficulty: "Easy"
  },
  {
    id: "csa-q7",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A SOC analyst sees IDS alerts that match signatures for '<img' tags with suspicious attributes being injected into pages. This MOST likely indicates:",
    options: [
      "Directory traversal attempts",
      "XML injection (XXE)",
      "Cross-Site Scripting (XSS) attacks",
      "Command injection"
    ],
    correctAnswer: 2,
    explanation: "Constructs like `<img src=x onerror=alert(1)>` are commonly used in XSS vectors to bypass basic `<script>` tag filters.",
    difficulty: "Medium"
  },
  {
    id: "csa-q8",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A crafted URL allows an attacker to read '/etc/passwd' by repeatedly using '../' in the path. This is BEST classified as:",
    options: [
      "Directory traversal (Path Traversal / Dot-Dot-Slash)",
      "SQL injection",
      "Denial of Service (DoS)",
      "SMTP relay abuse"
    ],
    correctAnswer: 0,
    explanation: "Directory Traversal exploits insufficient input sanitization of `../` sequences to escape the webroot and access unauthorized operating system files.",
    difficulty: "Easy"
  },
  {
    id: "csa-q9",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Cyber threat intelligence often helps SOC teams understand adversaries' TTPs. TTP stands for:",
    options: [
      "Threats, Techniques, and Policies",
      "Tactics, Techniques, and Procedures",
      "Targets, Tools, and Processes",
      "Tactics, Threats, and Priorities"
    ],
    correctAnswer: 1,
    explanation: "TTPs stands for Tactics, Techniques, and Procedures, defining the behavioral methodologies and patterns of threat actors.",
    difficulty: "Easy"
  },
  {
    id: "csa-q10",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Collecting publicly available information about a target environment before exploitation primarily falls under:",
    options: [
      "Ransomware deployment",
      "DoS execution",
      "Reconnaissance (OSINT)",
      "Privilege escalation"
    ],
    correctAnswer: 2,
    explanation: "Reconnaissance is the initial phase of the Cyber Kill Chain where adversaries discover and profile target assets using open-source intelligence and scans.",
    difficulty: "Easy"
  },
  {
    id: "csa-q11",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Capturing and inspecting packets traveling across a network segment using tools like Wireshark or TCPDump is known as:",
    options: [
      "Port scanning",
      "Network sniffing (Packet capture)",
      "DNS footprinting",
      "Banner grabbing"
    ],
    correctAnswer: 1,
    explanation: "Network Sniffing involves capturing and analyzing raw frame data across network segments in promiscuous mode.",
    difficulty: "Easy"
  },
  {
    id: "csa-q12",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A password attack that tries common words plus small variations like 'P@ssw0rd1' or 'Summer2024!' is BEST described as:",
    options: [
      "Rainbow table attack",
      "Hybrid attack",
      "Birthday attack",
      "Plain dictionary attack"
    ],
    correctAnswer: 1,
    explanation: "A hybrid attack takes dictionary base words and applies mutation rules, numbers, special characters, and leetspeak substitutions.",
    difficulty: "Medium"
  },
  {
    id: "csa-q13",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which password attack relies on a precomputed table of hashes mapped to their original plaintext passwords?",
    options: [
      "Brute force attack",
      "Rainbow table attack",
      "Syllable attack",
      "Shoulder surfing"
    ],
    correctAnswer: 1,
    explanation: "Rainbow tables use precomputed hash reduction chains to crack unsalted password hashes in minimal time at the expense of storage.",
    difficulty: "Easy"
  },
  {
    id: "csa-q14",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "An attacker floods the DHCP server with bogus requests to exhaust the address pool so that legitimate users cannot obtain IPs. This is called:",
    options: [
      "DHCP spoofing",
      "DHCP starvation",
      "DHCP poisoning",
      "ARP pollution"
    ],
    correctAnswer: 1,
    explanation: "DHCP Starvation broadcasts thousands of bogus DHCP Discover requests with spoofed MAC addresses to deplete the IP address pool.",
    difficulty: "Medium"
  },
  {
    id: "csa-q15",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In a push-based log collection model:",
    options: [
      "The SIEM polls each device on schedule",
      "Devices and agents send logs automatically to the collector in real-time",
      "Logs are only stored locally on endpoints",
      "Logs must be manually exported by administrators"
    ],
    correctAnswer: 1,
    explanation: "In push-based ingestion (such as Syslog or WEF), devices automatically forward events to the central listener immediately as they occur.",
    difficulty: "Easy"
  },
  {
    id: "csa-q16",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A log storage method where older records are overwritten when the maximum capacity is reached is called:",
    options: [
      "FIFO non-wrapping",
      "LIFO",
      "Mirrored logging",
      "Wrapping buffer (Circular logging)"
    ],
    correctAnswer: 3,
    explanation: "A wrapping buffer (circular log) overwrites the oldest events when maximum file size is reached, preventing disk exhaustion.",
    difficulty: "Medium"
  },
  {
    id: "csa-q17",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In Windows event logs, which field often tags events with labels like 'Response Time' or 'Correlation Hint'?",
    options: [
      "Keywords",
      "Task Category",
      "Level",
      "Source"
    ],
    correctAnswer: 0,
    explanation: "The 'Keywords' attribute in Windows Event Viewer categorizes events with built-in audit tags such as Audit Success, Audit Failure, Response Time, or Correlation Hint.",
    difficulty: "Hard"
  },
  {
    id: "csa-q18",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A Windows event log entry that indicates a potential future issue but not an immediate failure is typically classified as:",
    options: [
      "Error",
      "Information",
      "Warning",
      "Critical"
    ],
    correctAnswer: 2,
    explanation: "A Warning event indicates an abnormal condition (like low disk space) that does not stop service immediately but may cause future issues.",
    difficulty: "Easy"
  },
  {
    id: "csa-q19",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "When a device driver loads correctly in Windows, which event type is most appropriate?",
    options: [
      "Error",
      "Information",
      "Warning",
      "Failure audit"
    ],
    correctAnswer: 1,
    explanation: "Normal system operations and successful driver loads are classified as 'Information' severity.",
    difficulty: "Easy"
  },
  {
    id: "csa-q20",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "To enable auditing of security-related actions in Windows, an administrator primarily uses:",
    options: [
      "Windows Firewall console",
      "Local Group Policy Editor (gpedit.msc / secpol.msc)",
      "Device Manager",
      "Task Scheduler"
    ],
    correctAnswer: 1,
    explanation: "Security audit policies (Logon events, Object access, Privilege use) are configured via Group Policy or Local Security Policy under 'Local Policies > Audit Policy'.",
    difficulty: "Easy"
  },

  // --- PREGUNTAS 21 A 40 ---
  {
    id: "csa-q21",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In Syslog severity levels (0–7), level 0 corresponds to:",
    options: [
      "Emergency (System is unusable)",
      "Alert",
      "Warning",
      "Notice"
    ],
    correctAnswer: 0,
    explanation: "Syslog severity 0 is 'Emergency' (Panic), indicating total system failure.",
    difficulty: "Easy"
  },
  {
    id: "csa-q22",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In Syslog severity levels, which level is typically used for immediate action alerts (e.g., primary database down)?",
    options: [
      "Level 1 (Alert)",
      "Level 2 (Critical)",
      "Level 3 (Error)",
      "Level 6 (Informational)"
    ],
    correctAnswer: 0,
    explanation: "Level 1 is 'Alert', meaning immediate corrective action is mandatory.",
    difficulty: "Medium"
  },
  {
    id: "csa-q23",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On macOS, which directory commonly stores many core system and security logs?",
    options: [
      "/private/var/log",
      "/tmp/log",
      "/etc/syslogs",
      "/usr/local/logs"
    ],
    correctAnswer: 0,
    explanation: "macOS stores traditional BSD system and daemon logs in `/private/var/log`.",
    difficulty: "Medium"
  },
  {
    id: "csa-q24",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A firewall log entry with severity '5' on many devices often means:",
    options: [
      "Critical condition",
      "Warning condition",
      "Notice / Normal but significant condition",
      "Emergency"
    ],
    correctAnswer: 2,
    explanation: "In standard Syslog RFC 5424, severity 5 is 'Notice', which denotes normal operational messages of administrative interest.",
    difficulty: "Easy"
  },
  {
    id: "csa-q25",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In many firewall CLI tools, adding a flag that disables DNS lookup when listing logs (e.g. -n) is used to:",
    options: [
      "Reduce output verbosity",
      "Speed up log display",
      "Filter only denied traffic",
      "Show only NAT translations"
    ],
    correctAnswer: 1,
    explanation: "Disabling reverse DNS lookups prevents latency delays, rendering IP addresses immediately on the console.",
    difficulty: "Easy"
  },
  {
    id: "csa-q26",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC analyst issues the command 'show logging | include 310' on a Cisco router. The purpose is to:",
    options: [
      "View only logs about access control list (ACL) 310",
      "Clear logs with ID 310",
      "Only show connection resets",
      "Archive the last 310 entries"
    ],
    correctAnswer: 0,
    explanation: "The `include 310` pipe filter matches output lines containing the string '310', filtering for ACL 310 entries.",
    difficulty: "Easy"
  },
  {
    id: "csa-q27",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "In a SIEM architecture, an agent that normalizes and forwards data from endpoints is primarily responsible for:",
    options: [
      "Data visualization",
      "Correlation rule creation",
      "Parsing and normalization",
      "Report scheduling"
    ],
    correctAnswer: 2,
    explanation: "Parsers ingest heterogeneous logs, extract critical key-value pairs, and map them to standard schema fields (such as CIM/ECS).",
    difficulty: "Easy"
  },
  {
    id: "csa-q28",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "After selecting which data sources to onboard into a SIEM, the NEXT step is typically to:",
    options: [
      "Define monitoring requirements and use cases",
      "Replace all legacy systems",
      "Disable default alerts",
      "Delete baseline logs"
    ],
    correctAnswer: 0,
    explanation: "Defining specific security use cases and detection rules aligns log ingestion with business risk and threat visibility.",
    difficulty: "Medium"
  },
  {
    id: "csa-q29",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "If an organization observes 600 security-relevant events over 60 seconds, the Events Per Second (EPS) is:",
    options: [
      "5 EPS",
      "10 EPS",
      "60 EPS",
      "600 EPS"
    ],
    correctAnswer: 1,
    explanation: "600 events divided by 60 seconds = 10 Events Per Second (EPS).",
    difficulty: "Easy"
  },
  {
    id: "csa-q30",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which factor MOST influences whether a SIEM should be centralized, distributed, or hybrid?",
    options: [
      "Number of help desk tickets",
      "Network topology, size, and geographic distribution",
      "Number of HR employees",
      "Color of network racks"
    ],
    correctAnswer: 1,
    explanation: "Network topology, bandwidth limits between remote sites, and multicloud presence dictate whether distributed log collectors are needed.",
    difficulty: "Easy"
  },
  {
    id: "csa-q31",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "An organization collects logs internally but outsources correlation, alerting, and reporting to a third party. This is BEST described as:",
    options: [
      "Self-hosted, self-managed SIEM",
      "Self-hosted, MSSP-managed SIEM",
      "Cloud-only SIEM",
      "No SIEM deployment"
    ],
    correctAnswer: 1,
    explanation: "In a Co-managed / MSSP model, the customer hosts data on-premise or in their private cloud while an MSSP handles 24/7 monitoring.",
    difficulty: "Medium"
  },
  {
    id: "csa-q32",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A company uses a cloud SIEM where the vendor hosts and manages both storage and analytics, while the customer only views dashboards. This model is:",
    options: [
      "On-prem, self-managed",
      "Hybrid, jointly managed",
      "Cloud, vendor-managed (SaaS SIEM)",
      "Self-hosted, MSSP-managed"
    ],
    correctAnswer: 2,
    explanation: "In a SaaS SIEM deployment, the vendor manages infrastructure, scaling, and maintenance while the customer consumes analytics.",
    difficulty: "Easy"
  },
  {
    id: "csa-q33",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A SIEM correlation rule detects the sequence 'login failure, login success, privilege escalation' within 5 minutes for the same account. This rule is based on:",
    options: [
      "Statistical anomaly",
      "Event sequence correlation",
      "Reputation scoring",
      "Time-of-day filtering"
    ],
    correctAnswer: 1,
    explanation: "Sequence correlation tracks an ordered chain of related events occurring within a sliding time window.",
    difficulty: "Medium"
  },
  {
    id: "csa-q34",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Logs from a web server show many requests containing classic '<script>' strings attempting to inject JavaScript. To detect this, the SIEM mostly uses:",
    options: [
      "Network flow records",
      "Web server access logs",
      "DHCP logs",
      "DNS logs"
    ],
    correctAnswer: 1,
    explanation: "Web server access logs (Apache, Nginx, IIS) capture URI query strings and payloads submitted in HTTP requests.",
    difficulty: "Easy"
  },
  {
    id: "csa-q35",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A regular expression rule in the SIEM detects patterns of '../' repeated in URLs. This rule is primarily looking for:",
    options: [
      "XSS attempts",
      "SQL injection",
      "Directory traversal",
      "CSRF"
    ],
    correctAnswer: 2,
    explanation: "The `../` pattern is the hallmark signature of Path/Directory Traversal attacks.",
    difficulty: "Easy"
  },
  {
    id: "csa-q36",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "To detect bad bots based on their User-Agent strings, which log source is MOST useful?",
    options: [
      "Domain controller security logs",
      "Web server access logs",
      "Switch port logs",
      "DNS zone transfer logs"
    ],
    correctAnswer: 1,
    explanation: "Web server logs capture HTTP headers including `User-Agent` strings sent by clients and scraping bots.",
    difficulty: "Easy"
  },
  {
    id: "csa-q37",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On a Windows IIS 7+ web server, HTTP access logs are typically found in:",
    options: [
      "%SystemDrive%\\inetpub\\logs\\LogFiles",
      "C:\\Windows\\System32\\Logs",
      "C:\\Program Files\\IIS\\AccessLogs",
      "%SystemDrive%\\IIS\\SystemLogs"
    ],
    correctAnswer: 0,
    explanation: "Default W3C format logs for IIS reside in `%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC*`.",
    difficulty: "Medium"
  },
  {
    id: "csa-q38",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "To correlate Tor traffic with internal users, which combination of data is MOST helpful?",
    options: [
      "Firewall logs + DHCP lease logs",
      "Web server logs only",
      "DNS logs only",
      "Print server logs"
    ],
    correctAnswer: 0,
    explanation: "Firewall logs detect outbound connections to known Tor exit nodes, and DHCP logs correlate the private IP to the physical hostname/MAC at that specific timestamp.",
    difficulty: "Medium"
  },
  {
    id: "csa-q39",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "To monitor use of insecure ports on internal endpoints, a SOC analyst can regularly review:",
    options: [
      "Netstat output or network flow data (NetFlow / IPFIX)",
      "Antivirus quarantine lists",
      "HR onboarding reports",
      "Email headers"
    ],
    correctAnswer: 0,
    explanation: "Netstat and NetFlow capture listening sockets and established TCP/UDP network connections across endpoints.",
    difficulty: "Easy"
  },
  {
    id: "csa-q40",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Rapid changes in many file extensions and filenames on a file server MOST likely indicate:",
    options: [
      "Routine backup",
      "Patch installation",
      "Ransomware activity",
      "Log rotation"
    ],
    correctAnswer: 2,
    explanation: "Mass file renaming and appending extension suffixes (e.g. `.locked`) at high throughput is the primary signature of ransomware encryption.",
    difficulty: "Easy"
  },

  // --- PREGUNTAS 41 A 60 ---
  {
    id: "csa-q41",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Large outbound DNS TXT records from a single host are often a sign of:",
    options: [
      "Normal query caching",
      "DNS data exfiltration / DNS Tunneling",
      "Network backup",
      "DHCP renewal"
    ],
    correctAnswer: 1,
    explanation: "Adversaries encode sensitive data inside DNS TXT queries to bypass firewalls on port 53 (DNS Tunneling).",
    difficulty: "Medium"
  },
  {
    id: "csa-q42",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC analyst wants to see all process creation events from Windows endpoints in Splunk. Which event ID should they primarily filter on?",
    options: [
      "Event ID 4624",
      "Event ID 4688",
      "Event ID 4658",
      "Event ID 4732"
    ],
    correctAnswer: 1,
    explanation: "Windows Security Event ID 4688 records 'A new process has been created'.",
    difficulty: "Easy"
  },
  {
    id: "csa-q43",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On Windows, event ID 4624 in the Security log indicates:",
    options: [
      "An account failed to log on",
      "A user account was locked out",
      "An account successfully logged on",
      "A process was terminated"
    ],
    correctAnswer: 2,
    explanation: "Event ID 4624 indicates successful logon; 4625 indicates failed logon.",
    difficulty: "Easy"
  },
  {
    id: "csa-q44",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which approach is MOST effective to reduce time wasted on false positive alerts in a SIEM?",
    options: [
      "Disable all default rules",
      "Treat every alert as critical",
      "Ingest context and asset data",
      "Ignore low-severity alerts"
    ],
    correctAnswer: 2,
    explanation: "Asset data (CMDB criticality, subnet, host role) provides contextual enrichment that allows the SIEM to suppress benign triggers.",
    difficulty: "Medium"
  },
  {
    id: "csa-q45",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "If a SIEM generates four alerts at once, which should generally be prioritized LAST (lowest relative priority)?",
    options: [
      "Successful data deletion attempts",
      "Brute-force login attempts against the Domain Controller",
      "SQL injection attempts against the production database",
      "Firewall denies on unsolicited inbound traffic"
    ],
    correctAnswer: 3,
    explanation: "Inbound traffic blocked automatically by boundary firewalls represents routine background Internet noise without successful compromise.",
    difficulty: "Easy"
  },
  {
    id: "csa-q46",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Threat intelligence that focuses on tools, infrastructure, and procedures used by threat actors at a technical level is BEST described as:",
    options: [
      "Strategic intelligence",
      "Operational intelligence",
      "Business intelligence",
      "Physical intelligence"
    ],
    correctAnswer: 1,
    explanation: "Operational Threat Intelligence details specific adversary campaigns, C2 infrastructure, and attack methodologies.",
    difficulty: "Medium"
  },
  {
    id: "csa-q47",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Threat intelligence that supports SOC correlation rules by providing adversary TTPs, campaign details, and malware families is PRIMARILY:",
    options: [
      "Tactical and operational",
      "Strategic and financial",
      "Governmental only",
      "Legal and compliance"
    ],
    correctAnswer: 0,
    explanation: "Tactical and Operational CTI directly map to SIEM correlation rules, YARA signatures, and detection playbooks.",
    difficulty: "Medium"
  },
  {
    id: "csa-q48",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Collecting chat logs, forum posts, and social media discussions to understand a specific attack campaign is an example of:",
    options: [
      "Strategic TI",
      "Operational TI",
      "Compliance TI",
      "Capacity planning"
    ],
    correctAnswer: 1,
    explanation: "Tracking underground communications regarding targeted campaigns is a core element of Operational CTI.",
    difficulty: "Medium"
  },
  {
    id: "csa-q49",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Tracking incident numbers per threat actor over months to see if their activity is rising or falling is MOST related to:",
    options: [
      "Threat pivoting",
      "Threat trending",
      "Threat tainting",
      "Threat masking"
    ],
    correctAnswer: 1,
    explanation: "Threat Trending analyzes long-term telemetry to identify shifts in adversary volume and focus.",
    difficulty: "Easy"
  },
  {
    id: "csa-q50",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Creating fake services or data to lure attackers and observe their methods is an example of:",
    options: [
      "Threat obfuscation",
      "Counterintelligence / Cyber Deception",
      "Business continuity",
      "Data loss prevention"
    ],
    correctAnswer: 1,
    explanation: "Cyber deception technologies (honeypots, honeytokens) gather active counterintelligence on adversary capabilities.",
    difficulty: "Medium"
  },
  {
    id: "csa-q51",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Structuring raw data into a consistent format during the threat intelligence lifecycle occurs in which phase?",
    options: [
      "Collection",
      "Processing and exploitation",
      "Dissemination",
      "Direction"
    ],
    correctAnswer: 1,
    explanation: "The Processing phase standardizes and enriches unstructured data into structured schemas (STIX 2.1).",
    difficulty: "Medium"
  },
  {
    id: "csa-q52",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A platform that aggregates, enriches, and shares threat indicators among tools and teams is called:",
    options: [
      "Threat Intelligence Platform (TIP)",
      "Antivirus console",
      "Backup scheduler",
      "Web proxy"
    ],
    correctAnswer: 0,
    explanation: "A TIP (e.g., MISP, Anomali) centralizes intelligence feeds, deduplicates IoCs, and pushes them to security controls.",
    difficulty: "Easy"
  },
  {
    id: "csa-q53",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "High-level reports for executives describing who is attacking, why, and potential business impact are examples of:",
    options: [
      "Tactical intelligence",
      "Strategic intelligence",
      "Operational intelligence",
      "Technical intelligence"
    ],
    correctAnswer: 1,
    explanation: "Strategic CTI communicates macroeconomic, geopolitical, and business risk trends to executive leadership.",
    difficulty: "Easy"
  },
  {
    id: "csa-q54",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Silently discarding unwanted packets at a router without notifying the sender is known as:",
    options: [
      "Load balancing",
      "Blackhole filtering (Null routing)",
      "Rate limiting",
      "Proxy caching"
    ],
    correctAnswer: 1,
    explanation: "Blackhole filtering routes malicious DDoS traffic to a null interface, silently dropping packets without sending ICMP unreachable replies.",
    difficulty: "Medium"
  },
  {
    id: "csa-q55",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which is the MOST accurate order for incident handling and response?",
    options: [
      "Preparation → Detection and reporting → Triage → Containment → Eradication → Recovery → Lessons learned",
      "Detection → Preparation → Containment → Eradication → Recovery → Recording",
      "Containment → Eradication → Preparation → Detection → Recovery → Reporting",
      "Detection → Recovery → Preparation → Containment → Lessons learned"
    ],
    correctAnswer: 0,
    explanation: "Standard incident response follows: Preparation, Detection/Triage, Containment, Eradication, Recovery, and Lessons Learned.",
    difficulty: "Easy"
  },
  {
    id: "csa-q56",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A statement describing why an incident response capability exists and what it aims to achieve is BEST called:",
    options: [
      "Incident response policy",
      "Incident response mission",
      "Incident response runbook",
      "Incident response metric"
    ],
    correctAnswer: 1,
    explanation: "The Incident Response Mission defines the overarching purpose, objectives, and organizational intent of the IR function.",
    difficulty: "Medium"
  },
  {
    id: "csa-q57",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A document that defines scope, roles, responsibilities, and performance expectations for incident handling is typically the:",
    options: [
      "Incident response policy",
      "Incident ticket",
      "Forensic image report",
      "Antivirus license"
    ],
    correctAnswer: 0,
    explanation: "The IR Policy formally defines the authority, responsibilities, escalation triggers, and operational scope.",
    difficulty: "Easy"
  },
  {
    id: "csa-q58",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A decoy system intentionally left vulnerable to attract attackers is known as a:",
    options: [
      "DMZ",
      "Honeypot",
      "HIDS",
      "Reverse proxy"
    ],
    correctAnswer: 1,
    explanation: "A Honeypot is an intentionally exposed decoy asset designed to deceive attackers and capture attack telemetry.",
    difficulty: "Easy"
  },
  {
    id: "csa-q59",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Verifying that an alert corresponds to a real security issue and not a false positive is part of:",
    options: [
      "Incident triage",
      "Evidence destruction",
      "Post-incident review",
      "System hardening"
    ],
    correctAnswer: 0,
    explanation: "Incident Triage screens alerts to validate authenticity and assign accurate severity before escalating.",
    difficulty: "Easy"
  },
  {
    id: "csa-q60",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "After a SOC escalates a confirmed incident to the incident response team, the FIRST step for the IRT is usually to:",
    options: [
      "Record and log the incident details",
      "Publicly disclose the incident",
      "Shut down all internet access",
      "Change all user passwords"
    ],
    correctAnswer: 0,
    explanation: "The IR team must first log initial details, assign handlers, and record incident intake timestamps.",
    difficulty: "Easy"
  },

  // --- PREGUNTAS 61 A 80 ---
  {
    id: "csa-q61",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A common quantitative risk formula used by many organizations is:",
    options: [
      "Risk = Impact ÷ Asset value",
      "Risk = Likelihood × Impact × Asset value",
      "Risk = Likelihood + Impact",
      "Risk = Impact – Controls"
    ],
    correctAnswer: 1,
    explanation: "Quantitative risk models calculate risk as a factor of Likelihood multiplied by Impact and Asset Value.",
    difficulty: "Easy"
  },
  {
    id: "csa-q62",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "In a basic risk matrix, overall risk level is generally a function of:",
    options: [
      "Consequence (Impact) × Likelihood",
      "Cost × Time",
      "Complexity × Controls",
      "Vulnerabilities ÷ Assets"
    ],
    correctAnswer: 0,
    explanation: "Risk matrices cross-reference Likelihood against Consequence (Impact) to derive overall severity.",
    difficulty: "Easy"
  },
  {
    id: "csa-q63",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "If an attack has very low likelihood but very high impact, how is its risk MOST likely classified in a standard risk matrix?",
    options: [
      "Extreme",
      "High",
      "Medium",
      "Very low"
    ],
    correctAnswer: 2,
    explanation: "The intersection of very low probability and very high consequence typically maps to a Medium risk rating.",
    difficulty: "Medium"
  },
  {
    id: "csa-q64",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "If an attack is very likely and impact is high, its overall risk rating is typically:",
    options: [
      "Low",
      "Medium",
      "High or Extreme",
      "Negligible"
    ],
    correctAnswer: 2,
    explanation: "High likelihood paired with high consequence places risk in the High/Extreme category.",
    difficulty: "Easy"
  },
  {
    id: "csa-q65",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The primary purpose of containment in incident response is to:",
    options: [
      "Identify root cause",
      "Limit spread and damage",
      "Document lessons learned",
      "Notify executives"
    ],
    correctAnswer: 1,
    explanation: "Containment halts adversary lateral movement and prevents further damage while forensic artifacts are collected.",
    difficulty: "Easy"
  },
  {
    id: "csa-q66",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Identifying and removing malicious components from systems is the MAIN objective of which phase?",
    options: [
      "Triage",
      "Eradication",
      "Recovery",
      "Detection"
    ],
    correctAnswer: 1,
    explanation: "Eradication removes all malware, persistence backdoors, and closes exploited root-cause vulnerabilities.",
    difficulty: "Easy"
  },
  {
    id: "csa-q67",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Increasing bandwidth and adding capacity so legitimate traffic can still be served during a volumetric DDoS attack is an example of:",
    options: [
      "Diverting traffic",
      "Absorbing the attack",
      "Rate limiting users",
      "Degrading services"
    ],
    correctAnswer: 1,
    explanation: "Absorbing the attack overprovisions bandwidth and cloud compute capacity to withstand volumetric packet floods.",
    difficulty: "Medium"
  },
  {
    id: "csa-q68",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Filtering packets at the network edge to block spoofed source IP addresses from outside the organization is called:",
    options: [
      "Egress filtering",
      "Ingress filtering",
      "NAT hiding",
      "Proxy chaining"
    ],
    correctAnswer: 1,
    explanation: "Ingress filtering inspects incoming boundary traffic to drop forged source IPs (e.g. internal private ranges coming from the public Internet).",
    difficulty: "Easy"
  },
  {
    id: "csa-q69",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Inspecting outbound traffic from internal networks to ensure malicious or unauthorized packets do not leave is known as:",
    options: [
      "Egress filtering",
      "Ingress filtering",
      "Static routing",
      "VLAN hopping"
    ],
    correctAnswer: 0,
    explanation: "Egress filtering restricts unauthorized outbound connections, disrupting C2 beacons and data exfiltration.",
    difficulty: "Easy"
  },
  {
    id: "csa-q70",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A cloud security service that provides DNS-based content filtering and phishing protection is BEST represented by:",
    options: [
      "OpenDNS / Cisco Umbrella-type solutions",
      "Local ARP cache",
      "Syslog relay",
      "Backup-as-a-service"
    ],
    correctAnswer: 0,
    explanation: "DNS security solutions (Cisco Umbrella/OpenDNS) resolve queries against threat intelligence blocklists to prevent connections to malicious infrastructure.",
    difficulty: "Easy"
  },
  {
    id: "csa-q71",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Disabling risky features like 'allow_url_fopen' and 'allow_url_include' in PHP is MOST effective against:",
    options: [
      "Remote/Local File Inclusion (RFI / LFI) attacks",
      "CSRF",
      "LDAP injection",
      "Buffer overflow"
    ],
    correctAnswer: 0,
    explanation: "Disabling `allow_url_include` prevents PHP from loading and executing external remote scripts via include statements.",
    difficulty: "Medium"
  },
  {
    id: "csa-q72",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Using parameterized queries (Prepared Statements) instead of dynamic SQL string concatenation is a strong defense against:",
    options: [
      "Command injection",
      "SQL injection",
      "Clickjacking",
      "HTTPS downgrade"
    ],
    correctAnswer: 1,
    explanation: "Parameterized queries treat user input strictly as data parameters, preventing the database engine from executing them as SQL commands.",
    difficulty: "Easy"
  },
  {
    id: "csa-q73",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Encoding user input before reflecting it in web pages (HTML Entity / Output Encoding) helps prevent:",
    options: [
      "XSS attacks",
      "DHCP starvation",
      "TCP SYN floods",
      "ARP spoofing"
    ],
    correctAnswer: 0,
    explanation: "Output encoding ensures browsers treat user input as plain text rather than executable markup or script tags.",
    difficulty: "Easy"
  },
  {
    id: "csa-q74",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "To reduce insecure deserialization risk, developers should generally:",
    options: [
      "Accept any object type from clients",
      "Avoid deserializing untrusted data",
      "Store serialized objects in unencrypted cookies",
      "Disable all logging"
    ],
    correctAnswer: 1,
    explanation: "The most robust defense is to avoid deserializing raw binary objects from untrusted sources, preferring structured formats like JSON.",
    difficulty: "Medium"
  },
  {
    id: "csa-q75",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Filtering malformed XML and disabling external DTD resolution is MOST helpful against:",
    options: [
      "XML External Entity (XXE) / Web Service attacks",
      "Password spraying",
      "ICMP tunneling",
      "ARP poisoning"
    ],
    correctAnswer: 0,
    explanation: "Disabling external entity resolution (`DOCTYPE` declarations) neutralizes XXE and XML parser exploits.",
    difficulty: "Medium"
  },
  {
    id: "csa-q76",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "An encoding that represents special characters as '%' followed by their hexadecimal value is known as:",
    options: [
      "Base64 encoding",
      "Unicode encoding",
      "URL encoding (Percent-encoding)",
      "UTF-8 encoding"
    ],
    correctAnswer: 2,
    explanation: "URL encoding (Percent-encoding) converts reserved characters into `%` plus their hexadecimal ASCII representation.",
    difficulty: "Easy"
  },
  {
    id: "csa-q77",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "An orchestration platform that automates SOC playbooks and ties together alerts and actions is typically a:",
    options: [
      "SOAR platform",
      "Simple proxy",
      "Media gateway",
      "Router firmware"
    ],
    correctAnswer: 0,
    explanation: "SOAR (Security Orchestration, Automation, and Response) connects tools to automate repetitive triage and containment tasks.",
    difficulty: "Easy"
  },
  {
    id: "csa-q78",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A security standard that defines controls to protect cardholder data for organizations handling credit card payments is:",
    options: [
      "HIPAA",
      "PCI DSS",
      "ISO 9001",
      "NERC CIP"
    ],
    correctAnswer: 1,
    explanation: "PCI DSS establishes global technical standards for securing cardholder data.",
    difficulty: "Easy"
  },
  {
    id: "csa-q79",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "If a real attack occurs but no alert is generated by security tools, this is known as a:",
    options: [
      "True positive",
      "False positive",
      "False negative",
      "True negative"
    ],
    correctAnswer: 2,
    explanation: "A False Negative occurs when a real security breach goes completely undetected by monitoring tools.",
    difficulty: "Easy"
  },
  {
    id: "csa-q80",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On Linux, printer access logs are commonly stored under:",
    options: [
      "/var/log/cups/",
      "/etc/printlogs/",
      "/usr/local/printers/logs",
      "/opt/logs/printer"
    ],
    correctAnswer: 0,
    explanation: "The Common Unix Printing System (CUPS) writes its access and error logs to `/var/log/cups/`.",
    difficulty: "Medium"
  },

  // --- PREGUNTAS 81 A 100 ---
  {
    id: "csa-q81",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On many Linux systems, to log dropped packets, administrators often add an iptables rule such as:",
    options: [
      "iptables -A INPUT -j DROPLOG",
      "iptables -A INPUT -j LOG",
      "iptables -D INPUT -j LOG",
      "iptables -P INPUT -j LOG"
    ],
    correctAnswer: 1,
    explanation: "The `-j LOG` jump target tells the Linux kernel to log matching packet headers to syslog before subsequent drop rules execute.",
    difficulty: "Medium"
  },
  {
    id: "csa-q82",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On Debian-based systems, kernel and iptables messages are often logged to:",
    options: [
      "/var/log/auth.log",
      "/var/log/kern.log",
      "/var/log/iptables.log",
      "/var/log/netfilter.log"
    ],
    correctAnswer: 1,
    explanation: "Debian and Ubuntu systems direct kernel messages and iptables firewall logging to `/var/log/kern.log`.",
    difficulty: "Easy"
  },
  {
    id: "csa-q83",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On CentOS or RHEL systems, many firewall and system events are typically found in:",
    options: [
      "/var/log/audit.log",
      "/var/log/secure",
      "/var/log/messages",
      "/var/log/iptables"
    ],
    correctAnswer: 2,
    explanation: "In RHEL/CentOS distributions, general system events and firewall messages are stored in `/var/log/messages`.",
    difficulty: "Easy"
  },
  {
    id: "csa-q84",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "HTTP status codes in the 1xx range indicate:",
    options: [
      "Informational responses",
      "Client errors",
      "Server errors",
      "Redirection"
    ],
    correctAnswer: 0,
    explanation: "1xx codes are informational (e.g. 100 Continue).",
    difficulty: "Easy"
  },
  {
    id: "csa-q85",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "In a new SOC, the person defining policies, procedures, and overall strategy is MOST likely the:",
    options: [
      "L1 SOC analyst",
      "CISO or SOC manager",
      "Network technician",
      "HR representative"
    ],
    correctAnswer: 1,
    explanation: "The CISO and SOC Manager set operational governance, service level agreements, and response strategies.",
    difficulty: "Easy"
  },
  {
    id: "csa-q86",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "In the Cyber Kill Chain, the stage where payload and exploit are combined into a deliverable package is:",
    options: [
      "Reconnaissance",
      "Weaponization",
      "Delivery",
      "Actions on objectives"
    ],
    correctAnswer: 1,
    explanation: "Weaponization couples an exploit with a malicious payload (such as embedding malware into a macro-enabled document).",
    difficulty: "Easy"
  },
  {
    id: "csa-q87",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "HTTP status code 403 usually means:",
    options: [
      "Resource not found",
      "Forbidden / Access denied",
      "Internal server error",
      "Temporary redirect"
    ],
    correctAnswer: 1,
    explanation: "HTTP 403 Forbidden indicates that the server understands the request but refuses authorization.",
    difficulty: "Easy"
  },
  {
    id: "csa-q88",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which Windows event ID is most associated with registry key access attempts ('A handle to an object was requested')?",
    options: [
      "Event ID 4656",
      "Event ID 4624",
      "Event ID 1102",
      "Event ID 4740"
    ],
    correctAnswer: 0,
    explanation: "Event ID 4656 records requests for handles to securable objects including registry keys, SAM ports, and file handles.",
    difficulty: "Hard"
  },
  {
    id: "csa-q89",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A maturity model that focuses on the security engineering process of an organization is:",
    options: [
      "SOC-CMM",
      "SSE-CMM (Systems Security Engineering Capability Maturity Model)",
      "ITIL",
      "COBIT"
    ],
    correctAnswer: 1,
    explanation: "SSE-CMM (ISO/IEC 21827) provides a standard metrics framework to evaluate security engineering maturity.",
    difficulty: "Medium"
  },
  {
    id: "csa-q90",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Windows event ID 4740 indicates that:",
    options: [
      "A user account was locked out",
      "A new account was created",
      "A user logged on",
      "A service was installed"
    ],
    correctAnswer: 0,
    explanation: "Event ID 4740 is triggered when an account exceeds the lockout threshold following failed authentication attempts.",
    difficulty: "Easy"
  },
  {
    id: "csa-q91",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "On Linux, the binary file '/var/log/wtmp' typically stores:",
    options: [
      "System boot errors",
      "Historical login and logout records",
      "DNS queries",
      "Apache access logs"
    ],
    correctAnswer: 1,
    explanation: "`/var/log/wtmp` maintains the historical audit trail of user sessions, queried using the `last` command.",
    difficulty: "Medium"
  },
  {
    id: "csa-q92",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "HTTP status codes in the 4xx range indicate:",
    options: [
      "Informational responses",
      "Client-side errors",
      "Server-side errors",
      "Successful responses"
    ],
    correctAnswer: 1,
    explanation: "4xx denotes client-originating errors (e.g. 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found).",
    difficulty: "Easy"
  },
  {
    id: "csa-q93",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "HTTP status codes in the 5xx range indicate:",
    options: [
      "Informational responses",
      "Client errors",
      "Server-side errors",
      "Redirections"
    ],
    correctAnswer: 2,
    explanation: "5xx indicates server-side execution failures (e.g. 500 Internal Server Error, 502 Bad Gateway, 503 Unavailable).",
    difficulty: "Easy"
  },
  {
    id: "csa-q94",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "To monitor SMB file sharing activity in Windows, which event ID is MOST useful?",
    options: [
      "Event ID 7045",
      "Event ID 4625",
      "Event ID 5140 (A network share object was accessed)",
      "Event ID 1100"
    ],
    correctAnswer: 2,
    explanation: "Event ID 5140 logs whenever a client connects to a Windows network file share.",
    difficulty: "Medium"
  },
  {
    id: "csa-q95",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "In the open-source SIEM AlienVault OSSIM, the reputation database of known bad IPs is located in:",
    options: [
      "/etc/siem/reputation/",
      "/etc/ossim/server/reputation.data",
      "/var/log/reputation/",
      "/usr/share/siem/reputation"
    ],
    correctAnswer: 1,
    explanation: "AlienVault OSSIM server maintains threat reputation cache at `/etc/ossim/server/reputation.data`.",
    difficulty: "Hard"
  },
  {
    id: "csa-q96",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A workstation is actively infected with malware. What is the MOST appropriate immediate containment step?",
    options: [
      "Power off the system immediately",
      "Isolate it from the network",
      "Delete suspicious files only",
      "Ignore and wait for more data"
    ],
    correctAnswer: 1,
    explanation: "Network isolation stops malware propagation and C2 communication while preserving volatile RAM artifacts for forensics.",
    difficulty: "Easy"
  },
  {
    id: "csa-q97",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "After collecting digital evidence, the next critical step for maintaining admissibility in court is to:",
    options: [
      "Compress all logs",
      "Create and maintain chain-of-custody documentation",
      "Email the data to the legal team",
      "Upload everything to the public cloud"
    ],
    correctAnswer: 1,
    explanation: "Chain of Custody legally documents who acquired, transported, analyzed, and secured evidence without tampering.",
    difficulty: "Easy"
  },
  {
    id: "csa-q98",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Planning the budget, physical layout, staffing, and physical security controls are all part of:",
    options: [
      "Setting up a forensic lab (ISO 17025)",
      "Patch management",
      "Vulnerability scanning",
      "Awareness training"
    ],
    correctAnswer: 0,
    explanation: "Forensic laboratory setup mandates rigorous environmental, physical, and chain-of-custody controls.",
    difficulty: "Medium"
  },
  {
    id: "csa-q99",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A tree-structured tool that helps incident responders organize indicators, notes, and relationships for reporting is:",
    options: [
      "MagicTree-like reporting tool",
      "Simple text editor",
      "Web browser",
      "DHCP console"
    ],
    correctAnswer: 0,
    explanation: "MagicTree organizes data hierarchically in a tree structure for intelligence aggregation and automated reporting.",
    difficulty: "Medium"
  },
  {
    id: "csa-q100",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A detection method that profiles normal behavior of users and systems and raises alerts on deviations is BEST termed:",
    options: [
      "Signature-based detection",
      "Anomaly-based detection (UEBA)",
      "Rule-based detection",
      "Static-based detection"
    ],
    correctAnswer: 1,
    explanation: "Anomaly-based detection baseline normal activity and alerts when statistical thresholds deviate from expected norms.",
    difficulty: "Easy"
  },

  // =========================================================================
  // ADVANCED SCENARIO QUESTIONS (q101 to q115)
  // =========================================================================
  {
    id: "csa-q101",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which Active Directory attack involves requesting Kerberos TGS tickets with RC4 encryption for accounts with registered SPNs to crack their password hashes offline?",
    options: [
      "Pass-the-Hash (PtH)",
      "Kerberoasting",
      "Golden Ticket Attack",
      "DCSync"
    ],
    correctAnswer: 1,
    explanation: "Kerberoasting allows authenticated domain users to request TGS tickets for Service Principal Names (SPNs) and crack the service account NTLM hash offline using tools like Hashcat.",
    difficulty: "Hard"
  },
  {
    id: "csa-q102",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "What are 'LOLBins' (Living off the Land Binaries)?",
    options: [
      "Malware downloaded exclusively from dark web forums.",
      "Legitimate, signed operating system binaries (e.g. certutil, powershell, bitsadmin, mshta) used by attackers to execute code and evade defenses without external tooling.",
      "Legacy Unix worms.",
      "Encryption utilities restricted to ransomware gangs."
    ],
    correctAnswer: 1,
    explanation: "LOLBins are legitimate native system utilities abused by adversaries to download payloads, execute scripts, and bypass application allowlisting.",
    difficulty: "Medium"
  },
  {
    id: "csa-q103",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In Microsoft Sysmon, which Event ID logs new process creation alongside the complete command line arguments and executable hashes?",
    options: [
      "Sysmon Event ID 1",
      "Sysmon Event ID 3",
      "Sysmon Event ID 7",
      "Sysmon Event ID 11"
    ],
    correctAnswer: 0,
    explanation: "Sysmon Event ID 1 (Process Create) captures `CommandLine`, `ParentImage`, `Hashes`, and `User` context.",
    difficulty: "Medium"
  },
  {
    id: "csa-q104",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In Sysmon, which Event ID records outbound network connections initiated by a host process (`Network connection detected`)?",
    options: [
      "Sysmon Event ID 1",
      "Sysmon Event ID 3",
      "Sysmon Event ID 8",
      "Sysmon Event ID 22"
    ],
    correctAnswer: 1,
    explanation: "Sysmon Event ID 3 captures TCP/UDP network connections initiated by endpoint binaries, crucial for detecting C2 beaconing.",
    difficulty: "Hard"
  },
  {
    id: "csa-q105",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "In Splunk SPL, which command calculates the count of events grouped by source IP and displays only those with more than 100 occurrences?",
    options: [
      "index=firewall | table src_ip | filter count > 100",
      "index=firewall | stats count by src_ip | where count > 100",
      "index=firewall | eval count = src_ip | sort -100",
      "index=firewall | dedup src_ip | count > 100"
    ],
    correctAnswer: 1,
    explanation: "`stats count by src_ip` aggregates event frequency by IP, and `where count > 100` filters aggregated results above the threshold.",
    difficulty: "Medium"
  },
  {
    id: "csa-q106",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which vendor-agnostic YAML standard allows security analysts to write detection rules that can be compiled to Splunk SPL, Elastic DSL, or Microsoft Sentinel KQL?",
    options: [
      "Sigma Rules",
      "YARA Rules",
      "Snort Rules",
      "PCAP Rules"
    ],
    correctAnswer: 0,
    explanation: "Sigma is the open generic signature format for log detection rules, easily compiled into any target SIEM language.",
    difficulty: "Medium"
  },
  {
    id: "csa-q107",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "In a Snort/Suricata rule: `alert tcp any any -> 192.168.1.0/24 80 (msg:\"Possible SQL Injection\"; content:\"UNION SELECT\"; nocase; sid:1000001; rev:1;)`, what does the `nocase` modifier do?",
    options: [
      "Prevents the rule from writing to the alert log.",
      "Instructs the engine to perform a case-insensitive match on 'UNION SELECT'.",
      "Restricts the rule to DDoS flood conditions.",
      "Silently drops the packet without alert generation."
    ],
    correctAnswer: 1,
    explanation: "`nocase` ignores upper/lowercase distinctions when matching payload strings in packet buffers.",
    difficulty: "Medium"
  },
  {
    id: "csa-q108",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which application protocol over HTTPS is used to transport and exchange structured cyber threat intelligence encoded in STIX format?",
    options: [
      "TAXII (Trusted Automated eXchange of Intelligence Information)",
      "CybOX (Cyber Observable eXpression)",
      "OpenIOC",
      "MISP Protocol"
    ],
    correctAnswer: 0,
    explanation: "TAXII is the dedicated transport protocol for automated sharing of STIX-formatted threat data.",
    difficulty: "Medium"
  },
  {
    id: "csa-q109",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Under TLP 2.0 (Traffic Light Protocol), which label restricts disclosure strictly to the recipient's organization on a need-to-know basis?",
    options: [
      "TLP:CLEAR",
      "TLP:GREEN",
      "TLP:AMBER",
      "TLP:RED"
    ],
    correctAnswer: 2,
    explanation: "TLP:AMBER restricts information sharing to the recipient organization and its clients who require it for defensive action.",
    difficulty: "Medium"
  },
  {
    id: "csa-q110",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which OSINT search engine indexes Internet-connected devices based on their service banners, open listening ports, and SSL certificates?",
    options: [
      "Shodan",
      "Wireshark",
      "FTK Imager",
      "Volatility"
    ],
    correctAnswer: 0,
    explanation: "Shodan crawls and indexes public-facing IP services, routers, ICS/SCADA systems, and web servers.",
    difficulty: "Easy"
  },
  {
    id: "csa-q111",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "According to NIST SP 800-61 Rev 2, what are the 4 official phases of the incident response lifecycle?",
    options: [
      "1. Planning, 2. Execution, 3. Verification, 4. Closeout",
      "1. Preparation, 2. Detection and Analysis, 3. Containment, Eradication and Recovery, 4. Post-Incident Activity (Lessons Learned)",
      "1. Triage, 2. Escalation, 3. Notification, 4. Archiving",
      "1. Reconnaissance, 2. Weaponization, 3. Exploitation, 4. Impact"
    ],
    correctAnswer: 1,
    explanation: "NIST SP 800-61 Rev 2 defines: 1. Preparation, 2. Detection & Analysis, 3. Containment/Eradication/Recovery, and 4. Post-Incident Activity.",
    difficulty: "Medium"
  },
  {
    id: "csa-q112",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "According to the Order of Volatility (RFC 3227), which of the following must be acquired FIRST during forensic live response?",
    options: [
      "CPU registers and cache memory",
      "Main memory (RAM)",
      "Solid State Drive / Hard disk",
      "Archival backup tapes and optical media"
    ],
    correctAnswer: 0,
    explanation: "Order of Volatility mandates collecting the most volatile data first: 1. CPU Registers/Cache, 2. RAM/Routing tables, 3. Temp swap, 4. Hard disk, 5. Backups.",
    difficulty: "Medium"
  },
  {
    id: "csa-q113",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which open-source Python framework is the industry standard for performing volatile memory dump (RAM) forensics?",
    options: [
      "Volatility Framework",
      "Wireshark",
      "Nmap",
      "John the Ripper"
    ],
    correctAnswer: 0,
    explanation: "Volatility analyzes memory dumps to reconstruct process trees (`pslist`, `pstree`), sockets (`netscan`), and injected malware DLLs.",
    difficulty: "Easy"
  },
  {
    id: "csa-q114",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In Windows, an adversary establishes persistence by creating a new background service. Which Event ID in the System log captures this action?",
    options: [
      "Event ID 7045",
      "Event ID 4624",
      "Event ID 1102",
      "Event ID 4688"
    ],
    correctAnswer: 0,
    explanation: "Event ID 7045 ('A service was installed in the system') records the service name, binary image path, and start type.",
    difficulty: "Medium"
  },
  {
    id: "csa-q115",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which fundamental forensic principle states that 'every contact leaves a trace'?",
    options: [
      "Principle of Least Privilege",
      "Locard's Exchange Principle",
      "Moore's Law",
      "Kerckhoffs's Principle"
    ],
    correctAnswer: 1,
    explanation: "Edmond Locard's Exchange Principle asserts that whenever an intruder enters an environment, they bring something in and leave something behind.",
    difficulty: "Easy"
  },

  // =========================================================================
  // ADVANCED REAL-WORLD SOC SCENARIO QUESTIONS (csa-q116 to csa-q155)
  // =========================================================================
  {
    id: "csa-q116",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "The SOC team found a suspicious document file on a user's workstation. Upon initial inspection, the document appears benign, but deeper analysis reveals an embedded PowerShell script. The team suspects the script is designed to download and execute a malicious payload. They need to understand the script's functionality without triggering it.\n\nWhich malware analysis technique is recommended to understand the PowerShell script's functionality without executing it?",
    options: [
      "Static analysis",
      "Dynamic analysis",
      "Automated behavioral analysis",
      "Network traffic analysis"
    ],
    correctAnswer: 0,
    explanation: "Static analysis is the correct approach when the requirement is to understand what the script is intended to do without executing it. For PowerShell embedded in documents, static analysis includes extracting the script content, de-obfuscating it (base64 decoding, string reconstruction, analyzing encoded commands), and reviewing functions, URLs/IPs, file paths, registry keys, and command-line arguments without risking system impact.",
    difficulty: "Easy"
  },
  {
    id: "csa-q117",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC analyst receives an alert indicating that the system time on a critical Windows server was changed at 3:00 AM. There are no scheduled maintenance tasks at this time. Unauthorized time changes can be used to evade security controls, such as altering timestamps to obscure malicious activity. The analyst must identify the relevant event codes that log system time modifications and related suspicious behavior.\n\nWhich of the following Windows Security Event Codes should the analyst review to investigate potential tampering?",
    options: [
      "4608 and 4609",
      "4625 and 4634",
      "4616 and 4618",
      "4616 and 4624"
    ],
    correctAnswer: 2,
    explanation: "Event ID 4616 is the primary Windows Security log event for 'system time was changed'. It includes the previous time, new time, and account/process responsible. Event ID 4618 indicates monitored security-relevant conditions and helps reveal related suspicious behavior around auditing or security event patterns.",
    difficulty: "Medium"
  },
  {
    id: "csa-q118",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "The SOC team at CyberSecure Corp is conducting a security review to identify anomalous log entries from firewall logs. The team needs to extract patterns such as email addresses, IP addresses, and URLs to detect unauthorized access attempts, phishing activities, and suspicious external communications. The SOC analyst applies various regular expressions (regex) patterns to filter and analyze logs efficiently.\n\nWhich regex pattern should the SOC analyst use to extract all hexadecimal color codes found in the logs?",
    options: [
      "(0[1-9]|1[0-2])/(0[1-9]|(1[0-2])/[0-9]|3[01])\\d{4}",
      "([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})",
      "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}",
      "\\b\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\.\\d{1,3}\\b"
    ],
    correctAnswer: 1,
    explanation: "Hex color codes in common usage are represented as either 3 hex characters (shorthand) or 6 hex characters (full), composed of digits 0-9 and letters A-F (case-insensitive). Option ([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3}) directly matches both formats.",
    difficulty: "Medium"
  },
  {
    id: "csa-q119",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A major financial institution has strict policies preventing unauthorized data transfers. As a SOC analyst, during routine log analysis you detect an anomaly: an employee workstation initiates large file transfers outside business hours, involving highly sensitive customer financial records. You discover remote access from an unfamiliar IP address and an unauthorized USB device connection on the workstation.\n\nGiven the likelihood of data exfiltration, what should be your first step in responding?",
    options: [
      "Isolate the employee’s workstation and revoke remote access",
      "Conduct a full forensic analysis first",
      "Disable the corporate VPN entirely",
      "Inform the employee’s department and wait for evidence"
    ],
    correctAnswer: 0,
    explanation: "The first priority during active exfiltration is immediate containment (isolating the endpoint and revoking remote access sessions/credentials) to stop ongoing data loss and prevent lateral movement before conducting in-depth forensic investigation.",
    difficulty: "Medium"
  },
  {
    id: "csa-q120",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Secuzin Corp. is a large enterprise performing millions of financial transactions daily, making it critical to analyze security logs efficiently, detect suspicious activities, and respond to incidents in real time. Its SOC is responsible for managing security logs from various network devices, including firewalls, intrusion detection systems (IDS), authentication servers, and cloud services. To fulfill compliance and regulatory requirements that mandate long-term archival of logs, you need to provide a log storage solution that is scalable to handle increasing log volumes, provides encryption for data security, and is seamlessly accessible.\n\nWhich storage solution should you choose to meet these long-term log storage requirements?",
    options: [
      "Distributed storage system",
      "Hybrid storage system",
      "Local storage",
      "Cloud storage"
    ],
    correctAnswer: 3,
    explanation: "Cloud storage best meets long-term log archival requirements when priorities are elastic scalability, encryption at rest/in transit, durability, and lifecycle management (hot to cold/glacier tiers) for audits and forensic queries.",
    difficulty: "Easy"
  },
  {
    id: "csa-q121",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A security team is configuring a newly deployed SIEM system. With limited resources, they must prioritize monitoring scenarios that provide the greatest security benefit. The team understands an effective SIEM relies on well-defined use cases tailored to the organization’s environment.\n\nWhich factor should guide their selection of use cases?",
    options: [
      "Select use cases based on the availability and quality of data from existing data sources",
      "Prioritize use cases that address zero-day attacks",
      "Implement as many use cases as the SIEM supports to cover all threats",
      "Focus on use cases required to meet industry compliance standards"
    ],
    correctAnswer: 0,
    explanation: "SIEM detections cannot function without reliable telemetry. Selecting use cases based on existing, high-quality, normalized data sources ensures rapid time-to-value, low false positives, and actionable alerts rather than untested, noisy rules.",
    difficulty: "Medium"
  },
  {
    id: "csa-q122",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The team receives an alert about a ransomware incident affecting the organization’s email infrastructure. Forensic analysis identifies the ransomware exploited CVE-2024-0123 in an unpatched mail server. The incident response team is deploying an emergency patch (KB5025941), updating mail filtering rules to block malicious payloads, and implementing additional network segmentation to limit lateral movement.\n\nWhich phase of the Incident Response process is the SOC currently executing?",
    options: [
      "Evidence gathering and forensic analysis",
      "Eradication",
      "Containment",
      "Recovery"
    ],
    correctAnswer: 1,
    explanation: "Eradication focuses on eliminating the root cause of the compromise, closing exploited vulnerabilities (emergency patching), removing threat pathways (updating filtering rules), and purging malware artifacts to prevent reinfection.",
    difficulty: "Medium"
  },
  {
    id: "csa-q123",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A mid-sized financial institution’s SOC is overwhelmed by thousands of daily alerts, many based on Indicators of Compromise (IoCs) such as suspicious IPs, hashes, and domains. These alerts lack context about whether they truly pose a threat. Analysts waste time on low-priority incidents while severe threats may be missed. The team lacks tools and intelligence to correlate IoCs with real-world threats, making prioritization difficult and causing alert fatigue.\n\nWhich poses the greatest challenge in this environment?",
    options: [
      "Malware-centric and CTI are not equivalent",
      "Information overload",
      "Budget and enterprise skill",
      "Distinguishing IoC from CTI"
    ],
    correctAnswer: 3,
    explanation: "The fundamental challenge is treating raw, low-context indicators (IoCs) as actionable Cyber Threat Intelligence (CTI). CTI adds threat actor motivation, campaigns, confidence scoring, and context needed to prioritize alerts effectively.",
    difficulty: "Hard"
  },
  {
    id: "csa-q124",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Following a high-priority security incident, you initiate an internal investigation after reports confirm a serious data breach in which sensitive customer data was stolen from a critical web server. During your investigation of server logs, you discover repeated requests attempting to access files and directories outside of the web server’s root directory using URL path manipulation (e.g. `../` sequences).\n\nWhich type of web application attack caused this incident?",
    options: [
      "Cross-Site Scripting (XSS) Attacks",
      "Directory Traversal",
      "SQL Injection Attack",
      "Session Attacks: Cookie Poisoning"
    ],
    correctAnswer: 1,
    explanation: "Directory Traversal (or Path Traversal) abuses dot-dot-slash (`../`) sequences and encoded variants to escape the web root directory and read unauthorized system files, passwords, or configuration files.",
    difficulty: "Easy"
  },
  {
    id: "csa-q125",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A financial institution's SIEM is generating a high number of false positives, causing alert fatigue among SOC analysts. To reduce this burden and improve threat detection accuracy, the organization integrates AI capabilities into the SIEM. After implementation, the SOC team observes a significant decrease in redundant alerts, along with faster detection of genuine threats.\n\nWhich AI capability contributed to this improvement?",
    options: [
      "Dynamic rule optimization",
      "Rule validation and testing",
      "Automated rule generation",
      "Data integration enhancement"
    ],
    correctAnswer: 0,
    explanation: "Dynamic rule optimization uses machine learning to adaptively adjust detection thresholds, suppress repetitive benign noise, and score alerts based on environmental context and historical baselines.",
    difficulty: "Medium"
  },
  {
    id: "csa-q126",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "ABC is a multinational company with multiple offices across the globe, and you are working as an L2 SOC analyst. You are implementing a centralized logging solution to enhance security monitoring. You must ensure that log messages from routers, firewalls, and servers across multiple remote offices are efficiently collected and forwarded to a central syslog server. To streamline this process, an intermediate component is deployed to receive log messages from different devices and forward them to the main syslog server.\n\nWhich component in the syslog infrastructure performs this function?",
    options: [
      "Syslog Database",
      "Syslog Collector",
      "Syslog Listener",
      "Syslog Relay"
    ],
    correctAnswer: 3,
    explanation: "A Syslog Relay acts as an intermediate proxy/forwarder that receives syslog packets from local network segments and forwards them upstream to the central syslog server/collector, optimizing bandwidth and buffering across WAN links.",
    difficulty: "Medium"
  },
  {
    id: "csa-q127",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At 9:15 AM EST, Marcus Wong, a financial operations analyst, contacts the SOC after noticing Excel spreadsheets automatically encrypting with unusual file extensions (e.g., .locked or .crypt). The Tier 1 analyst logs the incident as ticket #INC-89271 in the SIEM and escalates it to a Tier 2 SOC analyst for investigation.\n\nWhich phase of the Incident Response process is currently taking place?",
    options: [
      "Containment",
      "Incident triage",
      "Incident recording and assignment",
      "Notification"
    ],
    correctAnswer: 2,
    explanation: "Documenting reported symptoms, generating a tracked ticket (#INC-89271), establishing initial severity, and assigning ownership to Tier 2 represents the Incident Recording and Assignment phase.",
    difficulty: "Medium"
  },
  {
    id: "csa-q128",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An organization with a complex IT infrastructure is planning to implement a SIEM solution to improve its threat detection and response capabilities. Due to the scale and complexity of its systems, the organization opts for a phased deployment approach to ensure a smooth implementation and reduce potential risks.\n\nWhich of the following should be the first phase in their SIEM deployment strategy?",
    options: [
      "Automate incident response processes",
      "Implement User and Entity Behavior Analytics (UEBA)",
      "Set up the log management component before deploying the SIEM component",
      "Configure security analytics to identify potential threats"
    ],
    correctAnswer: 2,
    explanation: "The essential first phase of any SIEM deployment is establishing log management (ingestion, parsers, normalization, storage, time sync) before layering analytics, UEBA, or automated response.",
    difficulty: "Medium"
  },
  {
    id: "csa-q129",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A financial institution suspects an insider threat due to unauthorized access attempts on restricted databases. However, SIEM alerts lack sufficient information to differentiate between legitimate and malicious access. The SOC manager recommends integrating contextual data to improve detection.\n\nWhich contextual data source should be integrated in this scenario?",
    options: [
      "User context from HR systems",
      "Location and physical context from CPS sensors",
      "Threat context from external threat intelligence feeds",
      "Vulnerability context"
    ],
    correctAnswer: 0,
    explanation: "HR identity context (job title, department, employment status, active/terminated state) provides the vital business context to determine whether database access attempts align with authorized job responsibilities.",
    difficulty: "Medium"
  },
  {
    id: "csa-q130",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "You are working in a Cybersecurity Operations Center for PayOnline. Your team monitors logs across firewalls, authentication servers, and endpoint detection tools. The team currently relies on manual log reviews of raw, unstructured text logs. To enable efficient querying, dashboards, and automated alert rules, the team decides to implement an automated log parsing solution that maps text into structured fields.\n\nWhich log parsing technique should you implement?",
    options: [
      "Delimited parsing",
      "Key-value extraction",
      "Grok filters",
      "Semantic parsing"
    ],
    correctAnswer: 2,
    explanation: "Grok filters use regular expression patterns to match, extract, and convert raw unstructured or semi-structured log strings into standardized structured fields (e.g. IP, timestamp, user, action).",
    difficulty: "Medium"
  },
  {
    id: "csa-q131",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A hospital's SOC team has detected multiple malware incidents that disrupted access to patient records. The SOC analysts have been tasked with eradicating current infections and preventing future attacks by addressing the underlying vulnerabilities that allowed the malware to breach defenses.\n\nWhich eradication step would best address these root causes?",
    options: [
      "Fixing devices",
      "Using antivirus tools for quarantine",
      "Updating the malware database with vendor signatures",
      "Implementing blacklist techniques for file execution"
    ],
    correctAnswer: 0,
    explanation: "'Fixing devices' entails remediating the underlying root causes: applying security patches, repairing insecure configurations, closing open attack surfaces, and restoring systems to hardened baselines.",
    difficulty: "Medium"
  },
  {
    id: "csa-q132",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At GlobalTech, the SOC team detects a suspicious ransomware outbreak affecting multiple endpoints. After successfully isolating the infected systems from the network, the Digital Forensics team begins their investigation. They deploy a forensics workstation to acquire RAM dumps, extract Windows Event Logs, and collect network PCAP files from the compromised hosts.\n\nWhich phase of the Incident Response lifecycle is currently underway?",
    options: [
      "Recovery",
      "Evidence gathering and forensic analysis",
      "Containment",
      "Eradication"
    ],
    correctAnswer: 1,
    explanation: "Acquiring live volatile memory (RAM dumps), disk event logs, and packet captures (PCAP) represents the Evidence Gathering and Forensic Analysis phase, immediately following endpoint containment.",
    difficulty: "Easy"
  },
  {
    id: "csa-q133",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "In a large corporation, the HR department receives an urgent email from someone impersonating a high-level executive, requesting immediate transfer of sensitive employee data. The email includes an official-looking document and a phone number for verification. The HR manager calls the number, 'confirms' the request with the fraudster, and transfers the data.\n\nWhat type of attack did the HR department face?",
    options: [
      "Credential theft",
      "Web-based intrusion",
      "Social engineering attack",
      "Application exploit"
    ],
    correctAnswer: 2,
    explanation: "This is a Social Engineering attack (specifically executive impersonation / Business Email Compromise) exploiting psychological urgency, authority pretexting, and rogue verification channels.",
    difficulty: "Easy"
  },
  {
    id: "csa-q134",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Lisa Carter, a SOC analyst at a financial services firm, is performing a risk assessment following suspicious alerts detected by the SIEM. She evaluates three key factors: the likelihood of an attack succeeding based on current threat intelligence, the impact on critical business operations if the breach occurs, and the value of the assets targeted.\n\nUsing the standard risk assessment approach, which scenario represents the highest risk to the organization?",
    options: [
      "High Likelihood, High Impact, High Asset Value",
      "Low Likelihood, High Impact, Low Asset Value",
      "Low Likelihood, Low Impact, High Asset Value",
      "High Likelihood, Low Impact, High Asset Value"
    ],
    correctAnswer: 0,
    explanation: "Risk is fundamentally a calculation of Likelihood x Impact (multiplied or amplified by Asset Value/Criticality). When all three factors are High, the aggregate risk score reaches the maximum level.",
    difficulty: "Easy"
  },
  {
    id: "csa-q135",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Daniel Clark is a cybersecurity specialist in the Cloud SOC for a government agency. His team needs a security solution that can enforce access policies to prevent unauthorized access to cloud-based applications, monitor and restrict data sharing within SaaS, PaaS, and IaaS environments, ensure compliance with government regulations for data security and privacy, and apply security controls to prevent sensitive data exposure in the cloud.\n\nWhich Cloud SOC technology is his team using?",
    options: [
      "Cloud Access Security Broker (CASB)",
      "Cloud Security Posture Management (CSPM)",
      "Cloud Workload Protection Platform (CWPP)",
      "Cloud-native anomaly detection"
    ],
    correctAnswer: 0,
    explanation: "A Cloud Access Security Broker (CASB) sits between cloud users and cloud applications to enforce data loss prevention (DLP), access control policies, encryption, and compliance across SaaS/PaaS/IaaS.",
    difficulty: "Medium"
  },
  {
    id: "csa-q136",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At 10:30 AM, during routine monitoring, Tier 1 SOC analyst Jennifer detects unusual network traffic and confirms an active LockBit ransomware infection targeting systems in the finance department. She escalates to the SOC lead, Sarah, who activates the Incident Response Team (IRT) and instructs the network team to isolate the finance department’s VLAN to prevent further spread across the network.\n\nWhich phase of the Incident Response process is currently being implemented?",
    options: [
      "Evidence gathering and forensic analysis",
      "Eradication",
      "Notification",
      "Containment"
    ],
    correctAnswer: 3,
    explanation: "Segmenting or isolating the finance VLAN to block lateral movement and contain the ransomware blast radius is a definitive Containment action.",
    difficulty: "Easy"
  },
  {
    id: "csa-q137",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Mark Reynolds, a SOC analyst at a healthcare organization, is monitoring the SIEM system when he detects a series of unusual login attempts targeting critical patient data servers. After investigating, the SOC determines that the threat has a 'Likely' chance of occurring and could cause 'Significant' damage, including operational disruptions and HIPAA penalties.\n\nUsing a standard Risk Matrix, how would this risk be categorized in terms of overall severity?",
    options: [
      "Medium",
      "Low",
      "High",
      "Very High"
    ],
    correctAnswer: 2,
    explanation: "In a standard risk evaluation matrix, pairing a 'Likely' probability with 'Significant' impact categorizes the overall risk severity as 'High'.",
    difficulty: "Medium"
  },
  {
    id: "csa-q138",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Bob is a SOC analyst in a multinational corporation that relies on a centralized file-sharing server for storing confidential project documents. One morning, he notices that critical financial records were altered without authorization outside business hours.\n\nWhich log should he check to determine who accessed the files and when the modifications occurred?",
    options: [
      "Security logs",
      "Authentication logs",
      "Firewall logs",
      "Network logs"
    ],
    correctAnswer: 0,
    explanation: "Windows Security Logs (specifically Object Access auditing events like Event ID 4663) capture granular file read, write, modify, and delete actions alongside user identity and timestamps.",
    difficulty: "Medium"
  },
  {
    id: "csa-q139",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "During routine monitoring, the SIEM detects an unusual spike in outbound data transfer from a critical database server. The typical outbound traffic for this server is around 5 MB/hour, but in the past 10 minutes, it has sent over 500 MB to an external IP address. No predefined signatures match this activity, but the SIEM raises an alert due to deviations from the server’s normal behavior profile.\n\nWhich detection method is responsible for this alert?",
    options: [
      "Heuristic-based detection",
      "Signature-based detection",
      "Rule-based detection",
      "Anomaly-based detection"
    ],
    correctAnswer: 3,
    explanation: "Anomaly-based detection models normal baseline behavior over time and triggers alerts when statistical deviations or behavioral outliers (such as 500 MB vs 5 MB baseline) occur.",
    difficulty: "Easy"
  },
  {
    id: "csa-q140",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "TechSolutions discovered a potential data leak after sensitive customer data was found on a public code repository. The CISO demands a comprehensive investigation into the extent of the data breach, timeline of events, and root cause.\n\nWhich SOC role is critical in gathering and analyzing digital evidence for this in-depth investigation?",
    options: [
      "SOC Manager",
      "Subject Matter Expert",
      "Threat Intelligence Analyst",
      "Forensic Analyst"
    ],
    correctAnswer: 3,
    explanation: "The Forensic Analyst specializes in digital evidence acquisition, chain of custody preservation, timeline reconstruction, artifact carving, and root-cause analysis.",
    difficulty: "Easy"
  },
  {
    id: "csa-q141",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A large financial institution receives thousands of security logs daily from firewalls, IDS systems, and user authentication platforms. The SOC uses an AI-driven SIEM system with Natural Language Processing (NLP) capabilities to streamline threat detection.\n\nWhich option best illustrates the advantage of NLP in SIEM?",
    options: [
      "Eliminates the need for data normalization and correlation in SIEM systems",
      "Allows security analysts to write SIEM rules using complex programming languages",
      "Simplifies infrastructure management by reducing hardware dependencies",
      "Enables analysis of text-based data from logs and communications to detect threats"
    ],
    correctAnswer: 3,
    explanation: "Natural Language Processing (NLP) enables automated inspection, entity extraction, sentiment, and intent analysis from human-readable textual sources like email bodies, ticket descriptions, and unstructured log messages.",
    difficulty: "Medium"
  },
  {
    id: "csa-q142",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A large financial institution has identified a sophisticated phishing campaign targeting employees. The organization uses SIEM, EDR, XDR, and XSOAR. You are asked to recommend an integration strategy to improve real-time threat correlation across multiple telemetry domains and streamline automated incident response workflows.\n\nWhich integration would meet these goals?",
    options: [
      "Integrate XDR with SIEM",
      "Integrate XDR with XSOAR",
      "Integrate EDR with SIEM",
      "Integrate EDR with XSOAR"
    ],
    correctAnswer: 1,
    explanation: "XDR provides cross-layered detection and high-fidelity correlation (endpoints, network, email, cloud), while XSOAR orchestrates automated response playbooks (account lock, session revoke, host isolation) in real time.",
    difficulty: "Medium"
  },
  {
    id: "csa-q143",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "One week after a ransomware attack disrupted operations, Sarah, a SOC analyst, leads a review meeting with the IT team, security engineers, and business unit representatives. The group reviews the incident timeline, calculates a business impact of $157,000, and identifies seven critical improvements to enhance detection and response processes.\n\nWhich Incident Response phase is this?",
    options: [
      "Recovery",
      "Post-Incident Activities",
      "Eradication",
      "Containment"
    ],
    correctAnswer: 1,
    explanation: "Conducting post-mortems, calculating financial and operational impact, documenting lessons learned, and updating playbooks after service restoration is the Post-Incident Activities phase.",
    difficulty: "Easy"
  },
  {
    id: "csa-q144",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC analyst detects multiple instances of powershell.exe being launched with the -ExecutionPolicy Bypass and -NoProfile arguments on a domain controller. The parent process is winrm.exe, and the activity occurs during non-business hours.\n\nWhat should be the analyst’s primary focus?",
    options: [
      "Look for Event ID 4625 to check for failed authentication attempts before execution",
      "Investigate Event ID 7045 to determine if a malicious service was created",
      "Search for Event ID 4688 to find similar PowerShell executions within the last 24 hours",
      "Review Event ID 5145 to see if unauthorized network shares were accessed"
    ],
    correctAnswer: 2,
    explanation: "Event ID 4688 (Process Creation with Command Line Auditing enabled) is the primary artifact to scope the execution pattern, identifying identical PowerShell invocations, parent processes, and affected hosts across the domain.",
    difficulty: "Hard"
  },
  {
    id: "csa-q145",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A rapidly growing e-commerce company wants to implement a SIEM solution to improve its security posture and comply with PCI DSS requirements. They need a solution that offers both the necessary technological features and the expertise to manage the system effectively, with continuous compliance support and data security assistance.\n\nWhich SIEM solution is appropriate for this company?",
    options: [
      "Cloud-based SIEM",
      "In-house SIEM",
      "Managed SIEM",
      "Security analytics"
    ],
    correctAnswer: 2,
    explanation: "A Managed SIEM (via an MSSP or managed detection provider) provides both the technology platform and 24/7 dedicated engineering expertise, detection tuning, and continuous compliance audit support.",
    difficulty: "Easy"
  },
  {
    id: "csa-q146",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An attacker attempts to gain unauthorized access to a secure network by repeatedly guessing login credentials. The SIEM is configured to generate an alert after detecting 10 consecutive failed login attempts within a short timeframe. However, the attacker successfully logs in on the 9th attempt, bypassing the alert threshold. The security team only discovers the incident later.\n\nWhat type of alert classification does this represent?",
    options: [
      "False negative",
      "False positive",
      "True negative",
      "True positive"
    ],
    correctAnswer: 0,
    explanation: "A False Negative occurs when a genuine security incident or malicious activity takes place, but the detection system/SIEM fails to generate an alert.",
    difficulty: "Easy"
  },
  {
    id: "csa-q147",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A SOC analyst notices a sharp increase in CPU utilization on a critical backend database server. Forensic analysis reveals an unrecognized scheduled task executing a PowerShell script that attempts to connect to an unknown external IP address.\n\nWhat should you do to confirm whether this is an active attack?",
    options: [
      "Analyze the network logs to identify external connections",
      "Check file integrity and detect recent unauthorized changes",
      "Analyze the system logs for unauthorized changes",
      "Review user access logs for unauthorized activity"
    ],
    correctAnswer: 0,
    explanation: "Analyzing network logs (firewall, proxy, EDR network telemetry, NetFlow) confirms active C2 beaconing, external data exfiltration, connection frequency, and payload transfer in real time.",
    difficulty: "Medium"
  },
  {
    id: "csa-q148",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A large financial organization has experienced an increase in sophisticated cyber threats, including zero-day attacks and APTs. The CISO is exploring AI-driven solutions that can automatically analyze large datasets, detect anomalies, and adapt to evolving threats in real time without predefined signatures and with minimal human oversight.\n\nWhich key AI technology should the organization focus on?",
    options: [
      "Static IP blocking",
      "Machine learning (ML)",
      "Natural language processing (NLP)",
      "Heuristic-based signature detection"
    ],
    correctAnswer: 1,
    explanation: "Machine Learning (ML) builds dynamic statistical models of baseline behavior to uncover novel zero-days, anomalous telemetry, and stealthy APT tactics without relying on static signature files.",
    difficulty: "Easy"
  },
  {
    id: "csa-q149",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The SOC team is investigating a phishing attack that targeted multiple employees. During the Containment Phase, they need to determine how users interacted with the malicious email: whether they opened it, clicked links, downloaded attachments, or entered credentials.\n\nWhich specific activity helps the SOC team understand user interactions with the phishing email?",
    options: [
      "Monitoring and containment validation",
      "Malware infection check",
      "User action verification",
      "Blocking command-and-control (C2) and email traffic"
    ],
    correctAnswer: 2,
    explanation: "User action verification examines email security logs, URL click-time protection, and authentication logs to determine which specific users clicked the link, downloaded attachments, or submitted credentials.",
    difficulty: "Medium"
  },
  {
    id: "csa-q150",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "You are part of a team of SOC analysts in a multinational organization that processes large volumes of security logs from various sources, including firewalls, IDS, and authentication servers. Your team is having difficulty detecting incidents because logs from different systems are analyzed in isolation.\n\nWhat approach should you implement to automatically match related log events across disparate systems based on predefined rules?",
    options: [
      "Log normalization",
      "Log collection",
      "Log correlation",
      "Log transformation"
    ],
    correctAnswer: 2,
    explanation: "Log correlation links related events from disparate data sources (firewalls, EDR, authentication, DNS) across a timeline using shared attributes (IP, user, session) to identify multi-stage attacks.",
    difficulty: "Easy"
  },
  {
    id: "csa-q151",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A SOC analyst monitoring authentication logs detects a sudden spike in failed login attempts targeting multiple servers during non-business hours originating from a single external IP address. Some attempts use valid employee usernames.\n\nGiven this suspicious activity, what is the appropriate next step in the threat-hunting process to assess the situation further?",
    options: [
      "Rapid response",
      "Continuous improvement",
      "Establish a baseline",
      "Investigate and analyze"
    ],
    correctAnswer: 3,
    explanation: "Once an anomaly is identified, the threat hunting workflow transitions into 'Investigate and Analyze' to verify if any attempts succeeded, identify targeted accounts, and determine the attack blast radius.",
    difficulty: "Medium"
  },
  {
    id: "csa-q152",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A financial services company decides to adopt the SOC Capability Maturity Model (CMM) to transition from Level 1 (Ad-hoc / Initial) to Level 3 (Defined / Repeatable).\n\nBased on the SOC CMM, what should be the first priority in transitioning from Level 1 to Level 3?",
    options: [
      "Outsourcing SOC operations to an MSSP",
      "Deploying advanced deception technologies",
      "Establishing well-defined and repeatable incident response processes",
      "Implementing AI-driven automation for real-time detection and response"
    ],
    correctAnswer: 2,
    explanation: "Transitioning from Level 1 to Level 3 requires moving from ad-hoc responses to documented, standardized, and repeatable incident response procedures and playbooks.",
    difficulty: "Medium"
  },
  {
    id: "csa-q153",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A security analyst in a Threat Intelligence team observes a high volume of DNS requests to domains matching Domain Generation Algorithm (DGA) patterns, indicating possible malware C2 communication. The team begins defining intelligence requirements, identifying critical data sources, refining detection criteria, and improving monitoring strategies.\n\nWhich stage of the Cyber Threat Intelligence (CTI) process does this align with?",
    options: [
      "Automated tool",
      "Requirement analysis",
      "Filtering CTI",
      "Intelligence buy-in"
    ],
    correctAnswer: 1,
    explanation: "Requirement Analysis (the Planning and Direction phase of the CTI lifecycle) defines the specific intelligence questions, necessary data sources, and operational detection objectives needed to address a threat.",
    difficulty: "Hard"
  },
  {
    id: "csa-q154",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "The SOC team is tasked with enhancing the security of an organization's network infrastructure. The organization's public-facing web servers need to be isolated from the internal private network containing sensitive employee data to create a buffer zone that limits lateral movement if compromised.\n\nWhich network architecture component would you recommend implementing to establish this isolated region?",
    options: [
      "Demilitarized Zone (DMZ)",
      "Intrusion Detection System (IDS)",
      "Firewall",
      "Honeypot"
    ],
    correctAnswer: 0,
    explanation: "A Demilitarized Zone (DMZ) is a perimeter network segment that exposes external-facing services to untrusted networks while strictly isolating them from internal private subnets.",
    difficulty: "Easy"
  },
  {
    id: "csa-q155",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "You are working as a SOC analyst for a cloud-based service provider that relies on PostgreSQL databases. During a security review, you discover that logs are not being generated for failed authentication attempts, slow queries, or database errors. To ensure PostgreSQL captures and stores logs for centralized monitoring and SIEM forwarding, which configuration parameter must be enabled?",
    options: [
      "logging-collector",
      "log_collector",
      "loggingcollector",
      "logging-collector (with space)"
    ],
    correctAnswer: 1,
    explanation: "In PostgreSQL configuration (`postgresql.conf`), `log_collector` (boolean: `on`) enables the background process that captures stderr/csv log output and writes it to log files for centralized SIEM ingestion.",
    difficulty: "Medium"
  },

  // =========================================================================
  // CERTIFIED SOC ANALYST (CSA) REAL EXAM QUESTION BANK (csa-q156 to csa-q190)
  // =========================================================================
  {
    id: "csa-q156",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Jane, a security analyst, while analyzing IDS logs, detected an event matching Regex `/((%3C)|<)((%69)|i|(%49))((%6D)|m|(%4D))((%67)|g|(%47))[^\n]+((%3E)|>)/i`.\n\nWhat does this event log indicate?",
    options: [
      "Directory Traversal Attack",
      "Parameter Tampering Attack",
      "XSS Attack",
      "SQL Injection Attack"
    ],
    correctAnswer: 2,
    explanation: "The regular expression matches an HTML `<img>` tag (with URL-encoded variations of `<`, `i`, `m`, `g`, `>`), which is a classic payload injection vector used in Cross-Site Scripting (XSS) attacks (e.g., `<img src=x onerror=alert(1)>`).",
    difficulty: "Medium"
  },
  {
    id: "csa-q157",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Harley is working as a SOC analyst with Powell Tech. Powell Inc. is using Internet Information Services (IIS) version 7.0 to host their website.\n\nWhere will Harley find the web server logs, if he wants to investigate them for any anomalies?",
    options: [
      "%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVCN",
      "%SystemDrive%\\LogFiles\\inetpub\\logs\\W3SVCN",
      "%SystemDrive%\\LogFiles\\logs\\W3SVCN",
      "%SystemDrive%\\inetpub\\LogFiles\\logs\\W3SVCN"
    ],
    correctAnswer: 0,
    explanation: "In Microsoft IIS 7.0 and later versions, the default directory path for W3C web server log files is `%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC<SiteID>` (for example, `C:\\inetpub\\logs\\LogFiles\\W3SVC1`).",
    difficulty: "Easy"
  },
  {
    id: "csa-q158",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "In which of the following incident handling and response stages, the root cause of the incident must be found from the forensic results?",
    options: [
      "Evidence Gathering",
      "Evidence Handling",
      "Eradication",
      "Systems Recovery"
    ],
    correctAnswer: 0,
    explanation: "According to EC-Council Incident Handling and Response (ECIH/CSA) methodologies, during the Evidence Gathering and analysis stage, digital forensic artifacts are examined to reconstruct timelines and identify the root cause of the breach.",
    difficulty: "Medium"
  },
  {
    id: "csa-q159",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following data sources can be used to detect traffic associated with Bad Bot User-Agents?",
    options: [
      "Windows Event Log",
      "Web Server Logs",
      "Router Logs",
      "Switch Logs"
    ],
    correctAnswer: 1,
    explanation: "Web Server Logs (such as Apache, Nginx, or IIS in W3C/Combined format) capture HTTP request headers including the client `User-Agent`, enabling detection of automated scrapers, scanning tools, and malicious bots.",
    difficulty: "Easy"
  },
  {
    id: "csa-q160",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Emmanuel is working as a SOC analyst in Tobey Tech. The manager recently recruited an Incident Response Team (IRT). Emmanuel just escalated a critical incident to the IRT.\n\nWhat is the FIRST step that the IRT will execute on the incident escalated by Emmanuel?",
    options: [
      "Incident Analysis and Validation",
      "Incident Recording",
      "Incident Classification",
      "Incident Prioritization"
    ],
    correctAnswer: 0,
    explanation: "Once an incident is escalated by Tier 1/SOC to the Incident Response Team (IRT), the IRT's immediate first action is Incident Analysis and Validation to confirm whether the alert is a verified true positive security incident.",
    difficulty: "Medium"
  },
  {
    id: "csa-q161",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "In which phase of Lockheed Martin's Cyber Kill Chain Methodology does the adversary create a deliverable malicious payload using an exploit and a backdoor?",
    options: [
      "Reconnaissance",
      "Delivery",
      "Weaponization",
      "Exploitation"
    ],
    correctAnswer: 2,
    explanation: "Weaponization is the phase in the Cyber Kill Chain where the threat actor couples an exploit with a malicious payload or backdoor to generate a weaponized file (e.g., infected PDF or macro-enabled document).",
    difficulty: "Easy"
  },
  {
    id: "csa-q162",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following tools can be used to filter and block incoming web requests associated with SQL Injection attacks on Microsoft IIS servers?",
    options: [
      "Nmap",
      "UrlScan",
      "ZAP proxy",
      "Hydra"
    ],
    correctAnswer: 1,
    explanation: "UrlScan is a security filter add-on for Microsoft IIS that screens incoming HTTP requests and blocks malicious patterns, unusual verbs, and SQL Injection payloads before they reach the web application.",
    difficulty: "Medium"
  },
  {
    id: "csa-q163",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which type of Cyber Threat Intelligence (CTI) helps security operations managers, SOC analysts, and incident responders understand how adversaries are expected to attack the organization, including their technical capabilities, goals, and attack vectors (TTPs)?",
    options: [
      "Analytical Threat Intelligence",
      "Operational Threat Intelligence",
      "Strategic Threat Intelligence",
      "Tactical Threat Intelligence"
    ],
    correctAnswer: 3,
    explanation: "Tactical Threat Intelligence focuses on adversary Tactics, Techniques, and Procedures (TTPs), tools, and attack vectors, aiding SOC teams in writing detection rules, configuring SIEMs, and hardening firewalls.",
    difficulty: "Medium"
  },
  {
    id: "csa-q164",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Banter is a threat analyst in Christine Group of Industries. As part of his role, he is currently formatting, normalizing, and structuring raw collected data into standardized schemas.\n\nHe is at which stage of the Cyber Threat Intelligence (CTI) Life Cycle?",
    options: [
      "Dissemination and Integration",
      "Processing and Exploitation",
      "Collection",
      "Analysis and Production"
    ],
    correctAnswer: 1,
    explanation: "The Processing and Exploitation phase transforms raw collected data (logs, PCAPs, raw feeds) into structured, readable formats (e.g. converting IOCs into STIX/JSON) ready for human and automated analysis.",
    difficulty: "Easy"
  },
  {
    id: "csa-q165",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "John, a SOC analyst, while monitoring and analyzing Apache web server logs, identified an event log matching Regex `/(.|(%|%25)2E)(.|(%|%25)2E)(\/|(%|%25)2F|\\\\|(%|%25)5C)/i`.\n\nWhat does this event log indicate?",
    options: [
      "XSS Attack",
      "SQL injection Attack",
      "Directory Traversal Attack",
      "Parameter Tampering Attack"
    ],
    correctAnswer: 2,
    explanation: "This regex detects dot-dot-slash patterns (`../` or `..\\`), including standard URL-encoded (`%2E`, `%2F`, `%5C`) and double-encoded (`%252E`, `%252F`) variations used in Directory / Path Traversal attacks.",
    difficulty: "Medium"
  },
  {
    id: "csa-q166",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Properly applied Cyber Threat Intelligence helps the SOC team in discovering and mapping adversary TTPs.\n\nWhat does TTPs stand for?",
    options: [
      "Tactics, Techniques, and Procedures",
      "Tactics, Threats, and Procedures",
      "Targets, Threats, and Process",
      "Tactics, Targets, and Process"
    ],
    correctAnswer: 0,
    explanation: "TTPs stands for Tactics (the adversary's objective), Techniques (the method used to achieve it), and Procedures (the specific, step-by-step implementation of the technique).",
    difficulty: "Easy"
  },
  {
    id: "csa-q167",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "David is a SOC analyst in Karen Tech. One day an attack is initiated by intruders against internal assets, but David was not able to find any suspicious events or alerts in the SIEM.\n\nThis type of incident is categorized as:",
    options: [
      "True Positive Incident",
      "False Positive Incident",
      "True Negative Incident",
      "False Negative Incident"
    ],
    correctAnswer: 3,
    explanation: "A False Negative occurs when a genuine attack takes place, but the security monitoring controls / SIEM fail to detect the threat and generate no alerts.",
    difficulty: "Easy"
  },
  {
    id: "csa-q168",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An organization deploys a SIEM system where the server hardware and software reside on-premise in the organization's own datacenter, and all operations, rule creation, and daily monitoring are conducted entirely by internal SOC staff.\n\nWhat kind of SIEM deployment architecture is this?",
    options: [
      "Cloud, MSSP Managed",
      "Self-hosted, Jointly Managed",
      "Self-hosted, Self-Managed",
      "Self-hosted, MSSP Managed"
    ],
    correctAnswer: 2,
    explanation: "A Self-hosted, Self-Managed SIEM model means the organization owns and hosts the physical/virtual infrastructure on-premises and operates all management and monitoring in-house.",
    difficulty: "Easy"
  },
  {
    id: "csa-q169",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In which log collection mechanism does the source device or client application actively transmit log records over the network to the central collector without waiting for a request?",
    options: [
      "rule-based",
      "pull-based",
      "push-based",
      "signature-based"
    ],
    correctAnswer: 2,
    explanation: "In push-based log collection (such as Syslog, Windows Event Forwarding, or agent-based forwarders), source systems initiate the connection and stream logs to the collector as events occur.",
    difficulty: "Easy"
  },
  {
    id: "csa-q170",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Chloe, a SOC analyst with Jake Tech, is investigating Linux system logs. She is examining the binary log file located at `/var/log/wtmp`.\n\nWhat type of information is Chloe analyzing?",
    options: [
      "Error log",
      "System boot log",
      "General message and system-related stuff",
      "Login records"
    ],
    correctAnswer: 3,
    explanation: "In Linux, `/var/log/wtmp` maintains a historical database of all successful user logins, logouts, system reboots, and shutdown events (analyzed using the `last` command).",
    difficulty: "Easy"
  },
  {
    id: "csa-q171",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Where will you find the reputation IP database file if you want to monitor traffic from known bad IP reputations using AlienVault OSSIM SIEM?",
    options: [
      "/etc/ossim/reputation",
      "/etc/ossim/siem/server/reputation/data",
      "/etc/siem/ossim/server/reputation.data",
      "/etc/ossim/server/reputation.data"
    ],
    correctAnswer: 3,
    explanation: "In AlienVault OSSIM / USM SIEM, the IP reputation database containing known malicious IP addresses and indicators is located at `/etc/ossim/server/reputation.data`.",
    difficulty: "Medium"
  },
  {
    id: "csa-q172",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "According to the digital forensics investigation process, what is the critical step carried out immediately after collecting evidence?",
    options: [
      "Create a Chain of Custody Document",
      "Send it to the nearby police station",
      "Set a Forensic lab",
      "Call Organizational Disciplinary Team"
    ],
    correctAnswer: 0,
    explanation: "Immediately upon collecting evidence, the investigator must create and maintain a Chain of Custody document, recording chronological tracking of custody, control, transfer, analysis, and disposition.",
    difficulty: "Easy"
  },
  {
    id: "csa-q173",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following commands is used to append a rule that enables logging for inbound packets in Linux iptables?",
    options: [
      "$ iptables -B INPUT -j LOG",
      "$ iptables -A OUTPUT -j LOG",
      "$ iptables -A INPUT -j LOG",
      "$ iptables -B OUTPUT -j LOG"
    ],
    correctAnswer: 2,
    explanation: "The command `iptables -A INPUT -j LOG` appends (`-A`) a rule to the `INPUT` chain to jump (`-j`) to the `LOG` target, writing matching inbound packet headers to kernel logs.",
    difficulty: "Medium"
  },
  {
    id: "csa-q174",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Peter, a SOC analyst, is analyzing Cisco router logs and wants to filter the output to display only log messages generated by Access Control List (ACL) numbered 210.\n\nWhat filter should Peter add to the `show logging` command?",
    options: [
      "show logging | access 210",
      "show logging | forward 210",
      "show logging | include 210",
      "show logging | route 210"
    ],
    correctAnswer: 2,
    explanation: "In Cisco IOS CLI, the pipe filter `| include <string>` works like grep, filtering the output of `show logging` to show only lines containing '210'.",
    difficulty: "Medium"
  },
  {
    id: "csa-q175",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "What do HTTP status codes in the 1XX class represent?",
    options: [
      "Informational message",
      "Client error",
      "Success",
      "Redirection"
    ],
    correctAnswer: 0,
    explanation: "HTTP 1XX status codes (such as 100 Continue, 101 Switching Protocols) represent informational interim responses while request processing continues.",
    difficulty: "Easy"
  },
  {
    id: "csa-q176",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following is a report writing and tree-based data management tool that helps incident handlers organize findings and generate structured incident reports?",
    options: [
      "threat_note",
      "MagicTree",
      "IntelMQ",
      "Malstrom"
    ],
    correctAnswer: 1,
    explanation: "MagicTree is a tree-structured data management and reporting application designed for penetration testers and incident handlers to collect command outputs and generate automated reports.",
    difficulty: "Medium"
  },
  {
    id: "csa-q177",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Ray is a SOC analyst in a company affected by a high-volume DoS/DDoS attack. To contain the incident, Ray and his team allocate additional network bandwidth to perimeter connections and increase server capacity.\n\nWhat DDoS containment strategy are Ray and his team executing?",
    options: [
      "Blocking the Attacks",
      "Diverting the Traffic",
      "Degrading the services",
      "Absorbing the Attack"
    ],
    correctAnswer: 3,
    explanation: "Absorbing the Attack involves provisioning extra bandwidth headroom and scaling compute/server instances to absorb attack volume without taking services offline.",
    difficulty: "Easy"
  },
  {
    id: "csa-q178",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Sam, a security analyst, while analyzing IIS web server logs, detected an event matching regex `/\\w*((%27)|('))((%6F)|o|(%4F))((%72)|r|(%52))/ix`.\n\nWhat does this event log indicate?",
    options: [
      "SQL Injection Attack",
      "Parameter Tampering Attack",
      "XSS Attack",
      "Directory Traversal Attack"
    ],
    correctAnswer: 0,
    explanation: "This regular expression matches the classic SQL injection tautology `' OR` (single quote `%27` or `'` followed by `o`/`O`/`%6F` and `r`/`R`/`%52`), used by attackers to bypass authentication in SQL queries.",
    difficulty: "Medium"
  },
  {
    id: "csa-q179",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A user's workstation has been compromised by destructive, rapidly spreading malware.\n\nWhat is the primary recommended step to contain the malware from spreading across the corporate network?",
    options: [
      "Complaint to police in a formal way regarding the incident",
      "Turn off the infected machine / isolate from network",
      "Leave it to the network administrators to handle",
      "Call the legal department in the organization and inform about the incident"
    ],
    correctAnswer: 1,
    explanation: "Immediate containment requires network disconnection or powering off the infected endpoint to prevent worm/ransomware propagation across enterprise subnets.",
    difficulty: "Easy"
  },
  {
    id: "csa-q180",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which log storage method arranges event logs in the form of a circular buffer, overwriting the oldest entries when maximum storage capacity is reached?",
    options: [
      "FIFO",
      "LIFO",
      "non-wrapping",
      "wrapping"
    ],
    correctAnswer: 3,
    explanation: "In log retention terminology (such as Windows Event Log configurations), 'wrapping' (overwrite events as needed) arranges logs as a circular buffer where new events overwrite the oldest records once max capacity is reached.",
    difficulty: "Easy"
  },
  {
    id: "csa-q181",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "According to a standard Risk Assessment Matrix, what will be the resulting risk level when the probability of an attack is 'Very High' and the business impact is 'Major'?",
    options: [
      "High",
      "Extreme",
      "Low",
      "Medium"
    ],
    correctAnswer: 1,
    explanation: "In standard 5x5 enterprise risk matrices, the intersection of 'Very High' probability and 'Major / Critical' impact results in the highest risk classification, termed 'Extreme'.",
    difficulty: "Easy"
  },
  {
    id: "csa-q182",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A SOC analyst monitoring IDS logs observes HTTP GET requests where query parameters such as `?role=user` or `?account_type=standard` are modified to `?role=admin`.\n\nWhat attack does this event log indicate?",
    options: [
      "Directory Traversal Attack",
      "XSS Attack",
      "SQL Injection Attack",
      "Parameter Tampering Attack"
    ],
    correctAnswer: 3,
    explanation: "Parameter Tampering involves manipulating URL parameters, form fields, or HTTP headers to bypass access controls, escalate privileges, or modify transaction logic.",
    difficulty: "Easy"
  },
  {
    id: "csa-q183",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which type of Cyber Threat Intelligence (CTI) is designed to help executive leadership and CISOs understand adversary intent and make informed strategic security decisions in alignment with business risk?",
    options: [
      "Tactical Threat Intelligence",
      "Strategic Threat Intelligence",
      "Functional Threat Intelligence",
      "Operational Threat Intelligence"
    ],
    correctAnswer: 1,
    explanation: "Strategic Threat Intelligence delivers high-level overviews of threat landscapes, geopolitical motives, and business risk trends to executive decision-makers and CISOs.",
    difficulty: "Easy"
  },
  {
    id: "csa-q184",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "An attacker exploits client-side logic validation by modifying the URL from `http://www.buyonline.com/product.aspx?profile=12&debit=100` to `http://www.buyonline.com/product.aspx?profile=12&debit=10` to purchase a $100 item for $10.\n\nIdentify the attack depicted in this scenario.",
    options: [
      "Denial-of-Service Attack",
      "SQL Injection Attack",
      "Parameter Tampering Attack",
      "Session Fixation Attack"
    ],
    correctAnswer: 2,
    explanation: "Altering query string parameters in the URL (changing `debit=100` to `debit=10`) to manipulate transaction values is a Parameter Tampering / Price Tampering attack.",
    difficulty: "Easy"
  },
  {
    id: "csa-q185",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An organization wants to implement a SIEM architecture. The internal team handles on-premise log collection, but SIEM management, analytics, detection tuning, and 24/7 alert monitoring are outsourced to an MSSP.\n\nWhich SIEM deployment architecture will the organization adopt?",
    options: [
      "Cloud, MSSP Managed",
      "Self-hosted, Jointly Managed",
      "Self-hosted, MSSP Managed",
      "Self-hosted, Self-Managed"
    ],
    correctAnswer: 2,
    explanation: "In a Self-hosted, MSSP Managed model, the log collection hardware/software is hosted on-premise within the customer's datacenter, while the SIEM configuration and monitoring are operated by an external MSSP.",
    difficulty: "Easy"
  },
  {
    id: "csa-q186",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which process refers to silently discarding malicious packets at the routing level (directing traffic to a null interface) without informing the source that the data was dropped?",
    options: [
      "Load Balancing",
      "Rate Limiting",
      "Black Hole Filtering",
      "Drop Requests"
    ],
    correctAnswer: 2,
    explanation: "Black Hole Filtering (or Null Routing) routes unwanted or attack traffic into a null interface (Null0) without generating ICMP unreachable replies, mitigating DDoS congestion.",
    difficulty: "Easy"
  },
  {
    id: "csa-q187",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which phase of the incident handling and response process focuses specifically on limiting the scope, blast radius, and propagation of an active security incident?",
    options: [
      "Containment",
      "Data Collection",
      "Eradication",
      "Identification"
    ],
    correctAnswer: 0,
    explanation: "Containment focuses on stopping active spread, isolating affected subnets/hosts, revoking compromised sessions, and limiting the blast radius before eradication begins.",
    difficulty: "Easy"
  },
  {
    id: "csa-q188",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following tools is an incident orchestration and automated remediation platform used to recover from web application and endpoint security incidents?",
    options: [
      "CrowdStrike Falcon Orchestrator",
      "Symantec Secure Web Gateway",
      "Smoothwall SWG",
      "Proxy Workbench"
    ],
    correctAnswer: 0,
    explanation: "CrowdStrike Falcon Orchestrator is an incident automation platform designed to execute predefined response workflows and restore systems from compromised application/endpoint states.",
    difficulty: "Medium"
  },
  {
    id: "csa-q189",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which field in Windows Security and System Event Logs defines the operational category of the event, such as 'Audit Success', 'Audit Failure', 'Correlation Hint', or 'WDI Context'?",
    options: [
      "Keywords",
      "Task Category",
      "Level",
      "Source"
    ],
    correctAnswer: 0,
    explanation: "In Windows Event Logs, the 'Keywords' field contains bitmask tags such as 'Audit Success' or 'Audit Failure' used for filtering and classification.",
    difficulty: "Medium"
  },
  {
    id: "csa-q190",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which command is used to view real-time iptables packet filtering logs on Ubuntu and Debian Linux distributions?",
    options: [
      "$ tailf /var/log/sys/kern.log",
      "$ tailf /var/log/kern.log",
      "# tailf /var/log/messages",
      "# tailf /var/log/sys/messages"
    ],
    correctAnswer: 1,
    explanation: "On Debian and Ubuntu systems, kernel logs generated by iptables rules with `-j LOG` are recorded in `/var/log/kern.log` (viewed in real time with `tailf /var/log/kern.log` or `tail -f`).",
    difficulty: "Easy"
  },

  // =========================================================================
  // ADVANCED SOC SCENARIOS & THREAT HUNTING QUESTIONS (csa-q191 to csa-q230)
  // =========================================================================
  {
    id: "csa-q191",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Jennifer, a SOC analyst, initiates an investigation after receiving an alert about potential unauthorized activity on a workstation. She starts by retrieving EDR logs, analyzing network traffic patterns in the SIEM, and inspecting email gateway logs for signs of malicious attachments. Her objective is to determine whether this alert represents a legitimate security incident.\n\nIn which phase of the Incident Response process is Jennifer currently operating?",
    options: [
      "Incident Triage",
      "Evidence Gathering and Forensic Analysis",
      "Notification",
      "Incident Recording and Assignment"
    ],
    correctAnswer: 0,
    explanation: "Jennifer is in the Incident Triage phase because she is rapidly evaluating whether the alert is a true positive security incident, determining its scope, severity, and initial credibility.",
    difficulty: "Medium"
  },
  {
    id: "csa-q192",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Your team detects an adversary attempting to bypass authentication controls and escalate privileges. To counter the threat, you implement credential encryption, behavioral analytics, and process isolation following a structured framework that systematically maps defensive techniques to known adversarial tactics.\n\nWhich framework did you choose to apply in this scenario?",
    options: [
      "Systems Security Engineering CMM",
      "MITRE D3FEND Framework",
      "Cybersecurity Capability Maturity Model",
      "NIST Cybersecurity Framework 2.0"
    ],
    correctAnswer: 1,
    explanation: "MITRE D3FEND is a knowledge graph and defensive ontology specifically designed to systematically map defensive cybersecurity techniques and countermeasures to known offensive adversary tactics.",
    difficulty: "Medium"
  },
  {
    id: "csa-q193",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "You are tasked with developing a threat model to safeguard critical banking assets against targeted campaigns. Senior management requires intelligence providing insights into high-level risks, geopolitical threats, and emerging cybercriminal strategies with long-term implications for organizational security posture.\n\nWhich type of threat intelligence are you seeking?",
    options: [
      "Strategic threat intelligence",
      "Technical threat intelligence",
      "Tactical threat intelligence",
      "Operational threat intelligence"
    ],
    correctAnswer: 0,
    explanation: "Strategic Threat Intelligence focuses on high-level risk trends, geopolitical drivers, adversary motivations, and long-term security posture implications to guide executive decision-making and CISOs.",
    difficulty: "Easy"
  },
  {
    id: "csa-q194",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A SOC team needs functionality so the SIEM continuously scans logs for anomalies, identifies suspicious activities, notifies analysts when predefined security thresholds are reached, and generates incident tickets with event details.\n\nWhich function should be configured to achieve this?",
    options: [
      "Log collection",
      "Alerting and reporting",
      "Log normalization",
      "Log parsing"
    ],
    correctAnswer: 1,
    explanation: "Alerting and Reporting is the SIEM function that monitors real-time rules, generates automated notifications when security thresholds trigger, and creates tracked incident tickets for analyst triage.",
    difficulty: "Easy"
  },
  {
    id: "csa-q195",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "The SOC team at Rapid Response Group is using Microsoft Sentinel. To reduce response times and eliminate manual intervention for repetitive actions, they aim to automate routine security tasks (such as alert enrichment, IP blocking, and stakeholder notifications) using automated workflows.\n\nWhich component of Microsoft Sentinel should they utilize?",
    options: [
      "Community",
      "Playbooks",
      "Workspace",
      "Analytics"
    ],
    correctAnswer: 1,
    explanation: "In Microsoft Sentinel, Playbooks (powered by Azure Logic Apps) provide automated SOAR workflows to orchestrate incident response, alert enrichment, and automated remediation tasks.",
    difficulty: "Easy"
  },
  {
    id: "csa-q196",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A SOC analyst monitors network traffic to detect potential data exfiltration using a security solution that inspects packet headers in real time. During incident response, the solution struggles to inspect encrypted traffic payloads.\n\nWhich security control, with this known limitation, is the SOC team relying on?",
    options: [
      "VPN",
      "Packet filters",
      "SSH",
      "IPsec"
    ],
    correctAnswer: 1,
    explanation: "Packet filters inspect packet header fields (IP addresses, ports, protocols) to permit or deny traffic, but they cannot inspect encrypted application payloads (TLS/SSL).",
    difficulty: "Easy"
  },
  {
    id: "csa-q197",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "As a Threat Hunter, you notice several endpoints generating unusual outbound traffic to an unfamiliar IP address in small, encrypted bursts at irregular intervals. There are no known IoCs associated with the destination, and traditional tools did not alert. You launch a threat hunting initiative driven by exploratory investigation of this anomaly.\n\nWhat type of threat hunting approach is best suited for this situation?",
    options: [
      "Unstructured hunting",
      "Situational or entity-driven hunting",
      "Reactive hunting",
      "Structured hunting"
    ],
    correctAnswer: 0,
    explanation: "Unstructured Threat Hunting begins with an observed anomaly or weak signal (without a predefined hypothesis or known IoC) where the hunter freely explores data to uncover hidden Indicators of Attack (IoAs).",
    difficulty: "Medium"
  },
  {
    id: "csa-q198",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The SOC team is investigating a suspected malware incident during the Analysis Phase. Their primary initial goal is to validate the detection, ensure the threat is genuine, and eliminate false alarms.\n\nWhich action should the SOC team take to confirm initial findings and eliminate false alarms?",
    options: [
      "Verify generated logs",
      "Verify false positives",
      "Scan the enterprise environment and update the scope",
      "Root-cause analysis"
    ],
    correctAnswer: 1,
    explanation: "During the Analysis phase, analysts must explicitly 'Verify false positives' by evaluating corroborating evidence (process lineage, file hashes, user context) to rule out benign noise before triggering disruption.",
    difficulty: "Easy"
  },
  {
    id: "csa-q199",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A healthcare organization's SIEM detects unusual HTTP requests targeting its portal with TRACE and OPTIONS methods originating from foreign IPs during non-business hours.\n\nWhat is the primary security concern with TRACE and OPTIONS requests?",
    options: [
      "They expose information about server-supported methods and request headers",
      "They can be used to upload malicious payloads directly to the server",
      "They make Distributed Denial of Service (DDoS) attacks easier",
      "They allow attackers to bypass authentication controls"
    ],
    correctAnswer: 0,
    explanation: "OPTIONS discloses server-supported HTTP methods (PUT, DELETE, etc.), while TRACE echoes back request headers (enabling Cross-Site Tracing / XST attacks and credential theft), exposing critical reconnaissance data.",
    difficulty: "Medium"
  },
  {
    id: "csa-q200",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A threat hunter discovers that terminated malicious processes keep respawning on an endpoint. Inspection reveals unauthorized scheduled tasks and suspicious registry run keys executing obfuscated scripts on startup.\n\nWhich signs should the threat hunter focus on to confirm and eradicate the threat locally?",
    options: [
      "Network-based artifacts",
      "Threat intelligence and adversary context",
      "Host-based artifacts",
      "Indicators of Attack (IoAs)"
    ],
    correctAnswer: 2,
    explanation: "Host-based artifacts (scheduled tasks, registry autoruns, startup scripts, process ancestry, dropped files) are the primary evidence required to locate and eradicate local persistence mechanisms.",
    difficulty: "Easy"
  },
  {
    id: "csa-q201",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "An adversary syndicate targets executives using social engineering, human manipulation, and deceptive pretexts (posing as journalists or consultants). An analyst focuses on deception detection and psychological profiling to understand their intent.\n\nWhich type of intelligence is the analyst leveraging?",
    options: [
      "Human Intelligence",
      "Threat Intelligence Feeds",
      "Open-Source Intelligence (OSINT)",
      "Technical Threat Intelligence"
    ],
    correctAnswer: 0,
    explanation: "Human Intelligence (HUMINT) focuses on interpersonal information gathering, social engineering analysis, psychological profiling, and behavioral deception detection.",
    difficulty: "Easy"
  },
  {
    id: "csa-q202",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "To assess a stealthy malware infection, a forensic team captures system baseline snapshots before and after suspected infection to compare file systems, registry keys, and running services for unauthorized modifications.\n\nWhich process are they following?",
    options: [
      "Digital forensics",
      "Signature-based detection",
      "Threat intelligence gathering",
      "Host integrity monitoring"
    ],
    correctAnswer: 3,
    explanation: "Host Integrity Monitoring (or File/System Integrity Monitoring - FIM) involves capturing baseline system snapshots and comparing them against current states to detect unauthorized changes and stealth persistence.",
    difficulty: "Medium"
  },
  {
    id: "csa-q203",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A SOC is overwhelmed by false positives. To resolve this, the engineering team defines, tunes, and governs clear threat detection scenarios aligned with environmental risk and data sources.\n\nWhich process is the team implementing?",
    options: [
      "SIEM use case management",
      "IT compliance",
      "Security analytics",
      "Log forensics"
    ],
    correctAnswer: 0,
    explanation: "SIEM Use Case Management is the structured lifecycle process of identifying, designing, testing, tuning, and maintaining detection rules to maximize threat visibility while suppressing false positives.",
    difficulty: "Medium"
  },
  {
    id: "csa-q204",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "An MSSP requires storing structured log data in a text-based tabular format organized in rows and columns that allows easy export into spreadsheets or relational databases.\n\nWhich log format should they choose?",
    options: [
      "Comma-Separated Values (CSV) format",
      "Cloud storage",
      "Syslog format",
      "Database"
    ],
    correctAnswer: 0,
    explanation: "Comma-Separated Values (CSV) stores tabular records in plain text with rows and comma-delimited columns, providing native compatibility with spreadsheet tools and database loaders.",
    difficulty: "Easy"
  },
  {
    id: "csa-q205",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "When designing a real-time SOC monitoring dashboard to enable fast, accurate decisions and prevent analyst cognitive overload, which guiding principle should be applied?",
    options: [
      "Include as much data as possible to ensure complete visibility",
      "Restrict dashboard access to only network administrators",
      "Prioritize critical information and remove unnecessary details",
      "Use only historical data to avoid real-time inconsistencies"
    ],
    correctAnswer: 2,
    explanation: "Effective SOC dashboards must prioritize high-severity, actionable items and eliminate visual clutter, minimizing cognitive load and preventing alert fatigue during critical incidents.",
    difficulty: "Easy"
  },
  {
    id: "csa-q206",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Forensic investigators analyzing a compromised web application examine cookie security attributes (`HttpOnly`, `Secure`, `SameSite`) and track abnormal session token reuse patterns.\n\nWhich attack vector is the forensic team investigating?",
    options: [
      "Session poisoning",
      "Man-in-the-middle (MITM) attack",
      "Cross-site scripting (XSS)",
      "SQL injection"
    ],
    correctAnswer: 0,
    explanation: "Auditing cookie flags (`HttpOnly`, `Secure`, `SameSite`) and tracking token manipulation directly targets Session Poisoning / Session Hijacking attack vectors.",
    difficulty: "Medium"
  },
  {
    id: "csa-q207",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "To guarantee dependable, reliable log delivery from remote sites to a central Syslog server across unstable WAN links, which Syslog architectural layer should be optimized and hardened?",
    options: [
      "Syslog application layer",
      "Syslog management and filtering",
      "Syslog content layer",
      "Syslog transport layer"
    ],
    correctAnswer: 3,
    explanation: "The Syslog Transport Layer (using TCP/TLS instead of lossy UDP, implementing local queue buffering and retransmission) governs reliable delivery across unreliable networks.",
    difficulty: "Medium"
  },
  {
    id: "csa-q208",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Snort IDS triggers an alert matching rule: `alert tcp any any -> any 80 (msg:\"SQL Injection attempt detected\"; content:\"' OR T=T\"; nocase; sid:1000001; rev:1;)`. The SIEM correlates this with failed logins and blocks the source IP.\n\nWhich detection method is used by this Snort rule?",
    options: [
      "Behavioral-based detection",
      "Signature-based detection",
      "Anomaly-based detection",
      "Statistical-based detection"
    ],
    correctAnswer: 1,
    explanation: "This rule relies on Signature-based detection, searching for an exact byte/string payload (`' OR T=T`) known to represent malicious activity.",
    difficulty: "Easy"
  },
  {
    id: "csa-q209",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A security team is developing a SIEM use case to detect privilege escalation on Windows servers. They have validated Active Directory and Windows Security log sources.\n\nWhat is their NEXT step in the use case development process?",
    options: [
      "Define response actions for detected incidents before writing the rules",
      "Define correlation rules and conditions that detect specific privilege escalation patterns",
      "Implement and test the use case immediately in the production SIEM environment",
      "Collect historical security logs to confirm the use case is necessary"
    ],
    correctAnswer: 1,
    explanation: "Once event sources are validated, the engineering team must define the specific correlation rules, threshold conditions, and behavioral logic that identify privilege escalation patterns.",
    difficulty: "Medium"
  },
  {
    id: "csa-q210",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "During a DDoS incident disrupting e-commerce operations, SIEM and PCAP analysis trace traffic back to command-and-control (C2) servers coordinating a botnet.\n\nWhich eradication strategy will sever the attacker's control over infected devices and halt the attack?",
    options: [
      "Rate limiting",
      "Neutralizing handlers",
      "Blocking potential attacks",
      "Disabling botnets"
    ],
    correctAnswer: 1,
    explanation: "Neutralizing handlers (sinkholing, blocking, or taking down C2 handler nodes) severs the adversary's command link to botnet nodes, halting coordinated attacks.",
    difficulty: "Medium"
  },
  {
    id: "csa-q211",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A mid-sized healthcare organization with strict HIPAA requirements lacks an internal SOC and needs 24/7 proactive threat hunting and direct incident containment.\n\nWhich service model best meets their needs?",
    options: [
      "MSSP with 24/7 log monitoring and incident escalation",
      "Self-hosted SIEM with in-house SOC analysts",
      "MDR with proactive threat hunting and incident containment",
      "Cloud-based SIEM with MSSP-managed services"
    ],
    correctAnswer: 2,
    explanation: "Managed Detection and Response (MDR) provides continuous 24/7 monitoring, proactive threat hunting, and active hands-on incident containment (such as endpoint isolation).",
    difficulty: "Easy"
  },
  {
    id: "csa-q212",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A law firm deploys an intermediary solution that intercepts and inspects all outbound HTTP/HTTPS requests, allowing the SOC to block malicious websites and phishing URLs before they reach users.\n\nWhich containment component is being used?",
    options: [
      "Whitelisting",
      "Blacklisting",
      "Web content filtering",
      "Proxy servers"
    ],
    correctAnswer: 3,
    explanation: "A Proxy Server acts as an inline intermediary for client HTTP/HTTPS requests, providing deep inspection, SSL decryption, web filtering, and logging of outbound traffic.",
    difficulty: "Easy"
  },
  {
    id: "csa-q213",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Following a ransomware incident, GlobalTech is restoring 2.3 TB of data from Veeam backups, rebuilding 23 compromised endpoints, and re-enabling network connectivity after validating system cleanliness.\n\nWhich Incident Response phase is this?",
    options: [
      "Post-incident activities",
      "Containment",
      "Eradication",
      "Recovery"
    ],
    correctAnswer: 3,
    explanation: "Restoring data from verified backups, rebuilding systems from clean images, and returning services safely to production represents the Recovery phase.",
    difficulty: "Easy"
  },
  {
    id: "csa-q214",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "David detects unauthorized software installed on a high-privilege Windows server outside business hours.\n\nWhich Windows Event Log should he examine to determine precisely when and how these software installations occurred?",
    options: [
      "Security event log",
      "System event log",
      "Setup event log",
      "Application event log"
    ],
    correctAnswer: 2,
    explanation: "The Windows Setup Event Log (`Setup.evtx`) specifically records operating system servicing, software installation, package deployments, and update events.",
    difficulty: "Medium"
  },
  {
    id: "csa-q215",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A cybersecurity firm wants to integrate automated real-time threat intelligence feeds into Microsoft Sentinel using an industry-standard transport protocol.\n\nWhich Microsoft Sentinel data connector should they deploy?",
    options: [
      "Threat Intelligence Platforms data connector",
      "Syslog connector",
      "TAXII data connector",
      "Microsoft Defender for Cloud (Legacy) connector"
    ],
    correctAnswer: 2,
    explanation: "The TAXII (Trusted Automated eXchange of Intelligence Information) Data Connector in Microsoft Sentinel imports structured STIX threat feeds over standard HTTPS protocols.",
    difficulty: "Easy"
  },
  {
    id: "csa-q216",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "NationalHealth, a government agency managing patient records, is subject to strict data sovereignty laws mandating on-soil data processing and zero third-party outsourcing. They have a substantial budget and can hire internal staff.\n\nWhich SOC model is most suitable?",
    options: [
      "Outsourced SOC model",
      "Hybrid SOC model (expertise of an MSSP)",
      "In-house/internal SOC model",
      "A combination of multiple MSSPs"
    ],
    correctAnswer: 2,
    explanation: "An In-House / Internal SOC model maintains complete sovereign control over telemetry and customer data within the agency's borders without third-party exposure.",
    difficulty: "Easy"
  },
  {
    id: "csa-q217",
    examId: "csa",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "SecureTech operates in AWS and needs a managed service that continuously analyzes CloudTrail events, VPC Flow Logs, and DNS query logs using machine learning and threat intelligence to surface actionable security findings.\n\nWhich AWS service best fits?",
    options: [
      "Amazon Macie",
      "AWS Config",
      "AWS Security Hub",
      "Amazon GuardDuty"
    ],
    correctAnswer: 3,
    explanation: "Amazon GuardDuty is the managed intelligent threat detection service that continuously monitors CloudTrail management events, VPC Flow Logs, and DNS logs for malicious activity.",
    difficulty: "Easy"
  },
  {
    id: "csa-q218",
    examId: "csa",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A Threat Hunter implements a platform that aggregates, normalizes, and correlates external threat intelligence feeds with internal endpoint telemetry, firewall logs, and network flows into a single analytical view.\n\nWhat key capability is being leveraged?",
    options: [
      "Threat Reports",
      "Intelligence Buy-In",
      "Threat Trending",
      "Data Integration"
    ],
    correctAnswer: 3,
    explanation: "Data Integration combines diverse external threat intelligence feeds and internal multi-source telemetry into a normalized data pipeline, enabling cross-domain correlation.",
    difficulty: "Easy"
  },
  {
    id: "csa-q219",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Security analysts discover production web servers running a third-party library vulnerable to a zero-day exploit. Patches were rolled back due to stability issues, leaving the vulnerable library exposed without compensating controls.\n\nHow should this risk be classified according to OWASP / web application security?",
    options: [
      "Software and data integrity failures",
      "Security logging and monitoring failures",
      "Vulnerable and outdated components",
      "Insecure design"
    ],
    correctAnswer: 2,
    explanation: "Running software, frameworks, or dependencies with known unpatched vulnerabilities falls under OWASP Top 10 category 'Vulnerable and Outdated Components' (A06:2021).",
    difficulty: "Easy"
  },
  {
    id: "csa-q220",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A newly deployed SIEM fails to detect known attacks. An audit discovers that critical logs from firewalls, IDS, and endpoints are not arriving at the SIEM collectors at all.\n\nWhat is the primary reason the SIEM is not functioning as expected?",
    options: [
      "Improper configuration or design of the SIEM deployment architecture",
      "Lack of understanding of SIEM features and capabilities",
      "Difficulty handling the volume of collected log data",
      "Delays in log collection and analysis due to system performance issues"
    ],
    correctAnswer: 0,
    explanation: "When telemetry from critical control points is missing completely, the failure stems from improper configuration or architectural design of the log shipping and collector pipelines.",
    difficulty: "Medium"
  },
  {
    id: "csa-q221",
    examId: "csa",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A high-priority SIEM alert flags an employee account attempting logins from a foreign country outside business hours (impossible travel). To automate immediate containment, which SOAR playbook should be executed?",
    options: [
      "Alert Enrichment SOAR Playbook",
      "Deprovisioning Users SOAR Playbook",
      "Malware Containment SOAR Playbook",
      "Phishing Investigations SOAR Playbook"
    ],
    correctAnswer: 1,
    explanation: "A Deprovisioning Users SOAR Playbook automates identity containment by immediately disabling the account, revoking active session tokens, and invalidating credentials to prevent unauthorized access.",
    difficulty: "Medium"
  },
  {
    id: "csa-q222",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Sarah is suspected of exfiltrating sensitive financial records. Anomalous outbound transfers were flagged by the SIEM. Which containment measure should the SOC prioritize FIRST?",
    options: [
      "Access control",
      "Change passwords regularly",
      "Isolate the storage",
      "Data-Centric Audit and Protection (DCAP)"
    ],
    correctAnswer: 0,
    explanation: "Enforcing Access Control (disabling the user's account and revoking share/session permissions) is the fastest and most targeted initial containment measure to halt ongoing data exfiltration.",
    difficulty: "Medium"
  },
  {
    id: "csa-q223",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SIEM alert indicates the NetBIOS Helper service entered a running state, followed immediately by multiple Windows Security Event ID 4624 events with Logon Type 3 (Network Logon) across several servers in minutes.\n\nWhich incident is the SIEM detecting?",
    options: [
      "An attacker performing lateral movement within the network",
      "A user connecting to shared files from multiple workstations",
      "A network administrator conducting routine maintenance",
      "A malware infection spreading via SMB protocol"
    ],
    correctAnswer: 0,
    explanation: "A burst of Event ID 4624 Logon Type 3 (Network Logon) events across multiple endpoints combined with NetBIOS helper activity is a primary indicator of lateral movement using stolen credentials or Pass-the-Hash.",
    difficulty: "Medium"
  },
  {
    id: "csa-q224",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A Level 1 SOC analyst investigating web attacks needs a standardized log format that records remote host, timestamp, requested URI, HTTP status code, referrer, and user-agent in a structured line format.\n\nWhich standardized log format should be chosen?",
    options: [
      "JSON Format",
      "Common Log Format (CLF)",
      "Tab-Separated Format",
      "Extended Log Format (ELF)"
    ],
    correctAnswer: 3,
    explanation: "Extended Log Format (ELF / NCSA Combined) extends the basic Common Log Format by appending the `Referer` and `User-Agent` fields, which are vital for web attack investigations.",
    difficulty: "Easy"
  },
  {
    id: "csa-q225",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "After exfiltrating confidential blueprints, an APT group executes commands to overwrite system event logs, wipe forensic artifacts, modify file timestamps, and disable monitoring tools.\n\nWhich APT lifecycle phase does this represent?",
    options: [
      "Search and Exfiltration",
      "Initial Intrusion",
      "Cleanup",
      "Expansion"
    ],
    correctAnswer: 2,
    explanation: "The Cleanup phase of the APT lifecycle focuses on defense evasion, anti-forensics, timestomping, and clearing logs to cover tracks and prevent attribution.",
    difficulty: "Easy"
  },
  {
    id: "csa-q226",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC receives logs in disparate schemas from firewalls, EDR, identity providers, and cloud services. Analysts must manually translate fields before correlating events.\n\nWhat approach should be implemented to convert heterogeneous logs into a common, standardized schema?",
    options: [
      "Log transformation",
      "Log normalization",
      "Log correlation",
      "Log collection"
    ],
    correctAnswer: 1,
    explanation: "Log Normalization parses and maps disparate vendor field names into a common taxonomy (e.g. `src_ip`, `dst_ip`, `user`, `event_type`), enabling unified correlation and analysis.",
    difficulty: "Easy"
  },
  {
    id: "csa-q227",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A hospital SOC detects a massive brute-force attack on employee portal accounts. During the Containment Phase, which action will best enhance long-term account security against future credential attacks?",
    options: [
      "Notify affected users",
      "Block IP addresses and enforce account lockout policies",
      "Cross-verify false positives",
      "Enable multi-factor authentication (MFA)"
    ],
    correctAnswer: 3,
    explanation: "Enabling Multi-Factor Authentication (MFA) provides durable defense against credential stuffing and brute-force attacks by requiring an independent verification factor.",
    difficulty: "Easy"
  },
  {
    id: "csa-q228",
    examId: "csa",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Forensic analysis of a financial institution's servers uncovers unauthorized scheduled tasks running obfuscated scripts that establish external C2 connections months after initial VPN credential compromise.\n\nWhich phase of the APT lifecycle does this align with?",
    options: [
      "Cleanup",
      "Initial Intrusion",
      "Search and Exfiltration",
      "Persistence"
    ],
    correctAnswer: 3,
    explanation: "Creating scheduled tasks or registry autoruns to maintain long-term access and survive reboots represents the Persistence phase of the APT lifecycle.",
    difficulty: "Easy"
  },
  {
    id: "csa-q229",
    examId: "csa",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "During a major breach investigation, the digital forensics team maintains a detailed chronological log recording who acquired the evidence, who accessed it, storage locations, and exact timestamps of transfers.\n\nWhat is this process called?",
    options: [
      "Chain of Custody",
      "Incident Documentation",
      "Data Imaging",
      "Digital Fingerprinting"
    ],
    correctAnswer: 0,
    explanation: "Chain of Custody is the formal chronological documentation recording the custody, control, transfer, analysis, and disposition of digital/physical evidence to guarantee legal defensibility.",
    difficulty: "Easy"
  },
  {
    id: "csa-q230",
    examId: "csa",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A multinational company experiences blind spots because logs are stored locally in silos across branch offices. An APT exfiltrated data before detection. To enable global correlation and fast triage, what architecture should be implemented?",
    options: [
      "Centralized logging",
      "Event tracing",
      "Distributed logging",
      "Local logging"
    ],
    correctAnswer: 0,
    explanation: "Centralized Logging aggregates telemetry from all enterprise endpoints, network appliances, and cloud instances into a unified SIEM, eliminating silos and enabling real-time correlation.",
    difficulty: "Easy"
  },
  // =========================================================================
  // EC-COUNCIL CSA v2 (2026 DUMPSPLANET 200 QUESTIONS BANK)
  // Exam ID: csa-v2
  // =========================================================================
  {
    id: "csav2-q1",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "The SOC team is tasked with enhancing the security of an organization's network infrastructure. The organization's public-facing web servers, which handle customer transactions, need to be isolated from the internal private network containing sensitive employee data and proprietary systems. The goal is to create a buffer zone that limits exposure of internal systems if the web servers are compromised during a cyberattack, such as a DDoS or SQL injection attempt. As a SOC analyst, which network architecture component would you recommend implementing to establish this isolated region?",
    options: [
          "Demilitarized Zone (DMZ)",
          "Intrusion Detection System (IDS)",
          "Firewall",
          "Honeypot"
    ],
    correctAnswer: 0,
    explanation: "A DMZ is the standard architecture component used to place internet-facing services into a separate, controlled buffer network between the untrusted internet and the trusted internal network, limiting lateral movement.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q2",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A Security Operations Center (SOC) analyst receives a high-priority alert indicating unusual user activity. An employee account is attempting to access company resources from a different country and outside of their normal working hours. This behavior raises concerns about potential account compromise or unauthorized access. To automate the initial response and quickly restrict access while further investigating the incident, which SOAR playbook would be relevant to adapt and implement?",
    options: [
          "Alert Enrichment SOAR Playbook",
          "Deprovisioning Users SOAR Playbook",
          "Malware Containment SOAR Playbook",
          "Phishing Investigations SOAR Playbook"
    ],
    correctAnswer: 1,
    explanation: "A 'Deprovisioning Users' SOAR playbook immediately disables the compromised account, revokes active sessions, and invalidates tokens to eliminate attacker dwell time.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q3",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A leading e-commerce company relies on backend servers for processing customer transactions. You are working with their cybersecurity team as a SOC analyst. One morning, you notice a sharp increase in CPU utilization on one of your backend servers. Your team scans and monitors the server and finds that an unknown process is running, consuming excessive resources. You further perform detailed forensic analysis and identify the presence of an unrecognized scheduled task that triggers a PowerShell script connecting to an unknown IP address. What should you do to confirm whether this is an active attack?",
    options: [
          "Analyze the network logs to identify external connections",
          "Check file integrity and detect recent unauthorized changes",
          "Analyze the system logs for unauthorized changes",
          "Review user access logs for unauthorized activity"
    ],
    correctAnswer: 0,
    explanation: "Analyzing network logs (firewall/proxy logs, netflow, EDR events) is the fastest and most authoritative way to validate ongoing command-and-control (C2) communication with the unknown IP address.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q4",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "One week after a ransomware attack disrupted operations, Sarah, a SOC analyst, leads a review meeting with the IT team, security engineers, and business unit representatives. The group reviews the incident timeline, calculates a business impact of $157,000 due to downtime and data loss, and identifies seven critical improvements to enhance detection and response processes. Which of the following Incident Response phase is this?",
    options: [
          "Recovery",
          "Post-Incident Activities",
          "Eradication",
          "Containment"
    ],
    correctAnswer: 1,
    explanation: "This is the Post-Incident Activities (Lessons Learned) phase, where stakeholders review the timeline, evaluate financial impact, and develop actionable improvements to prevent recurrence.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q5",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An organization with a complex IT infrastructure is planning to implement a SIEM solution to improve its threat detection and response capabilities. Due to the scale and complexity of its systems, the organization opts for a phased deployment approach to ensure a smooth implementation and reduce potential risks. Which of the following should be the first phase in their SIEM deployment strategy?",
    options: [
          "Automate incident response processes",
          "Implement User and Entity Behavior Analytics (UEBA)",
          "Set up the log management component before deploying the SIEM component",
          "Configure security analytics to identify potential threats"
    ],
    correctAnswer: 2,
    explanation: "Setting up log management (collection, normalization, parsing, and storage) is the essential first phase to establish a reliable data pipeline before layering analytics or automation.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q6",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Following a high-priority security incident, you, as an Incident Responder at a Cyber Incident Response firm, initiate an internal investigation after reports confirm a serious data breach in which sensitive customer data, including payment details and personal information, was stolen from a critical web server. You begin analyzing the server logs to reconstruct the attack timeline and identify how the attacker gained access. During your investigation, you discover suspicious activity in the logs, including repeated requests attempting to access files and directories outside of the web server\u2019s root directory. Some of these requests appear to be manipulating URL paths to navigate into restricted system files\u2014a behavior that is often associated with web-based exploits. You suspect that a vulnerability in the web server was exploited to bypass security restrictions and access unauthorized directories, potentially exposing sensitive configurations and credentials. However, you still need to confirm the exact technique used. Which type of web application attack might have caused this incident?",
    options: [
          "Cross-Site Scripting (XSS) Attacks",
          "Directory Traversal",
          "SQL Injection Attack",
          "Session Attacks: Cookie Poisoning"
    ],
    correctAnswer: 1,
    explanation: "Directory Traversal involves manipulating URL path sequences (e.g. '../') to escape the web root and access restricted operating system directories and sensitive configuration files.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q7",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC analyst receives an alert indicating that the system time on a critical Windows server was changed at 3:00 AM. There are no scheduled maintenance tasks at this time. Unauthorized time changes can be used to evade security controls, such as altering timestamps to obscure malicious activity. The analyst must identify the relevant event codes that log system time modifications and related suspicious behavior. Which of the following Windows Security Event Codes should the analyst review to investigate potential tampering?",
    options: [
          "4608 and 4609",
          "4625 and 4634",
          "4616 and 4618",
          "4616 and 4624"
    ],
    correctAnswer: 2,
    explanation: "Event ID 4616 explicitly records 'The system time was changed' (including old/new time and user context), and Event ID 4618 monitors security events and audit log patterns.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q8",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At a large healthcare organization, the Security Operations Center (SOC) detects a surge of failed login attempts on employee accounts, indicating a possible brute-force attack. To contain the threat, the team quickly takes action to prevent unauthorized access. However, they also need to implement a security measure that strengthens account protection beyond just stopping the current attack, reducing the risk of similar incidents in the future. During the Containment Phase, which action would best enhance long-term account security against brute-force attacks?",
    options: [
          "Notify affected users",
          "Block IP addresses and enforce account lockout policies",
          "Cross-verify false positives",
          "Enable multi-factor authentication (MFA)"
    ],
    correctAnswer: 3,
    explanation: "Multi-Factor Authentication (MFA) is the most durable long-term control against brute-force and credential stuffing attacks by requiring an independent authentication factor beyond passwords.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q9",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "The Security Operations Center (SOC) team at Rapid Response Group, a leading cybersecurity firm, is facing challenges in managing security incidents efficiently. With an increasing volume of alerts and security events being generated daily in their Microsoft Sentinel environment, the team is struggling to respond to threats quickly and consistently. To enhance their incident response capabilities, they aim to automate routine security tasks, such as log collection, alert triaging, remediation steps, and notifications to stakeholders. By implementing automated workflows, they seek to reduce response times, eliminate manual intervention for repetitive actions, and ensure a standardized approach to handling security threats across the organization. Which component of Microsoft Sentinel should they utilize to create these automated workflows for incident response?",
    options: [
          "Community",
          "Playbooks",
          "Workspace",
          "Analytics"
    ],
    correctAnswer: 1,
    explanation: "In Microsoft Sentinel, Playbooks (powered by Azure Logic Apps) provide automated orchestration, alert triage, remediation actions, and ticketing workflows.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q10",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Secuzin Corp. is a large enterprise performing millions of financial transactions daily, making it critical to analyze security logs efficiently, detect suspicious activities, and respond to incidents in real time. Its SOC is responsible for managing security logs from various network devices, including firewalls, intrusion detection systems (IDS), authentication servers, and cloud services. To fulfill compliance and regulatory requirements that mandate long-term archival of logs, you need to provide a log storage solution that is scalable to handle increasing log volumes, provides encryption for data security, and is seamlessly accessible. Which storage solution should you choose to meet these long-term log storage requirements?",
    options: [
          "Distributed storage system",
          "Hybrid storage system",
          "Local storage",
          "Cloud storage"
    ],
    correctAnswer: 3,
    explanation: "Cloud storage provides elastic scalability, built-in encryption at rest and in transit, multi-tier lifecycle archiving, and high availability for long-term compliance retention.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q11",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A SOC analyst is responsible for designing a security dashboard that provides real-time monitoring of security threats. The organization wants to avoid overwhelming analysts with excessive information and focus on the most critical security alerts to ensure timely responses to potential threats. Which principle should guide the design of the dashboard?",
    options: [
          "Include as much data as possible to ensure complete visibility",
          "Restrict dashboard access to only network administrators",
          "Prioritize critical information and remove unnecessary details",
          "Use only historical data to avoid real-time inconsistencies"
    ],
    correctAnswer: 2,
    explanation: "SOC dashboards should follow the 'need-to-know for action' principle: highlight high-fidelity, high-impact alerts and eliminate clutter to reduce cognitive fatigue and speed triage.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q12",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "You are a Threat Hunter in an IT company\u2019s security team working to enhance threat hunting capabilities. You observed that relying solely on traditional security alerts often results in missed detections of sophisticated threats. To strengthen your approach, you decide to incorporate multiple data sources, including external threat intelligence feeds, internal security logs, network traffic data, and endpoint telemetry. To efficiently process this vast amount of data, you implement a new tool that can aggregate, normalize, and correlate threat intelligence with internal telemetry to gain a more holistic understanding of emerging threats and enhance detection accuracy. What key threat detection capability is being leveraged in this scenario?",
    options: [
          "Threat Reports",
          "Intelligence Buy-In",
          "Threat Trending",
          "Data Integration"
    ],
    correctAnswer: 3,
    explanation: "Data Integration ingests, normalizes, and correlates external threat intelligence with internal telemetry (EDR, logs, flows) to detect complex adversary behaviors across domains.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q13",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "The SOC team found a suspicious document file on a user's workstation. Upon initial inspection, the document appears benign, but deeper analysis reveals an embedded PowerShell script. The team suspects the script is designed to download and execute a malicious payload. They need to understand the script's functionality without triggering it. Which malware analysis technique is recommended to understand the PowerShell script's functionality without executing it?",
    options: [
          "Static analysis",
          "Dynamic analysis",
          "Automated behavioral analysis",
          "Network traffic analysis"
    ],
    correctAnswer: 0,
    explanation: "Static analysis extracts, de-obfuscates, and inspects script code and properties without executing the binary/script, preserving system safety.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q14",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A large financial institution has identified a sophisticated phishing campaign targeting employees, resulting in unauthorized access to sensitive customer data. The organization already uses a SIEM for log aggregation and alerting, alongside an EDR solution for endpoint visibility. Additionally, they have access to XDR for broader threat detection and XSOAR for security orchestration and automation. As a SOC analyst, you\u2019ve been asked to recommend an integration strategy to improve real-time threat correlation, streamline incident response workflows, and maximize the use of existing tools. Which integration would meet these goals?",
    options: [
          "Integrate XDR with SIEM",
          "Integrate XDR with XSOAR",
          "Integrate EDR with SIEM",
          "Integrate EDR with XSOAR"
    ],
    correctAnswer: 1,
    explanation: "Integrating XDR (cross-layered detection across endpoint, network, email) with XSOAR (orchestration and automated response playbooks) satisfies both advanced correlation and streamlined response.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q15",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "During routine monitoring, the SIEM detects an unusual spike in outbound data transfer from a critical database server. The typical outbound traffic for this server is around 5 MB/hour, but in the past 10 minutes, it has sent over 500 MB to an external IP address. No predefined signatures match this activity, but the SIEM raises an alert due to deviations from the server\u2019s normal behavior profile. Which detection method is responsible for this alert?",
    options: [
          "Heuristic-based detection",
          "Signature-based detection",
          "Rule-based detection",
          "Anomaly-based detection"
    ],
    correctAnswer: 3,
    explanation: "Anomaly-based detection identifies significant deviations from an established historical baseline or normal operational profile.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q16",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Jennifer, a SOC analyst, initiates an investigation after receiving an alert about potential unauthorized activity on Marcus's workstation. She starts by retrieving EDR logs from the endpoint, analyzing network traffic patterns in the Security Information and Event Management (SIEM) system, and inspecting email gateway logs for signs of malicious attachments. Her objective is to determine whether this alert represents a legitimate security incident. In which phase of the Incident Response process is Jennifer currently operating?",
    options: [
          "Incident Triage",
          "Evidence Gathering and Forensic Analysis",
          "Notification",
          "Incident Recording and Assignment"
    ],
    correctAnswer: 0,
    explanation: "Incident Triage is the rapid initial assessment phase to determine alert credibility, validate true positives versus false positives, and assess immediate severity.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q17",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A financial institution's SIEM is generating a high number of false positives, causing alert fatigue among SOC analysts. To reduce this burden and improve threat detection accuracy, the organization integrates AI capabilities into the SIEM. After implementation, the SOC team observes a significant decrease in redundant alerts, along with faster detection of genuine threats. Which AI capability contributed to this improvement?",
    options: [
          "Dynamic rule optimization",
          "Rule validation and testing",
          "Automated rule generation",
          "Data integration enhancement"
    ],
    correctAnswer: 0,
    explanation: "Dynamic rule optimization uses AI to automatically adapt thresholds, suppress repetitive non-malicious patterns, and evaluate contextual risk to minimize false alarms.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q18",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Jannet works in a multinational corporation that operates multiple data centers, cloud environments, and on-premises systems. As a SOC analyst, she notices that security incidents are taking too long to detect and investigate. After analyzing this, she discovers that logs from firewalls, endpoint security solutions, authentication servers, and cloud applications are scattered across different systems in various formats. Her team has to manually convert logs into a readable format before investigating incidents. What approach should she implement to accept logs from heterogeneous sources with different formats, convert them into a common format, and improve incident detection and response time?",
    options: [
          "Log transformation",
          "Log normalization",
          "Log correlation",
          "Log collection"
    ],
    correctAnswer: 1,
    explanation: "Log normalization standardizes heterogeneous log formats, timestamps, and field naming conventions into a unified schema (e.g. source_ip, user, action).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q19",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A security team is designing SIEM use-case logic to detect privilege escalation attempts on Windows servers. They have already identified and validated the necessary event sources (e.g., Active Directory logs, Windows Security logs). What should be their next step in the use case logic development process?",
    options: [
          "Define response actions for detected incidents before writing the rules",
          "Define correlation rules and conditions that detect specific privilege escalation patterns",
          "Implement and test the use case immediately in the production SIEM environment",
          "Collect historical security logs to confirm the use case is necessary"
    ],
    correctAnswer: 1,
    explanation: "After validating telemetry sources, the next logical step is to define the correlation logic, conditions, and thresholds that detect the specific attack behavior.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q20",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "As a SOC Administrator at a mid-sized financial institution, you noticed intermittent network slowdowns and unexplained high memory usage across multiple critical systems. Your initial analysis found no traces of malware, but a forensic investigation revealed unauthorized scheduled tasks that executed during off-peak hours. These tasks ran obfuscated scripts that connected to an external command-and-control (C2) server. Further investigations showed that the adversary had gained access months ago through a compromised VPN account, leveraging stolen credentials from a phishing campaign. Which phase of the Advanced Persistent Threat (APT) lifecycle does this scenario align with?",
    options: [
          "Cleanup",
          "Initial Intrusion",
          "Search and Exfiltration",
          "Persistence"
    ],
    correctAnswer: 3,
    explanation: "Creating scheduled tasks and startup mechanisms to maintain continuous access and survive reboots represents the Persistence phase of the APT lifecycle.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q21",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Mark Reynolds, a SOC analyst at a healthcare organization, is monitoring the SIEM system when he detects a potential security threat: a series of unusual login attempts targeting critical patient data servers. After investigating the alerts and collaborating with the incident response team, the SOC determines that the threat has a \u201cLikely\u201d chance of occurring and could cause \u201cSignificant\u201d damage, including operational disruptions, financial loss due to data breaches, and regulatory penalties under HIPAA. Using a standard Risk Matrix, how would this risk be categorized in terms of overall severity?",
    options: [
          "Medium",
          "Low",
          "High",
          "Very High"
    ],
    correctAnswer: 2,
    explanation: "In a standard Risk Matrix, combining a 'Likely' probability with 'Significant' impact places the risk in the 'High' severity category.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q22",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "ABC is a multinational company with multiple offices across the globe, and you are working as an L2 SOC analyst. You are implementing a centralized logging solution to enhance security monitoring. You must ensure that log messages from routers, firewalls, and servers across multiple remote offices are efficiently collected and forwarded to a central syslog server. To streamline this process, an intermediate component is deployed to receive log messages from different devices and forward them to the main syslog server. Which component in the syslog infrastructure performs this function?",
    options: [
          "Syslog Database",
          "Syslog Collector",
          "Syslog Listener",
          "Syslog Relay"
    ],
    correctAnswer: 3,
    explanation: "A Syslog Relay acts as an intermediate proxy that collects log streams from local branch devices, buffers them, and securely forwards them across WAN links to the central syslog server.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q23",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A large web hosting service provider, Web4Everyone, hosts multiple major websites and platforms. You are a Level 1 SOC analyst responsible for investigating web server logs for potential malicious activity. Recently, your team detected multiple failed login attempts and unusual traffic patterns targeting the company\u2019s web application. To efficiently analyze the logs and identify key details such as remote host, username, timestamp, requested resource, HTTP status code, and user-agent, you need a structured log format that ensures quick and accurate parsing. Which standardized log format will you choose for this scenario?",
    options: [
          "JSON Format",
          "Common Log Format (CLF)",
          "Tab-Separated Format",
          "Extended Log Format (ELF)"
    ],
    correctAnswer: 3,
    explanation: "Extended Log Format (ELF / Combined Log Format) extends the standard CLF fields by including Referer and User-Agent headers, essential for web traffic investigation.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q24",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Lisa Carter, a SOC analyst at a financial services firm, is performing a risk assessment following suspicious alerts detected by the SIEM. She evaluates three key factors: the likelihood of an attack succeeding based on current threat intelligence, the impact on critical business operations if the breach occurs, and the value of the assets targeted (e.g., customer data, financial systems). Using the standard risk assessment approach, which scenario represents the highest risk to the organization?",
    options: [
          "High Likelihood, High Impact, High Asset Value",
          "Low Likelihood, High Impact, Low Asset Value",
          "Low Likelihood, Low Impact, High Asset Value",
          "High Likelihood, Low Impact, High Asset Value"
    ],
    correctAnswer: 0,
    explanation: "Risk is maximized when probability (High Likelihood), operational damage (High Impact), and asset criticality (High Asset Value) are all at their highest levels.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q25",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SIEM alert is triggered due to unusual network traffic involving NetBIOS. The system log shows: \u201cThe TCP/IP NetBIOS Helper service entered the running state.\u201d Concurrently, Windows Security Event ID 4624 (\u201cAn account was successfully logged on\u201d) appears for multiple machines within a short time frame. The logon type is 3 (Network logon). Which of the following security incidents is the SIEM detecting?",
    options: [
          "An attacker performing lateral movement within the network",
          "A user connecting to shared files from multiple workstations",
          "A network administrator conducting routine maintenance",
          "A malware infection spreading via SMB protocol"
    ],
    correctAnswer: 0,
    explanation: "A burst of Event ID 4624 Logon Type 3 (Network logon) across multiple endpoints coupled with NetBIOS/SMB helper services strongly indicates lateral movement (e.g. PsExec, pass-the-hash).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q26",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A mid-sized hospital's SOC team has recently detected multiple malware incidents that disrupted access to patient records and caused operational inefficiencies. The SOC analysts have been tasked with eradicating current infections and preventing future attacks by addressing the underlying vulnerabilities that allowed the malware to breach defenses. As a SOC analyst, you need to recommend a step that directly targets weaknesses in the hospital\u2019s network infrastructure or system configurations exploited by the malware. Which eradication step would best address these root causes?",
    options: [
          "Fixing devices",
          "Using antivirus tools for quarantine",
          "Updating the malware database with vendor signatures",
          "Implementing blacklist techniques for file execution"
    ],
    correctAnswer: 0,
    explanation: "'Fixing devices' (patching exploited vulnerabilities, remediating misconfigurations, hardening OS baselines) directly eliminates the root cause enabling reinfection.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q27",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "The SOC team at CyberSecure Corp is conducting a security review to identify anomalous log entries from firewall logs. The team needs to extract patterns such as email addresses, IP addresses, and URLs to detect unauthorized access attempts, phishing activities, and suspicious external communications. The SOC analyst applies various regular expressions (regex) patterns to filter and analyze logs efficiently. For example, they use \\b\\d{1,3}.\\d{1,3}.\\d{1,3}.\\d{1,3}\\b to match IPv4 addresses. Which regex pattern should the SOC analyst use to extract all hexadecimal color codes found in the logs?",
    options: [
          "(0[1-9]|1[0-2])/(0[1-9]|(1[0-2])/[0-9]|3[01])\\d{4}",
          "([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})",
          "[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}",
          "\\b\\d{1,3}.\\d{1,3}.\\d{1,3}.\\d{1,3}\\b"
    ],
    correctAnswer: 1,
    explanation: "The regex pattern `([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})` matches 6-digit or 3-digit hexadecimal sequences commonly used for hex colors.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q28",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "As a Threat Hunter at a cybersecurity company, you notice several endpoints experiencing unusual outbound traffic to an unfamiliar IP address. The traffic is encrypted and occurs in small bursts at irregular intervals. There are no known IoCs associated with the destination, and traditional security tools have not flagged it as malicious. You decide to launch a threat-hunting initiative to determine whether this is an advanced persistent threat (APT) using sophisticated techniques to evade detection. The goal is to identify potential Indicators of Attack (IoAs) and map them against known adversary behaviors. What type of threat hunting approach is best suited for this situation?",
    options: [
          "Unstructured hunting",
          "Situational or entity-driven hunting",
          "Reactive hunting",
          "Structured hunting"
    ],
    correctAnswer: 0,
    explanation: "Unstructured hunting is analyst-driven exploration initiated from an anomalous, weak signal (without existing IoCs or triggered alerts) to uncover Indicators of Attack (IoAs).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q29",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The Security Operations Center (SOC) team is investigating a suspected malware incident during the Analysis Phase of their incident response process. Their primary goal is to validate the initial detection, ensure the threat is real, and gather critical intelligence to understand the scope of the attack. Which action should the SOC team take to confirm initial findings and eliminate false alarms?",
    options: [
          "Verify generated logs",
          "Verify false positives",
          "Scan the enterprise environment and update the scope",
          "Root-cause analysis"
    ],
    correctAnswer: 1,
    explanation: "Verifying false positives (validating trigger conditions against host and network telemetry) ensures analysts confirm true malice before launching disruptive containment actions.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q30",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "TechSolutions, a software development firm, discovered a potential data leak after an external security researcher reported finding sensitive customer data on a public code repository. Level 1 SOC analysts confirmed the presence of the data and escalated the issue. Level 2 analysts traced the source of the leak to an internal network account. The incident response team has been alerted, and the CISO demands a comprehensive analysis of the incident, including the extent of the data breach and the timeline of events. The SOC manager must decide whom to assign to the in-depth investigation. To accurately determine the timeline, extent, and root cause of the data leak, which SOC role is critical in gathering and analyzing digital evidence?",
    options: [
          "SOC Manager",
          "Subject Matter Expert",
          "Threat Intelligence Analyst",
          "Forensic Analyst"
    ],
    correctAnswer: 3,
    explanation: "A Forensic Analyst specializes in digital evidence acquisition, chain of custody, deep artifact reconstruction, timeline creation, and root cause discovery.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q31",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The SOC team is investigating a phishing attack that targeted multiple employees. During the Containment Phase, they need to determine how users interacted with the malicious email: whether they opened it, clicked links, downloaded attachments, or entered credentials. This information is critical to assessing impact and preventing further compromise. Which specific activity helps the SOC team understand user interactions with the phishing email?",
    options: [
          "Monitoring and containment validation",
          "Malware infection check",
          "User action verification",
          "Blocking command-and-control (C2) and email traffic"
    ],
    correctAnswer: 2,
    explanation: "User action verification analyzes email gateway, proxy, and identity telemetry to identify exact recipient interactions (opened email, clicked link, entered credentials).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q32",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "You are working at Tech Solutions, a global technology firm. Your team detects an adversary attempting to bypass authentication controls and escalate privileges within the enterprise network. To counter the threat, you implement credential encryption, behavioral analytics, and process isolation. Your approach follows a structured framework that systematically maps defensive techniques to known adversarial tactics, allowing you to anticipate and mitigate evolving cyber threats. Which framework did you choose to apply in this scenario?",
    options: [
          "Systems Security Engineering CMM",
          "MITRE D3FEND Framework",
          "Cybersecurity Capability Maturity Model",
          "NIST Cybersecurity Framework 2.0"
    ],
    correctAnswer: 1,
    explanation: "MITRE D3FEND is a knowledge graph and defensive ontology specifically built to map defensive techniques (countermeasures) directly to MITRE ATT&CK adversary tactics and techniques.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q33",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A multinational financial institution notices unusual network activity during a routine security audit. The SOC detects multiple failed login attempts, followed by a successful access attempt using an administrator's credentials from an unrecognized IP address. Shortly after, sensitive customer records are accessed without authorization. The company suspects a breach and calls in the forensic investigation team. During evidence collection, the forensic team creates a detailed record that tracks every individual who handled the evidence, its storage location, and timestamps of transfers. What is this process called?",
    options: [
          "Chain of Custody",
          "Incident Documentation",
          "Data Imaging",
          "Digital Fingerprinting"
    ],
    correctAnswer: 0,
    explanation: "Chain of Custody is the formal chronological record of custody, control, transfer, analysis, and disposition of digital and physical evidence to preserve legal admissibility.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q34",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "You are a Level 1 SOC analyst at a critical infrastructure provider. Threat actors infiltrated the network and exfiltrated sensitive system blueprints. Before detection, they executed commands that altered system logs, wiped forensic artifacts, and modified timestamps to mimic normal activity. They also manipulated security monitoring tools to prevent unusual login events from being recorded. Which APT lifecycle phase does this represent?",
    options: [
          "Search and Exfiltration",
          "Initial Intrusion",
          "Cleanup",
          "Expansion"
    ],
    correctAnswer: 2,
    explanation: "The Cleanup (anti-forensics / defense evasion) phase involves deleting or tampering with event logs, modifying timestamps (timestomping), and wiping malicious artifacts to prevent detection.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q35",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "During a threat intelligence briefing, a SOC analyst comes across a classified report detailing a sophisticated cybercrime syndicate targeting executives of high-profile financial institutions. These adversaries rarely leave digital footprints and seem to anticipate security measures. Several breaches began with seemingly innocent conversations: a foreign journalist requesting an interview with a CEO and a \u201csecurity consultant\u201d offering free risk assessments. Further investigation reveals attackers socially engineered employees, manipulated trust, and extracted critical security details long before launching technical attacks. The analyst decides to focus on intelligence involving deception detection and psychological profiling to uncover true intent and methods. Which type of intelligence is the analyst leveraging?",
    options: [
          "Human Intelligence",
          "Threat Intelligence Feeds",
          "Open-Source Intelligence (OSINT)",
          "Technical Threat Intelligence"
    ],
    correctAnswer: 0,
    explanation: "Human Intelligence (HUMINT) focuses on information derived from interpersonal interactions, social relationships, behavioral profiling, and human-to-human elicitation.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q36",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Bob is a SOC analyst in a multinational corporation that relies on a centralized file-sharing system for storing confidential project documents. One morning, he notices that a few critical financial records stored on the shared server appear to have been altered without authorization. Version history confirms unexpected changes made outside business hours. Bob must investigate by inspecting logs. Which log should he check to determine who accessed the files and when the modifications occurred?",
    options: [
          "Security logs",
          "Authentication logs",
          "Firewall logs",
          "Network logs"
    ],
    correctAnswer: 0,
    explanation: "Windows Security logs (via Object Access auditing, Event ID 4663/4656) record exact details on file access, user accounts, timestamp, and specific permissions exercised (read, write, delete).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q37",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "You are a SOC analyst on duty during a high-severity incident involving a DDoS attack targeting your organization\u2019s e-commerce platform. The attack disrupts online transactions. Using SIEM tools and packet capture systems, you identify unusual traffic patterns and trace activity back to command-and-control (C2) servers directing a botnet. Your goal is to recommend an eradication strategy that will sever the attackers\u2019 control over infected devices and halt the attack. Which strategy should your team implement?",
    options: [
          "Rate limiting",
          "Neutralizing handlers",
          "Blocking potential attacks",
          "Disabling botnets"
    ],
    correctAnswer: 1,
    explanation: "Neutralizing handlers (sinkholing or blocking C2 nodes controlling the botnet) severs the adversary's ability to command infected zombie nodes.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q38",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A threat hunter analyzing an infected endpoint finds that malicious processes keep reappearing even after termination, making traditional remediation ineffective. The user reports slowdowns, abnormal pop-ups, and unauthorized application launches. Deeper inspection reveals multiple scheduled tasks executing unknown scripts at intervals, along with suspicious registry modifications enabling automatic execution on startup. The endpoint makes intermittent encrypted outbound connections to an unclassified external server. The organization also observed multiple failed privileged logins from the same subnet. Which signs should the threat hunter look for to confirm and mitigate the threat?",
    options: [
          "Network-based artifacts",
          "Threat intelligence and adversary context",
          "Host-based artifacts",
          "Indicators of Attack (IoAs)"
    ],
    correctAnswer: 2,
    explanation: "Host-based artifacts (scheduled tasks, Run/RunOnce registry keys, malicious DLLs/services, process ancestry) are the concrete resident evidence required to eliminate endpoint persistence.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q39",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A financial institution suspects an insider threat due to unauthorized access attempts on restricted databases. However, SIEM alerts lack sufficient information to differentiate between legitimate and malicious access. The SOC manager recommends integrating contextual data to improve detection. Which contextual data source should be integrated in this scenario?",
    options: [
          "User context from HR systems",
          "Location and physical context from CPS sensors",
          "Threat context from external threat intelligence feeds",
          "Vulnerability context"
    ],
    correctAnswer: 0,
    explanation: "User context from HR systems (job role, department, employment status, termination flags) provides identity context to differentiate normal duties from unauthorized access.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q40",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "You are working as a SOC analyst for a cloud-based service provider that relies on PostgreSQL databases to store critical customer data. During a security review, you discover that logs are not being generated for failed authentication attempts, slow queries, or database errors. This lack of visibility is making it difficult to detect threats and investigate suspicious activity. To ensure PostgreSQL captures and stores logs for centralized monitoring and forensic analysis, which configuration parameter should you enable?",
    options: [
          "logging-collector",
          "log_collector",
          "loggingcollector",
          "logging-collector (with space)"
    ],
    correctAnswer: 1,
    explanation: "In PostgreSQL configuration (postgresql.conf), the `log_collector` parameter (or `logging_collector` in modern versions) enables the background logging collector process to capture stderr output to log files.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q41",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A financial services company hosts an online banking platform accessible via a public web portal. The SOC team has deployed Snort IDS to monitor HTTP traffic for potential attacks targeting the login page. One day, a user attempts to log in multiple times, generating a series of failed authentication events. During this time, Snort IDS triggers an alert based on the following rule:\n\nalert tcp any any -> any 80 (msg:\"SQL Injection attempt detected\"; content:\"' OR T=T\"; nocase; sid:1000001; rev:1;)\n\nThe alert indicates that an incoming HTTP request contained the classic SQL injection payload ' OR T=T, which is commonly used to bypass login authentication by always evaluating to true. The SIEM, integrated with Snort, receives this alert and correlates it with multiple failed login attempts from the same source IP. This triggers an automated response, temporarily blocking the suspicious IP address and notifying the SOC team. Which detection method is used by this rule?",
    options: [
          "Behavioral-based detection",
          "Signature-based detection",
          "Anomaly-based detection",
          "Statistical-based detection"
    ],
    correctAnswer: 1,
    explanation: "The Snort rule uses signature-based detection because it matches a specific known byte/string pattern (\"' OR T=T\") within the packet payload.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q42",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "You are working in a Cybersecurity Operations Center for PayOnline, which handles payment gateways for multiple applications. Your team monitors logs across firewalls, authentication servers, and endpoint detection tools. The team currently relies on manual log reviews, but the volume of raw, unstructured logs makes the process inefficient and error-prone. During a recent incident, the team struggled to extract relevant details from disorganized logs, delaying detection and response. The team decides to implement an automated log parsing solution that can transform unstructured logs into a structured format. Which log parsing technique should you implement to improve log data structuring and enable efficient querying and analysis?",
    options: [
          "Delimited parsing",
          "Key-value extraction",
          "Grok filters",
          "Semantic parsing"
    ],
    correctAnswer: 2,
    explanation: "Grok filters use regular expression patterns to parse unstructured or semi-structured log text lines into structured, named fields.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q43",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "You are working as a SOC analyst in a multinational company with multiple data centers and remote offices. Security logs are stored locally at each site, making it difficult to correlate incidents across different locations. Recently, an advanced persistent threat (APT) compromised multiple servers, but due to multiple sources of logs and inconsistent monitoring, the attack was detected only after significant data exfiltration. To improve visibility, streamline log analysis, and enable faster incident response, you need to implement a solution that aggregates logs from all sources into a unified system. Which solution will you implement?",
    options: [
          "Centralized logging",
          "Event tracing",
          "Distributed logging",
          "Local logging"
    ],
    correctAnswer: 0,
    explanation: "Centralized logging aggregates log streams from all distributed infrastructure into a single unified SIEM, eliminating silos and enabling real-time correlation.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q44",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A company's SIEM is generating a high number of alerts, overwhelming the SOC team with false positives and irrelevant notifications. This reduces efficiency as analysts struggle to identify genuine incidents. To address this, the security team refines their approach by defining clear threat detection scenarios aligned with their environment and risk profile. This is expected to improve detection accuracy and streamline incident response. Which process is the team implementing?",
    options: [
          "SIEM use case management",
          "IT compliance",
          "Security analytics",
          "Log forensics"
    ],
    correctAnswer: 0,
    explanation: "SIEM use case management is the disciplined process of identifying, authoring, tuning, and maintaining threat detection scenarios mapped to organizational risks.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q45",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "You are part of a team of SOC analysts in a multinational organization that processes large volumes of security logs from various sources, including firewalls, IDS, and authentication servers. Your team is having difficulty detecting incidents because logs from different systems are analyzed in isolation, making it harder to link related events. What approach should you implement for future investigations to automatically match related log events based on predefined rules?",
    options: [
          "Log normalization",
          "Log collection",
          "Log correlation",
          "Log transformation"
    ],
    correctAnswer: 2,
    explanation: "Log correlation automatically links and correlates disparate log events across multiple systems using predefined rules, timing windows, and common keys (user, IP, host).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q46",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An attacker attempts to gain unauthorized access to a secure network by repeatedly guessing login credentials. The SIEM is configured to generate an alert after detecting 10 consecutive failed login attempts within a short timeframe. However, the attacker successfully logs in on the 9th attempt, just before the threshold is reached, bypassing the alert mechanism. The security team only becomes aware of the incident after detecting suspicious activity post-login, highlighting a gap in the SIEM\u2019s detection rules. What type of alert classification does this represent?",
    options: [
          "False negative",
          "False positive",
          "True negative",
          "True positive"
    ],
    correctAnswer: 0,
    explanation: "A False Negative occurs when malicious activity actually takes place but security detection controls fail to generate an alert.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q47",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At GlobalTech, the SOC team detects a suspicious ransomware outbreak affecting multiple endpoints. After successfully isolating the infected systems from the network, the Digital Forensics team begins their investigation. They deploy a forensics workstation to acquire RAM dumps, extract Windows Event Logs, and collect network PCAP files from the compromised hosts. Which phase of the Incident Response lifecycle is currently underway?",
    options: [
          "Recovery",
          "Evidence gathering and forensic analysis",
          "Containment",
          "Eradication"
    ],
    correctAnswer: 1,
    explanation: "Acquiring volatile memory (RAM dumps), extracting event logs, and capturing packet captures (PCAP) represents Evidence Gathering and Forensic Analysis.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q48",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Daniel Clark is a cybersecurity specialist in the Cloud SOC for a government agency. His team needs a security solution that can enforce access policies to prevent unauthorized access to cloud-based applications, monitor and restrict data sharing within SaaS, PaaS, and IaaS environments, ensure compliance with government regulations for data security and privacy, and apply security controls to prevent sensitive data exposure in the cloud. Which Cloud SOC technology is his team using?",
    options: [
          "Cloud Access Security Broker (CASB)",
          "Cloud Security Posture Management (CSPM)",
          "Cloud Workload Protection Platform (CWPP)",
          "Cloud-native anomaly detection"
    ],
    correctAnswer: 0,
    explanation: "A Cloud Access Security Broker (CASB) enforces security policies, DLP, conditional access, and compliance between cloud consumers and cloud service providers.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q49",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A rapidly growing e-commerce company wants to implement a SIEM solution to improve its security posture and comply with PCI DSS requirements. They need a solution that offers both the necessary technological features and the expertise to manage the system effectively. They also need continuous compliance support and data security assistance. Which SIEM solution is appropriate for this company?",
    options: [
          "Cloud-based SIEM",
          "In-house SIEM",
          "Managed SIEM",
          "Security analytics"
    ],
    correctAnswer: 2,
    explanation: "A Managed SIEM combines SIEM technology with external MSSP operational expertise, 24/7 monitoring, and ongoing compliance support.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q50",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A multinational cybersecurity firm wants to enhance its threat intelligence capabilities by integrating real-time threat feeds into Microsoft Sentinel. These feeds include malicious IPs, domains, file hashes, and attack patterns. The firm requires a standardized protocol that allows automated threat intelligence sharing so Sentinel continuously receives updated indicators from external sources in a structured format. Which Microsoft Sentinel data connector should be implemented to integrate threat intelligence feeds using an industry-standard protocol?",
    options: [
          "Threat Intelligence Platforms data connector",
          "Syslog connector",
          "TAXII data connector",
          "Microsoft Defender for Cloud (Legacy) connector"
    ],
    correctAnswer: 2,
    explanation: "TAXII (Trusted Automated eXchange of Indicator Information) is the industry-standard transport protocol used to ingest structured STIX threat intelligence into Sentinel.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q51",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Sarah, a financial analyst at a multinational corporation, is suspected of leaking sensitive financial data to an unauthorized external party. The SOC team observed anomalous data transfer patterns originating from her account, flagged by the SIEM, indicating potential data exfiltration. The incident response team must contain the incident swiftly to minimize data loss and protect critical assets. As a SOC analyst, which should be prioritized as the initial containment measure?",
    options: [
          "Access control",
          "Change passwords regularly",
          "Isolate the storage",
          "Data-Centric Audit and Protection (DCAP)"
    ],
    correctAnswer: 0,
    explanation: "Enforcing immediate Access Control (disabling the user account, revoking active session tokens, suspending VPN access) stops ongoing insider exfiltration immediately.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q52",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A SOC team at a major financial institution detects unauthorized access attempts on its web application. Logs indicate the web application is compromised. To determine the exact attack technique and implement mitigation, forensic investigators assess cookie attributes (such as HttpOnly, Secure, and SameSite) for security weaknesses and track anomalous request patterns that deviate from normal user behavior. Which attack vector is the forensic team investigating?",
    options: [
          "Session poisoning",
          "Man-in-the-middle (MITM) attack",
          "Cross-site scripting (XSS)",
          "SQL injection"
    ],
    correctAnswer: 0,
    explanation: "Session poisoning (or session hijacking/tampering) involves manipulating session cookies or tokens lacking proper protection flags (HttpOnly, Secure, SameSite).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q53",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "David is a SOC analyst responsible for monitoring critical infrastructure. He detects unauthorized applications running on a high-privilege Windows server accessible only by a restricted set of users. The applications were not part of approved deployments, and installations occurred outside business hours. Logs indicate potential system configuration changes around the same timeframe. Which log should he examine to determine when and how these installations occurred?",
    options: [
          "Security event log",
          "System event log",
          "Setup event log",
          "Application event log"
    ],
    correctAnswer: 2,
    explanation: "The Windows Setup event log specifically tracks software installations, update deployments, and servicing operations.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q54",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "In a large corporation, the HR department receives an urgent email from someone impersonating a high-level executive, requesting immediate transfer of sensitive employee data. The email includes an official-looking document and a phone number for verification. Feeling pressured, the HR manager calls the number and \u201cconfirms\u201d the request, then transfers the data. Investigation later confirms the email was fraudulent and the executive had no knowledge of the request. What type of attack did the HR department face?",
    options: [
          "Credential theft",
          "Web-based intrusion",
          "Social engineering attack",
          "Application exploit"
    ],
    correctAnswer: 2,
    explanation: "This is a Social Engineering attack (specifically executive pretexting / Business Email Compromise) leveraging psychological urgency and fake verification channels.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q55",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "A healthcare organization's SIEM detects unusual HTTP requests targeting its patient portal. The requests originate from a foreign IP address and occur during non-business hours. The methods used are primarily TRACE and OPTIONS, which are rarely seen in normal web traffic. The SIEM correlates these with increased reconnaissance activity on other servers within the same subnet. What is the primary security concern with TRACE and OPTIONS requests?",
    options: [
          "They expose information about server-supported methods and request headers",
          "They can be used to upload malicious payloads directly to the server",
          "They make Distributed Denial of Service (DDoS) attacks easier",
          "They allow attackers to bypass authentication controls"
    ],
    correctAnswer: 0,
    explanation: "OPTIONS reveals allowed HTTP verbs, while TRACE reflects client request headers back (which can leak session cookies or sensitive headers in Cross-Site Tracing attacks).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q56",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A security analyst in a multinational corporation\u2019s Threat Intelligence team is tasked with enhancing detection of stealthy malware infections. During an investigation, the analyst observes an unusually high volume of DNS requests directed toward domains that follow patterns commonly associated with Domain Generation Algorithms (DGAs). Recognizing that these automated domain queries could indicate malware attempting to establish communication with command-and-control (C2) infrastructure, the analyst realizes existing detection may be insufficient. The security team needs to define intelligence requirements, including identifying critical data sources, refining detection criteria, and improving monitoring strategies. Which stage of the Cyber Threat Intelligence (CTI) process does this align with?",
    options: [
          "Automated tool",
          "Requirement analysis",
          "Filtering CTI",
          "Intelligence buy-in"
    ],
    correctAnswer: 1,
    explanation: "Requirement Analysis (the Direction phase of CTI) defines the specific intelligence questions, data sources, and monitoring objectives needed to address observed threats.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q57",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "The SOC analyst at a national cybersecurity agency detected unusual system behavior on critical infrastructure servers. Initial scans flagged potential malware activity. Due to the sophisticated nature of the suspected attack, including registry modifications, process injection, and unauthorized tasks, the case was escalated to the forensic team. The forensic team suspects the malware is designed for stealthy data exfiltration. To assess the compromise, they captured system snapshots before and after suspected infection to identify unauthorized changes and anomalies. Which process are they following by capturing and comparing system snapshots to detect unauthorized changes?",
    options: [
          "Digital forensics",
          "Signature-based detection",
          "Threat intelligence gathering",
          "Host integrity monitoring"
    ],
    correctAnswer: 3,
    explanation: "Host Integrity Monitoring compares baseline system snapshots against current state to detect unauthorized modifications to files, registry keys, and scheduled tasks.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q58",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "SecureTech Solutions, a managed security service provider (MSSP), is optimizing its log management architecture to enhance log storage, retrieval, and analysis efficiency. The SOC team needs logs stored in a structured or semi-structured format for easy parsing, querying, and correlation. They choose a format that organizes data in a text file in a tabular structure, where each log entry is stored in rows and columns, and that supports easy export to databases or spreadsheet analysis while maintaining readability. Which log format should they choose?",
    options: [
          "Comma-Separated Values (CSV) format",
          "Cloud storage",
          "Syslog format",
          "Database"
    ],
    correctAnswer: 0,
    explanation: "Comma-Separated Values (CSV) format stores tabular data in plain text rows and columns, ideal for spreadsheet analysis and database ingestion.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q59",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A large financial services company has experienced increasing sophisticated threats targeting critical assets. The SOC primarily focuses on log collection and basic monitoring, but incidents revealed gaps in detecting and responding to advanced threats proactively. Management decides to adopt the SOC Capability Maturity Model (CMM). The initial assessment indicates the SOC is at Level 1, and the organization aims to reach Level 3 by enhancing incident response procedures, improving threat intelligence integration, establishing KPIs, automating triage, implementing behavior-based analytics, and creating continuous training. Based on the SOC CMM, what should be the first priority in transitioning from Level 1 to Level 3?",
    options: [
          "Outsourcing SOC operations to an MSSP",
          "Deploying advanced deception technologies",
          "Establishing well-defined and repeatable incident response processes",
          "Implementing AI-driven automation for real-time detection and response"
    ],
    correctAnswer: 2,
    explanation: "Establishing well-defined, repeatable, and documented incident response procedures is the foundational requirement to advance from Level 1 (Ad-hoc) to Level 3 (Defined) maturity.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q60",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A mid-sized healthcare organization is facing frequent phishing and ransomware attacks. They lack an internal SOC and want proactive threat detection and response capabilities. Compliance with HIPAA regulations is essential. The organization seeks a solution that includes both monitoring and rapid response to incidents. Which service best meets their needs?",
    options: [
          "MSSP with 24/7 log monitoring and incident escalation",
          "Self-hosted SIEM with in-house SOC analysts",
          "MDR with proactive threat hunting and incident containment",
          "Cloud-based SIEM with MSSP-managed services"
    ],
    correctAnswer: 2,
    explanation: "Managed Detection and Response (MDR) delivers continuous monitoring, active threat hunting, and hands-on remote incident containment for organizations lacking an internal SOC.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q61",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A SOC analyst monitoring authentication logs detects a sudden and significant spike in failed login attempts targeting multiple critical servers during non-business hours. These repeated authentication failures are abnormal compared to typical login activity. All attempts originate from a single external IP address, indicating a targeted attack rather than random scanning. Some login attempts use legitimate employee usernames, suggesting credential stuffing using previously compromised credentials or an ongoing brute-force attempt. Given this suspicious activity and its potential to escalate into unauthorized access, what is the appropriate next step in the threat-hunting process to assess the situation further?",
    options: [
          "Rapid response",
          "Continuous improvement",
          "Establish a baseline",
          "Investigate and analyze"
    ],
    correctAnswer: 3,
    explanation: "Once an anomaly is identified, the threat hunter's next step is to 'Investigate and analyze': verify logon outcomes, scope targeted accounts, and check for successful compromise.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q62",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A SOC analyst detects multiple instances of powershell.exe being launched with the -ExecutionPolicy Bypass and -NoProfile arguments on a domain controller. The parent process is winrm.exe, and the activity occurs during non-business hours. What should be the analyst\u2019s primary focus?",
    options: [
          "Look for Event ID 4625 to check for failed authentication attempts before execution",
          "Investigate Event ID 7045 to determine if a malicious service was created",
          "Search for Event ID 4688 to find similar PowerShell executions within the last 24 hours",
          "Review Event ID 5145 to see if unauthorized network shares were accessed"
    ],
    correctAnswer: 2,
    explanation: "Windows Event ID 4688 (Process Creation with command-line logging) allows the analyst to scope all matching PowerShell execution instances across endpoints in the past 24 hours.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q63",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "A major financial institution has strict policies preventing unauthorized data transfers. As a SOC analyst, during routine log analysis you detect an anomaly: an employee workstation initiates large file transfers outside business hours, involving highly sensitive customer financial records. You discover remote access from an unfamiliar IP address and an unauthorized USB device connection on the workstation. Given the likelihood of data exfiltration, what should be your first step in responding?",
    options: [
          "Isolate the employee’s workstation and revoke remote access",
          "Conduct a full forensic analysis first",
          "Disable the corporate VPN entirely",
          "Inform the employee’s department and wait for evidence"
    ],
    correctAnswer: 0,
    explanation: "Immediate containment (network isolation and remote session revocation) must be prioritized to stop active data exfiltration before deep forensic analysis begins.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q64",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A large financial institution receives thousands of security logs daily from firewalls, IDS systems, and user authentication platforms. The SOC uses an AI-driven SIEM system with Natural Language Processing (NLP) capabilities to streamline threat detection. This enables faster response times, reduces manual rule creation, and helps detect advanced threats that traditional systems might overlook. Which option best illustrates the advantage of NLP in SIEM?",
    options: [
          "Eliminates the need for data normalization and correlation in SIEM systems",
          "Allows security analysts to write SIEM rules using complex programming languages",
          "Simplifies infrastructure management by reducing hardware dependencies",
          "Enables analysis of text-based data from logs and communications to detect threats"
    ],
    correctAnswer: 3,
    explanation: "NLP in SIEM enables automated parsing, semantic understanding, entity extraction, and sentiment/context analysis of text-heavy data (emails, tickets, audit logs).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q65",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Jackson & Co., a mid-sized law firm, is concerned about web-based cyber threats. The IT team implements a solution that serves as an intermediary for all HTTP and HTTPS requests. This allows the SOC to inspect, filter, and control web traffic to detect and block malicious websites, phishing attempts, and other online threats before they reach users. Which containment method is the organization using to gain visibility and control over web traffic?",
    options: [
          "Whitelisting",
          "Blacklisting",
          "Web content filtering",
          "Proxy servers"
    ],
    correctAnswer: 3,
    explanation: "A forward Proxy Server acts as an intermediary for all client HTTP/HTTPS requests, enabling inspection, filtering, policy enforcement, and logging.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q66",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A financial services company implements a SIEM solution to enhance cybersecurity. Despite deployment, it fails to detect known attacks or suspicious activities. Although reports are generated, the team struggles to interpret them. Investigation shows that critical logs from firewalls, IDS, and endpoint devices are not reaching the SIEM. What is the reason the SIEM is not functioning as expected?",
    options: [
          "Improper configuration or design of the SIEM deployment architecture",
          "Lack of understanding of SIEM features and capabilities",
          "Difficulty handling the volume of collected log data",
          "Delays in log collection and analysis due to system performance issues"
    ],
    correctAnswer: 0,
    explanation: "If log data from key network and security devices fails to reach the SIEM, the root issue is improper configuration or architectural design of log forwarders/collectors.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q67",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "During a routine security audit, analysts discover several web servers still use a vulnerable third-party library flagged for a zero-day exploit. The vulnerability was identified previously and patches were deployed, but the application team rolled back patches due to instability and compatibility issues. The vulnerability remains unaddressed, and no alternative mitigations are in place. How should the security team classify this risk in the context of web application security?",
    options: [
          "Software and data integrity failures",
          "Security logging and monitoring failures",
          "Vulnerable and outdated components",
          "Insecure design"
    ],
    correctAnswer: 2,
    explanation: "Running unpatched third-party libraries or components with known vulnerabilities is categorized as 'Vulnerable and Outdated Components' (OWASP Top 10 A06).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q68",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At 10:30 AM, during routine monitoring, Tier 1 SOC analyst Jennifer detects unusual network traffic and confirms an active LockBit ransomware infection targeting systems in the finance department. She escalates to the SOC lead, Sarah, who activates the Incident Response Team (IRT) and instructs the network team to isolate the finance department\u2019s VLAN to prevent further spread across the network. Which phase of the Incident Response process is currently being implemented?",
    options: [
          "Evidence gathering and forensic analysis",
          "Eradication",
          "Notification",
          "Containment"
    ],
    correctAnswer: 3,
    explanation: "Isolating a subnet or VLAN to stop the lateral spread of active ransomware is a core Containment action.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q69",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "You are a SOC analyst at a leading financial institution tasked with developing a comprehensive threat model to safeguard critical assets: sensitive customer data, online banking applications, and real-time payment processing systems. The organization has observed increased targeted attacks on financial entities, including credential theft, account takeovers, and sophisticated phishing. Senior management is concerned about long-term financial and reputational damage. You need intelligence providing insights into high-level risks, geopolitical threats, and emerging cybercriminal strategies with long-term implications for security posture. Which type of threat intelligence are you seeking?",
    options: [
          "Strategic threat intelligence",
          "Technical threat intelligence",
          "Tactical threat intelligence",
          "Operational threat intelligence"
    ],
    correctAnswer: 0,
    explanation: "Strategic threat intelligence provides high-level overviews of threat landscape trends, geopolitical factors, adversary motivations, and long-term risk for executive decision-makers.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q70",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A security team is configuring a newly deployed SIEM system. With limited resources, they must prioritize monitoring scenarios that provide the greatest security benefit. The team understands an effective SIEM relies on well-defined use cases tailored to the organization\u2019s environment. Which factor should guide their selection of use cases?",
    options: [
          "Select use cases based on the availability and quality of data from existing data sources",
          "Prioritize use cases that address zero-day attacks",
          "Implement as many use cases as the SIEM supports to cover all threats",
          "Focus on use cases required to meet industry compliance standards"
    ],
    correctAnswer: 0,
    explanation: "SIEM use case selection must align with available, high-quality telemetry to ensure rules produce actionable, high-fidelity alerts without excessive noise.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q71",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The SOC team at GlobalTech has finished patching a critical vulnerability exploited during a ransomware attack. The team is now restoring 2.3 TB of encrypted data from their Veeam backup system, rebuilding 23 compromised workstations identified through SIEM logs, and re-enabling network access for the finance department after validating systems are clean. Which Incident Response phase is this?",
    options: [
          "Post-incident activities",
          "Containment",
          "Eradication",
          "Recovery"
    ],
    correctAnswer: 3,
    explanation: "Restoring data from clean backups, rebuilding infected hosts, validating systems, and returning services to production represents the Recovery phase.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q72",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A large financial organization has experienced an increase in sophisticated cyber threats, including zero-day attacks and APTs. Traditional detection relies heavily on signatures and manual intervention, causing delays. The CISO is exploring AI-driven solutions that can automatically analyze large datasets, detect anomalies, and adapt to evolving threats in real time\u2014identifying suspicious activity without predefined signatures and with minimal human oversight. Which key AI technology should the organization focus on?",
    options: [
          "Static IP blocking",
          "Machine learning (ML)",
          "Natural language processing (NLP)",
          "Heuristic-based signature detection"
    ],
    correctAnswer: 1,
    explanation: "Machine Learning (ML) detects abnormal patterns and novel threats across vast telemetry datasets without requiring static predefined signatures.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q73",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A SOC analyst monitors network traffic to detect potential data exfiltration. The team uses a security solution that inspects data packets in real time as they traverse the network. During incident response, the solution struggles to analyze encrypted traffic, limiting effectiveness in identifying threats hidden within secure communications. Which security control, with this known limitation, is the SOC team relying on?",
    options: [
          "VPN",
          "Packet filters",
          "SSH",
          "IPsec"
    ],
    correctAnswer: 1,
    explanation: "Traditional packet filters only examine IP headers and port numbers and cannot inspect the encrypted application payload of TLS/SSL sessions.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q74",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "SecureTech Inc. operates critical infrastructure and applications in AWS. The SOC detects suspicious activities such as unexpected API calls, unusual outbound traffic from instances, and DNS requests to potentially malicious domains. They need a fully managed AWS security service that continuously monitors for malicious activity, analyzes CloudTrail logs, VPC Flow Logs, and DNS query logs, leverages machine learning and threat intelligence, and provides actionable findings. Which AWS service best fits?",
    options: [
          "Amazon Macie",
          "AWS Config",
          "AWS Security Hub",
          "Amazon GuardDuty"
    ],
    correctAnswer: 3,
    explanation: "Amazon GuardDuty is AWS's managed threat detection service that analyzes CloudTrail, VPC Flow Logs, and DNS logs using ML and threat intelligence.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q75",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "At 9:15 AM EST, Marcus Wong, a financial operations analyst, contacts the SOC after noticing Excel spreadsheets automatically encrypting with unusual file extensions (e.g., .locked or .crypt). The Tier 1 analyst logs the incident as ticket #INC-89271 in the SIEM and escalates it to a Tier 2 SOC analyst for investigation. Which phase of the Incident Response process is currently taking place?",
    options: [
          "Containment",
          "Incident triage",
          "Incident recording and assignment",
          "Notification"
    ],
    correctAnswer: 2,
    explanation: "Formally logging an incident ticket and assigning/escalating it to a Tier 2 analyst represents Incident Recording and Assignment.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q76",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "NationalHealth, a government agency responsible for managing sensitive patient health records, is subject to strict data sovereignty regulations requiring all data to be stored and processed within the country\u2019s borders. Leadership is concerned about outsourcing security operations and needs complete control over patient data handling. The agency faces increasing cyber threats and requires 24/7 security monitoring. They have a large budget and can hire many security professionals. Which SOC model is most suitable?",
    options: [
          "Outsourced SOC model",
          "Hybrid SOC model (expertise of an MSSP)",
          "In-house/internal SOC model",
          "A combination of multiple MSSPs"
    ],
    correctAnswer: 2,
    explanation: "An In-house / Internal SOC model ensures full sovereign control over data, systems, and telemetry while meeting strict regulatory and privacy mandates.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q77",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Katie is a SOC analyst at an international financial corporation. Her team needs functionality so the system continuously scans logs for anomalies, identifies suspicious activities, notifies analysts when predefined security thresholds are reached, and generates incidents or tickets to ensure immediate response. It must provide details such as event type, duration, affected device, and OS version. Which function should she configure to achieve this?",
    options: [
          "Log collection",
          "Alerting and reporting",
          "Log normalization",
          "Log parsing"
    ],
    correctAnswer: 1,
    explanation: "Alerting and reporting is the SIEM mechanism that continuously evaluates correlation rules against incoming telemetry and generates actionable incident alerts.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q78",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "The team receives an alert about a ransomware incident affecting the organization\u2019s email infrastructure. Forensic analysis identifies the ransomware exploited CVE-2024-0123 in an unpatched mail server. The incident response team is deploying an emergency patch (KB5025941), updating mail filtering rules to block malicious payloads, and implementing additional network segmentation to limit lateral movement. Which phase of the Incident Response process is the SOC currently executing?",
    options: [
          "Evidence gathering and forensic analysis",
          "Eradication",
          "Containment",
          "Recovery"
    ],
    correctAnswer: 1,
    explanation: "Eradication focuses on removing the root cause of an incident by patching exploited vulnerabilities (KB5025941) and eliminating attack mechanisms.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q79",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Global Solutions Inc. uses syslog for centralized logging across a geographically diverse network. The SOC team must ensure logs are reliably delivered from remote sites to the central logging server across potentially unreliable network connections. To guarantee consistent and dependable log delivery, which syslog architectural layer should they focus on optimizing and hardening?",
    options: [
          "Syslog application layer",
          "Syslog management and filtering",
          "Syslog content layer",
          "Syslog transport layer"
    ],
    correctAnswer: 3,
    explanation: "The Syslog Transport Layer (e.g., using TCP with TLS over lossy UDP, buffering and queuing) ensures reliable, authenticated message delivery over network hops.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q80",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A mid-sized financial institution\u2019s SOC is overwhelmed by thousands of daily alerts, many based on Indicators of Compromise (IoCs) such as suspicious IPs, hashes, and domains. These alerts lack context about whether they truly pose a threat. Analysts waste time on low-priority incidents while severe threats may be missed. The team lacks tools and intelligence to correlate IoCs with real-world threats, making prioritization difficult and causing alert fatigue. Which poses the greatest challenge in this environment?",
    options: [
          "Malware-centric and CTI are not equivalent",
          "Information overload",
          "Budget and enterprise skill",
          "Distinguishing IoC from CTI"
    ],
    correctAnswer: 3,
    explanation: "The primary challenge is failing to distinguish raw atomic IoCs (low-context IPs/hashes) from actionable Cyber Threat Intelligence (contextual TTPs, threat actor attribution, intent).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q81",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "DNS logs in the SIEM show an internal host sending many DNS queries with long, encoded subdomains to an external domain. The queries predominantly use TXT records and occur during off-business hours. The external domain is newly registered and has no known business association. Which option best explains this behavior?",
    options: [
          "Monitoring DNS cache poisoning attempts",
          "Detecting rogue DNS servers within the internal network",
          "Identifying DNS tunneling for data exfiltration",
          "Validating DNS records for legitimate business operations"
    ],
    correctAnswer: 2,
    explanation: "High volumes of encoded subdomains carrying TXT queries to an unclassified domain is a classic signature of DNS Tunneling for C2 communication or data exfiltration.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q82",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "A government agency needs to monitor its network for unusual data exfiltration attempts. Traditional log data is insufficient to identify traffic anomalies, so the SIEM team integrates traffic flow data to detect large transfers and unexpected spikes. The team must choose the appropriate protocol to collect IP traffic information from routers and switches. Which protocol should be used?",
    options: [
          "SNMP (Simple Network Management Protocol)",
          "NetFlow (RFC 3954)",
          "Syslog",
          "IPFIX (IP Flow Information Export)"
    ],
    correctAnswer: 3,
    explanation: "IPFIX (IP Flow Information Export, RFC 7011) is the open IETF standard protocol for exporting network flow information from routers and switches to analytics tools.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q83",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Sarah Chen works as a security analyst at Midwest Financial. At 2:00 AM, the SOC detects unusual data exfiltration patterns and evidence of lateral movement across multiple servers containing sensitive customer data. The activity appears sophisticated and may require forensic analysis and system restoration. Which team should take primary responsibility for managing this complex security incident?",
    options: [
          "Threat intelligence team",
          "Incident response team (IRT)",
          "Security engineering team",
          "SOC team"
    ],
    correctAnswer: 1,
    explanation: "The Incident Response Team (IRT) takes primary ownership of active high-severity incidents involving breach containment, forensic analysis, and disaster recovery.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q84",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Global Bank relies heavily on Microsoft Azure to host critical banking applications and services. The SOC must ensure continuous monitoring, compliance, and real-time threat detection across Azure resources. They need a comprehensive solution to collect, analyze, and visualize telemetry from cloud resources, VMs, storage, and applications, and integrate with security tools to detect anomalies and monitor performance. Which Azure service is best suited?",
    options: [
          "Azure Firewall",
          "Azure Monitor",
          "Azure Policy",
          "Azure Active Directory"
    ],
    correctAnswer: 1,
    explanation: "Azure Monitor collects, analyzes, and visualizes comprehensive metrics and telemetry from Azure resources, VMs, and applications, integrating with Log Analytics.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q85",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Sarah Chen is a Level 1 SOC analyst at Centex Healthcare. The SOC detected a potential data breach involving unauthorized access to patient records. Multiple departments need constant updates: Legal needs HIPAA compliance implications, HR needs to coordinate staff training responses, and the MSSP requires technical details to assist containment. Which role serves as the central point of communication between these stakeholders?",
    options: [
          "Incident coordinator",
          "Public relations manager",
          "Incident manager",
          "Information security officer"
    ],
    correctAnswer: 0,
    explanation: "The Incident Coordinator acts as the central communication hub, managing updates between technical responders, executive leadership, HR, legal, and external MSSPs.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q86",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "CyberBank has experienced phishing, insider threats, and attempted data breaches targeting customer financial records. The bank operates across multiple regions and needs a solution offering continuous security monitoring, rapid threat detection, and centralized visibility across all branches. Which solution will provide automated alerting, digital forensics capabilities, and active threat hunting?",
    options: [
          "Implementing SOAR (Security Orchestration, Automation, and Response)",
          "Implementing periodic security audits",
          "Implementing a Security Operations Center (SOC)",
          "Deploying a standalone SIEM (Security Information and Event Management) system"
    ],
    correctAnswer: 2,
    explanation: "A full Security Operations Center (SOC) integrates people, processes, and tools (SIEM, SOAR, EDR, threat hunting) for end-to-end 24/7 security monitoring and response.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q87",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A newly hired SOC analyst at a fast-growing multinational organization must quickly assess the company\u2019s external exposure and identify potential security risks. Techniques considered include analyzing publicly available information, scanning exposed services, reviewing DNS records, and gathering external intelligence. Due to the scale across subsidiaries, cloud environments, and third-party integrations, some methods may not scale well and may lead to delays or incomplete insights. Which technique is less practical for handling large or diverse data sets in this scenario?",
    options: [
          "DNS lookup",
          "Web enumeration",
          "OSINT",
          "Stack counting"
    ],
    correctAnswer: 3,
    explanation: "Stack counting is a slow, manual, and piecemeal method that does not scale well across large, dynamic enterprise environments compared to automated discovery tooling.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q88",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "James Rodriguez has recently taken over as the lead SOC manager at GlobalTech Dynamics. The team is deploying a $2M SOC facility, creating incident response playbooks, running tabletop exercises, and training a 15-member incident response team to handle alerts and incidents efficiently. In the Incident Response process flow, which phase best aligns with these activities?",
    options: [
          "Recovery",
          "Incident recording and assignment",
          "Preparation",
          "Incident triage"
    ],
    correctAnswer: 2,
    explanation: "Developing playbooks, training incident response personnel, conducting tabletop exercises, and building SOC facilities are all fundamental activities of the Preparation phase.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q89",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A SOC team is implementing a threat intelligence strategy to proactively defend against threats. The CISO emphasizes that collecting data is not enough; the team must allocate personnel, tools, and time to gather intelligence aligned with key concerns (fraud, phishing, nation-state threats). They must determine who will collect intelligence, which sources will be monitored, and how frequently collection occurs. What is this process called?",
    options: [
          "Resources",
          "Tasking",
          "High-level requirements",
          "Prioritization"
    ],
    correctAnswer: 1,
    explanation: "Tasking translates defined intelligence requirements into operational assignments, specifying who collects intelligence from which sources and on what schedule.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q90",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A multinational corporation with strict regulatory requirements (e.g., GDPR, PCI-DSS) needs a SIEM solution to monitor its global network. Data residency laws in certain regions prohibit transferring logs outside local jurisdictions. The company also requires centralized monitoring with 24/7 SOC operations but has limited in-house SIEM expertise. Which SIEM deployment model is appropriate?",
    options: [
          "Self-hosted, jointly managed",
          "Hybrid model, jointly managed",
          "Self-hosted, MSSP-managed",
          "Cloud, MSSP-managed"
    ],
    correctAnswer: 1,
    explanation: "A Hybrid model, jointly managed keeps raw logs stored locally inside sovereign regions while enabling centralized monitoring and joint 24/7 MSSP co-management.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q91",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A manufacturing company is deploying a SIEM system and wants to improve both security monitoring and regulatory compliance. During planning, the team uses an output-driven approach, starting with use cases that address unauthorized access to production control systems. They configure data sources and alerts specific to this use case, ensuring actionable alerts without excessive false positives. After validating success, they move on to use cases related to supply chain disruptions and malware detection. What is the primary advantage of using an output-driven approach in SIEM deployment?",
    options: [
          "The company avoids the need to collect logs from non-critical systems.",
          "The SIEM system can automatically block all unauthorized access attempts.",
          "The company can create more complex use cases with greater scope.",
          "The SOC team can respond to all incidents in real time without delays."
    ],
    correctAnswer: 2,
    explanation: "An output-driven SIEM deployment focuses on specific high-value use cases first, building a solid data baseline to iteratively expand into more complex, wider-scope use cases.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q92",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "The SOC team at a national cybersecurity agency detects anomalous network traffic from a sensitive government server and escalates to forensics. The forensic team discovers a trojan suspected of data exfiltration and persistence. The lead malware analyst must determine capabilities and persistence mechanisms by analyzing the trojan\u2019s binary code at the instruction level without executing it. Which technique should the analyst use?",
    options: [
          "Malware disassembly",
          "Network behavior monitoring",
          "Dynamic code injection",
          "Interactive debugging"
    ],
    correctAnswer: 0,
    explanation: "Malware disassembly translates compiled binary instructions into assembly code to safely analyze execution logic and persistence without executing the malware.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q93",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "You are a Threat Hunter at a law firm that suffered a data breach where confidential documents were leaked. Using the Cyber Kill Chain framework, you trace the attacker\u2019s steps: they bypassed MFA by masquerading as a legitimate user, moved laterally, accessed sensitive records from a shared repository, and exfiltrated data over an extended period. You must identify the Cyber Kill Chain phase at which the attack was identified, to strengthen defenses and detect intrusions before exfiltration occurs. At which phase was the attack identified?",
    options: [
          "Delivery",
          "Actions on objectives",
          "Command and control (C2)",
          "Exploitation"
    ],
    correctAnswer: 1,
    explanation: "Actions on Objectives is the final Cyber Kill Chain phase where the adversary accomplishes their end goal (e.g. data exfiltration or destruction).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q94",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A manufacturing company is deploying a SIEM system and uses an output-driven approach, starting with use cases addressing unauthorized access to production control systems. They configure data sources and alerts to ensure actionable alerts with low false positives, then expand to supply chain disruptions and malware detection. What is the primary advantage of an output-driven approach?",
    options: [
          "The company can collect logs from non-critical systems.",
          "The company can create more complex use cases with greater scope.",
          "The SOC team can respond to all incidents in real time without delays.",
          "The SIEM system can automatically block all unauthorized access attempts."
    ],
    correctAnswer: 1,
    explanation: "Iterative output-driven deployment validates ingestion and tuning incrementally, allowing the SOC to build increasingly complex correlation use cases with confidence.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q95",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "David Reynolds, a SOC analyst at a healthcare organization, is investigating suspicious login attempts flagged by the SIEM. To mitigate brute-force risk on targeted endpoints, he collaborates with IT to implement an automatic account lockout policy that temporarily disables accounts after multiple failed login attempts. Within the SOC\u2019s eradication strategy, which category of measures does this action align with?",
    options: [
          "Physical security measures",
          "Network security measures",
          "Host security measures",
          "Authentication and authorization measures"
    ],
    correctAnswer: 3,
    explanation: "Account lockout policies directly manage identity authentication rules and fall under Authentication and Authorization security measures.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q96",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "TechInnovate receives an alert about a newly discovered zero-day vulnerability in a widely used web application framework that is being actively exploited. No official patch is available. The SOC must monitor adversary tactics, identify indicators of compromise (IoCs), and proactively adjust controls to detect, track, and mitigate the threat. Which SOC technology is crucial for real-time visibility into evolving threat intelligence and enabling proactive mitigation?",
    options: [
          "Vulnerability management tools",
          "Threat intelligence management tools",
          "Endpoint detection and response (EDR) tools",
          "Security information and event management (SIEM) solutions"
    ],
    correctAnswer: 1,
    explanation: "Threat Intelligence Management tools (TIPs) ingest, aggregate, and operationalize evolving adversary TTPs and zero-day IOCs in real-time.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q97",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Mark Reynolds, a SOC analyst at a global financial institution, is working on the eradication phase after detecting phishing attacks targeting employees. To ensure attackers cannot reuse malicious infrastructure, Mark implements a technique that blocks known malicious IP addresses used for sending spam emails at the Domain Name System (DNS) level. Which technique is best suited?",
    options: [
          "URL blacklisting on web proxies",
          "IP address blacklisting at the firewall",
          "DNS blackholing",
          "SMTP server filtering"
    ],
    correctAnswer: 2,
    explanation: "DNS Blackholing (DNS Sinkholing) resolves malicious domains to a controlled/null address at the DNS resolver level, preventing communication across all protocols.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q98",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "A health corporation is implementing a SIEM solution to improve detection and response and comply with HIPAA requirements. They need the SIEM to efficiently collect, analyze, and correlate security events from network devices, servers, and security applications, and generate timely alerts for potential HIPAA violations. Which capability is needed to meet these needs?",
    options: [
          "Threat hunting and intelligence",
          "Centralized SIEM implementation",
          "Log management and security analytics",
          "Log collection through agents"
    ],
    correctAnswer: 2,
    explanation: "Log management (ingestion, parsing, normalization, storage) coupled with security analytics (correlation and alerting) form the core SIEM capabilities.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q99",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Pearl is a Level 1 SOC analyst at a global financial institution using SQL Server to store sensitive customer information. She investigates an alert showing multiple failed web app logins from the same IP, followed by a successful login as a server administrator. She then reviews SQL Server logs and finds the attacker used compromised credentials to access the SQL Server database. Which log will help identify whether the intruder performed unauthorized modifications in the database?",
    options: [
          "Transaction log",
          "Security log",
          "Maintenance log",
          "Audit log"
    ],
    correctAnswer: 0,
    explanation: "The SQL Server Transaction Log (LDF) records all data modification statements (INSERT, UPDATE, DELETE) and schema modifications with timestamps.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q100",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "A SOC team notices malware-related incidents increased over the past six months, primarily targeting endpoints through phishing campaigns. They need to present a report to security leadership to justify investing in advanced email filtering and end-user security training. Which SOC report best supports their case?",
    options: [
          "Monitoring summary report",
          "Real-time monitoring report",
          "Incident report",
          "Trend analysis report"
    ],
    correctAnswer: 3,
    explanation: "A Trend Analysis Report illustrates patterns, frequencies, and incident growth over multi-month timeframes, providing the quantitative justification for executive security investments.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q101",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Bonney's system has been compromised by a gruesome malware.\n\nWhat is the primary step that is advisable to Bonney in order to contain the malware incident from spreading?",
    options: [
          "Complaint to police in a formal way regarding the incident",
          "Turn off the infected machine",
          "Leave it to the network administrators to handle",
          "Call the legal department in the organization and inform about the incident"
    ],
    correctAnswer: 1,
    explanation: "The primary immediate containment action is to isolate the machine from the network (or power it off if guided) to prevent malware lateral movement and active data loss.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q102",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "According to the forensics investigation process, what is the next step carried out right after collecting the evidence?",
    options: [
          "Create a Chain of Custody Document",
          "Send it to the nearby police station",
          "Set a Forensic lab",
          "Call Organizational Disciplinary Team"
    ],
    correctAnswer: 0,
    explanation: "Immediately following evidence collection, creating and maintaining the Chain of Custody Document is critical to record handlers, timestamps, and preservation details.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q103",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which one of the following is the correct flow for Setting Up a Computer Forensics Lab?",
    options: [
          "Planning and budgeting –> Physical location and structural design considerations –> Work area considerations –> Human resource considerations –> Physical security recommendations –> Forensics lab licensing",
          "Planning and budgeting –> Physical location and structural design considerations –> Forensics lab licensing –> Human resource considerations –> Work area considerations –> Physical security recommendations",
          "Planning and budgeting –> Forensics lab licensing –> Physical location and structural design considerations –> Work area considerations –> Physical security recommendations –> Human resource considerations",
          "Planning and budgeting –> Physical location and structural design considerations –> Forensics lab licensing –> Work area considerations –> Human resource considerations –> Physical security recommendations"
    ],
    correctAnswer: 0,
    explanation: "The official EC-Council forensics lab setup flow begins with Planning and budgeting, followed by Location & design, Work area, Human resources, Physical security, and Lab licensing.",
    difficulty: "Hard"
  },
  {
    id: "csav2-q104",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following directory will contain logs related to printer access in Unix/Linux systems?",
    options: [
          "/var/log/cups/Printer_log file",
          "/var/log/cups/access_log file",
          "/var/log/cups/accesslog file",
          "/var/log/cups/Printeraccess_log file"
    ],
    correctAnswer: 1,
    explanation: "In CUPS (Common Unix Printing System), printer access logs are written to `/var/log/cups/access_log`.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q105",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following command is used to enable logging in iptables for incoming packets?",
    options: [
          "$ iptables -B INPUT -j LOG",
          "$ iptables -A OUTPUT -j LOG",
          "$ iptables -A INPUT -j LOG",
          "$ iptables -B OUTPUT -j LOG"
    ],
    correctAnswer: 2,
    explanation: "`iptables -A INPUT -j LOG` appends a rule to the INPUT chain targeting incoming packets and directing them to the LOG target.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q106",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Ray is a SOC analyst in a company named Queens Tech. One Day, Queens Tech is affected by a DoS/DDoS attack. For the containment of this incident, Ray and his team are trying to provide additional bandwidth to the network devices and increasing the capacity of the servers.\n\nWhat is Ray and his team doing?",
    options: [
          "Blocking the Attacks",
          "Diverting the Traffic",
          "Degrading the services",
          "Absorbing the Attack"
    ],
    correctAnswer: 3,
    explanation: "Increasing bandwidth and scaling up server capacity to handle extreme traffic volumes during a DDoS attack is termed 'Absorbing the Attack'.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q107",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Identify the attack when an attacker by several trial and error can read the contents of a password file present in the restricted etc folder just by manipulating the URL in the browser as shown:\nhttp://www.terabytes.com/process.php./../../../../etc/passwd",
    options: [
          "Directory Traversal Attack",
          "SQL Injection Attack",
          "Denial-of-Service Attack",
          "Form Tampering Attack"
    ],
    correctAnswer: 0,
    explanation: "Using dot-dot-slash (`../`) in URL parameters to traverse outside the web root and retrieve `/etc/passwd` is a classic Directory Traversal Attack.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q108",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which encoding replaces unusual ASCII characters with \"%\" followed by the character\u2019s two-digit ASCII code expressed in hexadecimal?",
    options: [
          "Unicode Encoding",
          "UTF Encoding",
          "Base64 Encoding",
          "URL Encoding"
    ],
    correctAnswer: 3,
    explanation: "URL Encoding (Percent-Encoding) replaces reserved or unsafe characters with '%' followed by the two-digit hex ASCII representation (e.g. space -> %20).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q109",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following formula represents the risk calculation in cybersecurity?",
    options: [
          "Risk = Likelihood × Severity × Asset Value",
          "Risk = Likelihood × Consequence × Severity",
          "Risk = Likelihood × Impact × Severity",
          "Risk = Likelihood × Impact × Asset Value"
    ],
    correctAnswer: 3,
    explanation: "According to EC-Council standards, Risk is calculated as: `Risk = Likelihood \u00d7 Impact \u00d7 Asset Value`.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q110",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "The Syslog message severity levels are labelled from level 0 to level 7.\n\nWhat does level 0 indicate?",
    options: [
          "Alert",
          "Notification",
          "Emergency",
          "Debugging"
    ],
    correctAnswer: 2,
    explanation: "In Syslog (RFC 5424), Level 0 represents 'Emergency' (system is unusable).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q111",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Where will you find the reputation IP database, if you want to monitor traffic from known bad IP reputation using OSSIM SIEM?",
    options: [
          "/etc/ossim/reputation",
          "/etc/ossim/siem/server/reputation/data",
          "/etc/siem/ossim/server/reputation.data",
          "/etc/ossim/server/reputation.data"
    ],
    correctAnswer: 3,
    explanation: "In AlienVault OSSIM SIEM, the IP reputation database is located at `/etc/ossim/server/reputation.data`.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q112",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "According to the Risk Matrix table, what will be the risk level when the probability of an attack is very low and the impact of that attack is major?",
    options: [
          "High",
          "Extreme",
          "Low",
          "Medium"
    ],
    correctAnswer: 2,
    explanation: "In standard CSA Risk Matrix evaluation, Very Low probability paired with Major impact results in an overall 'Low' risk rating.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q113",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following command is used to view iptables logs on Ubuntu and Debian distributions in real-time?",
    options: [
          "$ tailf /var/log/sys/kern.log",
          "$ tailf /var/log/kern.log",
          "# tailf /var/log/messages",
          "# tailf /var/log/sys/messages"
    ],
    correctAnswer: 1,
    explanation: "On Debian/Ubuntu systems, kernel and iptables firewall logs are written to `/var/log/kern.log` (viewed in real-time via `tailf /var/log/kern.log` or `tail -f`).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q114",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following technique involves scanning the headers of IP packets leaving a network to make sure that unauthorized or malicious traffic never leaves the internal network?",
    options: [
          "Egress Filtering",
          "Throttling",
          "Rate Limiting",
          "Ingress Filtering"
    ],
    correctAnswer: 0,
    explanation: "Egress Filtering inspects and filters outbound traffic leaving the internal network to prevent data exfiltration and rogue C2 communication.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q115",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following formula is used to calculate the EPS (Events Per Second) of the organization?",
    options: [
          "EPS = average number of correlated events / time in seconds",
          "EPS = number of normalized events / time in seconds",
          "EPS = number of security events / time in seconds",
          "EPS = number of correlated events / time in seconds"
    ],
    correctAnswer: 3,
    explanation: "In SOC operations, Events Per Second (EPS) is calculated as: `EPS = number of correlated events / time in seconds`.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q116",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Juliea a SOC analyst, while monitoring logs, noticed large TXT, NULL payloads.\n\nWhat does this indicate?",
    options: [
          "Concurrent VPN Connections Attempt",
          "DNS Exfiltration Attempt",
          "Covering Tracks Attempt",
          "DHCP Starvation Attempt"
    ],
    correctAnswer: 1,
    explanation: "Large TXT and NULL record queries in DNS telemetry indicate a DNS Exfiltration or DNS tunneling attempt.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q117",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An organization is implementing and deploying a SIEM where all capabilities (Visualization, Alerting, Analytics, Reporting, Retention, Correlation, Aggregation, Collection) are handled in-house.\n\nWhat kind of SIEM deployment architecture is the organization planning to implement?",
    options: [
          "Cloud, MSSP Managed",
          "Self-hosted, Jointly Managed",
          "Self-hosted, Self-Managed",
          "Self-hosted, MSSP Managed"
    ],
    correctAnswer: 2,
    explanation: "When the organization hosts and operates all SIEM components and pipelines internally, it is a Self-hosted, Self-Managed SIEM deployment.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q118",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "What is the process of monitoring and capturing all data packets passing through a given network using different tools?",
    options: [
          "Network Scanning",
          "DNS Footprinting",
          "Network Sniffing",
          "Port Scanning"
    ],
    correctAnswer: 2,
    explanation: "Network Sniffing is the capture and inspection of raw packet streams traversing a network segment using tools like Wireshark or tcpdump.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q119",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following is a report writing tool that will help incident handlers to generate efficient reports on detected incidents during incident response process?",
    options: [
          "threat_note",
          "MagicTree",
          "IntelMQ",
          "Malstrom"
    ],
    correctAnswer: 1,
    explanation: "MagicTree is a tree-based data management and report generation tool designed for penetration testers and incident responders.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q120",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following Windows features is used to enable Security Auditing in Windows?",
    options: [
          "Bitlocker",
          "Windows Firewall",
          "Local Group Policy Editor",
          "Windows Defender"
    ],
    correctAnswer: 2,
    explanation: "The Local Group Policy Editor (gpedit.msc -> Computer Configuration -> Windows Settings -> Security Settings -> Local Policies -> Audit Policy) is used to enable Windows Security Auditing.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q121",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following attack can be eradicated by filtering improper XML syntax?",
    options: [
          "CAPTCHA Attacks",
          "SQL Injection Attacks",
          "Insufficient Logging and Monitoring Attacks",
          "Web Services Attacks"
    ],
    correctAnswer: 3,
    explanation: "Filtering and strictly validating XML schemas and syntax eradicates XML-based Web Services Attacks (XML Injection, XXE, XPath Injection).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q122",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following attack can be eradicated by using a safe API to avoid the use of the interpreter entirely?",
    options: [
          "Command Injection Attacks",
          "SQL Injection Attacks",
          "File Injection Attacks",
          "LDAP Injection Attacks"
    ],
    correctAnswer: 0,
    explanation: "Using safe parameterized APIs (such as execFile with separate arguments) instead of passing raw concatenated strings to a shell interpreter prevents Command Injection.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q123",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Shawn is a security manager working at Lee Inc Solution. His organization wants to develop a threat intelligence strategy plan. As a part of the plan, he suggested threat intelligence requirement analysis, collection planning, asset identification, threat reports, and intelligence buy-in.\n\nWhich one of the following components should he include in the strategy plan to make it effective?",
    options: [
          "Threat pivoting",
          "Threat trending",
          "Threat buy-in",
          "Threat boosting"
    ],
    correctAnswer: 1,
    explanation: "Threat Trending (analyzing threat data over time to discover seasonal and adversary patterns) is an essential component of a comprehensive CTI strategy plan.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q124",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which of the following can help you eliminate the burden of investigating false positives in a SOC?",
    options: [
          "Keeping default rules",
          "Not trusting the security devices",
          "Treating every alert as high level",
          "Ingesting the context data"
    ],
    correctAnswer: 3,
    explanation: "Ingesting rich contextual data (asset criticality, identity role, vulnerability state, threat intel) provides the SIEM with necessary context to suppress false positives.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q125",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which of the following event detection techniques uses User and Entity Behavior Analytics (UEBA)?",
    options: [
          "Rule-based detection",
          "Heuristic-based detection",
          "Anomaly-based detection",
          "Signature-based detection"
    ],
    correctAnswer: 2,
    explanation: "UEBA relies on Anomaly-based detection, modeling baseline user/machine behavior to detect anomalous outliers and risky deviations.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q126",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Identify the password cracking attempt involving a precomputed dictionary of plaintext passwords and their corresponding hash values to crack the password.",
    options: [
          "Dictionary Attack",
          "Rainbow Table Attack",
          "Bruteforce Attack",
          "Syllable Attack"
    ],
    correctAnswer: 1,
    explanation: "A Rainbow Table Attack uses precomputed tables of cryptographic hash chains to perform rapid reverse lookups of password hashes.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q127",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the log storage method arranges event logs in the form of a circular buffer?",
    options: [
          "FIFO",
          "LIFO",
          "non-wrapping",
          "wrapping"
    ],
    correctAnswer: 3,
    explanation: "The 'wrapping' log storage method uses a circular buffer where old event log records are overwritten by new records once maximum allocated file size is reached.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q128",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "An organization wants to implement a SIEM deployment architecture. However, they have the capability to do only log collection and the rest of the SIEM functions must be managed by an MSSP.\n\nWhich SIEM deployment architecture will the organization adopt?",
    options: [
          "Cloud, MSSP Managed",
          "Self-hosted, Jointly Managed",
          "Self-hosted, MSSP Managed",
          "Self-hosted, Self-Managed"
    ],
    correctAnswer: 2,
    explanation: "In a Self-hosted, MSSP Managed architecture, log collection appliances remain on-premises while management, analytics, and alerting are outsourced to an MSSP.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q129",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Banter is a threat analyst in Christine Group of Industries. As a part of the job, he is currently formatting and structuring the raw data.\n\nHe is at which stage of the threat intelligence life cycle?",
    options: [
          "Dissemination and Integration",
          "Processing and Exploitation",
          "Collection",
          "Analysis and Production"
    ],
    correctAnswer: 1,
    explanation: "The Processing and Exploitation stage converts raw unformatted intelligence data into structured formats (decoding, translating, normalizing) ready for analysis.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q130",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following attacks causes sudden changes in file extensions or increase in file renames at rapid speed?",
    options: [
          "Ransomware Attack",
          "DoS Attack",
          "DHCP starvation Attack",
          "File Injection Attack"
    ],
    correctAnswer: 0,
    explanation: "Ransomware attacks rapidly encrypt files and append distinct file extensions (e.g. .locked, .crypto) while renaming target documents.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q131",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following security technology is used to attract and trap people who attempt unauthorized or illicit utilization of the host system?",
    options: [
          "De-Militarized Zone (DMZ)",
          "Firewall",
          "Honeypot",
          "Intrusion Detection System"
    ],
    correctAnswer: 2,
    explanation: "A Honeypot is a decoy security resource configured to attract, deceive, and observe unauthorized attackers and capture their TTPs.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q132",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Identify the event severity level in Windows logs for the events that are not necessarily significant, but may indicate a possible future problem.",
    options: [
          "Failure Audit",
          "Warning",
          "Error",
          "Information"
    ],
    correctAnswer: 1,
    explanation: "A 'Warning' event in Windows event logging denotes non-critical conditions that might indicate future problems (such as low disk storage).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q133",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which of the following factors determine the choice of SIEM architecture?",
    options: [
          "SMTP Configuration",
          "DHCP Configuration",
          "DNS Configuration",
          "Network Topology"
    ],
    correctAnswer: 3,
    explanation: "Network Topology (bandwidth constraints, latency, branch office locations, WAN architecture) is a primary factor determining the SIEM deployment model.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q134",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "What does HTTPS Status code 403 represents?",
    options: [
          "Unauthorized Error",
          "Not Found Error",
          "Internal Server Error",
          "Forbidden Error"
    ],
    correctAnswer: 3,
    explanation: "HTTP Status Code 403 Forbidden indicates that the server understands the request but explicitly refuses to authorize access regardless of authentication.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q135",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following Windows event is logged every time when a user tries to access or modify the \"Registry\" key?",
    options: [
          "4656",
          "4663",
          "4660",
          "4657"
    ],
    correctAnswer: 3,
    explanation: "Windows Event ID 4657 is logged when a registry value is modified, created, or deleted (under Audit Registry).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q136",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which of the following are the responsibilities of SIEM Agents?\n1. Collecting data received from various devices sending data to SIEM before forwarding it to the central engine.\n2. Normalizing data received from various devices sending data to SIEM before forwarding it to the central engine.\n3. Co-relating data received from various devices sending data to SIEM before forwarding it to the central engine.\n4. Visualizing data received from various devices sending data to SIEM before forwarding it to the central engine.",
    options: [
          "1 and 2",
          "2 and 3",
          "1 and 4",
          "3 and 1"
    ],
    correctAnswer: 0,
    explanation: "SIEM Agents collect and normalize log data at the source before transmitting it to the central SIEM server (correlation and visualization are central engine functions).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q137",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Sam, a security analyst with INFOSOL INC., while monitoring and analyzing IIS logs, detected an event matching regex /\\w*((\\%27)|(\\\u2019))((\\%6F)|o|(\\%4F))((\\%72)|r|(\\%52))/ix.\n\nWhat does this event log indicate?",
    options: [
          "SQL Injection Attack",
          "Parameter Tampering Attack",
          "XSS Attack",
          "Directory Traversal Attack"
    ],
    correctAnswer: 0,
    explanation: "The regex matches `' OR ` in plain or URL-encoded form (`%27%6F%72`), a textbook SQL Injection tautology payload.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q138",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following framework describes the essential characteristics of an organization's security engineering process that must exist to ensure good security engineering?",
    options: [
          "COBIT",
          "ITIL",
          "SSE-CMM",
          "SOC-CMM"
    ],
    correctAnswer: 2,
    explanation: "The Systems Security Engineering Capability Maturity Model (SSE-CMM / ISO/IEC 21827) defines the essential characteristics of security engineering processes.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q139",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "What does Windows event ID 4740 indicate?",
    options: [
          "A user account was locked out.",
          "A user account was disabled.",
          "A user account was enabled.",
          "A user account was created."
    ],
    correctAnswer: 0,
    explanation: "Windows Security Event ID 4740 indicates that a user account was locked out due to exceeding maximum failed authentication attempts.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q140",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which of the following is a Threat Intelligence Platform?",
    options: [
          "SolarWinds MS",
          "TC Complete",
          "Keepnote",
          "Apility.io"
    ],
    correctAnswer: 1,
    explanation: "ThreatConnect Complete (TC Complete) is an enterprise Threat Intelligence Platform (TIP) for managing, analyzing, and operationalizing CTI.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q141",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "A type of threat intelligence that finds out information about the attacker by misleading them is known as:",
    options: [
          "Threat trending Intelligence",
          "Detection Threat Intelligence",
          "Operational Intelligence",
          "Counter Intelligence"
    ],
    correctAnswer: 3,
    explanation: "Counter Intelligence uses deception, honeytokens, and decoy traps to actively mislead adversaries and gather actionable intelligence on their capabilities.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q142",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Chloe, a SOC analyst with Jake Tech, is checking Linux systems logs. She is investigating files at /var/log/wtmp.\n\nWhat Chloe is looking at?",
    options: [
          "Error log",
          "System boot log",
          "General message and system-related stuff",
          "Login records"
    ],
    correctAnswer: 3,
    explanation: "In Linux, `/var/log/wtmp` is a binary log file recording historical user logins, logouts, and system reboot events (read via the `last` command).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q143",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which of the following threat intelligence is used by a SIEM for supplying the analysts with context and \"situational awareness\" by using threat actor TTPs, malware campaigns, tools used by threat actors?\n1. Strategic threat intelligence\n2. Tactical threat intelligence\n3. Operational threat intelligence\n4. Technical threat intelligence",
    options: [
          "2 and 3",
          "1 and 3",
          "3 and 4",
          "1 and 2"
    ],
    correctAnswer: 0,
    explanation: "Tactical Threat Intelligence (TTPs, attack tools) and Operational Threat Intelligence (campaign context, actor motivations) supply situational awareness for SOC detection.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q144",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Properly applied cyber threat intelligence to the SOC team helps them in discovering TTPs.\n\nWhat does TTPs refer to?",
    options: [
          "Tactics, Techniques, and Procedures",
          "Tactics, Threats, and Procedures",
          "Targets, Threats, and Process",
          "Tactics, Targets, and Process"
    ],
    correctAnswer: 0,
    explanation: "TTPs stands for Tactics, Techniques, and Procedures, defining adversary behavior from high-level objectives to detailed technical methods.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q145",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following data source can be used to detect the traffic associated with Bad Bot User-Agents?",
    options: [
          "Windows Event Log",
          "Web Server Logs",
          "Router Logs",
          "Switch Logs"
    ],
    correctAnswer: 1,
    explanation: "Web Server Logs (IIS, Apache, Nginx) capture incoming HTTP User-Agent strings, enabling detection of automated bad bot scrapers and scanner tools.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q146",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Daniel is a member of an IRT, which was started recently in a company named Mesh Tech. He wanted to find the purpose and scope of the planned incident response capabilities.\n\nWhat is he looking for?",
    options: [
          "Incident Response Intelligence",
          "Incident Response Mission",
          "Incident Response Vision",
          "Incident Response Resources"
    ],
    correctAnswer: 1,
    explanation: "The Incident Response Mission defines the overarching purpose, objectives, and operational scope of the organization's incident response team.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q147",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "John, a SOC analyst, while monitoring and analyzing Apache web server logs, identified an event log matching Regex /(\\.|(%|%25)2E)(\\.|(%|%25)2E)(\\/|(%|%25)2F|\\\\|(%|%25)5C)/i.\n\nWhat does this event log indicate?",
    options: [
          "XSS Attack",
          "SQL injection Attack",
          "Directory Traversal Attack",
          "Parameter Tampering Attack"
    ],
    correctAnswer: 2,
    explanation: "The regex matches variations of `../` and URL-encoded `..%2F` or double-encoded `..%252F`, indicating a Directory Traversal attack.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q148",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "According to the Risk Matrix table, what will be the risk level when the probability of an attack is very high, and the impact of that attack is major?",
    options: [
          "High",
          "Extreme",
          "Low",
          "Medium"
    ],
    correctAnswer: 1,
    explanation: "In the CSA Risk Matrix, the intersection of Very High probability and Major impact produces an 'Extreme' (Critical) risk rating.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q149",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Jason, a SOC Analyst with Maximus Tech, was investigating Cisco ASA Firewall logs and came across the following log entry:\nMay 06 2018 21:27:27 asa 1: %ASA -5 \u2013 11008: User 'enable_15' executed the 'configure term' command\nWhat does the security level in the above log indicate?",
    options: [
          "Warning condition message",
          "Critical condition message",
          "Normal but significant message",
          "Informational message"
    ],
    correctAnswer: 0,
    explanation: "In Cisco ASA syslog messages, severity code 5 (%ASA-5) corresponds to 'Notification', which indicates a warning condition / notable administrative event.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q150",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "What is the correct sequence of SOC Workflow?",
    options: [
          "Collect, Ingest, Validate, Document, Report, Respond",
          "Collect, Ingest, Document, Validate, Report, Respond",
          "Collect, Respond, Validate, Ingest, Report, Document",
          "Collect, Ingest, Validate, Report, Respond, Document"
    ],
    correctAnswer: 3,
    explanation: "The standardized SOC workflow follows: Collect -> Ingest -> Validate (Triage) -> Report -> Respond -> Document.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q151",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Wesley is an incident handler in a company named Maddison Tech. One day, he was learning techniques for eradicating the insecure deserialization attacks.\n\nWhat among the following should Wesley avoid from considering?",
    options: [
          "Deserialization of trusted data must cross a trust boundary",
          "Understand the security permissions given to serialization and deserialization",
          "Allow serialization for security-sensitive classes",
          "Validate untrusted input, which is to be serialized to ensure that serialized data contain only trusted classes"
    ],
    correctAnswer: 2,
    explanation: "Allowing serialization of security-sensitive classes is dangerous because serialized state can be tampered with to execute arbitrary code; developers should strictly prevent serialization of sensitive classes.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q152",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "An attacker, in an attempt to exploit the vulnerability in the dynamically generated welcome page, inserted code at the end of the company\u2019s URL as follows:\nhttp://technosoft.com.com/<script>alert(\"WARNING: The application has encountered an error\");</script>\n\nIdentify the attack demonstrated in the above scenario.",
    options: [
          "Cross-site Scripting Attack",
          "SQL Injection Attack",
          "Denial-of-Service Attack",
          "Session Attack"
    ],
    correctAnswer: 0,
    explanation: "Injecting `<script>` tags into a URL parameter to execute JavaScript in the victim's browser is Reflected Cross-Site Scripting (XSS).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q153",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following formula represents the risk levels?",
    options: [
          "Level of risk = Consequence × Severity",
          "Level of risk = Consequence × Impact",
          "Level of risk = Consequence × Likelihood",
          "Level of risk = Consequence × Asset Value"
    ],
    correctAnswer: 2,
    explanation: "In risk assessment frameworks, the baseline level of risk is determined by: `Level of Risk = Consequence (Impact) \u00d7 Likelihood (Probability)`.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q154",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "In which of the following incident handling and response stages, the root cause of the incident must be found from the forensic results?",
    options: [
          "Evidence Gathering",
          "Evidence Handling",
          "Eradication",
          "Systems Recovery"
    ],
    correctAnswer: 2,
    explanation: "The Eradication stage requires identifying the underlying root cause and exploited vulnerabilities from forensic analysis to ensure the threat is completely removed and cannot recur.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q155",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Jane, a security analyst, while analyzing IDS logs, detected an event matching Regex\n/((\\%3C)|<)((\\%69)|i|(\\% 49))((\\%6D)|m|(\\%4D))((\\%67)|g|(\\%47))[^\\n]+((\\%3E)|>)/i\n\nWhat does this event log indicate?",
    options: [
          "Directory Traversal Attack",
          "Parameter Tampering Attack",
          "XSS Attack",
          "SQL Injection Attack"
    ],
    correctAnswer: 2,
    explanation: "The regular expression detects `<img` or `%3Cimg` HTML tags being passed in HTTP traffic, a common payload vector for Cross-Site Scripting (XSS) attacks.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q156",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following Windows Event ID will help you monitor file sharing across the network?",
    options: [
          "7045",
          "4625",
          "5140",
          "4624"
    ],
    correctAnswer: 2,
    explanation: "Windows Security Event ID 5140 (under Audit File Share) is logged every time a network share object (SMB share) is accessed.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q157",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "The threat intelligence which will help you understand adversary intent and make informed decisions to ensure appropriate security in alignment with risk is known as:",
    options: [
          "Tactical Threat Intelligence",
          "Strategic Threat Intelligence",
          "Functional Threat Intelligence",
          "Operational Threat Intelligence"
    ],
    correctAnswer: 1,
    explanation: "Strategic Threat Intelligence provides high-level risk context, adversary motivations, and geopolitical insights to guide executive policy and risk decisions.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q158",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Identify the type of attack an attacker is attempting on the www.example.com website by appending a script tag to the URL that triggers an alert dialog.",
    options: [
          "Cross-site Scripting Attack",
          "Session Attack",
          "Denial-of-Service Attack",
          "SQL Injection Attack"
    ],
    correctAnswer: 0,
    explanation: "Injecting script code via the web URL to trigger client-side JavaScript execution is a Cross-Site Scripting (XSS) attack.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q159",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following fields in Windows logs defines the type of event occurred, such as Correlation Hint, Response Time, SQM, WDI Context, and so on?",
    options: [
          "Keywords",
          "Task Category",
          "Level",
          "Source"
    ],
    correctAnswer: 1,
    explanation: "In Windows Event Viewer, the 'Task Category' field specifies the functional subcategory of the logged event.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q160",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following tool is used to recover from web application incidents and automate endpoint/application remediation?",
    options: [
          "CrowdStrike FalconTM Orchestrator",
          "Symantec Secure Web Gateway",
          "Smoothwall SWG",
          "Proxy Workbench"
    ],
    correctAnswer: 0,
    explanation: "CrowdStrike Falcon Orchestrator is a SOAR/automation platform used to automate incident response, investigation, and recovery actions across endpoints and web apps.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q161",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Robin, a SOC engineer in a multinational company, is planning to implement a SIEM. He realized that his organization is capable of performing only Correlation, Analytics, Reporting, Retention, Alerting, and Visualization required for the SIEM implementation and has to take collection and aggregation services from a Managed Security Services Provider (MSSP).\n\nWhat kind of SIEM is Robin planning to implement?",
    options: [
          "Self-hosted, Self-Managed",
          "Self-hosted, MSSP Managed",
          "Hybrid Model, Jointly Managed",
          "Cloud, Self-Managed"
    ],
    correctAnswer: 2,
    explanation: "A model where some core SIEM responsibilities (analytics, alerting) are managed in-house while other layers (collection, aggregation) are handled by an MSSP is a Hybrid Model, Jointly Managed.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q162",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "What type of event is recorded when an application driver loads successfully in Windows?",
    options: [
          "Error",
          "Success Audit",
          "Warning",
          "Information"
    ],
    correctAnswer: 3,
    explanation: "Successful normal operational actions, such as driver loading without errors, are logged as 'Information' events in Windows System logs.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q163",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "An attacker exploits the logic validation mechanisms of an e-commerce website. He successfully purchases a product worth $100 for $10 by modifying the URL exchanged between the client and the server.\n\nOriginal URL: http://www.buyonline.com/product.aspx?profile=12&debit=100\nModified URL: http://www.buyonline.com/product.aspx?profile=12&debit=10\n\nIdentify the attack depicted in the above scenario.",
    options: [
          "Denial-of-Service Attack",
          "SQL Injection Attack",
          "Parameter Tampering Attack",
          "Session Fixation Attack"
    ],
    correctAnswer: 2,
    explanation: "Modifying query string values (debit=100 to debit=10) to bypass business logic and change prices is Parameter Tampering.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q164",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "John, a threat analyst at GreenTech Solutions, wants to gather information about specific threats against the organization. He started collecting information from various sources, such as humans, social media, chat rooms, and so on, and created a report that contains malicious activity.\n\nWhich of the following types of threat intelligence did he use?",
    options: [
          "Strategic Threat Intelligence",
          "Technical Threat Intelligence",
          "Tactical Threat Intelligence",
          "Operational Threat Intelligence"
    ],
    correctAnswer: 3,
    explanation: "Operational Threat Intelligence gathers actionable details about specific imminent threats, adversary actors, chatter in dark web/chat rooms, and campaign details.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q165",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following is a default directory in a Mac OS X that stores security-related logs?",
    options: [
          "/private/var/log",
          "/Library/Logs/Sync",
          "/var/log/cups/access_log",
          "~/Library/Logs"
    ],
    correctAnswer: 0,
    explanation: "In macOS / OS X, `/private/var/log` (or `/var/log`) is the primary system directory containing system and security-related logs (e.g. system.log, secure.log).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q166",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "John, SOC analyst wants to monitor the attempt of process creation activities from any of their Windows endpoints.\n\nWhich of following Splunk query will help him to fetch related logs associated with process creation?",
    options: [
          "index=windows LogName=Security EventCode=4678 NOT (Account_Name=*$)",
          "index=windows LogName=Security EventCode=4688 NOT (Account_Name=*$)",
          "index=windows LogName=Security EventCode=3688 NOT (Account_Name=*$)",
          "index=windows LogName=Security EventCode=5688 NOT (Account_Name=*$)"
    ],
    correctAnswer: 1,
    explanation: "EventCode=4688 represents process creation in Windows Security logs, and `NOT (Account_Name=*$)` filters out machine/system accounts.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q167",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Harley is working as a SOC analyst with Powell Tech. Powell Inc. is using Internet Information Service (IIS) version 7.0 to host their website.\n\nWhere will Harley find the web server logs, if he wants to investigate them for any anomalies?",
    options: [
          "%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVCN",
          "%SystemDrive%\\LogFiles\\inetpub\\logs\\W3SVCN",
          "%SystemDrive%\\LogFiles\\logs\\W3SVCN",
          "%SystemDrive%\\ inetpub\\LogFiles\\logs\\W3SVCN"
    ],
    correctAnswer: 0,
    explanation: "In Microsoft IIS 7.0+, default W3C web server log files are stored under `%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC{SiteID}`.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q168",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "What does the Security Log Event ID 4624 of Windows 10 indicate?",
    options: [
          "Service added to the endpoint",
          "A share was assessed",
          "An account was successfully logged on",
          "New process executed"
    ],
    correctAnswer: 2,
    explanation: "Windows Security Event ID 4624 explicitly records that an account successfully logged on to the local computer or over the network.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q169",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following is a set of standard guidelines for ongoing development, enhancement, storage, dissemination and implementation of security standards for account data protection?",
    options: [
          "FISMA",
          "HIPAA",
          "PCI-DSS",
          "DARPA"
    ],
    correctAnswer: 2,
    explanation: "PCI-DSS (Payment Card Industry Data Security Standard) establishes mandatory operational and technical standards to protect cardholder account data.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q170",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "What does the HTTP status codes 1XX represents?",
    options: [
          "Informational message",
          "Client error",
          "Success",
          "Redirection"
    ],
    correctAnswer: 0,
    explanation: "HTTP status codes in the 100-199 range (1XX) indicate Informational responses (e.g. 100 Continue, 101 Switching Protocols).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q171",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "In which phase of Lockheed Martin's \u2013 Cyber Kill Chain Methodology, adversary creates a deliverable malicious payload using an exploit and a backdoor?",
    options: [
          "Reconnaissance",
          "Delivery",
          "Weaponization",
          "Exploitation"
    ],
    correctAnswer: 2,
    explanation: "Weaponization combines an exploit with a payload/backdoor (e.g., creating a malicious Office macro document or trojanized installer) prior to delivery.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q172",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Identify the attack, where an attacker tries to discover all the possible information about a target network before launching a further attack.",
    options: [
          "DoS Attack",
          "Man-In-Middle Attack",
          "Ransomware Attack",
          "Reconnaissance Attack"
    ],
    correctAnswer: 3,
    explanation: "Reconnaissance is the initial phase of cyber attacks where adversaries gather OSINT, map network infrastructure, and enumerate vulnerabilities.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q173",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "What does [-n] in the following Checkpoint firewall log syntax represent?\n\nfw log [-f [-t]] [-n] [-l] [-o] [-c action] [-h host] [-s starttime] [-e endtime] [-b starttime endtime] [-u unification_scheme_file] [-m unification_mode(initial|semi|raw)] [-a] [-k (alert name|all)] [-g] [logfile]",
    options: [
          "Speed up the process by not performing IP addresses DNS resolution in the Log files",
          "Display both the date and the time for each log record",
          "Display account log records only",
          "Display detailed log chains (all the log segments a log record consists of)"
    ],
    correctAnswer: 0,
    explanation: "In Check Point's `fw log` command, the `-n` parameter suppresses reverse DNS lookups for IP addresses, significantly accelerating log output processing.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q174",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following attack inundates DHCP servers with fake DHCP requests to exhaust all available IP addresses?",
    options: [
          "DHCP Starvation Attacks",
          "DHCP Spoofing Attack",
          "DHCP Port Stealing",
          "DHCP Cache Poisoning"
    ],
    correctAnswer: 0,
    explanation: "A DHCP Starvation Attack broadcasts\u5927\u91cf spoofed DHCP DISCOVER requests with random MAC addresses to consume the entire pool of available IP leases, causing a DoS for legitimate endpoints.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q175",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Mike is an incident handler for PNP Infosystems Inc. One day, there was a ticket raised regarding a critical incident and Mike was assigned to handle the incident. During the process of incident handling, at one stage, he has performed incident analysis and validation to check whether the incident is a true incident or a false positive.\n\nIdentify the stage in which he is currently in.",
    options: [
          "Post-Incident Activities",
          "Incident Recording and Assignment",
          "Incident Triage",
          "Incident Disclosure"
    ],
    correctAnswer: 2,
    explanation: "Validating alert telemetry and determining whether an incident is a true security breach or false alarm is the central purpose of Incident Triage.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q176",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following is a correct flow of the stages in an incident handling and response (IH&R) process?",
    options: [
          "Containment –> Incident Recording –> Incident Triage –> Preparation –> Recovery –> Eradication –> Post-Incident Activities",
          "Preparation –> Incident Recording –> Incident Triage –> Containment –> Eradication –> Recovery –> Post-Incident Activities",
          "Incident Triage –> Eradication –> Containment –> Incident Recording –> Preparation –> Recovery –> Post-Incident Activities",
          "Incident Recording –> Preparation –> Containment –> Incident Triage –> Recovery –> Eradication –> Post-Incident Activities"
    ],
    correctAnswer: 1,
    explanation: "The official EC-Council IH&R process flow is: Preparation -> Incident Recording -> Incident Triage -> Containment -> Eradication -> Recovery -> Post-Incident Activities.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q177",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Rinni, SOC analyst, while monitoring IDS logs detected events showing repeated GET requests to:\n- `/OrderDetail.aspx?id=ORDR-001117`\n- `/OrderDetail.aspx?id=ORDR-001116`\n- `/OrderDetail.aspx?id=ORDR-001115`\n- `/OrderDetail.aspx?id=ORDR-001114`\n\nWhat does this event log indicate?",
    options: [
          "Directory Traversal Attack",
          "XSS Attack",
          "SQL Injection Attack",
          "Parameter Tampering Attack"
    ],
    correctAnswer: 3,
    explanation: "Sequentially altering the 'id' parameter in HTTP GET queries to view other users' order records is Parameter Tampering (Insecure Direct Object Reference / IDOR).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q178",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Peter, a SOC analyst with Spade Systems, is monitoring and analyzing the router logs of the company and wanted to check the logs that are generated by access control list numbered 210.\n\nWhat filter should Peter add to the 'show logging' command to get the required output?",
    options: [
          "show logging | access 210",
          "show logging | forward 210",
          "show logging | include 210",
          "show logging | route 210"
    ],
    correctAnswer: 2,
    explanation: "In Cisco IOS CLI, the pipe filter `include` matches lines containing a specific keyword or ACL number: `show logging | include 210`.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q179",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Identify the attack in which the attacker exploits a target system through publicly known but still unpatched vulnerabilities.",
    options: [
          "Slow DoS Attack",
          "DHCP Starvation",
          "Zero-Day Attack",
          "DNS Poisoning Attack"
    ],
    correctAnswer: 2,
    explanation: "Exploiting known software vulnerabilities for which the vendor has released no patch (or within the zero-day vulnerability window) is a Zero-Day Attack.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q180",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "In which log collection mechanism, the system or application sends log records either on the local disk or over the network automatically as events occur?",
    options: [
          "rule-based",
          "pull-based",
          "push-based",
          "signature-based"
    ],
    correctAnswer: 2,
    explanation: "In a push-based log collection model, agents or forwarding daemons (rsyslog, Winlogbeat) actively send log entries to the destination repository as they are generated.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q181",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following attack can be eradicated by disabling \"allow_url_fopen\" and \"allow_url_include\" in the php.ini configuration file?",
    options: [
          "File Injection Attacks",
          "URL Injection Attacks",
          "LDAP Injection Attacks",
          "Command Injection Attacks"
    ],
    correctAnswer: 0,
    explanation: "Disabling `allow_url_fopen` and `allow_url_include` in PHP eliminates Remote File Inclusion (RFI) and File Injection attacks by restricting file includes to local paths.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q182",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "Which of the following stage is executed immediately after identifying the required event sources in SOC use case engineering?",
    options: [
          "Identifying the monitoring Requirements",
          "Defining Rule for the Use Case",
          "Implementing and Testing the Use Case",
          "Validating the event source against monitoring requirement"
    ],
    correctAnswer: 1,
    explanation: "Once event sources are identified and onboarded, the next stage in the use case lifecycle is 'Defining Rule for the Use Case' (creating the detection logic and thresholds).",
    difficulty: "Medium"
  },
  {
    id: "csav2-q183",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following steps of incident handling and response process focuses on limiting the scope and extent of an incident?",
    options: [
          "Containment",
          "Data Collection",
          "Eradication",
          "Identification"
    ],
    correctAnswer: 0,
    explanation: "Containment isolates compromised devices, blocks malicious IP/domain traffic, and segments networks to limit the scope and damage of an active incident.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q184",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "Which of the following data source will a SOC Analyst use to monitor active network connections to insecure or suspicious ports?",
    options: [
          "Netstat Data",
          "DNS Data",
          "IIS Data",
          "DHCP Data"
    ],
    correctAnswer: 0,
    explanation: "Netstat (Network Statistics) displays active inbound/outbound TCP/UDP connections, listening ports, PID, and process mappings on a host.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q185",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following technique protects against flooding attacks originated from spoofed prefixes by verifying that the packet source IP belongs to the valid originating subnet?",
    options: [
          "Rate Limiting",
          "Egress Filtering",
          "Ingress Filtering",
          "Throttling"
    ],
    correctAnswer: 2,
    explanation: "Ingress Filtering (e.g. BCP 38) inspects incoming packet headers to ensure source IP addresses belong to legitimate, reachable routing prefixes.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q186",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Which of the following contains the performance measures, and proper project and time management details for incident handling?",
    options: [
          "Incident Response Policy",
          "Incident Response Tactics",
          "Incident Response Process",
          "Incident Response Procedures"
    ],
    correctAnswer: 3,
    explanation: "Incident Response Procedures (SOPs/runbooks) provide detailed step-by-step instructions, timelines, task ownership, and SLA performance metrics.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q187",
    examId: "csa-v2",
    moduleId: 3,
    moduleName: "Module 3: Incidents, Events & Logging",
    question: "John as a SOC analyst is worried about the amount of Tor traffic hitting the network. He wants to prepare a dashboard in the SIEM to get a graph to identify the locations and identities from where the TOR traffic is coming.\n\nWhich of the following data source will he use to prepare the dashboard?",
    options: [
          "DHCP/Logs capable of maintaining IP addresses or hostnames with IPtoName resolution.",
          "IIS/Web Server logs with IP addresses and user agent IPtouseragent resolution.",
          "DNS/ Web Server logs with IP addresses.",
          "Apache/ Web Server logs with IP addresses and Host Name."
    ],
    correctAnswer: 0,
    explanation: "DHCP logs and network identity logs providing IP-to-Hostname and IP-to-Name resolution allow mapping internal hosts initiating connections to external Tor exit nodes.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q188",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Which of the following process refers to the discarding of packets at the routing level without informing the source that the data did not reach its intended recipient?",
    options: [
          "Load Balancing",
          "Rate Limiting",
          "Black Hole Filtering",
          "Drop Requests"
    ],
    correctAnswer: 2,
    explanation: "Black Hole Filtering drops incoming network traffic destined for targeted IP addresses into a null interface without sending ICMP unreachable error responses.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q189",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following tool can be used to filter web requests associated with SQL Injection attacks on Microsoft IIS servers?",
    options: [
          "Nmap",
          "UrlScan",
          "ZAP proxy",
          "Hydra"
    ],
    correctAnswer: 1,
    explanation: "UrlScan is a Microsoft IIS security filter that inspects incoming HTTP requests and blocks requests containing suspicious SQL injection patterns or prohibited verbs.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q190",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "Charline is working as an L2 SOC Analyst. One day, an L1 SOC Analyst escalated an incident to her for further investigation and confirmation. Charline, after a thorough investigation, confirmed the incident and assigned it with an initial priority.\n\nWhat would be her next action according to the SOC workflow?",
    options: [
          "She should immediately escalate this issue to the management",
          "She should immediately contact the network administrator to solve the problem",
          "She should communicate this incident to the media immediately",
          "She should formally raise a ticket and forward it to the IRT"
    ],
    correctAnswer: 3,
    explanation: "Once an L2 analyst validates the incident and assigns severity, she must formally create/update the incident ticket with forensic evidence and route it to the Incident Response Team (IRT).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q191",
    examId: "csa-v2",
    moduleId: 5,
    moduleName: "Module 5: Enhanced Detection with Threat Intelligence",
    question: "Which of the following threat intelligence helps cyber security professionals such as security operations managers, network operations center and incident responders to understand how the adversaries are expected to perform the attack on the organization, and the technical capabilities and goals of the attackers along with the attack vectors?",
    options: [
          "Analytical Threat Intelligence",
          "Operational Threat Intelligence",
          "Strategic Threat Intelligence",
          "Tactical Threat Intelligence"
    ],
    correctAnswer: 1,
    explanation: "Operational Threat Intelligence provides specific insights into adversary capabilities, attack intent, upcoming campaigns, and technical vectors for operational defenders.",
    difficulty: "Medium"
  },
  {
    id: "csav2-q192",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "If the SIEM generates the following four alerts at the same time:\nI. Firewall blocking traffic from getting into the network alerts\nII. SQL injection attempt alerts\nIII. Data deletion attempt alerts\nIV. Brute-force attempt alerts\n\nWhich alert should be given least priority as per effective alert triaging?",
    options: [
          "III",
          "IV",
          "II",
          "I"
    ],
    correctAnswer: 3,
    explanation: "Firewall block alerts (Alert I) represent threats that have already been stopped and contained at the network boundary, giving them lower triage priority compared to active exploits.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q193",
    examId: "csa-v2",
    moduleId: 1,
    moduleName: "Module 1: Security Operations & Management",
    question: "InfoSystem LLC, a US-based company, is establishing an in-house SOC. John has been given the responsibility to finalize strategy, policies, and procedures for the SOC.\n\nIdentify the job role of John.",
    options: [
          "Security Analyst – L1",
          "Chief Information Security Officer (CISO)",
          "Security Engineer",
          "Security Analyst – L2"
    ],
    correctAnswer: 1,
    explanation: "The Chief Information Security Officer (CISO) is the executive responsible for organizational cybersecurity strategy, governance policies, and SOC operational charters.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q194",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following service provides phishing protection and content filtering to manage the Internet experience on and off your network with acceptable use or compliance policies?",
    options: [
          "Apility.io",
          "Malstrom",
          "OpenDNS",
          "I-Blocklist"
    ],
    correctAnswer: 2,
    explanation: "OpenDNS (Cisco Umbrella) enforces predictive phishing protection, malware blocking, and web content filtering at the DNS resolution layer.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q195",
    examId: "csa-v2",
    moduleId: 4,
    moduleName: "Module 4: Incident Detection with SIEM",
    question: "David is a SOC analyst in Karen Tech. One day an attack is initiated by the intruders but David was not able to find any suspicious events.\n\nThis type of incident is categorized into:",
    options: [
          "True Positive Incidents",
          "False positive Incidents",
          "True Negative Incidents",
          "False Negative Incidents"
    ],
    correctAnswer: 3,
    explanation: "A False Negative occurs when an actual attack occurs on the network but security monitoring controls fail to detect it or raise an alert.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q196",
    examId: "csa-v2",
    moduleId: 6,
    moduleName: "Module 6: Incident Response (IR)",
    question: "Emmanuel is working as a SOC analyst in a company named Tobey Tech. The manager of Tobey Tech recently recruited an Incident Response Team (IRT) for his company. In the process of collaboration with the IRT, Emmanuel just escalated an incident to the IRT.\n\nWhat is the first step that the IRT will do to the incident escalated by Emmanuel?",
    options: [
          "Incident Analysis and Validation",
          "Incident Recording",
          "Incident Classification",
          "Incident Prioritization"
    ],
    correctAnswer: 0,
    explanation: "Upon receiving an escalated ticket, the IRT's first action is Incident Analysis and Validation to verify forensic indicators and confirm the scope.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q197",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Identify the HTTP status codes that represents the server error.",
    options: [
          "2XX",
          "4XX",
          "1XX",
          "5XX"
    ],
    correctAnswer: 3,
    explanation: "HTTP status codes in the 500-599 range (5XX) denote Server Errors (e.g., 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable).",
    difficulty: "Easy"
  },
  {
    id: "csav2-q198",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Jony, a security analyst, while monitoring IIS logs, identified events with complex SQL queries containing 'UNICODE(SUBSTRING((SELECT MAX(ISNULL(CAST(Phoneno AS NVARCHAR(4000)),CHAR(32))) FROM Hotels... WAITFOR DELAY '0:0:5'...' .\n\nWhat does this event log indicate?",
    options: [
          "Parameter Tampering Attack",
          "XSS Attack",
          "Directory Traversal Attack",
          "SQL Injection Attack"
    ],
    correctAnswer: 3,
    explanation: "Queries containing SQL database functions (`UNICODE`, `SUBSTRING`, `WAITFOR DELAY`, string manipulation) in URI query parameters indicate Blind/Time-based SQL Injection.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q199",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which attack works like a dictionary attack, but adds some numbers and symbols to the words from the dictionary and tries to crack the password?",
    options: [
          "Hybrid Attack",
          "Bruteforce Attack",
          "Rainbow Table Attack",
          "Birthday Attack"
    ],
    correctAnswer: 0,
    explanation: "A Hybrid Attack combines dictionary wordlists with rule-based permutations (appending numbers, special characters, and leetspeak) to crack passwords.",
    difficulty: "Easy"
  },
  {
    id: "csav2-q200",
    examId: "csa-v2",
    moduleId: 2,
    moduleName: "Module 2: Cyber Threats, IoCs & Attack Methodologies",
    question: "Which of the following attack can be eradicated by converting all non-alphanumeric characters to HTML character entities before displaying the user input in search engines and forums?",
    options: [
          "Broken Access Control Attacks",
          "Web Services Attacks",
          "XSS Attacks",
          "Session Management Attacks"
    ],
    correctAnswer: 2,
    explanation: "HTML entity encoding (converting `<`, `>`, `&`, `'`, `\"` into `&lt;`, `&gt;`, `&amp;`, etc.) prevents malicious script execution, eradicating Cross-Site Scripting (XSS).",
    difficulty: "Easy"
  }
];
