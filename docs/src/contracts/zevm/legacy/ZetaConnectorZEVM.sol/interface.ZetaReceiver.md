# ZetaReceiver
[Git Source](https://github.com/zeta-chain/protocol-contracts/blob/main/contracts/zevm/legacy/ZetaConnectorZEVM.sol)


## Functions
### onZetaMessage

*onZetaMessage is called when a cross-chain message reaches a contract*


```solidity
function onZetaMessage(ZetaInterfaces.ZetaMessage calldata zetaMessage) external;
```

### onZetaRevert

*onZetaRevert is called when a cross-chain message reverts.
It's useful to rollback to the original state*


```solidity
function onZetaRevert(ZetaInterfaces.ZetaRevert calldata zetaRevert) external;
```

