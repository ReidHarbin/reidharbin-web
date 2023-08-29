import React from "react";
import TouchBasePhoto from "./images/touchbase-stock-photo.jpg";
import KindleServicePhoto from "./images/kindle-service.png";
import MusicServicePhoto from "./images/amazon-music.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const project = (title, githubLink, websiteLink, backendTools, frontendTools, photo, description) => {
    return (
        <div className="grow text-white m-4 rounded-xl">
            <div className="shadow-lg shadow-gray-900 rounded-xl">
                <div className="flex items-center justify-center rounded-t-lg overflow-hidden h-1/3">
                    <img  className="w-full" src={photo} alt="thumbnail"></img>
                </div>
                <div className=" bg-gray-600 rounded-b-xl p-2">
                    <div className="flex text-xl md:text-2xl mb-2">
                        <h1 >{title}</h1>
                        <div className="">
                            <a className="hover:text-green-500 mx-2" href={githubLink} target="_blank" rel="noopener noreferrer">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            {(websiteLink) ? 
                                <a className="hover:text-gray-500" href={websiteLink} target="_blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faUpRightFromSquare}/>
                                </a> :
                                null
                            }
                        </div>
                    </div>
                    <div className="font-Archivo">
                        <div>
                            {(backendTools) ?
                                <h2 className="mb-2">
                                    Backend: {backendTools}
                                </h2> :
                                null    
                            }
                            {(frontendTools) ?
                                <h2>
                                    Frontend: {frontendTools}
                                </h2> :
                                null    
                            }
                        </div>
                            
                        <p className="grow text-sm md:text-lg border-t-2 pt-2 mt-2">
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
        <div className="bg-gray-700">
            <div className="grow">
                <div className="md:flex md:flex-grid md:grid-col-3">
                    <div className="md:w-1/3">
                        {project("TouchBase", 
                            "https://github.com/ReidHarbin/TouchBase", 
                            "http://touchbase.s3-website-us-west-2.amazonaws.com/",
                            "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                            "Javascript | React | Tailwindcss | AWS S3",
                            TouchBasePhoto,
                            "TouchBase is a robust REST API crafted to power a family event management application. "  +
                            "Through a well-considered integration of AWS services - API Gateway, Lambda, and DynamoDB " + 
                            "- I orchestrated a streamlined data flow from client to database. Throughout its development, " +
                            "I adhered to essential OOP principles and effectivly leveraged design patterns to ensure a scalable and maintainable codebase.")}

                            {project("reidharbin.com", 
                            "https://github.com/ReidHarbin/reidharbin-web", 
                            null,
                            null,
                            "Javascript | React | Tailwindcss | AWS S3 | AWS Route53 | AWS CloudFront",
                            MusicServicePhoto,
                            "this will be the description")}
                    </div>
                    <div className="md:w-1/3">
                        {project("Kindle Publishing Service", 
                            "https://github.com/BloomTechBackend/bd-kindle-publishing-service-ReidHarbin", 
                            null,
                            "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                            null,
                            KindleServicePhoto, 
                            "This project aimed to simulate the creation of a new Amazon Kindle Publishing Service. " +
                            "I deciphered complex documentation to create UML Class Diagrams to help understand existing code and ensure the service meets the proper design. " +
                            "I used soft deletion logic on the CataglogItemVersion DynamoDB Table to ensure data preservation while maintaining integrity of the service's operations. " +
                            "Signigicantly enhanced the services effiency by implementing threads resulting in faster response times for the client. " +
                            "Showcased my ability to implement threads which increased the efficiency of the service. " +
                            "I adeptly formulated DynamoDB queries to enhance essential interactions with DynamoDB. "
                            )}
                    </div>
                    <div className="md:w-1/3">
                        {project("Music Playlist Service", 
                            "https://github.com/BloomTechBackend/bd-working-with-databases-music-playlist-service-ReidHarbin", 
                            null,
                            "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                            null,
                            MusicServicePhoto,
                            "this will be the description")}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;