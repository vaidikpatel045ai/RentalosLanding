export const nav = [
  { label: "Platform", href: "/#platform" },
  { label: "Features", href: "/features" },
  { label: "Operations", href: "/#operations" },
  { label: "Multi-Branch", href: "/#multi-branch" },
  { label: "About", href: "/#about" },
];

export const roles = [
  { code: "OWNER", label: "Owner" },
  { code: "MANAGER", label: "Manager" },
  { code: "SALES", label: "Sales" },
  { code: "STYLIST", label: "Stylist" },
  { code: "TAILOR", label: "Tailor" },
  { code: "CLEANER", label: "Cleaner" },
  { code: "DELIVERY", label: "Delivery" },
  { code: "CUSTOMER", label: "Customer" },
];

export const tailoringStages = [
  "Assigned",
  "Accepted",
  "In Progress",
  "Ready for Fitting",
  "Fitting Feedback",
  "Revision Required",
  "Completed",
];

export const cleaningStages = [
  "Received",
  "Inspection",
  "Cleaning",
  "Drying",
  "Finishing",
  "Quality Check",
  "Ready",
  "Completed",
];

export const cleaningAltOutcomes = ["Failed QC", "Re-clean"];

export const deliveryStages = ["Assigned", "Picked Up", "In Transit", "Delivered"];
export const deliveryAltOutcomes = ["Failed", "Rescheduled", "Returned"];

export const paymentStatuses = [
  { label: "Unpaid", tone: "unsafe" },
  { label: "Partially Paid", tone: "tight" },
  { label: "Paid", tone: "safe" },
  { label: "Overdue", tone: "unsafe" },
  { label: "Refunded", tone: "neutral" },
] as const;

export const journeySteps = [
  {
    step: "01",
    title: "Booking",
    copy: "A customer reserves a gown, and the availability engine checks the timeline before the date is confirmed.",
  },
  {
    step: "02",
    title: "Fitting",
    copy: "The team coordinates a fitting appointment on the shared calendar.",
  },
  {
    step: "03",
    title: "Tailoring",
    copy: "Measurements are attached to the alteration job automatically, from assignment to final fitting.",
  },
  {
    step: "04",
    title: "Preparation",
    copy: "Cleaning, drying, finishing and quality checks move through their own tracked workflow.",
  },
  {
    step: "05",
    title: "Pickup",
    copy: "A delivery or handover job is assigned and tracked to the door.",
  },
  {
    step: "06",
    title: "Return",
    copy: "The garment returns for inspection, condition scoring, and cleaning before it rests.",
  },
  {
    step: "07",
    title: "Available",
    copy: "Its status resets and the garment re-enters inventory, ready for its next booking.",
  },
];

export type TourTab = {
  id: string;
  label: string;
  eyebrow: string;
  headline: string;
  copy: string;
  capabilities: string[];
};

