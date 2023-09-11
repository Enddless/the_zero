import { useContext } from 'react'
import { PostsContext } from '../../App';
import BlogPost from "../blogpost/blogpost";
import './blog.css';



function Blog(props) {
  const { limit } = props;
  const getPos = useContext(PostsContext).getPos;
  const labels = useContext(PostsContext).labels;

  return (
    <>{getPos !== "" && (
      <section className="container blog ">
        {Object.values(getPos.slice(0, limit)).map(post => {
          return (
            <BlogPost
              key={post.id}
              post={post}
              labels={labels}
            />
          )
        })}
      </section>
    )}
    </>
  );
}

export default Blog;
