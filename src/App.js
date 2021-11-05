import "./App.css";
import Navbar from "./components/Navbar";
import Head from "./components/Header";
import About from "./components/About";
import BackgroundImage from "./components/BackgroundImage";

function App() {
  return (
    <div className="all">
      <BackgroundImage />
      <Navbar />
      <Head />
      <About />
    </div>
  );
}

export default App;
