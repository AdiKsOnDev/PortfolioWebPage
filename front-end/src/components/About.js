import { useState, useEffect } from 'react';

function About() {
    const [aboutInfo, setAboutInfo] = useState('');

    useEffect(() => {
        async function fetchAbout() {
            const response = await fetch("http://localhost:5000/about");
            const data = await response.json();
            setAboutInfo(data[0].description);
        }

        fetchAbout();
    }, []);

    return ( 
        <div className="flex flex-col items-center justify-center mt-48">
            <h1 id="About" className="font-semibold text-5xl text-tertiary">
                About Me
            </h1>

            <p className="text-center text-tertiary px-24 font-normal text-lg mt-10">
                {aboutInfo}
            </p>
        </div>
    );
}

export default About