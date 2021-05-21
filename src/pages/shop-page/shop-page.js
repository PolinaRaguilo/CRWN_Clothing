import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import WithSpinner from '../../components/with-spinner/with-spinner';

import { fetchCollectionsStartAsync } from '../../redux/shop/shop-actions';
import CollectionPage from '../collection-page/collection-page';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  componentDidMount() {
    this.props.fetchCollections();
  }

  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={this.props.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.props.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.shop.isFetching,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollections: () => dispatch(fetchCollectionsStartAsync()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
