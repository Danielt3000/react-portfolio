import "./App.css";
import Nav from "./components/nav/Nav";
import About from "./components/About/About.jsx";
import Footer from "./components/Footer/Footer";
import Projects from "./components/ProjectsApi/Projects";
import "animate.css";

function App() {
  return (
    <div className="App">
      <div className="back">
        <Nav />
        <About />
      </div>
      <Projects />
    </div>
  );
}

export default App;
