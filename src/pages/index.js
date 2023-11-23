import React from "react"
import Layout from "@theme/Layout"
import styles from "./index.module.css"
import Card from "../components/Card"
import FeatureCard from "../components/FeatureCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBook, faComputer, faGlobe } from "@fortawesome/free-solid-svg-icons"
import ArticleCard from "../components/ArticleCard";
import crossChain from "@site/static/img/Midjourney.jpg"
import blackHoleImg from "@site/static/img/blackhole0.png";
import evmosBg from "@site/static/img/Evmos-BG-3.jpg";
import { ArticleData, VideoData } from "../data"
import VideoCard from "../components/VideoCard"
import { faTelegram, faDiscord } from "@fortawesome/free-brands-svg-icons"
import GlossaryIcon from "@site/static/img/glossary.svg"
import CommunityIcon from "@site/static/img/community.svg"
import DevIcon from "@site/static/img/dev.svg"
import evmosBanner from "@site/static/img/evmos-banner.png";

function Home() {

  
 const [articleInfo, setArticleInfo] = React.useState();

 React.useEffect(() => {
  const articlesToAdd = []
  const indices = []
  for (let i=0; i<4; i++){
    const random = Math.floor(Math.random()*9)
    if(indices.includes(random)) {
      i = i-1;
      continue;
    }
    articlesToAdd.push(ArticleData[random])
  }
  setArticleInfo(articlesToAdd)
 }, [])

  return (
    <Layout title="Homepage" description="Evmos Academy">
      <main>
        <br />
        <div className="landing-page">
          <div className="landing-page-banner" style={{backgroundImage: `url(${evmosBanner.src})`}}>
            <h1 className="banner-text" >LEARN <br/> EVERYTHING <br/> EVMOS</h1>
            <div style={{marginBottom:5, marginTop:5}}>
              <button className="action-button" onClick={() => window.location.href = "/videos"}>Watch Videos</button>
              <button className="action-button" onClick={() => window.location.href = "/articles"} style={{marginLeft:'5%'}}>Explore Articles</button>
            </div>
            <div className="row">
              <div className="col col--1" />
              <div className="col col--3">
                <FeatureCard
                  icon={<DevIcon style={{display:'inline'}} />}
                  title="For Developers"
                  link={"https://docs.evmos.org/"}
                />
              </div>
              
              <div className="col col--3">
                <FeatureCard
                  icon={<CommunityIcon style={{display:'inline'}} />}
                  title="Enjoy Community"
                  link={"articles/beginner/gettingstarted"}
                />
              </div>
              
              <div className="col col--3">
                <FeatureCard
                  link={"/faq"}
                  icon={<GlossaryIcon style={{display:'inline'}} />}
                  title="Browse FAQ"              
                />
              </div>
            </div>
            <p style={{marginTop:10}}>
              The Evmos Academy is your guide to building on and using Evmos. Learn how to deploy an app,
              integrate wallets, create a governance proposal, and more.            
            </p>
          </div>
        </div>

        {articleInfo && articleInfo[3].title && false ? 
          <div className="container gap-top" >
            <div className="article-card" onClick={() => {
            const link = articleInfo[3]['route'];
            window.location.href = link;
            }}>
              <div className="row">
                <div className="col col--5 article-text" >
                  <h2 className="burgundy">{articleInfo[3].title}</h2>
                  <p>{articleInfo[0].description}</p>
                </div>
                <div className="col col--6">
                  <img src={articleInfo[3].imgSrc.src} />
                </div>
            </div>
          </div>
        </div> : <></> }

        <div className="container gap-top">
          <div className="row">
            <div className="col col--6">
              <h2>LATEST ARTICLES</h2>
            </div>
            <div className="col col--6 text-right">
              <button className="action-button" onClick={() => window.location.href = "/articles"}>ALL ARTICLES</button>
            </div>
          </div>
          <div className="row gap-top">
            {articleInfo && articleInfo.slice(0,3).map(article => 
              <div className="col col--4">
                <ArticleCard
                    title={article.title}
                    desc={article.description.slice(0,100)+'....'}
                    imgLink={article.imgSrc.src}
                    link={article.route}
                />
              </div>
            )}
          </div>
        </div>

        <div className="container gap-top">
          <div className="row">
            <div className="col col--6">
              <h2>LATEST VIDEOS</h2>
            </div>
            <div className="col col--6 text-right">
              <button className="action-button" onClick={() => window.location.href = "/videos"}>ALL VIDEOS</button>
            </div>
          </div>
          <div className="row gap-top">
            {VideoData && VideoData.slice(0,3).map(video => 
              <div className="col col--4">
                <VideoCard
                    title={video.title}
                    imgLink={video.imgSrc.src}
                    link={video.route}
                />
              </div>
            )}
          </div>
        </div>
        
        {false ? 
        <div className="container gap-top">
          <div className="article-card glossary-card">
            <div className="row">
              <div className="col col--5 article-text" >
                <h2 className="burgundy">FAQ</h2>
                <p><strong>Does Evmos have a roadmap?</strong></p>
                <p>Yes! You can find out about Evmos' roadmap by reading the <a href="https://medium.com/evmos/the-evmos-manifesto-7fe5d1ab0d67">Evmos Manifesto</a>.</p>
                <button className="action-button" onClick={() => window.location.href="/faq"}>EXPLORE THE FAQ</button>
              </div>
              <div className="col col--6">
                <img src={crossChain.src}  />
              </div>
            </div>
          </div>
        </div> : <></> }

        <div className="support-section gap-top" style={{backgroundImage: `url(${evmosBg.src})`}}>
          <div className="container">
            <div className="row">
              <div className="col col--6">
                <h1 className="evmos-display evmos-header" style={{ fontWeight: '800', color:'white'}}>GET SUPPORT</h1>
                <p style={{color:'white'}}>Chat with one of our community moderators by clicking on the icon at the bottom of your screen. Or shoot us an email and we’ll get back to you ASAP.</p>
                <span>
                  <a href="https://t.me/EvmosOrg" target="_blank" rel="noreferred">
                  <button className="action-button-social" >
                    <FontAwesomeIcon icon={faTelegram} /> TELEGRAM
                  </button>
                  </a>
                  <a href="https://discord.com/invite/evmos" target="_blank" rel="noreferred">
                    <button className="action-button-social m-left">
                      <FontAwesomeIcon icon={faDiscord} /> DISCORD
                    </button>
                  </a>
                  
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
