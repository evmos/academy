import React from "react"
import Layout from "@theme/Layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons"
import AcademyVideoCard from "../../components/AcademyVideoCard"
import { VideoData } from "../../data"

export default function Videos() {

    const [videoData, setVideoData] = React.useState(VideoData);
    const [searchTerm, setSearchTerm] = React.useState('');

    const filterVideos = (filter) => {
        if(filter === '') {
            setVideoData(VideoData);
            return;
        }
        let videos = VideoData;
        videos = videos.filter(video => video.category.includes(filter));
        setVideoData(videos);
    }

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
                                        <input value={searchTerm} onChange={(e) => {
                                            setSearchTerm(e.target.value);
                                            let videos = VideoData;
                                            videos = videos.filter(videos => videos.title.includes(e.target.value));
                                            setVideoData(videos);
                                            if(e.target.value === '') {
                                                setVideoData(VideoData);
                                            }
                                        }} placeholder="Search Video library"></input>
                                    </div>
                                </div>
                                <div className="col col--2" >
                                    <select className="filter-button">
                                        <optgroup style={{fontStyle:'normal', display:'none'}} label="Filter">
                                            <option onClick={() => filterVideos('')} style={{display:'none'}}>Filters</option>
                                        </optgroup>
                                        <optgroup style={{fontStyle:'normal'}} label="Level">
                                            <option onClick={() => filterVideos('Beginner')}>Beginner</option>
                                            <option onClick={() => filterVideos('Intermediate')}>Intermediate</option>
                                            <option onClick={() => filterVideos('Advanced')}>Advanced</option>
                                        </optgroup>
                                    </select>
                                </div>
                            </div>
                            
                        </div>
                        <div className="row">
                            {videoData.length > 0 && videoData.map((video, index) => 
                                <div key={index} className="col col--4">
                                    <AcademyVideoCard video={video} />
                                </div>    
                            )}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}