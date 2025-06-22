import React from 'react'
import { useState,useEffect } from 'react'; 
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import Footer from './Footer';

export const Products = () => {

   const [Data, setData] = useState([]);
   const [Filter, setFilter] = useState(Data);
   const [Loading, setLoading] = useState(false);
    const [ShowHijab, setShowHijab] = useState(false);

 const hijabItems = [
    {
      id: 1001,
      title: "Elegant Black Hijab",
      price: 25.99,
      image: "/images/hijab1.png",
    },
    {
      id: 1002,
      title: "Floral Blue Hijab",
      price: 18.5,
      image: "/images/hijab2.png",
    },
    {
      id: 1003,
      title: "Modern Pink Hijab",
      price: 22.0,
      image: "/images/hijab3.png",
    },

     {
      id: 1004,
      title: "Modern Pink Hijab",
      price: 22.0,
      image: "/images/hijab4.png",
    },

     {
      id: 1005,
      title: "Modern Pink Hijab",
      price: 22.0,
      image: "/images/hijab5.png",
    },

     {
      id: 1006,
      title: "Modern Pink Hijab",
      price: 22.0,
      image: "/images/hijab6.png",
    },

     {
      id: 1007,
      title: "Modern Pink Hijab",
      price: 22.0,
      image: "/images/hijab7.png",
    },

     {
      id: 1008,
      title: "Modern Pink Hijab",
      price: 22.0,
      image: "/images/hijab8.png",
    }
  ];

  useEffect(() => {
    let isMounted = true;
    const getProducts = async () => {
      setLoading(true);
      const response = await fetch("https://fakestoreapi.com/products");
      const result = await response.json();

      
      if (isMounted) {
        setData(result);
        setFilter(result);
        setLoading(false);
      }
      return () => {
        isMounted = false;
      };
    };
    getProducts();
  }, []);

  const loadingUi = () => (
    <>
      <div className="col-md-3"><Skeleton height={350} /></div>
      <div className="col-md-3"><Skeleton height={350} /></div>
      <div className="col-md-3"><Skeleton height={350} /></div>
      <div className="col-md-3"><Skeleton height={350} /></div>
    </>
  );

  const filterProduct = (cat) => {
    setShowHijab(false); // Turn off hijab view
    const updatedList = Data.filter((x) => x.category === cat);
    setFilter(updatedList);
  };

  const ShowProducts = () => {
    const list = ShowHijab ? hijabItems : Filter;
    return (
      <>
        {list.map((product, index) => (
          <div className="col-md-3 mb-4 my-1" key={product.id || index}>
            <div className="card h-100 text-center p-4">
              <img src={product.image} className="card-img-top" alt={product.title} height="250px" />
              <div className="card-body">
                <h5 className="card-title fs-6 fw-bold">{product.title}</h5>
                <p className="card-text fw-bold">${product.price}</p>

                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark">Buy Now</NavLink>
                
              </div>
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className="container my-5 py-5">
      <div className="row">
        <div className="col-12 mb-5">
          <h2 className="text-center">Latest Products</h2>
          <hr />
        </div>
      </div>

      {/* <div className="buttons d-flex justify-content-center mb- pb-5">
        <button className="btn btn-outline-dark me-2" onClick={() => { setShowHijab(false); setFilter(Data); }}>All</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("men's clothing")}>Mens Collections</button>
        <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("women's clothing")}>Womens Collections</button>
        <button className="btn btn-outline-dark me-2" onClick={() => setShowHijab(true)}>Womens Hijab Outfits</button>
         <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("electronics")}>Electronics</button>
         <button className="btn btn-outline-dark me-2" onClick={() => filterProduct("jewelery")}>Jewelery</button>
        
      </div> */}

      <div className="row g-2 justify-content-center mb-4">
  <div className="col-6 col-md-auto">
    <button className="btn btn-outline-dark w-100" onClick={() => { setShowHijab(false); setFilter(Data); }}>All</button>
  </div>
  <div className="col-6 col-md-auto">
    <button className="btn btn-outline-dark w-100" onClick={() => filterProduct("men's clothing")}>Mens Collections</button>
  </div>
  <div className="col-6 col-md-auto">
    <button className="btn btn-outline-dark w-100" onClick={() => filterProduct("women's clothing")}>Womens Collections</button>
  </div>
  <div className="col-6 col-md-auto">
    <button className="btn btn-outline-dark w-100" onClick={() => setShowHijab(true)}>Womens Hijab Outfits</button>
  </div>
  <div className="col-6 col-md-auto">
    <button className="btn btn-outline-dark w-100" onClick={() => filterProduct("electronics")}>Electronics</button>
  </div>
  <div className="col-6 col-md-auto">
    <button className="btn btn-outline-dark w-100" onClick={() => filterProduct("jewelery")}>Jewelery</button>
  </div>
</div>


      <div className="row">
        {Loading ? loadingUi() : <ShowProducts />}
      </div>

  
    </div>
  );
};

export default Products;