import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"
import clsx from "clsx"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Evmos Academy">
      <main>
        <br />
        <div className="container">
          <h1 align="center" style={{ fontWeight: '400' }}>LEARN EVERYTHING</h1>
          <div className="landing-page-box">
            <img src="https://cryptoslate.com/wp-content/uploads/2022/04/image_2022-04-28_183437814.png" />
            <img src={require('@site/src/assets/img/evmos-getting-started.png').default} onError={(e) => console.log(e)} />
          </div>
        </div>
        <div className="container gap-top">
          <div className="row">
            <div className="col col--6">
              <h1>Evmos</h1>
            </div>
            <div className="col col--6">
              <p>The Evmos Academy is your guide to building on and using Evmos. Learn how to deploy an app, integrate wallets,
                create a governance proposal, and more.
              </p>
            </div>
          </div>
        </div>
        
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
        </section>
      </main>
    </Layout>
  )
}

export default Home
