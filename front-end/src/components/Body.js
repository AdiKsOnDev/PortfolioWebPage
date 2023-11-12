import About from "./About";
import Projects from "./Projects";
import Review from "./Review";

function Body() {
    return ( 
        <div className="max-w-screen">
            <Projects />
            <About />
            <Review />
        </div>
    );
}

export default Body;