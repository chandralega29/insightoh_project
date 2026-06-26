export default function About(){

    return(
        <div className="about ">
            <div className="left_section">
            <div className="left d-flex flex-row gap-5 ">
                 <p className="number me-5">01/ABOUT</p>
                <p className="who">  WHO WE ARE </p>
                </div>
                <div className="hero_about d-flex flex-column text-light mt-5"><h1>CRAFTING</h1>
                                                 <h1>SOFTWARE THAT</h1>
                                                <h1> <span className="evolve">EVOLVES</span> WITH</h1>
                                                <h1>YOUR BUSINESS.</h1>
                                                </div>
                                                
                                                <div className="para_about d-flex flex-column  mt-4 "><p>At InsightOH, we design and develop digital
products that solve </p> <p>real-world problems.
From concept to deployment, we create</p>
<p>experiences that grow with your business.</p>
</div>
<div className="trust-section mt-5">
<div className="trust">
    <h2 className="trust">25+</h2>
    <span className="ms-3" >Projects Delivered</span>
    </div>
    <div className="trust">
    <h2>10+</h2>
    <span className="ms-4">Industries Served </span>
    </div>
    <div className="trust">
    <h2>100%</h2>
    <span className="ms-4">Client Focused</span>
    </div>
</div>
</div>
      <div className="vertical-line"></div>
<div className="right_section ms-5 mt-0">
    <div className="card feature-card ">
       <h3 className="card-number">01
          <span className="card_head text-light">ADAPTIVE</span></h3>
          <p className="P_tag ">
          Products that learn and reshape themselves over time.

          </p>
        </div>

        <div className=" card feature-card ">
       <h3 className="card-number  ">02
          <span className="card_head text-light">HONEST</span></h3>
          <p className="P_tag  ">
            Transparent communication, realistic timelines,
            and clear outcomes.
          </p>
        </div>

        <div className="card feature-card ">
       <h3 className="card-number ">03
          <span className="card_head text-light">CRAFTED</span></h3>
          <p className="P_tag ">
            Meticulously designed experiences built with precision
            and purpose.
          </p>
        </div>
 
    </div>
</div>
    
    );
}