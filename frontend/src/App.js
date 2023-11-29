import { Routes, Route, Navigate } from "react-router-dom";
import './App.css';
import { keyframes } from "@emotion/react";

import Header from "./Components/Header/Header";
import Footer from "./Components/FooterSection/Footer";
import Home from './Pages/HomePageFolder/HomePage';
import HistoryPage from "./Pages/HistoryPageFolder/HistoryPage";
import ValuesPage from "./Pages/ValuesPageFolder/ValuesPage";
import TeamPage from "./Pages/TeamPageFolder/TeamPage";
import SteelVikingPage from "./Pages/SteelVikingPageFolder/SteelVikingPage";
import BookDemoPage from "./Pages/BookDemoPageFolder/BookDemoPage";
import ScrollToTop from "./Components/ScrollToTop";
import Blog from "./Pages/BlogPageFolder/Blog";
import SinglePost from "./Pages/BlogPageFolder/SinglePost";
import Error from "./Pages/BlogPageFolder/Error";

function App() {
  return (
    <div className="app-container">

      <Header />
      <ScrollToTop />
      
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

        <Route path="solutions">
          <Route index element={<Navigate to="sv-erp" replace />}/>
          <Route path="sv-erp" element={<SteelVikingPage />}/>
        </Route >

        <Route path="contact">
          <Route path="book-demo" element={<BookDemoPage />}/>
        </Route>

        <Route path="/blog/:slug" element={<SinglePost />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>


      <Footer />
    </div>
  );
}

export default App;
