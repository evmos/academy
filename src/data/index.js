//Video Images
// import cryptoWallet from "@site/static/img/CryptoWallet.jpg";
// import defiAndTradfi from "@site/static/img/DefiAndTradFi.jpg";
// import ibc from "@site/static/img/IBC.jpg";

import image1 from "@site/static/img/Grants.png"
import image2 from "@site/static/img/UseCases.png"
import image3 from "@site/static/img/Mission.png"

import image4 from "@site/static/img/Forge.png"
import image5 from "@site/static/img/Exploration.png"
import image6 from "@site/static/img/Ecosystem.png"

//Article Images
// import accretion from "@site/static/img/accretion.png";
// import blackhole from "@site/static/img/blackhole0.png";
// import governance from "@site/static/img/evmos_governance.png";

export const ImageCategories = {
    "development": [image4, image2],
    "defi": [image1, image2],
    "governance": [image3, image3]
}

//Choice per track (beginner/advanced/etc...) and choice per category
//Write up issue on TG channel re side-navbar

export const ArticleData = [
    {
        title: 'What are crypto wallets',
        category: ['Beginner', 'Development'],
        route: 'articles/beginner/wallets',
        imgSrc: image1,
        description: "Unlike traditional wallets, cryptocurrency wallets do not hold physical currency but rather store the digital keys that allow you to access and control your cryptocurrency holdings. These keys are used to sign transactions on the blockchain network, which is a decentralized ledger that records all transactions on the network."
    },
    {
        title: 'What is DeFi?',
        category: ['Beginner', 'DeFi'],
        route: 'articles/beginner/defi',
        imgSrc: image2,
        description: "DeFi applications are built on top of decentralized blockchain networks and operate without the need for intermediaries or centralized authorities, removing the need for a centralized exchange."
    },
    {
        title: 'BUIDL on Evmos: Testnet Guide',
        category: ['Intermediate', 'Development'],
        route: 'articles/intermediate/developing-on-evmos-testnet',
        imgSrc: image2,
        description: "Welcome builders! We are excited to have you build on Evmos. This guide will provide an overview of the available resources, infrastructure, and socials to get you running. This guide will be updated frequently to reflect the latest and greatest on Evmos."
    },
    {
        title: 'Proposal Process',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/proposal-process',
        imgSrc: image3,
        description: "Deposit amounts are at risk of being burned. Prior to a governance proposal entering the voting period (ie. for the proposal to be voted upon), there must be at least a minimum number of EVMOS deposited (3500). "
    },
    {
        title: 'Best Practices',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/best-practices',
        imgSrc: image3,
        description: "Engagement is likely to be critical to the success of a proposal. The degree to which you engage with Evmos community should be relative to the potential impact that your proposal may have on the stakeholders. "
    }, 
    {
        title: 'Submit a proposal',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/submit-a-proposal',
        imgSrc: image3,
        description: "In general we try to minimize the amount of data pushed to the blockchain. Hence, detailed documentation about a proposal is usually hosted on a separate censorship resistant data-hosting platform, like IPFS."
    }
]

export const VideoData = [
    {
        title: 'What is a Crypto Wallet',
        category: ['Beginner'],
        route: '/videos/crypto_wallet',
        imgSrc: image4
    },
    {
        title: 'What is DeFi and TradFi',
        category: ['Intermediate'],
        route: '/videos/what_is_defi_and_tradfi',
        imgSrc: image2
    },
    {
        title: 'What is IBC',
        category: ['Advanced'],
        route: '/videos/what_is_ibc',
        imgSrc: image3
    }
]