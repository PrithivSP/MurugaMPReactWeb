import React from "react";
import NavBar from "./NavBar";

function Banner() {
  return (
    <div className="Banner">
      <NavBar />
      <div className="container-fluid">
        <div className="row">
          {/* Left banner section */}
          <div className="col-sm-6 banner-left-sec">
            {/* Banner heading */}
            <div className="banner-heading ps-4">
              <h1>
                We create and inspire <br />
                the leaders of <br />
                <span>the next generation</span>
              </h1>
              <p className="banner-para mt-4">
                A community with high expectation and high <br /> academic
                achievements
              </p>
              <button className="banner-btn mt-4">
                <a>Get Started</a>
              </button>
            </div>
          </div>
          {/* Right banner section */}
          <div className="col-sm-6 banner-right-sec">
            <img src="./img/MurugaMPImg.png" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
