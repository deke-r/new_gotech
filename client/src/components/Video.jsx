import React from 'react';
import '../styles/Video.css';
import video from '../assets/videos/videoplayback.webm';

const Video = () => {
  return (
    <>
    <div className="container-fluid g">
        <div className="row">
            <div className="col-sm-12 d-flex justify-content-center position-relative">
                <div className="container_video container d-flex justify-content-center">
                <video className='rounded-3 box_sdw' loop preload autoPlay muted height='100%' width='70%'  poster="https://via.placeholder.com/320x240">
                    <source src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                </div>
            </div>
        </div>

    </div>
    
    </>
  )
}

export default Video