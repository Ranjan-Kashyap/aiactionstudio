export const SHIP_STATE_LABELS = {
  1: "An old sailing ship at night: rowers below deck, crew pulling ropes, the captain running between departments instead of steering.",
  2: "A helicopter hovers over the deck, a ladder drops between the wheel and the mast, and two of our team stand on board marking problems in each department.",
  3: "Each department gets a system and an engine is installed.",
  4: "Engine on at sunrise: sails furled, propeller turning, the captain steering.",
  5: "Calm morning sea: the ship runs itself while the captain steers and a care-plan crew checks the engine.",
} as const;

export type ShipState = 1 | 2 | 3 | 4 | 5;

export const homePrimaryBtn =
  "inline-flex items-center justify-center rounded-full bg-mint px-7 py-4 text-[16px] font-medium text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export const homePrimaryBtnSm =
  "inline-flex items-center justify-center rounded-full bg-mint px-[26px] py-3.5 text-[15px] font-medium text-navy transition hover:brightness-110 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export const homeSecondaryOnDark =
  "inline-flex items-center justify-center rounded-full border border-[#94a3b8] px-7 py-4 text-[16px] font-medium text-white transition hover:border-mint hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export const homeSecondaryOnDarkSm =
  "inline-flex items-center justify-center rounded-full border border-[#94a3b8] px-[26px] py-3.5 text-[15px] font-medium text-white transition hover:border-mint hover:text-mint focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export const homeSecondaryOnLight =
  "inline-flex items-center justify-center rounded-full border border-navy px-[26px] py-3.5 text-[15px] font-medium text-navy transition hover:bg-navy hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mint";

export const problemCards = [
  {
    title: "Your business outgrew spreadsheets",
    body: "Orders, stock and approvals tracked by hand across sheets.",
    href: "/services/workflow-automation",
    cta: "Workflow automation",
  },
  {
    title: "Data typed into five tools by hand",
    body: "The same customer entered in CRM, accounts and email.",
    href: "/services/integrations",
    cta: "API integrations",
  },
  {
    title: "Leads waiting hours for a reply",
    body: "Enquiries arrive at night and on weekends, and go cold.",
    href: "/services/ai-agents",
    cta: "AI agents & chatbots",
  },
  {
    title: "Invoices and onboarding done manually",
    body: "Approvals, reminders and new-hire paperwork by email.",
    href: "/services/finance-hr-automation",
    cta: "Finance & HR automation",
  },
];

export const whatWeDoPhases = [
  {
    n: "01",
    title: "Consult",
    body: "Map one process, find what to automate, get a fixed quote.",
    href: "/services/ai-consulting",
  },
  {
    n: "02",
    title: "Enable",
    body: "Claude for Business set-up, team training, and a skills and SOP library.",
    href: "/services/ai-training",
  },
  {
    n: "03",
    title: "Build",
    body: "Systems built in weekly stages, with a demo every week.",
    href: "/services/workflow-automation",
  },
  {
    n: "04",
    title: "Run",
    body: "Monitoring, fixes and a monthly review on a care plan.",
    href: "/services/care-plans",
  },
];

export const systemsWeBuild = [
  {
    title: "Sales & lead follow-up",
    tags: "CRM · Email / WhatsApp · AI agent",
    href: "/services/whatsapp-automation",
  },
  {
    title: "Operations & orders",
    tags: "Web app · Database · Integrations",
    href: "/services/custom-software",
  },
  {
    title: "HR & team",
    tags: "Hiring · Onboarding · Leave · Reports",
    href: "/services/workflow-automation",
  },
  {
    title: "Finance automation",
    tags: "Your accounting software · Document AI",
    href: "/services/finance-hr-automation",
  },
  {
    title: "AI agents",
    tags: "Phone · Website chat · WhatsApp",
    href: "/services/ai-agents",
  },
  {
    title: "Integrations",
    tags: "APIs · Zapier · Make · n8n",
    href: "/services/integrations",
  },
];

export const processSteps = [
  {
    n: "01",
    title: "Free 30-minute systems audit",
    body: "We map one manual process and show what can be automated.",
  },
  {
    n: "02",
    title: "Paid blueprint",
    body: "Process map, system design and a fixed quote, credited to the build.",
  },
  {
    n: "03",
    title: "Build in weekly stages",
    body: "A working demo every week until it is right.",
  },
  {
    n: "04",
    title: "Care plan",
    body: "Monitoring, fixes, small changes and a monthly review.",
  },
];

