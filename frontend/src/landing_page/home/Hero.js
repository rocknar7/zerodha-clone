import React from "react";

function Hero() {
  return (

    <div className="container p-5">
      <div className="row text-center">
        <img src="/media/homeHero.png" alt="Hero image " className="mb-5"></img>

        <div className="mt-5 text-center" >
         <h1> Invest in Everything</h1>
        <p>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className="p-3 btn btn-primary fs -5 mb-5" style={{width:"20%"}}> Sign Up for Free </button>

        </div>

       


      </div>
    </div>
    
  );
}

export default Hero;
