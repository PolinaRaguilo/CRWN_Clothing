import { Component } from 'react';
import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header';
import { auth } from './firebase/firebase-utils';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import SignUpAndSignIn from './pages/signIn-sighUp/signIn-sighUp';

class App extends Component {
  state = {
    currentUser: null,
  };

  // unsubscribeFromAuth = null;

  componentDidMount() {
    auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignUpAndSignIn} />
        </Switch>
      </div>
    );
  }
}

export default App;
