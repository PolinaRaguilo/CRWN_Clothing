import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { toggleCartHidden } from '../../redux/cart/cart-actions';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history, hideCart }) => {
  const onClickHandler = () => {
    history.push('/checkout');
    hideCart();
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton inverted onClick={onClickHandler}>
        go to checkout
      </CustomButton>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cartItems: selectCartItems(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    hideCart: () => dispatch(toggleCartHidden()),
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropdown),
);
