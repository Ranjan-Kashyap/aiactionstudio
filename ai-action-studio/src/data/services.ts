export type ServiceSection = {
  heading: string;
  body: string;
};

export type ServiceStep = {
  step: string;
  title: string;
  body: string;
};

export type ServiceFaq = {
  question: string;
  answer: string;
};

export type ServicePhase = "Consult" | "Enable" | "Build" | "Run";

export type ServiceItem = {
  slug: string;
  href: string;
  phase: ServicePhase;
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
  pains: string[];
  sections: ServiceSection[];
  note?: string;
  howItWorks: ServiceStep[];
  typicalTools: string[];
  afterLaunch: string;
  faqs: ServiceFaq[];
  relatedSlugs: string[];
};

const SERVICE_LAST_UPDATED = "November 26, 2026";

// TODO(Ranjan): if you approve showing typical price ranges in FAQ answers, add them here; until then, no numbers.
const COST_FAQ: ServiceFaq = {
  question: "How much does it cost?",
  answer:
    "It depends on the process and the tools involved. Every project starts with a free audit, then a fixed-price blueprint with a fixed quote for the build, and an optional monthly care plan.",
};

const OWNERSHIP_FAQ: ServiceFaq = {
  question: "Who owns the system and data?",
  answer:
    "You do. We build inside your company accounts where possible, use least-privilege access, sign NDAs on request, and hand over full documentation.",
};

export const HOW_WE_WORK_STEPS: ServiceStep[] = [
  {
    step: "01",
    title: "Free 30-minute systems audit",
    body: "We map one manual process and show what can be automated, and what shouldn't be.",
  },
  {
    step: "02",
    title: "Paid blueprint",
    body: "Process map, system design, fixed quote, credited to the build.",
  },
  {
    step: "03",
    title: "Build in weekly stages with demos",
    body: "You see working progress every week, not a big reveal at the end.",
  },
  {
    step: "04",
    title: "Care plan",
    body: "Monitoring, fixes, small changes and a monthly review so it keeps running as you grow.",
  },
];

