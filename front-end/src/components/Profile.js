import ProfilePic from "../Assets/pfp.jpg"

function Profile() {
    return ( 
        <div className="flex flex-row">
            <img src={ProfilePic} className="rounded-full w-1/4 top-1/4 right-2/3 absolute z-10" />
            <h1 className="text-4xl text-tertiary font-semibold absolute top-2/4 right-53-p">Adil Alizada</h1>
            <hr className="w-full border-t-4 border-accent absolute top-55-p z-0" />
        </div>
    );
}

export default Profile;