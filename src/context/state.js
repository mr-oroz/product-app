import { store } from "./store";
import { reducer } from "./reducer";
import { useReducer } from "react";
import Product from '../products.json';
import { categories } from "../categories";

const defaultState = {
  data: Product,
  list: categories,
  title: '',
  cart: [],
  open: false,
  checkOpen: false,
  loading: false
}

const State = ({children}) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addToCart = (id) => {
    dispatch({type: 'addToCart', payload: id})
  }
  return (
    <store.Provider value={{
      data: state.data,
      list: state.list,
      title: state.title,
      cart: state.cart,
      open: state.open,
      checkOpen: state.checkOpen,
      loading: state.loading,
      addToCart
    }}>
      {children}
    </store.Provider>
  )
}

export default State;