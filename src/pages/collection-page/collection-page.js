import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop-selectors';
import CollectionItem from '../../components/collection-item/collection-item';
import './collection-page.scss';

const CollectionPage = ({ collection }) => {
  console.log(collection);
  const { title, items } = collection;

  return (
    <div className="collection-page">
      <h2 className="title">{title}</h2>
      <div className="items">
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
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    collection: selectCollection(ownProps.match.params.collectionId)(state),
  };
};
export default connect(mapStateToProps, null)(CollectionPage);
