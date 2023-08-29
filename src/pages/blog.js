import React from "react";
import { Link, Route, Router } from "react-router-dom";
import Picture from "./images/amazon-music.jpg"

const imageDir = "https://rh-posts.s3.us-west-2.amazonaws.com/images/"; //imageDir +
const postcard = ( thumbnail, subject, title, author, date, fileName, blurb) => {
    return (
        <div className="flex m-4"> 
            <div className="p-4 rounded-lg overflow-hidden w-1/2 border-green-600">
                <img className="" src={  Picture } alt="thumbnail"></img>
            </div>
            <div>
                <p>{ title }</p>
                <p>{ subject }</p>
                <p>{ date }</p>
                <p>{ author }</p>
                <p>{ blurb }</p>               
                <Link to={ "/blog/" + fileName }> Continue Reading </Link>
            </div>
        </div>
    )
}

const Blog = () => {
    return (
        <div className="grow grid grid-cols-1 md:grid-cols-3 bg-slate-900 text-white">
            {postcard(
                "image3.jpg",
                "This is the subject",
                "Title",
                "Reid Harbin",
                "1/12/23",
                "s3testfile")}
            {postcard(
                "image3.jpg",
                "This is the subject",
                "Title",
                "Reid Harbin",
                "1/12/23",
                "s3testfile")}
            {postcard(
                "image3.jpg",
                "This is the subject",
                "Title",
                "Reid Harbin",
                "1/12/23",
                "s3testfile")}
            {postcard(
                "image3.jpg",
                "This is the subject",
                "Title",
                "Reid Harbin",
                "1/12/23",
                "s3testfile")}
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