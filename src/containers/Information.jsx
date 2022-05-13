import { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Information.css';

const Information = () => {
  const {
    state: { cart },
    addToBuyer,
  } = useContext(AppContext);
  const form = useRef(null);

  const handleSubmit = () => {
    const fromData = new FormData(form.current);
    const buyer = {
      name: fromData.get('name'),
      email: fromData.get('email'),
      address: fromData.get('address'),
      apto: fromData.get('apto'),
      cp: fromData.get('cp'),
      city: fromData.get('city'),
      state: fromData.get('state'),
      country: fromData.get('country'),
      phone: fromData.get('phone'),
    };
    addToBuyer(buyer);
  };

  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Nombre completo" name="name" />
            <input type="text" placeholder="Correo electronico" name="email" />
            <input type="text" placeholder="Direccion" name="address" />
            <input type="text" placeholder="Apto" name="apto" />
            <input type="text" placeholder="Codigo postal" name="cp" />
            <input type="text" placeholder="Ciudad" name="city" />
            <input type="text" placeholder="Estado" name="state" />
            <input type="text" placeholder="Pais" name="country" />
            <input type="text" placeholder="Telefono" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Regresar</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              Pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((product) => (
          <div
            className="Information-item"
            key={`information-${product.title}`}
          >
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Information };
