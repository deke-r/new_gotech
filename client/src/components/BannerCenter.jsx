import React from 'react'
import SmallCard from './SmallCard'

const BannerCenter = () => {
  return (
    <>

    <div className="container-fluid my-5 py-5 banner-center" data-aos="fade-up">
        <div className="row pt-5">

        <h1 className=' text-light f_sm_22 text-center'>Learn <span className='text-warning'> (method name) </span> From A Multiple</h1>
        <h1 className=' text-light f_sm_22 text-center'>Award Winner </h1>
        </div>
        <div className="row d-flex justify-content-center my-5">
            <div className="col-md-9">
                <div className="row">
                    <div className="col-md-4 my-3">
                        <SmallCard img='https://t4.ftcdn.net/jpg/04/89/68/23/360_F_489682374_ckc0OVyT6Av0NGcuYbwBSCxy62blF4CQ.jpg'/>
                    </div>
                    
                    <div className="col-md-4 my-3">
                    <SmallCard img='https://freedesignfile.com/upload/2016/11/Light-blue-wavy-abstract-background-vector-01.jpg'/>
                    </div>
                    <div className="col-md-4 my-3">
                    <SmallCard img='https://asset.gecdesigns.com/img/background-templates/gradient-triangle-abstract-background-template-10032405-1710079376651-cover.webp'/>
                    </div>
                </div>
            </div>

            </div>
            <div className="row my-5 d-flex justify-content-center">
            <div className="col-6">

  
        <button type="button" className="btn mt-5 hbtn text-light  f_13 fw_600 w-100 rounded-pill"               data-bs-toggle="modal"
              data-bs-target="#exampleModal">
        Yes, Reserve My Spot Now Just For ₹97
            
        </button>
    </div>
            </div>
        </div>

    
    </>
  )
}

export default BannerCenter