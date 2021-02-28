import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import AnimePage from "./pages/AnimePage";
import Error from "./pages/Error";
import Header from "./components/Header";

function App() {
  return (
    <main>
      <section className="glass">
        <Router>
          <SideNav />
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/animepage/:id">
              <AnimePage />
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
