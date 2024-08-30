import React, { useEffect } from "react";
import { BackTop } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faArrowCircleUp as faArrowCircleUpSolid} from "@fortawesome/free-solid-svg-icons";
import { faCircleUp as faCircleUpRegular } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";

function AppFooter() {
    useEffect(() => {
        const goTopButton = document.querySelector('.goTop');
        const footer = document.querySelector('.footer');

        function handleScroll() {
            if (goTopButton && footer) {
                const footerRect = footer.getBoundingClientRect();
                const footerTop = footerRect.top + window.scrollY;

                if (window.scrollY + window.innerHeight >= footerTop) {
                    goTopButton.classList.add('goTop.white');
                } else {
                    goTopButton.classList.remove('goTop.white');
                }
            }
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="container-fluid">
            <div className="footer">
                <div className="logo">
                    <FontAwesomeIcon icon={faBolt} />
                    <a href="http://google.com">TabbyTech Solutions</a>
                </div>
                <ul className="socials">
                    <li>
                        <a href="https://www.facebook.com/">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.twitter.com/">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.pinterest.com/">
                            <FontAwesomeIcon icon={faPinterestP} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>
                    </li>
                </ul>
                <div className="copyright">&copy; 2024 TabbyTech Solutions</div>
                <BackTop>
                    <div className="goTop" style={{ textAlign: "center" }}>
                        <div style={{ marginTop: "8px", marginBottom: "8px", fontSize: "16px", color: "#FFA500" }}>
                            Top
                        </div>
                        <FontAwesomeIcon icon={faArrowCircleUpSolid} size="3x" className="solid-icon"  />
                        <FontAwesomeIcon icon={faCircleUpRegular} size="3x" className="regular-icon" hidden/>
                    </div>
                </BackTop>
            </div>
        </div>
    );
}

export default AppFooter;
