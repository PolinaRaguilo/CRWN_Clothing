import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cart-actions';
import {
  AddButton,
  BackgroundImage,
  CollectionFooterContainer,
  CollectionItemContainer,
  NameContainer,
  PriceContainer,
} from './collection-item.style';

const CollectionItem = ({ id, name, price, imageUrl, addToCart }) => {
  const onAddHandler = () => {
    addToCart({ id, name, price, imageUrl });
  };
  return (
    <CollectionItemContainer>
      <BackgroundImage imageUrl={imageUrl} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={onAddHandler} className="custom-button">
        add to cart
      </AddButton>
    </CollectionItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(CollectionItem);
