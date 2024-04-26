import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import Cart from "./Cart";
import "./BigCard.css"


function BigCard(props) {

    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
      const getProduct = async () => {
          const response = await fetch(`https://fakestoreapi.com/products/${id}`);
          const date = await response.json();
          setProduct(date);
      };

      getProduct();
    }, [id]);

    return (
        <>
          <div className="container-bigcard" >
            <div className="container-bigcard-info">
              <img src={product?.image} alt={product?.title} />
              <p>{product?.description}</p>
              <p>Categoria: {product?.category}</p>
            </div>
            <div className="container-bigcard-cart">
              <h3>{product?.title}</h3>
              <p>Rating: {product?.rating?.rate} | Avaliações: {product?.rating?.count}</p>
              <p>Preço: ${product?.price}</p>
              <Link to='/products'>
                Voltar para o catálogo
              </Link>
            </div>
          </div>
        </>
    )
}

export default BigCard;