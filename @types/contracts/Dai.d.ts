/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { ethers, EventFilter, Signer, BigNumber, BigNumberish, PopulatedTransaction } from "ethers";
import { Contract, ContractTransaction, Overrides, CallOverrides } from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DaiInterface extends ethers.utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "PERMIT_TYPEHASH()": FunctionFragment;
    "allowance(address,address)": FunctionFragment;
    "approve(address,uint256)": FunctionFragment;
    "balanceOf(address)": FunctionFragment;
    "burn(address,uint256)": FunctionFragment;
    "decimals()": FunctionFragment;
    "deny(address)": FunctionFragment;
    "mint(address,uint256)": FunctionFragment;
    "move(address,address,uint256)": FunctionFragment;
    "name()": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)": FunctionFragment;
    "pull(address,uint256)": FunctionFragment;
    "push(address,uint256)": FunctionFragment;
    "rely(address)": FunctionFragment;
    "symbol()": FunctionFragment;
    "totalSupply()": FunctionFragment;
    "transfer(address,uint256)": FunctionFragment;
    "transferFrom(address,address,uint256)": FunctionFragment;
    "version()": FunctionFragment;
    "wards(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "DOMAIN_SEPARATOR", values?: undefined): string;
  encodeFunctionData(functionFragment: "PERMIT_TYPEHASH", values?: undefined): string;
  encodeFunctionData(functionFragment: "allowance", values: [string, string]): string;
  encodeFunctionData(functionFragment: "approve", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "balanceOf", values: [string]): string;
  encodeFunctionData(functionFragment: "burn", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "decimals", values?: undefined): string;
  encodeFunctionData(functionFragment: "deny", values: [string]): string;
  encodeFunctionData(functionFragment: "mint", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "move", values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "name", values?: undefined): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "permit",
    values: [string, string, BigNumberish, BigNumberish, boolean, BigNumberish, BytesLike, BytesLike],
  ): string;
  encodeFunctionData(functionFragment: "pull", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "push", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "rely", values: [string]): string;
  encodeFunctionData(functionFragment: "symbol", values?: undefined): string;
  encodeFunctionData(functionFragment: "totalSupply", values?: undefined): string;
  encodeFunctionData(functionFragment: "transfer", values: [string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "transferFrom", values: [string, string, BigNumberish]): string;
  encodeFunctionData(functionFragment: "version", values?: undefined): string;
  encodeFunctionData(functionFragment: "wards", values: [string]): string;

  decodeFunctionResult(functionFragment: "DOMAIN_SEPARATOR", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "PERMIT_TYPEHASH", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "allowance", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "approve", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "balanceOf", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "burn", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "decimals", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "deny", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "mint", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "move", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "name", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "permit", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "pull", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "push", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "rely", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "symbol", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "totalSupply", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transfer", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transferFrom", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "version", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wards", data: BytesLike): Result;

  events: {
    "Approval(address,address,uint256)": EventFragment;
    "LogNote(bytes4,address,bytes32,bytes32,bytes)": EventFragment;
    "Transfer(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Approval"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "LogNote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Transfer"): EventFragment;
}

export class Dai extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DaiInterface;

  functions: {
    DOMAIN_SEPARATOR(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    "DOMAIN_SEPARATOR()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    PERMIT_TYPEHASH(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    "PERMIT_TYPEHASH()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    allowance(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    "allowance(address,address)"(
      arg0: string,
      arg1: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    approve(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "approve(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    balanceOf(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    "balanceOf(address)"(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    burn(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "burn(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    decimals(
      overrides?: CallOverrides,
    ): Promise<{
      0: number;
    }>;

    "decimals()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: number;
    }>;

    deny(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

    "deny(address)"(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

    mint(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "mint(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "move(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    name(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    "name()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    nonces(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    "nonces(address)"(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    permit(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    pull(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "pull(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    push(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "push(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    rely(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

    "rely(address)"(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

    symbol(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    "symbol()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    totalSupply(
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    "totalSupply()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "transfer(address,uint256)"(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides,
    ): Promise<ContractTransaction>;

    version(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    "version()"(
      overrides?: CallOverrides,
    ): Promise<{
      0: string;
    }>;

    wards(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;

    "wards(address)"(
      arg0: string,
      overrides?: CallOverrides,
    ): Promise<{
      0: BigNumber;
    }>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;

  PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

  "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

  allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  "allowance(address,address)"(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

  approve(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "approve(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "balanceOf(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  burn(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "burn(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  decimals(overrides?: CallOverrides): Promise<number>;

  "decimals()"(overrides?: CallOverrides): Promise<number>;

  deny(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

  "deny(address)"(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

  mint(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "mint(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "move(address,address,uint256)"(
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  name(overrides?: CallOverrides): Promise<string>;

  "name()"(overrides?: CallOverrides): Promise<string>;

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "nonces(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  permit(
    holder: string,
    spender: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    allowed: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"(
    holder: string,
    spender: string,
    nonce: BigNumberish,
    expiry: BigNumberish,
    allowed: boolean,
    v: BigNumberish,
    r: BytesLike,
    s: BytesLike,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  pull(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "pull(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  push(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "push(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  rely(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

  "rely(address)"(guy: string, overrides?: Overrides): Promise<ContractTransaction>;

  symbol(overrides?: CallOverrides): Promise<string>;

  "symbol()"(overrides?: CallOverrides): Promise<string>;

  totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

  "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

  transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "transfer(address,uint256)"(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<ContractTransaction>;

  "transferFrom(address,address,uint256)"(
    src: string,
    dst: string,
    wad: BigNumberish,
    overrides?: Overrides,
  ): Promise<ContractTransaction>;

  version(overrides?: CallOverrides): Promise<string>;

  "version()"(overrides?: CallOverrides): Promise<string>;

  wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "wards(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<string>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<string>;

    "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<string>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    "allowance(address,address)"(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "approve(address,uint256)"(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "burn(address,uint256)"(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    decimals(overrides?: CallOverrides): Promise<number>;

    "decimals()"(overrides?: CallOverrides): Promise<number>;

    deny(guy: string, overrides?: CallOverrides): Promise<void>;

    "deny(address)"(guy: string, overrides?: CallOverrides): Promise<void>;

    mint(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "mint(address,uint256)"(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    move(src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "move(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<void>;

    name(overrides?: CallOverrides): Promise<string>;

    "name()"(overrides?: CallOverrides): Promise<string>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: CallOverrides,
    ): Promise<void>;

    pull(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "pull(address,uint256)"(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    push(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "push(address,uint256)"(usr: string, wad: BigNumberish, overrides?: CallOverrides): Promise<void>;

    rely(guy: string, overrides?: CallOverrides): Promise<void>;

    "rely(address)"(guy: string, overrides?: CallOverrides): Promise<void>;

    symbol(overrides?: CallOverrides): Promise<string>;

    "symbol()"(overrides?: CallOverrides): Promise<string>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "transfer(address,uint256)"(dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: CallOverrides): Promise<boolean>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: CallOverrides,
    ): Promise<boolean>;

    version(overrides?: CallOverrides): Promise<string>;

    "version()"(overrides?: CallOverrides): Promise<string>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "wards(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Approval(src: string | null, guy: string | null, wad: null): EventFilter;

    LogNote(
      sig: BytesLike | null,
      usr: string | null,
      arg1: BytesLike | null,
      arg2: BytesLike | null,
      data: null,
    ): EventFilter;

    Transfer(src: string | null, dst: string | null, wad: null): EventFilter;
  };

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<BigNumber>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<BigNumber>;

    "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<BigNumber>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    "allowance(address,address)"(arg0: string, arg1: string, overrides?: CallOverrides): Promise<BigNumber>;

    approve(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "approve(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "balanceOf(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    burn(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "burn(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    decimals(overrides?: CallOverrides): Promise<BigNumber>;

    "decimals()"(overrides?: CallOverrides): Promise<BigNumber>;

    deny(guy: string, overrides?: Overrides): Promise<BigNumber>;

    "deny(address)"(guy: string, overrides?: Overrides): Promise<BigNumber>;

    mint(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "mint(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "move(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    name(overrides?: CallOverrides): Promise<BigNumber>;

    "name()"(overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "nonces(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    permit(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    pull(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "pull(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    push(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "push(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    rely(guy: string, overrides?: Overrides): Promise<BigNumber>;

    "rely(address)"(guy: string, overrides?: Overrides): Promise<BigNumber>;

    symbol(overrides?: CallOverrides): Promise<BigNumber>;

    "symbol()"(overrides?: CallOverrides): Promise<BigNumber>;

    totalSupply(overrides?: CallOverrides): Promise<BigNumber>;

    "totalSupply()"(overrides?: CallOverrides): Promise<BigNumber>;

    transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "transfer(address,uint256)"(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides,
    ): Promise<BigNumber>;

    version(overrides?: CallOverrides): Promise<BigNumber>;

    "version()"(overrides?: CallOverrides): Promise<BigNumber>;

    wards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "wards(address)"(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "DOMAIN_SEPARATOR()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PERMIT_TYPEHASH(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "PERMIT_TYPEHASH()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    allowance(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "allowance(address,address)"(arg0: string, arg1: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    approve(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "approve(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    balanceOf(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "balanceOf(address)"(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    burn(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "burn(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    decimals(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "decimals()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    deny(guy: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "deny(address)"(guy: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    mint(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "mint(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    move(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "move(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    name(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "name()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "nonces(address)"(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    permit(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    "permit(address,address,uint256,uint256,bool,uint8,bytes32,bytes32)"(
      holder: string,
      spender: string,
      nonce: BigNumberish,
      expiry: BigNumberish,
      allowed: boolean,
      v: BigNumberish,
      r: BytesLike,
      s: BytesLike,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    pull(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "pull(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    push(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "push(address,uint256)"(usr: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    rely(guy: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    "rely(address)"(guy: string, overrides?: Overrides): Promise<PopulatedTransaction>;

    symbol(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "symbol()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    totalSupply(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "totalSupply()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transfer(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "transfer(address,uint256)"(dst: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    transferFrom(src: string, dst: string, wad: BigNumberish, overrides?: Overrides): Promise<PopulatedTransaction>;

    "transferFrom(address,address,uint256)"(
      src: string,
      dst: string,
      wad: BigNumberish,
      overrides?: Overrides,
    ): Promise<PopulatedTransaction>;

    version(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "version()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wards(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "wards(address)"(arg0: string, overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
