import React from "react";
import Button from "../common/button";
// import { useForm, ValidationError } from "@formspree/react";
import { Input } from "antd";

const { TextArea } = Input;

function AppContact() {
    // const [state, handleSubmit] = useForm("xjkbldjk");

    // if (state.succeeded) {
    //     return <p>Thanks for Contacting us!</p>;
    // }

    return (
        <div
            id="AppContact"
            className="block contactBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Get in Touch</h2>
                </div>
                <form
                    action="https://formsubmit.co/admin@tabbytechsolutions.com"
                    method="POST"
                    className="login-form"
                    initialValues={{ remember: true }}>
                    {/* Hidden fields for advanced features */}
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
                    {/* <input type="hidden" name="_cc" value="another@email.com" /> */}
                    {/* <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase" /> */}
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

                    <input
                        type="text"
                        name="name"
                        placeholder="Please enter your full name!"
                        required
                    />
                    <input
                        name="email"
                        type="email"
                        placeholder="Please input your E-mail!"
                        required
                    />
                    <input
                        name="telephone"
                        type="number"
                        placeholder="Telephone"
                    />
                    <input
                        name="subject"
                        type="text"
                        placeholder="Subject"
                    />
                    <input
                        name="message"
                        type="text"
                        placeholder="Message"
                    />

                    <Button
                        type="submit"
                        className="login-form-button">
                        Submit
                    </Button>
                </form>
            </div>
        </div>
    );
}

export default AppContact;
