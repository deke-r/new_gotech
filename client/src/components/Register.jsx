import React from 'react';
import { useForm } from 'react-hook-form';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';






const Register = () => {
  const {register,handleSubmit,formState: { errors },} = useForm();
  
  const navigate = useNavigate();

  const onSubmit = (data) => {
    axios.post('/register', data)
      .then((res) => {
        console.log(res)
        // toast.success('Registration successful!');
        const closeButton = document.querySelector('[data-bs-dismiss="modal"]');
        if (closeButton) {
          closeButton.click();
        }
    
    
        navigate('/thankYou');
      })
      .catch((err) => {
        if (err.response && err.response.data.errors) {
          err.response.data.errors.forEach(error => {
            toast.error(error.msg); 
          });
        } else {
          toast.error('An error occurred while registering.');
        }
      });
  };
  

  return (
    <>
      <div className="container-fluid mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <button
              className="btn hbtn2  f_13 fw_600 w-100 rounded-pill"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal" data-aos="fade-up"
            >
              Register
            </button>
          </div>
        </div>
      </div>

      <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="container-fluid">
                <div className="row">
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="container-fluid parentbox mt-1">
                      <div className="container-fluid bg_dot box_sdw border-t pb-1 childbox bg-light">
                        <div className="row bg_bck border-t">
                          <h5 className="text-light text-center f_16 mt-2">Register</h5>
                        </div>
                        <div className="row my-3">
                          <div className="col-md-12">
                            <h6 className='f_13 fw_600'>Name <span className="text-danger">*</span> :</h6>
                            <input
                              type="text"
                              className="form-control f_13 fw_600 box_sdw11 border-leftb"
                              placeholder="Enter Your Name"
                              {...register("name", { required: true })}
                            />
                            {errors.name && <p className="text-danger f_13 fw_600 pt-1 ps-1 m-0">Name is required.</p>}
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-md-12">
                            <h6 className='f_13 fw_600'>Email <span className="text-danger">*</span> :</h6>
                            <input
                              type="email"
                              className="form-control f_13 fw_600 box_sdw11 border-leftb"
                              placeholder="Enter Your Email"
                              {...register("email", {
                                required: "Email is required",
                                pattern: {
                                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                  message: "Enter a valid email address",
                                },
                              })}
                            />
                            {errors.email && <p className="text-danger f_13 fw_600 pt-1 ps-1 m-0">{errors.email.message}</p>}
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-md-12">
                            <h6 className='f_13 fw_600'>Phone No <span className="text-danger">*</span> :</h6>
                            <input
                              type="text"
                              className="form-control f_13 fw_600 box_sdw11 border-leftb"
                              placeholder="Enter Your Phone No"
                              {...register("num", {
                                required: "Phone number is required",
                                pattern: {
                                  value: /^[0-9]{10}$/,
                                  message: "Phone number must be 10 digits",
                                },
                              })}
                            />
                            {errors.num && <p className="text-danger f_13 fw_600 pt-1 ps-1 m-0">{errors.num.message}</p>}
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-md-12">
                            <h6 className='f_13 fw_600'>Message <span className="text-danger">*</span> :</h6>
                            <textarea
                              className="form-control f_13 fw_600 box_sdw11 border-leftb"
                              placeholder="Message"
                              rows="5"
                              {...register("message", { required: true })}
                            ></textarea>
                            {errors.message && <p className="text-danger f_13 fw_600 pt-1 ps-1 m-0">Message is required.</p>}
                          </div>
                        </div>
                        <div className="row my-3">
                          <div className="col-md-12 d-flex justify-content-center">
                            <button className="btn f_13 fw_600 bg_bck mt-4 text-light" type="submit">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Register;
