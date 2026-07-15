import { IconShield, IconAward, IconLayers, IconBook } from "../components/Icons";

export default function About() {
  return (
    <>
      <div className="page-hero">
        <div className="container">
          <span className="hero-eyebrow">About Us</span>
          <h1 style={{ marginTop: 14 }}>Committed for a better tomorrow</h1>
          <p>Sankalp Foundation is a Maharashtra-based educational trust conducting the State Level General Knowledge Examination for school students.</p>
        </div>
      </div>

      <section className="section-white">
        <div className="container">
          <div className="grid-2">
            <div>
              <span className="eyebrow">Our Story</span>
              <h2 style={{ margin: "12px 0 16px" }}>Building curiosity, one exam at a time</h2>
              <p style={{ color: "var(--ink-soft)", lineHeight: 1.7 }}>
                Sankalp Foundation was founded with a simple belief — that general knowledge
                builds confident, aware citizens from a young age. What began as a small
                taluka-level quiz has grown into a State Level General Knowledge Examination
                held every year for students of Std 1st to 8th, across Marathi, English and
                Semi-English medium schools.
                <br /><br />
                We work with a growing network of district and taluka coordinators, exam
                centers and schools to make sure every student — from a city school to a
                village zilla parishad school — gets the same opportunity to test and
                celebrate what they know.
              </p>
            </div>
            <div className="grid-2" style={{ alignContent: "start" }}>
              <div className="card"><div className="icon-badge"><IconShield /></div><h3>Our Mission</h3><p>To make general knowledge assessment accessible, fair and enjoyable for every student in Maharashtra.</p></div>
              <div className="card"><div className="icon-badge"><IconAward /></div><h3>Our Vision</h3><p>A generation of students who are curious, informed and confident about the world around them.</p></div>
              <div className="card"><div className="icon-badge"><IconLayers /></div><h3>Reach</h3><p>340+ exam centers across 34 districts, coordinated by a dedicated volunteer and staff network.</p></div>
              <div className="card"><div className="icon-badge"><IconBook /></div><h3>Since</h3><p>Conducting the Sankalp GK Examination annually, growing in scale and participation each year.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How we're organised</span>
            <h2>District → Taluka → Center → Coordinator</h2>
            <p>Every exam center is mapped through a clear structure, so results and hall tickets always reach the right student, at the right center, through the right coordinator.</p>
          </div>
          <div className="grid-4">
            <div className="card text-center"><div className="medallion" style={{ margin: "0 auto 14px" }}><span>Dt</span></div><h3>District</h3><p>The top-level administrative region a student and center belong to.</p></div>
            <div className="card text-center"><div className="medallion" style={{ margin: "0 auto 14px" }}><span>Tk</span></div><h3>Taluka</h3><p>Sub-region within a district, grouping nearby exam centers together.</p></div>
            <div className="card text-center"><div className="medallion" style={{ margin: "0 auto 14px" }}><span>Ctr</span></div><h3>Exam Center</h3><p>The school or venue where students of that taluka sit for the exam.</p></div>
            <div className="card text-center"><div className="medallion" style={{ margin: "0 auto 14px" }}><span>Co</span></div><h3>Coordinator</h3><p>The Sankalp Foundation representative responsible for that center.</p></div>
          </div>
        </div>
      </section>
    </>
  );
}
