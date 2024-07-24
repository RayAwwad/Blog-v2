import { useState } from "react";

const Create = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const blogs = { title, author, body };
    onSubmit(blogs);
  }

  return ( 
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label className="label">Title:</label>
        <input required className="input" type="text" value={title} onChange={e => setTitle(e.target.value)} />

        <label className="label">Author:</label>
        <input required className="input" type="text" value={author} onChange={e => setAuthor(e.target.value)} />

        <label className="label">Body:</label>
        <textarea required className="textarea" value={body} onChange={e => setBody(e.target.value)} />
      </form>
    </div>
  );
}
 
export default Create;