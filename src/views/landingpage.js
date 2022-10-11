import React, { useState } from "react";
import { NavLink } from "react-router-dom";
function LandingPage() {
  return (
    <>
      <section
        className="align-center text-uppercase text-center mt-5"
        style={{ fontSize: "2rem" }}
      >
        <div className="container">
          <div class="row justify-content-around">
            <div class="col-4">
              <p>
                Our Marketplace has four types of NFT Collections categories.
                These are:
              </p>
            </div>
            <div class="col-4">
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                <div className="col-md eco-1-title">
                  <p className="ai-title-home">Community Collection</p>
                </div>
                <li> ● STRUCTURAL LEGACIES </li>
                <li> ● Home Designs </li>
                <li> ● System Architecture </li>
                <li> ● Products </li>
              </ul>
            </div>
            <div class="col-4">
              <ul style={{ listStyleType: "none", textAlign: "left" }}>
                <div className="col-md eco-1-title">
                  <p className="ai-title-home">Dao Projects</p>
                </div>
                <li> ● Hotel </li>
                <li> ● Commercial/Residential </li>
                {/* <li> ● System Architecture </li>
                <li> ● Products </li> */}
              </ul>
            </div>
          </div>
          <br />
          <br />
          <NavLink to="/structural-legacies" className="a-link">
            <button className="button1 btn btn-lg rounded-pill" type="button">
              Collections
            </button>
          </NavLink>
          {/* <p> CHECK OUR COLLECTIONS: </p> */}
        </div>
        <br />
        <br />
      </section>
    </>
  );
}
export default LandingPage;
