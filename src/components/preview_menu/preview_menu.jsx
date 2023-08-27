import './preview_menu.css';
import { useState, useEffect } from 'react'
import { getMenu } from '../../firebase/menu_details'
import TableMenu from '../mini-components/table_menu/table_menu';




function PreviewMenu() {
  const [menu, setmenu] = useState("");
  useEffect(() => {
    const fetchPreview = async () => {
      const data = await getMenu(6);
      if (data) {
        setmenu(data);
      }
    }
    fetchPreview();
  }, []);

  return (
    <section className="container preview-menu">
      <div className="content-menu">
        <h1 className="content-menu__title heading1">Our Menu</h1>
        <p className="content-menu__subtitle body">This is a section of your menu. Give your section a brief description</p>
      </div>
      <div className="table-menu container">
        <TableMenu menu={menu} />
      </div>
    </section>
  );
}

export default PreviewMenu;
