export type ExperienceType = {
  name: string;
  from: number;
  to: number | string | null;
  link: string;
};

export const experiences: ExperienceType[] = [
  {
    name: "Freelancer",
    from: 2024,
    to: "current",
    link: "https://www.upwork.com/freelancers/~018e9328fc604635b6",
  },
  {
    name: "Shark Innovation Labs",
    from: 2022,
    to: 2024,
    link: "https://www.linkedin.com/company/shark-innovation-labs/",
  },
  {
    name: "DevBunch Pvt Ltd.",
    from: 2022,
    to: null,
    link: "https://www.linkedin.com/company/devbunch/",
  },
];
