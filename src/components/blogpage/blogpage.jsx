import arrow from "./icon_arrow-right.svg"
import './blogpage.css';

import { useState, useEffect } from 'react'
import { getPosts } from '../../firebase/posts'
import Header from "../header/header";


function BlogPage() {
  const [posts, setposts] = useState("");
  useEffect(() => {
    const fetchPreview = async () => {
      const data = await getPosts();
      if (data) {
        setposts(data);
      }
    }
    fetchPreview();
  }, []);
  return (
    <section className="blogpage">
      <Header />
      <div className="container blog-block">
        <h1 className="blog-block__title heading1">View Our blog list</h1>
        <h5 className="blog-block__subtitle heading5">It is easy way to create your beatiful blog for daily</h5>
        <div className="container blog-block__table blog">
          {Object.values(posts).map((value) => {
            return (
              <div key={value.id}
                className="post">
                <img src={value.imagePreview} alt="food" className="post__photo" />
                <button className="btn btn--olive">
                  <p className="btnolivetext heading6">Fashion</p>
                </button>
                <h4 className="post__title heading4">{value.title}</h4>
                <p className="post__subtitle excerpt">{(value.description).slice(0,350)+"..."}</p>
                <button className="btn btn--more body">
                  <p className="btnmore--padding">Read More</p>
                  <img src={arrow} alt="arrow" />
                </button>
              </div>
            )
          })}
        </div>
      </div>




    </section>
  );
}

export default BlogPage;
