import { connect } from 'react-redux';
import {
  addToCart,
  clearItemFromCart,
  removeItem,
} from '../../redux/cart/cart-actions';
import './checkout-item.scss';

const CheckoutItem = ({ cartItem, clearAllItems, removeOne, addOne }) => {
  const { id, name, imageUrl, price, quantity } = cartItem;

  const deleteAllHandler = () => {
    clearAllItems(id);
  };

  const removeOneHandler = () => {
    removeOne(id);
  };

  const onAddHandler = () => {
    addOne(cartItem);
  };
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={removeOneHandler}>
          &#10094;
        </div>
        <span className="value"> {quantity}</span>
        <div className="arrow" onClick={onAddHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteAllHandler}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    clearAllItems: (id) => dispatch(clearItemFromCart(id)),
    removeOne: (id) => dispatch(removeItem(id)),
    addOne: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
