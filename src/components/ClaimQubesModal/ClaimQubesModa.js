import React from "react";
import "./CQModal.css";
import { Link } from "react-router-dom";
import TweetEmbed from "react-tweet-embed";
function ClaimQubesModal({ setOpenModal }) {
  return (
    <>
      <div class="modal">
        <div class="modal-content">
          <div class="modal-header">
            <p className="ai-title-modal mt-3">
              HOMEQUBE RAFFLE DRAW LUCKY WINNER OF{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/QubeToken/status/1562007029539307520?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1562007029539307520%7Ctwgr%5E42ad0887d6de936618e77eb922fd85c4656841c5%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.homeqube.io%2Fclaimqubes"
                className="link-main-color"
              >
                A CONDOMINUM
              </a>{" "}
              FROM CALMA PROPERTIES INC
            </p>
            <span class="close" onClick={() => setOpenModal(false)}>
              &times;
            </span>
          </div>
          <div class="modal-body">
            <TweetEmbed tweetId="1562007029539307520" className="hqtweet" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ClaimQubesModal;
