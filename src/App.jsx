import "./App.css";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="min-h-screen bg-gothic-black text-gothic-silver overflow-hidden">
      <div className="mist-overlay animate-mist" />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
