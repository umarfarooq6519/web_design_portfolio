export type ExperienceType = {
  name: string;
  from: number;
  to: number | string | null;
  link: string;
};

export const experiences: ExperienceType[] = [
  {
    name: "Web Freelancer",
    from: 2024,
    to: "current",
    link: "",
  },
  {
    name: "Shark Innovation Labs",
    from: 2022,
    to: 2024,
    link: "",
  },
  {
    name: "DevBunch Pvt Ltd.",
    from: 2022,
    to: null,
    link: "",
  },
];
