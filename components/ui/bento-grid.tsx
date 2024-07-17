import { cn } from "@/utils/cn";
import Link from "next/link";
import React from "react";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  link,
  isConnected,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  link: string;
  isConnected: boolean;
}) => {
  return (
    <>
      <Link href={link}>
        <div
          className={cn(
            "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 relative", // Added 'relative' class for positioning
            className
          )}
        >
          {header}
          <div className="group-hover/bento:translate-x-2 transition duration-200">
            {icon}
            <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
              {title}
            </div>
            <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
              {description}
            </div>
            {/* Notification for non-connected MetaMask users */}
            {!isConnected &&
              (title === "Verify" || title === "My Verifications") && (
                <div className="flex items-center justify-center bg-red-200 text-red-800 bg-opacity-50 p-2 m-2 rounded-xl  ">
                  Please connect MetaMask to access this page.
                </div>
              )}
          </div>
        </div>
      </Link>
    </>
  );
};
