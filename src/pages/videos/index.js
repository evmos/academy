import React from "react"
import Layout from "@theme/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import AcademyVideoCard from "../../components/AcademyVideoCard"

export default function Videos() {
    return (
        <Layout title="Videos" description="Videos on Evmos Academy">
            <main>
                <section>
                    <div className="container">
                        <div style={{marginTop:'3%'}}>
                            <h1 style={{fontSize:50}}>Video Library</h1>
                            <p>Explore crypto topics ranging from beginner to advanced.</p>
                            <div className="row">
                                <div className="col col--8">
                                    <div className="search-input">
                                        <FontAwesomeIcon icon={faSearch} />
                                        <input placeholder="Search Video library"></input>
                                    </div>
                                </div>
                                <div className="col col--2" >
                                    <div className="filter-button">
                                        <FontAwesomeIcon style={{fontSize:18}} icon={faFilter} />
                                        <span style={{marginLeft:'5%', fontSize:18}}>Filters</span>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                            <div className="col col--4">
                                <AcademyVideoCard />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}