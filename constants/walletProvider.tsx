"use client";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { WagmiProvider } from "wagmi";
import {
  mainnet,
  polygon,
  arbitrum,
  base,
  sepolia,
  arbitrumSepolia,
  polygonAmoy,
  baseSepolia,
  optimism,
  optimismSepolia,
} from "wagmi/chains";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";

import { http } from "wagmi";

const config = getDefaultConfig({
  appName: "proofify",
  projectId: "777043d787bf56c2f1f2875436d60ccf",
  chains: [
    mainnet,
    polygon,
    arbitrum,
    base,
    sepolia,
    arbitrumSepolia,
    polygonAmoy,
    baseSepolia,
    optimism,
    optimismSepolia,
  ],
  transports: {
    [mainnet.id]: http(
      "https://eth-mainnet.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [sepolia.id]: http(
      "https://eth-sepolia.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [arbitrum.id]: http(
      "https://arb-mainnet.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [arbitrumSepolia.id]: http(
      "https://arb-sepolia.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [polygon.id]: http(
      "https://polygon-mainnet.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [polygonAmoy.id]: http(
      "https://polygon-amoy.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [base.id]: http(
      "https://base-mainnet.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [baseSepolia.id]: http(
      "https://base-sepolia.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [optimism.id]: http(
      "https://opt-mainnet.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
    [optimismSepolia.id]: http(
      "https://opt-sepolia.g.alchemy.com/v2/gQ-Ckxh6jH9-r5fGL4o6xiuIPmUQiBof"
    ),
  },
});
const queryClient = new QueryClient();
export const WagmiProviderContext = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider theme={lightTheme()} coolMode>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default WagmiProviderContext;
