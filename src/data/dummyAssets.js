const dummyAssets = [
  {
    key: 1,
    name: "Dell Latitude 5501",
    type: "Laptop",
    status: "Good",
    location: "Head Office",
    assignedTo: "John Doe",
    license: "Windows 10 Pro",
    purchaseDate: "2021-06-15",
    warrantyExpiry: "2023-06-15",
    vendor: "Dell",
    cost: 15000000,
    serialNumber: "DL5501-001",
    notes: "For administrative use",
    maintenanceHistory: [
      { date: '2023-05-01', description: 'Battery replacement' },
      { date: '2023-07-15', description: 'Screen calibration' },
    ],
    documentation: [
      { title: 'User Manual', link: 'https://example.com/manual.pdf' },
      { title: 'Warranty Document', link: 'https://example.com/warranty.pdf' },
    ],
  },
  {
    key: 2,
    name: "HP EliteBook 850",
    type: "Laptop",
    status: "Good",
    location: "Branch Office 1",
    assignedTo: "Jane Smith",
    license: "Windows 10 Pro",
    purchaseDate: "2021-04-10",
    warrantyExpiry: "2023-04-10",
    vendor: "HP",
    cost: 16000000,
    serialNumber: "HP850-002",
    notes: "For managerial use",
  },
  {
    key: 3,
    name: "Samsung SyncMaster 24",
    type: "Monitor",
    status: "Good",
    location: "Head Office",
    assignedTo: "John Doe",
    license: null,
    purchaseDate: "2020-10-05",
    warrantyExpiry: "2022-10-05",
    vendor: "Samsung",
    cost: 4000000,
    serialNumber: "SSM24-003",
    notes: "Main monitor",
  },
  {
    key: 4,
    name: "Canon iR-ADV C5030",
    type: "Printer",
    status: "Needs Repair",
    location: "Branch Office 2",
    assignedTo: null,
    license: null,
    purchaseDate: "2019-08-20",
    warrantyExpiry: "2022-08-20",
    vendor: "Canon",
    cost: 12000000,
    serialNumber: "CN5030-004",
    notes: "High-volume printer",
  },
  {
    key: 5,
    name: "Cisco Meraki MX64",
    type: "Router",
    status: "Good",
    location: "Data Center",
    assignedTo: "IT Department",
    license: "Meraki Enterprise",
    purchaseDate: "2020-03-15",
    warrantyExpiry: "2023-03-15",
    vendor: "Cisco",
    cost: 8000000,
    serialNumber: "MX64-005",
    notes: "Core network router",
  },
  {
    key: 6,
    name: "Apple iMac 27",
    type: "Desktop",
    status: "Good",
    location: "Head Office",
    assignedTo: "Sara Connor",
    license: "macOS Big Sur",
    purchaseDate: "2021-01-10",
    warrantyExpiry: "2023-01-10",
    vendor: "Apple",
    cost: 35000000,
    serialNumber: "IM27-006",
    notes: "Design team's desktop",
  },
  {
    key: 7,
    name: "Lenovo ThinkPad X1 Carbon",
    type: "Laptop",
    status: "Good",
    location: "Branch Office 3",
    assignedTo: "Mike Johnson",
    license: "Windows 10 Pro",
    purchaseDate: "2022-05-12",
    warrantyExpiry: "2024-05-12",
    vendor: "Lenovo",
    cost: 18000000,
    serialNumber: "TPX1C-007",
    notes: "For senior management",
  },
  {
    key: 8,
    name: "Dell PowerEdge R740",
    type: "Server",
    status: "Good",
    location: "Data Center",
    assignedTo: "IT Department",
    license: "Windows Server 2019",
    purchaseDate: "2019-11-25",
    warrantyExpiry: "2022-11-25",
    vendor: "Dell",
    cost: 60000000,
    serialNumber: "PER740-008",
    notes: "Main application server",
  },
  {
    key: 9,
    name: "Samsung Galaxy Tab S7",
    type: "Tablet",
    status: "Good",
    location: "Head Office",
    assignedTo: "Marketing Team",
    license: "Android 11",
    purchaseDate: "2021-09-17",
    warrantyExpiry: "2023-09-17",
    vendor: "Samsung",
    cost: 12000000,
    serialNumber: "GTS7-009",
    notes: "For client presentations",
  },
  {
    key: 10,
    name: "Microsoft Surface Pro 7",
    type: "Tablet",
    status: "Good",
    location: "Branch Office 1",
    assignedTo: "Sales Team",
    license: "Windows 10 Pro",
    purchaseDate: "2021-07-21",
    warrantyExpiry: "2023-07-21",
    vendor: "Microsoft",
    cost: 15000000,
    serialNumber: "SP7-010",
    notes: "For remote work",
  },
  {
    key: 11,
    name: "Asus ROG Zephyrus",
    type: "Laptop",
    status: "Good",
    location: "Branch Office 2",
    assignedTo: "Gaming Team",
    license: "Windows 10 Pro",
    purchaseDate: "2020-12-01",
    warrantyExpiry: "2023-12-01",
    vendor: "Asus",
    cost: 25000000,
    serialNumber: "ROGZ-011",
    notes: "High-performance gaming laptop",
  },
  {
    key: 12,
    name: "HP LaserJet Pro MFP M428fdw",
    type: "Printer",
    status: "Good",
    location: "Head Office",
    assignedTo: "Admin Department",
    license: null,
    purchaseDate: "2021-04-05",
    warrantyExpiry: "2023-04-05",
    vendor: "HP",
    cost: 7000000,
    serialNumber: "LJM428-012",
    notes: "Office all-in-one printer",
  },
  {
    key: 13,
    name: "Brother HL-L2395DW",
    type: "Printer",
    status: "Good",
    location: "Branch Office 3",
    assignedTo: "HR Department",
    license: null,
    purchaseDate: "2020-11-23",
    warrantyExpiry: "2022-11-23",
    vendor: "Brother",
    cost: 6000000,
    serialNumber: "HLL2395-013",
    notes: "Compact monochrome printer",
  },
  {
    key: 14,
    name: "Cisco Aironet 2802E",
    type: "Access Point",
    status: "Good",
    location: "Data Center",
    assignedTo: "IT Department",
    license: "Meraki Enterprise",
    purchaseDate: "2019-09-30",
    warrantyExpiry: "2022-09-30",
    vendor: "Cisco",
    cost: 9000000,
    serialNumber: "CA2802E-014",
    notes: "High-density Wi-Fi access point",
  },
  {
    key: 15,
    name: "LG UltraFine 5K",
    type: "Monitor",
    status: "Good",
    location: "Head Office",
    assignedTo: "Design Team",
    license: null,
    purchaseDate: "2021-03-11",
    warrantyExpiry: "2023-03-11",
    vendor: "LG",
    cost: 15000000,
    serialNumber: "UF5K-015",
    notes: "High-resolution monitor for design work",
  },
  {
    key: 16,
    name: "HP ProDesk 600 G6",
    type: "Desktop",
    status: "Good",
    location: "Branch Office 1",
    assignedTo: "Finance Team",
    license: "Windows 10 Pro",
    purchaseDate: "2021-02-14",
    warrantyExpiry: "2023-02-14",
    vendor: "HP",
    cost: 12000000,
    serialNumber: "PD600G6-016",
    notes: "Finance team desktop",
  },
  {
    key: 17,
    name: "Apple MacBook Pro 16",
    type: "Laptop",
    status: "Good",
    location: "Head Office",
    assignedTo: "Creative Director",
    license: "macOS Monterey",
    purchaseDate: "2021-08-19",
    warrantyExpiry: "2023-08-19",
    vendor: "Apple",
    cost: 45000000,
    serialNumber: "MBP16-017",
    notes: "For high-end creative work",
  },
  {
    key: 18,
    name: "Dell XPS 13",
    type: "Laptop",
    status: "Good",
    location: "Branch Office 2",
    assignedTo: "Project Manager",
    license: "Windows 10 Pro",
    purchaseDate: "2020-10-07",
    warrantyExpiry: "2022-10-07",
    vendor: "Dell",
    cost: 18000000,
    serialNumber: "XPS13-018",
    notes: "Project management laptop",
  },
  {
    key: 19,
    name: "Synology DiskStation DS920+",
    type: "NAS",
    status: "Good",
    location: "Data Center",
    assignedTo: "IT Department",
    license: "Synology DSM",
    purchaseDate: "2020-06-13",
    warrantyExpiry: "2023-06-13",
    vendor: "Synology",
    cost: 12000000,
    serialNumber: "DS920-019",
    notes: "Network-attached storage for backups",
  },
  {
    key: 20,
    name: "Sony Alpha 7 III",
    type: "Camera",
    status: "Good",
    location: "Head Office",
    assignedTo: "Marketing Team",
    license: null,
    purchaseDate: "2021-11-02",
    warrantyExpiry: "2023-11-02",
    vendor: "Sony",
    cost: 30000000,
    serialNumber: "A7III-020",
    notes: "Camera for content creation",
  },
  {
    key: 21,
    name: "Samsung Galaxy S21",
    type: "Smartphone",
    status: "Good",
    location: "Branch Office 1",
    assignedTo: "Sales Team",
    license: "Android 12",
    purchaseDate: "2022-02-08",
    warrantyExpiry: "2024-02-08",
    vendor: "Samsung",
    cost: 14000000,
    serialNumber: "GS21-021",
    notes: "Smartphone for remote work",
  },
  {
    key: 22,
    name: "Apple iPad Pro 11",
    type: "Tablet",
    status: "Good",
    location: "Branch Office 3",
    assignedTo: "Design Team",
    license: "iPadOS",
    purchaseDate: "2021-05-15",
    warrantyExpiry: "2023-05-15",
    vendor: "Apple",
    cost: 16000000,
    serialNumber: "IPADP11-022",
    notes: "Tablet for design and illustration",
  },
  {
    key: 23,
    name: "Netgear Nighthawk X10",
    type: "Router",
    status: "Good",
    location: "Data Center",
    assignedTo: "IT Department",
    license: null,
    purchaseDate: "2019-08-03",
    warrantyExpiry: "2022-08-03",
    vendor: "Netgear",
    cost: 8000000,
    serialNumber: "NMX10-023",
    notes: "High-speed router for internal network",
  },
  {
    key: 24,
    name: "Canon EOS R5",
    type: "Camera",
    status: "Good",
    location: "Head Office",
    assignedTo: "Media Team",
    license: null,
    purchaseDate: "2021-07-29",
    warrantyExpiry: "2023-07-29",
    vendor: "Canon",
    cost: 50000000,
    serialNumber: "EOSR5-024",
    notes: "High-end camera for media production",
  },
  {
    key: 25,
    name: "Lenovo ThinkPad P1",
    type: "Laptop",
    status: "Good",
    location: "Branch Office 2",
    assignedTo: "Engineering Team",
    license: "Windows 10 Pro",
    purchaseDate: "2021-12-11",
    warrantyExpiry: "2023-12-11",
    vendor: "Lenovo",
    cost: 24000000,
    serialNumber: "TPP1-025",
    notes: "Workstation laptop for engineering",
  },
  {
    key: 26,
    name: "Bose QuietComfort 35 II",
    type: "Headphones",
    status: "Good",
    location: "Head Office",
    assignedTo: "IT Department",
    license: null,
    purchaseDate: "2021-03-08",
    warrantyExpiry: "2023-03-08",
    vendor: "Bose",
    cost: 5000000,
    serialNumber: "QC35II-026",
    notes: "Noise-cancelling headphones for focus work",
  },
  {
    key: 27,
    name: "Logitech MX Master 3",
    type: "Mouse",
    status: "Good",
    location: "Head Office",
    assignedTo: "Admin Department",
    license: null,
    purchaseDate: "2020-09-10",
    warrantyExpiry: "2022-09-10",
    vendor: "Logitech",
    cost: 1500000,
    serialNumber: "MXM3-027",
    notes: "Ergonomic mouse for long-term use",
  },
  {
    key: 28,
    name: "Microsoft Surface Studio 2",
    type: "Desktop",
    status: "Good",
    location: "Head Office",
    assignedTo: "Creative Team",
    license: "Windows 10 Pro",
    purchaseDate: "2021-02-24",
    warrantyExpiry: "2023-02-24",
    vendor: "Microsoft",
    cost: 60000000,
    serialNumber: "SS2-028",
    notes: "All-in-one desktop for creative projects",
  },
  {
    key: 29,
    name: "Epson EcoTank L3150",
    type: "Printer",
    status: "Good",
    location: "Branch Office 1",
    assignedTo: "HR Department",
    license: null,
    purchaseDate: "2020-06-18",
    warrantyExpiry: "2023-06-18",
    vendor: "Epson",
    cost: 4000000,
    serialNumber: "ETL3150-029",
    notes: "Eco-friendly printer with refillable ink tanks",
  },
  {
    key: 30,
    name: "Asus ZenBook Flip",
    type: "Laptop",
    status: "Good",
    location: "Branch Office 3",
    assignedTo: "Sales Team",
    license: "Windows 10 Pro",
    purchaseDate: "2021-10-22",
    warrantyExpiry: "2023-10-22",
    vendor: "Asus",
    cost: 18000000,
    serialNumber: "ZBF-030",
    notes: "Convertible laptop for flexible use",
  },
  {
    key: 31,
    name: "Synology RackStation RS820+",
    type: "NAS",
    status: "Good",
    location: "Data Center",
    assignedTo: "IT Department",
    license: "Synology DSM",
    purchaseDate: "2020-04-27",
    warrantyExpiry: "2023-04-27",
    vendor: "Synology",
    cost: 15000000,
    serialNumber: "RS820-031",
    notes: "Network-attached storage for large file storage",
  },
  {
    key: 32,
    name: "HP EliteDisplay E243",
    type: "Monitor",
    status: "Good",
    location: "Branch Office 1",
    assignedTo: "Finance Team",
    license: null,
    purchaseDate: "2021-07-01",
    warrantyExpiry: "2023-07-01",
    vendor: "HP",
    cost: 5000000,
    serialNumber: "E243-032",
    notes: "Full HD monitor for everyday office use",
  },
  {
    key: 33,
    name: "Apple Mac Mini",
    type: "Desktop",
    status: "Good",
    location: "Head Office",
    assignedTo: "Support Team",
    license: "macOS Big Sur",
    purchaseDate: "2021-11-17",
    warrantyExpiry: "2023-11-17",
    vendor: "Apple",
    cost: 20000000,
    serialNumber: "MM2021-033",
    notes: "Compact desktop for support tasks",
  },
  {
    key: 34,
    name: "Samsung Odyssey G7",
    type: "Monitor",
    status: "Good",
    location: "Head Office",
    assignedTo: "Gaming Team",
    license: null,
    purchaseDate: "2022-03-12",
    warrantyExpiry: "2024-03-12",
    vendor: "Samsung",
    cost: 12000000,
    serialNumber: "G7-034",
    notes: "Curved gaming monitor",
  },
  {
    key: 35,
    name: "Google Pixel 6",
    type: "Smartphone",
    status: "Good",
    location: "Branch Office 2",
    assignedTo: "IT Department",
    license: "Android 12",
    purchaseDate: "2022-01-14",
    warrantyExpiry: "2024-01-14",
    vendor: "Google",
    cost: 10000000,
    serialNumber: "PIXEL6-035",
    notes: "For testing and development",
  },
];

export default dummyAssets;
