import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
const page = () => {
  return (
    <div>
      User Profile : <UserButton showName />
    </div>
  );
};

export default page;
