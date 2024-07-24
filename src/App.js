import ComponentNav from "./ComponentNav";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Create from "./Create";
import BlogDetails from "./BlogDetails";
import Submitted from "./Submitted";
import Delete from "./Delete";



function App() {
  return (
    <Router>
<div className="Container">
<ComponentNav />
<div className="content">
<Routes>
<Route exact path="/" element={<Home />} />
<Route path="/create" element={<Create />} />
<Route path="/blogs/:id" element={<BlogDetails />} />
<Route path="/submitted" element={<Submitted />} />
<Route path="/delete" element={<Delete />} />
</Routes>


</div>


</div>
</Router>
  );
}

export default App;
