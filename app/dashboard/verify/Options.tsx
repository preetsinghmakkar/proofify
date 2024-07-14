import React from "react";
import { ProofOptions } from "../../../components/ProofOptions";

interface OptionsProps {}

const Options: React.FC<OptionsProps> = ({ onValueChange }: any) => {
  const handleValueChange = (value: string) => {
    onValueChange(value);
  };

  return <ProofOptions onValueChange={handleValueChange} />;
};

export default Options;
