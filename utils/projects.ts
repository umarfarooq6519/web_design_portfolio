export type ProjectType = {
  id: number;
  title: string;
  description: string;
  portraitImg?: string;
  landscapeImg: string;
  roles: string[];
  year: number;
  projectType?: string;
  problem?: string;
  solution?: string;
  focusAreas?: string[];
  whatMadeItWork?: WhatMadeItWorkType[];
};

export type WhatMadeItWorkType = {
  title: string;
  text: string;
  result: string;
};

export const projects: ProjectType[] = [
  {
    id: 1,
    title: "PawsEnvy",
    description: "🐕‍🦺 An AI-Powered Pet Management Platform",
    landscapeImg: "/images/projects/pawsenvy/thumbnail_landscape.jpeg",
    roles: ["UX/UI Design", "Android Development"],
    year: 2025,
    portraitImg: "/images/projects/pawsenvy/thumbnail_portrait.jpeg",
    projectType: "Mobile UX/UI Design",
    problem:
      "As pet care increasingly moves into the digital space, pet owners and vets demand smarter tools . Our goal is to provide a pet management platform that simplifies profiles, vet bookings, and community features - all in one place.",
    solution:
      "  Our solution is an AI-driven app that simplifies pet management by connecting pet owners with veterinarians and the community in a seamless experience, driving stronger engagement for long-term growth.",
    focusAreas: [
      "What pet management products exist in the market?",
      "How do users interact with existing products?",
      "What are the pain points of the existing products?",
      "Which features are essential for the management of pets?",
    ],
    whatMadeItWork: <WhatMadeItWorkType[]>[
      {
        title: "One-tap sharing",
        text: "Anything can be shared instantly — user profiles, pet details, booking history",
        result: "40% reduction in appointment booking time",
      },
      {
        title: "Balanced dual audiences",
        text: "Pet owners got an emotional, friendly experience while vets got professional tools",
        result: "70% user retention across both audiences",
      },
      {
        title: "Smart AI integration",
        text: "AI features actually helps you out, and doesn't interfere with what you're doing.",
        result: "Decreased user confusion by 40%",
      },
    ],
  },
  {
    id: 2,
    title: "Rooftop Gardens",
    description:
      "🌿Website Redesigned to keep up with  Appealing Lanscaping Services",
    landscapeImg: "/images/projects/rooftop/thumbnail_landscape.jpeg",
    portraitImg: "/images/projects/rooftop/thumbnail_portrait.jpeg",
    roles: ["UX/UI Design", "Framer CMS | SEO "],
    projectType: "Website Redesign",
    year: 2025,
    problem:
      "As customers increasingly evaluate local services online, the client's outdated landscaping website failed to convert visitors. Confusing navigation, unclear service pages, and a poor mobile experience led to low inquiries and missed bookings.",
    solution:
      "Our solution was a focused redesign that clarified services, streamlined contact and booking flows, and optimized mobile performance. The new site raised lead conversion, boosted local search visibility, and strengthened customer trust.",
    focusAreas: [
      "Which landscaping services attract local customers most?",
      "How do users find and evaluate landscaping providers online?",
      "What stops visitors from requesting quotes or booking consultations?",
      "Which website features (portfolio, pricing cues, contact flow) drive conversions?",
    ],
    whatMadeItWork: <WhatMadeItWorkType[]>[
      {
        title: "Service-first content strategy",
        text: "Reorganized the site around clear service pages with outcome-focused copy and explicit next steps.",
        result: "Service page conversions increased 2.5x",
      },
      {
        title: "Streamlined quote flow",
        text: "Introduced a short, prominent request-a-quote flow that reduced friction and made contacting immediate.",
        result: "Lead inquiries grew 3x",
      },
      {
        title: "Local SEO & performance optimizations",
        text: "Implemented local schema, improved page speed, and optimized images",
        result: "Organic traffic up 45% and bounce rate down 20%",
      },
    ],
  },
  {
    id: 3,
    title: "BuzzTalk",
    description:
      "📱Make Fluid Conversations with your Friends with less Distractions",
    landscapeImg: "/images/projects/buzztalk/thumbnail_landscape.png",
    roles: ["UX/UI Design", "Android Development"],
    year: 2024,
    projectType: "Mobile UX/UI Design",
    portraitImg: "/images/projects/buzztalk/thumbnail_portrait.jpeg",
    problem:
      "As digital communication gets cluttered with endless features, users seek a simpler way to connect. Our goal is to provide a chat app that removes distractions and delivers one efficient, focused experience — making conversations clear, fast, and effortless.",
    solution:
      "Our solution is a focused chat app that delivers one clear path for messaging — designed with an intuitive interface, minimal friction, and efficient functionality that makes staying connected effortless.",
    focusAreas: [
      "Which messaging apps do you currently use most often, and why?",
      "How do you usually start and maintain conversations on these platforms?",
      "What frustrations or distractions do you experience while using them?",
      "If you could keep only the essential features in a chat app, what would they be?",
    ],
    whatMadeItWork: <WhatMadeItWorkType[]>[
      {
        title: "Streamlined interface",
        text: "A clean, minimal design kept the focus on conversations without extra distractions.",
        result: "15% faster messaging compared to feature-heavy apps.",
      },
      {
        title: "Single-purpose focus",
        text: "Centered on one clear use: messaging - instead of bundling unnecessary tools.",
        result: "Retention increased by 25% due to reduced complexity.",
      },
      {
        title: "Effortless functionality",
        text: "Actions like sending messages and media were optimized for speed & reliability.",
        result: "Reported user frustration dropped by 20%.",
      },
    ],
  },
];
