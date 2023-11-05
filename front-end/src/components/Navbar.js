function Navbar() {
    return ( 
        <div className="flex flex-row place-items-end w-screen justify-between">
            <div></div>
            <nav className="items-center p-8">
                <a className="mr-16 font-semibold text-2xl text-tertiary hover:text-accent duration-300" href="#Projects">Projects</a>
                <a className="mr-16 font-semibold text-2xl text-tertiary hover:text-accent duration-300" href="#About">About</a>
                <a className="mr-16 font-semibold text-2xl text-tertiary hover:text-accent duration-300" href="#Review">Leave A Review</a>
                <a className="mr-5 font-semibold text-2xl text-tertiary hover:text-accent duration-300" href="#Contacts">Contact Me</a>
            </nav>
        </div>
    );
}

export default Navbar;