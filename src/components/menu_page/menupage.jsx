import Footer from '../footer/footer';
import FormReservation from '../form-reservation/form-reservation';
import Header from '../header/header';
import TableMenu from '../mini-components/table_menu/table_menu';
import './menupage.css';
import { useState, useEffect } from 'react'
import { getMenu } from '../../firebase/menu_details'
import { getCategory } from '../../firebase/category'

function MenuPage() {
    //**********ПОЛУЧАЮ БЛЮДА И СОРТИРУЮ ПО КАЖДОЙ КАТЕГОРИИ**********
    const [listMenu, setlistMenu] = useState("")
    const [menus, setmenu] = useState("");
    useEffect(() => {
        const fetchPreview = async () => {
            const data = await getMenu();
            if (data) {
                setmenu(data);
            }
        }
        fetchPreview();
    }, []);
    const [cat, setcat] = useState("");
    useEffect(() => {
        const fetchPreview = async () => {
            const data = await getCategory();
            if (data) {
                setcat(data);
            }
        }
        fetchPreview();
    }, []);

    

    return (
        <section className="menupage">
            <Header />

            <div className="container all-menu">
                <h1 className="all-menu__title heading1">View Our New Menu</h1>
                <h5 className="all-menu__subtitle heading5">The freshest ingredients for you every day</h5>
                <div className="all-menu__table">
                    {Object.values(cat).map(item => {
                        const menu = Object.values(menus).filter(value => value.type === item.id)
                        return (
                            <div key={item.id}
                                id={item.id}
                                className="category-menu container"
                            >
                                <h1 className="category-menu__title heading1">{item.name}</h1>
                                <p className="category-menu__subtitle body">{item.description}</p>
                                <div className="category-menu__content container">
                                    <div className="content__photo">
                                        <img
                                            src={item.imagePreview}
                                            className="photo"
                                            alt={`Фото категории ${item.name}`} 
                                         />
                                    </div>

                                    <TableMenu menu={menu} />
                                    

                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>

            <FormReservation />
            <Footer />
        </section>
    );
}

export default MenuPage;
