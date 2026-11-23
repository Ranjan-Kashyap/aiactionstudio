export type ServiceSection = {
  heading: string;
  body: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServiceItem = {
  slug: string;
  href: string;
  navLabel: string;
  cardTitle: string;
  primaryKeyword: string;
  shortDescription: string;
  hubBullets: string[];
  title: string;
  fullTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  intro: string;
  quickAnswer: string;
  lastUpdated: string;
  sections: ServiceSection[];
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

const SERVICE_LAST_UPDATED = "November 23, 2026";

// TODO(owner): if the owner approves showing typical price ranges, add them here; until then, no numbers.
const COST_FAQ: ServiceFaq = {
  question: "How much does it cost?",
  answer:
    "It depends on the process and the tools involved. Every project starts with a free audit, then a fixed-price blueprint with a fixed quote for the build, and an optional monthly care plan.",
};

export const SERVICES: ServiceItem[] = [
  {
    slug: "ai-agents",
    href: "/services/ai-agents",
    navLabel: "AI Agents",
    cardTitle: "AI Agents for Business",
    primaryKeyword: "AI agents for business",
    shortDescription:
      "AI receptionists, chat and WhatsApp agents that answer, qualify and book, 24/7.",
    hubBullets: [
      "AI receptionist and phone agent",
      "website and WhatsApp chat agents",
      "lead qualification and booking",
    ],
    title: "AI Agents for Business",
    fullTitle: "AI Agents for Business | AI Action Studio",
    metaDescription:
      "AI agents for business: AI receptionists, chat and WhatsApp agents that answer, qualify leads and book appointments, connected to your CRM.",
    eyebrow: "AI agents",
    h1: "AI agents for business that answer, qualify and book, 24/7",
    intro:
      "Missed calls and slow replies cost you customers. We build AI agents that handle the first conversation, collect the right details and hand over to your team, connected to the tools you already use.",
    quickAnswer:
      "AI agents for business are software assistants that answer calls and messages, qualify leads, book appointments and update your systems on their own, within rules you set. AI Action Studio designs, builds and maintains them for growing businesses, connected to the CRM, calendar and WhatsApp tools you already use.",
    lastUpdated: SERVICE_LAST_UPDATED,
    sections: [
      {
        heading: "AI receptionist and voice agents",
        body: "An AI phone receptionist that answers every call, answers common questions, books appointments and passes urgent calls to a person.",
      },
      {
        heading: "Chat and WhatsApp agents",
        body: "Website and WhatsApp agents that reply in seconds, qualify enquiries and log them in your CRM.",
      },
      {
        heading: "Agents that do work, not just talk",
        body: "Agents that process documents, update records, chase missing information and prepare drafts for review.",
      },
      {
        heading: "Safe by design",
        body: "Clear rules on what the agent can and can't do, human handover, conversation logs and regular reviews on the care plan.",
      },
    ],
    faqs: [
      {
        question: "Will an AI agent sound robotic?",
        answer:
          "We tune tone, scripts and handover rules with you, and test with real conversations before launch.",
      },
      {
        question: "What if the agent gets something wrong?",
        answer:
          "Agents work within rules you approve, hand over when unsure, and every conversation is logged so we can improve it.",
      },
      {
        question: "Which tools does it connect to?",
        answer:
          "Common CRMs, calendars, help desks and WhatsApp Business. If you use something else, we check it in the audit.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "integrations", "whatsapp-automation"],
  },
  {
    slug: "workflow-automation",
    href: "/services/workflow-automation",
    navLabel: "Workflow Automation",
    cardTitle: "Workflow Automation",
    primaryKeyword: "Business process automation",
    shortDescription:
      "Turn manual, spreadsheet-driven processes into automated workflows.",
    hubBullets: [
      "replace spreadsheets with workflows",
      "automate data entry",
      "approvals and reminders",
    ],
    title: "Business Process Automation Services",
    fullTitle: "Business Process Automation Services | AI Action Studio",
    metaDescription:
      "Business process automation for growing teams: replace spreadsheets, manual data entry and email approvals with workflows that run themselves.",
    eyebrow: "Workflow automation",
    h1: "Business process automation that replaces spreadsheets and chasing",
    intro:
      "If your team copies data between sheets, chases approvals on email or rebuilds the same report every week, that process can run itself. We map it, automate it and maintain it.",
    quickAnswer:
      "Business process automation replaces repetitive, rule-based work, such as copying data between spreadsheets, chasing approvals and sending reminders, with workflows that run on their own. AI Action Studio maps the process, automates it with the simplest reliable tools, and maintains it on a monthly care plan.",
    lastUpdated: SERVICE_LAST_UPDATED,
    sections: [
      {
        heading: "Automate repetitive tasks",
        body: "Data entry, reminders, status updates and handoffs between people and tools.",
      },
      {
        heading: "From Google Sheets to a real workflow",
        body: "Keep the sheet your team knows as the front end, or move to a simple app when you outgrow it. Either way the steps behind it run automatically.",
      },
      {
        heading: "Approvals, reminders and audit trails",
        body: "Every request routed to the right person, reminders sent automatically, and a record of who approved what.",
      },
      {
        heading: "Where AI helps",
        body: "Reading emails and documents, extracting data, drafting replies and summarising, always with checks.",
      },
    ],
    faqs: [
      {
        question: "Which processes are best to automate first?",
        answer:
          "Ones that happen weekly or more, follow clear rules and cost real hours. We rank them in the audit.",
      },
      {
        question: "Do we have to change our tools?",
        answer:
          "Usually not. We automate around the tools you already use.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["finance-hr-automation", "integrations", "custom-software"],
  },
  {
    slug: "custom-software",
    href: "/services/custom-software",
    navLabel: "Custom Software",
    cardTitle: "Custom Software & Internal Tools",
    primaryKeyword: "Custom software development",
    shortDescription:
      "Custom CRMs, order, inventory and HR apps built around your process.",
    hubBullets: [
      "custom CRM",
      "order and inventory apps",
      "internal dashboards for your team's daily work",
    ],
    title: "Custom Software Development Agency",
    fullTitle: "Custom Software Development Agency | AI Action Studio",
    metaDescription:
      "Custom software development for growing businesses: custom CRMs, order, inventory and HR apps and internal tools, built around your process.",
    eyebrow: "Custom software",
    h1: "Custom software development built around how your team works",
    intro:
      "Off-the-shelf software almost fits, so your team works around it with spreadsheets. We build the custom CRM, order system or internal tool that fits your process, and maintain it after launch.",
    quickAnswer:
      "Custom software development means building an app around your exact process instead of bending your team around an off-the-shelf tool. AI Action Studio builds custom CRMs, order, inventory and HR tools, delivers them in weekly stages, and maintains them after launch.",
    lastUpdated: SERVICE_LAST_UPDATED,
    sections: [
      {
        heading: "Custom CRM",
        body: "Your pipeline, stages and fields, connected to WhatsApp, email and your accounts.",
      },
      {
        heading: "Order, inventory and operations apps",
        body: "Orders, stock, dispatch and approvals in one place instead of five spreadsheets.",
      },
      {
        heading: "HR and team tools",
        body: "Hiring pipeline, onboarding checklists, leave and daily reports.",
      },
      {
        heading: "Built in visible stages",
        body: "Working software every week, documented, in your accounts, and maintained on a care plan.",
      },
    ],
    faqs: [
      {
        question: "Custom or off-the-shelf: how do we choose?",
        answer:
          "If a standard tool fits 90% of your process, use it and we'll integrate it. Build custom when the gaps cost real time or money.",
      },
      {
        question: "Who owns the software?",
        answer:
          "You do. It's built in your accounts and documented.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "integrations", "finance-hr-automation"],
  },
  {
    slug: "finance-hr-automation",
    href: "/services/finance-hr-automation",
    navLabel: "Finance & HR Automation",
    cardTitle: "Finance & HR Automation",
    primaryKeyword: "Accounts payable automation",
    shortDescription:
      "Invoices, payables, payroll steps and onboarding, automated and checked.",
    hubBullets: [
      "invoice capture and payables",
      "receivables reminders",
      "onboarding and leave workflows",
    ],
    title: "Accounts Payable & HR Automation",
    fullTitle: "Accounts Payable & HR Automation | AI Action Studio",
    metaDescription:
      "Automate accounts payable, invoice processing, receivables reminders, payroll steps and employee onboarding, connected to your accounting tools.",
    eyebrow: "Finance & HR automation",
    h1: "Accounts payable automation, invoice processing and HR workflows",
    intro:
      "Finance and HR admin is repetitive, rule-based and error-prone: perfect for automation. We automate the steps, keep humans on the approvals and connect everything to your accounting and HR tools.",
    quickAnswer:
      "Accounts payable automation captures invoices from email, extracts the data, routes it for approval and syncs it to your accounting software, with a human approving every payment. AI Action Studio also automates receivables reminders, payroll inputs and employee onboarding.",
    lastUpdated: SERVICE_LAST_UPDATED,
    sections: [
      {
        heading: "Accounts payable automation",
        body: "Invoices captured from email, data extracted, matched, routed for approval and synced to QuickBooks, Xero, Zoho Books or Tally.",
      },
      {
        heading: "Invoice processing and receivables",
        body: "Automatic invoice creation, payment reminders and status updates for your team.",
      },
      {
        heading: "HR automation",
        body: "Onboarding checklists, document collection, leave requests and payroll inputs, without email chains.",
      },
    ],
    faqs: [
      {
        question: "Is AI accurate enough for invoices?",
        answer:
          "AI extracts the data; rules and a human approval step catch exceptions before anything is paid.",
      },
      {
        question: "Which accounting tools do you support?",
        answer:
          "QuickBooks, Xero, Zoho Books and Tally are common. We confirm yours in the audit.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "integrations", "custom-software"],
  },
  {
    slug: "integrations",
    href: "/services/integrations",
    navLabel: "Integrations",
    cardTitle: "Integrations",
    primaryKeyword: "API integration services",
    shortDescription:
      "Connect the tools you already pay for so data is entered once.",
    hubBullets: [
      "CRM, ERP and accounting sync",
      "Zapier, Make and n8n builds",
      "custom API integrations",
    ],
    title: "API Integration Services",
    fullTitle: "API Integration Services | AI Action Studio",
    metaDescription:
      "API integration services and Zapier, Make and n8n builds that connect your CRM, ERP, accounting and HR tools so data is entered once.",
    eyebrow: "Integrations",
    h1: "API integration services that connect the tools you already pay for",
    intro:
      "Your tools don't talk to each other, so people do the talking, by copy-paste. We connect them so data is entered once and flows everywhere it's needed.",
    quickAnswer:
      "API integration connects the tools your business already pays for, such as your CRM, ERP, accounting and HR systems, so data is entered once and flows everywhere. AI Action Studio builds integrations with Zapier, Make, n8n or custom code, and monitors them so failures are caught early.",
    lastUpdated: SERVICE_LAST_UPDATED,
    sections: [
      {
        heading: "CRM and ERP integration",
        body: "Sync contacts, deals, orders and invoices between your CRM, ERP and accounting system.",
      },
      {
        heading: "Zapier, Make and n8n experts",
        body: "We build, fix and document no-code automations, and move them to custom code when they outgrow it.",
      },
      {
        heading: "Custom API integrations",
        body: "When there's no ready-made connector, we build and monitor one.",
      },
    ],
    faqs: [
      {
        question: "Zapier, Make or n8n: which should we use?",
        answer:
          "It depends on volume, budget and data rules. We recommend the simplest option that will stay reliable.",
      },
      {
        question: "Who fixes it when an integration breaks?",
        answer:
          "On a care plan, we monitor integrations and fix failures, usually before you notice.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "ai-agents", "custom-software"],
  },
  {
    slug: "whatsapp-automation",
    href: "/services/whatsapp-automation",
    navLabel: "WhatsApp Automation",
    cardTitle: "WhatsApp Automation",
    primaryKeyword: "WhatsApp automation",
    shortDescription:
      "WhatsApp lead capture, follow-ups and CRM sync for growing businesses.",
    hubBullets: [
      "lead capture",
      "automated follow-ups",
      "WhatsApp to CRM sync",
    ],
    title: "WhatsApp Automation for Business",
    fullTitle: "WhatsApp Automation for Business | AI Action Studio",
    metaDescription:
      "WhatsApp automation for growing businesses: lead capture, automated replies and follow-ups, CRM and accounting integration, built and maintained for you.",
    eyebrow: "WhatsApp automation",
    h1: "WhatsApp automation for growing businesses",
    intro:
      "Your customers are on WhatsApp, and so are your orders, enquiries and follow-ups. We automate the replies, capture every lead and connect WhatsApp to your CRM and accounting system.",
    quickAnswer:
      "WhatsApp automation uses the official WhatsApp Business API to send instant replies, follow-ups and order updates, and to log every chat in your CRM. AI Action Studio sets it up compliantly, including CRM and accounting integration.",
    lastUpdated: SERVICE_LAST_UPDATED,
    sections: [
      {
        heading: "Automated replies and follow-ups",
        body: "Instant replies, reminders and follow-up messages through the WhatsApp Business API.",
      },
      {
        heading: "WhatsApp CRM integration",
        body: "Every chat logged against the right customer, with the next step assigned to your team.",
      },
      {
        heading: "Order and payment updates",
        body: "Order confirmations, payment reminders and dispatch updates sent automatically from your CRM or accounting system, such as QuickBooks, Xero or Tally.",
      },
    ],
    faqs: [
      {
        question: "Is this allowed by WhatsApp?",
        answer:
          "Yes, when done through the official WhatsApp Business API with opt-in customers. We set it up the compliant way.",
      },
      {
        question: "Which countries do you work with?",
        answer:
          "We work remotely with businesses worldwide. WhatsApp automation works wherever the WhatsApp Business API is available.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["ai-agents", "integrations", "custom-software"],
  },
];

export const HOW_WE_WORK_STEPS = [
  {
    step: "01",
    title: "Free systems audit (30 minutes)",
    body: "We map one manual process and show what can be automated, and what shouldn't be.",
  },
  {
    step: "02",
    title: "Blueprint (fixed price)",
    body: "A process map, system design and fixed quote. The fee is credited to the build.",
  },
  {
    step: "03",
    title: "Build in weekly stages",
    body: "You see a working demo every week, not a big reveal at the end.",
  },
  {
    step: "04",
    title: "Care plan",
    body: "We monitor, fix and improve the system every month, so it keeps working as you grow.",
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceItem => Boolean(s));
}
