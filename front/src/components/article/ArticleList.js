import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// import './Article.css';
import articleContent from './SampleArticlesDb';
import axios from "axios";



function ArticleList(props) {
    var [data,setData]=useState([])
    const loadDataFromApi=()=>{

        
        axios.get("https://localhost:5000/viewall").then(
    
    
        (response)=>{
          console.log(response.data)
          setData(data = response.data)
         
        }
        )
      }
      useEffect(()=>{
        loadDataFromApi()
        // setToGalleryPage()
        // console.log("reloaded")
      },[])
    
    
    
    return (
        <div>
            <h1 id='articles'>Articles</h1>
            {articleContent.map((i, key) => (
                <Link className='article' key={key} to={`/article/${i.name}`}>
                    <h3 className='article_head'>{i.title}</h3>
                </Link>
            ))}
        </div>
    );
}

export default ArticleList;