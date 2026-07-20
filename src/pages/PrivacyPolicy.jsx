import "./PrivacyPolicy.css";

export default function PrivacyPolicy() {
  return (
    <main className="privacy-page">

      {/* Banner */}
      <section className="privacy-banner">
        <div className="container">

          <div className="privacy-heading">
            <h1>PRIVACY POLICY</h1>
          </div>

          <p className="privacy-subtitle">
            Please read this Privacy Policy carefully before using Sankalp
            Foundation services.
          </p>

        </div>
      </section>

      {/* Content */}
      <section className="container">

        <div className="privacy-card">

          <p>
            Sankalp Foundation respects your privacy and is committed to
            protecting the personal information collected through our website
            and examination registration portal.
          </p>

          <p>
            We collect only the information required for student registration,
            communication, examination management and secure payment
            processing.
          </p>

          <p>
            Your information is used to process registrations, generate hall
            tickets, publish examination results and provide important
            notifications.
          </p>

          <p>
            We maintain appropriate technical and administrative safeguards to
            protect your information and do not sell or misuse personal data.
          </p>

          <p>
            By accessing or using this website, you agree to the collection and
            use of information in accordance with this Privacy Policy.
          </p>

          <div className="privacy-footer">

            <h3>Contact Us</h3>

            <p>
              <strong>Sankalp Foundation</strong><br />
              B5 Karan Court, Ahilyanagar – 414001, Maharashtra
            </p>

            <p>
              📧 info@sankalpfoundation.org
            </p>

            <p>
              📞 +91 91300 93832
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}