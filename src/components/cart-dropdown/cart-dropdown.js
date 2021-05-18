import CustomButton from '../custom-button/custom-button';
import './cart-dropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>go to checkout</CustomButton>
    </div>
  );
};

export default CartDropdown;
