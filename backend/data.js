import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Becca',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Hannah',
      email: 'hannah@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Siobhan',
      email: 'siobhan@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
    {
      name: 'Paul',
      email: 'paul@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Trojan Horse',
      slug: 'Trojan Horse',
      category: 'Cyber',
      image: '/images/p1.jpg', // 679px × 829px
      rating: 4.5,
      numReviews: 10,
      description:
        'A Trojan Horse Virus is a type of malware that downloads onto a computer disguised as a legitimate program. The delivery method typically sees an attacker use social engineering to hide malicious code within legitimate software to try and gain users system access with their software.',
      CVEcomments:
        "Northcutt> I don't quite get what this means, sorry  |    Frech> XF:nt-regfile(178)  |    Christey> MISC:http://security-archive.merton.ox.ac.uk/nt-security-199902/0087.html",
      CVEdescription:
        '.reg files are associated with the Windows NT registry editor (regedit), making the registry susceptible to Trojan Horse attacks.',
      CVEname: 'CVE-1999-0572',
      CVEphase: 'Modified (20041017)',
      CVEreference: '',
      CVEstatus: 'Candidate',
      CVEvotes:
        '   ACCEPT(4) Baker, Ozancin, Shostack, Wall  |     MODIFY(1) Frech  |     NOOP(2) Christey, Northcutt',
      solDesc: 'Excellent scanner for total malware + virus removal',
      solSoft: 'McAfee',
    },
    {
      // _id: '2',
      name: 'SQL Injection',
      slug: 'SQL Injection',
      category: 'Cyber',
      image: '/images/p3.jpg',
      rating: 4.0,
      numReviews: 10,
      description:
        'n SQL injection is a type of cyber attack in which a hacker uses a piece of SQL (Structured Query Language) code to manipulate a database and gain access to potentially valuable information.',
      CVEcomments: '',
      CVEdescription:
        'SQL injection vulnerability in uye_giris_islem.asp in Metyus Okul Yonetim Sistemi 1.0 allows remote attackers to execute arbitrary SQL commands via the (1) kullanici_ismi and (2) sifre parameters.',
      CVEname: 'CVE-2006-6298',
      CVEphase: 'Assigned (20061205)',
      CVEreference:
        'BID:21418   |   URL:http://www.securityfocus.com/bid/21418   |   BUGTRAQ:20061202 Metyus Okul Y&ouml;netim Sistemi V.1.0 (tr) Sql injection Vuln.   |   URL:http://www.securityfocus.com/archive/1/453419/100/0/threaded   |   SREASON:1971   |   URL:http://securityreason.com/securityalert/1971   |   XF:moys-uyegirisislem-sql-injection(30705)   |   URL:https://exchange.xforce.ibmcloud.com/vulnerabilities/30705',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        'Best free malware removal software (with free security protections)',
      solSoft: 'Avira',
    },
    {
      // _id: '3',
      name: 'Heap Buffer',
      slug: 'Heap Buffer',
      category: 'Buffer Overflow',
      image: '/images/p6.jpg',
      rating: 4.5,
      numReviews: 14,
      description:
        'A heap overflow condition is a buffer overflow, where the buffer that can be overwritten is allocated in the heap portion of memory, generally meaning that the buffer was allocated using a routine such as malloc().',
      CVEcomments: '',
      CVEdescription:
        'Heap-based buffer overflow in FRISK Software F-Prot Antivirus before 4.6.7 allows user-assisted remote attackers to execute arbitrary code via a crafted CHM file. NOTE: this issue has at least a partial overlap with CVE-2006-6294.',
      CVEname: 'CVE-2006-6293',
      CVEphase: 'Assigned (20061205)',
      CVEreference:
        'BID:21086   |   URL:http://www.securityfocus.com/bid/21086   |   BUGTRAQ:20061204 F-Prot Antivirus for Unix: heap overflow and Denial of Service   |   URL:http://www.securityfocus.com/archive/1/453475/100/0/threaded   |   CONFIRM:http://www.f-prot.com/news/gen_news/061201_release_unix467.html   |   EXPLOIT-DB:2893   |   URL:https://www.exploit-db.com/exploits/2893   |   FULLDISC:20061204 F-Prot Antivirus for Unix: heap overflow and Denial of Service   |   URL:http://lists.grok.org.uk/pipermail/full-disclosure/2006-December/051096.html   |   GENTOO:GLSA-200612-12   |   URL:http://security.gentoo.org/glsa/glsa-200612-12.xml   |   MISC:http://gleg.net/fprot.txt   |   MISC:http://gleg.net/vulndisco_meta.shtml   |   OSVDB:30406   |   URL:http://www.osvdb.org/30406   |   SECTRACK:1017331   |   URL:http://securitytracker.com/id?1017331   |   SECUNIA:22879   |   URL:http://secunia.com/advisories/22879   |   SECUNIA:23328   |   URL:http://secunia.com/advisories/23328   |   VUPEN:ADV-2006-4830   |   URL:http://www.vupen.com/english/advisories/2006/4830',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        'We propose an efﬁcient solution against heap buffer overﬂows that integrates exploit detection, defense generation, and overﬂow prevention in a single system',
      solSoft: 'HeapTherapy',
    },
    {
      // _id: '4',
      name: 'Stolen Data',
      slug: 'Stolen',
      category: 'Data Breach',
      image: '/images/p5.jpg',
      rating: 4.5,
      numReviews: 14,
      description:
        'A data breach is a security violation, in which sensitive, protected or confidential data is copied, transmitted, viewed, stolen or used by an individual unauthorized to do so. Other terms are unintentional information disclosure, data leak, information leakage, and data spill.',
      CVEcomments: '',
      CVEdescription:
        'Credant Mobile Guardian Shield for Windows 5.2.1.105 and earlier stores account names and passwords in plaintext in memory, which allows local users to obtain sensitive information by (1) reading the paging file or (2) dumping and searching the memory image.  NOTE: This issue crosses privilege boundaries because the product is intended to protect the data on a stolen computer.',
      CVEname: 'CVE-2007-2883',
      CVEphase: 'Assigned (20070529)',
      CVEreference:
        'BID:24139   |   URL:http://www.securityfocus.com/bid/24139   |   BUGTRAQ:20070524 Vulnerability in Credant Mobile Guardian Shield for Windows   |   URL:http://www.securityfocus.com/archive/1/469486/100/0/threaded   |   CERT-VN:VU#821865   |   URL:http://www.kb.cert.org/vuls/id/821865   |   OSVDB:36524   |   URL:http://osvdb.org/36524   |   SECUNIA:25410   |   URL:http://secunia.com/advisories/25410   |   SREASON:2753   |   URL:http://securityreason.com/securityalert/2753   |   XF:mobileguardianshield-paging-info-disclosure(34487)   |   URL:https://exchange.xforce.ibmcloud.com/vulnerabilities/34487',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        'Ransomware Prevention Kit with Secure Backup is your last line of Defense',
      solSoft: 'Ransomware Recovery',
    },
    {
      // _id: '5',
      name: 'System Crash',
      slug: 'Crash',
      category: 'Crash',
      image: '/images/p7.jpg',
      rating: 4.5,
      numReviews: 14,
      description:
        'In computing, a crash, or system crash, occurs when a computer program such as a software application or an operating system stops functioning properly and exits.',
      CVEcomments: '',
      CVEdescription:
        'MadWifi, when Ad-Hoc mode is used, allows remote attackers to cause a denial of service (system crash) via unspecified vectors that lead to a kernel panic in the ieee80211_input function, related to "packets coming from a malicious WinXP system."',
      CVEname: 'CVE-2006-7177',
      CVEphase: 'Assigned (20070329)',
      CVEreference:
        'BID:23433   |   URL:http://www.securityfocus.com/bid/23433   |   BUGTRAQ:20070423 FLEA-2007-0012-1: madwifi   |   URL:http://www.securityfocus.com/archive/1/466689/30/6900/threaded   |   MANDRIVA:MDKSA-2007:082   |   URL:http://www.mandriva.com/security/advisories?name=MDKSA-2007:082   |   MISC:http://madwifi.org/ticket/880   |   SECUNIA:24841   |   URL:http://secunia.com/advisories/24841   |   SECUNIA:25861   |   URL:http://secunia.com/advisories/25861   |   SECUNIA:26083   |   URL:http://secunia.com/advisories/26083   |   SUSE:SUSE-SR:2007:014   |   URL:http://www.novell.com/linux/security/advisories/2007_14_sr.html   |   UBUNTU:USN-479-1   |   URL:http://www.ubuntu.com/usn/usn-479-1',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        '"Editors Choice" Removes all Viruses, Malware & Adware. AV-Test Top Product Award 2022. Built-in Internet Security.',
      solSoft: 'TotalAV',
    },
    {
      // _id: '6',
      name: 'Denial of Service Attack',
      slug: 'Denial of Service Attack',
      category: 'DDoS',
      image: '/images/p2.jpg',
      rating: 4.5,
      numReviews: 14,
      description:
        'A Denial-of-Service (DoS) attack is an attack meant to shut down a machine or network, making it inaccessible to its intended users. DoS attacks accomplish this by flooding the target with traffic, or sending it information that triggers a crash.',
      CVEcomments: '',
      CVEdescription:
        'ieee80211_input.c in MadWifi before 0.9.3 does not properly process Channel Switch Announcement Information Elements (CSA IEs), which allows remote attackers to cause a denial of service (loss of communication) via a Channel Switch Count less than or equal to one, triggering a channel change.',
      CVEname: 'CVE-2006-7179',
      CVEphase: 'Assigned (20070329)',
      CVEreference:
        'BID:23436   |   URL:http://www.securityfocus.com/bid/23436   |   BUGTRAQ:20070423 FLEA-2007-0012-1: madwifi   |   URL:http://www.securityfocus.com/archive/1/466689/30/6900/threaded   |   CONFIRM:http://madwifi.org/ticket/963   |   CONFIRM:http://madwifi.org/wiki/Releases/0.9.3   |   GENTOO:GLSA-200704-15   |   URL:http://security.gentoo.org/glsa/glsa-200704-15.xml   |   MANDRIVA:MDKSA-2007:082   |   URL:http://www.mandriva.com/security/advisories?name=MDKSA-2007:082   |   MISC:http://dev.lintrack.org/ticket/101   |   OSVDB:34645   |   URL:http://www.osvdb.org/34645   |   SECUNIA:24670   |   URL:http://secunia.com/advisories/24670   |   SECUNIA:24841   |   URL:http://secunia.com/advisories/24841   |   SECUNIA:24931   |   URL:http://secunia.com/advisories/24931   |   SECUNIA:25861   |   URL:http://secunia.com/advisories/25861   |   SECUNIA:26083   |   URL:http://secunia.com/advisories/26083   |   SUSE:SUSE-SR:2007:014   |   URL:http://www.novell.com/linux/security/advisories/2007_14_sr.html   |   UBUNTU:USN-479-1   |   URL:http://www.ubuntu.com/usn/usn-479-1   |   VUPEN:ADV-2007-1187   |   URL:http://www.vupen.com/english/advisories/2007/1187',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        'DDoS Attack is a tool that can be used to perform a Distributed Denial of Service attack. This application can monitor the event log from numerous sources to find and detect DDoS activities.',
      solSoft: 'DDoS Attack',
    },
    {
      // _id: '7',
      name: 'Virus',
      slug: 'Virus',
      category: 'Virus',
      image: '/images/p4.jpg',
      rating: 4.5,
      numReviews: 14,
      description:
        'A computer virus is a type of computer program that, when executed, replicates itself by modifying other computer programs and inserting its own code. If this replication succeeds, the affected areas are then said to be "infected" with a computer virus, a metaphor derived from biological viruses.',
      CVEcomments: '',
      CVEdescription:
        'Kaspersky Anti-Virus 6.0 and Internet Security 6.0 exposes unsafe methods in the (a) AXKLPROD60Lib.KAV60Info (AxKLProd60.dll) and (b) AXKLSYSINFOLib.SysInfo (AxKLSysInfo.dll) ActiveX controls, which allows remote attackers to "download" or delete arbitrary files via crafted arguments to the (1) DeleteFile, (2) StartBatchUploading, (3) StartStrBatchUploading, or (4) StartUploading methods.',
      CVEname: 'CVE-2007-1112',
      CVEphase: 'Assigned (20070226)',
      CVEreference:
        'BID:23345   |   URL:http://www.securityfocus.com/bid/23345   |   BUGTRAQ:20070405 ZDI-07-014: Kaspersky Anti-Virus ActiveX Control Unsafe Method Exposure Vulnerablity   |   URL:http://www.securityfocus.com/archive/1/464882/100/0/threaded   |   CONFIRM:http://www.kaspersky.com/technews?id=203038694   |   MISC:http://www.zerodayinitiative.com/advisories/ZDI-07-014.html   |   SECTRACK:1017884   |   URL:http://www.securitytracker.com/id?1017884   |   SECTRACK:1017885   |   URL:http://www.securitytracker.com/id?1017885   |   SECUNIA:24778   |   URL:http://secunia.com/advisories/24778   |   VUPEN:ADV-2007-1268   |   URL:http://www.vupen.com/english/advisories/2007/1268   |   XF:kaspersky-startuploading-info-disclosure(33464)   |   URL:https://exchange.xforce.ibmcloud.com/vulnerabilities/33464',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        'Security for your device against online threats. Get our first year offer. Multiple functions in one solution. Includes Antivirus, Firewall and Password Manager.',
      solSoft: 'Norton',
    },
    {
      // _id: '7',
      name: 'Remote Hackers',
      slug: 'Hackers',
      category: 'Hackers',
      image: '/images/p6.jpg',
      rating: 4.5,
      numReviews: 14,
      description:
        'Remote hackers use online scanning tools to find unsecured RDP endpoints. They then use stolen credentials to exploit such ports, access the network, and lock systems or data that they then use as leverage for ransom payments.',
      CVEcomments: '',
      CVEdescription:
        'Multiple stack-based buffer overflows in Microsoft Visual Basic 6 allow user-assisted remote attackers to cause a denial of service (CPU consumption) or execute arbitrary code via a Visual Basic Project (vbp) file with a long (1) Description or (2) Company Name (VersionCompanyName) field.',
      CVEname: 'CVE-2007-2884',
      CVEphase: 'Assigned (20070529)',
      CVEreference:
        'BID:24128   |   URL:http://www.securityfocus.com/bid/24128   |   BID:24129   |   URL:http://www.securityfocus.com/bid/24129   |   EXPLOIT-DB:3976   |   URL:https://www.exploit-db.com/exploits/3976   |   EXPLOIT-DB:3977   |   URL:https://www.exploit-db.com/exploits/3977   |   OSVDB:41052   |   URL:http://osvdb.org/41052   |   OSVDB:41053   |   URL:http://osvdb.org/41053   |   XF:vb-companyname-bo(34476)   |   URL:https://exchange.xforce.ibmcloud.com/vulnerabilities/34476   |   XF:vb-projectdetail-bo(34475)   |   URL:https://exchange.xforce.ibmcloud.com/vulnerabilities/34475',
      CVEstatus: 'Candidate',
      CVEvotes: 'None (candidate not yet proposed)',
      solDesc:
        'Fantastic Windows antivirus. Quick setup and simple to use. High protection level.',
      solSoft: 'PC Protect',
    },
  ],
};
export default data;
