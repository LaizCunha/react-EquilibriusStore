import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import SmallCard from "./SmallCard";
import "./SmallCardList.css"

function SmallCardList(props) {

  const itensCarrinho = props.itensCarrinho;
  const setItensCarrinho = props.setItensCarrinho;

  SmallCardList.propTypes = {
    itensCarrinho: PropTypes.array.isRequired,
    setItensCarrinho: PropTypes.func.isRequired
  };

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setAllProducts(data);
        setProducts(data);
      } catch (e) {
        console.error('Erro:', e);
      }
    };
    getProducts();
  }, []);

  function onFindTextChange(evt) {
    const findText = evt.target.value;
    const filteredProducts = allProducts.filter(product => product.title.toLowerCase().includes(findText.toLowerCase()));
    setProducts(filteredProducts);
  }

  return (
    <>
      <div className="find-products">
        <label htmlFor="find">Busca: </label>
        <input type="text" name="find" onChange={onFindTextChange}></input>
      </div>
      <div className="container-smallcard-list">
        { products.map(product => (
          <SmallCard itensCarrinho={itensCarrinho}  setItensCarrinho={setItensCarrinho}
            key={product.id}
            product={product}
          ></SmallCard>
        ))}
      </div>
    </>
  )
}

export default SmallCardList;