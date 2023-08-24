# Terminology

:::tip
Below you will find commonly encountered terminologies in the blockchain industry.
:::

## EVM Extensions

EVM extensions are also known as precompiles and this feature enables specific functions that are implemented directly in the EVM in order to perform certain operations more efficiently than would be possible in general-purpose smart contract code.
They are a kind of specialized instruction set built into the EVM that performs specific cryptographic and mathematical operations.
Some examples of EVM precompiles include elliptic curve addition, scalar multiplication, and hash functions such as SHA256 and Keccak-256.

By incorporating these functions directly into the EVM, their execution is faster and more efficient than if they were implemented in regular contract code.
This can help reduce the amount of gas needed to perform these operations, making them more cost-effective for users.
EVM precompiles play a critical role in enabling certain types of applications and protocols on the Ethereum network, including zero-knowledge proofs, payment channels, and state channel networks.

## IBC Transfer

It stands for [InterBlockchain Communication Transfer](https://github.com/cosmos/ibc) is an open-source protocol that enables the transfer of data and value between different blockchain networks.
This is important because it allows for interoperability between different blockchain systems, enabling them to exchange information and assets in a secure and decentralized manner.
IBC is seen as a key step towards building a decentralized ecosystem where different blockchain networks can work together to provide a more diverse range of services to users.
Evmos has IBC transfer enabled with other sovereign chains in the Cosmos ecosystem.

## Private Key

A private key is a cryptographic key that is used to access information or perform transactions in a secure manner.
In the context of public key cryptography, a private key is used to decrypt encrypted messages or to create digital signatures.
The private key is intended to be kept secret by the owner, and should not be disclosed to others.

## Wallets

They are used to store, manage, and protect digital currencies (i.e. Evmos).
These wallets use cryptographic algorithms to secure the private keys that are used to access the cryptocurrency stored in the wallet.
The private keys are generated and stored on the user's device, and are used to sign transactions that transfer cryptocurrency from the wallet to other addresses.
Cryptographic wallets come in various forms, including software wallets that run on a user's computer or mobile device, hardware wallets that are separate physical devices, and web wallets that run on a website.
Each type of wallet has its own security features, and users must choose the one that best meets their needs based on factors such as convenience, security, and ease of use.

## ERC20

ERC20 is a standard interface for Ethereum smart contracts, which is used to create and manage fungible tokens on the Ethereum blockchain.
The term "ERC20" stands for "Ethereum Request for Comments 20".
ERC20 This standardization makes it easier for developers to create and manage tokens on the Ethereum network, as it ensures that all ERC20 tokens work together seamlessly.
t this time [Keplr](https://community.evmos.org/learn/wallets/keplr) does not yet support ERC20.
So you will need to use a campatable wallet such as [Metamask](https://community.evmos.org/learn/wallets/metamask)

## ICS20

ICS20 is a standard for creating and managing fungible tokens on the Cosmos Network.
The term "ICS20" stands for "Interchain Standard 20".
Similar to ERC20 for Ethereum, ICS20 provides a set of specifications and functions that define how tokens can be transferred, how to access their balances, and how to get the total supply of the token.
This is the standardization on the Cosmos Network, and ensures that all ICS20 tokens work together seamlessly.
