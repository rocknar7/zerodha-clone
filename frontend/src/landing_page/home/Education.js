import React from "react";

function Education() {
  return (
    <div className=" row mt-5 mb-5 p-5">
      <div className="col ">
        {" "}
        <img src="media/education.svg" alt="education logo"></img>
      </div>
      <div className="col p-5 mt-5">
        {" "}
        <h1 className="mb-4">Free and open market education</h1>
        <p className="text-muted  ">
          Varsity, the largest online stock market education book in the world<br/>
          covering everything from the basics to advanced trading.
        </p>
        <a href="/" style={{textDecoration:"none"}}>
          Varsity <i class="fa-solid fa-arrow-right"></i>{" "}
        </a>
        <p className="text-muted mt-3">
          TradingQ&A, the most active trading and investment community in India <br/>
          for all your market related queries.
        </p>
        <a href="/" style={{textDecoration:"none"}}>
         TradingQ&A  <i class="fa-solid fa-arrow-right"></i>{" "}
        </a>
      </div>
    </div>
  );
}

export default Education;
