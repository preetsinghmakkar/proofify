"use client";
import React, { useState } from "react";
import Image from "next/image";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./ui/animated-modal";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ProofOptions({ onValueChange }: any) {
  const [selectedProofValue, setSelectedProofValue] = useState("");

  const handleSelectChange = (value: string) => {
    setSelectedProofValue(value);
    console.log(value);
    onValueChange(value);
  };

  return (
    <div className="py-10 flex items-center justify-start">
      <Modal>
        <ModalTrigger className="bg-black dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
            Proofs Options
          </span>
          <div className="-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
            ✈️
          </div>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              <span className="flex items-center px-1 py-0.5 rounded-md dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Proofify{" "}
                <Image
                  src={"/logo.png"}
                  alt="Logo"
                  width={20}
                  height={20}
                  className="ml-2 mr-2"
                />
                lets you verify easily! ✈️
              </span>{" "}
            </h4>

            <div className="flex justify-center items-center"></div>
            <div className="py-10 flex flex-wrap gap-x-4 gap-y-6 items-start justify-start max-w-sm mx-auto">
              <Select onValueChange={handleSelectChange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Proof Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Choose Any One</SelectLabel>
                    <SelectItem value="LinkedIn">LinkedIn</SelectItem>
                    <SelectItem value="Twitter">Twitter</SelectItem>
                    <SelectItem value="Github">Github</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </ModalContent>
          <ModalFooter className="gap-4 justify-start">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Not sure which proof to choose? Explore options and verify with
              ease!
            </p>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
