---
sidebar_position: 1
---

# BUIDL on Evmos: Testnet Guide

Welcome builders! We are excited to have you build on Evmos. This guide will provide an overview of the
available resources, infrastructure, and socials to get you running. This guide will be updated frequently
to reflect the latest and greatest on Evmos.

:::note
To find the latest and greatest, head over to our [developer docs](https://docs.evmos.org/).
:::

## EVM extensions

The Evmos Core Team is continually improving and adding new features to our Extensions. For the latest ABI, examples,
and features, head over to [this repo](https://github.com/evmos/extensions).

Here at the Academy, Evmos will continue to create articles on each EVM Extensions feature release. The current ones
available are all located [here](http://docs.evmos.org/develop/smart-contracts/evm-extensions/authorization)

## Networks and API

For the latest [Networks](https://docs.evmos.org/develop/api/networks#testnet) for testnet whereby builders can find
out information about pruned and archival nodes.

[Testnet API](https://api.evmos.dev/) endpoints, powered by Swagger.

## Wallets

Evmos supports a wide gamut of wallets. To see the latest head over [here](https://docs.evmos.org/use/wallet).
However, we recommend using Metamask, Keplr, WalletConnect, and Ledger.

:::tip
If you are using Keplr for Testnet, and need to add Testnet configuration to the wallet, head over [here](https://docs.evmos.org/develop/testnet) and
click on the `Add Configuration to Testnet`.
:::

Testnet tokens can be obtained from our faucet, located [here](https://faucet.evmos.dev/). The faucet will emit
0.1 tEVMOS every 12 hours. If your project needs more than the faucet, please do not hesitate to reach out to our
[Telegram Builders Channel](https://t.me/EvmosBuilders) or as one of our testnet validators on
[Discord](https://discord.gg/evmos) `validators-testnet` under `Validator Station` section can help out.

## Block explorers

- [Escan](https://testnet.escan.live/) supports both EVM and Cosmos transactions. Note that this testnet
block explorer does not have complete historical state. This block explorer supports contract verification
permissionlessly.
- [Mintscan](https://testnet.mintscan.io/evmos-testnet/) supports both EVM and Cosmos transactions. The depth of
EVM data is not as extensive as Escan but Mintscan has historical dataset to query. The search bar will only support
Cosmos transaction hashes.

## Client library

The official support client library is [EvmosJS](https://github.com/evmos/evmosjs). Users will also need
[EthersJS](https://docs.ethers.org/v5/) or [web3](https://web3js.readthedocs.io/) to interact with contract
and building a full-stack app.

If you need seek to integrate a wallet with EvmosJS, then [this guide](./../advanced/wallet-integration) can guide
the implementation.

## Indexers

Evmos has a wide array of indexers to choose from and for the latest, please head over [here](https://docs.evmos.org/develop/graphs-indexers).

## Oracles

A list of latest oracles are [here](https://docs.evmos.org/develop/oracles).

## Evmos modules

The Evmos blockchain contains homegrown modules and more details can be found [here](https://docs.evmos.org/protocol/modules) alongside ones
from the [Cosmos SDK](https://docs.evmos.org/protocol/modules).

A list of our Ethereum JSON-RPC can be found [here](https://docs.evmos.org/develop/api/ethereum-json-rpc).

## Stay connected

Evmos is always here to help. The community and the Core Team can easily be reached here:

- [Builder's Group on Telegram](https://t.me/EvmosBuilders)
- [Community Calendar](https://calendar.google.com/calendar/embed?src=c_grfooiam12n63762eld4ntue48%40group.calendar.google.com&ctz=America%2FLos_Angeles)
- [Discord](https://discord.gg/evmos)
- [Twitter](https://twitter.com/EvmosOrg)

## Conclusion

We hope this guide has been helpful. Please share this guide with anyone. If we are missing anything, please feel free to contribute
or reach out and we will add to this guide. Happy building!

## Useful resources

- [Evmos docs](https://docs.evmos.org/)
- [Getting started on Testnet Workshop (DoraHacks Hackathon)](https://www.youtube.com/live/pzk70FaqtQE?feature=share)
- [Diving into EVM Extensions Workshop (DoraHacks Hackathon)](https://www.youtube.com/live/pJhOfZ0ScAE?feature=share)
