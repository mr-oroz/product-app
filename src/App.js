import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import { categories } from './categories';
import Nav from './components/nav';
import productData from './products.json';
import Product from './components/product';
import Search from './components/search';
import { Routes, Route } from 'react-router-dom';
import Cart from './components/cart';

const App = () => {
  const [list] = useState(categories);
  const [data, setData] = useState(productData);
  const [title, setTitle] = useState('');
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart-product")) || []);
  const [open, setOpen] = useState(false)

  const [checkOpen, setCheckOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('cart-product', JSON.stringify(cart))
  }, [cart])

  const toggleTitle = (id, text) => {
    setTitle(text)
    const newArr = productData.filter(elem => elem.category_id === id)
    setData(newArr)
  }

  const toggleDiscount = () => {
    const newArr = productData.filter(elem => elem.discount !== null)
    setData(newArr)
  }

  const searchData = (text) => {
    const newArr = productData.filter(elem => {
      return elem.title.toLowerCase().indexOf(text.toLowerCase()) > -1
    })
    setData(newArr)
  }


  const deleteProduct = (id) => {
    const newArr = cart.filter(elem => elem.id !== id)
    setCart(newArr)
  }

  const plus = (id) => {
    const newArr = cart.map(elem => elem.id === id ? {
      ...elem,
      count: elem.count + 1,
    } : elem)
    setCart(newArr)
  }

  const min = (id) => {
    const newArr = cart.map(elem => elem.id === id ? {
      ...elem,
      count: elem.count === 1 ? 1 : elem.count - 1,
    } : elem)
    setCart(newArr)
  }

  const byProduct = () => {
    setLoading(true)
    setTimeout(() => {
      setOpen(false)
      setCheckOpen(true)
      setLoading(false)
    }, 3000)
  }

  const closeCheckOpen = () => {
    localStorage.removeItem('cart-product')
    setCart([])
    setCheckOpen(false)
  }

  const totalProduct = cart.reduce((acc, item) => acc + item.count * item.price, 0);

  return (
    <div className='app'>
      <Header
        toggleDiscount={toggleDiscount}
        title={title} />

      <div className="container">
        <Search searchData={searchData} />
        <div className="wrapper">
          <div className="left">
            <div className="fidex">
              <Nav
                toggleTitle={toggleTitle}
                category={list} />
            </div>
          </div>
          <div className="right">
            <Routes>
              <Route
                path='/'
                element={<Product />} />
              <Route
                path='/cart'
                element={<Cart
                  loading={loading}
                  closeCheckOpen={closeCheckOpen}
                  checkOpen={checkOpen}
                  byProduct={byProduct}
                  open={open}
                  setOpen={setOpen}
                  totalProduct={totalProduct}
                  plus={plus}
                  min={min}
                  deleteProduct={deleteProduct}
                  />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;