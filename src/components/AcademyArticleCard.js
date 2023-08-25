import React from "react";
import articleBg from "@site/static/img/Bridgeless.png";
import ArticleBadge from "./Badges/ArticleBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function AcademyArticleCard({article}) {
    
    return(
        <div className="academy-article" onClick={() => window.location.href=`${article.route}`}>
            <div className="article-image" style={{backgroundImage: `url(${articleBg.src})`}}>
                <div className="date">
                    <span className="day">5</span>
                    <br />
                    <span className="month">Feb</span>
                </div>
            </div>
            <div style={{marginTop:'5%'}}>
                {article.category.map((category, index) => 
                    <ArticleBadge key={index} title={category.toString().toUpperCase()} />
                )}
            </div>
            <div style={{marginTop: '5%'}}>
                <h3>{article.title}</h3>
            </div>
            <div className="row">
                <div className="col col--12 duration" style={{textAlign:'right'}}>
                    <FontAwesomeIcon icon={faClock} />
                    <span style={{marginLeft:5}}>4 Min</span>
                </div>
            </div>
        </div>
    )
}