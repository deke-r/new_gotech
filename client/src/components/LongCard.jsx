import React from 'react';


const LongCard = (props) => {
  return (
    <>
      <div className="container-fluid" data-aos="fade-up">
        <div className="container  box_sdw rounded-top-2">
        <div className="row">
  <h1 className={`text-center ${props.header ? 'py-2 bg_bck' : ''} rounded-top-2 f_18 text-light fw_600`}>{props.header}
  </h1>
</div>

          <div className="row ">
            <div className="col-12 d-flex flex-wrap justify-content-evenly align-items-center">
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={props.img1} alt="logo" className="" width='120px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={props.img2} alt="logo" className="" width='120px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={props.img3} alt="logo" className="" width='120px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={props.img4} alt="logo" className="" width='120px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={props.img5} alt="logo" className="" width='120px' />
              </div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default LongCard;
