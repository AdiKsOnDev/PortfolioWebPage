function Project(props) {
    return ( 
        <div className="flex flex-col w-fit mx-12 h-fit justify-center items-start p-6 mt-10 rounded-2xl bg-secondary">
            <img src={props.image} alt="project-logo" className="w-full rounded-2xl" />
            <h1 className="font-semibold text-accent text-xl textg-left w-full mt-10">{props.name}</h1>
            <div classname="w-full">
                <p className="font-normal text-sm text-tertiary text-left w-3/4 mt-4">{props.description}</p>
            </div>
        </div>
    );
}

export default Project;