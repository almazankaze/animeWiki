import "./App.css";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";

function App() {
  return (
    <main>
      <section className="glass">
        <SideNav />
        <Home />
      </section>
    </main>
  );
}

export default App;
