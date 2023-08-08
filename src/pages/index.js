import React from "react"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import Card from "../components/Card"
import FeatureCard from "../components/FeatureCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faComputer, faGlobe } from "@fortawesome/free-solid-svg-icons"
import ArticleCard from "../components/ArticleCard";
import { faDiscord, faTelegram } from "@fortawesome/free-brands-svg-icons";
import blackHoleImg from "@site/static/img/Blackhole0.png";

const testImageLink = "https://cryptoslate.com/wp-content/uploads/2022/04/image_2022-04-28_183437814.png";
function Home() {

  return (
    <Layout title="Homepage" description="Evmos Academy">
      <main>
        <br />
        <div className="container">
          <h1 align="center" className="evmos-display evmos-header" style={{ fontWeight: '800'}}>LEARN EVERYTHING</h1>
          <div className="landing-page-box">
            <img src={blackHoleImg.src} />
          </div>
        </div>
        <div className="container gap-top">
          <div className="row">
            <div className="col col--6">
              <h1 className="evmos-display evmos-header" >Evmos</h1>
            </div>
            <div className="col col--6">
              <p className="fccream">The Evmos Academy is your guide to building on and using Evmos. Learn how to deploy an app, integrate wallets,
                create a governance proposal, and more.
              </p>
            </div>
          </div>
        </div>
        <div className="container gap-top">
          <div className="row">
            <div className="col col--4">
              <FeatureCard
                icon={<FontAwesomeIcon icon={faComputer} size="3x" />}
                title="For Developers"
              />
            </div>
            <div className="col col--4">
              <FeatureCard
                icon={<FontAwesomeIcon icon={faGlobe} size="3x" />}
                title="Enjoy Community"
              />
            </div>
            <div className="col col--4">
              <FeatureCard
                icon={<FontAwesomeIcon icon={faBook} size="3x" />}
                title="Browse Glossary"              
              />
            </div>
          </div>
        </div>

        <div className="container gap-top">
          <div className="article-card">
            <div className="row">
              <div className="col col--5 article-text" >
                <h2 className="burgundy">Title of Article</h2>
                <p>Praesent et blandit ligula, at euismod dolor. Cras tincidunt mi eget porta sagittis. 
                  Praesent finibus sem quis nibh egestas feugiat. Aliquam eleifend ex et diam volutpat, a egestas purus semper. 
                </p>
              </div>
              <div className="col col--6">
                <img src={testImageLink}  />
              </div>
            </div>
          </div>
        </div>

        <div className="container gap-top">
          <div className="row">
            <div className="col col--6">
              <h2>Latest Articles</h2>
            </div>
            <div className="col col--6 text-right">
              <button className="action-button">ALL ARTICLES</button>
            </div>
          </div>
          <div className="row gap-top">
            <div className="col col--4">
              <ArticleCard
                  title="Frequently Asked Questions"
                  desc="Quisque nec neque et felis maximus ac dolor."
                  imgLink={testImageLink}
              />
            </div>
            <div className="col col--4">
              <ArticleCard
                  title="What's the EVM?"
                  desc="Quisque nec neque et felis maximus ac dolor."
                  imgLink={testImageLink}
              />
            </div>
            <div className="col col--4">
              <ArticleCard
                  title="What's the EVM?"
                  desc="Quisque nec neque et felis maximus ac dolor."
                  imgLink={testImageLink}
              />
            </div>
          </div>
        </div>

        <div className="container gap-top">
          <div className="article-card glossary-card">
            <div className="row">
              <div className="col col--5 article-text" >
                <h2 className="burgundy">Glossary</h2>
                <p>Praesent et blandit ligula, at euismod dolor. Cras tincidunt mi eget porta sagittis.
                  Praesent finibus sem quis nibh egestas feugiat. Aliquam eleifend ex et diam volutpat, a egestas purus semper.
                </p>
                <button className="action-button">EXPLORE GLOSSARY</button>
              </div>
              <div className="col col--6">
                <img src={testImageLink}  />
              </div>
            </div>
          </div>
        </div>

        <div className="support-section gap-top">
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h1 className="evmos-display evmos-header" style={{ fontWeight: '800'}}>GET SUPPORT</h1>
                <p>Chat with one of our community moderators. Or shoot us an email and we’ll get back to you ASAP.</p>
                <span>
                  <button className="action-button">
                    <FontAwesomeIcon icon={faTelegram} /> Telegram
                  </button>
                  <button className="action-button m-left">
                    <FontAwesomeIcon icon={faDiscord} /> Discord
                  </button>
                </span>
              </div>
            </div>
          </div>
        </div>
        
        {false ? 
        <section className={styles.features}>
          <div className="container">
            <div className="row cards__container">
              <Card
                to="/articles/advanced/wallet-integration"
                header={{
                  label: "Learn About Wallet Integration",
                }}
                body={{
                  label:
                    "Integrating with wallets should not be complicated. Learn how using EvmosJS.",
                }}
              />
              <Card
                to="https://docs.evmos.org/develop/smart-contracts"
                header={{
                  label: "Develop on Evmos",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />
              <Card
                to="./articles/intermediate/developing-on-evmos-testnet"
                header={{
                  label: "BUIDL on Evmos: Testnet Guide",
                }}
                body={{
                  label:
                    "A helpful overview guide to get you building fast on Evmos Testnet",
                }}
              />
            </div>
          </div>
        </section> : <></> }
      </main>
    </Layout>
  )
}

export default Home
