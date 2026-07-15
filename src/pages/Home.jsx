import logo from "../assets/sankalp-logo.png";
import Ticker from "../components/Ticker";
import { navigate } from "../router";
import { IconBook, IconLayers, IconShield, IconAward, IconClipboard, IconTrophy } from "../components/Icons";
import { TOPPERS } from "../data/mockData";

export default function Home() {
  return (
    <>
      <Ticker />

      <section className="hero">
        <div className="hero-rays" />
        <div className="container">
          <div>
            <span className="hero-eyebrow">Registrations Open · 2027</span>
            <h1>
              State Level <em>General Knowledge</em><br /> Examination for Std 1st – 8th
            </h1>
            <p className="lead">
              Sankalp Foundation's flagship GK examination reaches classrooms across
              Maharashtra in Marathi, English and Semi-English medium — building the habit
              of curiosity, one question at a time.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary" onClick={() => navigate("/signup")}>Register as Student</button>
              <button className="btn btn-outline-light" onClick={() => navigate("/login")}>Coordinator / Admin Login</button>
            </div>
            <div className="hero-stats">
              <div className="hero-stat"><b>18,400+</b><span>Students Registered</span></div>
              <div className="hero-stat"><b>340+</b><span>Exam Centers</span></div>
              <div className="hero-stat"><b>34</b><span>Districts Covered</span></div>
              <div className="hero-stat"><b>8</b><span>Std 1st – 8th</span></div>
            </div>
          </div>

          <div className="hero-badge-card">
            <img src={logo} alt="Sankalp Foundation" />
            <h3>Sankalp Foundation</h3>
            <div className="loc">Pune, Maharashtra</div>
            <span className="exam-pill">GK Exam 2026 · 16 August</span>
          </div>
        </div>
      </section>

      <section className="section-white">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">Why Sankalp</span>
            <h2>An examination built around every student</h2>
            <p>From registration to result, every step of the Sankalp GK Examination is designed to be simple for students, transparent for parents, and easy to manage for coordinators.</p>
          </div>
          <div className="grid-3">
            <div className="card">
              <div className="icon-badge"><IconLayers /></div>
              <h3>Three Mediums</h3>
              <p>Papers set in Marathi, English and Semi-English so every student attempts the exam in the medium they learn in.</p>
            </div>
            <div className="card">
              <div className="icon-badge"><IconBook /></div>
              <h3>Std 1st to 8th</h3>
              <p>Age-appropriate question papers for junior and senior groups, aligned with the school-level GK syllabus.</p>
            </div>
            <div className="card">
              <div className="icon-badge"><IconShield /></div>
              <h3>Coordinator Network</h3>
              <p>Every exam center is mapped to a district, taluka and a dedicated coordinator who oversees conduct and results.</p>
            </div>
            <div className="card">
              <div className="icon-badge"><IconClipboard /></div>
              <h3>Simple Registration</h3>
              <p>Students register online in minutes and instantly receive a roll number and login for the student portal.</p>
            </div>
            <div className="card">
              <div className="icon-badge"><IconAward /></div>
              <h3>Merit Recognition</h3>
              <p>District, division and state-level toppers are felicitated with certificates, medals and scholarships.</p>
            </div>
            <div className="card">
              <div className="icon-badge"><IconTrophy /></div>
              <h3>Instant Results</h3>
              <p>Students track their result, rank and performance directly from their personal dashboard.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-cream">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow">How it works</span>
            <h2>Four steps from registration to result</h2>
          </div>
          <div className="steps">
            <div className="step"><div className="num">01</div><h4>Register</h4><p>Fill the student registration form with class, medium, district, taluka and center.</p></div>
            <div className="step"><div className="num">02</div><h4>Get Roll Number</h4><p>Receive an instant roll number and password to access the student portal.</p></div>
            <div className="step"><div className="num">03</div><h4>Give the Test</h4><p>Log in on exam day and attempt the GK test allotted to your class group.</p></div>
            <div className="step"><div className="num">04</div><h4>View Result</h4><p>Check your score, rank and certificate from your dashboard the moment results are declared.</p></div>
          </div>
        </div>
      </section>

      <section className="section-navy">
        <div className="container">
          <div className="section-head">
            <span className="eyebrow" style={{ color: "var(--gold)" }}>2025 Toppers</span>
            <h2>Celebrating our state-level achievers</h2>
            <p>A glimpse of the students who topped last year's Sankalp GK Examination across Maharashtra.</p>
          </div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr><th>Rank</th><th>Student</th><th>District</th><th>Class</th><th>Marks</th></tr>
              </thead>
              <tbody>
                {TOPPERS.map((t) => (
                  <tr key={t.rank}>
                    <td><span className="rank-pill">{t.rank}</span></td>
                    <td>{t.name}</td>
                    <td>{t.district}</td>
                    <td>{t.class}</td>
                    <td>{t.marks} / {t.total}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center" style={{ marginTop: 30 }}>
            <button className="btn btn-primary" onClick={() => navigate("/result")}>View Full Result</button>
          </div>
        </div>
      </section>
    </>
  );
}
