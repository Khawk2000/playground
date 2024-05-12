import './App.css';
import angy from './AngryFace.svg';
import narutoHand from './RaisedBackOfHand.svg';
import shock from './AstonishedFace.svg';
import grim from './GrimacingFace.svg';
import fingy from './IndexPointingUp.svg';
import grab from './RaisedFist.svg';
import strug from './ConfoundedFace.svg';
import yo from './WavingHand.svg';
import swim from './Swimming.JPG';
import moreswim from './swimcollage.JPG';
import load from './spinningdots.svg';



function App() {  

  return (
    <>
      <div className="App">
       <div className="app-try">
          <h1 className="zoom-text">Zoom!!</h1>
          <h2 className="didntsee">Sorry, didn't see you there...</h2>
          <h2 className="onesec">One sec</h2>
          <img className='left-hand-zoom'src={narutoHand} alt="naruto hand"/>
          <img className='right-hand-zoom'src={narutoHand} alt="naruto hand"/>
          <img className='zoom-face'src={angy} alt="angy face"/>
          <img className='shock-face'src={shock} alt="shock face"/>
          <img className='grimace-face' src={grim} alt='grim face'/>
          <img className='fingy' src={fingy} alt='fingy'/>
          <img className='left-grab' src={grab} alt='left grabber'/>
          <img className='right-grab' src={grab} alt='right grabber'/>
          <img className='strug-face' src={strug} alt='struggle face'/>
        </div>
        <div className="drag-down">
          <nav>
            <h2 className="nav-title">Keegan Hawkins</h2>
            <ul>
              <li>
                <a href='#home' className='home-link'>Home</a>
              </li>
              <li>
                <a href='#about' className='about-link'>About</a>
              </li>
              <li>
                <a href='#projects' className='projects-link'>Projects</a>
              </li>
              <li>
                <a href='#contact' className='contact-link'>Contact</a>
              </li>
            </ul>
          </nav>
          <section className='home' id='home'>
            <div className="home-container">
              <div className="home-info-container">
                <h1 className="home-info-name">Full Stack Developer <img className='wave-hand' src={yo} alt='waving hand'/></h1>
                
                <h3 className="home-info-description">Hi, I'm Keegan Hawkins, recent grad and passionate Software Engineer located in Chicago, IL.</h3>
              </div>
              <div className="home-pic-container">
                <div className="home-pic">
                </div>
              </div>
              
            </div>
            <div className="skills">
                <h3 className='skills-title'>Tech Stack</h3>
                <div className="logos">
                  <ul>
                    <div>
                    <li><img src='https://skillicons.dev/icons?i=js,html,css' alt='jshtmlcss'/></li>
                    <li><img src='https://skillicons.dev/icons?i=mongodb,express,react,nodejs' alt='Mernstack'/></li>
                    </div>
                    <div>
                    <li><img src='https://skillicons.dev/icons?i=cs,dotnet' alt='microsoftstack'/></li>
                    <li><img src='https://skillicons.dev/icons?i=py,java,c' alt='otherlanguages'/></li>
                    </div>
                  </ul>
                </div>
              </div>
          </section>
          <div className="separator"></div>
          <section className="about" id='about'>
            <h1 className='about-title'>About Me</h1>
            <div className="about-main-container">
              <div className="about-pic-container">
                <img className='swim-pic' src={swim} alt='swim'/>
              </div>
              <div className="about-text-container">
                <h1 className='about-text'>Swimming</h1>
                <p className='swim-text'>I have been a competitve swimmer for 16 years of my life. 
                It has been a great opportunity for me to learn life skills like...</p>
                <ul className='swim-skills-list'>
                  <li className='swim-skill'>How to Swim (obviously)</li>
                  <li className='swim-skill'>Leadership: Teaching others and encouraging teamwork</li>
                  <li className='swim-skill'>Time Management: Between school, swim, work, and social life</li>
                  <li className='swim-skill'>Goal Setting: Important to achieving goals</li>
                </ul>
              </div>
            </div>
            <div className="warning"><h1>WARNING!!!</h1><h3>Bragging Incoming...</h3></div>
            <div className="about-achievements-container">
              <div className="about-text-container">
                <h1 className='about-text'>Achievements</h1>
                <p className='swim-achieve-text'>Here's my best accomplishments</p>
                <ul className='swim-achievement-list'>
                  <li className='swim-achievement'>2021 US Olympic Trials Qualifier</li>
                  <li className='swim-achievement'>8-time individual GLIAC Champion</li>
                  <li className='swim-achievement'>GLIAC Conference Male Swimmer of the Year(2022)</li>
                  <li className='swim-achievement'>20-time NCAA All-American</li>
                </ul>
                <p className='trials-training'>Loading... <img src={load} alt='loading' className='load'/>  2024 US Olympic Trials Qualifier</p>
              </div>
              <div className="about-gallery-container">
                <img className='swim-collage' src={moreswim} alt='swim'/>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
