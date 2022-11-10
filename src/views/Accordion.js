import React, { useState } from "react";

// helper functions to bold text specific part 
// of the sentence
function boldString(str, find){ 
  let re = new RegExp(find, 'g'); 
  return str.replace(re, '<b>'+find+'</b>'); 
}

const Accordion = ({
  title,
  step1,
  step2,
  step3,
  step4,
  step5,
  step6,
  step7,
  step8,
  state1,
  state2,
  state3,
  state4,
  state5,
  state6,
  state7,
  state8,
  statelink,
  statelink3,
  statelink6,
  steplink,
  linkname,
  othertext,
  steplink1,
  linkname1,
  othertext1,
  steplink2,
  linkname2,
  othertext2,
  steplink3,
  linkname3,
  othertext3,
}) => {
  const [isActive, setIsActive] = useState(false);

  // extract text to add style 
  let boldTextStep1 = ""; 
  let boldTextStep2 = ""; 
  let boldTextStep4 = ""; 
  let boldTextStep5 = ""; 

  const highlightText = { 
    step1: ["Connect Wallet", "connect wallet"],
    step2: ["My Collection", "Claim Qube", "5 Qubes"],
    step4: ["Buy Now", "Download .glb", ],
    step5: [".glb", "Submit"]
  };

  
  // search string to bold text
  if (step1){
    highlightText.step1.map(targetText => { 
      if (step1.includes(targetText)){
        boldTextStep1 = boldString(step1, targetText);
      } 
    })
    
  } 
  
  if(step2){
    highlightText.step2.map(targetText => {
      if(step2.includes(targetText)){
        boldTextStep2 = boldString(step2, targetText);
      }
    })
  }

  if(step4){
    highlightText.step4.map(targetText => { 
      if(step4.includes(targetText)){
        boldTextStep4 = boldString(step4, targetText);
      }
    })
  }

  if(step5){ 
    highlightText.step5.map(targetText => { 
      if(step5.includes(targetText)){
        boldTextStep5 = boldString(step5, targetText);
      }
    })
  }

  console.log(step2);

  return (
    <div className="accordion-item">
      <div
        className="accordion-header"
        onClick={() => setIsActive(!isActive)}
        style={{ cursor: "pointer" }}
      >
        <div>
          <h4 className="faq-head d-flex justify-content-between">
            <div>{title}</div>

            <div>{isActive ? "▲" : "▼"}</div>
          </h4>
        </div>
        <hr />
      </div>

      {isActive && (
        <div
          class="accordion-content carbon-text"
          style={{ fontSize: "1.25rem", fontWeight: 600 }}
        >
          <div className={state1} >
            {boldTextStep1 === "" ? step1 : <span dangerouslySetInnerHTML={{ __html: boldTextStep1}}></span>}
            
            <span className={statelink}>
              &nbsp;
              <a
                href={steplink} // steplink
                target="_blank"
                className="blog-link blog-link-underline fw-bold"
              >
                {linkname}
              </a>
              &nbsp;{othertext}
            </span>
            <br /> <br />
          </div>

          <div className={state2}>
            {boldTextStep2 === "" ? step2 : <span dangerouslySetInnerHTML={{ __html: boldTextStep2}}></span>}

            <span className={statelink3}>
              &nbsp;
              <a
                href={steplink1} // steplink
                target="_blank"
                className="blog-link blog-link-underline fw-bold"
              >
                {linkname1}
              </a>
              &nbsp;{othertext1}
            </span>
            <br /> <br />
          </div>
          
          <div className={state3}>
            {step3}
            <span className={statelink3}>
              &nbsp;
              <a
                href={steplink2} // steplink
                target="_blank"
                className="blog-link blog-link-underline fw-bold"
              >
                {linkname2}
              </a>
              &nbsp;{othertext2}
            </span>
            <br /> <br />
          </div>

          <div className={state4}>
            {boldTextStep4 === "" ? step4 : <span dangerouslySetInnerHTML={{ __html: boldTextStep4}}></span>}

            <br /> <br />
          </div>

          <div className={state5}>
            {boldTextStep5 === "" ? step5 : <span dangerouslySetInnerHTML={{ __html: boldTextStep5}}></span>}

            <br /> <br />
          </div>

          <div className={state6}>
            {step6}
            <br /> <br />
          </div>

          <div className={state7}>
            {step7}
            <span className={statelink6}>
              &nbsp;
              <a
                href={steplink3} // steplink
                target="_blank"
                className="blog-link blog-link-underline fw-bold"
              >
                {linkname3}
              </a>
              &nbsp;{othertext3}
            </span>
            <br /> <br />
          </div>

          <div className={state8}>{step8}</div>
          <hr />
        </div>
      )}
    </div>
  );
};

export default Accordion;

// <a href="mailto:manufacturing@homeqube.com" target="_blank">
//manufacturing@homeqube.com.
//</a>



