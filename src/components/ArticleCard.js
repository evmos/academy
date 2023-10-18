import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ArticleBadge from "./Badges/ArticleBadge";

export default function ArticleCard({title, imgLink, desc, link, category}) {
    return(
        <div className="latest-article" onClick={() => window.location.href=`${link}`}>
            <img src={imgLink} style={{borderRadius:10}} />
            <div className="text-left">
                {category ? 
                <div>
                    <ArticleBadge title={category.toString().toUpperCase()} />
                </div> : <></> }
                <h3 style={{marginBottom:'2px', marginTop:'5px'}}>{title}</h3>
                <p style={{color:'#A3A18B'}}>{desc}</p>
                <span>
                    <a href={link} style={{marginRight:5}}>Read Article</a>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
                

            </div>
        </div>
    )
}