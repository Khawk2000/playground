import './App.css';
import angy from './AngryFace.svg';
import narutoHand from './RaisedBackOfHand.svg';
import shock from './AstonishedFace.svg';
import grim from './GrimacingFace.svg';
import fingy from './IndexPointingUp.svg';
import grab from './RaisedFist.svg';
import strug from './ConfoundedFace.svg';
import yo from './WavingHand.svg';



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
                
                <h3 className="home-info-description">I'm Keegan Hawkins, recent grad and passionate Software Engineer located in Chicago, IL.</h3>
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
            <h1>Next Section</h1>
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
