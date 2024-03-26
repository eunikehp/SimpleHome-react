import './App.css';
import ProductsList from './features/products/ProductsList';
import Header from './components/Header';
import Footer from './components/Footer';
import ShopPage from './pages/ShopPage';

function App() {
  return (
    <div className="App">
        <Header/>
        <ShopPage />
        <Footer />
    </div>
  );
}

export default App;
