function Home() {
  return (
    <main className="page home-page">
      <section className="hero-section">
        <div className="hero-copy">
          <p className="eyebrow">AI-powered roommate discovery</p>
          <h1>Find a flatmate who actually fits your lifestyle.</h1>
          <p className="hero-text">
            Students and professionals can post accommodation preferences like
            budget, area, gender, sleep schedule, and habits, then get matched
            with compatible roommates through clear lifestyle scores.
          </p>
          <div className="hero-actions">
            <button className="primary-button" type="button">
              Start Matching
            </button>
            <button className="secondary-button" type="button">
              Explore Features
            </button>
          </div>
        </div>

        <div className="hero-card">
          <p className="card-label">Compatibility Breakdown</p>
          <div className="score-row">
            <span>Overall Match</span>
            <strong>92%</strong>
          </div>
          <div className="score-bar">
            <span style={{ width: "92%" }} />
          </div>
          <ul className="match-points">
            <li>Budget alignment: Strong</li>
            <li>Sleep schedule: Night owl + flexible</li>
            <li>Cleanliness habits: Highly compatible</li>
            <li>Preferred area: 2.1 km radius overlap</li>
          </ul>
        </div>
      </section>

      <section className="feature-section">
        <div className="section-heading">
          <p className="eyebrow">Core Features</p>
          <h2>Built for better shared living decisions</h2>
        </div>

        <div className="feature-grid">
          <article className="feature-card">
            <h3>Preference-based profiles</h3>
            <p>
              Post rent range, preferred location, gender preference, daily
              routine, and lifestyle habits in one structured profile.
            </p>
          </article>
          <article className="feature-card">
            <h3>AI compatibility scores</h3>
            <p>
              Match users using lifestyle data, giving each pairing an easy-to-read
              compatibility score and reasoning summary.
            </p>
          </article>
          <article className="feature-card">
            <h3>In-app messaging</h3>
            <p>
              Let matched users connect instantly, ask questions, and discuss
              move-in plans without leaving the platform.
            </p>
          </article>
          <article className="feature-card">
            <h3>Map-based area view</h3>
            <p>
              Visualize listing hotspots and nearby preferred neighborhoods so
              users can compare locations at a glance.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Home;
