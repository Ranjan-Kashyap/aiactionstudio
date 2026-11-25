export type ScoreCategoryKey =
  | "systems_data"
  | "processes"
  | "people_ai"
  | "risk_security";

export type ScoreCategoryInfo = {
  key: ScoreCategoryKey;
  label: string;
  maxPoints: number;
};

export type ScoreOption = {
  label: string;
  points: 0 | 3 | 7 | 10;
};

export type ScoreQuestion = {
  id: number;
  category: ScoreCategoryKey;
  categoryLabel: string;
  question: string;
  options: [ScoreOption, ScoreOption, ScoreOption, ScoreOption];
};

export type ScoreBand = {
  min: number;
  max: number;
  name: "Manual-first" | "Getting started" | "Ready to automate" | "AI-ready";
  meaning: string;
};

export type ScoreRecommendation = {
  category: ScoreCategoryKey;
  categoryLabel: string;
  text: string;
  serviceHref: string;
  serviceLabel: string;
};

export const SCORE_CATEGORIES: Record<ScoreCategoryKey, ScoreCategoryInfo> = {
  systems_data: {
    key: "systems_data",
    label: "Systems & data",
    maxPoints: 20,
  },
  processes: {
    key: "processes",
    label: "Processes",
    maxPoints: 30,
  },
  people_ai: {
    key: "people_ai",
    label: "People & AI use",
    maxPoints: 30,
  },
  risk_security: {
    key: "risk_security",
    label: "Risk & security",
    maxPoints: 20,
  },
};

export const SCORE_CATEGORY_ORDER: ScoreCategoryKey[] = [
  "systems_data",
  "processes",
  "people_ai",
  "risk_security",
];

export const AI_SCORE_QUESTIONS: ScoreQuestion[] = [
  {
    id: 1,
    category: "systems_data",
    categoryLabel: "Systems & data",
    question: "Where does most of your day-to-day work live?",
    options: [
      { label: "Paper, calls and WhatsApp", points: 0 },
      { label: "Excel / Google Sheets", points: 3 },
      { label: "A few business tools that don't talk to each other", points: 7 },
      { label: "Connected tools that share data", points: 10 },
    ],
  },
  {
    id: 2,
    category: "systems_data",
    categoryLabel: "Systems & data",
    question: "How often does someone retype the same data into another tool?",
    options: [
      { label: "Every day", points: 0 },
      { label: "Every week", points: 3 },
      { label: "Rarely", points: 7 },
      { label: "Never: it's entered once", points: 10 },
    ],
  },
  {
    id: 3,
    category: "processes",
    categoryLabel: "Processes",
    question:
      "How many hours a week does your team spend on manual data entry, follow-ups and reports?",
    options: [
      { label: "20+ hours", points: 0 },
      { label: "10–20 hours", points: 3 },
      { label: "5–10 hours", points: 7 },
      { label: "Under 5 hours", points: 10 },
    ],
  },
  {
    id: 4,
    category: "people_ai",
    categoryLabel: "People & AI use",
    question: "If one key person was away for two weeks, would work keep going?",
    options: [
      { label: "It would stop", points: 0 },
      { label: "It would slow down a lot", points: 3 },
      { label: "Mostly fine", points: 7 },
      { label: "Fine: everything is documented", points: 10 },
    ],
  },
  {
    id: 5,
    category: "processes",
    categoryLabel: "Processes",
    question: "Are your key processes written down?",
    options: [
      { label: "No, it's all in people's heads", points: 0 },
      { label: "Bits and pieces in chats", points: 3 },
      { label: "Some written SOPs", points: 7 },
      { label: "Documented and up to date", points: 10 },
    ],
  },
  {
    id: 6,
    category: "people_ai",
    categoryLabel: "People & AI use",
    question:
      "How many of your team use AI tools (ChatGPT, Claude, Gemini) for work?",
    options: [
      { label: "Nobody", points: 0 },
      { label: "Just me", points: 3 },
      { label: "A few people", points: 7 },
      { label: "Most of the team, regularly", points: 10 },
    ],
  },
  {
    id: 7,
    category: "people_ai",
    categoryLabel: "People & AI use",
    question: "Which best describes how you use AI today?",
    options: [
      { label: "Not at all", points: 0 },
      { label: "Occasional questions", points: 3 },
      { label: "For specific tasks like writing or analysis", points: 7 },
      { label: "Built into our workflows and automations", points: 10 },
    ],
  },
  {
    id: 8,
    category: "risk_security",
    categoryLabel: "Risk & security",
    question:
      "Do you have rules on what company data can go into AI tools?",
    options: [
      { label: "No, never thought about it", points: 0 },
      { label: "Informal, unwritten rules", points: 3 },
      { label: "Written but not really followed", points: 7 },
      { label: "Written, followed, and we use business accounts", points: 10 },
    ],
  },
  {
    id: 9,
    category: "risk_security",
    categoryLabel: "Risk & security",
    question:
      "Who owns the logins and admin access for your business tools?",
    options: [
      { label: "Staff use personal accounts", points: 0 },
      { label: "One person holds everything", points: 3 },
      { label: "Shared company logins", points: 7 },
      { label: "Company-owned accounts with role-based access", points: 10 },
    ],
  },
  {
    id: 10,
    category: "processes",
    categoryLabel: "Processes",
    question: "How quickly do new leads and enquiries get a reply?",
    options: [
      { label: "Next day or later", points: 0 },
      { label: "Same day", points: 3 },
      { label: "Within an hour", points: 7 },
      { label: "Within minutes, automatically", points: 10 },
    ],
  },
];

