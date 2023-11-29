import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import ArticleBadge from "./Badges/ArticleBadge";

export default function VideoCard({title, imgLink, link, category}) {
    return(
        <div className="latest-article" onClick={() => window.location.href=`${link}`}>
            <div style={{textAlign:"center"}}>
                <img src={imgLink} style={{borderRadius:10, width:"75%"}} />
            </div>
            <div className="text-left">
                {category ? 
                <div>
                    <ArticleBadge title={category.toString().toUpperCase()} />
                </div> : <></> }
                <h3 style={{marginBottom:'2px', marginTop:'5px'}}>{title}</h3>
                <span>
                    <a href={link} style={{marginRight:5}}>View Video</a>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>
                

            </div>
        </div>
    )
}