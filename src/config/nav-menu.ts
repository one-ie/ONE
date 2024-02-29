import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Software",
      items: [
        {
          title: "Features",
          href: "/#features",
          description: "Create your own AI agents.",
        },
        {
          title: "Our Vision",
          href: "/company/vision",
          description: "Read about our company's vision for free and open AI.",
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
          title: "Courses",
          href: "/courses",
          description: "Learn how to build advanced AI agents using visual programming tools.",
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
