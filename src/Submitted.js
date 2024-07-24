
import { useNavigate } from "react-router-dom";

const Submitted = () => {
const navigate=useNavigate();
const handleNavigate=()=>{
navigate("/");
}

  return ( 
    <div className="add">
    <h3>Blog added successfully</h3>
    <button onClick={handleNavigate}>Back to the home page</button>
    </div>
   );
}
 
export default Submitted;