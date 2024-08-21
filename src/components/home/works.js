import React from "react";
import { Button, Modal } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";

class AppWorks extends React.Component {
    state = { visible: false };

    showModal = () => {
        this.setState({
            visible: true,
        });
    };

    handleCancel = (e) => {
        console.log(e);
        this.setState({
            visible: false,
        });
    };

    render() {
        return (
            <div
                id="works"
                className="block worksBlock">
                <div className="container-fluid">
                    <div className="titleHolder">
                        <h2>The Cats of TabbyTech Solutions</h2>
                        <p>
At TabbyTech Solutions, our brand is as unique and vibrant as the orange cats that inspire it. Much like how the orange gene is a rare and special trait, our approach to technology and creativity stands out in a crowded industry. Just as my rare female orange tabby, Pumpkin, defies the odds with her lively and resilient personality, TabbyTech Solutions brings a distinctive blend of innovation and adaptability to every project we undertake. Sunny, my male orange cat, embodies the common yet remarkable traits of warmth and reliability—qualities that we strive to infuse into our work. Together, these two cats symbolize the perfect balance of rarity and consistency, much like the solutions we provide to our clients. At TabbyTech Solutions, we believe in harnessing the energy, creativity, and uniqueness of our feline muses to deliver code that’s not just functional but also a true reflection of our clients' distinct needs and visions.</p>
                    </div>
                    <div className="contentHolder">
                        <Button
                            type="primary"
                            size="large"
                            icon={<FontAwesomeIcon icon={faPaw} />}
                            onClick={this.showModal}>
                            See the Gang!
                        </Button>
                    </div>
                    <Modal
                        visible={this.state.visible}
                        onCancel={this.handleCancel}
                        footer={null}
                    >
                        <img src="../images/Pumpkin (2).jpg" alt="pumpkin & sunny" style={{ width: "100%" }}/>
                    </Modal>
                </div>
            </div>
        );
    }
}

export default AppWorks;
