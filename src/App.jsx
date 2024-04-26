import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Products from './pages/Products';
import Details from './pages/Details';
import Checkout from './pages/Checkout';
import Finish from './pages/Finish';

import './App.css';

function App() {


  return (
    <>      
      <Routes>
        <Route exact path="/" element={ <Login /> } />
        <Route path="/products" element={ <Products /> } />
        <Route path="/details/:id" element={ <Details />} />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/finish" element={ <Finish/> } />
      </Routes>
    </>
  )
}

export default App
