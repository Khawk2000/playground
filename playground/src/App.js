import "./App.css";
import angy from "./AngryFace.svg";
import narutoHand from "./RaisedBackOfHand.svg";
import shock from "./AstonishedFace.svg";
import grim from "./GrimacingFace.svg";
import fingy from "./IndexPointingUp.svg";
import grab from "./RaisedFist.svg";
import strug from "./ConfoundedFace.svg";
import yo from "./WavingHand.svg";
import swim from "./Swimming.JPG";
import moreswim from "./swimcollage.JPG";
import load from "./spinningdots.svg";
import mf from "./MF_Logo_Banner.png";
import oldpft from "./oldport.png";
import fascar from "./fascar.png";
import NET from "./netapp.png";
import ProjMan from "./ProjMan.png";
import ExpenseTracker from "./ExpenseTracker.png";
import writings from "./writings-dev.png";
import gs from "./githubsearch.png";

//FIX ALL SECTIONS TO BE RESPONSIVE

function App() {
  return (
    <>
      <div className="App">
        <div className="app-try">
          <h1 className="zoom-text">Zoom!!</h1>
          <h2 className="didntsee">Sorry, didn't see you there...</h2>
          <h2 className="onesec">One sec</h2>
          <img className="left-hand-zoom" src={narutoHand} alt="naruto hand" />
          <img className="right-hand-zoom" src={narutoHand} alt="naruto hand" />
          <img className="zoom-face" src={angy} alt="angy face" />
          <img className="shock-face" src={shock} alt="shock face" />
          <img className="grimace-face" src={grim} alt="grim face" />
          <img className="fingy" src={fingy} alt="fingy" />
          <img className="left-grab" src={grab} alt="left grabber" />
          <img className="right-grab" src={grab} alt="right grabber" />
          <img className="strug-face" src={strug} alt="struggle face" />
        </div>
        <div className="drag-down">
          <nav>
            <h2 className="nav-title">Keegan Hawkins</h2>
            <ul>
              <li>
                <a href="#home" className="home-link">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="about-link">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="projects-link">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="contact-link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <section className="home" id="home">
            <div className="home-container">
              <div className="home-info-container">
                <h1 className="home-info-name">
                  Software Engineer{" "}
                  <img className="wave-hand" src={yo} alt="waving hand" />
                </h1>
                <h3 className="home-info-description">
                  Hi, I'm Keegan Hawkins, recent grad and passionate Software
                  Engineer located in Chicago, IL.
                </h3>
              </div>
              <div className="home-pic-container">
                <div className="home-pic"></div>
              </div>
            </div>
            <div className="skills">
              <h3 className="skills-title">Tech Stack</h3>
              <div className="logos">
                <ul>
                  <div>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=js,html,css"
                        alt="jshtmlcss"
                      />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=mongodb,express,react,nodejs"
                        alt="Mernstack"
                      />
                    </li>
                  </div>
                  <div>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=cs,dotnet"
                        alt="microsoftstack"
                      />
                    </li>
                    <li>
                      <img
                        src="https://skillicons.dev/icons?i=py,java,c"
                        alt="otherlanguages"
                      />
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </section>
          <div className="separator"></div>
          <section className="about" id="about">
            <h1 className="about-title">About Me</h1>
            <div className="about-main-container">
              <div className="about-pic-container">
                <img className="swim-pic" src={swim} alt="swim" />
              </div>
              <div className="about-text-container">
                <h1 className="about-text">Swimming</h1>
                <p className="swim-text">
                  I have been a competitve swimmer for 16 years of my life. It
                  has been a great opportunity for me to learn life skills
                  like...
                </p>
                <ul className="swim-skills-list">
                  <li className="swim-skill">How to Swim (obviously)</li>
                  <li className="swim-skill">
                    Leadership: Teaching others and encouraging teamwork
                  </li>
                  <li className="swim-skill">
                    Time Management: Between school, swim, work, and social life
                  </li>
                  <li className="swim-skill">
                    Goal Setting: Important to achieving goals
                  </li>
                </ul>
              </div>
            </div>
            <div className="warning">
              <h1>WARNING!!!</h1>
              <h3>Bragging Incoming...</h3>
            </div>
            <div className="about-achievements-container">
              <div className="about-text-container">
                <h1 className="about-text">Achievements</h1>
                <p className="swim-achieve-text">
                  Here's my best accomplishments
                </p>
                <ul className="swim-achievement-list">
                  <li className="swim-achievement">
                    2021 US Olympic Trials Qualifier
                  </li>
                  <li className="swim-achievement">
                    8-time individual GLIAC Champion
                  </li>
                  <li className="swim-achievement">
                    GLIAC Conference Male Swimmer of the Year(2022)
                  </li>
                  <li className="swim-achievement">
                    20-time NCAA All-American
                  </li>
                </ul>
                <p className="trials-training">
                  Loading... <img src={load} alt="loading" className="load" />{" "}
                  2024 US Olympic Trials Qualifier
                </p>
              </div>
              <div className="about-gallery-container">
                <img className="swim-collage" src={moreswim} alt="swim" />
              </div>
            </div>
          </section>
          <div className="separator"></div>
          <section className="projects" id="projects">
            <h1 className="projects-title">My Projects</h1>
            <div className="projects-container">
              <div className="project-row">
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://www.mentalfortitudellc.com"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img src={mf} alt="mf" className="project-img" />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">
                        Mental Fortitude Workout Buddy
                      </h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a className="project-link" href="#projects">
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img src={mf} alt="mf" className="project-img" />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">
                        MF Nutrition Tracker: Coming soon...
                      </h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a className="project-link" href="https://khpft.onrender.com">
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img src={oldpft} alt="oldpft" className="project-img" />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">Old Portfolio site</h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://fascar.onrender.com"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img src={fascar} alt="fascar" className="project-img" />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">Fascar Car Rentals</h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://natural-event-tracker.onrender.com"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img src={NET} alt="NET" className="project-img" />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">
                        Global Natural Event Tracker
                      </h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://projman.onrender.com"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img
                        src={ProjMan}
                        alt="ProjMan"
                        className="project-img"
                      />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">ProjMan: Management App</h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://expense-tracker-eight-bice.vercel.app"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img
                        src={ExpenseTracker}
                        alt="Expense Tracker"
                        className="project-img"
                      />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">
                        Simple Expense Tracker App
                      </h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://writings-dev.onrender.com"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img
                        src={writings}
                        alt="Simple Blog"
                        className="project-img"
                      />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">
                        Writings.dev - Simple Static Web Page
                      </h4>
                    </div>
                  </a>
                </div>
                <div className="project-box">
                  <a
                    className="project-link"
                    href="https://github-search-app-evm1.onrender.com"
                  >
                    <figure
                      className="project-pic-wrap"
                      data-category="Full-Stack"
                    >
                      <img
                        src={gs}
                        alt="GitHub Search App"
                        className="project-img"
                      />
                    </figure>
                    <div className="project-info">
                      <h4 className="project-text">
                        GitHub Profile Search App
                      </h4>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
          <div className="separator"></div>
          <section className="contact" id="contact">
            <h1 className="contact-title">Contact Me</h1>
            <div className="contact-container">
              <form action="mailto:keeganmhawkins@gmail.com">
                <div className="form-row">
                  <label for="fname">First Name</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Your name..."
                    required
                  />
                </div>
                <div className="form-row">
                  <label for="lname">Last Name</label>
                  <input
                    type="text"
                    id="lname"
                    name="lastname"
                    placeholder="Your last name..."
                    required
                  />
                </div>
                <div className="form-row">
                  <label for="email">Email</label>
                  <input
                    type="text"
                    id="fname"
                    name="firstname"
                    placeholder="Email..."
                    required
                  />
                </div>
                <div className="form-row">
                  <label>Message...</label>
                  <textarea required></textarea>
                </div>
                <div className="button-container">
                  <button className="glow-on-hover" type="submit">
                    Send
                  </button>
                </div>
              </form>
            </div>
          </section>
          <div className="footer-container">
            <div className="footer-links">
              <div className="footer-link-wrapper">
                <h2 className="social-title">Social Links</h2>
                <div className="footer-link-items">
                  <a
                    className="social-link"
                    href="https://www.linkedin.com/in/keegan-hawkins-26b5121ba/"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=linkedin"
                      alt="linkedin"
                    />
                  </a>
                  <a
                    className="social-link"
                    href="https://www.instagram.com/keegan__hawkins/"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=instagram"
                      alt="instagram"
                    />
                  </a>
                  <a
                    className="social-link"
                    href="https://www.github.com/Khawk2000"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=github"
                      alt="github"
                    />
                  </a>
                  <a
                    className="social-link"
                    href="https://codepen.io/Keegan-Hawkins"
                  >
                    <img
                      src="https://skillicons.dev/icons?i=codepen"
                      alt="codepen"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