export const tourTabs: TourTab[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    eyebrow: "OWNER & MANAGER",
    headline: "Everything that needs attention, on one screen.",
    copy: "The command centre opens on today's appointments, pickups and returns, then layers in operational and financial signals underneath.",
    capabilities: [
      "Today's appointments, trials, pickups and returns",
      "Alterations due, cleaning due, and overdue returns",
      "Pending payments and deposits held",
      "Revenue chart across today, week, month and year",
      "At-risk panel surfacing TIGHT and UNSAFE bookings automatically",
    ],
  },
  {
    id: "inventory",
    label: "Inventory",
    eyebrow: "GARMENT CATALOG",
    headline: "Every gown, veil and accessory, individually tracked.",
    copy: "Each garment has its own record: SKU, category, photos, components, a generated QR code, and a full status history.",
    capabilities: [
      "Individual garment records with SKU and category",
      "Photo galleries stored in cloud storage",
      "Auto-generated QR code per garment profile",
      "Detailed lifecycle status, from available through cleaning and repair",
      "Append-only status history and archiving without data loss",
    ],
  },
  {
    id: "availability",
    label: "Availability",
    eyebrow: "SAFE / TIGHT / UNSAFE",
    headline: "Know before you promise a date.",
    copy: "Before a booking is confirmed, the engine checks cleaning and repair turnaround against the next scheduled rental.",
    capabilities: [
      "SAFE, TIGHT and UNSAFE turnaround classifications",
      "Configurable inspection, cleaning and quality-check buffers per branch",
      "Live conflict detection against existing bookings",
      "Serializable database transaction prevents double-booking",
    ],
  },
  {
    id: "bookings",
    label: "Bookings & CRM",
    eyebrow: "FROM INQUIRY TO FITTING",
    headline: "One record, from first call to final return.",
    copy: "A guided wizard connects the customer, garments, dates and payment terms, with live availability checks at every step.",
    capabilities: [
      "Multi-garment booking wizard with live availability checks",
      "Customer profiles with wedding date, venue and preferences",
      "Versioned customer measurements",
      "Rental fee, deposit and tax calculated automatically",
    ],
  },
  {
    id: "appointments",
    label: "Appointments",
    eyebrow: "CALENDAR",
    headline: "Every fitting and handover in one calendar.",
    copy: "A shared month view overlays appointments, pickups and returns so no date gets double-booked by accident.",
    capabilities: [
      "Month calendar with appointments, pickups and returns",
      "Branch filtering for multi-location teams",
      "Appointment types for trials, fittings and consultations",
    ],
  },
  {
    id: "tailoring",
    label: "Tailoring",
    eyebrow: "ALTERATIONS",
    headline: "Measurements travel with the job.",
    copy: "Each tailoring job carries a measurement snapshot from assignment through to the final fitting.",
    capabilities: [
      "Assigned → Accepted → In Progress → Ready for Fitting workflow",
      "Fitting feedback and revision-required loop",
      "Measurement snapshot attached automatically",
      "Priority and due-date tracking with overdue highlighting",
    ],
  },
  {
    id: "cleaning",
    label: "Cleaning",
    eyebrow: "GARMENT CARE",
    headline: "From received to ready, with quality checks that hold.",
    copy: "Cleaning jobs move through a ten-step workflow, with a re-clean loop when quality checks aren't met.",
    capabilities: [
      "Received → Inspection → Cleaning → Drying → Finishing → Quality Check",
      "Failed QC and re-clean handling",
      "Cleaner task queue with before/after photo upload",
    ],
  },
  {
    id: "delivery",
    label: "Delivery",
    eyebrow: "HANDOVER",
    headline: "Coordinated pickup and drop-off.",
    copy: "Delivery jobs track from assignment through to delivered, with failed, rescheduled and returned outcomes handled.",
    capabilities: [
      "Assigned → Picked Up → In Transit → Delivered",
      "Failed, rescheduled and returned outcomes",
      "Mobile-first task list with one-tap status advances",
    ],
  },
  {
    id: "reports",
    label: "Reports",
    eyebrow: "BUSINESS INTELLIGENCE",
    headline: "See which garments are earning their keep.",
    copy: "Owner-level reporting connects revenue, garment ROI and customer value into one view.",
    capabilities: [
      "Garment-level performance and ROI ranking",
      "Revenue by category",
      "Underperforming / dead-stock inventory panel",
      "Top customers by lifetime spend",
      "Cleaning, repair and alteration cost breakdown",
    ],
  },
  {
    id: "payments",
    label: "Payments",
    eyebrow: "TRACKING, NOT PROCESSING",
    headline: "Know what's paid, what's owed, and what's held.",
    copy: "Payment and deposit records are tracked against every booking, including refunds.",
    capabilities: [
      "Rental fee, deposit and refund records",
      "Unpaid, partially paid, paid, overdue and refunded status",
      "Deposit refund workflow",
      "Total collected and deposits-held summaries",
    ],
  },
  {
    id: "staff",
    label: "Staff & Branches",
    eyebrow: "MULTI-BRANCH",
    headline: "One business, scoped correctly by branch.",
    copy: "Staff, inventory and reporting stay scoped to the right branch, with owner-level visibility across all of them.",
    capabilities: [
      "Staff records with role, employee code and branch assignment",
      "Branch creation with currency, tax and locale settings",
      "Configurable buffer-hour settings that drive the availability engine",
      "Branch-level performance snapshots",
    ],
  },
  {
    id: "security",
    label: "Security & Audit",
    eyebrow: "ACCESS CONTROL",
    headline: "The right access for every role, enforced server-side.",
    copy: "Eight roles, permission-checked on every protected action — not just hidden in the interface.",
    capabilities: [
      "Eight-role permission system",
      "Hashed-password authentication with JWT sessions",
      "Server-side permission enforcement on every action",
      "Append-only audit log of who did what, and when",
    ],
  },
];

