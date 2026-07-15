import { useState } from "react";
import { IconMapPin, IconPhone, IconMail, IconClock } from "../components/Icons";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    e.target.reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="hero-eyebrow">Contact</span>
          <h1 style={{ marginTop: 14 }}>We're here to help</h1>
          <p>Reach out for registration support, coordinator queries or general information about the exam.</p>
        </div>
      </div>

      <section className="section-white">
        <div className="container">
          <div className="contact-grid">
            <div>
              <span className="eyebrow">Get in touch</span>
              <h2 style={{ margin: "12px 0 26px" }}>Talk to the Sankalp Foundation team</h2>

              <div className="contact-item">
                <div className="icon-badge"><IconMapPin /></div>
                <div><b>Office Address</b><p style={{ color: "var(--ink-soft)", marginTop: 4 }}>B5 Karan Court, Ahilyanagar - 414001, Maharashtra, India</p></div>
              </div>
              <div className="contact-item">
                <div className="icon-badge"><IconPhone /></div>
                <div><b>Call / WhatsApp</b><p style={{ color: "var(--ink-soft)", marginTop: 4 }}>+91 91300 93832, +91 91300 93830</p></div>
              </div>
              <div className="contact-item">
                <div className="icon-badge"><IconMail /></div>
                <div><b>Email</b><p style={{ color: "var(--ink-soft)", marginTop: 4 }}>info@sankalpfoundation.org</p></div>
              </div>
              <div className="contact-item">
                <div className="icon-badge"><IconClock /></div>
                <div><b>Office Hours</b><p style={{ color: "var(--ink-soft)", marginTop: 4 }}>Mon – Sat, 10:00 AM – 6:00 PM</p></div>
              </div>

              <div className="map-frame" style={{ marginTop: 26 }}>
                <iframe
                  title="Sankalp Foundation Location"
                  loading="lazy"
                  src="https://maps.google.com/maps?q=Ahilyanagar%2C%20Maharashtra&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="form-card" style={{ margin: 0 }}>
              <h3 style={{ marginBottom: 18 }}>Send us a message</h3>
              {sent && <div className="form-msg success">Thank you! Your message has been noted. We'll get back to you soon.</div>}
              <form onSubmit={handleSubmit}>
                <div className="form-grid full">
                  <div className="field"><label>Full Name</label><input required placeholder="Your name" /></div>
                  <div className="field"><label>Email</label><input type="email" required placeholder="you@email.com" /></div>
                  <div className="field"><label>Phone Number</label><input required placeholder="10-digit mobile number" /></div>
                  <div className="field"><label>Message</label><textarea required placeholder="Write your message here" /></div>
                </div>
                <button className="btn btn-primary btn-block" style={{ marginTop: 20 }} type="submit">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
