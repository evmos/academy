---
sidebar_position: 10
---


# Wallet Integration

:::tip
**Note**: want to learn more about wallet integration beyond what's covered here?
Check out both the [MetaMask Wallet Documentation](https://docs.metamask.io/guide/)
and [Keplr Wallet Documentation](https://docs.keplr.app/).
:::


## Installation

Follow the build and installation instructions specified in
[EvmosJS](https://github.com/evmos/evmosjs#installation) to get setup.

## Packages

Visit our documentation on 
[client integrations](https://docs.evmos.org/develop/tools/client-integrations)
to learn more about [EvmosJS](https://github.com/evmos/evmosjs) and
the libraries we recommend in integrations.

## Overview

The integration checklist for dApp developers consists of three categories:

1. [Frontend](#frontend)
2. [Client Queries](#queries)
3. [Signing Transactions](#send-cosmos-transactions)

## Frontend

Make sure to create a wallet-connection button for Metamask and/or Keplr on the frontend of the application.
For instance, consider the "Connect to a wallet" button on
the interface of [EvmoSwap](https://app.evmoswap.org/swap)
or the analogous button on the interface of [Evmos Dashboard Assets](https://app.evmos.org/assets).

### Identify the User's Wallet

Developers should determine whether users are using Keplr or MetaMask.
This can be determined by checking the corresponding `window.ethereum` or `window.keplr` value.

If either `window.ethereum` or `window.keplr` returns `undefined` after `document.load`,
then MetaMask (or Keplr) is not installed.
There are several ways to wait for the load event to check the status:
developers can register functions to `window.onload`,
or they can track the document's ready state through the document event listener.
If developer is checking for the document state's readiness,
then `document.readyState === 'complete'` is a suitable check.

```ts
const userHasMetaMask = window.ethereum;
const userHasKeplr = window.keplr;

if (!userHasMetaMask && !userHasKeplr) {
    // Handle error accordingly.
    // ...
}
```

After determining the wallet type, developers can list a user's
connected accounts.

### Get Connected Accounts

:::tip
**Note**: The example below uses the Evmos Mainnet `chainID`.
For more info, check the Evmos Chain IDs reference document
[here](https://docs.evmos.org/protocol/concepts/chain-id).
:::

Developers can fetch a user's address in order to query account information and sign transactions.

#### Keplr

```ts
const chainId = 'evmos_9001-2'
await window.keplr.enable(chainId)
const account = await window.keplr.getKey(chainId)

// See the account schema here:
// https://github.com/chainapsis/keplr-wallet/blob/77b91ddbb031fb1c539f22b0f9b0988919322ecc/packages/types/src/wallet/keplr.ts#L15
```

#### MetaMask

```ts
import { ethToEvmos } from '@evmos/address-converter'

// Note that MetaMask uses numeric ChainIDs.
const chainId = 9001

await window.ethereum.enable(chainId)

// Accounts is a list of Ethereum hex addresses.
const accounts = await window?.ethereum?.request({
  method: 'eth_requestAccounts',
})

// Address is a Bech32-encoded Evmos address.
const address = ethToEvmos(accounts[0])
```

## Queries

After fetching a user's address, developers can query the node for a user's account fields,
in order to generate [Cosmos Transaction](https://docs.cosmos.network/main/core/transactions)
payloads.

### Query Account Information

```ts
import { generateEndpointAccount } from '@evmos/provider'

const address = 'evmos1...'

// Find node urls for either mainnet or testnet here:
// https://docs.evmos.org/develop/api/networks.
const nodeUrl = '...'
const queryEndpoint = `${nodeUrl}${generateEndpointAccount(address)}`

const restOptions = {
  method: 'GET',
  headers: { 'Content-Type': 'application/json' },
}

// Note that the node will return a 400 status code if the account does not exist.
const rawResult = await fetch(
  queryEndpoint,
  restOptions,
)

const result = await rawResult.json()

// The response format is available at @evmos/provider/rest/account/AccountResponse.
// Note that the `pub_key` will be `null` if the address has not sent any transactions.
/*
  account: {
    '@type': string
    base_account: {
      address: string
      pub_key?: {
        '@type': string
        key: string
      }
      account_number: string
      sequence: string
    }
    code_hash: string
  }
*/
```

### Retrieve a User's Public Key

If the public key is not returned with the query above, developers must retrieve the public
key using the wallet. The public key is needed to sign Cosmos transactions.

#### Keplr

```ts
const chainID = 'evmos_9001-2'
const account = await window?.keplr?.getKey(chainID)
const pk = Buffer.from(account.pubKey).toString('base64')
```

#### MetaMask

```ts
import { hashMessage } from '@ethersproject/hash'
import {
  computePublicKey,
  recoverPublicKey,
} from '@ethersproject/signing-key'

// ...

const accounts = await window?.ethereum?.request({
  method: 'eth_requestAccounts',
})

// Handle errors if MetaMask fails to return any accounts.

// Since MetaMask does not provide an interface to retrieve a user's
// public key, we must sign a message and ecrecover the key.
const message = 'Verify Public Key'
const signature = await window?.ethereum?.request({
  method: 'personal_sign',
  params: [message, accounts[0], ''],
})

const uncompressedPk = recoverPublicKey(
  hashMessage(message),
  signature,
)

const hexPk = computePublicKey(uncompressedPk, true)

const pk = Buffer.from(
  hexPk.replace('0x', ''), 'hex',
).toString('base64')
```

## Send Cosmos Transactions

After obtaining a user's account information, developers can begin [creating](#create-the-transaction),
[signing](#sign-the-transaction), and [broadcasting](#broadcast-the-transaction) transactions.

### Create the Transaction

Developers can create transaction payloads using the official [EvmosJS](https://github.com/evmos/evmosjs) library.
Here is an example, using the Cosmos [MsgSend](https://docs.cosmos.network/main/modules/bank#msgsend) payload.

```ts
import {
  Chain,
  Sender,
  Fee,
  TxContext,
  MsgSendParams,
  createTxMsgSend,
  TxPayload,
} from '@evmos/transactions'

const chain: Chain = {
  chainId: 9001,
  cosmosChainId: 'evmos_9001-2',
}

// Populate the transaction sender parameters using the
// query API.
const sender: Sender = {
  accountAddress: <sender_account_address>,
  sequence: <sender_sequence>,
  accountNumber: <sender_account_number>,
  // Use an empty string if the pubkey is unknown.
  pubkey: <sender_pub_key>,
}

const fee: Fee = {
  amount: '4000000000000000',
  denom: 'aevmos',
  gas: '200000',
}

const memo = ''

const context: TxContext = {
  chain,
  sender,
  fee,
  memo,
}

const params: MsgSendParams = {
  destinationAddress: <destination_address>,
  amount: <transaction_amount>,
  denom: 'aevmos',
}

const tx: TxPayload = createTxMsgSend(context, params)
```

### Sign the Transaction

After creating the transaction, developers need to send the payload to the appropriate wallet to be signed.

To sign a payload **using MetaMask**, developers are encouraged to
use the [EIP-712](https://eips.ethereum.org/EIPS/eip-712)
signing format, as this is compatible with the Ledger Ethereum app.

To sign a payload **using Keplr with a Ledger device**, developers must use the
[EIP-712](https://eips.ethereum.org/EIPS/eip-712) signing format, since the
Ledger Ethereum app cannot sign native Cosmos payloads. Evmos
uses different signing and address generation than that of the
Cosmos Ledger app, which is thus incompatible.

To sign a payload **using Keplr otherwise**, developers may
use either the [EIP-712](https://eips.ethereum.org/EIPS/eip-712)
signing format or the native Cosmos `SignDirect` format.
We encourage using the `SignDirect` format, since it provides
a native signing experience.

#### Sign the Transaction with MetaMask (EIP-712)

Evmos supports EIP-712 signatures to sign [Cosmos transactions](https://docs.cosmos.network/main/core/transactions)
using Ethereum wallets such as MetaMask.

```ts
import { createTxRaw } from '@evmos/proto'
import { evmosToEth } from '@evmos/address-converter'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create the Transaction' to learn how to create these).
const context = ...
const tx = ...

const { sender } = context

// Initialize MetaMask and sign the EIP-712 payload.
await window.ethereum.enable()

const senderHexAddress = evmosToEth(sender.accountAddress)
const eip712Payload = JSON.stringify(tx.eipToSign)

const signature = await window.ethereum.request({
  method: 'eth_signTypedData_v4',
  params: [senderHexAddress, eip712Payload],
})

// Create a signed Tx payload that can be broadcast to a node.
const signatureBytes = Buffer.from(signature.replace('0x', ''), 'hex')

const { signDirect } = tx
const bodyBytes = signDirect.body.toBinary()
const authInfoBytes = signDirect.authInfo.toBinary()

const signedTx = createTxRaw(
  bodyBytes,
  authInfoBytes,
  [signatureBytes],
)
```

#### Sign the Transaction with Keplr (SignDirect)

Sign a native [Cosmos transaction](https://docs.cosmos.network/main/core/transactions)
using Keplr.

```ts
import { createTxRaw } from '@evmos/proto'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { chain, sender } = context
const { signDirect } = tx

const signResponse = await window?.keplr?.signDirect(
  chain.cosmosChainId,
  sender.accountAddress,
  {
    bodyBytes: signDirect.body.toBinary(),
    authInfoBytes: signDirect.authInfo.toBinary(),
    chainId: chain.cosmosChainId,
    accountNumber: new Long(sender.accountNumber),
  },
)

if (!signResponse) {
  // Handle signature failure here.
}

const signatures = [
  new Uint8Array(Buffer.from(signResponse.signature.signature, 'base64')),
]

const { signed } = signResponse

const signedTx = createTxRaw(
  signed.bodyBytes,
  signed.authInfoBytes,
  signatures,
)
```

#### Sign the Transaction with Keplr (EIP-712)

Sign an EIP-712 payload using Keplr in order to support Ledger users on Keplr.

```ts
import { EthSignType } from '@keplr-wallet/types';
import { createTxRaw } from '@evmos/proto'

// First, populate a TxContext object and create a signable Tx payload.
// (See 'Create a Signable Transaction' to learn how to create these).
const context = ...
const tx = ...

const { chain, sender } = context

const eip712Payload = JSON.stringify(tx.eipToSign)
const signature = await window?.keplr?.signEthereum(
  chain.cosmosChainId,
  sender.accountAddress,
  eip712Payload,
  EthSignType.EIP712,
)

if (!signature) {
  // Handle signature failure here.
}

const { signDirect } = tx
const bodyBytes = signDirect.body.toBinary()
const authInfoBytes = signDirect.authInfo.toBinary()

const signedTx = createTxRaw(
  bodyBytes,
  authInfoBytes,
  [signature],
)
```

### Broadcast the Transaction

Broadcasting takes place the same way for all Cosmos transactions, regardless of how
they are signed.

```ts
import {
  generateEndpointBroadcast,
  generatePostBodyBroadcast,
} from '@evmos/provider'

// First, sign a transaction using MetaMask or Keplr.
const signedTx = createTxRaw(...)

// Find a node URL from a network endpoint:
// https://docs.evmos.org/develop/api/networks.
const nodeUrl = ...

const postOptions = {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: generatePostBodyBroadcast(signedTx),
}

const broadcastEndpoint = `${nodeUrl}${generateEndpointBroadcast()}`
const broadcastPost = await fetch(
  broadcastEndpoint,
  postOptions,
)

const response = await broadcastPost.json()
```

## Send Ethereum Transactions

In addition to Cosmos transactions, developers can generate, sign, and broadcast
Ethereum Virtual Machine (EVM) payloads. Both MetaMask and Keplr offer this functionality.

### Sign EVM Transaction using MetaMask

Signing EVM transactions using MetaMask follows the same procedure as on any
other EVM chain. See [MetaMask's documentation](https://docs.metamask.io/guide/sending-transactions.html)
for more information.

```ts
const transactionParameters = {
  nonce: '0x00', // ignored by MetaMask
  gasPrice: '0x09184e72a000', // customizable by user during MetaMask confirmation.
  gas: '0x2710', // customizable by user during MetaMask confirmation.
  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  from: ethereum.selectedAddress, // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  data:
    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by MetaMask.
}

const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [transactionParameters],
})
```

### Sign EVM Transaction using Keplr

Keplr supports signing EVM transactions from the wallet. These must be
broadcast using a provider, such as that from
[ethersjs](https://docs.ethers.org/v5/).

```ts
import { JsonRpcProvider } from '@ethersproject/providers'
import { evmosToEth } from '@evmos/address-converter'

// Find an Ethereum JSON-RPC node url for either mainnet or testnet here:
// https://docs.evmos.org/develop/api/networks.
const nodeUrl = '...'

const provider = new JsonRpcProvider(nodeUrl)
const chainId = 'evmos_9001-2';

await window.keplr.enable(chainId);

const offlineSigner = window.getOfflineSigner(chainId);
let wallets = await offlineSigner.getAccounts();
const signerAddressBech32 = wallets[0].address;

const signerAddress = evmosToEth(signerAddressBech32);

let rawTx = {
  chainId: 9001, // Use 9000 for testnet
  to: <destination_address>,
  value: <value>,
  data: <data>,
  accessList: [],
  type: 2, // Use type=2 to specify EIP-1559-style transaction
}

// Calculate and set nonce
const nonce = await provider.getTransactionCount(signerAddress)
rawTx['nonce'] = nonce

// Calculate and set gas fees
const gasLimit = await provider.estimateGas(rawTx)
const gasFee = await provider.getFeeData()

rawTx['gasLimit'] = gasLimit.toHexString()
if (!gasFee.maxPriorityFeePerGas || !gasFee.maxFeePerGas) { 
  // Handle error
  return
}

rawTx['maxPriorityFeePerGas'] = gasFee.maxPriorityFeePerGas.toHexString();
rawTx['maxFeePerGas'] = gasFee.maxFeePerGas.toHexString();

const signedTx = await window.keplr.signEthereum(
  chainId,
  signerAddressBech32,
  JSON.stringify(rawTx),
  'transaction'
);

const res = await provider.sendTransaction(signedTx);
console.log(res);

// Result:
// {
//   chainId: 1337,
//   confirmations: 0,
//   data: '0x',
//   from: '0x8577181F3D8A38a532Ef8F3D6Fd9a31baE73b1EA',
//   gasLimit: { BigNumber: "21000" },
//   gasPrice: { BigNumber: "1" },
//   hash: '0x200818a533113c00057ceccd3277249871c4a1ac09514214f03c3b96099b6c92',
//   nonce: 4,
//   r: '0x1727bd07080a5d3586422edad86805918e9772adda231d51c32870a1f1cabffb',
//   s: '0x7afc6be528befb79b9ed250356f6eacd63e853685091e9a3987a3d266c6cb26a',
//   to: '0x5555763613a12D8F3e73be831DFf8598089d3dCa',
//   type: null,
//   v: 2709,
//   value: { BigNumber: "3141590000000000000" },
//   wait: [Function]
// }
```
