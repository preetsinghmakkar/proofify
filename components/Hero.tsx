"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { PlayCircle, Linkedin, Twitter, Github } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();
  return (
    <>
      <section className="max-container padding-container flex flex-col gap-20 py-10 pb-0 md:gap-28 lg:py-20 xl:flex-row">
        <div className="hero-map" />
        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
          <h1 className="bold-52 lg:bold-88">Verify Your Metamask Account</h1>
          <p className="regular-16 mt-6 mb-6 text-gray-30 xl:max-w-[520px]">
            Proofify is an innovative decentralized application (DApp) designed
            to revolutionize the way credentials are verified and authenticated.
            Leveraging the power of blockchain technology and the Reclaim
            Protocol, Proofify provides a secure, transparent, and efficient
            platform for verifying professional and educational credentials.
          </p>
          <div className="flex flex-col w-full gap-6 sm:flex-row mt-6">
            <Button
              type="button"
              title="Get Started"
              variant="green"
              onClick={() => {
                router.push("/sign-in");
              }}
            >
              Get Started
            </Button>
            <Button type="button" title="Learn More" variant="green">
              Learn More
            </Button>
          </div>
        </div>
        <div className="relative flex flex-1 items-center">
          <div className="relative z-20 flex w-full h-full flex-col gap-8 rounded-3xl bg-gray-90 px-7 py-8">
            <div className="flex flex-col">
              <p className="bold-20 text-white">
                Proofify! Trust in Every Verification
              </p>
            </div>
            <div className="flexBetween lg:py-2">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">
                  Blockchain Verified
                </p>
                <p className="bold-20 text-white">Metamask Account</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="regular-16 block text-gray-20 ">Service Used</p>
                <p className="bold-20 text-white">Reclaim Protocol</p>
              </div>
            </div>
            <div className="flexBetween lg:py-2">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">Data Privacy</p>
                <p className="bold-20 text-white">Protected Credentials</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="regular-16 block text-gray-20">Efficiency</p>
                <p className="bold-20 text-white">Seamless Process</p>
              </div>
            </div>
            <div className="flexBetween lg:py-2">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">
                  User Authentication
                </p>
                <p className="bold-20 text-white">Secure Login</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="regular-16 block text-gray-20">
                  Credential Storage
                </p>
                <p className="bold-20 text-white">On-Chain Proofs</p>
              </div>
            </div>
            <div className="flexBetween lg:py-2">
              <div className="flex flex-col">
                <p className="regular-16 block text-gray-20">
                  Profile Management
                </p>
                <p className="bold-20 text-white">Verified Credentials</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="regular-16 block text-gray-20">
                  Automated Verification
                </p>
                <p className="bold-20 text-white">Instant Updates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="howItWorks" className="flexCenter flex-col bg-white py-20">
        <div className="max-container padding-container">
          <h2 className="bold-40 mb-10">How it Works</h2>
          <div className="grid gap-10 md:grid-cols-2">
            <div className="relative aspect-w-16 aspect-h-9">
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle className="text-green-500 w-20 h-20 cursor-pointer hover:scale-110 transition-transform duration-300 ease-in-out" />
              </div>
              <video
                src="/proofify.mp4"
                controls
                className="relative inset-0 w-full h-25 rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-center items-center md:items-center lg:items-center">
              <p className="regular-16 text-gray-30 text-center lg:text-center">
                Watch this video to learn how Proofify simplifies credential
                verification using blockchain technology. Discover the seamless
                process and enhanced security features that ensure your
                credentials are verified with trust and efficiency.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center bg-white py-20">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">
            Meet the Developer
          </h2>
          <div className="flex flex-col justify-center items-center gap-8 md:flex-row md:gap-12">
            <Card className="w-full md:w-2/3 lg:w-1/2">
              <CardHeader className="flex flex-col items-center">
                <Avatar className="h-40 w-40">
                  <AvatarImage src="/profile-pic.jpeg" alt="Preet Singh" />
                  <AvatarFallback>PS</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl font-bold mt-4">
                  Preet Singh
                </CardTitle>
                <CardDescription className="text-lg text-gray-500 text-center md:text-left">
                  Solo Developer of Proofify. Passionate about blockchain
                  technology and decentralized applications.
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center gap-4 md:items-center">
                <Link href={"https://github.com/preetsinghmakkar"}>
                  <Button className="gap-1">
                    <Github className="w-6 h-6" />
                    GitHub
                  </Button>
                </Link>
                <Link
                  href={"https://www.linkedin.com/in/preet-singh-a65967302/"}
                >
                  <Button className="gap-1">
                    <Linkedin className="w-6 h-6" />
                    LinkedIn
                  </Button>
                </Link>
                <Link href="https://x.com/Preet132319">
                  <Button className="gap-1">
                    <Twitter className="w-6 h-6" />
                    Twitter
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="flexCenter flex-col bg-white py-20">
        <div className="max-container padding-container">
          <h2 className="bold-40 mb-10">FAQ</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Proofify secure?</AccordionTrigger>
              <AccordionContent>
                Yes. Proofify uses blockchain technology and zkProtocol to
                ensure all credentials are verified securely and transparently.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I get started?</AccordionTrigger>
              <AccordionContent>
                Simply sign up on our platform, connect your wallet, and start
                verifying your credentials using our user-friendly interface.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Can I trust the verification process?
              </AccordionTrigger>
              <AccordionContent>
                Absolutely. Proofify leverages the Reclaim Protocol and
                blockchain technology to provide a trustworthy verification
                process.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Hero;
