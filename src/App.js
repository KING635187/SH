import './App.css'
import Navbar from './components/Navbar'
import Head from './components/Header'
import About from './components/About'
import Progect from './components/Progect'
import Contact from './components/Contact'
import BackgroundImage from './components/BackgroundImage'
import Cursor from './components/Cursor'

function App() {
	return (
		<div className="all">
			<BackgroundImage />
			<Cursor />
			<Navbar />
			<Head />
			<About />
			<Progect />
			<Contact />
		</div>
	)
}

export default App
