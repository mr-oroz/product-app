import React from 'react';

const ProductItem = (props) => {
  const { title, price, discount, buttonTitle, count, plus } = props;
  return (
    <div className='card'>
      {discount !== null ? <span>скидка {discount}% </span> : null}
      <h5>{title}</h5>
      <span>{price} сом</span>
      {
        count && <div>
          <button>-</button>
          <span>{count}</span>
          <button onClick={plus}>+</button> 
        </div>
      }
      <button onClick={props.onClick}>{buttonTitle}</button>
    </div>
  );
};

export default ProductItem;