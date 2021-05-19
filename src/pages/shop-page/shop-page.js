import { Route } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import CollectionPage from '../collection-page/collection-page';

const ShopPage = ({ match }) => {
  return (
    <div className="shop-page">
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

export default ShopPage;
