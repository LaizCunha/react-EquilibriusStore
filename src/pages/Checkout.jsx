import { useEffect, useState } from 'react';
import Cart from '../components/Cart';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../components/CartCheckout.css';

function Checkout() {

  const [itensCarrinho, setItensCarrinho] = useState([]);
  const isCheckout = true;

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('itensCarrinho'));
    if(storedCart) {
      setItensCarrinho(storedCart);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
  }, [itensCarrinho]);

  useEffect(() => {
    if (itensCarrinho.length > 0) {
      localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho));
    } else {
      localStorage.removeItem('itensCarrinho');
    }
  }, [itensCarrinho]);

    return (
        <>
          <Header></Header>
          <Cart itensCarrinho={itensCarrinho} setItensCarrinho={setItensCarrinho} isCheckout={isCheckout}></Cart>
          <Footer></Footer>
        </>
    )
}

export default Checkout;