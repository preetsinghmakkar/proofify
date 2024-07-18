# Proofify

[Visit Proofify Website](https://proofify.vercel.app/)

Proofify helps users verify their MetaMask accounts on-chain. Users can link their MetaMask account with proof options such as LinkedIn, Twitter, or GitHub. The project uses the Reclaim Protocol, enabling users to bring their data from any website, even if it doesn't provide an API. Users sign up or sign in, connect their MetaMask account, and proceed with the verification process. Verification occurs both off-chain and on-chain.

Once verified and their MetaMask transaction is completed, users can visit the verification page to see their verification status. They can also check anyone's verification status for free by visiting the "findUsersVerification" page and entering the MetaMask address.

## Features

- Verify MetaMask accounts on-chain using LinkedIn, Twitter, or GitHub.
- Off-chain and on-chain verification with Reclaim Protocol.
- Check verification status on the "myVerifications" page.
- Free verification status check for any MetaMask address on the "findUsersVerification" page.

## Tech Stack

- **Foundry**: Smart contract development
- **Next.js**: Frontend framework
- **Tailwind CSS**: Styling
- **Wagmi**: React hooks for Ethereum
- **viem**: Library for writing Ethereum dApps
- **RainbowKit**: Wallet connection
- **TypeScript**: Programming language

## Getting Started

### Prerequisites

- Node.js
- MetaMask Wallet
- Polygon Amoy Testnet (Chain ID 80002)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/proofify.git
   cd proofify
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/dashboard
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/dashboard
    WALLTE_CONNECT_PROJECT_ID=
    ALCHEMY_API_KEY=
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

## Links

- Website: [Proofify](https://proofify.vercel.app/)
- Reclaim Protocol: [Reclaim Protocol](https://www.reclaimprotocol.org/)
- Reclaim Protocol Documentation: [Reclaim Docs](https://docs.reclaimprotocol.org/)
- Supported Networks: [Reclaim Supported Networks](https://docs.reclaimprotocol.org/solidity/supported-networks)

## Contact

- LinkedIn: [Preet Singh](https://www.linkedin.com/in/preet-singh-a65967302/)

- X: [@Preet132319](https://x.com/Preet132319)

## License

This project is licensed under the MIT License.
