import Project from "./Project";
import { useState, useEffect } from "react";

function Projects() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            const response = await fetch("http://localhost:5000/projects");
            const data = await response.json();
            setProjects(data);
        }

        fetchProjects();
    }, []);

    return (
        <div className="flex flex-col items-center justify-center">
            <h1 id="Projects" className="font-semibold text-5xl text-tertiary">
                Projects
            </h1>

            <div className="grid grid-container px-12">
                {projects.map((project) => (
                    <Project
                        key={project.title}
                        image={project.image}
                        name={project.title}
                        description={project.description}
                        gitRepo={project.gitRepo}
                    />
                ))}
            </div>
        </div>
    );
}

export default Projects;