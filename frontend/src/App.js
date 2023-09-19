import './App.css';
import Header from './Components/Header/Header';
import LandingFillinVideo from './Components/LandingFillinVideo/LandingFillinVideo';
import {Fade, Reveal} from 'react-awesome-reveal';
import { keyframes } from "@emotion/react";
import AboutSectionHomepage from './Components/ProblemSectionHomepage/ProblemSectionHomepage';

import Home from './Pages/Home';

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    -webkit-transform: translateY(40px);
    transform: translateY(40px);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
    transform: translateY(0);
  }
`;
const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;


function App() {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
}

export default App;
