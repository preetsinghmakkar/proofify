// import Hero from "@/components/Hero";
// import "@rainbow-me/rainbowkit/styles.css";
// import WagmiProviderContext from "@/constants/walletProvider";
// import { ConnectButton } from "@rainbow-me/rainbowkit";
// export default function Home() {
//   return (
//     <WagmiProviderContext>
//       <ConnectButton />
//     </WagmiProviderContext>
//   );
// }

import React from "react";
import Hero from "@/components/Hero";
import "@rainbow-me/rainbowkit/styles.css";

const page = () => {
  return <Hero />;
};

export default page;
