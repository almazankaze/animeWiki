import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { getAnime } from "./actions/anime";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import AnimePage from "./pages/AnimePage";
import Error from "./pages/Error";
import Header from "./components/Header";
import Results from "./pages/Results";
import About from "./pages/About";
import StandardPage from "./pages/StandardPage";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAnime());
  }, [dispatch]);

  const { anime, loading } = useSelector((state) => state.anime);

  console.log(anime);

  return (
    <main>
      <section>
        <Router>
          <Header />
          <SideNav />

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
        </Router>
      </section>
    </main>
  );
}

export default App;
