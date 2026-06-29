export default function About() {
  return (
    <section id="about" className="about container-fluid">

      <div className="row g-5 align-items-start">

        <div className="col-12 col-lg-6">

          <div className="intro_about d-flex justify-content-between flex-wrap">
            <p className="number">01 / ABOUT</p>
            <p className="who">WHO WE ARE</p>
          </div>

          <div className="hero_about">
            <h1>CRAFTING</h1>
            <h1>SOFTWARE THAT</h1>
            <h1><span className="evolve">EVOLVES</span> WITH</h1>
            <h1>YOUR BUSINESS.</h1>
          </div>

          <div className="para_about">
            <p>
              At InsightOH, we design and develop digital products that solve
              real-world problems. From concept to deployment, we create
              experiences that grow with your business.
            </p>
          </div>

          <div className="trust-section">

            <div className="trust">
              <h2>25+</h2>
              <span>Projects Delivered</span>
            </div>

            <div className="trust">
              <h2>10+</h2>
              <span>Industries Served</span>
            </div>

            <div className="trust">
              <h2>100%</h2>
              <span>Client Focused</span>
            </div>

          </div>

        </div>

        <div className="col-12 col-lg-6">

          <div className="feature-card">

            <div className="card-title">
              <span className="card-number">01</span>

              <div className="card-content">
                <h3 className="card_head">ADAPTIVE</h3>

                <p className="P_tag">
                  Products that learn and reshape themselves over time.
                </p>

              </div>

            </div>

          </div>

          <div className="feature-card">

            <div className="card-title">
              <span className="card-number">02</span>

              <div className="card-content">
                <h3 className="card_head">HONEST</h3>

                <p className="P_tag">
                  Transparent communication, realistic timelines and clear
                  outcomes.
                </p>

              </div>

            </div>

          </div>

          <div className="feature-card">

            <div className="card-title">
              <span className="card-number">03</span>

              <div className="card-content">
                <h3 className="card_head">CRAFTED</h3>

                <p className="P_tag text-lg-nowrap">
                  Meticulously designed experiences built with precision and
                  purpose.
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}