import React from 'react';
import Modal from './modal';
import ProductItem from './product-item';

const Cart = ({ cart, deleteProduct, plus, min, cartTotal, open, setOpen, closeModal }) => {
  return (
    <>
      <h1>общая сумма {cartTotal} сом</h1>
      <button
        onClick={() => setOpen(true)}
        style={{ margin: '10px 0' }}>купить</button>
      {open ? <Modal
        setOpen={setOpen}
        cart={cart}
        cartTotal={cartTotal}
        closeModal={closeModal} /> : null}
      <div className='product'>
        {
          cart.map(elem => {
            return <ProductItem
              min={() => min(elem.id)}
              plus={() => plus(elem.id)}
              onClick={() => deleteProduct(elem.id)}
              buttonTitle={'удалить'}
              key={elem.id}
              {...elem}
            />
          })
        }
      </div>
    </>
  );
};

export default Cart;