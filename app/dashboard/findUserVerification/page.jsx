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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { CheckCircle, AlertCircle } from "lucide-react";

const Page = () => {
  const contractAddress = "0x9a5E887027fD88CAE1FaE65195257a3d704cbff3";
  // const { address } = useAccount();
  const [linkedInData, setLinkedInData] = useState(null);
  const [githubData, setGithubData] = useState(null);
  const [twitterData, setTwitterData] = useState(null);
  const [address, setAddress] = useState(null);
  const router = useRouter();

  const formSchema = z.object({
    address: z.string().min(2).max(50),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      address: "",
    },
  });

  function onSubmit(values) {
    setAddress(values.address);
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
    <>
      <Card>
        <CardHeader>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="address"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>User's Address</FormLabel>
                    <FormControl>
                      <Input placeholder="0xca....ef9" {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="mt-6">
                Submit
              </Button>
            </form>
          </Form>
        </CardHeader>
      </Card>

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
                <p>User's account is not verified by LinkedIn.</p>
              </div>
            )}
            {linkedInData !== null && linkedInData === true && (
              <div className="flex items-center p-3 rounded-lg space-x-2 border border-green-500">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p>User's account is verified by LinkedIn successfully.</p>
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
              <Button variant="outline" disabled>
                Not Verified
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
                <p>User's account is not verified by GitHub.</p>
              </div>
            )}
            {githubData !== null && githubData === true && (
              <div className="flex items-center p-3 rounded-lg space-x-2 border border-green-500">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p>User's account is verified by GitHub successfully.</p>
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
              <Button variant="outline" disabled>
                Not Verified
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
                <p>User's account is not verified by Twitter.</p>
              </div>
            )}
            {twitterData !== null && twitterData === true && (
              <div className="flex items-center p-3 rounded-lg space-x-2 border border-green-500">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <p>User's account is verified by Twitter successfully.</p>
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
              <Button variant="outline" disabled>
                Not Verified
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Page;
