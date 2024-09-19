import React from "react";
import CustomButton from "../common/customButton";
import { List, Card } from "antd";

const data = [
    {
        title: "Basic",
        content: [
            {
                price: "Negotiable",
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
                price: "Let's Talk!",
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
                price: "Get a Qoute",
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
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        } else {
            console.error("Element with id 'contact' not found.");
        }
    };

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
                            <Card title={item.title} className="card-content">
                                <p className="large">{item.content[0].price}</p>
                                <p>{item.content[0].site}</p>
                                <p>{item.content[0].contact}</p>
                                <p>{item.content[0].user}</p>
                                <p>{item.content[0].support}</p>
                                <p>{item.content[0].domain}</p>
                                <p>{item.content[0].backup}</p>
                                <CustomButton onPress={scrollToContact} title="Get Started" />
                            </Card>
                        </List.Item>
                    )}
                />
            </div>
        </div>
    );
}

export default AppPricing;
