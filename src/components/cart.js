import React from 'react';
import ProductItem from './product-item';

const Cart = ({cart, deleteProduct, plus}) => {
  return (
    <div className='product'>
      {
        cart.map(elem => {
          return <ProductItem 
            plus={() => plus(elem.id)}
            onClick={() => deleteProduct(elem.id)}
            buttonTitle={'удалить'}
            key={elem.id}
            {...elem}
            />
        })
      }
    </div>
  );
};

export default Cart;