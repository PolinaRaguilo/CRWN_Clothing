import { Route, Switch } from 'react-router';
import './App.css';
import Header from './components/header/header';
import HomePage from './pages/home-page/home-page';
import ShopPage from './pages/shop-page/shop-page';
import SignUpAndSignIn from './pages/signIn-sighUp/signIn-sighUp';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignUpAndSignIn} />
      </Switch>
    </div>
  );
}

export default App;
