import React from "react";
import TouchBasePhoto from "./images/touchbase-stock-photo.jpg";
import KindleServicePhoto from "./images/kindle-service.png";
import MusicServicePhoto from "./images/amazon-music.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const project = (title, githubLink, websiteLink, backendTools, frontendTools, photo, description) => {
    return (
        <div className="text-white justify-center items-center p-4">
            <div className="flex justify-center h-1/3">
                <img className="rounded-2xl drop-shadow-lg border-cyan-900 border-8" src={photo} alt="portrait"></img>
            </div>
            <div className="bg-cyan-900 mt-2 rounded-2xl">
                <div className="p-2">
                    <div className="text-3xl">
                        <h1>{title}</h1>
                    </div>
                    <div className="flex flex-col text-sm mt-2">
                        <p className="pb-2">
                            Backend: {backendTools}
                        </p>
                        {(frontendTools !== null) ?
                            <p1 className="mb-2">
                                Frontend: {frontendTools}
                            </p1> :
                            null    
                        }
                        <div className="text-3xl">
                            <a className="hover:text-green-500 mx-2" href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            {(websiteLink !== null ) ? 
                                <a className="hover:text-slate-900" href={websiteLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faUpRightFromSquare}/>
                                </a> :
                                null
                            }
                        </div>
                    </div>
                    <div className="mt-2 border-t-2">
                        <p >
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}



const Projects = () => {
    return (
        <div className="grow grid grid-cols-1 md:grid-cols-3 bg-slate-900">
            {project("TouchBase", 
                "https://github.com/ReidHarbin/TouchBase", 
                "http://touchbase.s3-website-us-west-2.amazonaws.com/",
                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                "Javascript | React | Tailwindcss | AWS S3",
                TouchBasePhoto,
                "This will be the description")}
                
            {project("Kindle Publishing Service", 
                "https://github.com/BloomTechBackend/bd-kindle-publishing-service-ReidHarbin", 
                null,
                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                null,
                KindleServicePhoto,
                "this will be the description")}

            {project("Music Playlist Service", 
                "https://github.com/BloomTechBackend/bd-working-with-databases-music-playlist-service-ReidHarbin", 
                null,
                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                null,
                MusicServicePhoto,
                "this will be the description")}
            {project("reidharbin.com", 
                "https://github.com/ReidHarbin/reidharbin-web", 
                null,
                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                "Javascript | React | Tailwindcss | AWS S3 | AWS Route53 | AWS CloudFront",
                MusicServicePhoto,
                "this will be the description")}
        </div>
    )
}

export default Projects;