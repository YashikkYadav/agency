import React from 'react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <>
      {/* Contact Us */}
      <div className="section position-relative">
        <div className="r-container">
          <div className="d-flex flex-column gap-5">
            <div className="d-flex flex-xl-row flex-column justify-content-between">
              <div className="d-flex flex-row align-items-center gap-2">
                <div className="border-bottom border-4 border-accent mb-5" style={{ width: '100px' }}></div>
                <h3 className="scrollanimation animated fadeInDown adr-9">
                  Let's Connect! We're Excited <br /> to Collaborate with You
                </h3>
              </div>
              <p className="align-self-end scrollanimation animated fadeInDown adr-9 adl-1">
                Have questions or need expert digital marketing & creative <br /> solutions? Our team is ready
                to
                assist you.
              </p>
              <div className="sub-heading text-accent second position-absolute"
                style={{ zIndex: -1, top: 0, right: '10%' }}>CONTACT
                US</div>
            </div>
            <div className="row row-cols-lg-4 row-cols-1">
              <div className="col mb-3">
                <div className="card-service gap-5 mw-100 h-100">
                  <h5>Our Location</h5>
                  <div className="d-flex flex-column align-items-center gap-3">
                    <i className="rtmicon rtmicon-location" style={{ fontSize: '20px' }}></i>
                    <p className="m-0">
                     DCM, Jaipur, Rajasthan <br /> India, 302020
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-service gap-5 mw-100 h-100">
                  <h5>Email Address</h5>
                  <div className="d-flex flex-column align-items-center gap-3">
                    <i className="rtmicon rtmicon-envelope" style={{ fontSize: '20px' }}></i>
                    <p className="m-0">
                      info@yashikyadavanco.com
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-service gap-5 mw-100 h-100">
                  <h5>Phone Number</h5>
                  <div className="d-flex flex-column align-items-center gap-3">
                    <i className="rtmicon rtmicon-classic-phone" style={{ fontSize: '20px' }}></i>
                    <p className="m-0">
                      +91 9887007362
                    </p>
                  </div>
                </div>
              </div>
              <div className="col mb-3">
                <div className="card-service gap-5 mw-100 h-100">
                  <h5>Visit Our Website</h5>
                  <div className="d-flex flex-column align-items-center gap-3">
                    <i className="rtmicon rtmicon-globe" style={{ fontSize: '20px' }}></i>
                    <p className="m-0">
                      www.yashikyadavandco.com
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-cols-lg-2 row-cols-1 position-relative">
              <div className="col col-lg-3 mb-3">
                <p>Connect With Us on Social Media:</p>
                <div className="social-icons row">
                   <a href="https://www.facebook.com" aria-label="Follow us on Facebook"><i className="fa-brands fa-facebook-f"></i></a>
                  <a href="https://www.instagram.com" aria-label="Follow us on Instagram"><i className="fa-brands fa-instagram"></i></a>
                  <a href="https://x.com" aria-label="Follow us on Twitter"><i className="fa-brands fa-x-twitter"></i></a>
                   <a href="https://www.youtube.com" aria-label="Follow us on YouTube"><i className="fa-brands fa-youtube"></i></a>
                </div>
              </div>
              <div className="col col-lg-9 mb-3">
                <div className="toast-container">
                  <div id="successToast"
                    className="success_msg toast align-items-center w-100 shadow-none mb-3 border border-success rounded-pill my-4"
                    role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="d-flex p-2">
                      <div
                        className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-success">
                        <i className="rtmicon rtmicon-check f-36 text-success"></i>
                        Your Message Has Been Sent Successfully.
                      </div>
                      <button type="button"
                        className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-success"
                        data-bs-dismiss="toast" aria-label="Close"><i
                          className="rtmicon rtmicon-times"></i></button>
                    </div>
                  </div>
                  <div id="errorToast"
                    className="error_msg toast align-items-center w-100 shadow-none border-danger mb-3 my-4 border rounded-pill"
                    role="alert" aria-live="assertive" aria-atomic="true">
                    <div className="d-flex p-2">
                      <div
                        className="toast-body f-18 d-flex flex-row gap-3 align-items-center text-danger">
                        <i className="rtmicon rtmicon-alert f-36 text-danger"></i>
                        Something Went Wrong! Message Sending Failed.
                      </div>
                      <button type="button"
                        className="me-2 m-auto bg-transparent border-0 ps-1 pe-0 text-danger"
                        data-bs-dismiss="toast" aria-label="Close"><i
                          className="rtmicon rtmicon-times"></i></button>
                    </div>
                  </div>
                </div>

                {/* form start */}
                {/* <form className="d-flex flex-column gap-4 h-100 w-100 needs-validation mb-3 form" noValidate>
                  <h4 className="scrollanimation animated fadeInDown adr-9 adl-2">Send Us a Message</h4>
                  <p>Fill out the form below, and we'll get back to you as soon as possible.</p>
                  <input type="text" className="form-control py-3 px-4" name="name" id="name"
                    placeholder="First Name" required="" />
                  <div className="invalid-feedback">
                    The field is required.
                  </div>
                  <div className="row row-cols-lg-2 row-cols-1">
                    <div className="col mb-3 m-xl-0">
                      <input type="email" className="form-control py-3 px-4" name="email" id="email"
                        placeholder="Your Email" required="" />
                      <div className="invalid-feedback">
                        The field is required.
                      </div>
                    </div>
                    <div className="col">
                      <input type="tel" className="form-control py-3 px-4" name="phone" id="phone"
                        placeholder="Your Phone Number" required="" />
                      <div className="invalid-feedback">
                        The field is required.
                      </div>
                    </div>
                  </div>
                  <select name="service" className="form-select py-3 px-4"
                    aria-label="Default select example">
                    <option value="" disabled selected>Your Subject</option>
                    <option value="">Web Development</option>
                    <option value="Pet Grooming">UI/UX Designer</option>
                    <option value="Pet Daycare">Mobile Development</option>
                    <option value="Pet Insurance">Game Devolepment</option>
                    <option value="Pet Adoption Services:">Graphic Design</option>
                    <option value="Lost and Found Services:">Animation Development
                    </option>
                  </select>
                  <textarea className="form-control py-3 px-4" id="message" name="message" rows="5"
                    placeholder="Your Message"></textarea>

                  <button type="submit" className="w-max-content btn btn-accent align-self-center mt-3">
                    Send Message
                  </button>
                </form> */}
                <ContactForm />

                {/* form end */}
              </div>
              <img src="/image/icon 12.png" className="img-fluid position-absolute d-none d-lg-block" alt="Yashik Yadav and Co contact section decoration"
                style={{ bottom: '-5%', width: '12rem' }} />
            </div>
          </div>

        </div>
      </div>
      {/* End Contact US */}
    </>
  );
};

export default ContactSection;