import { useState, useEffect, useContext } from 'react';
import { useSelector } from "react-redux";
import { PostsContext } from '../../App';
import Footer from '../footer/footer';
import Header from '../header/header';
import Loader from '../mini-components/loader/loader';
import Tags from '../mini-components/tags/tags';
import './postdetails.css';
import image from "./image1.png"


function PostDetails(props) {

  //**********из состояния ищем обновленное поле с нажатым id**********
  const postId = useSelector(state => state.postId)

  //**********из контекста подгружаю данные по постам и лэйблам**********
  const getPos = useContext(PostsContext).getPos;
  const labels = useContext(PostsContext).labels;

  // **********ищу соответствующий нажатому элементу в блоге пост********** 
  // **********и получаю имя соответствующего лэйбла**********
  let findPost = getPos.find(post => post.id === postId);
  let imageArray = findPost.imagesForBlog;
  const label = Object.values(labels).filter(item => item.id === findPost.label)[0].title;


  //********** LOADER **********
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false);
    }, 1000);

  }, [])

  return (
    <section className="postdetails-page">
      <Header />
      <img src={image} className="postdetails-page__image" alt=""></img>
      <div className="postdetails-page__background">
        <h1 className="postdetails-page__title heading2">{findPost.title}</h1>
        <button className="btn btn--transparent">
          <p className="btnolivetext heading6">{label}</p>
        </button>
      </div>
      {loader ? (
        <div className="loader">
          <Loader />
        </div>
      ) : (
        <>
          {findPost && label && (
            <>
              <div className="container postdetails">
                <p className="postdetails__subtitle body">{findPost.description.slice(0, 300)}</p>
                <div className="postdetails__image-table container">
                  <img src={findPost.imagePreview} className="postdetails__image--main" alt="" />
                  {Object.values(imageArray).map((item, index) => {

                    return (
                      <>
                        <img
                          key={index}
                          src={item.image}
                          className={`postdetails__image--${index}`}
                          alt=""
                        />
                      </>
                    )
                  })}

                </div>
                <p className="postdetails__subtitle body">{findPost.description.slice(301)}</p>
              </div>

              <Tags labels={labels} />

            </>
          )}
        </>

      )
      }
      <Footer />
    </section>
  );
}

export default PostDetails;
