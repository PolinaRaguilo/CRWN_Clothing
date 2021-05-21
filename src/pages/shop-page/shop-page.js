import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import WithSpinner from '../../components/with-spinner/with-spinner';
import {
  convertCollectionsShanpshotToMap,
  firestore,
} from '../../firebase/firebase-utils';
import { updateCollections } from '../../redux/shop/shop-actions';
import CollectionPage from '../collection-page/collection-page';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
  state = {
    loading: true,
  };
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');

    collectionRef.get().then((snapshot) => {
      const collectionsMap = convertCollectionsShanpshotToMap(snapshot);
      this.props.updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          render={(props) => (
            <CollectionsOverviewWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          render={(props) => (
            <CollectionPageWithSpinner
              isLoading={this.state.loading}
              {...props}
            />
          )}
        />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateCollections: (collMap) => dispatch(updateCollections(collMap)),
  };
};

export default connect(null, mapDispatchToProps)(ShopPage);
