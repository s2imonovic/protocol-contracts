/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  IRegistryEvents,
  IRegistryEventsInterface,
} from "../../IRegistry.sol/IRegistryEvents";

const _abi = [
  {
    type: "event",
    name: "ChainMetadataUpdated",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "value",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ChainStatusChanged",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "newState",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractConfigurationUpdated",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "contractType",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "key",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "value",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractRegistered",
    inputs: [
      {
        name: "chainId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "contractType",
        type: "string",
        indexed: false,
        internalType: "string",
      },
      {
        name: "addressBytes",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ContractStatusChanged",
    inputs: [
      {
        name: "addressBytes",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ZRC20TokenRegistered",
    inputs: [
      {
        name: "originAddress",
        type: "bytes",
        indexed: false,
        internalType: "bytes",
      },
      {
        name: "zrc20",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "decimals",
        type: "uint8",
        indexed: false,
        internalType: "uint8",
      },
      {
        name: "originChainId",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
      {
        name: "symbol",
        type: "string",
        indexed: false,
        internalType: "string",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ZRC20TokenUpdated",
    inputs: [
      {
        name: "zrc20",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "active",
        type: "bool",
        indexed: false,
        internalType: "bool",
      },
    ],
    anonymous: false,
  },
] as const;

export class IRegistryEvents__factory {
  static readonly abi = _abi;
  static createInterface(): IRegistryEventsInterface {
    return new Interface(_abi) as IRegistryEventsInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): IRegistryEvents {
    return new Contract(address, _abi, runner) as unknown as IRegistryEvents;
  }
}
