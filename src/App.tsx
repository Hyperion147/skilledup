import Alumni from "./components/sections/Alumni";
import Contact from "./components/sections/Contact";
import Courses from "./components/sections/Courses";
import Footer from "./components/sections/Footer";
import FreeCourses from "./components/sections/FreeCourses";
import Main from "./components/sections/Main";
import Navbar from "./components/sections/Navbar";

function App() {
    return (
        <div className="mt-25 scrollbar-hide">
            <Navbar />
            <Main />
            <Contact />
            <Courses />
            <FreeCourses />
            <Alumni />
            <Footer />
        </div>
    );
}

export default App;
