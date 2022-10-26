import React, { useState } from "react";
import { Link } from "react-router-dom";
import raffleImg from "../img/Pablo_Residence_2.png";
import raffleImg2 from "../img/ReworkRaf.png";
import Modal from "./RaffleModal/Modal";

function RaffleDraw() {
  const [modalOpen, setOpenModal] = useState(false);
  return (
    <>
      <section className="pt-5 text-sm-start text-light">
        <div className="raffle-sec">
          <div className="col-6 sub-raff img-fluid">
            <img src={raffleImg2} alt="" />
          </div>
          <div className="col-6 sub-text-raf">
            <h1 className="text-uppercase raffle-sub-title pt-3">
              Homeqube Raffle Draw
            </h1>
            <h3 className="raffle-sub-title-2 text-uppercase text-light">
              Lucky winner of A condominium from <br /> calma properties inc
            </h3>
            <p className="raffle-sub-title-3 text-light pt-5">
              For the first 1000 NFTs sold, we will give away one brand new
              condo in <br />
              Paranaque, Philippines.
            </p>
            <h4 className="raffle-sub-title-4 pt-5">
              Get your system architecture NFT (9$Sol)
            </h4>
            <p className="text-light sub-text-raff-1">
              Transfer fees are included
            </p>
            <div className="pt-3">
              <button className="button1 btn btn-lg rounded-pill" type="button">
                Secure your entry
                <img src="/icons8-right-24.png" className="ms-1" alt="image" />
              </button>
            </div>
          </div>
        </div>

        {/* <div className="banner">
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
        </div> */}
      </section>
    </>
  );
}

export default RaffleDraw;
