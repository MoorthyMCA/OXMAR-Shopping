import React from 'react'
import Products from './Products';
import "./Home.css"
import Footer from './Footer';

  const Home = () => {
  return (

    <div className='hero'>
        <div className="card bg-dark text-white border-0 top-0">

  {/* <img src="/public/images/sp.png" class="card-img" alt="Background" height="650px"/> */}

    <img
    src="/images/sp.png"
    className="card-img d-none d-md-block responsive-bg"
    alt="Background for desktop"
    height="650px"
  />

   <img
    src="/images/sp.png"
    className="card-img d-block d-md-none responsive-bg"
    alt="Background for mobile"
    height="500px"
  />


  {/* <img src="/public/images/bg-2.jpg" class="card-img" alt="Background" height="650px"/> */}

  <div className="card-img-overlay d-flex flex-column justify-content-center px-5 ">
    <div className="moo">
    <h5 className="card-title fw-bolder fs-1 text-purple text-end">Where Style Meets Elegance</h5>
    </div>
    <p className="card-text fs-3 text-pink fw-bold text-end">Check Out All The Collections.</p>
   <div className="jas">
     <p className="card-text fs-4 text-orange fw-bold text-end"><small>Happy Buying...</small></p>
   </div>
  </div>
</div>

<Products />

    </div>
  );
};
export default Home;
