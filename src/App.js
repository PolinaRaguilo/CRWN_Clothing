import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase-utils';
import CheckoutPage from './pages/checkout-page/checkout-page';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import SignUpAndSignIn from './pages/signIn-sighUp/signIn-sighUp';
import { setCurrentUser } from './redux/user/user-actions';
import { selectCurrentUser } from './redux/user/user-selector';

class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const useRef = await createUserProfileDocument(userAuth);

        useRef.onSnapshot((snapshot) => {
          this.props.setCurrentUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      } else {
        this.props.setCurrentUser(userAuth);
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
            }
          />
          <Route exact path="/checkout" component={CheckoutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user)),
  };
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
