import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';
import HomePage from './pages/HomePage';
import ContactPage from './pages/ContactPage';
import ProductDetailPage from './pages/ProductDetailPage';


function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path='/' element={<HomePage/>} />
          <Route path='shop' element={<ShopPage />} />
          <Route path='shop/:productId' element={<ProductDetailPage />} />
          <Route path='contact' element={<ContactPage/>} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;
