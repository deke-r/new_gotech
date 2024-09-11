import React from 'react'

const BlueCard = (props) => {
    return (
        <>
            <div className="col-md-4">
                <div className="card text-center rounded-2 b_t box_sdw blue_cRD my-4">
                    <div className="card-body text-light d-flex align-items-center">
                        <div className="container">

                        <h3 className="card-text f_22 fw-bold text-dark">{props.hbold}</h3>
                        <h5 className='text-dark f_16 fw_600'>{props.p}</h5>
                        <h5 className='text-dark f_16 fw_600'>{props.p2}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlueCard