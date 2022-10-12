import React, { useState } from "react";
import { Link } from "react-router-dom";
import raffleImg from "../img/Pablo_Residence_2.png";
import Modal from "./RaffleModal/Modal";

function RaffleDraw() {
  const [modalOpen, setOpenModal] = useState(false);
  return (
    <>
      <section className="pt-5 content-eco1-bg text-sm-start">
        <div className="banner">
          <div className="slider">
            <img id="sliderImg" src={raffleImg} />
          </div>
          <div className="overlayBack">
            <div className="raffle_content">
              <h1>HOMEQUBE RAFFLE DRAW</h1>
              <h3>
                LUCKY WINNER OF{" "}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="https://twitter.com/QubeToken/status/1562007029539307520?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1562007029539307520%7Ctwgr%5E42ad0887d6de936618e77eb922fd85c4656841c5%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.homeqube.io%2Fclaimqubes"
                  className="link-main-revert-color"
                >
                  A CONDOMINUM
                </a>{" "}
                FROM CALMA PROPERTIES INC
              </h3>

              <button
                className="button1_raffle btn btn-lg rounded-pill"
                type="button"
                onClick={() => {
                  setOpenModal(true);
                }}
              >
                Learn More
              </button>
              {modalOpen && <Modal setOpenModal={setOpenModal} />}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default RaffleDraw;
