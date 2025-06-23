// import React from 'react'
// import Navbar from './Components/Navbar';
// import Home from './Components/Home';
// import { Routes, Route } from "react-router-dom"; 
// import Products from "./Components/Products";
// import Product from "./Components/Product";

// export const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route  path='/' element={<Home />} />
//         <Route path='/products' element={<Products />} />
//         <Route  path='/product/:id' element={<Product />} />
//       </Routes>
//     </>
//   )
// }
// export default App


import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"; 
import Products from "./components/Products";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from './components/Login';
import Register from './components/Register'; // Ensure Register component is imported
import Contact from './components/Contact'; // Import Contact component if needed
import Footer from './components/Footer';

export const App = () => {
  return (
    <>
      <Navbar />
    
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<Product />} /> {/* ✅ Correct path */}
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> {/* Ensure Register component is imported */}
        {/* Add more routes as needed */}
        <Route path="/contact" element={<Contact />} /> {/* Add Contact route if needed */}



      </Routes>

        <Footer />
    </>
  );
};

export default App;

