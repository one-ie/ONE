import type { DocsConfig } from "@/types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/get-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Quick Start",
      items: [
        {
          title: "Get Started",
          href: "/docs/get-started",
        },
        {
          title: "Get Ready",
          href: "/docs/cloud/get-ready",
        },
        {
          title: "Activate",
          href: "/docs/cloud/activate",
        },
        {
          title: "Chat",
          href: "/docs/cloud/chat",
        },
      ],
    },
    {
      title: "Accelerate",
      items: [
        {
          title: "Your Chats",
          href: "/docs/cloud/chats",
        },
        {
          title: "Your Profile",
          href: "/docs/cloud/profile",
        },
        {
          title: "Your Prompts",
          href: "/docs/cloud/prompts",
        },
        {
          title: "Your Work Spaces",
          href: "/docs/cloud/workspaces",
        },
        {
          title: "Your Files",
          href: "/docs/cloud/files",
        },
        {
          title: "Your Collections",
          href: "/docs/cloud/collections",
        },
        {
          title: "Your Assistants",
          href: "/docs/cloud/assistants",
        },
        {
          title: "Your Tools ",
          href: "/docs/cloud/tools",
        },
      ],
    },
    {
      title: "Develop",
      items: [
        {
          title: "Build Custom AI",
          href: "/lab",
        },
      ],
    },
  ],
};