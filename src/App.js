import Header from './components/header/Header';
import Home from './components/home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './components/checkout/Checkout';
import Login from './components/login/Login';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';
import Payment from './components/checkout/Payment';
import Register from './components/register/Register';
import Footer from './components/footer/Footer';
import Products from './components/productsPage/Products';

function App() {
  const dispatch = useStateValue()[1];
  useEffect(() => {
  });

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>

          <Route path={'/payment'}>
            <Header />
            <Payment />
            <Footer />
          </Route>

          <Route path="/products">
            <Header />
            <Products />
            <Footer />
          </Route>

          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
