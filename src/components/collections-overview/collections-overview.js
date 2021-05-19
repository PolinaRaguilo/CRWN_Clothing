import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors';
import PreviewCollection from '../preview-collection/preview-collection';
import './collections-overview.scss';

const CollectionsOverview = ({ collections }) => {
  return (
    <div className="collections-overview">
      {collections.map((collection) => {
        return (
          <PreviewCollection
            key={collection.id}
            title={collection.title}
            items={collection.items}
          />
        );
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    collections: selectCollectionsForPreview(state),
  };
};

export default connect(mapStateToProps, null)(CollectionsOverview);
