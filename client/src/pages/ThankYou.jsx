import React from 'react';
import tick from '../assets/images/tick-removebg-preview.png';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <>
    <div className="container-fluid bg_bck d-flex justify-content-center align-items-center h100vh">
        <div className="container ">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-4 p-4 bg-light rounded-2 box_sdw text-center ">
                    <div className="row position-relative d-flex justify-content-center ">
                    <div className="circle">
                        <img src={tick}  alt="Tick" className='img-fluid mt-2'/>
                    </div>
                    </div>
                    <h1 className='my-3'>Thank You!</h1>
                    <p className='my-3'>Your details has been submitted successfully.</p>
                    <Link to='/'>
                    <button className='btn my-3 rounded-0 text-light w-100 f_13 fw_600 bgp px-3'>Ok</button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default ThankYou