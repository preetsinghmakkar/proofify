// "use client";

// import { useState, useEffect } from "react";
// import { writeContract } from "@wagmi/core";
// import { abi } from "../../../constants/ProofifyAbi/abi.js";
// import { proofifyAbi } from "../../../constants/ProofifyAbi/proofify-ReclaimAbi";
// import { config } from "../../../constants/walletProvider";
// import { Reclaim } from "@reclaimprotocol/js-sdk";

// export default function VerifyProof(props) {
//   const [proof, setProof] = useState({});
//   const [verified, setVerified] = useState(false);
//   const [proofifyVerified, setProofifyVerified] = useState(false);
//   const [error, setError] = useState(null); // State to store error information

//   useEffect(() => {
//     if (props.proof && Object.keys(props.proof).length > 0) {
//       const newProof = Reclaim.transformForOnchain(props.proof);
//       setProof(newProof);
//     }
//   }, [props.proof]);

//   return (
//     <div className="container">
//       <button
//         className="button"
//         onClick={async () => {
//           try {
//             const hash = await writeContract(config, {
//               abi: abi,
//               address: "0xcd94A4f7F85dFF1523269C52D0Ab6b85e9B22866",
//               functionName: "verifyProof",
//               chainId: 80002,
//               args: [proof],
//             });
//             if (hash) {
//               setVerified(true);
//               // setProofifyVerified(true);
//             }
//           } catch (error) {
//             setError(error); // Store the error in state
//             console.error("Error verifying proof:", error);
//           }
//         }}
//       >
//         Verify Proof
//       </button>
//       {verified && <p>Reclaim verified</p>}
//       {/* {proofifyVerified && <p> Proofify verified </p>} */}
//       {error && (
//         <div className="error-message">
//           An error occurred: {error.message || JSON.stringify(error)}
//         </div>
//       )}
//       <style jsx>{`
//         .container {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           justify-content: center;
//         }
//         .button {
//           border: solid 1px #ccc;
//           margin: 0 0 20px;
//           border-radius: 3px;
//           cursor: pointer;
//           padding: 10px 20px;
//           background-color: #f0f0f0;
//           transition: background-color 0.3s ease;
//         }
//         .button:hover {
//           background-color: #e0e0e0;
//         }
//         .error-message {
//           color: #ff0000;
//           margin-top: 10px;
//         }
//       `}</style>
//     </div>
//   );
// }

"use client";

import { useState, useEffect } from "react";
import { writeContract } from "@wagmi/core";
import { abi } from "../../../constants/ProofifyAbi/abi";
// import { proofifyAbi } from "./proofify-ReclaimAbi";
import { config } from "../../../constants/walletProvider";
import { Reclaim } from "@reclaimprotocol/js-sdk";

export default function VerifyProof(props) {
  const [proof, setProof] = useState({});
  const [verified, setVerified] = useState(false);
  const [proofifyVerified, setProofifyVerified] = useState(false);

  useEffect(() => {
    if (props.proof && Object.keys(props.proof).length > 0) {
      const newProof = Reclaim.transformForOnchain(props.proof);
      setProof(newProof);
    }
  }, [props.proof]);

  return (
    <div>
      <button
        className="button"
        onClick={async () => {
          const hash = await writeContract(config, {
            abi: abi,
            address: "0xcd94A4f7F85dFF1523269C52D0Ab6b85e9B22866",
            functionName: "verifyProof",
            chainId: 80002,
            args: [proof],
          });
          if (hash) {
            setVerified(true);
          }
        }}
      >
        Verify Proof
      </button>
      {verified && <p> Proof verified </p>}
      {/* {proofifyVerified && <p> Proofify verified </p>} */}
      <style jsx="true">{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }
        .button {
          border: solid 1px #ccc;
          margin: 0 0 20px;
          border-radius: 3px;
        }
      `}</style>
    </div>
  );
}
