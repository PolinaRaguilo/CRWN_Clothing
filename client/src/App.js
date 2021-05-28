import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router';
import { selectCurrentUser } from './redux/user/user-selector';
import { checkUserSession } from './redux/user/user-actions';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import CheckoutPage from './pages/checkout-page/checkout-page';
import SignUpAndSignIn from './pages/signIn-sighUp/signIn-sighUp';
import { GlobalStyle } from './global-styles';

const App = ({ currentUser, checkUserSession }) => {
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);
  return (
    <div>
      <GlobalStyle />
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route
          exact
          path="/signin"
          render={() =>
            currentUser ? <Redirect to="/" /> : <SignUpAndSignIn />
          }
        />
        <Route exact path="/checkout" component={CheckoutPage} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: selectCurrentUser(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkUserSession: () => dispatch(checkUserSession()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
