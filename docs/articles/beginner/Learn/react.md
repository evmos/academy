# React Web-App for dApp Interaction

In the previous tutorial, we developed a smart contract using Remix IDE and deployed it on Evmos Testnet using Metamask wallet. Completing the previous tutorial before moving on to this one is strongly recommended.

In this tutorial, we will build a React Web App to interact with the previously deployed Payroll smart contract.

This is an advanced tutorial, and it is expected that you have a fundamental understanding of the following dApp development components:

- web3 npm library: https://www.npmjs.com/package/web3
- React Web-App Development
- HTML and JavaScript
- JavaScript functions, asynchronous functions (async and await)
- React states, and hooks (useEffect)
- MetaMask Wallet.
- Node.js (ensure it is installed on your computer)

Let’s begin!

### Step 1: Set Up Your React App

First we create a new React app using Create React App:

Let us open a terminal, or a command prompt, and run the following commands:

```
npx create-react-app evmos-payroll-app
cd evmos-payroll-app
```

This creates a react application with the name evmos-payroll-app, and navigates us into the application directory.

### Step 2: Install Dependencies

Now that we have a terminal instance opened, let us install the npm library `web3` to interact with smart contracts: https://www.npmjs.com/package/web3.

Install the necessary dependencies, including web3:

`npm install web3`

This library helps us instantiate the contract and interact with it using function calls.

### Step 3: Create Contract Interaction Component

In this step, we will start building the React component and input fields for interaction.

Let us create a new file `ContractInteraction.js` in the src folder and paste the provided code snippets for the `ContractInteraction` component.

### Step 4: Configure Contract Information

All contract interactions require an ABI (Application Binary Interface) and the address of the deployed contract.

Create a folder named `assets` inside the `src` folder and add a JSON file named `contract.json` containing your contract's ABI and address:

You can get the following details from the deployment details within Remix IDE.

To obtain the ABI, go to the compile tab, and click on ABI at the bottom.

![Solidity](/img/articles/React-1.png)

You can find the contract address in the deployment tab:

![ABI](/img/articles/React-2.png)

```
// src/assets/contract.json
{
  "ABI": [...], // Your contract's ABI
  "CONTRACT_ADDRESS": "0xYourContractAddress"
}
```

Import code:

```
import { useEffect, useState } from 'react';
import contractInfo from '../assets/contract.json';
import Web3 from 'web3';
```

We import the useEffect and useState hooks from React.

The contract information (deployed contract address, and the ABI) will be imported from contract.json

Finally, we also import the web3 library.

**Instantiate Web3 library**

```
const [web3, setWeb3] = useState(null);
const [accounts, setAccounts] = useState([]);
```

We first set the state of web3 to null, and leverage the useEffect hook to instantiate web3.

```
useEffect(() => {
        const initWeb3 = async () => {
        if (window.ethereum) {
            const _web3 = new Web3(window.ethereum);
            await window.ethereum.enable();
            setWeb3(_web3);
            const _accounts = await _web3.eth.getAccounts();
            setAccounts(_accounts);
        }
        };
        initWeb3();
    }, []);
```

This useEffect hook initializes the Web3 library, connects to the user's Ethereum wallet, and fetches the user's Ethereum accounts. The resulting web3 and accounts variables are likely used throughout the component to interact with the Ethereum blockchain.

**Get the balance of the account**

```
const [accountBalance, setAccountBalance] = useState(0);

useEffect(() => {
        const getBalance = async () => {
            const weiBalance = await web3.eth.getBalance(accounts[0]);
            const ethBalance = web3.utils.fromWei(weiBalance, 'ether');
            setAccountBalance(ethBalance);
        }
        if(web3 && accounts[0]) {
            getBalance();
        }
       
    }, [accounts[0], web3])
```

This useEffect hook fetches the Ethereum account balance in Ether for the first account (accounts[0]) when the component mounts and whenever accounts[0] or web3 changes. The fetched balance is then stored in the component's state variable accountBalance

**Instantiate the contract**

```
const [contract, setContract] = useState(null);
const [evmosValue, setEvmosValue] = useState(0);

useEffect(() => {
        if (web3) {
        const _contract = new web3.eth.Contract(
            contractInfo.ABI,
            contractInfo.CONTRACT_ADDRESS
        );
        _contract.methods.seeContractValue().call().then(value => setEvmosValue(Number(value.toString())));
        setContract(_contract);
        }
    }, [web3]);
```

**Check EVMOS Contract Balance**

```
const seeContractValue = async () => {
        if (contract) {
            const value = await contract.methods.seeContractValue().call();
            setEvmosValue(Number(value.toString()));
        }
    };
```

**Add EVMOS to the Contract**

The smart contract handles the payroll withdrawals by employees. EVMOS tokens must be deposited to the contract before employees withdraw their salary.

```
const handleAddContractValue = async () => {
        try {
            // Ensure that the contract is initialized
            if (contract) {
                // Get the Metamask account
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
                // Call the addContractValue function
                await contract.methods.addContractValue().send({
                    from: account,
                    value: web3.utils.toWei(addValue, 'wei'), // Specify the amount of Ether to send
                });
                const value = await contract.methods.seeContractValue().call();
                setEvmosValue(Number(value.toString()));
            }
        } catch (error) {
            console.error('Error invoking addContractValue:', error);
            // Optional: Display an error message to the user
        }
    };
```

Explanation:

