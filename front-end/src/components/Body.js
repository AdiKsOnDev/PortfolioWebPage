import About from "./About";
import Projects from "./Projects";

function Body() {
    return ( 
        <div className="max-w-screen">
            <Projects />
            <About />
        </div>
    );
}

export default Body;