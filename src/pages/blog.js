import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHelmetSafety } from "@fortawesome/free-solid-svg-icons";

const Blog = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-slate-900 text-white">
            <div className="text-center">
                <div className="md:text-8xl">
                    <FontAwesomeIcon icon={faHelmetSafety} />
                </div>
                <p>
                    This site is under construction
                </p>
            </div>
        </div>

    )
}

export default Blog;