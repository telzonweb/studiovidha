import React from 'react'
import abimg1 from '../../images/team/video-image.png'
import VideoModal from '../ModalVideo';


const VideoSection = (props) => {
    
    return (
        <div className={`video-section pt-185 ${props.vclass}`}>
            <div className="container">
                <div className="video-inner">
                    <img src={abimg1} alt="Video" />
                   <VideoModal/>
                </div>
            </div>
        </div>
    )
}

export default VideoSection;