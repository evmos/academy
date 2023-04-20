import React from "react"
import Layout from "@theme/Layout"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import styles from "./index.module.css"
import Card from "../components/Card"

function Home() {
  const context = useDocusaurusContext();

  return (
    <Layout title="Homepage" description="Evmos Academy">
      <main>
        <br />
        <h1 align="center" style={{ fontWeight: '400' }}>Welcome to the Evmos Academy</h1>
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
                to="https://docs.evmos.org/develop/build-a-dApp/build-smart-contracts"
                header={{
                  label: "Develop on Evmos",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />
              <Card
                to="https://docs.evmos.org/develop/build-a-dApp/build-smart-contracts"
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