- const account = accounts[0];: It extracts the first account from the array of accounts connected with Metamask, and the first account is often the one connected with the dApp.
- await contract.methods.addContractValue().send({ ... });: This line sends a transaction to the addContractValue function of the smart contract using the send method. The from field specifies the account sending the transaction, and the value field specifies the amount of Evmos to send along with the transaction.
- const value = await contract.methods.seeContractValue().call();: After successfully sending the transaction, it retrieves the updated value of the contract by calling the seeContractValue method.
- setEvmosValue(Number(value.toString()));: It updates the React state variable evmosValue with the new value fetched from the contract.

Set User Salary

```
const setSalaryOfUser = async () => {
        try {
            // Ensure that the contract is initialized
            if (contract) {
                // Get the Metamask account
                const accounts = await web3.eth.requestAccounts();
                const account = accounts[0];
                await contract.methods.setSalary(salaryAddress, salaryValue).send({
                    from: account,
                });
            }
        } catch (error) {
            console.error('Error invoking addContractValue:', error);
            // Optional: Display an error message to the user
        }
    };
```

Explanation:

- await contract.methods.setSalary(salaryAddress, salaryValue).send({ ... });: This line sends a transaction to the setSalary function of the smart contract using the send method. The from field specifies the account sending the transaction, and the function arguments salaryAddress and salaryValue are passed to the setSalary function.

The salaryAddress and salaryValue are set by the administrator in an HTML form that we will create later.

**View Employee Salary**

```
const handleViewSalary = async () => {
        try {
            // Ensure that the contract is initialized
            if (contract) {
                // Call the salaries mapping getter function
                const salary = await contract.methods.salaries(viewSalaryAddress).call();
                // Update the state with the retrieved salary
                setViewSalaryValue(web3.utils.fromWei(salary, 'ether'));
            }
        } catch (error) {
            console.error('Error retrieving salary:', error);
            // Optional: Display an error message to the user
        }
    };
```

Explanation:

- const salary = await contract.methods.salaries(viewSalaryAddress).call();: This line calls the salaries mapping getter function of the smart contract using the call method. It retrieves the salary associated with the provided viewSalaryAddress.
- setViewSalaryValue(web3.utils.fromWei(salary, 'ether'));: This updates the state variable viewSalaryValue by converting the retrieved salary from wei to ether using the web3.utils.fromWei method. This assumes that the salary is stored in wei in the smart contract.

### Step 5: Create HTML input elements

In this step, we will create the input fields and labels to accept employee’s address and display relevant text information.

```
return (
    <div>
      <h1>Payroll Smart Contract</h1>
      <p>Current Address: {accounts[0]}</p>
      <p>Evmos Balance: {accountBalance} tEVMOS</p>
      <p>Contract Address: {contractInfo.CONTRACT_ADDRESS}</p>
      <p>Contract Evmos Value: {evmosValue}</p>
      <button onClick={seeContractValue}>See Contract Value</button>
      <p>Add Contract Value:</p>
      <input value={addValue} onChange={(e) => setAddValue(e.target.value)}></input>
      <button onClick={handleAddContractValue}>Add Contract Value</button>
      <br />
      <p>Set Salary:</p>
      <input value={salaryAddress} onChange={(e) => setSalaryAddress(e.target.value)}></input>
      <input value={salaryValue} onChange={(e) => setSalaryValue(e.target.value)}></input>
      <button onClick={setSalaryOfUser}>Set Salary</button>
      <p>View Salary:</p>
      <input value={viewSalaryAddress} onChange={(e) => setViewSalaryAddress(e.target.value)}></input>
      {viewSalaryValue && viewSalaryValue >=0 ?
        <p>Salary of address: {viewSalaryValue}</p> : <></>
      }
      <button onClick={handleViewSalary}>View Salary</button>
      <button onClick={async () => {
        await contract.methods.paySalary().send({ from: accounts[0] });
        const weiBalance = await web3.eth.getBalance(accounts[0]);
        const ethBalance = web3.utils.fromWei(weiBalance, 'ether');
        setAccountBalance(ethBalance);
      }}>Withdraw Salary</button>
    </div>
)
```

The above HTML code snippet creates multiple input elements to add EVMOS to the contract, set salary of employees, view salaries, and withdraw their salaries.

The HTML buttons invoke their respective functions as indicated with the onClick function handler.

### Step 6: Modify App Component

```
// src/App.js
import React from 'react';
import ContractInteraction from './ContractInteraction';

function App() {
  return (
    <div className="App">
      <ContractInteraction />
    </div>
  );
}

export default App;
```

### Step 7: Run Your App

We have now built the component and loaded it into the App.js file. Let us run it!

Start your React app:

`npm start`

This launches your app in development mode. Open Localhost 3000 in your browser to see your app.

### Step 8: Interact with the Smart Contract

Now our app is running, and we can try and interact with it via our front-end!

- Connect your MetaMask wallet to the Evmos network.
- Ensure your smart contract is deployed to the specified address in contract.json.
- Use the provided buttons to interact with the smart contract: view contract value, add contract value, set salary, view salary, and withdraw salary.

![React-App](/img/articles/React-3.png)
<p>Image: React App Interface</p>

![React-App](/img/articles/React-4.png)
<p>Image: View Evmos Balance in Contract</p>

![React-App](/img/articles/React-5.png)

<p>Image: Add Evmos to Contract</p>

![React-App](/img/articles/React-6.png)

<p>Image: Set Salary of Employee</p>

![React-App](/img/articles/React-7.png)

<p>Image: View Salary of Employee</p>

Congratulations! You've successfully created a React app that interacts with a smart contract deployed on the Evmos network. This tutorial assumes you have a basic understanding of React and the Evmos blockchain. If you encounter any issues, make sure to check the console for error messages and consult the documentation for the libraries used.
