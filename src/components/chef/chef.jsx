import './chef.css';
import chef from "./chef.png"

function Chef() {
  return (
    <section className="chef">
      <div className="container cook">
        <div className="cook-photo">
          <img src={chef} alt="cook" className="cook-photo__avatar" />
        </div>
        <div className="cook-info">
          <h1 className="cook-info__title heading1">Excellent cook</h1>
          <p className="cook-info__subtitle body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus lorem id penatibus imperdiet. Turpis egestas ultricies purus auctor tincidunt lacus nunc. </p>
        </div>
      </div>
    </section>
  );
}

export default Chef;
