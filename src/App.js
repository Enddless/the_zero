import React from 'react';
import { useState, useEffect, createContext } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router'
import { getLabels } from "./firebase/labels"
import { getPosts } from './firebase/posts'
import Homepage from './components/homepage/homepage';
import MenuPage from './components/menu_page/menupage';
import BlogPage from './components/blogpage/blogpage';
import PostDetails from './components/blogpostdetails/postdetails';
import './App.css';



export const PostsContext = createContext();


function App() {
  const [getPos, setgetPos] = useState("");
  const [labels, setlabels] = useState();

  useEffect(() => {
    //geting posts
    const fetchPosts = async () => {
      const data = await getPosts();
      if (data.length !== 0) {
        setgetPos(data);
      }
    }
    fetchPosts();
    //geting labels
    const fetchLabels = async () => {
      const data = await getLabels();
      if (data.length !== 0) {
        setlabels(data);
      }
    }
    fetchLabels();
    // console.log("Вызов хука");
  }, []);
  return (
    <>
      {getPos && labels && (
        <PostsContext.Provider value={{ getPos, setgetPos, labels, setlabels }}>
          <BrowserRouter>
            <Routes>
              <Route path={'/'} element={<Homepage />} />
              <Route path={'/menu'} element={<MenuPage />} />
              <Route path={'/blog'} element={<BlogPage />} />
              <Route path={'/post_details/:postId'} element={<PostDetails />} />
            </Routes>
          </BrowserRouter>
        </PostsContext.Provider>
      )}
    </>
  );
}

export default App;
