import "../styles/Footer.css";

import NavLinks from "./NavLinks"

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="top">
                    <div className="logo"></div>
                    <NavLinks />
                </div>
                    <div className="bottom">
                        <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                        and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                        visit our demo facility - we're open 7 days a week.</p>
                        <p>Copyright 2021. All Rights Reserved</p>
                    </div>
                </div>
        </footer>
    )
}

export default Footer
