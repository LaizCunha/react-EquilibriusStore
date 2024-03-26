import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/Products';
import Details from './pages/Details';
import Checkout from './pages/Checkout';

function App() {


  return (
    <>      
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/details" element={ <Details />} />
        <Route path="/checkout" element={ <Checkout /> } />
      </Routes>
    </>
  )
}

export default App
