import React from "react";
import articleBg from "@site/static/img/Bridgeless.png";
import ArticleBadge from "./Badges/articleBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function AcademyArticleCard(props) {

    return(
        <div className="academy-article">
            <div className="article-image" style={{backgroundImage: `url(${articleBg.src})`}}>
                <div className="date">
                    <span className="day">5</span>
                    <br />
                    <span className="month" style={{color: '#6966ff'}}>Feb</span>
                </div>
            </div>
            <div style={{marginTop:'5%'}}>
                <ArticleBadge title="BEGINNER" />
                <ArticleBadge title="DEFI" />
            </div>
            <div style={{marginTop: '5%'}}>
                <h3>Market makers vs market takers</h3>
            </div>
            <div style={{textAlign:'right', marginTop:'25%'}}>
                <FontAwesomeIcon icon={faClock} />
                <span style={{marginLeft:5}}>4 Min</span>
            </div>
        </div>
    )
}