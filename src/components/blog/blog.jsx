import arrow from "./icon_arrow-right.svg"
import './blog.css';

import { useState, useEffect } from 'react'
import { getPosts } from '../../firebase/posts'


function Blog() {
  const [posts, setposts] = useState("");
  useEffect(() => {
    const fetchPreview = async () => {
      const data = await getPosts(2);
      if (data) {
        setposts(data);
      }
    }
    fetchPreview();
  }, []);
  return (
    <section className="container blog">
      {Object.values(posts).map((value) => {
        return (
          <div key={value.id}
            className="post">
            <img src={value.imagePreview} alt="food" className="post__photo" />
            <button className="btn btn--olive">
              <p className="btnolivetext heading6">Fashion</p>
            </button>
            <h4 className="post__title heading4">{value.title}</h4>
            <p className="post__subtitle excerpt">{(value.description).slice(0,300)+"..."}</p>
            <button className="btn btn--more body">
              <p className="btnmore--padding">Read More</p>
              <img src={arrow} alt="arrow" />
            </button>
          </div>
        )
      })}


    </section>
  );
}

export default Blog;
