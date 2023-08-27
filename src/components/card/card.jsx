import './card.css';
import { useState, useEffect } from 'react'
import { getCategory } from '../../firebase/category'


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


  return (
    <section className="cards-container container">
      <div className="card-info">
        <h1 className="card-info__title heading1">Catalog</h1>
        <p className="card-info__subtitle body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
      </div>
      <div className="card-group container">
        {Object.values(cat).map((value) => {
          return (
            <div key={value.id}
              className="card-group__item overlay">
              <img src={value.imagePreview} alt={value.name} className="image" />
              <h4 className="card__name heading4">{value.name}</h4>
            </div>
          )
        })}
      </div>
    </section>
  );
}

export default Card;
