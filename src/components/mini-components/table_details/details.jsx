import './details.css';
import { useState, useEffect } from 'react';
import Loader from "../loader/loader"
import Close from '../close/close';

function Details(props) {
  //********** ЗАКРЫТИЕ ЛИСТА ДЕТАЛЕЙ БЛЮДА **********
  const [viewdetails, setviewdetails] = useState(true)
  const closeDetails = () => {
    setviewdetails(!viewdetails)
  }
  //********** LOADER **********
  const [loader, setLoader] = useState(false)
  useEffect(() => {
    setLoader(true)
    setTimeout(() => {
      setLoader(false);
    }, 1000);

  }, [])
  const { details } = props
  return (
    <>
      {viewdetails && (
        <div className="details container">
          {loader ? (
            <>
              <div className="loader">
                <Loader />
              </div>
            </>
          ) : (
            <>
              <div className="details__info">
                <h2 className="details__title heading2">{details.title}</h2>
                <h5 className="details__subtitle heading5">{details.description}</h5>
              </div>
              <div className="details__photo">
                <img src={details.image} alt={details.title} className="image image-preview" />
              </div>
            </>
          )}

          <Close onClick={closeDetails}/>
        </div>
      )}
    </>
  );
}

export default Details;
