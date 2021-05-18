import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { selectCartItems } from '../../redux/cart/cart-selectors';
import CartItem from '../cart-item/cart-item';
import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';

const CartDropdown = ({ cartItems, history }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length !== 0 ? (
          cartItems.map((item) => <CartItem key={item.id} item={item} />)
        ) : (
          <span className="empty-message">you cart is empty</span>
        )}
      </div>
      <CustomButton inverted onClick={() => history.push('/checkout')}>
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

export default withRouter(connect(mapStateToProps, null)(CartDropdown));
