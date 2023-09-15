import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";

export default function ArticleCard({title, imgLink, desc, link}) {
    return(
        <div className="latest-article" onClick={() => window.location.href={link}}>
            <img src={imgLink} style={{borderRadius:10}} />
            <div className="text-left">
                <h3>{title}</h3>
                <p>{desc}</p>
                <span>
                    <a href={link} style={{marginRight:5}}>Keep Reading</a>
                    <FontAwesomeIcon icon={faArrowRight} />
                </span>

            </div>
        </div>
    )
}