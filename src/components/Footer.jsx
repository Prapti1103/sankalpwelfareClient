import logo from "../assets/sankalp-logo.png";
import { IconMapPin, IconPhone, IconMail, IconFacebook, IconInstagram, IconYoutube, IconTwitter, IconLinkedin, IconWhatsapp } from "./Icons";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src={logo} alt="Sankalp Foundation" />
              <b>Sankalp Foundation</b>
            </div>
            <p className="desc">
              Committed for a better tomorrow — conducting the State Level General Knowledge
              Examination for students of Std 1st to 8th across Marathi, English and
              Semi-English mediums, and rewarding merit at every district and taluka level.
            </p>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><IconFacebook /></a>
              <a href="#" aria-label="Instagram"><IconInstagram /></a>
              <a href="#" aria-label="YouTube"><IconYoutube /></a>
              <a href="#" aria-label="Twitter / X"><IconTwitter /></a>
              <a href="#" aria-label="LinkedIn"><IconLinkedin /></a>
              <a href="https://wa.me/919130093832" aria-label="WhatsApp"><IconWhatsapp /></a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#/">Home</a></li>
              <li><a href="#/about">About Us</a></li>
              <li><a href="#/result">Results & Toppers</a></li>
              <li><a href="#/contact">Contact Us</a></li>
              <li><a href="#/signup">Student Registration</a></li>
            </ul>
          </div>

          <div>
            <h4>Portal Access</h4>
            <ul>
              <li><a href="#/login">Student Login</a></li>
              <li><a href="#/login">Coordinator Login</a></li>
              <li><a href="#/login">Admin Login</a></li>
              <li><a href="#/result">Answer Key</a></li>
              <li><a href="#/result">Download Hall Ticket</a></li>
            </ul>
          </div>

          <div>
            <h4>Get In Touch</h4>
            <ul>
              <li style={{ display: "flex", gap: 10 }}><IconMapPin width={16} height={16} /> B5 Karan Court, Ahilyanagar - 414001, Maharashtra</li>
              <li style={{ display: "flex", gap: 10 }}><IconPhone width={16} height={16} /> +91 91300 93832</li>
              <li style={{ display: "flex", gap: 10 }}><IconMail width={16} height={16} /> info@sankalpfoundation.org</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Sankalp Foundation. All rights reserved.</span>
          <div style={{ display: "flex", gap: 18 }}>
            <a href="#/about">Privacy Policy</a>
            <a href="#/about">Terms of Use</a>
            <a href="#/contact">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
