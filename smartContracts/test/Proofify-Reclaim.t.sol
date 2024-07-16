// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

import {Test, console} from "forge-std/Test.sol";
import {Proofify} from "../src/Proofify-Reclaim.sol";

contract ProofifyTest is Test {
    Proofify public proofify;

    address user = address(1);

    function setUp() public {
        proofify = new Proofify();
    }

    function test_VerifyUser() public {
        vm.startPrank(user);
        Proofify.ProofOptions proofop = Proofify.ProofOptions.LINKEDIN;
        bool result = proofify.VerifyUser(proofop);

        assertEq(result, true);
    }

    function test_getUserVerifications() public {
        vm.startPrank(user);
        Proofify.ProofOptions proofop = Proofify.ProofOptions.LINKEDIN;
        proofify.VerifyUser(proofop);

        bool verifiedOrNot = proofify.getUserVerifications(user, proofop);

        assertEq(verifiedOrNot, true);
    }

    function test_VerifyUserGithub() public {
        vm.startPrank(user);
        Proofify.ProofOptions proofop = Proofify.ProofOptions.LINKEDIN;
        proofify.VerifyUser(proofop);

        Proofify.ProofOptions proofopg = Proofify.ProofOptions.GITHUB;
        bool verifiedOrNot = proofify.getUserVerifications(user, proofopg);

        vm.expectRevert();
        assertEq(verifiedOrNot, false);
    }
}
