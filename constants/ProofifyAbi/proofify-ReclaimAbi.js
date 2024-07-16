export const proofifyAbi = [
  {
    type: "function",
    name: "VerifyUser",
    inputs: [
      {
        name: "_proofOptions",
        type: "uint8",
        internalType: "enum Proofify.ProofOptions",
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "getUserVerifications",
    inputs: [
      { name: "_user", type: "address", internalType: "address" },
      {
        name: "_proofOptions",
        type: "uint8",
        internalType: "enum Proofify.ProofOptions",
      },
    ],
    outputs: [{ name: "", type: "bool", internalType: "bool" }],
    stateMutability: "view",
  },
  {
    type: "event",
    name: "UserVerified",
    inputs: [
      {
        name: "user",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "_proofOptions",
        type: "uint8",
        indexed: false,
        internalType: "enum Proofify.ProofOptions",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "Proofifiy__UserNotExist", inputs: [] },
  { type: "error", name: "Proofify__AlreadyProofed", inputs: [] },
];
