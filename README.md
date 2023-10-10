# Solace Keynet SDK

## Overview

Solace Keynet SDK is a JavaScript library designed to interact with Solace Keynet. It provides a set of functions to manage wallets, get nonces, signatures, public keys, and rulebooks, as well as store rules.

## Installation

```bash
npm install solace-keynet-sdk
```

## Functions

### `createWallet(createWalletData: CreateWalletData)`

Creates a new wallet.

#### Parameters

- `createWalletData`: Object
  - `namespace`: String
  - `walletAddr`: String
  - `signature`: String

### `getNonce(walletAddr: string)`

Gets the nonce for a given wallet address.

#### Parameters

- `walletAddr`: String

### `getSignature(txHash: string)`

Gets the signature for a given transaction hash.

#### Parameters

- `txHash`: String

### `getPubKey(walletAddr: string)`

Gets the public key for a given wallet address.

#### Parameters

- `walletAddr`: String

### `getRulebook(walletAddr: string)`

Gets the rulebook for a given wallet address.

#### Parameters

- `walletAddr`: String

### `storeRule(createRuleData: CreateACLData)`

Stores a rule.

#### Parameters

- `createRuleData`: Object
  - `walletAddr`: String
  - `signature`: String
  - `rule`: Object
    - `namespace`: String
    - `senderGroup`: Object
      - `addrs`: Array of Strings
      - `name`: String
    - `recipientAddr`: String
    - `tokenAddr`: String

## Types

### `CreateWalletData`

- `namespace`: String
- `walletAddr`: String
- `signature`: String

### `CreateACLData`

- `walletAddr`: String
- `signature`: String
- `rule`: Object
  - `namespace`: String
  - `senderGroup`: Object
    - `addrs`: Array of Strings
    - `name`: String
  - `recipientAddr`: String
  - `tokenAddr`: String

## Examples

### Create Wallet

```javascript
const { createWallet } = require("solace-keynet-sdk");

const data = {
  namespace: "myNamespace",
  walletAddr: "0x123...",
  signature: "0xabc...",
};

createWallet(data);
```

### Get Nonce

```javascript
const { getNonce } = require("solace-keynet-sdk");

const walletAddr = "0x123...";
getNonce(walletAddr);
```

## License

MIT
