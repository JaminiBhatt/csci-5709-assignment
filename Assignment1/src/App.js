import './App.css';
import FollowingPage from './FollowingPage';
import BlogPost from './BlogPost';
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
       <Routes>
          <Route exact path="/" element={<FollowingPage/>}/>
          <Route exact path="/FollowingPage" element={<FollowingPage/>}/>
          <Route exact path="/BlogPost" element={<BlogPost/>}/>
       </Routes>
    </BrowserRouter>
  );
}

export default App;
