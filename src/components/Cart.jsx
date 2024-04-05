import PropTypes from 'prop-types';
import "./Cart.css";

function Cart(props) {

  const itensCarrinho = props.itensCarrinho;
  const setItensCarrinho = props.setItensCarrinho;

  Cart.propTypes = {
    itensCarrinho: PropTypes.array.isRequired,
    setItensCarrinho: PropTypes.func.isRequired
  };

  
  function onClickAdd(productId) {
    const itensCarrinhoCopy = itensCarrinho.slice(); // cria uma cópia do array
    const itemCarrinho = itensCarrinhoCopy.find(ic => ic.product.id === productId);
    itemCarrinho.quantity++;
    setItensCarrinho(itensCarrinhoCopy);
  }

  function onClickSub(productId) {
    const itensCarrinhoCopy = itensCarrinho.slice(); // cria uma cópia do array
    const itemCarrinho = itensCarrinhoCopy.find(ic => ic.product.id === productId);
    if (itemCarrinho.quantity > 0) {
      itemCarrinho.quantity--;
      setItensCarrinho(itensCarrinhoCopy);
    }
  }

  function sumTotalPrice() {
    let totalPrice = 0;
    for (const ic of itensCarrinho) {
      totalPrice += ic.product.price * ic.quantity; 
    }
    return totalPrice;
  }

  return (
    <>
      <div className="container-cart">
        {
          itensCarrinho.length > 0 ?
          itensCarrinho.map(ic => 
            <div className="cart-item" key={ic.product.id}>
              <img src={ic.product.image} className='img-thumbnail' />
              <b>{ic.product.title}</b>

              <div className="chg-quantiity">
                <button className="decrementar" onClick={() => { onClickSub(ic.product.id); }}>-</button>
                <span className="spn-quantity">{ ic.quantity }</span>
                <button className="incrementar" onClick={() => { onClickAdd(ic.product.id); }}>+</button>
              </div>
            </div>
          ) :
          <div>Nenhum item no seu carrinho... &#128577;</div>
        }
        
        <hr />
        <p><b>Preço Total:</b> $ {sumTotalPrice().toFixed(2)}</p>
      </div>
    </>
  )
}

export default Cart;