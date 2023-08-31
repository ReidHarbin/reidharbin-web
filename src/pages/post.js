
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const bucket = "https://rh-posts.s3.us-west-2.amazonaws.com/sources/";
const Post = () => {
    const params = useParams();
    const postFile = params.postFile;
    const [htmlContents, setHtmlContents] = useState('');

    useEffect(() => {
        async function fetchHtmlContents() {
            try {
                const response = await fetch(postFile); //".html"
                const htmlText = await response.text();
                setHtmlContents(htmlText);
                console.log(htmlText);
            } catch (error) {
                console.error('Error fetching HTML contents:', error);
            }
        }
        fetchHtmlContents();
  }, []);
    return (
        <div className="flex grow items-center justify-center text-white bg-slate-900" >
            <div className="text-white bg-slate-900 w-1/2 m-4" dangerouslySetInnerHTML={{ __html: htmlContents }} />
        </div>
    )
}

export default Post;