//Video Images
import cryptoWallet from "@site/static/img/CryptoWallet.jpg";
import defiAndTradfi from "@site/static/img/DefiAndTradFi.jpg";
import ibc from "@site/static/img/IBC.jpg";

//Article Images
import accretion from "@site/static/img/accretion.png";
import blackhole from "@site/static/img/Blackhole0.png";
import governance from "@site/static/img/evmos_governance.png";

export const ArticleData = [
    {
        title: 'What are crypto wallets',
        category: ['Beginner', 'Development'],
        route: 'articles/beginner/wallets',
        imgSrc: accretion
    },
    {
        title: 'What is DeFi?',
        category: ['Beginner', 'DeFi'],
        route: 'articles/beginner/defi',
        imgSrc: blackhole
    },
    {
        title: 'BUIDL on Evmos: Testnet Guide',
        category: ['Intermediate', 'Development'],
        route: 'articles/intermediate/developing-on-evmos-testnet',
        imgSrc: blackhole
    },
    {
        title: 'Development',
        category: ['Intermediate', 'Development'],
        route: 'articles/intermediate/develop',
        imgSrc: accretion
    },
    {
        title: 'Technical Architecture',
        category: ['Advanced', 'Development'],
        route: 'articles/advanced/architecture',
        imgSrc: blackhole
    },
    {
        title: 'Wallet Integration',
        category: ['Advanced', 'Development'],
        route: 'articles/advanced/wallet-integration',
        imgSrc: accretion
    },
    {
        title: 'Proposal Process',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/proposal-process',
        imgSrc: governance
    },
    {
        title: 'Best Practices',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/best-practices',
        imgSrc: governance
    }, 
    {
        title: 'Submit a proposal',
        category: ['Advanced', 'Governance'],
        route: 'articles/governance/submit-a-proposal',
        imgSrc: governance
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