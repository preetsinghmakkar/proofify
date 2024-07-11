import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="flex flex-1 flex-col items-center justify-center text-center  py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Welcome to Proofify</h1>
          <p className="text-lg text-gray-700 mb-6">
            Secure and verify your credentials with ease.
          </p>
        </div>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center p-6">
        <SignIn signUpFallbackRedirectUrl={"/dashboard"} />
      </main>
    </div>
  );
}
