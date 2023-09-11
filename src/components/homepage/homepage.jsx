import Blog from '../blog/blog';
import Card from '../card/card';
import Chef from '../chef/chef';
import Features from '../features/features';
import Footer from '../footer/footer';
import FormReservation from '../form-reservation/form-reservation';
import Header from '../header/header';
import Healthy from '../healthy_eating/healthy';
import PreviewMenu from '../preview_menu/preview_menu';
import './homepage.css';
import { useState  } from 'react'

function Homepage() {
    const [limit, setlimit] = useState(2);
    return (
        <section className="homepage">
            <Header />
            <Healthy />
            <PreviewMenu />
            <Chef />
            <Features />
            <Blog limit={limit}/>
            <FormReservation />
            <Card />
            <Footer />
        </section>
    );
}

export default Homepage;
