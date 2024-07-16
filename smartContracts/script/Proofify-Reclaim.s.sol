// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Script, console} from "forge-std/Script.sol";
import {Proofify} from "../src/Proofify-Reclaim.sol";

contract CounterScript is Script {
    function run() public returns (Proofify) {
        vm.startBroadcast();
        Proofify proofify = new Proofify();
        vm.stopBroadcast();

        return proofify;
    }
}
