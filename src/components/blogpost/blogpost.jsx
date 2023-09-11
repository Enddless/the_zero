import React  from "react";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { selectPost } from "../../store/actions"
import store from "../../store/store"
import arrow from "./icon_arrow-right.svg"
import "./post.css"




function BlogPost(props) {
  const { post, labels } = props;
  const label = Object.values(labels).filter(item => item.id === post.label)[0].title;
  //**********dispatch**********
  const dispatch = useDispatch(); //получаем диспатч из хука
  return (
    <>
      {post && label && (
        <div key={post.id}
          className="post"
          onClick={() => store.dispatch(selectPost(post.id))}
        // В этой строке происходит вызов функции dispatch() с аргументом selectPost(value.id).
        // Функция selectPost() является action creator'ом, который создает объект action с типом "SELECT_POST" 
        // и переданным id в свойстве payload. Этот action затем передается в reducer для обновления состояния 
        // хранилища Redux. Таким образом, при клике на пост вызывается действие SELECT_POST с переданным id, 
        // что позволяет обновить выбранный пост в хранилище Redux
        >
          <Link to={`/post_details/${post.id}`}>
            <img src={post.imagePreview} alt="food" className="post__photo" />
            <button className="btn btn--olive">
              <p className="btnolivetext heading6">{label}</p>
            </button>
            <h4 className="post__title heading4">{post.title}</h4>
            <p className="post__subtitle excerpt">{(post.description).slice(0, 300) + "..."}</p>
            <button className="btn btn--more body">
              <p className="btnmore--padding">Read More</p>
              <img src={arrow} alt="arrow" />
            </button>
          </Link>
        </div>
      )}
    </>
  )
}

export default BlogPost;

