export type MockJob = {
  id: string;
  title: string;
  company: string;
  location: string;
  hourly: number;
  visaTags: string[];
  sponsorshipAvailable: boolean;
  cardEnabled: boolean;
  category: string;
  postedLabel: string;
};

/** Demo listings — replace with Prisma queries. */
export const MOCK_JOBS: MockJob[] = [
  {
    id: "1",
    title: "Kitchen Hand — CBD venue",
    company: "Harbour Bistro Pty Ltd",
    location: "Sydney NSW",
    hourly: 32.5,
    visaTags: ["Student visa", "WHV"],
    sponsorshipAvailable: false,
    cardEnabled: true,
    category: "hospitality",
    postedLabel: "2 days ago",
  },
  {
    id: "2",
    title: "Commercial Cleaner — night shift",
    company: "Pacific Facilities",
    location: "Melbourne VIC",
    hourly: 38,
    visaTags: ["All eligible visas"],
    sponsorshipAvailable: false,
    cardEnabled: true,
    category: "cleaning",
    postedLabel: "Today",
  },
  {
    id: "3",
    title: "Construction Labourer — White Card required",
    company: "Southern Cross Builders",
    location: "Brisbane QLD",
    hourly: 42,
    visaTags: ["PR", "Citizen"],
    sponsorshipAvailable: true,
    cardEnabled: false,
    category: "construction",
    postedLabel: "5 days ago",
  },
  {
    id: "4",
    title: "Aged Care Assistant — RSA bonus",
    company: "Coastal Care Network",
    location: "Adelaide SA",
    hourly: 35,
    visaTags: ["Student visa", "PR"],
    sponsorshipAvailable: false,
    cardEnabled: true,
    category: "agedcare",
    postedLabel: "1 week ago",
  },
  {
    id: "5",
    title: "IT Support — casual contract",
    company: "Red Earth Tech",
    location: "Perth WA (hybrid)",
    hourly: 55,
    visaTags: ["Citizen", "PR"],
    sponsorshipAvailable: false,
    cardEnabled: false,
    category: "it",
    postedLabel: "3 days ago",
  },
  {
    id: "6",
    title: "Retail Assistant — weekend",
    company: "Outback Retail Group",
    location: "Darwin NT",
    hourly: 30,
    visaTags: ["WHV", "Student visa"],
    sponsorshipAvailable: false,
    cardEnabled: true,
    category: "retail",
    postedLabel: "Yesterday",
  },
];

export function filterMockJobs(params: {
  q?: string;
  category?: string;
}): MockJob[] {
  let list = [...MOCK_JOBS];
  const q = params.q?.trim().toLowerCase();
  if (q) {
    list = list.filter(
      (j) =>
        j.title.toLowerCase().includes(q) ||
        j.company.toLowerCase().includes(q) ||
        j.location.toLowerCase().includes(q),
    );
  }
  if (params.category && params.category !== "all") {
    list = list.filter((j) => j.category === params.category);
  }
  return list;
}
