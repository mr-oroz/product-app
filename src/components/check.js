import React from 'react';

const Check = ({totalProduct, closeCheckOpen}) => {
  return (
    <div className='check'>
      <h1>усешно оформили</h1>
      <span>общая сумма: {totalProduct} сом</span>
      <button onClick={closeCheckOpen}>закрыть чек</button>
    </div>
  );
};

export default Check;