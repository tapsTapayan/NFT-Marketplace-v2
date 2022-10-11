import React, { useState } from "react";
import ClaimQubesModal from "./ClaimQubesModa";

function ClaimQubesButton() {
  const [modalOpen, setOpenModal] = useState(false);
  return (
    <>
      <button
        className="button1_raffle btn btn-lg rounded-pill"
        type="button"
        onClick={() => {
          setOpenModal(true);
        }}
      >
        Learn More
      </button>
      {modalOpen && <ClaimQubesModal setOpenModal={setOpenModal} />}
    </>
  );
}
export default ClaimQubesButton;
