import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ItemPage from './pages/ItemPage/ItemPage';
import Categories from './pages/Categories/Categories';
import ProductPage from './pages/ProductPage/ProductPage';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/home-section-5/Footer'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/product/:id' element={<ItemPage />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/productpage/:id' element={<ProductPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
