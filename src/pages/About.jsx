import heroImage from "../assets/hero.png";

function About() {
  return (
    <main className="page info-page">
      <section className="about-hero">
        <div className="page-hero compact about-copy">
          <p className="eyebrow">About FlatmateAI</p>
          <h1>Compatibility-first accommodation matching.</h1>
          <p className="page-intro">
            FlatmateAI helps students and professionals find better roommates by
            looking beyond rent and location. We compare lifestyles, habits, and
            living preferences so shared spaces work in real life, not just on
            paper.
          </p>
        </div>

        <div className="about-visual">
          <div className="about-image-frame">
            <img
              alt="Flatmate matching illustration"
              className="about-image"
              src={heroImage}
            />
          </div>
        </div>
      </section>

      <section className="info-grid">
        <article className="info-card">
          <h3>What we solve</h3>
          <p>
            Traditional roommate search often stops at budget and area. Our
            platform adds routine, cleanliness, social habits, and schedule
            compatibility to reduce mismatches.
          </p>
        </article>
        <article className="info-card">
          <h3>How matching works</h3>
          <p>
            Users submit structured preferences, and the system generates a
            compatibility score with a detailed breakdown for transparency.
          </p>
        </article>
        <article className="info-card">
          <h3>Who it is for</h3>
          <p>
            Ideal for college students, interns, and working professionals
            looking for safer, smarter, and more compatible co-living options.
          </p>
        </article>
      </section>
    </main>
  );
}

export default About;
