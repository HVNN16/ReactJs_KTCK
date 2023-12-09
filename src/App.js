import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection/HeroSection';
import ManuSection from './Components/Manu/ManuSection';
import Footer from './Components/Footer';
import ContactSection from './Components/Contact/ContactSection';
import Cart from './Components/Cart/Cart';
import Services from './Components/Services/Services';
import { StatesProvider } from './Components/Context Api/ContextFt';
import Login from './Components/Login/Login';
import Register from './Components/Login/Resigter';

function App() {
  // State để theo dõi giỏ hàng
  const [cart, setCart] = useState([]);

  // Effect hook để lấy giỏ hàng từ local storage khi component được mount
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Hàm thêm sản phẩm vào giỏ hàng
  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
    alert('Add To Cart Complete !');
  };

  // Hàm xóa sản phẩm khỏi giỏ hàng
  const removeFromCart = (productToRemove) => {
    const updatedCart = cart.filter((product) => product !== productToRemove);
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  return (
    <Router>
        <StatesProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSection addToCart={addToCart} />} />
          <Route path="/menu" element={<ManuSection addToCart={addToCart} />} />
          <Route path="/table" element={<ContactSection />} />
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
          <Route path='/login' element={<Login/>}></Route>
          <Route path='/register' element={<Register/>}></Route>
        </Routes>
        <Services/>
        <Footer />
      </StatesProvider>
    </Router>
  );
}

export default App;
