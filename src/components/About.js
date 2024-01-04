import React from "react";
import textConvert from "../img/case-converter.png"
import clearText from "../img/clear-text.png"
import copyPaste from "../img/copy-paste.png"
import comingSoon from "../img/coming-soon.png"
import capitalization from "../img/capitalization.png"
import InfoCard from "./InfoCard";

export default function About() {
  return (
    <div className="container d-flex my-4 flex-wrap">
      <InfoCard img={textConvert} info="TEXT CONVERTER : LOWER|UPPER" />
      <InfoCard img={copyPaste} info="COPY AND PASTE TEXT" />
      <InfoCard img={clearText} info="CLEAR TEXT FIELD" />
      <InfoCard img={capitalization} info="CAPITALIZE EACH WORD" />
      <InfoCard img={comingSoon} info="MANY MORE COMING SOON" />
    </div>
  );
}
