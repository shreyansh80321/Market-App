import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { CartProvider } from "./CartContent.";
import Contact from "./pages/Contact";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Logout from "./component/Logout";
import Navbar from "./component/Navbar";
import Items from "./pages/Items";
import Cart from "./pages/Cart";
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0,0)
  }, [pathname]);
  return null;
};
const App = () => {
  useEffect(() => {
    // Clear any leftover Clerk keys from localStorage
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("__clerk_") || key.includes("clerk")) {
        localStorage.removeItem(key);
      }
    });
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem('authToken'))
  )
  useEffect(() => {
    const handler = () => {
      setIsAuthenticated(Boolean(localStorage.getItem('authToken')))
    }
    window.addEventListener('authStateChanged',handler)
  },[])
  return (
    <CartProvider>
      <ScrollToTop />
      <Navbar isAuthenticated={isAuthenticated} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/items" element={<Items />} />
        <Route path="/cart" element={isAuthenticated ? <Cart /> : <Navigate replace to='/login' />} />
        <Route path='/login' element={ <Login/>} />
        <Route path='/signup' element={ <Signup/>} />
        <Route path='/logout' element={<Logout />} />
        <Route path='*' element={<Navigate replace to='/'/>}/>
      </Routes>
    </CartProvider>
  );
};

export default App;
