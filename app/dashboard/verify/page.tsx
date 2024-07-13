"use client";

import React from "react";
import { useAccount } from "wagmi";
const AccountPage = () => {
  const { address } = useAccount();

  return <div>Account Address: {address}</div>;
};

export default AccountPage;
