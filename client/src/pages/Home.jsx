import React from 'react';
import BannerMain from '../components/BannerMain';
import Video from '../components/Video';
import LongCard from '../components/LongCard';
import BlueCard from '../components/BlueCard';
import LargeBtn from '../components/LargeBtn';
import BannerCenter from '../components/BannerCenter';
import Profile from '../components/Profile';
import SmallCard from '../components/SmallCard';
import Register from '../components/Register';
import Testimonials from '../components/Testimonials';
import masterchef from '../assets/images/masterchef-logo-F0F9C511A4-seeklogo.com.png';
import nourish from '../assets/images/big_logo-1.jpg';
import bbc from '../assets/images/287-2872513_bbc-earth-logo-hd-png-download.png';
import tedx from '../assets/images/tedx4450.jpg';
import timesNow from '../assets/images/images.jpeg';
import razorPay from '../assets/images/download.png';
import upi from '../assets/images/UPI-Logo.png';
import visa from '../assets/images/Visa_Inc._logo.svg.png';
import masterCard from '../assets/images/png-transparent-logo-mastercard-product-font-mastercard-text-orange-logo-removebg-preview.png';
import secure from '../assets/images/360_F_618925574_b3n9JfcmFr5GNa10SvNdpDFyHL5D3dIw.jpg';
import 'aos/dist/aos.css';


const Home = () => {
    return (
        <>
            <BannerMain />
            <Video />
            <Register />
            
            <LongCard header='Featured On' img1={masterchef} img2={nourish} img3={bbc} img4={tedx} img5={timesNow}/>
            
            <div className="container-fluid my-5" data-aos="fade-up">
                <div className="container">
                    <div className="row">
                        <BlueCard hbold="By Coach’s Name" p="Multiple National Award" p2="Winning Trader" />
                        <BlueCard hbold="2 Lakhs+" p="Students Trained" />
                        <BlueCard hbold="18+ Years" p="Of Experience" />
                    </div>
                </div>
            </div>

            <div className="container-fluid my-5" data-aos="fade-up">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <LargeBtn />
                    </div>
                </div>
            </div>

            <LongCard header='Price Goes Up Soon To ₹599'  img1={razorPay} img2={upi} img3={visa} img4={masterCard} img5={secure} />
            <BannerCenter />
            <Profile />

            <div className="container-fluid" data-aos="fade-up">
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
            </div>

            <div className="container-fluid" data-aos="fade-up">
                <div className="row my-5 d-flex justify-content-center">
                    <div className="col-md-6">
                        <button type="button"               data-bs-toggle="modal"
              data-bs-target="#exampleModal" className="btn hbtn2 f_13 fw_600 w-100 rounded-pill">
                            Reserve My Seats Now Just For ₹97
                        </button>
                    </div>
                </div>
            </div>

            <LongCard img1={razorPay} img2={upi} img3={visa} img4={masterCard} img5={secure} />

            <div className="container my-5" data-aos="fade-up">
                <h3 className="f_22 fw-bold text-center">Still Not Sure?</h3>
                <h3 className="f_20 text-center fw-bold">See These Results Generated By Our Students</h3>
                <h3 className="f_16 text-center fw_600">(Some Of These Were Trading For The First Time)</h3>
            </div>

            <div className="container-fluid" data-aos="fade-up">
                <div className="row d-flex justify-content-center my-5">
                    <div className="col-md-8">
                        <div className="row my-4">
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

                        <div className="row my-4">
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
            </div>

            <div className="container-fluid" data-aos="fade-up">
                <div className="row my-5 d-flex justify-content-center">
                    <div className="col-md-6">
                        <button type="button"               data-bs-toggle="modal"
              data-bs-target="#exampleModal" className="btn hbtn2 f_13 fw_600 w-100 rounded-pill">
                            Yes, I Want This _________ Now
                        </button>
                    </div>
                </div>
            </div>


            <hr className='mx-5 my-5'/>
            


            <Testimonials/>

            <div className="container-fluid my-3" data-aos="fade-up">
                <div className="row d-flex justify-content-center">
                    
            <LargeBtn/>

                    
                </div>
            </div>


            <div className="container my-5" data-aos="fade-up">
<LongCard header='Price Goes Up Soon To ₹599' img1={razorPay} img2={upi} img3={visa} img4={masterCard} img5={secure}/>           
            </div>
        </>
    );
};

export default Home;
