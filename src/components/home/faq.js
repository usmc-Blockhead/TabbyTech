import React from "react";
import CustomButton from "../common/customButton";
import { MailOutlined } from "@ant-design/icons";

import { Collapse } from "antd";

const { Panel } = Collapse;

function AppFaq() {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Element with id 'AppContact' not found.");
        }
    };

    return (
        <div
            id="faq"
            className="block faqBlock">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Frequently Asked Questions</h2>
                </div>
                <Collapse defaultActiveKey={["1"]}>
                    <Panel
                        header="Do you work on projects that are not cat-related?"
                        key="1">
                        <p>
                            Of course, I can certainly help with projects that are not about cats! While our brand and some of the projects have a fun feline theme, I'm here to assist with any kind of tech project or topic you're working on. Whether it's a new web development project, data analysis, cybersecurity, or anything else, I’m ready to help you out. What are you working on today?
                        </p>
                    </Panel>
                    <Panel
                        header="What services does TabbyTech Solutions offer? "
                        key="2">
                        <p>
                            TabbyTech Solutions specializes in web development, custom software solutions, and digital branding. We offer end-to-end services from design and development to deployment and maintenance, all tailored to meet the unique needs of creative agencies, small businesses, and tech startups.
                        </p>
                    </Panel>
                    <Panel
                        header="How does TabbyTech Solutions ensure the quality of its projects?"
                        key="3">
                        <p>
                            We follow a rigorous development process that includes thorough testing, continuous integration, and regular client feedback. Our team is dedicated to delivering high-quality, reliable, and efficient solutions that meet your business objectives.
                        </p>
                    </Panel>
                    <Panel
                        header="Can TabbyTech Solutions handle both front-end and back-end development?"
                        key="4">
                        <p>
                            Yes, TabbyTech Solutions is proficient in both front-end and back-end development. We use the latest technologies and frameworks to build responsive, user-friendly interfaces and robust, scalable back-end systems that work seamlessly together.
                        </p>
                    </Panel>
                    <Panel
                        header="What makes TabbyTech Solutions different from other tech companies? "
                        key="5">
                        <p>
                            Our unique blend of technical expertise and creativity, inspired by the charm and personality of orange tabby cats, sets us apart. We focus on delivering solutions that are not only functional but also engaging and visually appealing, all while maintaining a warm, professional, and approachable persona.
                        </p>
                    </Panel>
                    <Panel
                        header="Is the TabbyTech Solutions chatbot fully functional?"
                        key="6">
                        <p>
                            The TabbyTech Solutions chatbot is currently in an experimental phase. While it offers helpful responses and assistance, we're continually refining its features and capabilities to better serve your needs. We appreciate your feedback as we work to improve its performance and functionality!
                        </p>
                    </Panel>
                </Collapse>
                <div className="quickSupport">
                    <h3>Want quick support?</h3>
                    <p>
                        Get quick support 24/7 with our dedicated customer
                        service team. We're here to help you manage your
                        account, answer any questions, and resolve any issues.
                        Trust us to make your experience stress-free and
                        enjoyable.
                    </p>
                    <CustomButton
                        onClick={scrollToContact}>
                        <MailOutlined /> Email your questions
                    </CustomButton>
                </div>
            </div>
        </div>
    );
}

export default AppFaq;
