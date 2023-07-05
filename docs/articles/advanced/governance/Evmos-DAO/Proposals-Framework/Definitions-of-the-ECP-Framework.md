# **Core Definitions and Concepts**


## **Proposal Types**


### **On-Chain Governance**

On-chain governance refers to all protocol level execution of proposals using Cosmos SDK's `gov` module. Anyone who holds or stakes EVMOS can participate in these votes, regardless of the voter's validator choices.


### **Off-Chain Governance**

Off-chain governance refers to all community decisions that do not require an on-chain protocol-level change. These types of decisions include a wide variety of topics and concepts, from passing meta-governance proposals to the formation of special task forces or workstreams.

All proposals are assumed to be `On-Chain Proposals` until the necessary infrastructure and toolings for `Off-Chain Voting` is established. Cosmos SDK's `TextProposal` will be used for `Off-Chain Proposals` for the time being.


---


## **Proposal Types by Category**


### **Protocol Proposals**


<table>
  <tr>
   <td><strong>Module</strong>
   </td>
   <td><strong>Codebase</strong>
   </td>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>auth</code>
   </td>
   <td><code>cosmos-sdk</code>
   </td>
   <td><code>MaxMemoCharacters</code> <code>TxSigLimit</code> <code>TxSizeCostPerByte</code> <code>SigVerifyCostED25519</code> <code>SigVerifyCostSecp256k1</code>
   </td>
   <td>The auth module is responsible for specifying the base transaction and account types for an application.<a href="https://docs.cosmos.network/v0.46/modules/auth/06_params.html"> Ref.</a>
   </td>
  </tr>
  <tr>
   <td><code>bank</code>
   </td>
   <td><code>cosmos-sdk</code>
   </td>
   <td><code>SendEnabled</code> <code>DefaultSendEnabled</code>
   </td>
   <td>The bank module is responsible for handling multi-asset coin transfers between accounts and tracking special-case pseudo-transfers which must work differently with particular kinds of accounts.<a href="https://docs.cosmos.network/v0.46/modules/bank/05_params.html"> Ref.</a>
   </td>
  </tr>
  <tr>
   <td><code>distribution</code>
   </td>
   <td><code>cosmos-sdk</code>
   </td>
   <td><code>communitytax</code> <code>baseproposerreward</code> <code>bonusproposerreward</code> <code>withdrawaddrenabled</code>
   </td>
   <td>This simple distribution mechanism describes a functional way to passively distribute rewards between validators and delegators.<a href="https://docs.cosmos.network/v0.46/modules/distribution/07_params.html"> Ref.</a>
   </td>
  </tr>
  <tr>
   <td><code>governance</code>
   </td>
   <td><code>cosmos-sdk</code>
   </td>
   <td><code>min_deposit</code> <code>max_deposit_period</code> <code>voting_period</code> <code>quorum</code> <code>threshold</code> <code>veto</code>
   </td>
   <td>The module enables Cosmos-SDK based blockchain to support an on-chain governance system.<a href="https://docs.cosmos.network/v0.46/modules/gov/06_params.html"> Ref.</a>
   </td>
  </tr>
</table>


Additional Protocol Proposals: `slashing`, `staking`, `transfer`, `feemarket`, `claims`, `inflation`


---


### **Community Proposals**

Proposals that only require to be posted as a `TextProposal` on the Cosmos SDK - _Most commonly used for meta-governance proposals._


---


### **Workstream & Special Initiatives**

Proposals that request any type of funding from the `CommunityPool` or the DAO's treasury to form an in-house workstream (team, squad, sub-DAO, guild) or project with the direct purpose of benefiting the Evmos ecosystem.


#### **Workstreams**

Workstreams are typically DAO-funded teams with a recurring budget with no termination date (i.e., Community Outreach, Marketing & Creative Services, etc). More information on workstreams can be found on the DAO Workstreams page.

Workstreams are the sub-units of how Evmos DAO advances its purpose. A workstream is a group of people actively working on tasks that align with Evmos' Constitutional Values and community run initiatives. As such, ratifying workstreams sets boundaries on what is and isn't in scope for Evmos DAO's governance.

Anyone may start a workstream and gather momentum behind it by posting on Commonwealth. Until a formal proposal for a budget is made, this workstream is considered “informal.” A workstream can be as broad or narrow as its initiators like, but workstream proposals must satisfy the following criteria:



* Have a clear objective that aligns with Evmos' values and objectives as listed in the[ ](https://evmos.community/constitution)Constitution.
* Distinguish itself from or explicitly state its improvements on existing workstreams.
* Propose clear budgets and timelines for producing outcomes and all in line with the budget proposal flow.

