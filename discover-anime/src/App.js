import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./pages/home/Home";
import AnimePage from "./pages/AnimePage";
import Error from "./pages/Error";
import Results from "./pages/Results";
import About from "./pages/About";
import StandardPage from "./pages/StandardPage";

import "./App.css";
import Footer from "./components/footer/Footer";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/results/:searchName" element={<Results />} />
          <Route path="/page/:id" element={<AnimePage />} />
          <Route
            path="/anime/ongoing"
            element={<StandardPage type="anime" status="current" />}
          />
          <Route
            path="/anime/upcoming"
            element={<StandardPage type="anime" status="upcoming" />}
          />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
