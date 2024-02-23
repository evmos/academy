# Building a Payroll Smart Contract in Solidity and Deploying it to Evmos Testnet

In this tutorial, we will walk you through writing a simple payroll smart contract using Solidity and deploying it on Evmos. This contract will allow an owner (ex: an HR or payroll accountant) to set salaries for employees and enable the employers to initiate salary payments.

## Introduction

Smart contracts are self-executing contracts with the terms of the agreement between buyer and seller written directly into code. Payroll management is one area where the transparency and automation capabilities of smart contracts can be leveraged effectively.

In this tutorial, we will create a basic payroll smart contract that can:

<ul>
<li>Allow the contract owner to add funds to the contract.</li>
<li>Set salaries for employees.</li>
<li>Enable employees to withdraw their salaries.</li>
</ul>

This is a beginner tutorial and it is expected that you have a fundamental understanding of the following dApp development tools:

<ul>
<li>Smart Contract: A smart contract is code that is deployed onto a blockchain, and it autonomously executes its coded instructions without the need for a central authority or intermediaries.</li>
<li>Solidity: Solidity is a programming language specifically designed for developing smart contracts that run on EVM-compatible blockchain platforms. We use Solidity to develop the payroll smart contract</li>
<li>Remix IDE: Remix IDE provides an integrated development environment (IDE) for smart contract development on EVM-compatible blockchain platforms. It is a popular choice for developers who want a user-friendly environment to write, test, and deploy smart contracts. We develop our smart contract on Remix IDE to leverage its in-built EVM to deploy the payroll smart contract.</li>
<li>MetaMask: MetaMask is a popular cryptocurrency wallet and browser extension that enables users to interact with decentralized applications (dApps) on the Ethereum blockchain. We use MetaMask as our wallet to sign transactions and deploy the smart contract.</li>
</ul>

## The Payroll Smart Contract

Let's start by defining the structure of our Payroll smart contract.

Constructor Function (Solidity):

```
constructor() payable {
    owner = msg.sender;
    evmosValue = 0;
}
```

Purpose: This is the constructor function, executed only once during contract deployment. It initializes the contract's state variables.
In the above code, the state variables are values that are stored in the contract storage. These variables can be modified during contract execution provided there is a relevant function.

Details:

**msg.sender**: Sets the contract owner to the address that deploys the contract.

**payable**: Allows the contract to receive tEVMOS during deployment.

**evmosValue**: Initializes the contract's tEVMOS value to zero.

**Modifier**

```
modifier onlyOwner() {
    require(msg.sender == owner, "Not the contract owner");
    _;
}
```

Purpose: A custom modifier that restricts certain functions to be only callable by the contract owner.

Details:

**require**: Ensures that the condition is met; otherwise, an exception is thrown.

**msg.sender**: Refers to the address that initiated the current call.

**_;**: Acts as a placeholder for the code of the modified function.

Function - seeContractValue:

```
function seeContractValue() public view returns(uint256) {
    return evmosValue;
}
```

Purpose: Allows anyone to view the current value of tEVMOS stored in the contract.

Details:

**public view**: Indicates that the function is read-only and does not modify the contract state.

**returns(uint256)**: Specifies the return type as an unsigned integer.

Function - addContractValue:

```
function addContractValue() public payable onlyOwner {
    evmosValue += msg.value;
}
```

Purpose: Allows the owner to add tEVMOS to the contract.

Details:

**public payable**: Indicates that the function can receive Ether.

**onlyOwner**: Modifier ensures that only the contract owner can call this function.

**msg.value**: Retrieves the amount of Ether sent with the function call.

Function - setSalary:

```
function setSalary(address employee, uint256 amount) external onlyOwner {
    salaries[employee] = amount;
}
```

Purpose: Allows the owner to set salaries for specific employees.

Details:

**external**: Specifies that the function can only be called from outside the contract.

**onlyOwner**: Modifier ensures that only the contract owner can call this function.

**salaries[employee] = amount;**: Sets the salary for the specified employee.

Function - paySalary:

```
function paySalary() external {
    uint256 salary = salaries[msg.sender];
    require(salary > 0, "You don't have a salary set");
    require(address(this).balance >= salary, "Insufficient funds in the contract");

    (bool success, ) = payable(msg.sender).call{value: salary, gas: gasleft()}("");
    require(success, "Salary payment failed");

    emit SalaryPaid(msg.sender, salary);
}
```

Purpose: Allows employees to withdraw 7their salaries.

Details:

**uint256 salary**: Retrieves the salary for the caller (employee).

**require**: Ensures that the employee has a salary set and there are sufficient funds.

**(bool success, )** = payable(msg.sender).call{value: salary, gas: gasleft()}("");: Sends Ether to the employee and captures the success status.

