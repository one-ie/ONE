import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  infosNav: [
    {
      title: "Software",
      items: [
        {
          title: "Smarter",
          href: "/#features",
          description: "Take a closer look at the project's features.",
        },
        {
          title: "Faster",
          href: "https://twitter.com/tonyoconnell",
          description: "Follow me to get the latest updates and news.",
          external: true,
        },
        {
          title: "Start Now", 
          href: "https://one.ie/start",
          description: "You can get started in less than a minute. Just enter your website address and our AI will research your company, market and customers.",
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
          href: "/docs/get-started",
          description:
            "User Manual",
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