Workstreams have five potential states. Each of the five states and the requirements for a workstream in each state are outlined below:



* **Informal:** The workstream is not funded by the DAO, and has not made a formal proposal with its goals and a budgetary request.
* **Proposed:** The workstream has made a formal proposal to the DAO for a working budget.
* **Active:** The workstream is active and funded by the DAO.
* **Inactive:** The workstream has been discontinued and is no longer being funded by the DAO.


#### **Special Initiatives / Projects**

Special Initiatives and Projects are DAO-funded projects with a set budget and "completion" goal or date (i.e., Governance Tooling Project, Event Sponsorships, etc.)


---


### **Protocol Incentives + Evmos Specific Proposals**


<table>
  <tr>
   <td><strong>Module</strong>
   </td>
   <td><strong>Codebase</strong>
   </td>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>revenue</code>
   </td>
   <td><code>evmos</code>
   </td>
   <td><code>EnableFeeSplit</code> <code>DeveloperShares</code> <code>AddrDerivationCostCreate</code>
   </td>
   <td><a href="https://docs.evmos.org/modules/feesplit/07_parameters.html">reference</a>
   </td>
  </tr>
  <tr>
   <td><code>incentives</code>
   </td>
   <td><code>evmos</code>
   </td>
   <td><code>EnableIncentives</code> <code>AllocationLimit</code> <code>IncentivesEpochIdentifier</code> <code>rewardScaler</code>
   </td>
   <td><a href="https://docs.evmos.org/modules/incentives/07_parameters.html">reference</a>
   </td>
  </tr>
  <tr>
   <td><code>erc20</code>
   </td>
   <td><code>evmos</code>
   </td>
   <td><code>register_coin</code> <code>register_erc20</code>
   </td>
   <td><a href="https://docs.evmos.org/modules/erc20/07_parameters.html">reference</a>
   </td>
  </tr>
  <tr>
   <td><code>evm</code>
   </td>
   <td><code>evmos</code>
   </td>
   <td><code>ExtraEIPs</code> <code>ChainConfig</code>
   </td>
   <td><a href="https://docs.evmos.org/modules/evm/08_params.html">reference</a>
   </td>
  </tr>
</table>



---


### **Network Upgrades & Security**


<table>
  <tr>
   <td><strong>Module</strong>
   </td>
   <td><strong>Codebase</strong>
   </td>
   <td><strong>Parameters</strong>
   </td>
   <td><strong>Description</strong>
   </td>
  </tr>
  <tr>
   <td><code>crisis</code>
   </td>
   <td><code>cosmos-sdk</code>
   </td>
   <td><code>ConstantFee</code>
   </td>
   <td>The crisis module halts the blockchain under the circumstance that a blockchain invariant is broken.<a href="https://docs.cosmos.network/v0.46/modules/crisis/04_params.html"> Ref.</a>
   </td>
  </tr>
  <tr>
   <td><code>upgrade</code>
   </td>
   <td><code>cosmos-sdk</code>
   </td>
   <td><code>MsgSoftwareUpgrade</code>
   </td>
   <td><code>x/upgrade</code> is an implementation of a Cosmos SDK module that facilitates smoothly upgrading a live Cosmos chain to a new (breaking) software version.<a href="https://docs.cosmos.network/v0.46/modules/upgrade/"> Ref.</a>
   </td>
  </tr>
</table>


Emergency and Network Upgrade Proposals are exempt from following the Proposal Lifecycle Framework. The community is expected to do its due diligence when such proposals are uploaded.


---


## **Proposal Phase & Identification Tags**

**You do not need to know the proposal phase and identification naming conventions! A Governance Council member will assist -- the content below is for reference.**

Proposal Phases are denoted as: `[IDEATION]`, `[PRE-PROPOSAL]`, `[PROPOSAL]`, `[VOTING]` for the 4-phases, and `[PASSED]`, `[REJECTED]`, `[DEFERRED]` for proposals in the other stages. Refer to the[ ](https://evmos.community/governance/proposals/lifecycle)Proposal Lifecycle page for more information on proposal lifecycle phases.

Proposal Identification Tags are only required for Governance, Workstream (subDAO), and Community Treasury Related Proposals Only

The `ECP-#` tag will be assigned and added by a Governance Council member in the `Phase 2: ECP Formalization` or `Phase 3: ECP Signaling` phase. **You do not have to worry about adding in the tag yourself.**

These tags are for internal tracking and organization purposes. Make sure to check the[ ](https://evmos.community/governance/proposals/submission)Proposal Submission Guidelines for more information on how to properly prepare your proposal for on-chain voting.
