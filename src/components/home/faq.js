import React from "react";
import Button from "../common/button";

import { Collapse } from "antd";

const { Panel } = Collapse;

function AppFaq() {
    const scrollToContact = () => {
        const element = document.getElementById("AppContact");
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
                        header="Coming Soon!"
                        key="1">
                        <p>
                            Coming Soon!
                        </p>
                    </Panel>
                    <Panel
                        header="Coming Soon!"
                        key="2">
                        <p>
                            Coming Soon!
                        </p>
                    </Panel>
                    <Panel
                        header="Coming Soon!"
                        key="3">
                        <p>
                            Coming Soon!
                        </p>
                    </Panel>
                    <Panel
                        header="Coming Soon!"
                        key="4">
                        <p>
                            Coming Soon!
                        </p>
                    </Panel>
                    <Panel
                        header="Coming Soon!"
                        key="5">
                        <p>
                            Coming Soon!
                        </p>
                    </Panel>
                    <Panel
                        header="Coming Soon!"
                        key="6">
                        <p>
                            Coming Soon!
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
                    <Button
                        type="primary"
                        size="large"
                        className="custom-button"
                        onClick={scrollToContact}>
                        <i className="fas fa-envelope"></i> Email your question
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AppFaq;
