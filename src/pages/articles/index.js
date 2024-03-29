import React from "react"
import Layout from "@theme/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import ArticleCard from "../../components/ArticleCard"
import { ArticleData } from "../../data"

export default function Articles() {

    const [articleData, setArticleData] = React.useState(ArticleData);
    const [searchTerm, setSearchTerm] = React.useState('');

    const filterArticles = (filter) => {
        if(filter === '') {
            setArticleData(ArticleData);
            return;
        }
        let articles = ArticleData;
        articles = articles.filter(article => article.category.includes(filter));
        setArticleData(articles);
    }

    return (
        <Layout title="Articles" description="Articles on Evmos Academy">
            <main>
                <section>
                    <div className="container">
                        <div style={{marginTop:'3%'}}>
                            <h1 style={{fontSize:50}}>Article Library</h1>
                            <p>Explore crypto topics ranging from beginner to advanced.</p>
                            <div className="row">
                                <div className="col col--8">
                                    <div className="search-input">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input value={searchTerm} onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            let articles = ArticleData;
                                            articles = articles.filter(article => article.title.includes(e.target.value));
                                            setArticleData(articles);
                                            if(e.target.value === '') {
                                                setArticleData(ArticleData);
                                            }
                                        }} placeholder="Search article library"></input>
                                    </div>
                                </div>
                                <div className="col col--2" style={{display:'none'}}>
                                    <select className="filter-button">
                                        <optgroup style={{fontStyle:'normal', display:'none'}} label="Filter">
                                            <option onClick={() => filterArticles('')} style={{display:'none'}}>Filters</option>
                                        </optgroup>
                                        <optgroup style={{fontStyle:'normal'}} label="Level">
                                            <option onClick={() => filterArticles('Beginner')}>Beginner</option>
                                            <option onClick={() => filterArticles('Intermediate')}>Intermediate</option>
                                            <option onClick={() => filterArticles('Advanced')}>Advanced</option>
                                        </optgroup>
                                        <optgroup style={{fontStyle:'normal'}} label="Category">
                                            <option onClick={() => filterArticles('DeFi')}>DeFi</option>
                                            <option onClick={() => filterArticles('Development')}>Development</option>
                                            <option onClick={() => filterArticles('Governance')}>Governance</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row" >
                            {articleData.length > 0 && articleData.map((article, index) => 
                                <div key={index} className="col col--4" style={{marginTop:'3%'}}>
                                    <ArticleCard
                                        title={article.title}
                                        desc={article.description.slice(0,100)+'....'}
                                        imgLink={article.imgSrc.src}
                                        link={article.route}
                                        category={article.category[0]}
                                    />
                                </div>    
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}