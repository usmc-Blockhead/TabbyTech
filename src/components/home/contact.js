import React from "react";
import Button from "../common/button";
import { Input } from "antd";

const { TextArea } = Input;

function AppContact() {
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
                    method="POST">
                    {/* Hidden fields for advanced features */}
                    {/* <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" /> */}
                    {/* <input type="hidden" name="_subject" value="New submission!" /> */}
                    {/* <input type="hidden" name="_cc" value="another@email.com" /> */}
                    {/* <input type="hidden" name="_blacklist" value="spammy pattern, banned term, phrase" /> */}
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

                    <form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}>
                        <form
                            name="fullname"
                            input
                            type="text"
                            rules={[
                                {
                                    required: true,
                                    message: "Please enter your full name!",
                                },
                            ]}>
                            <Input
                                placeholder="Full Name"
                                name="name"
                                required
                            />
                        </form>
                        <form
                            name="email"
                            input
                            type="email"
                            rules={[
                                {
                                    type: "email",
                                    message: "The input is not valid E-mail!",
                                },
                                {
                                    required: true,
                                    message: "Please input your E-mail!",
                                },
                            ]}>
                            <Input
                                placeholder="Email Address"
                                name="email"
                                required
                            />
                        </form>
                        <form
                            name="telephone"
                            input
                            type="number">
                            <Input
                                placeholder="Telephone"
                                name="telephone"
                            />
                        </form>
                        <form
                            name="subject"
                            input
                            type="text">
                            <Input
                                placeholder="Subject"
                                name="subject"
                            />
                        </form>
                        <form
                            name="message"
                            input
                            type="text">
                            <TextArea
                                placeholder="Message"
                                name="message"
                            />
                        </form>
                        {/* <Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                                rules={[
                                    {
                                        validator: (_, value) =>
                                            value
                                                ? Promise.resolve()
                                                : Promise.reject(
                                                      "Should accept agreement"
                                                  ),
                                    },
                                ]}>
                                <Checkbox>
                                    I agree with terms and conditions.
                                </Checkbox>
                            </Form.Item>
                        </Form.Item> */}
                        <form>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button">
                                Submit
                            </Button>
                        </form>
                    </form>
                </form>
            </div>
        </div>
    );
}

export default AppContact;
