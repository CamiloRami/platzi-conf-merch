import '../styles/components/Checkout.css';

const Checkout = () => {
  return (
    <div className="Checkout">
      <div className="Chackout-content">
        <h3>Lista de Pedidos:</h3>
        <div className="Chackout-item">
          <div className="Checkout-element">
            <h4>ITEM name</h4>
            <span>$10</span>
          </div>
          <button type="button">Eliminar</button>
        </div>
      </div>
      <div className="Checkout-sidebar">
        <h3>Precio Total: $10</h3>
        <button type="button">Continuar pedido</button>
      </div>
    </div>
  );
};

export { Checkout };
