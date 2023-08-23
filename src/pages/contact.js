import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
    return (
        <div className="bg-slate-900 grow text-white flex items-center justify-center">
            <div className="flex flex-col place-content-center">
                <div className="md:text-8xl text-center">
                    harbinreidt@gmail.com
                </div>
                <div className="flex md:text-8xl pt-4 justify-center">
                    <div className="mr-2">
                        <a href="https://www.linkedin.com/in/reidharbin/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon  icon={faLinkedin} size="2xl" />
                        </a>
                    </div>
                    <div className="ml-2">
                        <a href="https://github.com/ReidHarbin" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} size="2xl" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;