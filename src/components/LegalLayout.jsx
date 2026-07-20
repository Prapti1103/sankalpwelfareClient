import "./legal.css";

export default function LegalLayout({
    title,
    subtitle,
    children
}) {

    return (

        <>

            <section className="legalHero">

                <div className="container">

                    <span className="legalTag">
                        LEGAL
                    </span>

                    <h1>{title}</h1>

                    <p>{subtitle}</p>

                </div>

            </section>

            <section className="legalSection">

                <div className="container">

                    <div className="legalCard">

                        <div className="legalInfo">

                            <div>

                                <span>Effective Date</span>

                                <strong>20 July 2026</strong>

                            </div>

                            <div>

                                <span>Last Updated</span>

                                <strong>20 July 2026</strong>

                            </div>

                        </div>

                        {children}

                    </div>

                    <div className="legalContact">

                        <h3>Need Assistance?</h3>

                        <p>
                            If you have any questions regarding this policy,
                            please contact us.
                        </p>

                        <div className="contactRow">

                            <div>

                                📧 info@sankalpfoundation.org

                            </div>

                            <div>

                                📞 +91 91300 93832

                            </div>

                        </div>

                    </div>

                </div>

            </section>

        </>

    );

}