import React from "react";
import CustomButton from "../common/customButton";


import { Carousel } from "antd";

const items = [
    {
        key: "1",
        title: "Crafting Code with Cattitude and Pawsitivity",
        content:
            "Where our creativity meets precision in every line of code. At TabbyTech Solutions, we infuse every project with the playful energy of our feline muses, ensuring both functionality and flair.",
        image: "../../assets/images/"
    },
    {
        key: "2",
        title: "Feline-Inspired Code with a Dash of Orange.",
        content:
            "Where we blend creativity and precision with a touch of playful charm. At TabbyTech Solutions, our work is as unique and vibrant as the orange tabbies that inspire us.",
    },
    {
        key: "3",
        title: "Where Development Meets the Spirit of Orange Cats",
        content:
            "We infuse every project with curiosity, creativity, and a dash of fun. At TabbyTech Solutions, we channel the vibrant energy of our orange tabby inspirations into innovative and dynamic solutions.",
    },
];

function AppHero() {
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
            id="hero"
            className="heroBlock">
            <Carousel autoplay speed={1000} autoplaySpeed={10000}>
                {items.map((item) => {
                    return (
                        <div
                            key={item.key}
                            className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className="btnHolder">
                                    <CustomButton onPress={scrollToContact} title="Learn More" />
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>
        </div>
    );
}

export default AppHero;