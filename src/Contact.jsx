export default function Contact() {
  return (
    <section id="contact" className="contact_header">
      <div className="container">

        <div className="intro_about d-flex justify-content-between flex-wrap">
          <p className="number">04 / CONTACT</p>
          <p className="who">GET IN TOUCH</p>
        </div>

        <div className="con_moto">
          <h1>LET'S BUILD</h1>
          <h1>SOMETHING THAT</h1>
          <h1 className="breath">BREATHES</h1>
        </div>

        <div className="row mt-5 g-5 align-items-start">

          <div className="col-lg-4 col-md-5 col-12">

            <div className="info">

              <p className="email">EMAIL</p>

              <a href="mailto:insightoh@gmail.com" className="insightoh">
                <i className="bi bi-envelope-fill"></i>
                insightoh@gmail.com
              </a>

              <p className="location">LOCATION</p>

              <a href="#" className="loc">
                <i className="bi bi-geo-alt-fill"></i>
                Madurai, Tamil Nadu
              </a>

              <p className="social">SOCIAL</p>

              <a href="#" className="insta">
                Twitter, LinkedIn
              </a>

            </div>

          </div>

          <div className="col-lg-8 col-md-7 col-12">

            <div className="contact_card">

              <form className="contact_form">

                <label>YOUR NAME</label>
                <input type="text" />

                <label>YOUR EMAIL</label>
                <input type="email" />

                <label>TELL US ABOUT YOUR PROJECT</label>
                <textarea rows="5"></textarea>

                <button type="submit" className="send_btn">
                  Send Message →
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}