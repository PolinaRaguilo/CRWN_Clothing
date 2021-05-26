import axios from 'axios';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51IspzsBOJBf7qNQCYybxLUuKNm02UN8rq3xYwEaS81qtoApWQMVTkK86U9ecKmKu7CTijdFy2cSW7Kjct9px49w300psXQHdWi';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('Success');
      })
      .catch((err) => {
        console.log('Error', JSON.parse(err));
        alert('error with payment');
      });
  };

  return (
    <StripeCheckout
      label="Pay Now"
      panelLabel="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
