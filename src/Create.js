import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {

const [title, setTitle] = useState("");
const [author, setAuthor] = useState("");
const [body, setBody]= useState("");
const navigate= useNavigate();
const handleSubmit=(e)=>{
    e.preventDefault();
    const blogs =  {title, author, body};

fetch("http://localhost:8000/blogs",{
    method: 'POST',
    headers:{"Content-Type":"application/json"},
    body: JSON.stringify(blogs)
})
.then(
navigate("/")
)

}

    return ( 
        <div className="form">
        <form  onSubmit={handleSubmit}>
<label className="label">Title:</label>
<input required className="input" type="text" value={title} onChange={e=>setTitle(e.target.value)} />

<label className="label">Author:</label>
<input required className="input" type="text" value={author} onChange={e=>setAuthor(e.target.value)} />

<label className="label">Body:</label>
<textarea required className="textarea" value={body} onChange={e=>setBody(e.target.value)} />
    <button>Add blog</button>
        </form>
        </div>
     );
}
 
export default Create;