export type FeatureCategory = {
  id: string;
  title: string;
  features: string[];
};

export const featureDirectory: FeatureCategory[] = [
  {
    id: "inventory",
    title: "Inventory Management",
    features: [
      "Individual garment records with SKU and category",
      "Categories for gowns, reception dresses, bridesmaid and evening wear, abayas, veils, jewellery, shoes and accessories",
      "Garment photo galleries with cloud-backed storage",
      "Component and accessory details per garment",
      "Auto-generated QR code per garment profile",
    ],
  },
  {
    id: "lifecycle",
    title: "Garment Lifecycle",
    features: [
      "Detailed lifecycle status tracking, from available through fitting, alteration, cleaning, repair and return",
      "Append-only status history for every garment",
      "Archiving that preserves historical records",
      "Condition scoring and inspection reports on return",
      "Damage category tagging with photo evidence",
    ],
  },
  {
    id: "availability",
    title: "Availability & Scheduling",
    features: [
      "SAFE / TIGHT / UNSAFE turnaround classification",
      "Configurable inspection, cleaning and quality-check buffer hours per branch",
      "Live conflict detection against existing bookings",
      "Database-transaction-enforced double-booking prevention",
    ],
  },
  {
    id: "bookings",
    title: "Bookings & Customer CRM",
    features: [
      "Guided multi-garment booking wizard",
      "Live availability checks during booking",
      "Customer profiles with contact details, wedding date, venue and event type",
      "Style preferences and notes per customer",
      "Rental fee, deposit and tax calculation",
    ],
  },
  {
    id: "measurements",
    title: "Measurements & Fittings",
    features: [
      "Versioned customer measurement records",
      "Measurement snapshots attached automatically to tailoring jobs",
      "Fitting appointment coordination on the shared calendar",
    ],
  },
  {
    id: "tailoring",
    title: "Tailoring Operations",
    features: [
      "Assigned → Accepted → In Progress → Ready for Fitting → Fitting Feedback → Revision Required → Completed workflow",
      "Tailor task portal with mobile-first job queue",
      "Priority and due-date tracking with overdue highlighting",
      "Progress notes with photo attachments",
    ],
  },
  {
    id: "cleaning",
    title: "Cleaning Operations",
    features: [
      "Received → Inspection → Cleaning → Drying → Finishing → Quality Check → Ready → Completed workflow",
      "Failed QC and re-clean handling",
      "Cleaner task portal with before/after photo upload",
    ],
  },
  {
    id: "delivery",
    title: "Delivery Operations",
    features: [
      "Assigned → Picked Up → In Transit → Delivered workflow",
      "Failed, rescheduled and returned outcomes",
      "Delivery task portal with one-tap status updates",
    ],
  },
  {
    id: "owner-dashboard",
    title: "Owner Dashboard",
    features: [
      "Today's appointments, trials, pickups and returns",
      "Alterations due, cleaning due and overdue returns",
      "Pending payments and deposits held",
      "At-risk booking panel from the availability engine",
    ],
  },
  {
    id: "reporting",
    title: "Reporting & Business Intelligence",
    features: [
      "Garment-level performance and ROI ranking",
      "Revenue by category",
      "Underperforming / dead-stock inventory identification",
      "Top customers by lifetime spend",
      "Cleaning, repair and alteration cost breakdown",
    ],
  },
  {
    id: "payments",
    title: "Payments & Deposits",
    features: [
      "Rental fee, deposit and refund record tracking",
      "Unpaid, partially paid, paid, overdue and refunded status",
      "Deposit refund workflow",
    ],
  },
  {
    id: "staff",
    title: "Staff Management",
    features: [
      "Staff records with role, employee code and branch assignment",
      "Role-scoped navigation and permissions",
    ],
  },
  {
    id: "multi-branch",
    title: "Multi-Branch Management",
    features: [
      "Multiple branch management from one account",
      "Branch-specific currency, tax label and tax rate",
      "Branch-specific address and phone formats",
      "Branch-level buffer-hour configuration",
      "Inter-branch garment transfer requests with approval workflow",
      "Supplier directory per business",
    ],
  },
  {
    id: "security",
    title: "Access Control & Security",
    features: [
      "Eight-role permission system (Owner, Manager, Sales, Stylist, Tailor, Cleaner, Delivery, Customer)",
      "Hashed-password authentication with JWT sessions",
      "Server-side permission enforcement on every protected action",
      "Append-only audit log",
    ],
  },
  {
    id: "productivity",
    title: "Productivity & Navigation",
    features: [
      "Global command search across customers, garments and bookings",
      "Searchable lists with filters and pagination",
      "Role-aware navigation shell",
      "Responsive desktop, tablet and mobile layouts",
      "In-app notifications for assigned jobs and flagged charges",
    ],
  },
];

