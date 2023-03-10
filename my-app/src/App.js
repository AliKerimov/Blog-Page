import { Routes,Route } from "react-router-dom";
import Post from "./pages/Post";
import Posts from "./pages/Posts";
import CreatePost from "./pages/CreatePost";
function App() {
  return (
    <div className="App">
    <Routes>
       <Route path="/" Component={Posts}/>
       <Route path="/posts/:id" Component={Post}/>
       <Route path="/create" Component={CreatePost}/>
    </Routes>
    </div>
  );
}

export default App;