export const SCORE_BANDS: ScoreBand[] = [
  {
    min: 0,
    max: 39,
    name: "Manual-first",
    meaning:
      "Most work runs on people, chats and spreadsheets. Big, quick wins are available, starting with one process.",
  },
  {
    min: 40,
    max: 59,
    name: "Getting started",
    meaning:
      "You have the basics, but tools don't talk to each other and know-how sits with a few people.",
  },
  {
    min: 60,
    max: 79,
    name: "Ready to automate",
    meaning:
      "Good foundations. Connecting tools and adding AI agents will save real hours.",
  },
  {
    min: 80,
    max: 100,
    name: "AI-ready",
    meaning:
      "Strong position. The next step is AI built into your workflows, with monitoring.",
  },
];

export const CATEGORY_RECOMMENDATIONS: Record<
  ScoreCategoryKey,
  [ScoreRecommendation, ScoreRecommendation]
> = {
  systems_data: [
    {
      category: "systems_data",
      categoryLabel: "Systems & data",
      text: "Connect your two most-used tools so data is entered once.",
      serviceHref: "/services/integrations",
      serviceLabel: "API Integration Services",
    },
    {
      category: "systems_data",
      categoryLabel: "Systems & data",
      text: "Move your main tracking sheet into a simple database or app.",
      serviceHref: "/services/custom-software",
      serviceLabel: "Custom Software & Internal Tools",
    },
  ],
  processes: [
    {
      category: "processes",
      categoryLabel: "Processes",
      text: "Automate lead follow-up so every enquiry gets a reply in minutes.",
      serviceHref: "/services/ai-agents",
      serviceLabel: "AI Agents & Chatbots",
    },
    {
      category: "processes",
      categoryLabel: "Processes",
      text: "Write down your top three processes; it's the first step to automating them.",
      serviceHref: "/services/workflow-automation",
      serviceLabel: "Workflow Automation",
    },
  ],
  people_ai: [
    {
      category: "people_ai",
      categoryLabel: "People & AI use",
      text: "Turn how your best people work into reusable AI skills and SOPs.",
      serviceHref: "/services/ai-training",
      serviceLabel: "AI Training & Claude for Business",
    },
    {
      category: "people_ai",
      categoryLabel: "People & AI use",
      text: "Run a short team session on using AI for your real tasks.",
      serviceHref: "/services/ai-training",
      serviceLabel: "AI Training & Claude for Business",
    },
  ],
  risk_security: [
    {
      category: "risk_security",
      categoryLabel: "Risk & security",
      text: "Write a one-page AI and data policy.",
      serviceHref: "/services/ai-consulting",
      serviceLabel: "AI Consulting & Readiness Audit",
    },
    {
      category: "risk_security",
      categoryLabel: "Risk & security",
      text: "Move tools to company-owned accounts with role-based access.",
      serviceHref: "/services/care-plans",
      serviceLabel: "AI Care Plans",
    },
  ],
};

