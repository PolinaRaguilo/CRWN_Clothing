import { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router';
import CollectionsOverview from '../../components/collections-overview/collections-overview';
import {
  convertCollectionsShanpshotToMap,
  firestore,
} from '../../firebase/firebase-utils';
import { updateCollections } from '../../redux/shop/shop-actions';
import CollectionPage from '../collection-page/collection-page';

class ShopPage extends Component {
  unsubscribeFromSnapshot = null;

  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    this.unsubscribeFromSnapshot = collectionRef.onSnapshot(
      async (snapshot) => {
        const collectionsMap = convertCollectionsShanpshotToMap(snapshot);
        this.props.updateCollections(collectionsMap);
      },
    );
  }

  render() {
    return (
      <div className="shop-page">
        <Route
          exact
          path={`${this.props.match.path}`}
          component={CollectionsOverview}
        />
        <Route
          path={`${this.props.match.path}/:collectionId`}
          component={CollectionPage}
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
