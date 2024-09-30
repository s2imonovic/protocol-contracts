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

export type RevertContextStruct = {
  sender: AddressLike;
  asset: AddressLike;
  amount: BigNumberish;
  revertMessage: BytesLike;
};

export type RevertContextStructOutput = [
  sender: string,
  asset: string,
  amount: bigint,
  revertMessage: string
] & { sender: string; asset: string; amount: bigint; revertMessage: string };

export interface IERC20CustodyInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "whitelisted"
      | "withdraw"
      | "withdrawAndCall"
      | "withdrawAndRevert"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic:
      | "Deposited"
      | "Unwhitelisted"
      | "UpdatedCustodyTSSAddress"
      | "Whitelisted"
      | "Withdrawn"
      | "WithdrawnAndCalled"
      | "WithdrawnAndReverted"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "whitelisted",
    values: [AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdraw",
    values: [AddressLike, AddressLike, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndCall",
    values: [AddressLike, AddressLike, BigNumberish, BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawAndRevert",
    values: [
      AddressLike,
      AddressLike,
      BigNumberish,
      BytesLike,
      RevertContextStruct
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "whitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "withdraw", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndCall",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "withdrawAndRevert",
    data: BytesLike
  ): Result;
}

export namespace DepositedEvent {
  export type InputTuple = [
    recipient: BytesLike,
    asset: AddressLike,
    amount: BigNumberish,
    message: BytesLike
  ];
  export type OutputTuple = [
    recipient: string,
    asset: string,
    amount: bigint,
    message: string
  ];
  export interface OutputObject {
    recipient: string;
    asset: string;
    amount: bigint;
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UnwhitelistedEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace UpdatedCustodyTSSAddressEvent {
  export type InputTuple = [newTSSAddress: AddressLike];
  export type OutputTuple = [newTSSAddress: string];
  export interface OutputObject {
    newTSSAddress: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WhitelistedEvent {
  export type InputTuple = [token: AddressLike];
  export type OutputTuple = [token: string];
  export interface OutputObject {
    token: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnEvent {
  export type InputTuple = [
    to: AddressLike,
    token: AddressLike,
    amount: BigNumberish
  ];
  export type OutputTuple = [to: string, token: string, amount: bigint];
  export interface OutputObject {
    to: string;
    token: string;
    amount: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnAndCalledEvent {
  export type InputTuple = [
    to: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    data: BytesLike
  ];
  export type OutputTuple = [
    to: string,
    token: string,
    amount: bigint,
    data: string
  ];
  export interface OutputObject {
    to: string;
    token: string;
    amount: bigint;
    data: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace WithdrawnAndRevertedEvent {
  export type InputTuple = [
    to: AddressLike,
    token: AddressLike,
    amount: BigNumberish,
    data: BytesLike,
    revertContext: RevertContextStruct
  ];
  export type OutputTuple = [
    to: string,
    token: string,
    amount: bigint,
    data: string,
    revertContext: RevertContextStructOutput
  ];
  export interface OutputObject {
    to: string;
    token: string;
    amount: bigint;
    data: string;
    revertContext: RevertContextStructOutput;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface IERC20Custody extends BaseContract {
  connect(runner?: ContractRunner | null): IERC20Custody;
  waitForDeployment(): Promise<this>;

  interface: IERC20CustodyInterface;

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

  whitelisted: TypedContractMethod<[token: AddressLike], [boolean], "view">;

  withdraw: TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;

  withdrawAndCall: TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;

  withdrawAndRevert: TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      revertContext: RevertContextStruct
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "whitelisted"
  ): TypedContractMethod<[token: AddressLike], [boolean], "view">;
  getFunction(
    nameOrSignature: "withdraw"
  ): TypedContractMethod<
    [token: AddressLike, to: AddressLike, amount: BigNumberish],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawAndCall"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike
    ],
    [void],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "withdrawAndRevert"
  ): TypedContractMethod<
    [
      token: AddressLike,
      to: AddressLike,
      amount: BigNumberish,
      data: BytesLike,
      revertContext: RevertContextStruct
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "Deposited"
  ): TypedContractEvent<
    DepositedEvent.InputTuple,
    DepositedEvent.OutputTuple,
    DepositedEvent.OutputObject
  >;
  getEvent(
    key: "Unwhitelisted"
  ): TypedContractEvent<
    UnwhitelistedEvent.InputTuple,
    UnwhitelistedEvent.OutputTuple,
    UnwhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "UpdatedCustodyTSSAddress"
  ): TypedContractEvent<
    UpdatedCustodyTSSAddressEvent.InputTuple,
    UpdatedCustodyTSSAddressEvent.OutputTuple,
    UpdatedCustodyTSSAddressEvent.OutputObject
  >;
  getEvent(
    key: "Whitelisted"
  ): TypedContractEvent<
    WhitelistedEvent.InputTuple,
    WhitelistedEvent.OutputTuple,
    WhitelistedEvent.OutputObject
  >;
  getEvent(
    key: "Withdrawn"
  ): TypedContractEvent<
    WithdrawnEvent.InputTuple,
    WithdrawnEvent.OutputTuple,
    WithdrawnEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawnAndCalled"
  ): TypedContractEvent<
    WithdrawnAndCalledEvent.InputTuple,
    WithdrawnAndCalledEvent.OutputTuple,
    WithdrawnAndCalledEvent.OutputObject
  >;
  getEvent(
    key: "WithdrawnAndReverted"
  ): TypedContractEvent<
    WithdrawnAndRevertedEvent.InputTuple,
    WithdrawnAndRevertedEvent.OutputTuple,
    WithdrawnAndRevertedEvent.OutputObject
  >;

  filters: {
    "Deposited(bytes,address,uint256,bytes)": TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;
    Deposited: TypedContractEvent<
      DepositedEvent.InputTuple,
      DepositedEvent.OutputTuple,
      DepositedEvent.OutputObject
    >;

    "Unwhitelisted(address)": TypedContractEvent<
      UnwhitelistedEvent.InputTuple,
      UnwhitelistedEvent.OutputTuple,
      UnwhitelistedEvent.OutputObject
    >;
    Unwhitelisted: TypedContractEvent<
      UnwhitelistedEvent.InputTuple,
      UnwhitelistedEvent.OutputTuple,
      UnwhitelistedEvent.OutputObject
    >;

    "UpdatedCustodyTSSAddress(address)": TypedContractEvent<
      UpdatedCustodyTSSAddressEvent.InputTuple,
      UpdatedCustodyTSSAddressEvent.OutputTuple,
      UpdatedCustodyTSSAddressEvent.OutputObject
    >;
    UpdatedCustodyTSSAddress: TypedContractEvent<
      UpdatedCustodyTSSAddressEvent.InputTuple,
      UpdatedCustodyTSSAddressEvent.OutputTuple,
      UpdatedCustodyTSSAddressEvent.OutputObject
    >;

    "Whitelisted(address)": TypedContractEvent<
      WhitelistedEvent.InputTuple,
      WhitelistedEvent.OutputTuple,
      WhitelistedEvent.OutputObject
    >;
    Whitelisted: TypedContractEvent<
      WhitelistedEvent.InputTuple,
      WhitelistedEvent.OutputTuple,
      WhitelistedEvent.OutputObject
    >;

    "Withdrawn(address,address,uint256)": TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;
    Withdrawn: TypedContractEvent<
      WithdrawnEvent.InputTuple,
      WithdrawnEvent.OutputTuple,
      WithdrawnEvent.OutputObject
    >;

    "WithdrawnAndCalled(address,address,uint256,bytes)": TypedContractEvent<
      WithdrawnAndCalledEvent.InputTuple,
      WithdrawnAndCalledEvent.OutputTuple,
      WithdrawnAndCalledEvent.OutputObject
    >;
    WithdrawnAndCalled: TypedContractEvent<
      WithdrawnAndCalledEvent.InputTuple,
      WithdrawnAndCalledEvent.OutputTuple,
      WithdrawnAndCalledEvent.OutputObject
    >;

    "WithdrawnAndReverted(address,address,uint256,bytes,tuple)": TypedContractEvent<
      WithdrawnAndRevertedEvent.InputTuple,
      WithdrawnAndRevertedEvent.OutputTuple,
      WithdrawnAndRevertedEvent.OutputObject
    >;
    WithdrawnAndReverted: TypedContractEvent<
      WithdrawnAndRevertedEvent.InputTuple,
      WithdrawnAndRevertedEvent.OutputTuple,
      WithdrawnAndRevertedEvent.OutputObject
    >;
  };
}
