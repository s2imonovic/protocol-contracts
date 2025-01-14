/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace ZetaInterfaces {
  export type SendInputStruct = {
    destinationChainId: BigNumberish;
    destinationAddress: BytesLike;
    destinationGasLimit: BigNumberish;
    message: BytesLike;
    zetaValueAndGas: BigNumberish;
    zetaParams: BytesLike;
  };

  export type SendInputStructOutput = [
    destinationChainId: bigint,
    destinationAddress: string,
    destinationGasLimit: bigint,
    message: string,
    zetaValueAndGas: bigint,
    zetaParams: string
  ] & {
    destinationChainId: bigint;
    destinationAddress: string;
    destinationGasLimit: bigint;
    message: string;
    zetaValueAndGas: bigint;
    zetaParams: string;
  };
}

export interface ZetaConnectorZEVMInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "FUNGIBLE_MODULE_ADDRESS"
      | "onReceive"
      | "onRevert"
      | "send"
      | "setWzetaAddress"
      | "wzeta"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "SetWZETA"
      | "ZetaReceived"
      | "ZetaReverted"
      | "ZetaSent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "FUNGIBLE_MODULE_ADDRESS",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onReceive",
    values: [
      BytesLike,
      BigNumberish,
      AddressLike,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onRevert",
    values: [
      AddressLike,
      BigNumberish,
      BytesLike,
      BigNumberish,
      BigNumberish,
      BytesLike,
      BytesLike
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "send",
    values: [ZetaInterfaces.SendInputStruct]
  ): string;
  encodeFunctionData(
    functionFragment: "setWzetaAddress",
    values: [AddressLike]
  ): string;
  encodeFunctionData(functionFragment: "wzeta", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "FUNGIBLE_MODULE_ADDRESS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "onReceive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "onRevert", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "send", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "setWzetaAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "wzeta", data: BytesLike): Result;
}

export namespace SetWZETAEvent {
  export type InputTuple = [wzeta_: AddressLike];
  export type OutputTuple = [wzeta_: string];
  export interface OutputObject {
    wzeta_: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ZetaReceivedEvent {
  export type InputTuple = [
    zetaTxSenderAddress: BytesLike,
    sourceChainId: BigNumberish,
    destinationAddress: AddressLike,
    zetaValue: BigNumberish,
    message: BytesLike,
    internalSendHash: BytesLike
  ];
  export type OutputTuple = [
    zetaTxSenderAddress: string,
    sourceChainId: bigint,
    destinationAddress: string,
    zetaValue: bigint,
    message: string,
    internalSendHash: string
  ];
  export interface OutputObject {
    zetaTxSenderAddress: string;
    sourceChainId: bigint;
    destinationAddress: string;
    zetaValue: bigint;
    message: string;
    internalSendHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ZetaRevertedEvent {
  export type InputTuple = [
    zetaTxSenderAddress: AddressLike,
    sourceChainId: BigNumberish,
    destinationChainId: BigNumberish,
    destinationAddress: BytesLike,
    remainingZetaValue: BigNumberish,
    message: BytesLike,
    internalSendHash: BytesLike
  ];
  export type OutputTuple = [
    zetaTxSenderAddress: string,
    sourceChainId: bigint,
    destinationChainId: bigint,
    destinationAddress: string,
    remainingZetaValue: bigint,
    message: string,
    internalSendHash: string
  ];
  export interface OutputObject {
    zetaTxSenderAddress: string;
    sourceChainId: bigint;
    destinationChainId: bigint;
    destinationAddress: string;
    remainingZetaValue: bigint;
    message: string;
    internalSendHash: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace ZetaSentEvent {
  export type InputTuple = [
    sourceTxOriginAddress: AddressLike,
    zetaTxSenderAddress: AddressLike,
    destinationChainId: BigNumberish,
    destinationAddress: BytesLike,
    zetaValueAndGas: BigNumberish,
    destinationGasLimit: BigNumberish,
    message: BytesLike,
    zetaParams: BytesLike
  ];
  export type OutputTuple = [
    sourceTxOriginAddress: string,
    zetaTxSenderAddress: string,
    destinationChainId: bigint,
    destinationAddress: string,
    zetaValueAndGas: bigint,
    destinationGasLimit: bigint,
    message: string,
    zetaParams: string
  ];
  export interface OutputObject {
    sourceTxOriginAddress: string;
    zetaTxSenderAddress: string;
    destinationChainId: bigint;
    destinationAddress: string;
    zetaValueAndGas: bigint;
    destinationGasLimit: bigint;
    message: string;
    zetaParams: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface ZetaConnectorZEVM extends BaseContract {
  connect(runner?: ContractRunner | null): ZetaConnectorZEVM;
  waitForDeployment(): Promise<this>;

  interface: ZetaConnectorZEVMInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  FUNGIBLE_MODULE_ADDRESS: TypedContractMethod<[], [string], "view">;

  onReceive: TypedContractMethod<
    [
      zetaTxSenderAddress: BytesLike,
      sourceChainId: BigNumberish,
      destinationAddress: AddressLike,
      zetaValue: BigNumberish,
      message: BytesLike,
      internalSendHash: BytesLike
    ],
    [void],
    "payable"
  >;

  onRevert: TypedContractMethod<
    [
      zetaTxSenderAddress: AddressLike,
      sourceChainId: BigNumberish,
      destinationAddress: BytesLike,
      destinationChainId: BigNumberish,
      remainingZetaValue: BigNumberish,
      message: BytesLike,
      internalSendHash: BytesLike
    ],
    [void],
    "payable"
  >;

  send: TypedContractMethod<
    [input: ZetaInterfaces.SendInputStruct],
    [void],
    "nonpayable"
  >;

  setWzetaAddress: TypedContractMethod<
    [wzeta_: AddressLike],
    [void],
    "nonpayable"
  >;

  wzeta: TypedContractMethod<[], [string], "view">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "FUNGIBLE_MODULE_ADDRESS"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "onReceive"
  ): TypedContractMethod<
    [
      zetaTxSenderAddress: BytesLike,
      sourceChainId: BigNumberish,
      destinationAddress: AddressLike,
      zetaValue: BigNumberish,
      message: BytesLike,
      internalSendHash: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "onRevert"
  ): TypedContractMethod<
    [
      zetaTxSenderAddress: AddressLike,
      sourceChainId: BigNumberish,
      destinationAddress: BytesLike,
      destinationChainId: BigNumberish,
      remainingZetaValue: BigNumberish,
      message: BytesLike,
      internalSendHash: BytesLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "send"
  ): TypedContractMethod<
    [input: ZetaInterfaces.SendInputStruct],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "setWzetaAddress"
  ): TypedContractMethod<[wzeta_: AddressLike], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "wzeta"
  ): TypedContractMethod<[], [string], "view">;

  getEvent(
    key: "SetWZETA"
  ): TypedContractEvent<
    SetWZETAEvent.InputTuple,
    SetWZETAEvent.OutputTuple,
    SetWZETAEvent.OutputObject
  >;
  getEvent(
    key: "ZetaReceived"
  ): TypedContractEvent<
    ZetaReceivedEvent.InputTuple,
    ZetaReceivedEvent.OutputTuple,
    ZetaReceivedEvent.OutputObject
  >;
  getEvent(
    key: "ZetaReverted"
  ): TypedContractEvent<
    ZetaRevertedEvent.InputTuple,
    ZetaRevertedEvent.OutputTuple,
    ZetaRevertedEvent.OutputObject
  >;
  getEvent(
    key: "ZetaSent"
  ): TypedContractEvent<
    ZetaSentEvent.InputTuple,
    ZetaSentEvent.OutputTuple,
    ZetaSentEvent.OutputObject
  >;

  filters: {
    "SetWZETA(address)": TypedContractEvent<
      SetWZETAEvent.InputTuple,
      SetWZETAEvent.OutputTuple,
      SetWZETAEvent.OutputObject
    >;
    SetWZETA: TypedContractEvent<
      SetWZETAEvent.InputTuple,
      SetWZETAEvent.OutputTuple,
      SetWZETAEvent.OutputObject
    >;

    "ZetaReceived(bytes,uint256,address,uint256,bytes,bytes32)": TypedContractEvent<
      ZetaReceivedEvent.InputTuple,
      ZetaReceivedEvent.OutputTuple,
      ZetaReceivedEvent.OutputObject
    >;
    ZetaReceived: TypedContractEvent<
      ZetaReceivedEvent.InputTuple,
      ZetaReceivedEvent.OutputTuple,
      ZetaReceivedEvent.OutputObject
    >;

    "ZetaReverted(address,uint256,uint256,bytes,uint256,bytes,bytes32)": TypedContractEvent<
      ZetaRevertedEvent.InputTuple,
      ZetaRevertedEvent.OutputTuple,
      ZetaRevertedEvent.OutputObject
    >;
    ZetaReverted: TypedContractEvent<
      ZetaRevertedEvent.InputTuple,
      ZetaRevertedEvent.OutputTuple,
      ZetaRevertedEvent.OutputObject
    >;

    "ZetaSent(address,address,uint256,bytes,uint256,uint256,bytes,bytes)": TypedContractEvent<
      ZetaSentEvent.InputTuple,
      ZetaSentEvent.OutputTuple,
      ZetaSentEvent.OutputObject
    >;
    ZetaSent: TypedContractEvent<
      ZetaSentEvent.InputTuple,
      ZetaSentEvent.OutputTuple,
      ZetaSentEvent.OutputObject
    >;
  };
}
