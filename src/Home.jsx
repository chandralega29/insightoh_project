export default function Home(){
return(<div id="home" className="home_header">

  <p className="quote">
    - FROM IDEA TO DEPLOYMENT
  </p>

  <div className="moto text-light">
    <h1>WE BUILD</h1>
    <h1>SOFTWARE THAT</h1>
    <h1 className="breath">BREATHES</h1>
  </div>

  <div className="content-row d-flex flex-column flex-lg-row align-items-start gap-4">

    <p className="home_para">
      We craft intelligent digital products that adapt,
      evolve, and grow alongside your business.
    </p>

    <button className="btn custom-btn">
      BUILD WITH INSIGHTOH →
    </button>

  </div>

</div>
);
}