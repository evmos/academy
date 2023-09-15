//Video Images
import cryptoWallet from "@site/static/img/CryptoWallet.jpg";
import defiAndTradfi from "@site/static/img/DefiAndTradFi.jpg";
import ibc from "@site/static/img/IBC.jpg";

//Article Images
import accretion from "@site/static/img/accretion.png";
import blackhole from "@site/static/img/blackhole0.png";
import governance from "@site/static/img/evmos_governance.png";

export const ImageCategories = {
    "development": [cryptoWallet, blackhole],
    "defi": [accretion, defiAndTradfi],
    "governance": [governance, ibc]
}

export const ArticleData = [
    {
        title: 'What are crypto wallets',
        category: ['Beginner', 'Development'],
        route: 'articles/beginner/wallets',
        imgSrc: accretion,
        description: "Unlike traditional wallets, cryptocurrency wallets do not hold physical currency but rather store the digital keys that allow you to access and control your cryptocurrency holdings. These keys are used to sign transactions on the blockchain network, which is a decentralized ledger that records all transactions on the network."
    },
    {
        title: 'What is DeFi?',
        category: ['Beginner', 'DeFi'],
        route: 'articles/beginner/defi',
        imgSrc: blackhole,
        description: "DeFi applications are built on top of decentralized blockchain networks and operate without the need for intermediaries or centralized authorities, removing the need for a centralized exchange."
    },
    {
        title: 'BUIDL on Evmos: Testnet Guide',
        category: ['Intermediate', 'Development'],
        route: 'articles/intermediate/developing-on-evmos-testnet',
        imgSrc: blackhole,
        description: "Welcome builders! We are excited to have you build on Evmos. This guide will provide an overview of the available resources, infrastructure, and socials to get you running. This guide will be updated frequently to reflect the latest and greatest on Evmos."
    },
    {
        title: 'Development',
        category: ['Intermediate', 'Development'],
        route: 'articles/intermediate/develop',
        imgSrc: accretion,
        description: "Looking to build a dApp on Evmos? Following this documentation and our academy you can learn how and become part of the rich ecosystem of EVM builders on Cosmos."
    },
    {
        title: 'Technical Architecture',
        category: ['Advanced', 'Development'],
        route: 'articles/advanced/architecture',
        imgSrc: blackhole,
        description: "Evmos is a scalable Proof-of-Stake blockchain that is fully compatible and interoperable with the Ethereum Virtual Machine (EVM)."
    },
    {
        title: 'Wallet Integration',
        category: ['Advanced', 'Development'],
        route: 'articles/advanced/wallet-integration',
        imgSrc: accretion,
        description: "Developers should determine whether users are using Keplr or MetaMask. This can be determined by checking the corresponding window.ethereum or window.keplr value."
    },
    {
        title: 'Proposal Process',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/proposal-process',
        imgSrc: governance,
        description: "Deposit amounts are at risk of being burned. Prior to a governance proposal entering the voting period (ie. for the proposal to be voted upon), there must be at least a minimum number of EVMOS deposited (3500). "
    },
    {
        title: 'Best Practices',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/best-practices',
        imgSrc: governance,
        description: "Engagement is likely to be critical to the success of a proposal. The degree to which you engage with Evmos community should be relative to the potential impact that your proposal may have on the stakeholders. "
    }, 
    {
        title: 'Submit a proposal',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/submit-a-proposal',
        imgSrc: governance,
        description: "In general we try to minimize the amount of data pushed to the blockchain. Hence, detailed documentation about a proposal is usually hosted on a separate censorship resistant data-hosting platform, like IPFS."
    }
]

export const VideoData = [
    {
        title: 'What is a Crypto Wallet',
        category: ['Beginner'],
        route: '/videos/crypto_wallet',
        imgSrc: cryptoWallet
    },
    {
        title: 'What is DeFi and TradFi',
        category: ['Intermediate'],
        route: '/videos/what_is_defi_and_tradfi',
        imgSrc: defiAndTradfi
    },
    {
        title: 'What is IBC',
        category: ['Advanced'],
        route: '/videos/what_is_ibc',
        imgSrc: ibc
    }
]