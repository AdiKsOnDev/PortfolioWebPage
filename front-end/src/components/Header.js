import Navbar from "./Navbar";
import Profile from "./Profile";

function Header() {
    return ( 
        <div className="flex flex-col h-3/4 justify-between">
            <Navbar />
            <Profile />
        </div>
    );
}

export default Header;