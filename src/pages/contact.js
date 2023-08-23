import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAt, faR, faE, faI, faD, faH, faA,faB, faN, faT, faG, faM, faL, faC, faO, faCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
    return (
        <div className="bg-slate-900 grow text-white flex items-center justify-center">
            <div className="flex flex-col place-content-center text-lg md:text-7xl">
                <div className="text-center font-bold">
                    <FontAwesomeIcon className="pl-1" icon={faH}/>
                    <FontAwesomeIcon className="pl-1" icon={faA}/>
                    <FontAwesomeIcon className="pl-1" icon={faR}/>
                    <FontAwesomeIcon className="pl-1" icon={faB}/>
                    <FontAwesomeIcon className="pl-1" icon={faI}/>
                    <FontAwesomeIcon className="pl-1" icon={faN}/>
                    <FontAwesomeIcon className="pl-1" icon={faR}/>
                    <FontAwesomeIcon className="pl-1" icon={faE}/>
                    <FontAwesomeIcon className="pl-1" icon={faI}/>
                    <FontAwesomeIcon className="pl-1" icon={faD}/>
                    <FontAwesomeIcon className="pl-1" icon={faT}/>
                    <FontAwesomeIcon className="pl-1"icon={faAt}/>
                    <FontAwesomeIcon className="pl-1" icon={faG}/>
                    <FontAwesomeIcon className="pl-1" icon={faM}/>
                    <FontAwesomeIcon className="pl-1" icon={faA}/>
                    <FontAwesomeIcon className="pl-1" icon={faI}/>
                    <FontAwesomeIcon className="pl-1" icon={faL}/>
                    <FontAwesomeIcon className="pl-1 text-sm" icon={faCircle}/>
                    <FontAwesomeIcon className="pl-1" icon={faC}/>
                    <FontAwesomeIcon className="pl-1" icon={faO}/>
                    <FontAwesomeIcon className="pl-1" icon={faM}/>
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