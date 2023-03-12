import { Routes, Route } from "react-router-dom";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Posts />} />
        <Route path="/posts/:id" element={<Post />} />
        <Route path="/posts/create" element={<CreatePost />} />
      </Routes>
    </div>
  );
}

export default App;
