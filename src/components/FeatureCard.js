import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function FeatureCard({title, icon, link}) {

    return(
        <div className="feature-card bg-default" style={{cursor:'pointer'}} onClick={() => window.location.href=`${link}`}>
            <div className="container">
                <div className="row">
                    <span style={{width: '25%', marginLeft:'5%'}}>
                        {icon}
                    </span>
                    <span style={{width: '50%', marginLeft:'5%'}}>
                        <span style={{marginTop:'5%', fontWeight:'bold'}}>{title}</span> <br />
                        <a href={link} target="_blank" className="burgundy" >See More <FontAwesomeIcon icon={faArrowRight} /></a>
                    </span>
                </div>
            </div>
        </div>
    )
}