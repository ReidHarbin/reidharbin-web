import React from "react";
import TouchBasePhoto from "./images/touchbase-stock-blue.jpg";
import KindleServicePhoto from "./images/kindle-service.png";
import MusicServicePhoto from "./images/amazon-music.jpg";
import AdServicePhoto from "./images/ads-photo.png";
import TouchBasePhotoPlaceholder from "./images/touchbase-stock-blue-placeholder.jpg";
import KindleServicePhotoPlaceholder from "./images/kindle-service-placeholder.png";
import MusicServicePhotoPlaceholder from "./images/amazon-music-placeholder.jpg";
import AdServicePhotoPlaceholder from "./images/ads-photo-placeholder.png";
import Bricks from "./images/bricks.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css'


// 492 x 196 - Image base size
const project = (title, githubLink, websiteLink, backendTools, frontendTools, photo, placeholder, description) => {
    return (
        <div className="group bg-gray-600 text-white mt-2 mb-8 mx-2 shadow-lg hover:shadow-white md:min-h-[339px] shadow-gray-900 rounded-xl md:h-96 hover:h-fit 
                        transition duration-300">
                <div className="flex justify-center rounded-t-lg overflow-hidden max-h-56 w-full min-h-[50%] bg-blue-400">
                    <LazyLoadImage effect="blur" place className="w-full h-full" placeholderSrc={placeholder} src={photo} ></LazyLoadImage> 
                </div>
                <div className="px-8 pb-8 pt-2 rounded-b-xl">
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
                    <div className="font-ArchivoBlack text-md md:group-hover:border-b-2 mb-2">
                        {(backendTools) ?
                            <h2 className="mb-2">
                                Backend: {backendTools}
                            </h2> :

                            null    
                        }
                        {(frontendTools) ?
                            <h2 className="mb-2">
                                Frontend: {frontendTools}
                            </h2> :

                            null   
                        }
                    </div>
                    <div className="md:group-hover:h-fit md:h-0 overflow-hidden md:border-none border-t-2 md:pt-0 pt-2 font-Archivo grow text-xl rounded-b-xl">
                        {description}
                    </div>
            </div>   
        </div>
    )
}



const Projects = () => {
    return (
        <div className="bg-gray-700 grow flex justify-center">
                <div className="grow md:flex  w-full justify-center max-w-screen-2xl">
                    <div className="mx-2 md:w-1/3 transition-all duration-700 ease-in-out">

                        {/* TOUCHBASE */}
                        {  
                        
                            project (
                                "TouchBase", 
                                "https://github.com/ReidHarbin/TouchBase", 
                                "http://touchbase.s3-website-us-west-2.amazonaws.com/",
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                "Javascript | React | Tailwindcss | AWS S3",
                                TouchBasePhoto, TouchBasePhotoPlaceholder,
                                <p>
                                    TouchBase a is full stack family event management application I designed and developed.
                                    Leveraging the power of AWS services, including API Gateway, Lambda, 
                                    and DynamoDB, I established a highly efficient REST API for seamlessly creating, receiving, 
                                    and joining family events. To ensure clean and maintainable code, I followed essential 
                                    Object-Oriented Programming principles and employed proven design patterns to create 
                                    modular and reusable code for each service.The application also features an interactive 
                                    frontend crafted with React and Tailwind, providing users with an intuitive interface. 
                                    Additionally, I integrated a notification system that alerts users about events relevant to 
                                    their involvement.
                                </p>
                            )
                        }

                        {/* KINDLE PUBLISHING SERVICE */}
                        {
                            project (
                                "Kindle Publishing Service", 
                                "https://github.com/BloomTechBackend/bd-kindle-publishing-service-ReidHarbin", 
                                null,
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                null,
                                KindleServicePhoto, KindleServicePhotoPlaceholder,
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
                                Bricks, null,
                                <p>
                                </p>
                            )
                        }
                    </div>
                    
                    <div className="mx-2 md:w-1/3 transition-all duration-700 ease-in-out">
                        {/* MUSIC PLAYLIST SERVICE */}
                        {
                            project (
                                "Music Playlist Service", 
                                "https://github.com/BloomTechBackend/bd-working-with-databases-music-playlist-service-ReidHarbin", 
                                null,
                                "Java | AWS APIGateway | AWS Lambda | AWS DynamoDB | AWS CloudFormation",
                                null,
                                MusicServicePhoto, MusicServicePhotoPlaceholder,
                                <p>
                                    This service is a robust REST API for music playlist management, 
                                    offering users the ability to execute various actions, including playlist creation,
                                    reading, updating, and adding songs. To ensure secure and centralized data access, 
                                    I integrated the Data Access Object design pattern, guaranteeing safe and 
                                    consistent interactions with the underlying database. For improved code structure 
                                    and maintainability, I streamlined dependency injection through the use of Dagger, 
                                    enhancing modularity and scalability. Furthermore, I configured API Gateway 
                                    endpoints meticulously, optimizing the routing of requests to their respective 
                                    Lambda request handlers, thus ensuring efficient and seamless API performance.                                                                      
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
                                AdServicePhoto, AdServicePhotoPlaceholder,
                                <p>
                                    This service delivers personalized advertisement content to users. 
                                    To significantly reduce latency, I implemented threads allowing 
                                    for concurrent checks for potential advertisements. Using an Executor Service, 
                                    I optimized the management and rescource allocation of the threads. 
                                    I enhanced the codebase's readability by introducing the use of streams. 
                                </p>
                            )
                        }
                    </div>
                </div>
        </div>
    )
}

export default Projects;