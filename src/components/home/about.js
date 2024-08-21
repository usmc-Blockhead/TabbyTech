import React from "react";
import { Row, Col } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw, faPaintBrush, faRocket } from "@fortawesome/free-solid-svg-icons";

const items = [
    {
        key: "1",
        icon: <FontAwesomeIcon icon={faPaw} />,
        title: "Purr-fect Performance",
        content:
            "Our high-performance solutions are as sleek and agile as a cat. Enjoy seamless, efficient, and powerful experiences that elevate your digital presence.",
    },
    {
        key: "2",
        icon: <FontAwesomeIcon icon={faPaintBrush} />,
        title: "Feline-Inspired Design",
        content:
            "Our designs are clean, modern, and minimalist—just like a cat’s effortless elegance. We create a fresh look that’s both professional and approachable.",
    },
    {
        key: "3",
        icon: <FontAwesomeIcon icon={faRocket} />,
        title: "Streamlined Workflow",
        content:
            "We simplify your workflow with intuitive solutions that work like a cat’s precise movements—efficient, focused, and always hitting the mark.",
    },
];

function AppAbout() {
    return (
        <div
            id="about"
            className="block aboutBlock"
            style={{ backgroundColor: "#F2E8DF", color: "#000000" }} // Beige background, dark text
        >
            <div className="container-fluid">
                <div className="titleHolder" style={{ marginBottom: "30px" }}>
                    <h2 style={{ color: "#000000" }}>About TabbyTech Solutions</h2> {/* Dark text for contrast */}
                </div>
                <div className="contentHolder">
                    <p style={{ color: "#708090" }}> {/* Slate Gray text for subtle contrast */}
                        At TabbyTech Solutions, we blend cutting-edge technology with the unique charm of orange tabby cats to deliver creative, high-quality web development solutions. Our approach is inspired by the agility, precision, and warmth of these feline companions, ensuring that each project is not only technically sound but also brimming with personality. Whether it's crafting a sleek user interface or simplifying complex workflows, we’re here to help you navigate the digital landscape with confidence and creativity.
                    </p>
                </div>
                <Row gutter={[16, 16]}>
                    {items.map((item) => {
                        return (
                            <Col
                                md={{ span: 8 }}
                                key={item.key}>
                                <div className="content" style={{ backgroundColor: "#FFF6E8", padding: "20px", borderRadius: "10px", textAlign: "center", color: "#000000" }}> {/* Cream background, dark text */}
                                    <div className="icon" style={{ fontSize: "40px", marginBottom: "10px", color: "#FFA500" }}>{item.icon}</div> {/* Orange icon */}
                                    <h3>{item.title}</h3>
                                    <p>{item.content}</p>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </div>
        </div>
    );
}

export default AppAbout;
