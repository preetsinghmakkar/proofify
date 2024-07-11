"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Hero = () => {
  const router = useRouter();
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />

      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className="bold-52 lg:bold-88">
          Verify Your Credentials Seamlessly
        </h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Proofify provides a decentralized platform to verify your professional
          and educational credentials with ease and security. Empowering trust
          through blockchain technology.
        </p>

        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/logo.png" // Use a star icon or similar for ratings
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>

          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Verified Credentials
            </span>
          </p>
        </div>

        <div className="flex flex-col w-full gap-3 sm:flex-row">
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

      <div className="relative flex flex-1 items-start">
        <div className="relative z-20 flex w-full flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
          <Image
            src="/validation_verification.png" // Use an image that represents your platform
            alt="Hero Image"
            width={1000}
            height={700}
          />
          <div className="flex flex-col">
            <p className="bold-20 text-white">
              Proofify: Trust in Every Verification
            </p>
          </div>

          <div className="flexBetween">
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Efficiency</p>
              <p className="bold-20 text-white">Seamless Process</p>
            </div>
            <div className="flex flex-col">
              <p className="regular-16 block text-gray-20">Security</p>
              <p className="bold-20 text-white">Blockchain Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
