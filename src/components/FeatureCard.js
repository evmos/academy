import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeatureCard({title, icon, link}) {

    return(
        <div className="feature-card">
            <div className="container">
                <div className="row">
                    <span style={{width: '20%', marginLeft:'5%'}}>
                        {icon}
                    </span>
                    <span style={{width: '75%'}}>
                        <span style={{marginTop:'5%', color:'#A3A18B', fontWeight:'bold'}}>{title}</span> <br />
                        <a href={link} className="burgundy" >See More <FontAwesomeIcon icon={faArrowRight} /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}