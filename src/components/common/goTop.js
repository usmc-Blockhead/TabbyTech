import React, { useEffect } from "react";
import { BackTop } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowCircleUp as faArrowCircleUpSolid } from "@fortawesome/free-solid-svg-icons";

const GoTop = () => {
    useEffect(() => {
        const goTopButton = document.querySelector(".goTop");
        const footer = document.querySelector(".footer");

        function handleScroll() {
            if (goTopButton && footer) {
                const footerRect = footer.getBoundingClientRect();
                const footerTop = footerRect.top + window.scrollY;
                if (window.scrollY + window.innerHeight >= footerTop) {
                    goTopButton.classList.add("white-icon"); // Add the white-icon class
                } else {
                    goTopButton.classList.remove("white-icon"); // Remove the class when not in the footer
                }
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <BackTop>
            <div
                className="goTop"
                style={{ textAlign: "center" }}>
                <div
                    style={{
                        marginTop: "8px",
                        marginBottom: "8px",
                        fontSize: "16px",
                        color: "#FFA500",
                        justifyContent: "center",
                    }}>
                    Top
                </div>
                <FontAwesomeIcon
                    icon={faArrowCircleUpSolid}
                    size="2x"
                    className="solid-icon"
                />
            </div>
        </BackTop>
    );
};

export default GoTop;
