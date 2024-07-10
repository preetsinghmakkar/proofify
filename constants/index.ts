import { Github, Linkedin, Twitter } from "lucide-react";

// NAVIGATION
export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home", icons: null },
  { href: "/", key: "features", label: "Features", icons: null },
  { href: "/", key: "how-it-works", label: "How It Works", icons: null },
  { href: "/", key: "blog", label: "Blog", icons: null },
  {
    href: "https://github.com/preetsinghmakkar/proofify",
    key: "github",
    label: "Github",
    icons: Github,
  },
];

// FOOTER SECTION
export const FOOTER_LINKS = [
  {
    title: "Learn More",
    links: [
      "About Proofify",
      "Press Releases",
      "Environment",
      "Jobs",
      "Privacy Policy",
      "Contact Us",
    ],
  },
  {
    title: "Our Community",
    links: ["Community Stories", "User Reviews", "Developer Resources"],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: "Contact Us",
  links: [
    { label: "Support Team", value: "support@proofify.com" },
    { label: "Press Inquiries", value: "press@proofify.com" },
  ],
};

export const SOCIALS = [
  {
    href: "https://twitter.com/proofify",
    key: "twitter",
    label: "Twitter",
    icons: Twitter,
  },
  {
    href: "https://linkedin.com/company/proofify",
    key: "linkedin",
    label: "LinkedIn",
    icons: Linkedin,
  },
  {
    href: "https://github.com/preetsinghmakkar/proofify",
    key: "github",
    label: "Github",
    icons: Github,
  },
];
