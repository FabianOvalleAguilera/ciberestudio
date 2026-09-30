// Technical Notes and Cheat Sheets for EC-Council CSA v2 (2026 Exam - 200 Qs Bank)
// Each note is directly tailored to cover all testable tables, formulas, event IDs, and concepts in the 200 Qs PDF bank and CSA v2 curriculum.

export const defaultNotes = [
  // =========================================================================
  // 1. WINDOWS SECURITY & AUDITING EVENT LOGS
  // =========================================================================
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
      ["4648", "Explicit Credential Logon", "Logon attempted using explicit credentials (e.g. `runas /user:` or alternate credentials).", "Medium"],
      ["4663", "Object Access Attempt", "Access to specific file, folder, or database on shared servers (audit who accessed/modified files).", "Medium"],
      ["4672", "Special Privileges Assigned", "Administrative / elevated logon (e.g. Administrator, SeDebugPrivilege, SeBackupPrivilege).", "High"],
      ["4688", "New Process Created", "Process execution. With CommandLine auditing, exposes arguments (e.g. `powershell -ExecutionPolicy Bypass`).", "High"],
      ["4689", "Process Exited", "Process termination event for lifecycle and duration tracking.", "Informational"],
      ["7045", "Service Installed (System)", "New Windows service created. Frequently used for persistent adversary backdoors.", "Critical"],
      ["4697", "Service Installed (Security)", "Security audit event indicating a service was installed in the system.", "Critical"],
      ["4698", "Scheduled Task Created", "New scheduled task registered (`schtasks /create`). Primary APT persistence vector.", "High"],
      ["4720", "User Account Created", "New user account provisioned. Used to detect rogue administrative persistence.", "High"],
      ["4722", "User Account Enabled", "A disabled user account was re-enabled.", "Medium"],
      ["4726", "User Account Deleted", "A user account was deleted from local SAM or Active Directory.", "Medium"],
      ["4728", "Member Added to Security Group", "User added to global security group (Privilege Escalation indicator).", "High"],
      ["4732", "Member Added to Local Group", "User added to local Administrators group (e.g. `net localgroup administrators attacker /add`).", "Critical"],
      ["4738", "User Account Modified", "Attributes of an account (password reset, UAC flags, description) were altered.", "Medium"],
      ["4740", "User Account Locked Out", "User account locked out due to exceeding maximum failed authentication threshold.", "High"],
      ["4776", "NTLM Credential Validation", "Domain Controller attempted to validate account credentials via NTLM authentication package.", "Medium"],
      ["1102", "Audit Log Cleared (Security)", "The Security audit log was cleared. Critical indicator of adversary Cleanup / anti-forensics.", "Critical"],
      ["104", "Log Cleared (System/App)", "The System or Application event log was cleared.", "Critical"],
      ["4719", "Audit Policy Changed", "Audit policy modified to disable logging of security events.", "Critical"]
    ]
  },
  {
    id: "note-kerberos-events",
    examId: "csa-v2",
    category: "Windows Event Logs",
    title: "Active Directory & Kerberos Authentication Event IDs",
    description: "Key Kerberos ticket request events and Active Directory attack detection signatures.",
    type: "table",
    headers: ["Event ID", "Kerberos Activity", "Attack / Detection Pattern", "Key Log Fields"],
    rows: [
      ["4768", "Kerberos TGT Request", "TGT requested from KDC (Authentication Service AS-REQ / AS-REP).", "TargetUserName, ServiceName (krbtgt), ClientAddress, ResultCode"],
      ["4769", "Kerberos Service Ticket (TGS)", "Service Ticket requested (TGS-REQ). RC4 encryption (0x17) indicates Kerberoasting attack.", "ServiceName, TicketEncryptionType (0x17 vs 0x12), Status, ClientAddress"],
      ["4771", "Kerberos Pre-Auth Failed", "Pre-authentication failed. Failure code 0x18 (bad password) or accounts without pre-auth (AS-REP Roasting).", "TargetUserName, FailureCode (0x18, 0x17, 0x25), ClientAddress"],
      ["4776", "NTLM Validation (DC)", "DC validates NTLM credentials. High volume = NTLM password spray or Pass-the-Hash.", "PackageName (MICROSOFT_AUTHENTICATION_PACKAGE_V1_0), TargetUserName, Workstation"],
      ["4672", "Special Privileges Assigned", "Fires alongside 4624 when user has SeDebugPrivilege, SeImpersonatePrivilege, or Domain Admins rights.", "SubjectUserName, PrivilegeList"]
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
      ["Type 3", "Network", "Remote connection to shared resources (SMB, IIS, RPC). Burst across machines indicates Lateral Movement (Pass-the-Hash / PsExec / WMI)."],
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
    id: "note-logon-substatus",
    examId: "csa-v2",
    category: "Windows Event Logs",
    title: "Windows Logon Failure Sub-Status Error Codes (Event 4625)",
    description: "Hexadecimal NTSTATUS sub-status error codes that pinpoint the exact root cause of logon failures.",
    type: "table",
    headers: ["Sub-Status Code", "Error Definition", "SOC Forensic Analysis & Threat Pattern"],
    rows: [
      ["0xC0000064", "STATUS_NO_SUCH_USER", "The specified user account does not exist. High frequency indicates User Enumeration / Account Harvest."],
      ["0xC000006A", "STATUS_WRONG_PASSWORD", "The user exists, but provided an invalid password. High frequency on one user = Brute-Force; across many users = Password Spray."],
      ["0xC0000234", "STATUS_ACCOUNT_LOCKED_OUT", "The user account is locked out because the maximum failed login threshold was exceeded."],
      ["0xC0000072", "STATUS_ACCOUNT_DISABLED", "The user account is currently disabled by administrative policy."],
      ["0xC0000193", "STATUS_ACCOUNT_EXPIRED", "The user account has expired."],
      ["0xC000006D", "STATUS_LOGON_FAILURE", "General logon failure (bad credentials or username)."],
      ["0xC0000133", "STATUS_TIME_DIFFERENCE_AT_ISSUE", "Clock skew between client and Domain Controller exceeds Kerberos tolerance (default 5 minutes)."]
    ]
  },
  {
    id: "note-sysmon-matrix",
    examId: "csa-v2",
    category: "Endpoint & Sysmon Logs",
    title: "Sysmon (System Monitor) Threat Detection Matrix",
    description: "Microsoft Sysinternals Sysmon event IDs and their application in advanced SOC threat detection.",
    type: "table",
    headers: ["Sysmon Event ID", "Event Name", "MITRE ATT&CK Mapping & Detection Use Case", "Key Fields"],
    rows: [
      ["Event 1", "Process Creation", "T1059 Command & Scripting: Command line, hashes (MD5/SHA256), parent-child process relationships.", "CommandLine, ParentImage, ParentCommandLine, Hashes, User"],
      ["Event 2", "File Creation Time Changed", "T1070.006 Timestomping: Adversary changes file timestamp to blend into system directories.", "TargetFilename, CreationUtcTime, PreviousCreationUtcTime"],
      ["Event 3", "Network Connection", "T1071 C2 Communication: Outbound network connections initiated by processes (e.g. `powershell.exe` -> external IP).", "Image, SourceIp, DestinationIp, DestinationPort, Protocol"],
      ["Event 7", "Image Loaded (DLL)", "T1574 DLL Sideloading / Hijacking: Detection of untrusted or unsigned DLLs loaded into legitimate processes.", "Image, ImageLoaded, Hashes, Signed, Signature"],
      ["Event 8", "CreateRemoteThread", "T1055 Process Injection: Thread injected into another process (e.g. injector into `explorer.exe` or `svchost.exe`).", "SourceImage, TargetImage, StartAddress, NewThreadId"],
      ["Event 10", "ProcessAccess", "T1003 OS Credential Dumping: Process requests handle to `lsass.exe` (Mimikatz GrantedAccess `0x1010` / `0x1F0FFF`).", "SourceImage, TargetImage, GrantedAccess, CallTrace"],
      ["Event 11", "FileCreate", "T1105 Ingress Tool Transfer: Ransomware dropping encrypted files or web shell written to disk.", "TargetFilename, CreationUtcTime, Image"],
      ["Event 12/13/14", "Registry Events", "T1547 Boot/Logon Autostart: Persistence via Run keys (`HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run`).", "EventType, TargetObject, Details, Image"],
      ["Event 22", "DNS Query (DNSEvent)", "T1071.004 DNS C2 / Exfiltration: Domain name resolution requests, DGA queries, DNS tunneling.", "QueryName, QueryStatus, QueryResults, Image"],
      ["Event 25", "ProcessTampering", "T1055 Process Hollowing / Herpaderping: Detection of image hollowing or memory tampering.", "Type, Image, TamperedImage"]
    ]
  },

  // =========================================================================
  // 2. LINUX LOGS & SYSLOG STANDARDS
  // =========================================================================
  {
    id: "note-syslog-rfc",
    examId: "csa-v2",
    category: "Linux & Syslog Logs",
    title: "Syslog Standards (RFC 5424 vs RFC 3164) & Architecture",
    description: "Numeric syslog severity levels ranging from 0 (Emergency) to 7 (Debug), facilities, and header standards.",
    type: "table",
    headers: ["Level (Code)", "Severity", "Description & Operational Example"],
    rows: [
      ["0", "Emergency (emerg)", "System is completely unusable (Kernel Panic). Requires immediate enterprise intervention."],
      ["1", "Alert (alert)", "Action must be taken immediately (e.g., primary transaction database corrupted / RAID failure)."],
      ["2", "Critical (crit)", "Critical conditions (e.g., vital security subsystem or hardware failure)."],
      ["3", "Error (err)", "Error conditions within running applications (e.g. service daemon crash)."],
      ["4", "Warning (warning)", "Warning conditions indicating potential issues (e.g. disk partition at 90% capacity)."],
      ["5", "Notice (notice)", "Normal but significant operational events (e.g. service restart or interface status change)."],
      ["6", "Informational (info)", "Standard operational informational messages (e.g. user session connected, cron job started)."],
      ["7", "Debug (debug)", "Detailed debugging information for developers and engineers."]
    ]
  },
  {
    id: "note-syslog-facilities",
    examId: "csa-v2",
    category: "Linux & Syslog Logs",
    title: "Syslog Facilities & Priority (PRI) Calculation",
    description: "Syslog facility codes (0-23) and formula for computing the PRI value in syslog headers.",
    type: "cards",
    items: [
      {
        title: "Syslog Priority Formula (RFC 5424)",
        code: "PRI = (Facility * 8) + Severity",
        desc: "Example: Facility `auth` (4) and Severity `crit` (2) results in PRI = (4 * 8) + 2 = 34 -> Represented in syslog header as `<34>`."
      },
      {
        title: "Common Facility Codes (0-23)",
        code: "0=kern | 1=user | 2=mail | 3=daemon | 4=auth | 9=cron | 10=authpriv | 16-23=local0-local7",
        desc: "`auth` (4) and `authpriv` (10) are used for security and authentication messages. `local0` through `local7` are reserved for custom application logs."
      },
      {
        title: "Syslog Transport Protocols & Ports",
        code: "UDP 514 (Legacy) | TCP 514 (Reliable) | TLS/TCP 6514 (Encrypted)",
        desc: "Standard syslog uses UDP 514 (unreliable, no ACK). Modern SOC forwarders utilize TLS over TCP 6514 for mutual authentication and tamper-resistant transit."
      },
      {
        title: "Syslog Relays & Collectors",
        code: "Source -> Syslog Relay (Buffer) -> Central SIEM Collector",
        desc: "Syslog Relays act as intermediate forwarders on branch networks, buffering messages during network outages and offloading central SIEM ingestion."
      }
    ]
  },
  {
    id: "note-linux-log-paths",
    examId: "csa-v2",
    category: "Linux & Syslog Logs",
    title: "Linux System Log Paths & Audit Framework",
    description: "Comprehensive reference of standard log paths across Debian, RHEL, and Auditd.",
    type: "table",
    headers: ["Log File / Command", "Platform / Service", "Forensic Information & SOC Utility"],
    rows: [
      ["/var/log/auth.log", "Debian / Ubuntu", "Authentication log: SSH logins, sudo executions, PAM authentication attempts, su elevation."],
      ["/var/log/secure", "RHEL / CentOS / Rocky", "Authentication log for Red Hat-based distributions (equivalent to auth.log)."],
      ["/var/log/messages", "RHEL / CentOS", "General system activity and service daemon logs."],
      ["/var/log/syslog", "Debian / Ubuntu", "Comprehensive system-wide logging stream."],
      ["/var/log/wtmp", "All Linux (Binary)", "Records all successful logins, logouts, reboots, and runlevels (read with `last`)."],
      ["/var/log/btmp", "All Linux (Binary)", "Records bad/failed login attempts (read with `lastb`). Critical for brute force detection."],
      ["/var/log/lastlog", "All Linux (Binary)", "Records the most recent login for each system account (read with `lastlog`)."],
      ["/var/log/utmp", "All Linux (Binary)", "Current state of active logged-in users (read with `who`, `w`, `users`)."],
      ["/var/log/kern.log", "Linux Kernel", "Kernel messages and iptables firewall dropped packets (`-j LOG`)."],
      ["/var/log/audit/audit.log", "Linux Auditd", "Detailed Linux Auditing System logs: SYSCALLs, EXECVE commands, file access, and SELinux AVC denials."],
      ["journalctl", "Systemd Journal", "Tool to query binary systemd journal (`journalctl -u sshd -f -p err`)."]
    ]
  },

  // =========================================================================
  // 3. WEB SERVER LOGS & ATTACK SIGNATURES
  // =========================================================================
  {
    id: "note-web-attack-master",
    examId: "csa-v2",
    category: "Web Server & App Logs",
    title: "Web Attack Signatures, HTTP Codes & Regex Master Table",
    description: "Common payload signatures, regular expressions, and HTTP response codes tested in web intrusion scenarios.",
    type: "table",
    headers: ["Attack / Concept", "Payload / Regex Pattern", "Decoded Signature", "Mitigation / Control"],
    rows: [
      ["Directory / Path Traversal", "/(.|(%|%25)2E)(.|(%|%25)2E)(\\/|(%|%25)2F|\\\\|(%|%25)5C)/i", "%2E = . | %2F = / | %5C = \\ (Detects `../` and `..\\` sequences)", "Strict Path Canonicalization, Restricting Web Root Permissions"],
      ["SQL Injection (Tautology)", "alert tcp any any -> any 80 content:\"' OR T=T\"", "' OR T=T / ' OR 1=1 (Always evaluates to true to bypass login)", "Parameterized Queries (Prepared Statements), UrlScan filter (IIS)"],
      ["Blind / Time-based SQLi", "WAITFOR DELAY '0:0:5' / UNICODE(SUBSTRING(...))", "Forces DB server to delay response to extract data character-by-character", "Input Sanitization, Parameterized SQL Queries"],
      ["Cross-Site Scripting (XSS)", "<img src=x onerror=alert(1)>", "Injects client-side executable script into web application context", "Convert all non-alphanumeric chars to HTML character entities (&lt;, &gt;), CSP"],
      ["Command Injection (RCE)", "; cat /etc/passwd | whoami", "Executes operating system commands via web parameter concatenation", "Avoid passing user input to system shell execution APIs"],
      ["Hex Code Regex Pattern", "([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})", "Matches 3-digit shorthand or 6-digit full hexadecimal codes in logs", "Used in regex filters for hexadecimal pattern extraction"],
      ["HTTP 2XX (Success)", "200 OK / 201 Created", "Request succeeded (may indicate successful exploit payload execution)", "Log auditing & correlation with WAF alerts"],
      ["HTTP 4XX (Client Error)", "401 Unauthorized / 403 Forbidden / 404 Not Found", "Client-side error or blocked resource access attempt", "Monitor for 403/404 bursts during web scanning/reconnaissance"],
      ["HTTP 5XX (Server Error)", "500 Internal Server Error / 502 Bad Gateway / 503 Unavailable", "Server error (indicates unhandled backend exception or SQL syntax error)", "Investigate error stack traces to detect application exploitation"]
    ]
  },
  {
    id: "note-iis-w3c-format",
    examId: "csa-v2",
    category: "Web Server & App Logs",
    title: "Microsoft IIS W3C Extended Log Format Reference",
    description: "Default paths, field prefixes, and field definitions for Microsoft IIS web server logs.",
    type: "table",
    headers: ["Field / Prefix", "Name & Meaning", "Example & Forensic Usage"],
    rows: [
      ["Default Path", "%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC<SiteID>", "Standard location for IIS W3C logs (e.g. `u_ex260930.log`)."],
      ["s- (Prefix)", "Server-related field", "`s-ip`: IP address of the web server where the request arrived."],
      ["c- (Prefix)", "Client-related field", "`c-ip`: Source IP address of the client / attacker initiating the request."],
      ["cs- (Prefix)", "Client-to-Server field", "`cs-method` (GET/POST), `cs-uri-stem` (/login.aspx), `cs-uri-query` (?id=1' OR 1=1)."],
      ["sc- (Prefix)", "Server-to-Client field", "`sc-status` (200, 404, 500), `sc-substatus` (401.1), `sc-bytes` (bytes sent to client)."],
      ["cs(User-Agent)", "Client User-Agent", "Identifies browser or automated tool (e.g. `sqlmap/1.6`, `Nikto/2.1.6`)."],
      ["time-taken", "Processing Duration (ms)", "Time taken to process request. Anomalous high time indicates Time-based Blind SQLi."]
    ]
  },

  // =========================================================================
  // 4. NETWORK & IDS/IPS LOGS
  // =========================================================================
  {
    id: "note-snort-ids-rules",
    examId: "csa-v2",
    category: "Network & Security Logs",
    title: "Snort / Suricata IDS Rule Syntax & Alert Structure",
    description: "Anatomy of Snort IDS rules and detection signatures for SOC analysts.",
    type: "cards",
    items: [
      {
        title: "Snort Rule Syntax Anatomy",
        code: "[Action] [Protocol] [Src_IP] [Src_Port] [Direction] [Dst_IP] [Dst_Port] ( [Rule Options] )",
        desc: "Example: `alert tcp $EXTERNAL_NET any -> $HTTP_SERVERS 80 (msg:\"SQLi Tautology\"; content:\"' OR T=T\"; nocase; sid:1000001; rev:1;)`"
      },
      {
        title: "Snort Rule Actions",
        code: "alert | log | pass | drop | reject | sdrop",
        desc: "`alert` generates an alert and logs the packet. `drop` drops the packet silently. `reject` drops packet and sends TCP RST or ICMP port unreachable."
      },
      {
        title: "Snort Rule Options Keywords",
        code: "msg | content | nocase | offset | depth | sid | rev | classtype | flow",
        desc: "`content` specifies exact string/hex to match. `nocase` ignores case sensitivity. `sid` is the unique Snort Rule ID (>1,000,000 for local custom rules)."
      },
      {
        title: "DNS Tunneling & Exfiltration Signatures",
        code: "High-Entropy Subdomains | Type: TXT / NULL | High Query Frequency",
        desc: "Adversaries encode stolen data in DNS queries: `aW5maWx0cmF0aW9u.c2VjcmV0.attacker.com IN TXT`. Detectable via DNS query length and entropy."
      }
    ]
  },
  {
    id: "note-netflow-telemetry",
    examId: "csa-v2",
    category: "Network & Security Logs",
    title: "NetFlow / IPFIX Telemetry & Flow Fields",
    description: "Network flow records used for traffic analysis, baseline profiling, and data exfiltration detection.",
    type: "table",
    headers: ["Flow Field", "Description", "SOC Detection Use Case"],
    rows: [
      ["Source & Destination IP", "Sender and Receiver IPv4/IPv6 addresses", "Mapping lateral movement and detecting external C2 communication."],
      ["Source & Destination Port", "L4 Transport ports (TCP/UDP)", "Identifying unauthorized services (e.g. port 4444) or non-standard port usage."],
      ["Protocol", "IP protocol number (6=TCP, 17=UDP, 1=ICMP)", "Detecting protocol tunneling or ICMP exfiltration."],
      ["Byte & Packet Counts", "Total volume transferred during the flow", "Spotting massive outbound data exfiltration bursts (>500MB vs 5MB baseline)."],
      ["TCP Flags", "SYN, ACK, FIN, RST, PSH, URG", "Detecting SYN flood DDoS, port scans (SYN/FIN scans), and connection teardowns."],
      ["Flow Duration / Timestamps", "Start time, end time, and duration", "Identifying periodic C2 beaconing with low jitter intervals."]
    ]
  },

  // =========================================================================
  // 5. DATABASE & CLOUD LOG AUDITING
  // =========================================================================
  {
    id: "note-db-cloud-logging",
    examId: "csa-v2",
    category: "Database & Cloud Logs",
    title: "Database & Cloud Audit Logging Configurations",
    description: "Configuration parameters and audit trails across PostgreSQL, MySQL, and major Cloud platforms.",
    type: "table",
    headers: ["Platform / Service", "Parameter / Configuration Path", "SOC Function & Audit Utility"],
    rows: [
      ["PostgreSQL Auditing", "log_collector = on (in postgresql.conf)", "Enables background collector process to capture stderr/CSV logs to files for SIEM ingestion."],
      ["PostgreSQL Statement Log", "log_statement = 'all' | 'ddl' | 'mod'", "Audits SQL statements executed by users to detect SQL injection and unauthorized DDL/DML tampering."],
      ["MySQL Auditing", "general_log = 1 & slow_query_log = 1", "Records all executed queries and queries exceeding `long_query_time` threshold."],
      ["AWS CloudTrail", "Management & Data Events (JSON to S3)", "Captures AWS API calls (who made the request, when, from which IP, and what resource was modified)."],
      ["Azure Activity Log", "Control plane subscription events", "Records operations performed on resources in Azure (creation, update, deletion of VMs/VNETs)."],
      ["GCP Cloud Audit Logs", "Admin Activity & Data Access Logs", "Immutable audit trail of administrator actions and data access across Google Cloud resources."]
    ]
  },

  // =========================================================================
  // 6. SIEM LOG LIFECYCLE & NORMALIZATION
  // =========================================================================
  {
    id: "note-siem-log-lifecycle",
    examId: "csa-v2",
    category: "SIEM & Log Pipeline",
    title: "SIEM Log Management Lifecycle & Data Normalization",
    description: "The 7 stages of the SIEM log processing pipeline, normalization schemas, and storage tiers.",
    type: "cards",
    items: [
      {
        title: "1. Log Collection & Ingestion",
        code: "Agent-based vs Agentless | Syslog | APIs | WEC",
        desc: "Ingests raw events from endpoints, network appliances, databases, and cloud services via push (Syslog/WEC) or pull (APIs/WMI) methods."
      },
      {
        title: "2. Parsing & Field Extraction",
        code: "Grok | Regex | JSON Parser | Key-Value Delimiters",
        desc: "Dissects raw unstructured or semi-structured log strings into distinct key-value fields (timestamp, src_ip, user, action)."
      },
      {
        title: "3. Normalization (Taxonomies)",
        code: "CEF | LEEF | Splunk CIM | Elastic ECS",
        desc: "Standardizes disparate vendor field names into a common taxonomy (e.g. mapping `c-ip`, `SourceAddress`, `src` to standardized `source_ip`)."
      },
      {
        title: "4. Data Enrichment",
        code: "GeoIP | Asset DB | LDAP/Active Directory | Threat Intel (STIX)",
        desc: "Appends valuable contextual metadata to events: geographic origin, asset criticality tier, user department, and known malicious IoC tags."
      },
      {
        title: "5. Storage Tiers & Archival",
        code: "Hot (Fast SSD) -> Warm (Indexed) -> Cold (Compressed) -> Frozen",
        desc: "Hot storage for active real-time queries (0-30 days); Cold/Frozen for long-term compliance retention (365+ days) on cost-effective object storage."
      },
      {
        title: "6. Tamper-Proofing & Log Integrity",
        code: "WORM Storage | SHA-256 Hashing | Digital Signatures | NTP Sync",
        desc: "Ensures legal chain of custody and forensic admissibility by preventing modification or deletion of archived log files."
      }
    ]
  },

  // =========================================================================
  // 7. INCIDENT RESPONSE, CTI & DEFENSIVE FRAMEWORKS
  // =========================================================================
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
