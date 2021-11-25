import React from 'react';
import './styles/App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import Header from './components/Header';
import { recoverdCartItemsFromLocalStorage,
  saveCartItemsInLocalStorage } from './services/localStorageFuncions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCartProducts: recoverdCartItemsFromLocalStorage(),
      cartQuantity: 0,
      totalCartValue: 0,
    };
  }

  componentDidMount() {
    const { userCartProducts } = this.state;
    this.updateCartSize(userCartProducts);
    this.calcCartTotal(userCartProducts);
  }

  verifyProduct = (produto) => { /* Verificara se o produto ja existe no carrinho (Pagina Home e Details) */
    const { userCartProducts } = this.state;
    /* Verifica se o produto ja existe no carrinho */
    const productExistInCart = userCartProducts.some(({ name }) => name === produto.name);
    if (productExistInCart) { /* Se existir ira remontar a quantidade do produto recebido */
      const prodQuant = userCartProducts.filter(({ name }) => (
        name === produto.name))[0].quantity;
      produto = {
        ...produto,
        quantity: (prodQuant + 1),
      };
    }
    /* e chamar a funcao de adicionar ao carrinho */
    this.addToCart(produto);
  }

  addToCart = (produto) => {
    const { userCartProducts } = this.state;

    /* Produtos diferentes do recebido */
    const filterProducts = userCartProducts.filter(({ name }) => name !== produto.name);
    /* Array de controle */
    let itemsCart = [];

    if (filterProducts.length === 0) {
      itemsCart = [produto];
      this.setState({
        userCartProducts: itemsCart,
      }, () => {
        saveCartItemsInLocalStorage(itemsCart);
        this.updateCartSize(itemsCart);
      });
    } else {
      itemsCart = [...filterProducts, produto];
      this.setState({
        userCartProducts: itemsCart,
      }, () => {
        saveCartItemsInLocalStorage(itemsCart);
        this.updateCartSize(itemsCart);
      });
    }
    this.calcCartTotal(itemsCart);
  };

  updateCartSize = (cartItems) => {
    const cartQuant = cartItems.reduce((prevValue, accValue) => (
      prevValue + accValue.quantity
    ), 0);
    this.setState({
      cartQuantity: cartQuant,
    });
  }

  calcCartTotal = (cartItems) => {
    const allValues = cartItems.map(({ quantity, price }) => quantity * price);
    const total = allValues.reduce((prevValue, accValue) => prevValue + accValue, 0)
      .toFixed(2);

    this.setState({
      totalCartValue: total,
    });
  }

  render() {
    const { cartQuantity, totalCartValue } = this.state;
    return (
      <BrowserRouter>
        <Header cartQuantity={ cartQuantity } />
        <Switch>
          <Route
            exact
            path="/"
            render={ () => (
              <Home addToCart={ this.verifyProduct } />) }
          />
          <Route
            exact
            path="/cart"
            render={ () => (<Cart
              addToCart={ this.addToCart }
              cartTotalValue={ totalCartValue.toString() }
            />) }
          />
          <Route
            exact
            path="/item/:id"
            render={
              (props) => <ProductDetails { ...props } addToCart={ this.verifyProduct } />
            }
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
