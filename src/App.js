import './App.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProducts } from './features/products/productsSlice';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';
import FAQPage from './pages/FAQPage';
import FavoritePage from './pages/FavoritePage';
import CartPage from './pages/CartPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';


function App() {

  //manage the side effect of dispatch
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); //use dispatch as dependencies array because we use a function defined outside of the call to use this effect inside this effect

  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='shop/:productId' element={<ProductDetailPage />} />
          <Route path='contact' element={<ContactPage/>} />
          <Route path='faq' element={<FAQPage/>} />
          <Route path='favorites' element={<FavoritePage/>} />
          <Route path='cart' element={<CartPage/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
library.add(fab, fas, far)