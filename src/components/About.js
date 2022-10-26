import React from "react";
import textConvert from "../img/case-converter.png"
import clearText from "../img/clear-text.png"
import copyPaste from "../img/copy-paste.png"
import comingSoon from "../img/coming-soon.png"

export default function About(props) {
  return (
    <div className="container d-flex my-4">
      <div className={`card mx-3 bg-${props.mode==='light'?'dark':'light'}`} style={{ width: "18rem" }}>
        <img src={textConvert} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title text-${props.mode==='light'?'light':'dark'}`}>TEXT CONVERTER</h5>
          {/* <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p> */}
        </div>
      </div>
      <div className={`card mx-3 bg-${props.mode==='light'?'dark':'light'}`} style={{ width: "18rem" }}>
        <img src={copyPaste} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title text-${props.mode==='light'?'light':'dark'}`}>COPY AND PASTE TEXT</h5>
        </div>
      </div>
      <div className={`card mx-3 bg-${props.mode==='light'?'dark':'light'}`} style={{ width: "18rem" }}>
        <img src={clearText} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title text-${props.mode==='light'?'light':'dark'}`}>CLEAR TEXT FIELD</h5>
        </div>
      </div>
      <div className={`card mx-3 bg-${props.mode==='light'?'dark':'light'}`} style={{ width: "18rem" }}>
        <img src={comingSoon} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className={`card-title text-${props.mode==='light'?'light':'dark'}`}>MANY MORE COMING SOON</h5>
        </div>
      </div>
    </div>
  );
}
