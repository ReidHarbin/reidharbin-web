import React from "react";
import TouchBasePhoto from "./images/touchbase-stock-photo.jpg";
import KindleServicePhoto from "./images/kindle-service.png";
import MusicServicePhoto from "./images/amazon-music.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const project = (title, githubLink, websiteLink, backendTools, frontendTools, photo, description) => {
    return (
        <div className="text-white w-fit">
            <div className="flex items-center justify-center rounded-lg overflow-hidden mb-4 h-1/2">
                <img  className="w-full" src={photo} alt="thumbnail"></img>
            </div>
            <div className=" bg-gray-700 rounded-xl p-2 text-md h-fit">
                <h1 className="text-3xl">{title}</h1>
                    <p className="pb-2">
                        Backend: {backendTools}
                    </p>
                    {(frontendTools !== null) ?
                        <p1 className="pb-2">
                            Frontend: {frontendTools}
                        </p1> :
                        null    
                    }
                    <div className="text-3xl border-b-2 py-2">
                        <a className="hover:text-green-500 pr-2" href={githubLink} target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                        {(websiteLink !== null ) ? 
                            <a className="hover:text-slate-900" href={websiteLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faUpRightFromSquare}/>
                            </a> :
                            null
                        }
                    </div>
                    <div>
                        <p className="pt-2">
                            {description}
                        </p>
                    </div>
            </div>
        </div>
    )
}



const Projects = () => {
    return (
        <div className="bg-slate-900">
            <div className="grow grid grid-cols-1 md:grid-cols-3 gap-4 mx-4">
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
        </div>
    )
}

export default Projects;