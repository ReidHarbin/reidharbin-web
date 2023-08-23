import React from "react";
import ProfilePicture from './images/headshot.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightLong } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
    return (
        <div className="md:flex grow text-white bg-slate-900">
            <div className="flex items-center relative  md:w-1/2">
                <img className="rounded-full drop-shadow-lg p-10 relative z-0" src={ProfilePicture} alt="portrait"></img>
                <div className="absolute right-0 text-2xl md:text-5xl border-b-2 m-2">
                    Reid Harbin
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col place-content-center">
                <div className="w-auto inline">
                    <h1 className="text-3xl md:text-5xl text-center">
                        Backend Developer
                    </h1>
                    <h2 className="text-2xl text-center">
                        AWS | Java
                    </h2>
                </div>
                <div className="flex flex-col text-center w-full md:px-24">
                    <p className="inline">
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