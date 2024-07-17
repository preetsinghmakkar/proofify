"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useAccount } from "wagmi";
import { proofifyAbi } from "../../../constants/ProofifyAbi/proofify-ReclaimAbi";
import { config } from "../../../constants/walletProvider";
import { readContracts } from "@wagmi/core";
import { useRouter } from "next/navigation";
import { CheckCircle, AlertCircle } from "lucide-react"; // Ensure correct icon imports

const Page = () => {
  const contractAddress = "0x9a5E887027fD88CAE1FaE65195257a3d704cbff3";

  const { address } = useAccount();
  const [linkedInData, setLinkedInData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [twitterData, setTwitterData] = useState(null);

  const router = useRouter();

  const { isConnected } = useAccount();

  if (!isConnected) {
    router.push("/dashboard");
  }

  useEffect(() => {
    if (address) {
      fetchData();
    }
  }, [address]);

  const fetchData = async () => {
    try {
      const [linkedIn, github, twitter] = await Promise.all([
        readContracts(config, {
          contracts: [
            {
              address: contractAddress,
              abi: proofifyAbi,
              functionName: "getUserVerifications",
              args: [address, 0],
            },
          ],
        }),
        readContracts(config, {
          contracts: [
            {
              address: contractAddress,
              abi: proofifyAbi,
              functionName: "getUserVerifications",
              args: [address, 1],
            },
          ],
        }),
        readContracts(config, {
          contracts: [
            {
              address: contractAddress,
              abi: proofifyAbi,
              functionName: "getUserVerifications",
              args: [address, 2],
            },
          ],
        }),
      ]);

      setLinkedInData(linkedIn[0]?.result);
      setGithubData(github[0]?.result);
      setTwitterData(twitter[0]?.result);

      console.log("LinkedIn Data:", linkedIn[0]?.result);
      console.log("Github Data:", github[0]?.result);
      console.log("Twitter Data:", twitter[0]?.result);
    } catch (error) {
      console.error("Error reading contract:", error);
    }
  };

  return (
    <div className="flex flex-col lg:flex-row lg:space-x-4 lg:space-y-0 p-4 gap-4">
      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            LinkedIn
            {linkedInData !== null && linkedInData === true && (
              <Image
                src={"/green-tick.jpg"}
                alt="Verified"
                height={40}
                width={40}
              />
            )}
          </CardTitle>
          <CardDescription>Professional Networking</CardDescription>
        </CardHeader>
        <CardContent>
          {linkedInData !== null && linkedInData === false && (
            <div className="flex items-center p-3 rounded-lg space-x-2 border border-red-500">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p>
                Your account is not verified by LinkedIn. Click on verify to
                proceed.
              </p>
            </div>
          )}
          {linkedInData !== null && linkedInData === true && (
            <div className="flex items-center p-3 rounded-lg space-x-2 border border-green-500">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p>Your account is verified by LinkedIn successfully.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {linkedInData !== null && linkedInData === true && (
            <Button variant="outline" disabled>
              Already Verified
            </Button>
          )}
          {linkedInData !== null && linkedInData === false && (
            <Button
              onClick={() => {
                router.push("./verify/");
              }}
              variant="green"
            >
              Verify
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex flex-row items-center justify-between">
            GitHub
            {githubData !== null && githubData === true && (
              <Image
                src={"/green-tick.jpg"}
                alt="Verified"
                height={40}
                width={40}
              />
            )}
          </CardTitle>
          <CardDescription>Code Repository</CardDescription>
        </CardHeader>
        <CardContent>
          {githubData !== null && githubData === false && (
            <div className="flex items-center p-3 rounded-lg space-x-2 border border-red-500">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p>
                Your account is not verified by GitHub. Click on verify to
                proceed.
              </p>
            </div>
          )}
          {githubData !== null && githubData === true && (
            <div className="flex items-center p-3 rounded-lg space-x-2 border border-green-500">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p>Your account is verified by GitHub successfully.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {githubData !== null && githubData === true && (
            <Button variant="outline" disabled>
              Already Verified
            </Button>
          )}
          {githubData !== null && githubData === false && (
            <Button
              onClick={() => {
                router.push("./verify/");
              }}
              variant="green"
            >
              Verify
            </Button>
          )}
        </CardFooter>
      </Card>

      <Card className="flex-1">
        <CardHeader>
          <CardTitle className="flex items-center justify-between">
            Twitter
            {twitterData !== null && twitterData === true && (
              <Image
                src={"/green-tick.jpg"}
                alt="Verified"
                height={40}
                width={40}
              />
            )}
          </CardTitle>
          <CardDescription>Social Networking</CardDescription>
        </CardHeader>
        <CardContent>
          {twitterData !== null && twitterData === false && (
            <div className="flex items-center p-3 rounded-lg space-x-2 border border-red-500">
              <AlertCircle className="h-5 w-5 text-red-500" />
              <p>
                Your account is not verified by Twitter. Click on verify to
                proceed.
              </p>
            </div>
          )}
          {twitterData !== null && twitterData === true && (
            <div className="flex items-center p-3 rounded-lg space-x-2 border border-green-500">
              <CheckCircle className="h-5 w-5 text-green-500" />
              <p>Your account is verified by Twitter successfully.</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {twitterData !== null && twitterData === true && (
            <Button variant="outline" disabled>
              Already Verified
            </Button>
          )}
          {twitterData !== null && twitterData === false && (
            <Button
              onClick={() => {
                router.push("./verify/");
              }}
              variant="green"
            >
              Verify
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
