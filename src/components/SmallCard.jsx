import PropTypes from 'prop-types';
import "./SmallCard.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function SmallCard(props) {

  const product = props.product;
  const onChangeQuantity = props.onChangeQuantity;

  SmallCard.propTypes = {
    product: PropTypes.object.isRequired,
    onChangeQuantity: PropTypes.func
  };

  const [quantity, setQuantity] = useState(0);

  function onClickAdd() {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    onChangeQuantity(newQuantity);
  }

  function onClickSub() {
    if (quantity > 0) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      onChangeQuantity(newQuantity);
    }
  }

  return (
    <>
      <div className="product" key={product.id}>
          <Link to={`/details/${product.id}`}>          
            <img src={product.image} alt={product.title} />
          </Link>
          <Link to={`/details/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p>{product.description}</p>
          <p>Preço: ${product.price}</p>
          <p>Categoria: {product.category}</p>
          <button className="decrementar" onClick={onClickSub}>-</button>
          <span className="spn-quantity">{ quantity }</span>
          <button className="incrementar" onClick={onClickAdd}>+</button>
      </div>
    </>
  )
}

export default SmallCard;