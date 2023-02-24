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
                to="about"
                header={{
                  label: "Learn More About Evmos",
                }}
                body={{
                  label:
                    "Evmos brings EVM to the Cosmos. Come understand what this entails",
                }}
              />

              <Card
                to="developers/guides/wallet-integration"
                header={{
                  label: "Learn About Wallet Integration",
                }}
                body={{
                  label:
                    "Integrating wallet should not be complicated. Our guide will show with EvmosJS",
                }}
              />

              <Card
                to="community/governance"
                header={{
                  label: "Dive Into Our Governance",
                }}
                body={{
                  label:
                    "Want to summit a proposal to Evmos Governance? Come learn the best practices.",
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
            </div>
          </div>
        </section>
      </main>
    </Layout>
  )
}

export default Home