import type { DocsConfig } from "@/types"

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/get-ready/",
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
          title: "Get Ready",
          href: "/docs/get-ready/",
        },
        {
          title: "Activate",
          href: "/docs/activate/",
        },
        {
          title: "Chat ",
          href: "/docs/chat/",
        },       
      ],
    },
    {
      title: "Accelerate",
      items: [
        {
          title: "Your AI",
          href: "/docs/documentation/cloud/profile",
        },
        {
          title: "Your Work Spaces",
          href: "/docs/documentation/cloud/workspaces",
        },
        {
          title: "Your Files",
          href: "/docs/documentation/cloud/files",
        },
        {
          title: "Your Collections",
          href: "/docs/documentation/cloud/collections",
        },
        {
          title: "Your Prompts",
          href: "/docs/documentation/cloud/prompts",
        },
        {
          title: "Your Assistants",
          href: "/docs/documentation/cloud/assistants",
        },
        {
          title: "Your Tools ",
          href: "/docs/documentation/cloud/assistant",
          disabled: true,
        },
      ],
    },
  ],
};