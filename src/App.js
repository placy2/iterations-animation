import './App.css';
import gitLogo from "super-tiny-icons/images/svg/github.svg";
import linkedLogo from "super-tiny-icons/images/svg/linkedin.svg";

function App() {
  return (
    <div className="body-div">
      <div className="credits">
        <p>Original CSS animations inspired by 
          <a href="https://codepen.io/alja9/pen/jgPVEm" target="_blank" rel="noreferrer">
            This Codepen.
          </a>
        </p>
      </div>
      <div className="bio">
        <a className="gitlogo" href="https://www.github.com/placy2" target="_blank" rel="noreferrer">
          <img src={gitLogo} width="36px" height="36px" alt="Github logo"></img>
        </a>
        <a className="linkedinLogo" href="https://www.linkedin.com/in/parker-lacy-2021" target="_blank" rel="noreferrer">
          <img src={linkedLogo} width="36px" height ="36px" alt="LinkedIn logo"></img>
        </a>
        <p>Parker Lacy, 2020</p>
      </div>
      <div className="container">
        <div className="loader">
          <div className="x _1" style={{'--index': 9}}></div>
          <div className="x _2" style={{'--index': 8}}></div>
          <div className="x _3" style={{'--index': 7}}></div>
          <div className="x _4" style={{'--index': 6}}></div>
          <div className="x _5" style={{'--index': 5}}></div>
          <div className="x _6" style={{'--index': 4}}></div>
          <div className="x _7" style={{'--index': 3}}></div>
          <div className="x _8" style={{'--index': 2}}></div>
          <div className="x _9" style={{'--index': 1}}></div>
          <div className="x _10" style={{'--index': 0}}></div>
        </div>
      </div>
    </div>
  );
}

export default App;
