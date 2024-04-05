import Header from "../components/Header";
import Footer from "../components/Footer";
import SmallCardList from "../components/SmallCardList";
import Cart from "../components/Cart";
import { useState } from "react";

function Products() {

  const [itensCarrinho, setItensCarrinho] = useState([]);


    return(
      <>
        <Header></Header>
        <Cart itensCarrinho={itensCarrinho} setItensCarrinho={setItensCarrinho}></Cart>
        <br />
        <br />
        <SmallCardList itensCarrinho={itensCarrinho} setItensCarrinho={setItensCarrinho}></SmallCardList>
        <Footer></Footer>
      </>
    )
}

export default Products;