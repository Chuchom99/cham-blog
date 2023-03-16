import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "./Home.css";

function Home() {
  const [post, setPost] = useState([])
  const url = "http://localhost:3000/posts/";
  console.log(post);

  useEffect(() => {
    axios.get(url).then((res) => {
    setPost(res.data);
    });
  }, []);
  const handleDelete = async (id) => {
    try {
     await axios.delete(url + id)
     window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
       <div className='post-div' >
         {
          post.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <div className='flex'>
              <button className='btnn' > <Link to={`/update-post/${post.id}`} > Update </Link></button>
              <button  className='btnn left' onClick={() => handleDelete(post.id)}>Delete</button>
            </div>
          </div>
        ))
         }
       </div> 
    </div>
  )
}

export default Home