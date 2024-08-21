import React from "react";

import { List, Card, Button } from "antd";

const data = [
    {
        title: "Basic",
        content: [
            {
                price: "$59.99",
                site: "1 page basic site",
                contact: "Contact Form",
                user: "1 user",
                support: "24/7 email support",
                domain: "Domain and Hosting not included",
                backup: "Safe, reliable backup",
            },
        ],
    },
    {
        title: "Premium",
        content: [
            {
                price: "$199.99",
                site: "3 page premium site",
                contact: "Contact Form and Chat Bot",
                user: "up to 5 users",
                support: "24/7 support",
                domain: "First year Domain and Hosting included",
                backup: "Safe, reliable backup",
            },
        ],
    },
    {
        title: "Enterprise",
        content: [
            {
                price: "Contact for Qoute",
                site: "Premium site by design",
                contact: "Many options by designs",
                user: "up to 15 users",
                support: "24/7 support",
                domain: "First year Domain and Hosting included",
                backup: "Safe, reliable backup",

            },
        ],
    },
];

function AppPricing() {
    return (
        <div
            id="pricing"
            className="block pricingBlock bgGray">
            <div className="container-fluid">
                <div className="titleHolder">
                    <h2>Choose a plan to fit your needs</h2>
                </div>
                <List
                    grid={{
                        gutter: 16,
                        xs: 1,
                        sm: 1,
                        md: 3,
                        lg: 3,
                        xl: 3,
                        xxl: 3,
                    }}
                    dataSource={data}
                    renderItem={(item) => (
                        <List.Item>
                            <Card title={item.title}>
                                <p className="large">{item.content[0].price}</p>
                                <p>{item.content[0].site}</p>
                                <p>{item.content[0].contact}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].domain}</p>
                                <p>{item.content[0].backup}</p>
                                <Button
                                    type="primary"
                                    size="large">
                                    <i className="fab fa-telegram-plane"></i>{" "}
                                    Get Started
                                </Button>
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default AppPricing;