export const faqs = [
  {
    q: "What is Bridal Rental OS?",
    a: "Bridal Rental OS is a management platform built specifically for bridal and formalwear rental boutiques. It connects inventory, bookings, appointments, tailoring, cleaning, delivery, payments tracking and reporting into one system.",
  },
  {
    q: "Who is the platform designed for?",
    a: "It's designed for bridal boutique owners, managers and their teams — including sales staff, stylists, tailors, cleaners and delivery staff — running single-location or multi-branch rental operations.",
  },
  {
    q: "Can I manage multiple boutique branches?",
    a: "Yes. Each branch has its own staff, inventory, bookings and reporting, with its own currency, tax rate and buffer-hour settings, while owners keep a connected view across every location.",
  },
  {
    q: "Does the system check garment availability before confirming a booking?",
    a: "Yes. The availability engine checks cleaning and repair turnaround against the next scheduled rental and classifies the booking as SAFE, TIGHT or UNSAFE before it's confirmed. A database-level transaction check also prevents two bookings from being confirmed for the same garment and dates at once.",
  },
  {
    q: "Can my tailoring, cleaning and delivery staff use the platform?",
    a: "Yes. Tailors, cleaners and delivery staff each get a focused, mobile-first task view scoped to their own assigned jobs, with status updates and, for tailoring and cleaning, photo uploads.",
  },
  {
    q: "Can I configure the platform for different currencies and countries?",
    a: "Yes. Currency, tax label, tax rate, timezone and locale are all set per branch, and address and phone formats are generic rather than tied to one country — so a US branch is a configuration choice, not custom development.",
  },
  {
    q: "Does Bridal Rental OS support deposits and payment tracking?",
    a: "Yes. Rental fees, deposits and refunds are tracked with unpaid, partially paid, paid, overdue and refunded statuses. This is payment record-keeping, not integrated card payment processing.",
  },
  {
    q: "Can I see reports on garment performance and revenue?",
    a: "Yes. Owner-level reporting covers garment ROI, revenue by category, top customers, underperforming inventory, and a cost breakdown across cleaning, repair and alterations.",
  },
  {
    q: "How can I arrange a product demonstration?",
    a: "Use the “Book a Free Demo” form on this site. Tell us about your boutique and preferred time, and our team will follow up to schedule a walkthrough.",
  },
];

export const branchProcessOptions = [
  "Spreadsheets",
  "Paper-based records",
  "General business software",
  "Existing rental software",
  "Other",
];

export const branchCountOptions = ["1", "2–3", "4–10", "10+"];

export const demoTimeSlots = [
  "Morning (9am–12pm)",
  "Afternoon (12–4pm)",
  "Evening (4–7pm)",
];
