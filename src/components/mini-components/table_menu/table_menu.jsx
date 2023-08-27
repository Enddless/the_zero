import "./tablemenu.css"
import { useState, useEffect } from 'react'
import Details from "../table_details/details"

function TableMenu(props) {
  const {menu} = props

  //********** ОТКРЫТИЕ ЛИСТА ДЕТАЛЕЙ БЛЮДА **********
  const [viewdetails, setviewdetails] = useState(false)
  const [details, setdetails] = useState(null)
  const openDetails = (det) => {
      setviewdetails(!viewdetails)
      setdetails(det)
  }

  return (
    <>
        {Object.values(menu).map((value) => {
          return (
            <div key={value.id}
              className="table-menu__item "
              onClick={() => openDetails(value)}
            >
              <h4 className="item__price heading4">$ {value.price}</h4>
              <h3 className="item__title heading3">{value.title}</h3>
              <p className="item__subtitle body">{value.description}</p>
              {viewdetails && <Details details={details}/> }
            </div>
          )
        })}
    </>
  );
}

export default TableMenu;
