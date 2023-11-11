import { ReactComponent as GitHub } from '../Assets/GitHub\ Logo.svg';
import { ReactComponent as GitHubLogo } from '../Assets/GitHub Logo.svg';


function Project(props) {
    return ( 
        <div className="flex flex-col w-fit mx-12 justify-center items-start p-6 mt-10 rounded-2xl bg-secondary">
            <img src={props.image} alt="project-logo" className="w-full rounded-2xl" />
            
            <h1 className="font-semibold text-accent text-xl textg-left w-full mt-10">{props.name}</h1>

            <div classname="w-full">
                <p className="font-normal text-sm text-tertiary text-left mt-4">{props.description}</p>
            </div>

            <a href={props.gitRepo} className="flex flex-row justify-center items-center text-tertiary py-1 px-3 bg-primary font-semibold rounded-lg mt-4 hover:fill-accent duration-300" target="_blank" rel="noopener noreferrer">
                <GitHub className="w-6 mr-2" /> Repository
            </a>
        </div>
    );
}

export default Project;