import "../styles/Footer.css";

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-left">
                <div className="logo"></div>
                <p>Audiophile is an all in one stop to fulfill your audio needs. We're a small team of music lovers 
                    and sound specialists who are devoted to helping you get the most out of personal audio. Come and 
                    visit our demo facility - we’re open 7 days a week.</p>
                <p>Copyright 2021. All Rights Reserved</p>
                </div>
                <div className="footer-right">
                <nav className="nav-bar">
                    <ul>
                    <li><a href="./index.html">Home</a></li>
                    <li><a href="./html/headphones.html">Headphones</a></li>
                    <li><a href="html/headphones.html">Speakers</a></li>
                    <li><a href="html/earphones.html">Earphones</a></li>
                    </ul>
                </nav>
                <nav className="social-medias-nav">
                    <ul>
                    <li><span className="img icon fb-icon"></span></li>
                    <li><span className="img icon twitter-icon"></span></li>
                    <li><span className="img icon ig-icon"></span></li>
                    </ul>
                </nav>
                </div>
            </div>`
        </footer>
    )
}

export default Footer
