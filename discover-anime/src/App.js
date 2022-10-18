import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Trending from "./pages/anime/Trending";
import Upcoming from "./pages/anime/Upcoming";
import AllTime from "./pages/anime/AllTime";
import NotFound from "./pages/error/NotFound";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";
import SingleAnime from "./pages/anime/SingleAnime";

import "./App.css";
import SearchPage from "./pages/anime/SearchPage";

function App() {
  return (
    <div className="app">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/anime" element={<SearchPage />} />
          <Route path="/anime/trending" element={<Trending />} />
          <Route path="/anime/upcoming" element={<Upcoming />} />
          <Route path="/anime/popular" element={<AllTime />} />
          <Route path="/anime/infopage/:id" element={<SingleAnime />} />
          <Route path="/about" element={<About />} />
          <Route path="/error" element={<Error />} />
          <Route path="*" element={<Navigate to="/notfound" />} />
          <Route path="/notfound" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
