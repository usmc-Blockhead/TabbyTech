import React from "react";
import GoTop from "./goTop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faTwitter, faLinkedinIn, faPinterestP, faInstagram } from "@fortawesome/free-brands-svg-icons";

function AppFooter() {
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
                <GoTop />
            </div>
        </div>
    );
}

export default AppFooter;
