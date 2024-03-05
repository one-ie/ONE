import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Software",
      items: [
        {
          title: "Agents",
          href: "/#features",
          description:
            "AI agents that do important jobs in your enterrprise or life.",
        },
        {
          title: "MIT License",
          href: "/guides/how-to-profit-with-mit-and-open-source",
          description:
            "Free, Open, Unrestricted. Read about The MIT License Advantage",
        },
        {
          title: "Start Now",
          href: "/docs/get-started",
          description: "Get started in a few minutes.",
          external: false,
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Education",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "Thoughts and ideas about AI, marketing and education.",
        },
        {
          title: "Docs",
          href: "/docs/get-started",
          description:
            "User Manual: How to get started and create your first AI agent quickly.",
        },
        {
          title: "Guides",
          href: "/guides",
          description: "Deep dives, step by step",
        },
        {
          title: "Meetings",
          href: "/meet",
          description:
            "Join a meeting with audio, video and chat",
        },
        {
          title: "Live Streams",
          href: "/live",
          description: "View and participate in live streams",
        },
        {
          title: "Courses",
          href: "/courses",
          description:
            "Learn how to build advanced AI agents using visual programming tools.",
          disabled: true,
        },
      ],
    },
  ],
  links: [
    {
      title: "Lab",
      href: "/lab",
    },
  ],
};
