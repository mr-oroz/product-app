import React from 'react';

const Modal = ({ cartTotal, cart, closeModal, setOpen }) => {
  console.log('modal >>', cart)
  return (
    <div className='modal'>
      <h3>ваш товар</h3>
      {
        cart.map((elem, index) => {
          return <div
            style={{
              borderBottom: '2px solid black',
              marginBottom: "15px"
            }}
            key={elem.id}
            className='modal-product'>
            <div>
              <span>{index + 1}:</span>
              <span>названия товара: {elem.title}</span>
              <br />
              <span>{elem.count} шт</span>
            </div>
          </div>
        })
      }
      <h3>общая сумма: {cartTotal} сом</h3>
      <button onClick={closeModal}>купить</button>
      <button onClick={()=> setOpen(false)}>отмена</button>
    </div>
  );
};

export default Modal;