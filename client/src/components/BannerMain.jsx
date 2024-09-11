import React from 'react';
import '../styles/BannerMain.css';
import CountdownTimer from './Timer';

const BannerMain = () => {
  return (
    <>
    <div className="container-fluid banner_main" data-aos="fade-up">

        <div className="row py-4">
        <div className="col-sm-6 my-2  text-center text-light fw_600 f_16 ">
          <CountdownTimer/>
        </div>
        <div className="col-sm-6 my-2 text-center">
            <button className='text-light f_16 rounded-pill px-5 py-1 hbtn  fw_600'               data-bs-toggle="modal"
              data-bs-target="#exampleModal">Reserve Your Seat Now</button>
        </div>
        </div>


        <div className='container-overlay mt-sm-5 pt-2 pt-sm-5'>
        <h1 className='f_sm_22'>Learn/Discover What/How <span className='text-warning'> (specific big </span>

        </h1>
        <h1 className='f_sm_22'> <span className='text-warning'> results) </span> Using This & How <span className='text-warning'>  ( Method Name) </span> & How

        </h1>
        <h1 className='f_sm_22'>You Can get the Same Results</h1>
        <p>Learn <span className='text-warning'>  (method) </span>, with <span className='text-warning'>  (features or benefits)</span> or without <span className='text-warning'>  (objection)</span> & Go From A <br/>
        To B In Just <span className='text-warning'>  (specific time) </span>

        </p>
        </div>
      </div>
    </>
  )
}

export default BannerMain