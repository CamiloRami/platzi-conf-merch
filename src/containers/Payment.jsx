import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2';
import { AppContext } from '../context/AppContext';
import { sumTotalAmount } from '../util/utiles';
import '../styles/components/Payment.css';

const Payment = () => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const navigate = useNavigate();
  const paypalOptions = {
    clientID: process.env.PAYPAL_CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data
      }
      addNewOrder(newOrder);
      navigate('/checkout/success');
    }
  }

  return (
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((product) => (
          <div className="Payment-item" key={`payment-${product.title}`}>
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PayPalButton
            paypalOptions={paypalOptions}
            buttonStyles={buttonStyles}
            amount={sumTotalAmount(cart)}
            onSuccess={data => handlePaymentSuccess(data)}
            onError={error => console.error(error)}
            onCancel={data => console.log(data)}
          />
        </div>
      </div>
    </div>
  );
};

export { Payment };
