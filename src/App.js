import "./App.css";
import Navbar from "./components/Navbar";
import Head from "./components/Head";
import About from "./components/About";
import Bgimage from "./components/Bgimage";

function App() {
  return (
    <div className="all">
      <Bgimage src="bg-lines.svg" />
      <Navbar />
      <Head />
      <About />
    </div>
  );
}

export default App;
