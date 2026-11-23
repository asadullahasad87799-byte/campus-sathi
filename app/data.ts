export type OpportunityCategory =
  | "Internship"
  | "Scholarship"
  | "Hackathon"
  | "Workshop"
  | "Research Program"
  | "Competition";

export type Opportunity = {
  id: string;
  title: string;
  category: OpportunityCategory;
  organization: string;
  deadline: string;
  eligibility: string;
  link: string;
  lastVerified: string;
};

export const SAMPLE_OPPORTUNITIES: Opportunity[] = [
  {
    id: "1",
    title: "Summer Software Engineering Internship (Demo)",
    category: "Internship",
    organization: "Demo Company Inc.",
    deadline: "2026-12-15",
    eligibility: "3rd Year CS Students",
    link: "https://example.com/demo-internship",
    lastVerified: "2026-11-20",
  },
  {
    id: "2",
    title: "Global Women in STEM Scholarship (Demo)",
    category: "Scholarship",
    organization: "Demo Foundation",
    deadline: "2027-01-30",
    eligibility: "Female students in STEM",
    link: "https://example.com/demo-scholarship",
    lastVerified: "2026-11-22",
  },
  {
    id: "3",
    title: "AI Innovation Hackathon (Demo)",
    category: "Hackathon",
    organization: "Demo CodeHub",
    deadline: "2026-12-05",
    eligibility: "Open to all students",
    link: "https://example.com/demo-hackathon",
    lastVerified: "2026-11-23",
  },
  {
    id: "4",
    title: "Web Accessibility Workshop (Demo)",
    category: "Workshop",
    organization: "Demo Design Academy",
    deadline: "2026-12-10",
    eligibility: "Beginners interested in UI",
    link: "https://example.com/demo-workshop",
    lastVerified: "2026-11-18",
  },
];
