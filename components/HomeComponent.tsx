import { cn } from "@/utils/cn";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
  IconSearch,
  IconCheck,
  IconList,
  IconHelpCircle,
  IconBrandGithub,
  IconWallet,
} from "@tabler/icons-react";

export function Home() {
  return (
    <BentoGrid className="max-w-4xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={""}
          link={item.link}
        />
      ))}
    </BentoGrid>
  );
}

type Color = {
  color: string;
};

const Skeleton = ({ color }: Color) => (
  <div
    className={`flex flex-1 w-full h-full min-h-[6rem] rounded-xl ${color} dark:from-neutral-900 dark:to-neutral-800 to-neutral-100`}
  ></div>
);
const items = [
  {
    title: "Find Other User Verification Detail",
    description: "Search for verification details of other users.",
    header: <Skeleton color="bg-green-200" />,
    icon: <IconSearch className="h-4 w-4 text-neutral-500" />,
    link: "./dashboard/findUserVerification/",
  },
  {
    title: "Verify",
    description: "Verify your credentials and get authenticated.",
    header: <Skeleton color="bg-blue-200" />,
    icon: <IconCheck className="h-4 w-4 text-neutral-500" />,
    link: "./dashboard/verify/",
  },
  {
    title: "My Verifications",
    description: "View the list of your verified credentials.",
    header: <Skeleton color="bg-yellow-200" />,
    icon: <IconList className="h-4 w-4 text-neutral-500" />,
    link: "./dashboard/myVerifications/",
  },
  {
    title: "How to Use This",
    description: "Get instructions on how to use the platform.",
    header: <Skeleton color="bg-purple-200" />,
    icon: <IconHelpCircle className="h-4 w-4 text-neutral-500" />,
    link: "./dashboard/howToUse/",
  },
  {
    title: "Github",
    description: "Visit our Github repository for more information.",
    header: <Skeleton color="bg-gray-200" />,
    icon: <IconBrandGithub className="h-4 w-4 text-neutral-500" />,
    link: "https://github.com/preetsinghmakkar/proofify",
  },
  {
    title: "Reclaim Protocol",
    description: "Understand How Reclaim Protocol Helps to verify Identity",
    header: <Skeleton color="bg-teal-200" />,
    icon: <IconWallet className="h-4 w-4 text-neutral-500" />,
    link: "https://www.reclaimprotocol.org/",
  },
  {
    title: "Zkfetch",
    description: "Understand How Zkfetch Helps to verify Identity",
    header: <Skeleton color="bg-orange-200" />,
    icon: <IconWallet className="h-4 w-4 text-neutral-500" />,
    link: "https://www.npmjs.com/package/@reclaimprotocol/zk-fetch",
  },
];
