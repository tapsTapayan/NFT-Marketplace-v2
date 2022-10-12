import React, { Component } from "react";
import * as emailjs from "emailjs-com";
import TweetEmbed from "react-tweet-embed";
import ClaimQubesButton from "../components/ClaimQubesModal/ClaimQubesButton";
import raffleImg from "../img/Pablo_Residence_2.png";

class ClaimQubesAWS extends Component {
  state = {
    URL: "",
    isTrueVal: false,
    email: "",
    subject: "",
  };
  urlPatternValidation = (URL) => {
    const SOLSCAN = "explorer.solana.com/address/";
    const regex = new RegExp("(https?://)?" + SOLSCAN + "[/\\w .-]*/?");
    return regex.test(URL);
  };
  changeUrl = (event) => {
    const { value } = event.target;
    const isTrueVal = !value || this.urlPatternValidation(value);
    this.setState({
      URL: value,
      isTrueVal,
    });
  };

  // onSubmit = () => {
  //   const { URL, user_email, user_name } = this.state;
  //   console.log("Here is the site url: ", URL);
  //   let templateParams = {
  //     from_name: user_email,
  //     to_name: user_email,
  //     // subject: user_name,
  //     message: URL,
  //   };
  //   emailjs.send(
  //     "service_7lhctnf",
  //     "template_hb7zy83",
  //     templateParams,
  //     "GAyktw5BJ0aDCY2Wb"
  //   );
  //   this.resetForm();
  // };
  // resetForm() {
  //   this.setState({
  //     URL: "",
  //   });
  //   alert("  explorer solana com address has been send.")
  // }

  render() {
    const { isTrueVal, URL } = this.state;

    const handleSubmit = (e) => {
      e.preventDefault();

      fetch(
        "https://b2tsd7c1zl.execute-api.ap-southeast-1.amazonaws.com/claimqubes",
        {
          mode: "no-cors",
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            senderName: "claim.qubes@gmail.com",
            senderEmail: "about@homeqube.com",
            message: URL,
            date: new Date(),
          }),
        }
      ).then(() => {
        this.setState({
          URL: "",
        });
        alert("  explorer solana com address has been send.");
      });
    };

    return (
      <>
        <section className="text-center margin-top-10">
          <div class="card mx-4 mx-md-5 shadow-5-strong claim-qubes-box">
            <div className="card-body py-5 px-md-5">
              <div className="row d-flex justify-content-center">
                <div className="col-lg-8">
                  <h2 className="fw-bold">CLAIM YOUR QUBES HERE</h2>
                  <label className="form-label mb-5">
                    UPON SENDING THE TOKEN ADDRESS, YOU WILL BE ABLE TO CLAIM
                    YOUR QUBE WITHIN 2 DAYS.
                  </label>

                  <form id="form-contact">
                    <div className="form-outline mb-4">
                      <label className="form-label" for="form3Example3">
                        <span className="details text-uppercase">
                          explorer solana com address&nbsp;
                          <span
                            style={{
                              color: "red",
                            }}
                          >
                            *
                          </span>
                        </span>
                      </label>
                      <input
                        required
                        type="text"
                        name="URL"
                        value={URL}
                        onChange={this.changeUrl}
                        className="form-control"
                      />
                      {!this.state.isTrueVal ? (
                        <div
                          id="errorMsg"
                          style={{
                            color: "red",
                          }}
                        >
                          Enter Valid explorer.solana.com address
                        </div>
                      ) : (
                        <div
                          id="errorMsg"
                          style={{
                            display: "none",
                          }}
                        ></div>
                      )}
                    </div>
                    <button
                      className="contact-send-button btn btn-lg rounded-pill"
                      id="sendbtn"
                      type="button"
                      onClick={handleSubmit}
                      disabled={!isTrueVal}
                    >
                      submit
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="showcase1 text-dark p-2 text-center text-sm-start">
          <div className="if-container container-fluid">
            <section className="mt-5 text-center">
              <p className="people-title">CLAIM YOUR QUBES HERE</p>
              <p className="q-tokenomics-showcase-intro-lead text-uppercase">
                UPON SENDING THE TOKEN ADDRESS, YOU WILL BE ABLE TO CLAIM YOUR
                QUBE WITHIN 2 DAYS.
              </p>
            </section>
          </div>
        </section>
        <section className="p-3">
          <div className="container contacts">
            <form id="form-contact">
              <div
                className="row"
                style={{
                  display: "flex",
                  justifyContent: "space-around",
                }}
              >
                <div className="col-md-3">
                  <span className="details text-uppercase">
                    explorer solana com address&nbsp;
                    <span
                      style={{
                        color: "red",
                      }}
                    >
                      *
                    </span>
                  </span>
                  <br />
                  <input
                    className="form-control form-control-lg"
                    required
                    type="text"
                    name="URL"
                    value={URL}
                    onChange={this.changeUrl}
                  />
                </div>
              </div>
              <div className="col link d-flex align-items justify-content-center">
                <div
                  className=""
                  style={{
                    width: "100px",
                  }}
                >
                  <button
                    className="contact-send-button btn btn-lg rounded-pill"
                    id="sendbtn"
                    type="button"
                    onClick={handleSubmit}
                    disabled={!isTrueVal}
                  >
                    submit
                  </button>
                </div>
              </div>
              {!this.state.isTrueVal ? (
                <div
                  id="errorMsg"
                  style={{
                    color: "red",
                  }}
                >
                  Enter Valid explorer.solana.com address
                </div>
              ) : (
                <div
                  id="errorMsg"
                  style={{
                    display: "none",
                  }}
                ></div>
              )}
            </form>
          </div>
        </section> */}

        <section className="pt-5 content-eco1-bg text-sm-start">
          <div className="claim-qubes-banner">
            <div className="claim-qubes-slider">
              <img id="sliderImg" src={raffleImg} />
            </div>
            <div className="claim-qubes-overlayBack">
              <div className="text-center text-white">
                <p className="raffle-title">
                  PRIZES AWAITS WHEN YOU BUY OUR NFTs
                </p>
                <div className="container">
                  {/* <ClaimQubesButton /> */}
                  <TweetEmbed
                    tweetId="1562007029539307520"
                    className="hqtweet"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <section className="text-center">
          <div className="container">
            <ClaimQubesButton />
            <TweetEmbed tweetId="1562007029539307520" className="hqtweet" />
          </div>
        </section> */}
        {/* Twitter */}
      </>
    );
  }
}
export default ClaimQubesAWS;
