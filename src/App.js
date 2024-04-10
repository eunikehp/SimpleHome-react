import './App.css';
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