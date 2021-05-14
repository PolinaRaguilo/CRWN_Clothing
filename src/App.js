import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/home-page/home-page";
import ShopPage from "./pages/shop-page/shop-page";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
