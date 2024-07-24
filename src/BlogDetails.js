import useFetch from "./useFetch";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogDetails = () => {

const {id} =useParams();
const {data:blog, error, isPending} = useFetch("http://localhost:8000/blogs/"+id);
const navigate=useNavigate();
const handleClick=()=>{
    fetch("http://localhost:8000/blogs/"+blog.id, {
        method: 'DELETE'
    })
    .then(
        navigate("/")
    )
}
    return ( 
    <>
     {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {blog && <div className="blogdets">
        <h3>Title: {blog.title}</h3>
        <p>Written by: {blog.author}</p>
        <div>{blog.body}</div>
        <button onClick={handleClick} className="deletebutton">Delete Blog</button>
        </div>}
    </> );
}
 
export default BlogDetails;