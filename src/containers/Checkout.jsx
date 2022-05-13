import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {
  const {
    state: { cart },
    removeFromCart,
  } = useContext(AppContext);

  const showTotal = () =>
    cart.reduce((totalPrice, { price }) => totalPrice + price, 0);

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <h3>No hay productos en el carrito</h3>
        )}
        {cart.map((product) => (
          <div className="Checkout-item" key={`checkout-${product.title}`}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <button type="button" onClick={() => removeFromCart(product)}>
              <i className="fas fa-trash-alt" title="Eliminar" />
            </button>
          </div>
        ))}
      </div>
      {cart.length > 0 && (
        <div className="Checkout-sidebar">
          <h3>Precio Total: ${showTotal()}</h3>
          <Link to="/checkout/information">
            <button type="button">Continuar pedido</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export { Checkout };
