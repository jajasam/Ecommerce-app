import "../styles/Footer.css";

import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as Facebook } from "../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Twitter } from "../assets/shared/desktop/icon-twitter.svg";
import { ReactComponent as Instagram } from "../assets/shared/desktop/icon-instagram.svg";

import NavLinks from "./NavLinks"

function Footer() {
    return (
        <footer>
            <div className="footer-content container">
                <div className="top">
                    <Logo />
                    <NavLinks />
                </div>
                <div className="bottom">
                    <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                    visit our demo facility - we're open 7 days a week.</p>
                    <div className="socials">
                        <Facebook />
                        <Twitter />
                        <Instagram />
                    </div>
                </div>
                <p className="copyright">Copyright 2021. All Rights Reserved</p>
            </div>
        </footer>
    )
}

export default Footer
