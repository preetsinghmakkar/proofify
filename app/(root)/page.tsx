import Hero from "@/components/Hero";
import "@rainbow-me/rainbowkit/styles.css";
import { Providers } from "@/constants/WalletProvider";
import { ConnectButton } from "@rainbow-me/rainbowkit";
export default function Home() {
  return (
    <Providers>
      <ConnectButton />
    </Providers>
  );
}
