function Contact() {
  return (
    <main className="page info-page">
      <section className="page-hero compact">
        <p className="eyebrow">Contact Us</p>
        <h1>Let’s build better shared living together.</h1>
        <p className="page-intro">
          Reach out for project demos, collaboration, feedback, or support. This
          page gives your FlatmateAI project a simple and clear contact presence.
        </p>
      </section>

      <section className="contact-layout">
        <div className="info-card">
          <h3>Project Contact</h3>
          <p>Email: hello@flatemateai.com</p>
          <p>Phone: +91 98765 43210</p>
          <p>Location: Kolkata, India</p>
        </div>

        <form className="contact-form">
          <label>
            Name
            <input placeholder="Enter your name" type="text" />
          </label>
          <label>
            Email
            <input placeholder="Enter your email" type="email" />
          </label>
          <label>
            Message
            <textarea placeholder="Write your message" rows="5" />
          </label>
          <button className="primary-button" type="submit">
            Send Message
          </button>
        </form>
      </section>
    </main>
  );
}

export default Contact;
