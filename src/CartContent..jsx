import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    try {
      const savedCart = localStorage.getItem('/cart');
      return savedCart ? JSON.parse(savedCart):[]
    }
    catch (error) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);
  const addToCart = (item, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(ci => ci.id === item.id)
      if (existingItem)
      {
        return prevCart.map(ci =>
          ci.id === item.id
            ? { ...ci, quantity: ci.quantity + quantity }
            :
            ci
          );
      }
      else {
        return [...prevCart,{...item,quantity}]
      }
    })
  }
  const removeFromCart = itemId => {
    setCart(prevCart => prevCart.filter(ci => ci.id !== itemId))
  }
  const updateQuantity = (itemId, newQuantity)=> {
    if (newQuantity < 1) return;
    setCart(prevCart =>
      prevCart.map(ci =>
        ci.id===itemId?{...ci,quantity:newQuantity}:ci))
  }

  const clearCart = () => {
    setCart([])
  }

  const getCartTotal = () => cart.reduce((total, ci) => total + ci.price * ci.quantity, 0);
  
  const cartCount = cart.reduce((acc, ci) => acc + ci.quantity, 0);
  return (
    <CartContext.Provider value={{
      cart,
      cartCount,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getCartTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
  throw new Error('USECART MUST WITHIN A CART PROVIDER')
  }  
  return context;
}
