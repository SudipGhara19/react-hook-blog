import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar, Home, CreatePost, PostDetail } from './';


function App() {
  return (
    <div className="App">
 <Router>
 <Navbar />
 <Routes>
 <Route exact path="/" element={<Home />} />
 <Route exact path="/post/:postId" element={<PostDetail />} />
 <Route exact path="/create-post" element={<CreatePost />} />
 
 </Routes>
 </Router>

    </div>
  );
}

export default App;
