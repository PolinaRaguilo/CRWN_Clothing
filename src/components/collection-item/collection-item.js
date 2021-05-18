import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart-actions';
import CustomButton from '../custom-button/custom-button';
import './collection-item.scss';

const CollectionItem = ({ id, name, price, imageUrl, addToCart }) => {
  const onAddHandler = () => {
    addToCart({ id, name, price, imageUrl });
  };
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton inverted onClick={onAddHandler}>
        add to cart
      </CustomButton>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
