import React from 'react'
import SmallCard from './SmallCard'
import vid from '../assets/videos/videoplayback.webm';

function Testimonials() {
    return (
        <>
            <div className="container-fluid" data-aos="fade-up">
                <div className="container box_sdw">
                    <div className="row bg_bck py-2 f_18 fw_600 rounded-top-2 text-light ">
                        <div className="col-12 text-center">

                            What People Say About My System
                        </div>
                    </div>

                    <div className="row p-sm-5">
                        <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard  video={vid}/>
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        {/* <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard video={vid} />
                        </div>
                        <div className="col-md-4 my-3">
                            <SmallCard  video={vid}/>
                        </div> */}
                        <div className="col-md-4 my-3">
                        <SmallCard img='https://asset.gecdesigns.com/img/background-templates/gradient-triangle-abstract-background-template-10032405-1710079376651-cover.webp'/>

                        </div>
                        <div className="col-md-4 my-3">
                        <SmallCard img='https://asset.gecdesigns.com/img/background-templates/gradient-triangle-abstract-background-template-10032405-1710079376651-cover.webp'/>

                        </div>
                        <div className="col-md-4 my-3">
                        <SmallCard img='https://asset.gecdesigns.com/img/background-templates/gradient-triangle-abstract-background-template-10032405-1710079376651-cover.webp'/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Testimonials