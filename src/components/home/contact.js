import React from "react";
import CustomButton from "../common/button";
import "../../App.css"; 

function AppContact() {
    return (
            <div id="contact" className="block contactBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>Get in Touch</h2>
                    </div>
                    <form
                        action="https://formsubmit.co/admin@tabbytechsolutions.com"
                        method="POST"
                        className="contactForm"
                    >
                        <input
                            type="hidden"
                            name="_subject"
                            value="New submission!"
                        />
                        <input
                            type="hidden"
                            name="_captcha"
                            value="false"
                        />
                        <input
                            type="hidden"
                            name="_autoresponse"
                            value="Thank you for contacting us!"
                        />
                        <input
                            type="hidden"
                            name="_template"
                            value="table"
                        />

                        <div className="formGroup">
                            <label htmlFor="name">Full Name</label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        
                        <div className="formGroup">
                            <label htmlFor="email">E-mail Address</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                required
                            />
                        </div>
                        
                        <div className="formGroup">
                            <label htmlFor="telephone">Telephone Number</label>
                            <input
                                id="telephone"
                                name="telephone"
                                type="tel"
                                placeholder="Enter your telephone number"
                            />
                        </div>
                        
                        <div className="formGroup">
                            <label htmlFor="subject">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                type="text"
                                placeholder="Enter the subject"
                            />
                        </div>
                        
                        <div className="formGroup">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                rows="4"
                                required
                            ></textarea>
                        </div>
                        
                        <div className="formGroup">
                            <CustomButton
                                type="submit">
                                Submit
                            </CustomButton>
                        </div>
                    </form>
                </div>
            </div>
    );
}

export default AppContact;
