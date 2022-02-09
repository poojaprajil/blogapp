import About from "./components/about/About";
import Home from "./components/home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ArticleList from "./components/article/ArticleList";
import Article from "./components/article/Article";
import Signup from "./components/signup/Signup";
import Login from "./components/signup/Login";
import Error from "./components/error/Error";
import Header from "./components/header/Header";
import AddArticle from "./components/article/AddArticle";
import EditArticle from "./components/article/EditArticle";



function App() {
  return (
    <Router>

    <div>
      <Header/>
      <Routes>
        <Route path="/" element= {<Home />} />
        <Route path="/about" element={<About/>}/>
        <Route path="/article-list" element={<ArticleList/>}/>
        <Route path="/add-article" element={<AddArticle/>}/>
        <Route path="/edit-article" element={<EditArticle/>}/>
        <Route path="/article/:name"element={<Article/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="*" element={<Error />}/>
        

      </Routes>
    </div>

    </Router>
    
  );
}

export default App;