export const whyUsCards = [
  {
    question: "“We paid a vendor before and it failed.”",
    answer:
      "Small fixed-price start, weekly demos, and we maintain it after launch.",
  },
  {
    question: "“Is our data safe?”",
    answer:
      "Built in your own accounts, least-privilege access, NDA, documentation you keep.",
  },
  {
    question: "“My team won’t use new software.”",
    answer:
      "We build around how they already work, often with chat as the front end.",
  },
  {
    question: "“Could we just use Zapier?”",
    answer:
      "For simple steps, yes, and we will tell you. We build when it needs logic, AI or an app.",
  },
];

export const carePlanPoints = [
  "Monitoring and alerts on every workflow",
  "Fixes, and a set number of small changes each month",
  "Monthly review call",
  "Access and security reviews",
  "Documentation kept up to date",
];

export const founderTrackCards = [
  {
    title: "ScaleRise",
    body: "Ran ScaleRise, a data analytics and performance marketing agency, working inside client businesses every day.",
  },
  {
    title: "What we kept seeing",
    body: "The same problems in every client business: spreadsheets, data retyped between tools, slow follow-up. That is why AI Action Studio exists.",
  },
  {
    title: "Live walkthroughs",
    body: "First case studies in progress. Ask for a live demo of a system like yours.",
  },
];

export const glanceRows = [
  {
    label: "What we are",
    value:
      "An AI systems agency: we build and maintain automations, AI agents, internal tools and integrations.",
  },
  {
    label: "Who we work with",
    value: "Growing businesses with roughly 10 to 500 people.",
  },
  {
    label: "Where",
    value: "Remote, with clients in the US, UK, Canada, Australia and India.",
  },
  {
    label: "How projects work",
    value: "Free audit → paid blueprint → weekly build → monthly care plan.",
  },
];

export const learnAiCards = [
  {
    href: "/tutorials",
    title: "Tutorials",
    body: "Step-by-step guides for using AI at work.",
  },
  {
    href: "/tools",
    title: "AI Tools",
    body: "Including the free Automation ROI Calculator.",
  },
  {
    href: "/prompts",
    title: "Prompts",
    body: "Ready-to-use prompts for everyday business tasks.",
  },
  {
    href: "/blog",
    title: "Blog & comparisons",
    body: "Honest tool comparisons with a business angle.",
  },
];

export const homeFaqs = [
  {
    question: "What does an AI automation agency do?",
    answer:
      "We find the manual, repetitive work in your business and replace it with AI agents, automations, integrations or custom tools, then maintain them so they keep working.",
  },
  {
    question: "What are AI agents for business?",
    answer:
      "Software that can answer customers, qualify leads, book appointments, process documents or update your systems on its own, within rules you set. Ours connect to your existing tools.",
  },
  {
    question: "Do I need custom software, or will Zapier do?",
    answer:
      "For simple steps, a no-code tool is often enough, and we'll tell you. We build custom when the process needs logic, AI, a proper app or more reliability.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Every project starts with a free audit, then a fixed-price blueprint and a fixed quote for the build. Ongoing care is a monthly plan sized to the system.",
  },
  {
    question: "Where are your clients based?",
    answer:
      "We work remotely with growing businesses in the US, UK, Canada, Australia and India, across time zones.",
  },
  {
    question: "How do I choose an AI automation agency?",
    answer:
      "Look for an agency that starts with your process rather than a tool, gives a fixed price before building, shows working progress every week, documents everything in your own accounts, and offers ongoing maintenance. Ask how they handle data access and what happens when something breaks.",
  },
  {
    question: "AI automation agency or freelancer: which is better?",
    answer:
      "A freelancer can be a good fit for a single, simple automation. An agency is usually better when several tools, people and processes are involved, or when the system needs to be maintained and improved over time.",
  },
  {
    question: "How long does it take to build an AI agent or automation?",
    answer:
      "A focused automation or AI agent often takes two to four weeks from blueprint to launch; larger custom software takes longer. We confirm the timeline in the fixed-price blueprint.",
  },
  {
    question: "Is my data safe with an AI automation agency?",
    answer:
      "We use least-privilege access, sign NDAs on request, build inside your own accounts where possible, and only send data to AI models where it is needed and allowed.",
  },
];
