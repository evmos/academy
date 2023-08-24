---
sidebar_position: 1
---

# Automated Coin Conversion

Learn how to the Automated Coin Conversion feature works.

In their
[ERC-20](https://ethereum.org/en/developers/docs/standards/tokens/erc-20/)
representation, assets can be used to interact with dApps using the EVM. This
standard allows developers to build applications that are interoperable with
other products and services. In their Cosmos Coin representation (as IBC token),
they can be transferred between accounts on Evmos and other Cosmos chains using
IBC. They cannot, however, be used to interact with dApps on Evmos, as Cosmos
Coins are not supported by the EVM since they don’t implement the ERC-20
standard.

In order to reduce end-user complexity, Evmos should only allow single-token
representation use between IBC and ERC-20 tokens. Consequently, the Evmos team
developed the Automated Coin Conversion feature to achieve this goal. It
converts incoming IBC to ERC-20 tokens and modifies outgoing IBC transfers to
convert ERC-20 to IBC tokens. This automated conversion occurs if, and *only*
if, the appropriate token pair was registered through governance. If the token
pair is not registered, the IBC token will be left as is.

## Outbound transactions

Your users may want to move their ERC-20 tokens from Evmos onto other Cosmos chains.
The automated coin conversion feature simplifies this operation, because it enables you
to send ERC-20 tokens cross-chain (via an IBC transfer) in a single step.

To do so, you only need to ensure that the corresponding denomination is passed
as a parameter, when performing an outgoing [transfer via IBC](https://ibc.cosmos.network/main/apps/transfer/messages.html#msgtransfer).

```go
type MsgTransfer struct {
 // ...
 // the tokens to be transferred
 Token types.Coin `protobuf:"bytes,3,opt,name=token,proto3" json:"token"`
 // ...
}

type Coin struct {
 Denom  string `protobuf:"bytes,1,opt,name=denom,proto3" json:"denom,omitempty"`
 Amount Int    `protobuf:"bytes,2,opt,name=amount,proto3,customtype=Int" json:"amount"`
}
```

### ERC20 token pairs

For [ERC-20 tokens that were deployed on the Evmos chain and then registered through governance](./erc20-registration.md) to support cross-chain transfer, you will have to specify the
corresponding IBC denom (e.g. `erc20/0xe46910336479F254723710D57e7b683F3315b22B`)
in the ibc transfer parameter:

```
token_pair:
  contract_owner: OWNER_EXTERNAL
  denom: erc20/0xe46910336479F254723710D57e7b683F3315b22B
  enabled: true
  erc20_address: 0xe46910336479F254723710D57e7b683F3315b22B
```

### Cosmos token pairs

For [Cosmos tokens that were registered through governance](./cosmos-coin-registration.md) to support usage on
the EVM (e.g. OSMO), you can specify the corresponding IBC denom (e.g.
`ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518`) or their
alias (e.g. `uosmo`):

```
token_pair:
  contract_owner: OWNER_MODULE
  denom: ibc/ED07A3391A112B175915CD8FAF43A2DA8E4790EDE12566649D0C2F97716B8518
  enabled: true
  erc20_address: 0xFA3C22C069B9556A4B2f7EcE1Ee3B467909f4864
```

## Inbound transactions

Your users may want to move IBC Coins from other Cosmos chains onto Evmos.
To use these IBC coins on dApps deployed on Evmos, they need an ERC-20 representation of these.
The automated coin conversion feature automatically converts the incoming IBC coins into their ERC-20 representation.
In this way, you don't need to manually convert the incoming IBC coins into ERC-20 tokens.
As a result, your users can use the IBC coins as ERC-20 tokens as soon as they arrive to their wallets.

It should be considered that only registered token pairs are converted.
If the token pair is not registered,
users will receive the corresponding IBC coin on their wallet without any further changes.

:::tip
**Note**: If your users have IBC coins on Evmos already,
and they receive an IBC transfer in the denomination of an already registered token pair,
their **whole balance** will be converted to the ERC20 format
(i.e the current balance plus the transfer amount).
:::

## FAQ

<details>

<summary><b>How do I send an ERC-20 via IBC?</b></summary>

With the new automated coin conversion feature, you can send ERC-20 via IBC right away.
The conversion step is done automatically under the hood.
To do this operation you only need to specify the corresponding denomination on the `MsgTransfer` struct.
For example, if we want to send an ERC-20 token called `TestCoin` via IBC,
use `Token.Denom = "erc20/<test-coin-contract-address>"`.
Keep in mind that to perform this operation, you need to
[register the token pair](./erc20-registration.md) previously.

</details>

<details>

<summary><b>Can I send WEVMOS to other chains?</b></summary>

WEVMOS transfers are not supported at the moment.
However, you can unwrap manually the WEVMOS tokens
using the [Evmos dashboard](https://app.evmos.org/assets) or [Diffusion](https://app.diffusion.fi/).
Then you can perform a regular IBC transfer using the EVMOS tokens.

</details>

<details>

<summary><b>Does automated coin conversion apply to all coins?</b></summary>

The automated coin conversion covers all IBC coins and ERC-20 tokens
as long as the appropriate token mapping was registered through governance
([guide to register an ERC-20 token](./erc20-registration.md)).
If the token pair is not registered, the IBC coin will be left as is.
Additionally, EVMOS token conversion is not automated.
Considering that the EVMOS token is used for staking and paying gas fees,
the team decided to exclude the native token automated conversion.
Thus, the user experience is not undermined by this feature.

</details>

<details>

<summary><b>How do I convert the EVMOS token to ERC-20?</b></summary>

The conversion from EVMOS token to WEVMOS is not automated.
If you want to convert EVMOS tokens into its ERC-20 representation,
you will need to use [the Assets page](https://app.evmos.org/assets).

</details>

<details>

<summary><b>Do I still need to use [the Assets page](https://app.evmos.org/assets)?</b></summary>

Yes! If you want to convert EVMOS tokens into their ERC-20 representation,
you will need to do it manually on [the Assets page](https://app.evmos.org/assets).
EVMOS token automated conversion was excluded in this feature
because it is used for staking, governance and paying for gas on the EVM.
Additionally, you can still manually convert IBC coins to ERC-20 tokens.
On top of that, the assets page allows you to see all your token balances.

</details>
