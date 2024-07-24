import { useNavigate } from "react-router-dom";

const Delete = () => {
    const navigate=useNavigate();
const handleNavigate=()=>{
navigate("/");
}

    return ( 
        <div className="delete">
        <h3>Blog deleted successfully</h3>
        <button onClick={handleNavigate}>Back to the home page</button>
        </div>
     );
}
 
export default Delete;