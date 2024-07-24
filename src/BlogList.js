import {Link} from "react-router-dom";


const BlogList = ({blogs}) => {


    return ( 
        <div>
        <h3 className="HomeTitle">Title: All Blogs</h3>
        {blogs.map((blog)=>(
        <div key={blog.id} className="Home-Page">
            <Link to={`/blogs/${blog.id}`}>
            <h5>Title: {blog.title}</h5>               
            <p>Written by: {blog.author}</p>
            </Link>                
 
        </div>
        ))}
        </div>
     );
}
 
export default BlogList;