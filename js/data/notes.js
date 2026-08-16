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
  }
];
