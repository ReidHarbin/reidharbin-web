import React from "react";
import ProfilePicture from './images/headshot.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="md:flex grow text-white bg-gray-700 p-4 w-fit">
            <div className="flex place-content-center items-center relative md:w-1/2 rounded-full">
                <div className="absolute bg-slate-800 rounded-full w-11/12 blur-md h-full opacity-50"></div>
                <img className="rounded-full drop-shadow-lg p-10 w-11/12 border border-slate-900 relative" src={ProfilePicture} alt="portrait"></img>
                <div className="absolute right-0 text-2xl md:text-5xl border-b-2 m-2">
                    Reid Harbin
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col place-content-center my-2">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl text-center">
                        Backend Developer
                    </h1>
                    <h2 className="text-2xl text-center">
                        AWS | Java
                    </h2>
                    <p className="text-center w-3/4">
                        I thrive on creating scalable applications while leveraging AWS services to their fullest potential. 
                        With a knack for intuitive API design, I ensure seamless client interactions. Let's collaborate to turn 
                        ideas into exceptional software.
                    </p>
                    
                </div>
            </div>
        </div>

    )
}

export default Home;