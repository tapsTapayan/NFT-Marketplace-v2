import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button onClick={() => setOpenModal(false)}>X</button>
        </div>

        <div className="title">
          <h1>RAFFLE MECHANICS</h1>
        </div>
        <div className="body">
          <p>Sample Text</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
