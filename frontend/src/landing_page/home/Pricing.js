import React from "react";

function Pricing() {
  return (
    <div className="container mb-5 p-5">
      <div className="row">
        <div className="col-4">
          <h1 className="mb-5">Unbeatable pricing</h1>
          <p className="text muted">We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
          <a href="/" style={{ color: "blue", textDecoration: "none" }}>See pricing  <i class="fa-solid fa-arrow-right"></i></a>
        </div>
        <div className="col-2"></div>
        <div className="col-6">

          <div className="row text-center  ">
            <div className="col border p-2">
              <h1 className="mb-3">  <img src="media/pricingEquity.svg" style={{width:"50%"}} /> </h1>
              <p>Free equity delivery<br/>
                and direct mutual funds</p></div>

            <div className="col border p-2"> <h1 className="mb-3"> <img src="media/intradayTrades.svg" style={{width:"50%"}} /> </h1>
              <p>Intraday and F&O </p></div>

          </div>

        </div>
      </div>
    </div>

  );
}

export default Pricing;
