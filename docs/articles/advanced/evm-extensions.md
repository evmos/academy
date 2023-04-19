---
sidebar_position: 10
---

# EVM Extensions

Learn how to use Evmos EVM extensions to include Evmos and Cosmos SDK modules functionalities in your smart contracts.

Stateful EVM Extensions on the core protocol allow dApps and users to access logic outside of the EVM.
Acting as a gateway, these EVM Extensions define how smart contracts can perform cross-chain transactions
(via IBC) and interact with core functionalities on the Evmos chain (e.g. staking, voting) from the EVM.

:::tip
**Note**: Not sure what EVM extensions are?
EVM extensions behave like smart contracts that are compiled and deployed within the EVM. If you are familiar with the EVM, you may know them as Precompiles.
These have predefined addresses and, according to their logic, can be classified as stateful or stateless.
When they change the state of the chain (transactions)
or access state data (queries), extensions are considered "stateful";
when they don't, they're "stateless."
Find a [list of the available EVM extensions in the Evmos documentation site](https://docs.evmos.org/develop/build-a-dapp/build-smart-contracts/evm_extensions).
:::

This article presents a step-by-step guide to use the EVM extensions
corresponding to the `staking` and `distribution` modules.
With these we are able to stake tokens with our favorite validator
and withdraw staking rewards from the Evmos protocol using a smart contract.

Let's get started!

## Prerequisites

- Know how to use [Remix IDE](https://remix.ethereum.org/).

## Resources

You will need this material to code along:

- [Remix IDE](https://remix.ethereum.org/)
- EVM extensions interfaces: [Distribution.sol](https://github.com/evmos/extensions/blob/main/precompiles/stateful/Distribution.sol)
  & [Staking.sol](https://github.com/evmos/extensions/blob/main/precompiles/stateful/Staking.sol)
- EVM extensions common types and authorization interfaces:
  [Types.sol](https://github.com/evmos/extensions/blob/main/precompiles/common/Types.sol),
  [Authorization.sol](https://github.com/evmos/extensions/blob/main/precompiles/common/Authorization.sol) &
  [GenericAuthorization.sol](https://github.com/evmos/extensions/blob/main/precompiles/common/GenericAuthorization.sol)
- Example contract that uses the EVM extensions:
  [SimpleStaker.sol](https://github.com/evmos/extensions/blob/main/examples/simple-staker/contracts/SimpleStaker.sol) contract

## Approvals

Before executing any transaction using the EVM Extensions,
the user interacting with the smart contract must first approve these.
In case of staking transactions, they should specify the amount allowed.
The smart contract developer can choose to either separate
the approval and execution of the EVM extensions transactions
or to combine them into a single transaction.

We have provided convenient constants (e.g.: `MSG_DELEGATE`, `MSG_UNDELEGATE`,
`MSG_WITHDRAW_DELEGATOR_REWARD`, `MSG_WITHDRAW_VALIDATOR_COMMISSION`) for easier use.

This is done by calling the `approve` function and will create an authorization grant for the given Cosmos SDK message.

Note that the `approve` method for the `Staking` extension is different
than the `Distribution` extension.
The `Staking` extension uses the [AuthorizationI](https://github.com/evmos/extensions/blob/a776030516f396af4e6cd5588f59103017c0e6fe/precompiles/common/Authorization.sol#L7)
interface, while the `Distribution` extension uses the [GenericAuthorizationI](https://github.com/evmos/extensions/blob/a776030516f396af4e6cd5588f59103017c0e6fe/precompiles/common/GenericAuthorization.sol#L7).

Use the corresponding method when approving methods for each EVM extension
(e.g., use `STAKING_CONTRACT.approve(...)` for staking methods,
and `DISTRIBUTION_CONTRACT.approve(...)` for distribution methods).

The [Simple Staker](https://github.com/evmos/extensions/blob/main/examples/simple-staker/contracts/SimpleStaker.sol) has the function `approveRequiredMethods()`
to perform the necessary approvals.
It approves the required methods for staking tokens (`MSG_DELEGATE`)
and withdraw staking rewards (`MSG_WITHDRAW_DELEGATOR_REWARD`)

## Step 1: Compile the contract

- Go to [Remix IDE](https://remix.ethereum.org/)
- Copy and paste the required solidity files:
  - [Distribution.sol](https://github.com/evmos/extensions/blob/main/precompiles/stateful/Distribution.sol)
  - [Staking.sol](https://github.com/evmos/extensions/blob/main/precompiles/stateful/Staking.sol)
  - [Types.sol](https://github.com/evmos/extensions/blob/main/precompiles/common/Types.sol)
  - [Authorization.sol](https://github.com/evmos/extensions/blob/main/precompiles/common/Authorization.sol)
  - [GenericAuthorization.sol](https://github.com/evmos/extensions/blob/main/precompiles/common/GenericAuthorization.sol)
  - [SimpleStaker.sol](https://github.com/evmos/extensions/blob/main/examples/simple-staker/contracts/SimpleStaker.sol)
- Fix the imports. If you're pasting all these files in the `contracts` directory,
  make sure to update the imports, for example, in `Staking.sol`:

  ```solidity
    import "../common/Authorization.sol" as authorization;
    import "../common/Types.sol";
  ```

  Replace with:

  ```solidity
    import "./Authorization.sol" as authorization;
    import "./Types.sol";
  ```

- Compile the contract with Remix

## Step 2: Run a local node

To start a localnode, you can use the [local_node.sh](https://github.com/evmos/evmos/blob/main/local_node.sh) script on Evmos repo.

If you didn't clone the repo already, run the following commands on your terminal:

```bash
git clone https://github.com/evmos/evmos.git
cd evmos
./local_node.sh
```

For more information on how to run a local node, refer to the [single node guide on Evmos docs](https://docs.evmos.org/protocol/evmos-cli/single-node).

## Step 3: Connect MetaMask to the local node

Follow [the corresponding guide on the Evmos docs](https://docs.evmos.org/use/connect-your-wallet/metamask) to achieve this.

## Step 4: Get some funds

For this step, you have two options:

### Option 1: Fund your MetaMask account

Using a terminal window, send some funds to your MetaMask address from one of the preconfigured keys on the local node.
To do this, use following commands:

```bash
ADDR=<YOUR_METAMASK_ADDR>
BECH32ADDR=$(evmosd debug addr $ADDR | grep "Bech32 Acc" | cut -c 13-56)
```

This will convert the hex address into the Bech32 format, which can be used in bank transfers using the CLI:

```bash
evmosd tx bank send dev0 $BECH32ADDR 100000000000000000000aevmos \
--home $HOME/.tmp-evmosd \
--from dev0 \
--fees 200000000000000aevmos \
--gas auto \
-b block \
-y
```

After this transaction was successfully executed, you should see the balance in your MetaMask wallet.

### Option 2: Import keys from keyring

You can use the default `dev0` account which has a lot of funds.
Use this command to export the `dev0` private key:

```bash
evmosd keys unsafe-export-eth-key dev0 --keyring-backend test --home ~/.tmp-evmosd 
```

Copy the private key returned.
Then select the "Import Account" option in MetaMask
and select Private Key type.
Paste the private key and click "Import".

![add account](/img/mm_add_acc.png)
![import private key](/img/mm_priv_key.png)

## Step 5: Deploy the `SimpleStaker.sol` contract

- Go to ***Deploy & Run Transactions*** option on Remix side bar
- Configure Remix Environment to use ***Injected Provider - MetaMask***
- Select the account with funds from the previous step
- Make sure the `SimpleStaker` compiled contract is selected in the ***CONTRACT*** field
- Deploy the smart contract by pressing the ***Deploy*** button & approving the transaction on Metamask.

![prepare deployment](/img/remix_prepare_deploy.png)

Upon a successful deployment,
you should see the contract with its exposed methods being listed under ***Deployed Contracts***.

![contract deployed](/img/remix_deployed.png)

## Step 6: Interact with the deployed contract

### Get current validators

To use the `SimpleStaker` contract, we need a validator's address.
Check the current validators using the following command:

```bash
evmosd q staking validators --home ~/.tmp-evmosd
```

Copy the `operator_address` of the validator you want to use.
Use this as the `_validatorAddr` in the `SimpleStaker` functions.

### Grant Approvals

Before performing any transaction,
make sure to set the corresponding approvals.
To do so, call the `approveRequiredMethods` function.
This function will grant permissions to the smart contract
to use the `MsgDelegate` and `MsgWithdrawDelegatorWithdraw`
on behalf of the caller.

### Stake some tokens

Call the `stakeTokens` function using the validator address obtained previously
and the desired amount to stake.

Once the transaction is processed successfully,
you can check your current delegations calling the `getDelegation` function.

Additionally, you can check the current delegations using the evmos binary with the following command:

```bash
BECH32ADDR=$(evmosd debug addr <YOUR_METAMASK_ADDR> | grep "Bech32 Acc" | cut -c 13-56)
evmosd q staking delegations $BECH32ADDR --home ~/.tmp-evmosd 
```

### Withdraw staking rewards

Proceed similarly with the `withdrawRewards` function to get your staking rewards.
