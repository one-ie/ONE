import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Software",
      items: [
        {
          title: "Features",
          href: "/#features",
          description: "Take a closer look at the project's features.",
        },
        {
          title: "Twitter (@tonyoconnell)",
          href: "https://twitter.com/tonyoconnell",
          description: "Follow me to get the latest updates and news.",
          external: true,
        },
        {
          title: "Source Code",
          href: "https://github.com/one-ie/oneai",
          description: "You want to star the repository ? Let's get started!",
          external: true,
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
          description: "A Markdown/MDX blog built using Content Collections.",
        },
        {
          title: "Docs",
          href: "/docs/getting-started",
          description:
            "A Markdown/MDX documentation site built using Content Collections.",
        },
        {
          title: "Courses",
          href: "/login",
          description: "Guide learners on a journey with a static LMS",
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
