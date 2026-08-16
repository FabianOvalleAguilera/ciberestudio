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
  }
];
