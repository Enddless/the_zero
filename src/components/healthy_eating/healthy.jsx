import './healthy.css';
import image1 from "./image1.png"
import image2 from "./image2.png"
import image3 from "./image3.png"
import spices1 from "./spices1.png"
import spices2 from "./spices2.png"
import spices3 from "./spices3.png"


function Healthy() {
    return (
        <section className="container healthy">
            <div className="text-container">
                <h1 className="text-container__title largeTitle">Healthy Eating is important part of lifestyle</h1>
                <p className="text-container__subtitle body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
            </div>
            <div className="photo-container">
                <img src={image1} alt="mainphoto" className="photo-container__mainphoto" />
            </div>
            <div className="spices-container">
                <img src={spices1} alt="spices1" className="spices-container__item" />
                <img src={spices2} alt="spices2" className="spices-container__item" />
                <img src={spices3} alt="spices3" className="spices-container__item" />
            </div>
            <div className="gallery-container container">
                <div className="gallery-container--left">
                    <img src={image2} alt="" className="gallery-container__image" />
                    <h3 className="left-title heading3">Start to plan your diet today</h3>
                    <p className="gallery-container__subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                </div>
                <div className="gallery-container--right">
                    <p className="gallery-container__subtitle body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque congue arcu</p>
                    <img src={image3} alt="" className="gallery-container__image" />
                </div>
            </div>
        </section>
    );
}

export default Healthy;
