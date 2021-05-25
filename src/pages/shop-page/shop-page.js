import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';
import CollectionPage from '../collection-page/collection-page';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

const ShopPage = ({
  fetchCollectionsStart,
  loading,
  match,
  isCollectionLoaded,
}) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);
  return (
    <div className="shop-page">
      <Route
        exact
        path={`${match.path}`}
        render={(props) => (
          <CollectionsOverviewWithSpinner isLoading={loading} {...props} />
        )}
      />
      <Route
        path={`${match.path}/:collectionId`}
        render={(props) => (
          <CollectionPageWithSpinner
            isLoading={!isCollectionLoaded}
            {...props}
          />
        )}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.shop.isFetching,
    isCollectionLoaded: selectIsCollectionsLoaded(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
