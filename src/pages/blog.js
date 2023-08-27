import React from "react";
import { Link, Route, Router } from "react-router-dom";

const imageDir = "https://rh-posts.s3.us-west-2.amazonaws.com/images/"; //imageDir +
const postcard = ( thumbnail, subject, title, author, date, fileName, blurb) => {
    return (
        <div className="flex"> 
            <img className="bg-green-500" src={  thumbnail } alt="thumbnail" width={window.screen.availWidth / 4} height={window.availWidth / 2}></img>
            <div>
                <Link to={ "/blog/" + fileName }>{ title }</Link>
                <p>{ subject }</p>
                <p>{ date }</p>
                <p>{ author }</p>
                <p>{ blurb }</p>               
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <div className="flex grow items-center justify-center bg-slate-900 text-white">
            {postcard(
                "image3.jpg",
                "This is the subject",
                "Title",
                "Reid Harbin",
                "1/12/23",
                "s3testfile")}
        </div>
    )
}

export default Blog;