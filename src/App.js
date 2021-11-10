import "./App.css";
import Navbar from "./components/Navbar";
import Head from "./components/Header";
import About from "./components/About";
import Progect from "./components/Progect"
import Contact from "./components/Contact";
import BackgroundImage from "./components/BackgroundImage";
import Bgimg from "./components/bgimg";

function App() {
  return (
    <div className="all">
      <Bgimg src="bg-lines.svg" />
      {/* <BackgroundImage /> */}
      <Navbar />
      <Head />
      <About />
      <Progect />
      <Contact />
    </div>
  );
}

export default App;
