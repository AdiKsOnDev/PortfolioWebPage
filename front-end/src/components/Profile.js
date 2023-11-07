import ProfilePic from "../Assets/pfp.jpg"

function Profile() {
    return ( 
        <div className="flex flex-col justify-between h-screen">
            <div className="flex flex-row items-center absolute w-full top-1/4 z-10">
                <div className="w-40"></div>
                <img alt="profile-pic" src={ProfilePic} className="rounded-full w-1/4 border-4 border-accent shadow-[0_0px_60px_-15px_rgba(0,0,0,0.3)] shadow-tertiary" />
                <h1 className="text-5xl text-tertiary font-semibold ml-10 mt-10">Adil Alizada</h1>
            </div>
            <hr className="w-full border-t-4 border-accent absolute top-55-p z-0" />
        </div>
    );
}

export default Profile;