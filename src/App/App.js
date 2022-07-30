import NavBar from "./Components/NavBar";
import {Route, Routes} from 'react-router-dom'
import Dashboard from "./Components/Dashboard"
import Home from "./Components/Home";
import Login from "./Components/Login";
// import Posts from "./Components/Posts";
import Stats from "./Components/Stats";
import PostList from "./Components/PostList";
import Post from "./Components/Post";


const posts = [
  {id:1,label:'post 1'},
  {id:2,label:'post 2'},
  {id:3,label:'post 3'}
]

function App() {
  return (
    <div>

      <NavBar/>
      <h1>App</h1>
      <Routes>
        <Route path="/dashboard" element={<Dashboard isAdmin={false}/>}/>
        <Route path="/dashboard/stats" element={<Stats/>}/>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/posts/:postID" element={<PostList posts={posts}/>}/>
        <Route path="/posts" element={<Post posts={posts}/>}/>

      </Routes>

    </div>
  );
}

export default App;