**emit SalaryPaid(msg.sender, salary);**: Emits an event indicating a successful salary payment.

These functions collectively form a basic payroll smart contract, enabling the addition of funds, setting salaries, and paying salaries to employees.

## Step-by-Step Tutorial

### Step 1: Open Remix IDE

We use Remix IDE to develop our payroll smart contract. The web-based IDE can be found here: https://remix.ethereum.org/.

Here are some key functionalities of Remix IDE:

- **Smart Contract Development:**
    - *Solidity Editor:* Remix provides a dedicated Solidity code editor with syntax highlighting, autocompletion, and error checking to facilitate the development of smart contracts.

- **Deployment and Interaction:**
    - *Deploy Contracts:* Remix allows developers to deploy smart contracts directly from the IDE to various networks, including Evmos, including the mainnet and testnets.
    - *Interact with Contracts:* Developers can interact with deployed contracts, execute functions, and view contract state using Remix's user-friendly interface.

- **Code Analysis and Compilation:**
    - *Static Analysis:* Remix performs static analysis on smart contract code, highlighting potential issues and vulnerabilities before deployment.
    - *Compilation:* The IDE compiles Solidity code into bytecode, which is necessary for deploying contracts to the blockchain.

- **Debugging:**
    - *Debugging Tools:* Remix provides debugging tools to help developers identify and fix issues in their smart contracts. This includes breakpoints, step-by-step execution, and variable inspection.

- **Testing:**
    - *Unit Testing:* Developers can create and run unit tests for their smart contracts using Remix, ensuring that the code functions as expected.

Open the Remix IDE in your web browser.

### Step 2: Create a New File

Create a new file and paste the payroll smart contract code into it.

The smart contract code can either be written from scratch, or it can be copied from the code snippets above.

The first line in the code displayed below specifies the compiler version that should be used to compile the Solidity code. The caret (^) symbol followed by a version number represents a range of compatible compiler versions. In this case, it indicates that the code is compatible with any compiler version that is 0.8.0 or later, but less than 0.9.0.

![Remix](/img/articles/Tutorial-1.png)

### Step 3: Compile the Contract

Compile the contract by clicking the "Solidity Compiler" tab on the left panel and then clicking "Compile Payroll.sol."

![Compile](/img/articles/Tutorial-2.png)

After clicking on “Compile Payroll.sol”, the solidity code is compiled into bytecode, ready to be deployed onto the blockchain network. Following successful compilation, we shall see a green tick on the compiler icon.

![Deploy](/img/articles/Tutorial-3.png)

### Step 4: Set up Evmos Testnet on MetaMask

The default network chosen by Remix IDE is a local Ethereum testnet. We can configure the deployment network by setting up the Evmos testnet environment on MetaMask. The following steps show we can set up Evmos testnet environment on MetaMask:

Open MetaMask, and click on ‘Add Network’.

![Network](/img/articles/Tutorial-4.png)

Click on ‘Add Network Manually’

![Networks](/img/articles/Tutorial-5.png)

Enter the following details:

![Network Details](/img/articles/Tutorial-6.png)

Click on Save.

Our MetaMask wallet is now set up to deploy and interact with the contracts on Evmos testnet.

### Step 5: Deploy the Contract

Since the default network for Remix IDE is a local Ethereum testnet, we must configure Remix IDE to deploy the contract on Evmos testnet. To do this:

- Switch to the "Deploy & Run Transactions" tab.
- Set Environment to Injected Provider - MetaMask

![Provider](/img/articles/Tutorial-7.png)

At this point, you might observe MetaMask popping up to select accounts to connect with Remix IDE. Choose the accounts you wish to use and click on connect.

Select an account you wish to use to deploy the contract from the “ACCOUNT” tab above, and click the "Deploy" button.

You will observe another MetaMask popup to review the transaction and submit it. Click on ‘Confirm’ to deploy the contract.

![Transaction](/img/articles/Tutorial-8.png)

After the transaction is submitted, you shall see a MetaMask popup confirming the transaction.

![Confirmation](/img/articles/Tutorial-9.png)

Additionally, you can also observe and interact with the contract in Remix IDE:

![Interact](/img/articles/Tutorial-10.png)

### Step 6: Interact with the Contract

Now that the contract is deployed, you can interact with it:

- Use the addContractValue function to add funds to the contract.
- Use the setSalary function to set salaries for employees.
- Use the paySalary function to withdraw your salary.

Each of these functions require you to confirm MetaMask transactions before they are executed. It is important to confirm the transaction metadata before approving the transaction.

## Conclusion

Congratulations! You've successfully created a simple payroll smart contract. This is a basic example, and real-world payroll systems would require additional features and security considerations.

Feel free to explore more advanced features and integrate this contract into a larger decentralized application (dApp). Happy coding!
