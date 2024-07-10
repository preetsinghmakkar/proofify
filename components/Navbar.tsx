"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GitBranchIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/" className="flex flex-row items-center">
        <Image src="/logo.png" alt="logo" width={74} height={29} />

        <h2 className="font-bold text-2xl hidden lg:inline-block">Proofify</h2>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-black-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            <div className="mr-2">{link.icons && <link.icons />}</div>
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          variant="green"
          size={"lg"}
          className="rounded-full"
        >
          Get Started{" "}
        </Button>
      </div>

      <h2 className="flex-center font-bold text-2xl lg:hidden">Proofify</h2>

      <div className="lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant={"ghost"} type="button" className="lg:hidden">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent side={"left"} className="p-0">
            <div className="flex flex-col w-full h-full p-5">
              <div className="flex flex-row items-center mb-5">
                <Image src="/logo.png" alt="logo" width={74} height={29} />
                <h2 className="font-bold text-2xl ml-3">Proofify</h2>
              </div>

              <ul className="flex flex-col gap-4 mb-5">
                {NAV_LINKS.map((link) => (
                  <li key={link.key}>
                    <Link
                      href={link.href}
                      className="regular-16 text-black-50 font-bold text-xl flexCenter cursor-pointer transition-all hover:font-bold"
                    >
                      {link.icons && <link.icons />}

                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Button
                type="button"
                variant="green"
                className="w-full rounded-full"
              >
                Get Started{" "}
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
