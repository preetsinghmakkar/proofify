"use client";

import { useState, useEffect } from "react";
import { writeContract } from "@wagmi/core";
import { abi } from "../../../constants/ProofifyAbi/abi";
import { config } from "../../../constants/walletProvider";
import { Reclaim } from "@reclaimprotocol/js-sdk";
import { proofifyAbi } from "@/constants/ProofifyAbi/proofify-ReclaimAbi";

export default function VerifyProof(props) {
  const [proof, setProof] = useState({});
  const [verified, setVerified] = useState(false);
  const [proofifyVerified, setProofifyVerified] = useState(false);
  const [proofType, setProofType] = useState("");

  useEffect(() => {
    if (props.proof && Object.keys(props.proof).length > 0) {
      const newProof = Reclaim.transformForOnchain(props.proof);
      setProof(newProof);
    }

    if (props.selectedProofType) {
      setProofType(props.selectedProofType);
      console.log("SelectedProofType : ", proofType);
    }

    verify();
  }, [props.proof]);

  const verify = async () => {
    try {
      let hash;
      let proofifyHash;

      hash = await writeContract(config, {
        abi: abi,
        address: "0xcd94A4f7F85dFF1523269C52D0Ab6b85e9B22866",
        functionName: "verifyProof",
        chainId: 80002,
        args: [proof],
      });

      if (hash) {
        setVerified(true);
        console.log("Hash is Verified");
      } else {
        console.log("Hash not verified");
      }

      let type;
      if (proofType === "LINKEDIN") {
        type = 0;
      } else if (proofType === "Github") {
        type = 1;
      } else if (proofType === "Twitter") {
        type = 2;
      }

      if (hash) {
        proofifyHash = await writeContract(config, {
          abi: proofifyAbi,
          address: "0x9a5E887027fD88CAE1FaE65195257a3d704cbff3",
          functionName: "VerifyUser",
          chainId: 80002,
          args: [type],
        });
      }

      if (proofifyHash) {
        setProofifyVerified(proofifyHash);
        console.log("Proofify Hash is Verified");
      } else {
        console.log("Proofify Hash is not Verified");
      }
    } catch (error) {
      console.log("error in Verify : ", error);
    }
  };

  return (
    <div>
      {verified && <p> Proof verified </p>}
      {proofifyVerified && <p> Proofify verified </p>}
    </div>
  );
}
