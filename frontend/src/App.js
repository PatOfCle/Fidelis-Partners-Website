import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { keyframes } from "@emotion/react";

import Header from "./Components/Header/Header";
import Footer from "./Components/FooterSection/Footer";
import Home from './Pages/HomePageFolder/HomePage';
import HistoryPage from "./Pages/HistoryPageFolder/HistoryPage";
import ValuesPage from "./Pages/ValuesPageFolder/ValuesPage";
import TeamPage from "./Pages/TeamPageFolder/TeamPage";
import BookDemoPage from "./Pages/BookDemoPageFolder/BookDemoPage";

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

      <Header />

      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route path="/" element={<Home />} />
        <Route path="about">
          <Route index element={<Navigate to="history" replace />}/>
          <Route path="history" element={<HistoryPage />}/>
          <Route path="values" element={<ValuesPage />}/>
          <Route path="team" element={<TeamPage />}/>
          {/* <Route path="*" element={<Navigate to="history" replace />}/> */}
        </Route >
        <Route path="contact">
          <Route path="book-demo" element={<BookDemoPage />}/>
        </Route>
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
