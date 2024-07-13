"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/nextjs";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import "@rainbow-me/rainbowkit/styles.css";
import { useAccount } from "wagmi";
const Header = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  const Account = useAccount();

  console.log("Account :", Account.address);

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <nav className="flex justify-between items-center bg-white shadow-md p-5">
      <Link href="/dashboard" className="flex flex-row items-center">
        <h2 className="font-bold text-2xl text-gray-900">
          Welcome
          <span className="text-red-500"> {user.firstName}</span>
        </h2>
      </Link>
      <div className="flex items-center space-x-4">
        <ConnectButton />
      </div>
    </nav>
  );
};

export default Header;
