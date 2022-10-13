import React from "react";
import homequbelogo from "../../img/Footer Logo vertical.svg";
import rightArrow from "../../img/Arrow right.svg";
import instagram from "../../img/newInsta.svg";
import twitter from "../../img/newTwitter.svg";
import linkedin from "../../img/newLinked.svg";
import telegram from "../../img/newTelegram.svg";
import discord from "../../img/newDiscord.svg";
function FooterWeb() {
  return (
    <>
      <div className="footerWeb">
        <div className="d-flex flex-column">
          <div>
            <img src={homequbelogo} alt="" />
          </div>
          <div class="container mt-5">
            <div class="row align-items-start mb-3">
              <div class="col-2 new-footer-headline text-uppercase">
                Learn More
              </div>
              <div class="col-2 new-footer-headline text-uppercase">
                Company
              </div>
              <div class="col-2 new-footer-headline text-uppercase">
                Our Products
              </div>
              <div class="col-2 new-footer-headline text-uppercase">
                Resources
              </div>
              <div class="col-2 new-footer-headline text-uppercase">Legal</div>
              <div class="col-2 new-footer-headline-2 text-uppercase">
                Connect with us
              </div>
            </div>

            <div class="row align-items-start mb-2">
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/stakeholders"
                  className="a-no-design"
                >
                  StakeHolders
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/about"
                  className="a-no-design"
                >
                  About us
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.homeqube.io/"
                  className="a-no-design"
                  target="__blank"
                >
                  Homeqube.io <img src={rightArrow} alt="" />
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/resources-blogs"
                  className="a-no-design"
                >
                  Blogs
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/terms-of-use"
                  className="a-no-design"
                >
                  Terms of use
                </a>
              </div>
              <div class="col-2">
                <div className="d-flex pb-1">
                  <a
                    href="https://www.instagram.com/homeqube.ai/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={instagram}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://twitter.com/homeqube_ai"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={twitter}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://www.linkedin.com/company/homeqube-pte-ltd/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={linkedin}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://t.me/homeqube"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={telegram}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                  <a
                    href="https://discord.com/invite/JhQXmjm59e"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="a-no-design"
                  >
                    <img
                      src={discord}
                      alt=""
                      className="new-footer-icons me-3"
                    />
                  </a>
                </div>
              </div>
            </div>

            <div class="row align-items-start mb-3">
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/qube-tokenomics"
                  className="a-no-design"
                >
                  Tokenomics
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/about-people"
                  className="a-no-design"
                >
                  Our Team
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.homeqube.ai/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-no-design"
                >
                  Homeqube.ai <img src={rightArrow} alt="" />
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/resources-news"
                  className="a-no-design"
                >
                  News
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/privacy-policy"
                  className="a-no-design"
                >
                  Privacy policy
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                about@homeqube.com
              </div>
            </div>

            <div class="row align-items-start mb-3">
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/carbon-credit"
                  className="a-no-design"
                >
                  Carbon Credit
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a href="/about-philosophy" className="a-no-design">
                  Our Philosophy
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.homeqube.com/"
                  target="_blank"
                  rel="noreferrer noopener"
                  className="a-no-design"
                >
                  Homeqube.com <img src={rightArrow} alt="" />
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/resources-faqs"
                  className="a-no-design"
                >
                  Faqs
                </a>
              </div>

              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase">
                Homeqube Pte. Ltd.™
              </div>
            </div>

            <div class="row align-items-start mb-3">
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/ip-assets"
                  className="a-no-design"
                >
                  Our IP assets
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/DAO-projects"
                  className="a-no-design"
                >
                  Dao projects
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase">
                <a
                  href="https://www.qube.homeqube.com/resources-esg"
                  className="a-no-design"
                >
                  ESG
                </a>
              </div>
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase">
                Homeqube, Inc.
              </div>
            </div>

            <div class="row align-items-start mb-3">
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase"></div>
              <div class="col-2 new-footer-text text-uppercase">
                Homqube Dao, LLC
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterWeb;
