export type ProjectType = {
  title: string;
  description: string;
  imageUrl: string;
  roles: string[];
  year: number;
};

export const projects: ProjectType[] = [
  {
    title: "PawsEnvy",
    description:
    "🐕 An AI-Powered Personal Pet Management App (Android)",
    imageUrl: "/images/projects/pawsenvy/thumbnail_landscape.png",
    roles: ["UX/UI Design", "Android Development"],
    year: 2025,
  },
  {
    title: "Rooftop Gardens",
    description:
      "🌿 Website Redesigned to keep up with  Appealing Lanscaping Services",
    imageUrl: "/images/projects/rooftop/thumbnail_landscape.png",
    roles: ["UX/UI Design", "Framer CMS | SEO "],
    year: 2025,
  },
  {
    title: "BuzzTalk",
    description:
      "📱 Make Lively Conversations with your Friends with less Distractions",
    imageUrl: "/images/projects/buzztalk/thumbnail_landscape.png",
    roles: ["UX/UI Design", "Android Development"],
    year: 2024,
  },
];
