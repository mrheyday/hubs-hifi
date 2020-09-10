/* SPDX-License-Identifier: LGPL-3.0-or-later */
/* solhint-disable func-name-mixedcase */
pragma solidity ^0.7.1;

import "../RedemptionPool.sol";
import "../YTokenInterface.sol";

/**
 * @title GodModeRedemptionPool
 * @author Mainframe
 * @dev Strictly for test purposes. Do not use in production.
 */
contract GodModeRedemptionPool is RedemptionPool {
    /* solhint-disable-next-line no-empty-blocks */
    constructor(FintrollerInterface fintroller_, YTokenInterface yToken_) RedemptionPool(fintroller_, yToken_) {}

    function __godMode_setUnderlyingTotalSupply(uint256 newUnderlyingTotalSupply) external {
        underlyingTotalSupply = newUnderlyingTotalSupply;
    }
}