export const SERVICE_PHASES: {
  phase: ServicePhase;
  title: string;
  summary: string;
  defaultHref: string;
}[] = [
  {
    phase: "Consult",
    title: "Consult",
    summary:
      "Start with one manual process or a full AI readiness audit before you spend on software.",
    defaultHref: "/services/ai-consulting",
  },
  {
    phase: "Enable",
    title: "Enable",
    summary:
      "Set up Claude for Business, build a company skills and SOP library, and train your team on their real work.",
    defaultHref: "/services/ai-training",
  },
  {
    phase: "Build",
    title: "Build",
    summary:
      "Replace manual spreadsheets and copy-paste with workflow automations, AI agents, custom apps and integrations.",
    defaultHref: "/services/workflow-automation",
  },
  {
    phase: "Run",
    title: "Run",
    summary:
      "Keep every automation, agent and integration monitored, fixed, documented and updated after launch.",
    defaultHref: "/services/care-plans",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    slug: "ai-consulting",
    href: "/services/ai-consulting",
    phase: "Consult",
    navLabel: "AI Consulting & Audit",
    cardTitle: "AI Consulting & Readiness Audit",
    // TODO(SEO): validate draft primary keyword "ai consulting for small business"
    primaryKeyword: "ai consulting for small business",
    shortDescription:
      "Find out where AI and automation will actually save hours, what to leave alone, and how to roll it out safely.",
    hubBullets: [
      "free 30-minute systems audit",
      "AI Readiness Audit across processes, tools, data and risk",
      "fixed-price Blueprint credited to the build",
    ],
    title: "AI Consulting & Readiness Audit",
    fullTitle: "AI Consulting & Readiness Audit | AI Action Studio",
    metaDescription:
      "AI consulting for small business: start with one manual process or a full AI readiness audit and get a clear, fixed-price blueprint before you build.",
    eyebrow: "Consult · AI consulting",
    h1: "AI consulting that starts with one process, not a slide deck",
    intro:
      "You don't need a 60-page strategy deck. We look at how work actually moves through your business, tell you honestly where AI or simple automation helps, and map a clear blueprint you can build from.",
    quickAnswer:
      "AI consulting for small and growing businesses starts with mapping your real processes, tools, data and risks. AI Action Studio offers a free 30-minute systems audit, a full AI Readiness Audit, and a fixed-price Blueprint whose fee is credited to the build.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Everyone says use AI, but where?",
      "We bought tools nobody uses.",
      "No idea what's safe to put into ChatGPT.",
    ],
    sections: [
      {
        heading: "Free systems audit (one process mapped)",
        body: "A focused 30-minute call where we map one manual process end to end and give you a plain recommendation, whether or not you work with us.",
      },
      {
        heading: "AI Readiness Audit",
        body: "A structured review covering your processes, tools, data, people and security risk so you know what to fix first and what to avoid.",
      },
      {
        heading: "Paid Blueprint (credited to the build)",
        body: "A process map, system design, prioritised roadmap and fixed quote for the build. If you go ahead with the build, the blueprint fee is credited in full.",
      },
      {
        heading: "Start yourself in 3 minutes",
        body: "Not ready for a call yet? Take our free 10-question AI Readiness Scorecard at /ai-score to see where your business stands today.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Take the AI Score or book a free audit",
        body: "Answer 10 quick questions online or book a 30-minute call to walk through one bottleneck.",
      },
      {
        step: "02",
        title: "Review your current tools and workflows",
        body: "We trace where data enters, where people retype it, and where approvals or follow-ups stall.",
      },
      {
        step: "03",
        title: "Design the simplest reliable system",
        body: "We separate what needs a rule-based automation, what needs AI, and what should stay human.",
      },
      {
        step: "04",
        title: "Fixed-price Blueprint & quote",
        body: "You get a written blueprint and fixed build quote that is yours to keep, credited if we build it.",
      },
    ],
    typicalTools: [
      "Process mapping",
      "Claude",
      "ChatGPT",
      "Google Workspace",
      "Microsoft 365",
      "Zapier",
      "Make",
      "n8n",
    ],
    afterLaunch:
      "Once your blueprint turns into a live system, our AI Care Plans keep it monitored, fixed and updated every month so your team never goes back to manual work.",
    faqs: [
      {
        question: "What happens in the free 30-minute systems audit?",
        answer:
          "You pick one process that wastes time every week. We trace the steps with you on the call and tell you the simplest way to fix it, even if that's an off-the-shelf tool.",
      },
      {
        question: "What is the difference between the Readiness Audit and the Blueprint?",
        answer:
          "The AI Readiness Audit looks across your whole business (processes, tools, data, people and risk). The Blueprint zooms in on the specific system to build, with exact architecture and a fixed build quote.",
      },
      {
        question: "Is the Blueprint fee really credited to the build?",
        answer:
          "Yes. When you proceed with the build, 100% of the paid blueprint fee is credited towards the build price.",
      },
      {
        question: "Can we take the Blueprint and build it in-house?",
        answer:
          "Yes. The process map, system design and roadmap are yours to keep and use however you choose.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["ai-training", "workflow-automation", "ai-agents"],
  },
  {
    slug: "ai-training",
    href: "/services/ai-training",
    phase: "Enable",
    navLabel: "AI Training & Claude",
    cardTitle: "AI Training & Claude for Business",
    // TODO(SEO): validate draft primary keyword "ai training for business"
    primaryKeyword: "ai training for business",
    shortDescription:
      "Set up Claude for Business, turn your best people's know-how into reusable AI skills and SOPs, and train your team on real tasks.",
    hubBullets: [
      "Claude for Business workspace setup",
      "company skills and SOP library",
      "role-based team training & AI usage policy",
    ],
    title: "AI Training & Claude for Business",
    fullTitle: "AI Training & Claude for Business | AI Action Studio",
    metaDescription:
      "AI training for business and Claude for Business setup: build a reusable company skills and SOP library and train your team safely on real daily work.",
    eyebrow: "Enable · AI training",
    h1: "Teach your team to use AI safely, on your real work",
    intro:
      "Generic prompt workshops are forgotten by Monday. We set up your business AI workspace, turn how your best people work into reusable AI skills and SOPs, and train your team on the tasks they actually do every week.",
    quickAnswer:
      "AI training for business works best when it is built around your own SOPs and daily tasks rather than generic demos. AI Action Studio sets up Claude for Business workspaces, builds a reusable company skills and SOP library, writes an AI data policy, and runs role-based sessions on your real work.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Staff use AI randomly, with no rules.",
      "When someone leaves, their know-how leaves with them.",
      "People paste sensitive client or financial data into personal AI accounts.",
    ],
    sections: [
      {
        heading: "Claude for Business setup",
        body: "Workspace configuration, projects, role-based permissions and shared context so your team works in company-owned accounts rather than personal logins.",
      },
      {
        heading: "Company skills and SOP library",
        body: "Turn how your best people work into reusable AI skills and written SOPs, so knowledge stays when people leave and new hires ramp up faster.",
      },
      {
        heading: "Role-based team training on your real tasks",
        body: "Hands-on sessions for sales, operations, finance, HR and support using your actual documents, templates and workflows.",
      },
      {
        heading: "An AI usage and data policy",
        body: "A clear, one-page policy on what data can and cannot go into AI tools, which tools are approved, and how outputs must be checked.",
      },
    ],
    note: "We train on your work, not generic demos.",
    howItWorks: [
      {
        step: "01",
        title: "Audit how your team works today",
        body: "We interview key roles, collect real examples of recurring tasks, and spot where undocumented know-how lives.",
      },
      {
        step: "02",
        title: "Set up workspace, policy & permissions",
        body: "We configure your business AI workspace and put a simple, practical AI usage and data policy in place.",
      },
      {
        step: "03",
        title: "Build your company skills & SOP library",
        body: "We convert your top processes into tested project instructions, prompts and written SOPs.",
      },
      {
        step: "04",
        title: "Live training & follow-up check-in",
        body: "We train each group on their real tasks and review adoption two weeks later to refine the library.",
      },
    ],
    typicalTools: [
      "Claude for Business",
      "ChatGPT Team / Enterprise",
      "Google Workspace",
      "Microsoft 365",
      "Notion",
      "Internal SOPs",
    ],
    afterLaunch:
      "On a Care Plan, we keep your company skills and SOP library updated as processes change, onboard new team members, and review AI permissions every month.",
    faqs: [
      {
        question: "Why focus on a company skills and SOP library?",
        answer:
          "Because prompts alone don't fix undocumented processes. When you turn how your best people work into written SOPs and reusable AI projects, the whole team gets consistent results and know-how stays in the company.",
      },
      {
        question: "Do you only train on Claude?",
        answer:
          "We specialise in Claude for Business because its Projects and writing quality fit business SOPs well, but we also train teams that use ChatGPT Team or Gemini for Google Workspace.",
      },
      {
        question: "How do you keep our company data safe during training?",
        answer:
          "We configure company-owned business accounts where your data is not used to train public models, and we write a plain-English data policy for your staff.",
      },
      {
        question: "Are the sessions recorded for future hires?",
        answer:
          "Yes. Every session is recorded and paired with the written SOPs and skills library in your own workspace.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["ai-consulting", "workflow-automation", "care-plans"],
  },
  {
    slug: "workflow-automation",
    href: "/services/workflow-automation",
    phase: "Build",
    navLabel: "Workflow Automation",
    cardTitle: "Workflow Automation",
    primaryKeyword: "business process automation",
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
      "Business process automation services for growing teams: replace spreadsheets, manual data entry and email approvals with workflows that run themselves.",
    eyebrow: "Build · Workflow automation",
    h1: "Business process automation that replaces spreadsheets and chasing",
    intro:
      "If your team copies data between sheets, chases approvals on email or rebuilds the same report every week, that process can run itself. We map it, automate it and maintain it.",
    quickAnswer:
      "Business process automation replaces repetitive, rule-based work, such as copying data between spreadsheets, chasing approvals and sending reminders, with workflows that run on their own. AI Action Studio maps the process, automates it with the simplest reliable tools, and maintains it on a monthly care plan.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Your business outgrew Excel and Google Sheets.",
      "People copy the same data between three different tools every day.",
      "Approvals and handoffs stall in email threads or chat groups.",
      "Weekly reports take hours to assemble by hand.",
    ],
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
    howItWorks: [
      {
        step: "01",
        title: "Map the current process",
        body: "We trace every step, spreadsheet, approval and exception with the people who actually do the work.",
      },
      {
        step: "02",
        title: "Simplify before automating",
        body: "We remove unnecessary steps and agree on clear rules and human approval points in a fixed-price blueprint.",
      },
      {
        step: "03",
        title: "Build and test in weekly stages",
        body: "We connect your tools, add error alerts, and test with real data alongside your team.",
      },
      {
        step: "04",
        title: "Handover, docs & care plan",
        body: "Everything is documented in your accounts, and we monitor and maintain it on a monthly care plan.",
      },
    ],
    typicalTools: [
      "n8n",
      "Make",
      "Zapier",
      "Google Sheets",
      "Airtable",
      "Slack",
      "WhatsApp",
      "Email & webhooks",
    ],
    afterLaunch:
      "APIs change and edge cases appear as your volume grows. Our Care Plans include monitoring, instant failure alerts, fixes and monthly improvements so your workflows stay reliable.",
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
      OWNERSHIP_FAQ,
      COST_FAQ,
    ],
    relatedSlugs: ["finance-hr-automation", "integrations", "custom-software"],
  },
  {
    slug: "ai-agents",
    href: "/services/ai-agents",
    phase: "Build",
    navLabel: "AI Agents & Chatbots",
    cardTitle: "AI Agents & Chatbots",
    primaryKeyword: "ai agents for business",
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
      "AI agents for business: AI receptionists, website chat and WhatsApp agents that answer in seconds, qualify leads and book appointments into your CRM.",
    eyebrow: "Build · AI agents",
    h1: "AI agents for business that answer, qualify and book, 24/7",
    intro:
      "Missed calls and slow replies cost you customers. We build AI agents that handle the first conversation, collect the right details and hand over to your team, connected to the tools you already use.",
    quickAnswer:
      "AI agents for business are software assistants that answer calls and messages, qualify leads, book appointments and update your systems on their own, within rules you set. AI Action Studio designs, builds and maintains them for growing businesses, connected to the CRM, calendar and WhatsApp tools you already use.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Leads wait hours or until the next morning for a reply.",
      "Your team answers the same ten questions on phone, chat and WhatsApp all day.",
      "Enquiries get lost before anyone logs them in the CRM.",
      "Off-the-shelf chatbots sound robotic and can't check your real calendar or records.",
    ],
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
    howItWorks: [
      {
        step: "01",
        title: "Define the agent's job and boundaries",
        body: "We agree on the exact questions it answers, how it qualifies leads, and when it must hand over to a person.",
      },
      {
        step: "02",
        title: "Connect your knowledge, calendar & CRM",
        body: "We ground the agent in your approved FAQs and connect it to your booking tool and CRM.",
      },
      {
        step: "03",
        title: "Test with real conversations",
        body: "You review weekly demos and test edge cases before any customer talks to the agent.",
      },
      {
        step: "04",
        title: "Launch & review transcripts monthly",
        body: "We monitor conversation logs and tune responses on the care plan so accuracy keeps improving.",
      },
    ],
    typicalTools: [
      "Claude / OpenAI APIs",
      "WhatsApp Business API",
      "Voice AI",
      "HubSpot",
      "Zoho CRM",
      "Calendly / Cal.com",
      "Help desks",
    ],
    afterLaunch:
      "AI agents need ongoing transcript reviews and prompt tuning as customers ask new questions. On a Care Plan, we review logs, refine guardrails and monitor API usage every month.",
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
    slug: "custom-software",
    href: "/services/custom-software",
    phase: "Build",
    navLabel: "Custom Software & Internal Tools",
    cardTitle: "Custom Software & Internal Tools",
    primaryKeyword: "custom software development agency",
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
      "Custom software development agency for growing businesses: custom CRMs, order, inventory and HR apps and internal tools built around how your team works.",
    eyebrow: "Build · Custom software",
    h1: "Custom software development built around how your team works",
    intro:
      "Off-the-shelf software almost fits, so your team works around it with spreadsheets. We build the custom CRM, order system or internal tool that fits your process, and maintain it after launch.",
    quickAnswer:
      "Custom software development means building an app around your exact process instead of bending your team around an off-the-shelf tool. AI Action Studio builds custom CRMs, order, inventory and HR tools, delivers them in weekly stages, and maintains them after launch.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Off-the-shelf software forces your team back into side spreadsheets.",
      "Per-seat SaaS licences get expensive when your whole operations team needs access.",
      "Orders, stock, dispatch and approvals live in five separate places.",
      "You paid a developer before, got a half-finished app, and had nobody to maintain it.",
    ],
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
    howItWorks: [
      {
        step: "01",
        title: "Free audit & fixed-price Blueprint",
        body: "We map user roles, screens, data model and integrations before writing code, with a fixed quote.",
      },
      {
        step: "02",
        title: "Weekly working demos",
        body: "You click through real, working software every week and give feedback early.",
      },
      {
        step: "03",
        title: "Connect to your existing tools",
        body: "We wire the app into your accounting, WhatsApp, email and existing databases.",
      },
      {
        step: "04",
        title: "Launch in your accounts & maintain",
        body: "Deployed in your cloud accounts with documentation, backups and a monthly care plan.",
      },
    ],
    typicalTools: [
      "Next.js / React",
      "TypeScript",
      "PostgreSQL / Supabase",
      "Role-based auth",
      "WhatsApp & Email APIs",
      "Cloudflare / AWS",
    ],
    afterLaunch:
      "Software is never 'done' once real staff use it daily. Our Care Plans cover hosting monitoring, security updates, bug fixes and a monthly allowance for new features.",
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
      {
        question: "Will my staff actually use it?",
        answer:
          "We design screens around how your team already works, keep forms simple, and often connect WhatsApp or email so field staff don't have to learn a complicated interface.",
      },
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "integrations", "finance-hr-automation"],
  },
  {
    slug: "finance-hr-automation",
    href: "/services/finance-hr-automation",
    phase: "Build",
    navLabel: "Finance & HR Automation",
    cardTitle: "Finance & HR Automation",
    primaryKeyword: "accounts payable automation",
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
      "Accounts payable automation, invoice processing, receivables reminders, payroll inputs and employee onboarding connected to QuickBooks, Xero, Zoho or Tally.",
    eyebrow: "Build · Finance & HR automation",
    h1: "Accounts payable automation, invoice processing and HR workflows",
    intro:
      "Finance and HR admin is repetitive, rule-based and error-prone: perfect for automation. We automate the steps, keep humans on the approvals and connect everything to your accounting and HR tools.",
    quickAnswer:
      "Accounts payable automation captures invoices from email, extracts the data, routes it for approval and syncs it to your accounting software, with a human approving every payment. AI Action Studio also automates receivables reminders, payroll inputs and employee onboarding.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Supplier invoices arrive by email and someone types every line into accounting by hand.",
      "Approvals for bills, expenses and leave get buried in inbox threads.",
      "Overdue invoices aren't chased consistently because nobody has time.",
      "New hire onboarding means chasing documents and logins across five people.",
    ],
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
    howItWorks: [
      {
        step: "01",
        title: "Audit your invoice and HR flows",
        body: "We review your invoice formats, approval rules, chart of accounts and onboarding steps.",
      },
      {
        step: "02",
        title: "Set extraction & approval rules",
        body: "We configure document AI extraction with strict validation rules and mandatory human sign-off.",
      },
      {
        step: "03",
        title: "Sync with your accounting & HR tools",
        body: "Approved entries flow straight into QuickBooks, Xero, Zoho Books, Tally or your payroll sheet.",
      },
      {
        step: "04",
        title: "Monitor exceptions on a Care Plan",
        body: "Unusual invoices flag a human immediately, and we tune extraction rules as new suppliers appear.",
      },
    ],
    typicalTools: [
      "QuickBooks",
      "Xero",
      "Zoho Books",
      "Tally",
      "Document AI",
      "Google Workspace",
      "Slack / WhatsApp approvals",
    ],
    afterLaunch:
      "Supplier invoice formats and tax rules change over time. On a Care Plan, we monitor extraction accuracy, update connectors and keep audit logs clean.",
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
      OWNERSHIP_FAQ,
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "integrations", "custom-software"],
  },
  {
    slug: "integrations",
    href: "/services/integrations",
    phase: "Build",
    navLabel: "Integrations",
    cardTitle: "Integrations",
    primaryKeyword: "api integration services",
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
      "API integration services and Zapier, Make and n8n builds that connect your CRM, ERP, accounting and HR tools so your team enters data once.",
    eyebrow: "Build · Integrations",
    h1: "API integration services that connect the tools you already pay for",
    intro:
      "Your tools don't talk to each other, so people do the talking, by copy-paste. We connect them so data is entered once and flows everywhere it's needed.",
    quickAnswer:
      "API integration connects the tools your business already pays for, such as your CRM, ERP, accounting and HR systems, so data is entered once and flows everywhere. AI Action Studio builds integrations with Zapier, Make, n8n or custom code, and monitors them so failures are caught early.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Sales closes a deal in the CRM, and someone retypes it into accounting and project tools.",
      "Customer records don't match across your CRM, billing and support inbox.",
      "Your existing Zapier or Make scenarios fail silently and nobody knows how they were built.",
    ],
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
    howItWorks: [
      {
        step: "01",
        title: "Map systems and source of truth",
        body: "We define which tool owns each field so records never overwrite each other by accident.",
      },
      {
        step: "02",
        title: "Choose no-code or custom API code",
        body: "We pick Zapier, Make, n8n or a custom webhook worker based on volume, cost and reliability.",
      },
      {
        step: "03",
        title: "Build with retries, logging & alerts",
        body: "Every integration includes duplicate checks, error logging and instant failure alerts.",
      },
      {
        step: "04",
        title: "Document & monitor on a Care Plan",
        body: "We document every data mapping and monitor third-party API changes after launch.",
      },
    ],
    typicalTools: [
      "REST & GraphQL APIs",
      "Webhooks",
      "n8n",
      "Make",
      "Zapier",
      "HubSpot / Salesforce / Zoho",
      "QuickBooks / Xero / Tally",
      "Shopify / ERP",
    ],
    afterLaunch:
      "Third-party APIs deprecate endpoints and tokens expire. With an AI Care Plan, we monitor every sync and fix integration errors, usually before your team notices.",
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
      OWNERSHIP_FAQ,
      COST_FAQ,
    ],
    relatedSlugs: ["workflow-automation", "ai-agents", "custom-software"],
  },
  {
    slug: "whatsapp-automation",
    href: "/services/whatsapp-automation",
    phase: "Build",
    navLabel: "WhatsApp Automation",
    cardTitle: "WhatsApp Automation",
    primaryKeyword: "whatsapp automation",
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
    eyebrow: "Build · WhatsApp automation",
    h1: "WhatsApp automation for growing businesses",
    intro:
      "Your customers are on WhatsApp, and so are your orders, enquiries and follow-ups. We automate the replies, capture every lead and connect WhatsApp to your CRM and accounting system.",
    quickAnswer:
      "WhatsApp automation uses the official WhatsApp Business API to send instant replies, follow-ups and order updates, and to log every chat in your CRM. AI Action Studio sets it up compliantly, including CRM and accounting integration.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Enquiries sit unread on a single salesperson's phone.",
      "Follow-ups depend on memory and chats never make it into your CRM.",
      "Team members spend hours sending the same order, payment and appointment updates by hand.",
    ],
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
    howItWorks: [
      {
        step: "01",
        title: "Verify official WhatsApp Business API",
        body: "We help you set up an official WhatsApp Business API number and approved message templates.",
      },
      {
        step: "02",
        title: "Design conversation & handover flows",
        body: "We map instant replies, lead qualification questions and smooth handover to human staff.",
      },
      {
        step: "03",
        title: "Connect to your CRM & accounting",
        body: "Every lead, order update and payment reminder syncs with your CRM or accounting records.",
      },
      {
        step: "04",
        title: "Maintain templates & flows",
        body: "We monitor delivery rates, template approvals and webhook health on a monthly care plan.",
      },
    ],
    typicalTools: [
      "WhatsApp Business API",
      "HubSpot / Zoho / Custom CRM",
      "QuickBooks / Xero / Tally",
      "n8n / Make",
      "AI Chat Agents",
    ],
    afterLaunch:
      "WhatsApp template rules and CRM fields evolve. On a Care Plan, we monitor message delivery, add new templates and keep your CRM sync healthy.",
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
      OWNERSHIP_FAQ,
      COST_FAQ,
    ],
    relatedSlugs: ["ai-agents", "integrations", "custom-software"],
  },
  {
    slug: "care-plans",
    href: "/services/care-plans",
    phase: "Run",
    navLabel: "AI Care Plans",
    cardTitle: "AI Care Plans",
    // TODO(SEO): validate draft primary keyword "managed ai services"
    primaryKeyword: "managed ai services",
    shortDescription:
      "Ongoing monitoring, fixes, small monthly changes and regular reviews so the systems we build keep running.",
    hubBullets: [
      "monitoring, alerts and fixes",
      "set number of small changes each month",
      "monthly review call & transparent API usage",
    ],
    title: "AI Care Plans: Monitoring & Maintenance",
    fullTitle: "AI Care Plans: Monitoring & Maintenance | AI Action Studio",
    metaDescription:
      "Managed AI services and monthly care plans: proactive monitoring, fixes, monthly improvements, security reviews and up-to-date documentation for your AI systems.",
    eyebrow: "Run · AI care plans",
    h1: "We build it, then we keep it running",
    intro:
      "APIs change, prompts drift, and your business evolves. Most automations fail months after launch because nobody owns them. Our monthly Care Plans keep your systems monitored, fixed, documented and improving.",
    quickAnswer:
      "Managed AI services and Care Plans keep your automations, AI agents and custom tools working after launch. AI Action Studio provides monitoring and alerts, bug fixes, a monthly allowance for small changes, access reviews, updated documentation, and transparent at-cost AI/API billing.",
    lastUpdated: SERVICE_LAST_UPDATED,
    pains: [
      "Our automation broke and nobody noticed.",
      "The freelancer who built it disappeared.",
      "We need a small tweak to our workflow, but have nobody to call.",
      "We have no visibility into what our AI and API usage actually costs.",
    ],
    sections: [
      {
        heading: "Monitoring, alerts and fixes",
        body: "Automated health checks and error alerts on your workflows, integrations and AI agents, so failures are caught and fixed fast.",
      },
      {
        heading: "Small changes included every month",
        body: "A set monthly allowance for prompt tweaks, new fields, template updates and workflow adjustments as your team's needs shift.",
      },
      {
        heading: "Monthly review call & security checks",
        body: "A regular review of system performance, conversation logs, access permissions and security hygiene.",
      },
      {
        heading: "Living documentation & transparent API costs",
        body: "Documentation kept up to date in your accounts, and AI/API usage costs billed at cost and shown transparently.",
      },
    ],
    howItWorks: [
      {
        step: "01",
        title: "Health & access baseline",
        body: "At launch (or takeover), we verify logging, failure alerts, backups and least-privilege access.",
      },
      {
        step: "02",
        title: "24/7 automated monitoring",
        body: "Failed runs, webhook timeouts or unusual AI outputs trigger alerts directly to our team.",
      },
      {
        step: "03",
        title: "Fixes & monthly change requests",
        body: "We fix breakages and ship your monthly small changes without a new project quote each time.",
      },
      {
        step: "04",
        title: "Monthly review & updated docs",
        body: "We review what ran, what it cost in API usage, what we improved, and update your runbooks.",
      },
    ],
    typicalTools: [
      "Error monitoring & alerts",
      "n8n / Make / Zapier logs",
      "AI transcript & cost logs",
      "Git & runbook documentation",
      "Role-based access audits",
    ],
    afterLaunch:
      "Every system we build is designed to move seamlessly onto an Essential, Growth or Partner Care Plan right after launch.",
    faqs: [
      {
        question: "Do we have to take a Care Plan?",
        answer:
          "No. You own everything we build in your accounts, with full documentation. Most clients choose a Care Plan so they don't have to monitor APIs, webhooks and AI prompts themselves.",
      },
      {
        question: "Can you take over a system built by someone else?",
        answer:
          "Often, yes. We start with a short audit of the existing automation or app, clean up any urgent reliability or security issues, document it, and then put it on a Care Plan.",
      },
      {
        question: "How are AI and third-party API costs handled?",
        answer:
          "Your tools and AI accounts remain in your own name and billing wherever possible, or are passed through at exact cost with full transparency.",
      },
      {
        question: "What if we need a large new feature?",
        answer:
          "Small tweaks are covered by your monthly included hours. Larger additions are scoped as a clear, fixed-price mini-build.",
      },
    ],
    relatedSlugs: ["workflow-automation", "ai-agents", "custom-software"],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export function getServicesByPhase(phase: ServicePhase): ServiceItem[] {
  return SERVICES.filter((s) => s.phase === phase);
}

export function getRelatedServices(slugs: string[]): ServiceItem[] {
  return slugs
    .map((slug) => getServiceBySlug(slug))
    .filter((s): s is ServiceItem => Boolean(s));
}
