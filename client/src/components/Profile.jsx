import React from 'react';
import img from '../assets/images/6606-male-user.png';
import zee from '../assets/images/zee.png';
import zeen from '../assets/images/zeen.png';
import et from '../assets/images/et.png';
import ed from '../assets/images/ed.jpeg';
import it from '../assets/images/it.png';

const Profile = () => {
    return (
        <>
            <div className="container-fluid my-5">
  <div className="container">
    <div className="row">
      <div className="col-lg-6 my-3 order-1 order-lg-2">
      <div className="row">
  <div className="col-12 d-flex justify-content-center flex-column align-items-center">
    <img src={img} alt="user" className="" width="300px" />

    <div className="container-fluid">
        <div className="container  box_sdw rounded-top-2">
        <div className="row">
  <h1 className='text-center bg_bck py-2 rounded-top-2 f_18 text-light fw_600'>Featured On
  </h1>
</div>

          <div className="row ">
            <div className="col-12 d-flex flex-wrap justify-content-evenly align-items-center">
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={zeen} alt="logo" className="" width='80px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={zee} alt="logo" className="" width='80px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={et} alt="logo" className="" width='80px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={it} alt="logo" className="" width='80px' />
              </div>
              <div className="col-12 col-md-4 col-lg-2 my-4 text-center">
                <img src={ed} alt="logo" className="" width='80px' />
              </div>
             
            </div>


          </div>
        </div>
      </div>
  </div>
</div>

      </div>

      
      <div className="col-lg-6 brd my-3 order-2 order-lg-1 box_sdw p-5 position-relative">
  <div className="borderTopLeft"></div>
  <h1 className="f_20 fw-bold mt-4">Know Your Coach</h1>
  <h1 className="text-primary f_16 mt-4 fw_600">(Mentor Name)</h1>

  <h4 className="f_14 fw_600">
    (NAMEE) has clearly established himself as an Authority on (_____) and (_____________), for which he also
  </h4>

  <h2 className="text-primary f_16 mt-4 fw_600">
    Received (Awards, Achievements)
  </h2>

  <h4 className="f_14 fw_600">
    and featured in Top Publications In last few years. (NAME) talks about (Method) which no one talks about.
    He has given hits after hits in his work on ____, _____ and _______.
  </h4>

  <h2 className="text-primary mt-4 f_16 fw_600">
    Helping 200,000+ people Featured on
  </h2>

  <h4 className="f_14 fw_600">
    Get (specific results) through his seminars and events, (mentor name) is a well-known figure in (industry name).
  </h4>

  <div className="borderBottomRight"></div>
</div>

    </div>
  </div>
</div>

        </>
    )
}

export default Profile