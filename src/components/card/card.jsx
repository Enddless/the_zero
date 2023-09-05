import './card.css';
import React, { useState, useEffect } from 'react'
import { getCategory } from '../../firebase/category'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function Card() {
  //********** ПОЛУЧЕНИЕ TIME ВСЕХ КАТЕГОРИЙ **********
  const [cat, setcat] = useState("");
  useEffect(() => {
    const fetchPreview = async () => {
      const data = await getCategory(5);
      if (data) {
        setcat(data);
      }
    }
    fetchPreview();
  }, []);

  //********** НАСТРОЙКИ СЛАЙДЕРА **********
  const settings = {
    dots: true,
    infinite: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    draggable: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 1,
    rows: 1,
    responsive: [
      {
        breakpoint: 1309,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },

    ]
  };

  return (
    <section className="cards-container container">
      <div className="card-info">
        <h1 className="card-info__title heading1">Catalog</h1>
        <p className="card-info__subtitle body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="card-group ">
        <Slider {...settings} className="">
          {Object.values(cat).map((value) => {
            return (
              <a href={`/menu/#${value.id}`} key={value.id}>
                <div key={value.id}
                  className="card-group__item overlay">
                  <img src={value.imagePreview} alt={value.name} className="image" />
                  <h4 className="card__name heading4">{value.name}</h4>
                </div>
              </a>
            )
          })}
        </Slider>

      </div>
    </section>
  );
}

export default Card;
