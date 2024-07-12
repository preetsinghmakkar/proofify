import Header from "@/components/Header";
import { Sidebar } from "@/components/Sidebar";
import { Providers } from "@/constants/WalletProvider";
import "@rainbow-me/rainbowkit/styles.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Providers>
        <html lang="en">
          <body>
            <Header />
            <div className="flex">
              <div className="hidden md:block h-[100vh] w-[300px]">
                <Sidebar />
              </div>
              <div className="p-5 w-full md:max-w-[1140px]">{children}</div>
            </div>
          </body>
        </html>
      </Providers>
    </>
  );
}
