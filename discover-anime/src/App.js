import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import AnimePage from "./pages/AnimePage";
import Error from "./pages/Error";
import Header from "./components/Header";
import Results from "./pages/Results";
import About from "./pages/About";
import AniUpcoming from "./pages/AniUpcoming";

function App() {
  return (
    <main>
      <section className="glass">
        <Router>
          <Header />
          <SideNav />

          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/results/:searchName">
              <Results />
            </Route>
            <Route path="/page/:id">
              <AnimePage />
            </Route>
            <Route path="/aniUp">
              <AniUpcoming />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route exact path="*">
              <Error />
            </Route>
          </Switch>
        </Router>
      </section>
    </main>
  );
}

export default App;
