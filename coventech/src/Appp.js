import './App.css';
import BlogsPage from './Components/BlogsPage/BlogsPage';
import Home from './Components/Home/Home';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App font-sans">
    <Router>
	  <Routes>
		  <Route path='/' exact element={ <Home/> }/> 
		  <Route path="/blog/post1" element={ <BlogsPage /> }></Route>	
    </Routes>
    </Router>
    </div>
  );
}

export default App;