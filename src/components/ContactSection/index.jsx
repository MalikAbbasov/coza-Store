import React from 'react'
import "./contact.scss"
function ContactSection() {
    return (
        <div>
            <section id='contact'>
                <div className="contact_up">
                    <div className="up_left">
                        <div className="container">
                            <h2>Send Us A Message</h2>
                            <div className="email">
                                <i class="fa-regular fa-envelope"></i>
                                <input type="email" placeholder='Enter Your Email' />
                            </div>
                            <textarea className='mesaj' placeholder='Enter your Message' id="" cols="30" rows="10"></textarea>
                            <button>SUBMIT</button>
                        </div>
                    </div>
                    <div className="up_right">
                        <div className="container">
                            <div className="location">
                                <div className='cntct_up'>
                                    <i class="fa-solid fa-location-dot"></i>
                                    <h4>Address</h4>
                                </div>
                                <p>Coza Store Center 8th floor, 379 Hudson St, New York, NY 10018 US</p>
                            </div>
                            <div className="tel">
                                <div className='cntct_up'>
                                    <i class="fa-solid fa-phone"></i>
                                    <h4>Lets Talk</h4>
                                </div>
                                <p>055-249-91-32</p>
                            </div>
                            <div className="mail">
                                <div className='cntct_up'>
                                    <i class="fa-solid fa-envelope"></i>
                                    <h4>Sale Support</h4>
                                </div>
                                <p>malik.abbasov03@gmail.com</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.7219612139975!2d49.81406347775348!3d40.37068900225907!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307dc2563c5d8b%3A0x8243dbb191336be0!2zQU1FQSBUb3JwYXHFn8O8bmFzbMSxcSB2yZkgQXFyb2tpbXlhIMSwbnN0aXR1dHU!5e0!3m2!1sen!2saz!4v1702653636265!5m2!1sen!2saz" ></iframe>
                </div>
            </section>
        </div>
    )
}

export default ContactSection