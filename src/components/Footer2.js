import React from "react";
import FooterResponsive from "./Footer2Components/FooterResponsive";
import FooterWeb from "./Footer2Components/FooterWeb";

function Footer2() {
  return (
    <>
      <footer className="p-3 bg-black text-white py-5">
        <div class="container px-4">
          <FooterWeb />
          <FooterResponsive />
        </div>
        <hr />
        <div className="container">
          <div className="ms-3">@2022 HOMEQUBE PTE. LTD.™</div>
        </div>
      </footer>
    </>
  );
}

export default Footer2;
