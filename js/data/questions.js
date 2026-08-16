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
  }
];
