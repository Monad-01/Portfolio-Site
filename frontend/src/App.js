import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div>
      <header class="header">
        <div class="header-text-box">
          <div class="header-primary-box">
            <span class="header-primary-text">Johnathan Pruitt</span>
            <span class="header-bottom-text">•Software Developer•</span>
          </div>
          <a href="#" class="btn header-btn">
            Connect
          </a>
        </div>
      </header>
      <div class="blank"></div>
      <div class="about">
        <div class="about-left-column">
          <div class="about-img"></div>
          <div class="about-left-column-textbox">
            <div class="about-left-column-textbox-subtext">
              "I will not die until I achieve something.
            </div>
            <div class="about-left-column-textbox-subtext">
              Even though the ideal is high, <br />I never give in.
            </div>
            <div class="about-left-column-textbox-subtext">
              Therefore, I never die with regrets."
            </div>
            <div class="about-left-column-textbox-subtext">-Ikaruga</div>
          </div>
        </div>
        <div class="about-right-column">Yes yes yes yes yes</div>
      </div>
    </div>
  );
}

export default App;
