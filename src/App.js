import './App.css';
import ProductsList from './features/products/ProductsList';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header/>
        <ProductsList />
        <Footer />
    </div>
  );
}

export default App;
