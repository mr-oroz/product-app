export const reducer = (state, action) => {
  switch (action.type) {
    case 'addToCart': {
      const {data, cart} = state
      const check = cart.every(elem => elem.id !== action.payload)
      if (!check) {
        alert('продук добавлен!')
      } else {
        const product = data.find(elem => elem.id === action.payload)
        const newItem = { ...product, count: 1 }
        const newArr = [...cart, newItem]
        return {
          ...state,
          cart: newArr
        }
      }
    }
    default: 
      return state
  }
}