export type CategoryScoreSummary = {
  key: ScoreCategoryKey;
  label: string;
  points: number;
  maxPoints: number;
  percentage: number;
};

export type AnsweredQuestionDetail = {
  questionId: number;
  question: string;
  category: ScoreCategoryKey;
  categoryLabel: string;
  optionIndex: number;
  optionLabel: string;
  points: number;
};

export type CalculatedScoreResult = {
  overall: number;
  band: ScoreBand["name"];
  bandMeaning: string;
  categories: CategoryScoreSummary[];
  recommendations: ScoreRecommendation[];
  answeredDetails: AnsweredQuestionDetail[];
};

/**
 * Pure scoring function.
 * @param answers Array of 10 option indices (each 0, 1, 2, or 3) corresponding to questions 1..10,
 *                or a Record mapping question id (1..10) to option index (0..3).
 */
export function calculateScore(
  answers: number[] | Record<number, number>,
): CalculatedScoreResult {
  const normalized: number[] = Array.isArray(answers)
    ? answers
    : AI_SCORE_QUESTIONS.map((q) => answers[q.id]);

  if (!Array.isArray(normalized) || normalized.length !== AI_SCORE_QUESTIONS.length) {
    throw new Error(
      `Expected ${AI_SCORE_QUESTIONS.length} answers, received ${
        Array.isArray(normalized) ? normalized.length : 0
      }.`,
    );
  }

  const categoryPoints: Record<ScoreCategoryKey, number> = {
    systems_data: 0,
    processes: 0,
    people_ai: 0,
    risk_security: 0,
  };

  let overall = 0;
  const answeredDetails: AnsweredQuestionDetail[] = [];

  for (let i = 0; i < AI_SCORE_QUESTIONS.length; i++) {
    const question = AI_SCORE_QUESTIONS[i];
    const optionIndex = normalized[i];

    if (
      typeof optionIndex !== "number" ||
      !Number.isInteger(optionIndex) ||
      optionIndex < 0 ||
      optionIndex > 3
    ) {
      throw new Error(
        `Invalid or missing answer for question ${question.id}: ${String(optionIndex)}`,
      );
    }

    const chosen = question.options[optionIndex];
    overall += chosen.points;
    categoryPoints[question.category] += chosen.points;

    answeredDetails.push({
      questionId: question.id,
      question: question.question,
      category: question.category,
      categoryLabel: question.categoryLabel,
      optionIndex,
      optionLabel: chosen.label,
      points: chosen.points,
    });
  }

  const categories: CategoryScoreSummary[] = SCORE_CATEGORY_ORDER.map((key) => {
    const info = SCORE_CATEGORIES[key];
    const points = categoryPoints[key];
    const percentage = Math.round((points / info.maxPoints) * 100);
    return {
      key,
      label: info.label,
      points,
      maxPoints: info.maxPoints,
      percentage,
    };
  });

  const matchedBand =
    SCORE_BANDS.find((b) => overall >= b.min && overall <= b.max) ??
    SCORE_BANDS[0];

  // Pick top 3 recommendations from the lowest-scoring categories (sorted by percentage ascending, then category order)
  const sortedCategories = [...categories].sort((a, b) => {
    if (a.percentage !== b.percentage) {
      return a.percentage - b.percentage;
    }
    return (
      SCORE_CATEGORY_ORDER.indexOf(a.key) - SCORE_CATEGORY_ORDER.indexOf(b.key)
    );
  });

  // First take the primary recommendation from the lowest 3 categories (or 2 from the lowest + 1 from the second lowest)
  // Using primary recommendation of lowest 3 distinct categories gives clear breadth, or two from lowest + one from next:
  // "Top three recommendations, picked from the lowest-scoring categories"
  const recommendations: ScoreRecommendation[] = [
    CATEGORY_RECOMMENDATIONS[sortedCategories[0].key][0],
    CATEGORY_RECOMMENDATIONS[sortedCategories[0].key][1],
    CATEGORY_RECOMMENDATIONS[sortedCategories[1].key][0],
  ];

  return {
    overall,
    band: matchedBand.name,
    bandMeaning: matchedBand.meaning,
    categories,
    recommendations,
    answeredDetails,
  };
}
