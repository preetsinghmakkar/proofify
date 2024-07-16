// SPDX-License-Identifier: MIT

pragma solidity 0.8.20;

/**
 * @title Proofify Contract
 * @author Preet Singh
 * @notice Contract for storing address with proofs verifications
 */

contract Proofify {
    /* Errors */
    error Proofify__AlreadyProofed();
    error Proofifiy__UserNotExist();

    /* Type declarations */
    enum ProofOptions {
        LINKEDIN,
        GITHUB,
        TWITTER
    }

    /* Events */
    event UserVerified(address indexed user, ProofOptions _proofOptions);

    /* Mappings */
    mapping(address => mapping(ProofOptions => bool)) proofed;

    /**
     * @notice This function is used to update the verification of the user
     * @param _proofOptions used to declare the type of Proof
     */
    function VerifyUser(ProofOptions _proofOptions) external returns (bool) {
        if (proofed[msg.sender][_proofOptions] != false) {
            revert Proofify__AlreadyProofed();
        }

        proofed[msg.sender][_proofOptions] = true;

        emit UserVerified(msg.sender, _proofOptions);

        return true;
    }

    /**
     * @notice This function is used to get the verification status of the particular user
     * @param _proofOptions used to declare the type of Proof
     */
    function getUserVerifications(
        address _user,
        ProofOptions _proofOptions
    ) external view returns (bool) {
        bool verifiedOrNot = proofed[_user][_proofOptions];

        return verifiedOrNot;
    }
}
