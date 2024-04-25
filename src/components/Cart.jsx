import PropTypes from 'prop-types';
import "./Cart.css";
import { Link } from 'react-router-dom';
import { BsFillTrashFill } from 'react-icons/bs';

function Cart(props) {

  const { isCheckout } = props;
  const itensCarrinho = props.itensCarrinho;
  const setItensCarrinho = props.setItensCarrinho;

  Cart.propTypes = {
    itensCarrinho: PropTypes.array.isRequired,
    isCheckout: PropTypes.bool,
    setItensCarrinho: PropTypes.func.isRequired
  };

  
  function onClickAdd(productId) {
    const itensCarrinhoCopy = [...itensCarrinho];
    const itemCarrinho = itensCarrinhoCopy.find(ic => ic.product.id === productId);
    itemCarrinho.quantity++;
    setItensCarrinho(itensCarrinhoCopy);
    localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinhoCopy));
  }

  function onClickSub(productId) {
    const itensCarrinhoCopy = [...itensCarrinho];
    const itemCarrinho = itensCarrinhoCopy.find(ic => ic.product.id === productId);
    
      if (itemCarrinho && itemCarrinho.quantity > 1) {
        itemCarrinho.quantity--;
      }
      setItensCarrinho(itensCarrinhoCopy);
      localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinhoCopy));
  }

  function sumTotalPrice() {
    let totalPrice = 0;
    for (const ic of itensCarrinho) {
      totalPrice += ic.product.price * ic.quantity; 
    }
    return totalPrice;
  }

  const remove = (productId) => {
    const itensCarrinhoCopy = itensCarrinho.filter(ic => ic.product.id !== productId);
    setItensCarrinho(itensCarrinhoCopy);
    localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinhoCopy));
  }

  return (
    <>
      <div className={`container-cart ${isCheckout ? 'checkout' : 'products'}`}>
        <div className="container-cart">
          {itensCarrinho.length > 0 ?
            itensCarrinho.map(ic => 
              <div key={ic.product.id}>
                <div className="cart-item">
                  <img src={ic.product.image} className='img-thumbnail' />
                  <b>{ic.product.title}</b>
                  <div className="chg-quantiity">
                    <button className="decrementar" onClick={() => { onClickSub(ic.product.id); }}>-</button>
                    <span className="spn-quantity">{ ic.quantity }</span>
                    <button className="incrementar" onClick={() => { onClickAdd(ic.product.id); }}>+</button>
                  </div>
                  <div className='trash'>
                    <button onClick={() => remove(ic.product.id)} key={ic.product.id}>
                      <BsFillTrashFill/>
                    </button>
                  </div>

                {isCheckout ? 
                  (<>
                    <div className='container-cart-price'>
                      <span className='item-price'>$ {ic.product.price} * </span>
                      <span className='item-price'>{ic.quantity}  =</span>
                      <span><b>${ic.product.price * ic.quantity}</b></span>
                    </div>
                  </>
                  ) : (
                  <></>
                  )}
                </div>
              </div>

              ) :
            <div>Nenhum item no seu carrinho... &#128577;</div>
          }
          
          <hr />
          <p><b>Preço Total: $ {sumTotalPrice().toFixed(2)}</b></p>
          {isCheckout ? (
            <>
              <Link to='/products'>Continuar comprando</Link>
              <br />
              <br />
              <Link to='/'>Finalizar Compras</Link>
            </>
          ) : (
            <Link to="/checkout">Ver Carrinho</Link>
          ) }   
        </div>
      </div>
    </>
  )
}

export default Cart;