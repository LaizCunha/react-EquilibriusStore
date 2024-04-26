import PropTypes from 'prop-types';
import "./SmallCard.css"
import { Link } from 'react-router-dom';

function SmallCard(props) {

  const product = props.product;
  const itensCarrinho = props.itensCarrinho;
  const setItensCarrinho = props.setItensCarrinho;

  SmallCard.propTypes = {
    product: PropTypes.object.isRequired,
    setItensCarrinho: PropTypes.func.isRequired,
    itensCarrinho: PropTypes.array.isRequired,
  };

  function onClickAdd(productId) {

    if(!product) return;

    const itensCarrinhoCopy = [...itensCarrinho];
    const itemCarrinho = itensCarrinhoCopy.find(ic => ic.product.id === productId);
    if(itemCarrinho) {
      itemCarrinho.quantity++;
    } else {
      itensCarrinhoCopy.push({ product: product, quantity: 1 });
    }
 
    setItensCarrinho(itensCarrinhoCopy);
    localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinhoCopy));
  }

  return (
    <>
      <div className="product" key={product.id}>
        <div className='product-info'>
          <div className='product-img'>
            <Link to={`/details/${product.id}`}>          
              <img src={product.image} alt={product.title} />
            </Link>
          </div>
          <Link to={`/details/${product.id}`}>
            <h3>{product.title}</h3>
          </Link>
          <p>{product.description}</p>
          <p>Preço: $ {product.price}</p>
          <p>Categoria: {product.category}</p>
        </div >
          <button className="add-cart" onClick={() => onClickAdd(product.id)}>Adicionar item ao carrinho</button>
      </div>
    </>
  )
}

export default SmallCard;