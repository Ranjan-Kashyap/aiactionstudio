export type CaseStudyResult = {
  value: string;
  unit: string;
  measuredHow: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  industry: string;
  country: string;
  teamSize: string;
  problem: string;
  systemBuilt: string;
  tools: string[];
  timeline: string;
  results: CaseStudyResult[];
  clientQuote?: string;
  clientName?: string;
  permissionToName: boolean;
  coverImage?: string;
  videoUrl?: string;
  publishedDate: string;
  draft?: boolean;
};

// TODO(Ranjan): add verified production case studies with permissionToName set appropriately.
export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "example-distributor-order-whatsapp-system",
    title: "Automated WhatsApp Order & Tally Sync for a B2B Distributor",
    industry: "Distributor",
    country: "India",
    teamSize: "25–45 people",
    problem:
      "Orders arrived all day via WhatsApp messages and voice notes. Three staff members manually typed orders into Excel and Tally, leading to delayed dispatches and missed payment reminders.",
    systemBuilt:
      "An official WhatsApp Business API intake workflow connected to an order dashboard and Tally integration, with human approval before invoice creation.",
    tools: ["WhatsApp Business API", "n8n", "Tally", "Next.js", "PostgreSQL"],
    timeline: "4 weeks from blueprint to launch",
    results: [
      {
        value: "Draft example",
        unit: "hours saved/week",
        measuredHow: "Compared manual order entry log before and after launch (draft test data)",
      },
    ],
    permissionToName: false,
    coverImage: "/images/aias-logo.png",
    publishedDate: "2026-11-26",
    draft: true,
  },
];

export function getPublishedCaseStudies(): CaseStudy[] {
  return CASE_STUDIES.filter((study) => !study.draft);
}

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return getPublishedCaseStudies().find((study) => study.slug === slug);
}

export function getDisplayClientLabel(study: CaseStudy): string {
  if (study.permissionToName && study.clientName) {
    return `${study.clientName} (${study.industry}, ${study.country})`;
  }
  return `${study.industry}, ${study.country}`;
}
