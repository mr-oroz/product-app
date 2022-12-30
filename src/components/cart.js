import React from 'react';
import Check from './check';
import Modal from './modal';
import ProductItem from './product-item';

const Cart = (props) => {
  const { cart,
    deleteProduct,
    plus,
    min,
    totalProduct,
    open,
    setOpen,
    byProduct,
    checkOpen,
    closeCheckOpen,
    loading } = props;
  return (
    <>
      <h1>общая сумма: {totalProduct} сом</h1>

      {
        totalProduct !== 0 ?
          <button
            onClick={() => setOpen(true)}
            style={{ marginBottom: '20px' }}>оформить заказ</button>
          : null
      }

      {
        open ?
          <Modal
            loading={loading}
            byProduct={byProduct}
            setOpen={setOpen}
            cart={cart}
            totalProduct={totalProduct} /> : null
      }
      {checkOpen ?
        <Check
          closeCheckOpen={closeCheckOpen}
          totalProduct={totalProduct} />
        :
        null}

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