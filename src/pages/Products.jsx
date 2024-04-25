import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallCardList from "../components/SmallCardList";
import Cart from "../components/Cart";
import Loading from "../components/layout/Loading";
import './Products.css';

import { useState, useEffect } from "react";

function Products() {

  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const storedCart = JSON.parse(localStorage.getItem('itensCarrinho'));
    setTimeout(() => {
      if (storedCart) {
        setItensCarrinho(storedCart);
      }
      setLoading(false)
    }, 500);
  }, []);

  return(
    <>
      <Header />
      <div className="products-container">
        {loading ? (<Loading/>) : (
          <>
            <Cart itensCarrinho={itensCarrinho} setItensCarrinho={setItensCarrinho}></Cart>
            <br />
            <br />
            <SmallCardList itensCarrinho={itensCarrinho} setItensCarrinho={setItensCarrinho}></SmallCardList>
          </> 
        )}
        <Footer></Footer>
      </div>
    </>
  )
}

export default Products;