"use client";

import React, { useEffect, useState, useCallback } from "react";
import { useAccount } from "wagmi";
import { Reclaim } from "@reclaimprotocol/js-sdk";
import { useRouter } from "next/navigation";
import QRCode from "react-qr-code";
import Options from "./Options";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { HashLoader } from "react-spinners";
import VerifyProofify from "./VerifyProofify";

const Page = () => {
  const router = useRouter();
  const { isConnected } = useAccount();
  const [url, setUrl] = useState("");
  const [proofVerified, setProofVerified] = useState(false);
  const [selectedProofValue, setSelectedProofValue] = useState("LinkedIn");
  const [proof, setProof] = useState(null);
  const [verified, setVerified] = useState("");
  const [proofifyVerified, setProofifyVerified] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isConnected) {
      router.push("/dashboard");
    }
  }, [isConnected, router]);

  const getCredentials = (selectedProofValue) => {
    let APP_ID = "0xcf6215e623818d0c4112a42E6d48B34B5507E19b";
    let providerId = "03cdff35-6c27-4626-8231-2b298c3538c0";
    let AppSecret =
      "0x4a8595336029aba9aada516be890c0046fde8cd3cd54e0723246eb0a80afc337";

    if (selectedProofValue === "Github") {
      APP_ID = "0x9Bc5b367367A8628850f89A44DAEd3627FAF5086";
      providerId = "eea88931-af56-471f-bbc0-5df8330e52f8";
      AppSecret =
        "0xf1a6d95f6c09255fb299156630801a5422ca754339dd6e53a335b2071051facc";
    } else if (selectedProofValue === "Twitter") {
      APP_ID = "0x9F77Fd5dFeC57890C6ca76C3AEda4153a69b8247";
      providerId = "39c31ffd-0be0-4e45-9a18-1eb3cb8099e1";
      AppSecret =
        "0x6be19b524b1f16a3394f5ff4a8285742c1b353e2f921530f811067e1b97f14b6";
    }

    return { APP_ID, providerId, AppSecret };
  };

  const generateVerificationRequest = useCallback(async () => {
    const { APP_ID, providerId, AppSecret } =
      getCredentials(selectedProofValue);
    const reclaimClient = new Reclaim.ProofRequest(APP_ID);

    try {
      await reclaimClient.buildProofRequest(providerId);
      reclaimClient.setSignature(
        await reclaimClient.generateSignature(AppSecret)
      );

      const { requestUrl } = await reclaimClient.createVerificationRequest();
      setUrl(requestUrl);

      if (requestUrl) {
        await reclaimClient.startSession({
          onSuccessCallback: (proofs) => {
            setProofVerified(true);
            setProof(proofs[0]);
          },
          onFailureCallback: (error) => {
            console.error("Verification failed", error);
          },
        });
      }
    } catch (error) {
      console.error("Error generating verification request: ", error);
    }
  }, [selectedProofValue]);

  useEffect(() => {
    const runGenerateVerificationRequest = async () => {
      await generateVerificationRequest();
    };
    runGenerateVerificationRequest();
  }, [generateVerificationRequest]);

  const handleValueChange = (value) => {
    setSelectedProofValue(value);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white flex flex-col justify-center items-center p-6">
      <Card className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
        <CardHeader className="flex flex-col items-center">
          {error && (
            <p className="text-red-400 m-4">
              Error in Verifying your details. Plz try again later!
            </p>
          )}
          <h1 className="text-4xl font-bold text-gray-900 text-center mb-2">
            {proofVerified ? (
              <>
                {verified && proofifyVerified ? (
                  <>
                    <h3 className="text-green-500">
                      Metamask Account Verified Successfully
                    </h3>
                  </>
                ) : (
                  <h3 className="text-green-500">
                    Proof Verified Successfully
                  </h3>
                )}
              </>
            ) : (
              "Verify Your Proof"
            )}
          </h1>
          <CardDescription className="text-gray-600 text-center mb-6 mt-4">
            Let&apos;s Verify Your Metamask Account on Blockchain Now
          </CardDescription>

          {proof ? (
            <>
              {verified && proofifyVerified ? (
                <>
                  <Button
                    variant={"green"}
                    onClick={() => router.push("./myVerifications")}
                    className="mt-6"
                  >
                    {" "}
                    Let&apos;s Check Your Status{" "}
                  </Button>
                </>
              ) : (
                <VerifyProofify
                  proof={proof}
                  selectedProofType={selectedProofValue}
                  setVerified={setVerified}
                  setProofifyVerified={setProofifyVerified}
                  setError={setError}
                />
              )}
            </>
          ) : (
            <Options onValueChange={handleValueChange} />
          )}
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <p className="text-gray-600 text-center mb-4">
            Selected Proof Option: {selectedProofValue}
          </p>
          {proofVerified && (
            <h2 className="text-green-600 text-center mb-4">
              Your proof with {selectedProofValue} has been verified!
            </h2>
          )}
          <div className="flex flex-col items-center m-5">
            {!url ? (
              <HashLoader color="green" />
            ) : (
              <div className="mt-4 flex flex-col items-center">
                <QRCode value={url} size={200} />
                <p className="text-gray-600 text-center mt-6">
                  Scan the QR code with your Mobile Phone and Reclaim Protocol
                  App
                </p>
                <p className="text-gray-600 text-center mt-6 font-bold">
                  URL: {url}
                </p>
              </div>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button
            onClick={() => router.push("../#howToUse")}
            variant="link"
            className="text-blue-600 hover:text-blue-700"
          >
            Want to learn how to use?
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Page;
