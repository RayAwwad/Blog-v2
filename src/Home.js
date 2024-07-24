import useFetch from "./useFetch";
import BlogList from "./BlogList";


const Home = () => {

const {data:blogs, error, isPending} = useFetch("http://localhost:8000/blogs");

    return (
     <>
    {isPending && <div>Loading...</div>}
    {error && <div>{error}</div>}
    {blogs && <BlogList blogs={blogs} />}
    </> );
}
 
export default Home;