import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import {
  CollectionItemsContainer,
  CollectionPageContainer,
  CollectionTitle,
} from './collection-page.styles';

const CollectionPage = ({ collection }) => {
  const { title, items } = collection;

  return (
    <CollectionPageContainer>
      <CollectionTitle>{title}</CollectionTitle>
      <CollectionItemsContainer>
        {items.map((item) => {
          return (
            <CollectionItem
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          );
        })}
      </CollectionItemsContainer>
    </CollectionPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};
export default connect(mapStateToProps, null)(CollectionPage);
