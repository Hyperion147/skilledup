import Contact from "./components/sections/Contact";
import Courses from "./components/sections/Courses";
import Main from "./components/sections/Main";
import Navbar from "./components/sections/Navbar";

function App() {
	return (
		<div className="mt-25">
			<Navbar />
			<Main />
			<Contact />
			<Courses />
		</div>
	);
}

export default App;
