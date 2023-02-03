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
                  label: "Learn more about Evmos",
                }}
                body={{
                  label:
                    "Evmos brings EVM to the Cosmos. Come understand what this entails",
                }}
              />

              <Card
                to="developers/guides"
                header={{
                  label: "Explore our Guides",
                }}
                body={{
                  label:
                    "",
                }}
              />

              <Card
                to="community/"
                header={{
                  label: "Dive into our Community",
                }}
                body={{
                  label:
                    "",
                }}
              />

              <Card
                to="apis/avalanchego"
                header={{
                  label: "Develop on Evmos",
                }}
                body={{
                  label:
                    "Access low-level protocol interfaces to build your custom dapp",
                }}
              />

              <Card
                to="dapps/launch-your-ethereum-dapp"
                header={{
                  label: "Learn the terminologies of Evmos",
                }}
                body={{
                  label:
                    "Learn everything you need to deploy an EVM-compatible smart contract",
                }}
              />

              <Card
                to="https://core.app"
                header={{
                  label: "Explore our Ecosystem",
                }}
                body={{
                  label:
                    "Access your portfolio with a wallet built specifically for subnets on Avalanche",
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