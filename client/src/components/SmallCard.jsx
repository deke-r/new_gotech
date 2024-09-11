import React from 'react';

const SmallCard = (props) => {
  return (
    <div className="card-center rounded-top-2 box_sdw b_t">
      {props.video ? (
        <video
          className="img-fluid"
          src={props.video}
          alt='video'
        
          muted
          autoPlay
          preload
          loop
        >
          Your browser does not support the video tag.
        </video>
      ) : props.img ? (
        <img
          src={props.img}
          alt='img'
          className='img-fluid'
         
        />
      ) : (
        <p>No media available</p>
      )}
    </div>
  );
};

export default SmallCard;
