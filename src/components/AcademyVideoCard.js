import React from "react";
import ArticleBadge from "./Badges/ArticleBadge";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function AcademyVideoCard({video}) {

    return(
        <div className="academy-article" onClick={() => window.location.href=`${video.route}`}>
            <div className="article-image" style={{backgroundImage: `url(${video.imgSrc.src})`, backgroundSize: '100% 100%'}}>
            </div>
            <div style={{marginTop:'5%'}}>
                {video.category.map((category, index) => 
                    <ArticleBadge key={index} title={category.toString().toUpperCase()} />
                )}
            </div>
            <div style={{marginTop: '5%'}}>
                <h3>{video.title}</h3>
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