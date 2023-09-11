import React from "react";
import TouchBasePhoto from "./images/touchbase-stock-blue.jpg";
import KindleServicePhoto from "./images/kindle-service.png";
import MusicServicePhoto from "./images/amazon-music.jpg";
import Bricks from "./images/bricks.jpg";
import AdServicePhoto from "./images/ads-photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";


const project = (title, githubLink, websiteLink, backendTools, frontendTools, photo, description) => {
    return (
        <div className="group grow text-white mt-2 mb-8 mx-2 rounded-xl">
            <div className="shadow-lg shadow-gray-900 rounded-xl">
                <div className="flex justify-center rounded-t-lg overflow-hidden max-h-56 w-full">
                    <img  className="w-full scale-y-110" src={photo} alt="thumbnail"></img>
                </div>
                <div className="bg-gray-600 p-2 rounded-b-xl">
                    <div className="flex items-center text-2xl md:text-2xl mb-2">
                        <h1 >{title}</h1>
                        <div className="text-4xl">
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
                    <div className="font-ArchivoBlack tex-md">
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
                    <p className="font-Archivo grow text-lg border-t-2 mt-2 pt-2 rounded-b-xl">
                        {description}
                    </p>
                </div>
            </div>

        </div>
    )
}



const Projects = () => {
    return (
        <div className="bg-gray-700 grow">
            <div className="grow">
                <div className="md:flex md:flex-grid md:grid-col-3">
                    <div className="mx-2 md:w-1/3">

                        {/* TOUCHBASE */}
                        {
                            project (
                                "TouchBase", 
                                "https://github.com/ReidHarbin/TouchBase", 
                                "http://touchbase.s3-website-us-west-2.amazonaws.com/",
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                "Javascript | React | Tailwindcss | AWS S3",
                                TouchBasePhoto,
                                <p>
                                    TouchBase is a robust REST API crafted to power a family event management application. 
                                    Through a well-considered integration of AWS services - API Gateway, Lambda, and DynamoDB 
                                    - I orchestrated a streamlined data flow from client to database. Throughout its development,
                                    I adhered to essential OOP principles and effectivly leveraged design patterns to ensure a 
                                    scalable and maintainable codebase.
                                </p>
                            )
                        }

                        {/* ADVERTISEMENT SERVICE */}
                        {
                            project (
                                "Advertisement Service", 
                                "https://github.com/BloomTechBackend/bd-advertising-service-ReidHarbin", 
                                null,
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                null,
                                AdServicePhoto,
                                <p>
                                    In this project, I developed an API to efficiently retrieve targeted ad content for users. 
                                    To decrease latency, I managed concurrent threads responsible for checking potential ads 
                                    using an Executor Service. Furthermore, I improved the codebase's readability by refactoring 
                                    the code to utilize streams.
                                </p>
                            )
                        }
                    </div>
                    
                    <div className="mx-2 md:w-1/3">

                        {/* KINDLE PUBLISHING SERVICE */}
                        {
                            project (
                                "Kindle Publishing Service", 
                                "https://github.com/BloomTechBackend/bd-kindle-publishing-service-ReidHarbin", 
                                null,
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                null,
                                KindleServicePhoto,
                                <p>
                                    This project aimed to simulate the creation of a new Amazon Kindle Publishing Service. 
                                    I deciphered complex documentation to create UML Class Diagrams to help understand 
                                    existing code and ensure the service meets the proper design. I used soft deletion 
                                    logic to ensure data preservation while 
                                    maintaining integrity of the service's operations. Signigicantly enhanced the services 
                                    effiency by implementing threads resulting in faster response times for the client. 
                                    I adeptly formulated DynamoDB queries to enhance essential interactions with DynamoDB.   
                                </p>
                            )
                        }

                        {/* REIDHARBIN.COM */}
                        { 
                            project (
                                "reidharbin.com", 
                                "https://github.com/ReidHarbin/reidharbin-web", 
                                null,
                                null,
                                "Javascript | React | Tailwindcss | AWS S3 | AWS Route53 | AWS CloudFront",
                                Bricks,
                                <p>
                                    This is a website that I made from scratch to showcase the projects that I have worked on. 
                                </p>
                            )
                        }
                    </div>
                    <div className="mx-2 md:w-1/3">

                        {/* MUSIC PLAYLIST SERVICE */}
                        {
                            project (
                                "Music Playlist Service", 
                                "https://github.com/BloomTechBackend/bd-working-with-databases-music-playlist-service-ReidHarbin", 
                                null,
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                null,
                                MusicServicePhoto,
                                <p>
                                   In this project, I developed a REST API for managing music playlists. 
                                   I enabled users to create, read, update, and add songs to their playlists. 
                                   To ensure secure and consistent data access, I implemented the DAO design pattern. 
                                   I also improved code modularity, maintainability, and scalability by streamlining 
                                   dependency injection using Dagger. To optimize request routing, I configured API Gateway 
                                   endpoints to efficiently direct requests to their corresponding Lambda request handlers.             
                                </p>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;