import "./App.css";
import Navbar from "./components/Navbar";
import Head from "./components/Header";
import About from "./components/About";
import Progect from "./components/Progect";
import Contact from "./components/Contact";
import BackgroundImage from "./components/BackgroundImage";
import Bgimg from "./components/bgimg";
import Cursor from "./components/Cursor";

function App() {
  return (
    <div className="all">
      <Cursor>
        <Bgimg src="bg-lines.svg" />
        {/* <BackgroundImage /> */}
        <Navbar />
        <Head />
        <About />
        <Progect />
        <Contact />
      </Cursor>
    </div>
  );
}

export default App;
