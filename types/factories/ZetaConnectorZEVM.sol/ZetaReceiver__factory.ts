/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type {
  ZetaReceiver,
  ZetaReceiverInterface,
} from "../../ZetaConnectorZEVM.sol/ZetaReceiver";

const _abi = [
  {
    type: "function",
    name: "onZetaMessage",
    inputs: [
      {
        name: "zetaMessage",
        type: "tuple",
        internalType: "struct ZetaInterfaces.ZetaMessage",
        components: [
          {
            name: "zetaTxSenderAddress",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "sourceChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "zetaValue",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "onZetaRevert",
    inputs: [
      {
        name: "zetaRevert",
        type: "tuple",
        internalType: "struct ZetaInterfaces.ZetaRevert",
        components: [
          {
            name: "zetaTxSenderAddress",
            type: "address",
            internalType: "address",
          },
          {
            name: "sourceChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "destinationAddress",
            type: "bytes",
            internalType: "bytes",
          },
          {
            name: "destinationChainId",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "remainingZetaValue",
            type: "uint256",
            internalType: "uint256",
          },
          {
            name: "message",
            type: "bytes",
            internalType: "bytes",
          },
        ],
      },
    ],
    outputs: [],
    stateMutability: "nonpayable",
  },
] as const;

export class ZetaReceiver__factory {
  static readonly abi = _abi;
  static createInterface(): ZetaReceiverInterface {
    return new Interface(_abi) as ZetaReceiverInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ZetaReceiver {
    return new Contract(address, _abi, runner) as unknown as ZetaReceiver;
  }
}
