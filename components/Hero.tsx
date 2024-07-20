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
          <h1 className="bold-52">Verify Your MetaMask Account</h1>
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
            <Button
              type="button"
              title="Learn More"
              variant="green"
              onClick={() => {
                router.push("https://github.com/preetsinghmakkar/proofify");
              }}
            >
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
                <p className="bold-20 text-white">MetaMask Account</p>
              </div>
              <div className="flex flex-col justify-end items-end">
                <p className="regular-16 block text-gray-20">Service Used</p>
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
            <div
              className="relative"
              style={{
                paddingBottom: "56.25%",
                position: "relative",
                height: 0,
              }}
            >
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/7MbrxxgoZtU"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                }}
              ></iframe>
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

      <section className="flex flex-col items-center bg-white py-20">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-10 text-center">
            About the Creator
          </h2>
          <div className="flex flex-col items-center gap-10 md:flex-row md:gap-20">
            <div className="relative w-64 h-64 rounded-full overflow-hidden">
              <Image
                src="/profile-pic.jpeg" // Your profile image
                alt="Preet Singh"
                layout="fill"
                objectFit="cover"
                className="rounded-full border-4 border-gray-300"
              />
            </div>
            <div className="flex flex-col items-center md:items-start">
              <p className="text-lg text-gray-700 mb-4">
                Hello! I&apos;m Preet Singh, the creator of Proofify. With a
                deep commitment to enhancing security and verification in the
                decentralized world, I&apos;ve developed Proofify to simplify
                the process of verifying MetaMask accounts on-chain. My goal is
                to provide a secure and user-friendly platform that bridges the
                gap between off-chain and on-chain verification.
              </p>
              <p className="text-lg text-gray-700 mb-4">
                Proofify is designed to offer a seamless experience for users to
                link their MetaMask accounts with trusted platforms like
                LinkedIn, Twitter, or GitHub, ensuring their identity is
                verified efficiently and securely. Feel free to connect with me
                through the links below!
              </p>

              <div className="flex gap-4">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flexCenter flex-col bg-white py-20">
        <div className="max-container padding-container">
          <h2 className="bold-40 mb-10">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What is Proofify and how does it work?
              </AccordionTrigger>
              <AccordionContent>
                Proofify is a decentralized application (DApp) designed to
                verify credentials using blockchain technology. It leverages the
                Reclaim Protocol to securely and transparently verify user
                credentials, such as MetaMask accounts, LinkedIn profiles, and
                GitHub repositories. The verification process ensures that your
                credentials are authenticated and stored on the blockchain for
                added security and trust.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I get started with Proofify?
              </AccordionTrigger>
              <AccordionContent>
                To get started with Proofify, simply sign in using your MetaMask
                wallet. Once signed in, you can link your accounts from various
                platforms, such as LinkedIn and GitHub, and verify your
                credentials on-chain. For more detailed instructions, visit our
                &quot;Get Started&quot; page.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                Is my data safe with Proofify?
              </AccordionTrigger>
              <AccordionContent>
                Yes, your data is safe with Proofify. We use blockchain
                technology to store and verify credentials, ensuring that your
                data is protected and immutable. Additionally, we follow best
                practices for data privacy and security to safeguard your
                information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Who can I contact for support or feedback?
              </AccordionTrigger>
              <AccordionContent>
                For support or feedback, you can reach out to us through our
                contact page or connect with the creator directly via the social
                media links provided. We welcome your feedback and are here to
                assist you with any questions or issues you may have.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </>
  );
};

export default Hero;
