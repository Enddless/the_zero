import './form-reservation.css';



function FormReservation() {
  return (
    <section className="reservation">
      <div className="container">
        <div className="reservation-head">
          <h1 className="reservation-head__title heading1">Make a Reservation</h1>
          <p className="reservation-head__subtitle body">Get in touch with restaurant</p>
        </div>
        <form className="reservation-form container">
          <input type="datetime-local" className="reservation-form__input " />
          <input type="text" className="reservation-form__input" placeholder="Введите количество персон" />
          <button className="btn btn--green heading5">
            <p className="btngreentext">Reserv</p>
          </button>
        </form>
      </div>
    </section>
  );
}

export default FormReservation;
