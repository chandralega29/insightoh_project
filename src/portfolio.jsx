export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">

      <div className="container-fluid">

        <div className="intro_portfolio d-flex justify-content-between flex-wrap">
          <p className="number">03 / PORTFOLIO</p>
          <p className="who">SELECTED WORK</p>
        </div>

        <h1 className="hero_portfolio">
          RECENT <span className="builds">BUILDS.</span>
        </h1>

        <div className="portfolio-card mt-4">
          <div className="row align-items-center gy-3">

            <div className="col-2 col-md-1">
              <span className="card-number">01</span>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="portfolio_head">AI DOCUMENT ASSISTANT</h3>
            </div>

            <div className="col-10 col-md-4">
              <p className="head_small mb-0">
                Enterprise AI Platform
              </p>
            </div>

            <div className="col-2 col-md-1 text-end">
              <i className="bi bi-arrow-up arrow-icon"></i>
            </div>

          </div>
        </div>

        <div className="portfolio-card mt-4">
          <div className="row align-items-center gy-3">

            <div className="col-2 col-md-1">
              <span className="card-number">02</span>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="portfolio_head">
                PREDICTIVE ANALYTICS DASHBOARD
              </h3>
            </div>

            <div className="col-10 col-md-4">
              <p className="head_small mb-0">
                Business Intelligence System
              </p>
            </div>

            <div className="col-2 col-md-1 text-end">
              <i className="bi bi-arrow-up arrow-icon"></i>
            </div>

          </div>
        </div>

        <div className="portfolio-card mt-4">
          <div className="row align-items-center gy-3">

            <div className="col-2 col-md-1">
              <span className="card-number">03</span>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="portfolio_head">
                SMART AUTOMATION PLATFORM
              </h3>
            </div>

            <div className="col-10 col-md-4">
              <p className="head_small mb-0">
                Workflow Optimization
              </p>
            </div>

            <div className="col-2 col-md-1 text-end">
              <i className="bi bi-arrow-up arrow-icon"></i>
            </div>

          </div>
        </div>

        <div className="portfolio-card mt-4">
          <div className="row align-items-center gy-3">

            <div className="col-2 col-md-1">
              <span className="card-number">04</span>
            </div>

            <div className="col-12 col-md-6">
              <h3 className="portfolio_head">
                COMPUTER VISION SUITE
              </h3>
            </div>

            <div className="col-10 col-md-4">
              <p className="head_small mb-0">
                Industrial AI Monitoring
              </p>
            </div>

            <div className="col-2 col-md-1 text-end">
              <i className="bi bi-arrow-up arrow-icon"></i>
            </div>

          </div>
        </div>

      </div>

    </section>
  );
}