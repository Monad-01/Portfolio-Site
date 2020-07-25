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
        <div class="about-right-column">
          <div class="about-right-column-textbox">
            <h1>"Hello, World!"</h1>
            <text>My name is Johnathan Pruitt.</text>
            <br />
            <br />
            <div class="about-right-column-subtext">
              I am a passionate software developer that is always striving to
              push their own boundaries of programming and is currently trying
              to find their next adventure.
            </div>
            <br />
            <div class="about-right-column-subtext">
              Insert something about langauges here
            </div>
          </div>
        </div>
      </div>
      <div class="blank"></div>
      <div class="projects">
        <h1>Projects</h1>
        <div class="projects-container">
          <div class="project project1">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Good Samaritan</h6>
              <p>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                Ipsum
              </p>
            </div>
          </div>
          <div class="project project2">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Mars Weather App</h6>
              <p>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                Ipsum
              </p>
            </div>
          </div>
          <div class="project project3">
            <img class="thumbnail1" />
            <div class="project-text">
              <h6>Curated</h6>
              <p>
                Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem
                Ipsum
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
