import React from "react";
import ProfilePicture from './images/headshot-2.png'
import Placeholder from './images/placeholder-headshot.png'
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'

const Home = () => {
    return (
        <div className="md:flex grow text-white bg-gray-700 px-4 pt-4 md:overflow-hidden">
            <div className="flex place-content-center items-end relative md:w-1/2">
                <LazyLoadImage effect="blur" placeholderSrc={Placeholder} src={ProfilePicture}></LazyLoadImage>
                <div className="absolute right-0 text-4xl md:text-5xl h-1/2">
                    <p className="border-b-2">
                        Reid Harbin
                    </p>
                </div>
            </div>
            <div className="md:w-1/2 flex flex-col place-content-center my-4">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl md:text-5xl text-center">
                        Backend Developer
                    </h1>
                    <h2 className="text-2xl text-center">
                        AWS | Java
                    </h2>
                    <p className="text-center w-3/4">
                        I find immense satisfaction in deciphering complex problems and translating them into efficient backend systems 
                        that ensure streamlined communication between clients and data. Whether it's designing data models or building 
                        robust APIs, I am always up for the challenge.
                    </p>
                    
                </div>
            </div>
        </div>

    )
}

export default Home;