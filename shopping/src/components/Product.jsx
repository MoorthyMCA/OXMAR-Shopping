import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Skeleton from 'react-loading-skeleton';
import { useDispatch } from 'react-redux';
import { addCart } from '../redux/action';
import { useNavigate } from 'react-router-dom';





const hijabItems = [
  { id: 1001, title: "Elegant Black Hijab", price: 25.99, image: "/images/hijab1.png", description: "Elegant black hijab for all occasions.",rating: { rate: 4.5, count: 120 } },
  { id: 1002, title: "Floral Blue Hijab", price: 18.5, image: "/images/hijab2.png", description: "Floral patterned blue hijab.",rating: { rate: 4.0, count: 20 } },
  { id: 1003, title: "Modern Pink Hijab", price: 22.0, image: "/images/hijab3.png", description: "Trendy modern pink hijab.",rating: { rate: 4.9, count: 10 } },
  { id: 1004, title: "Classic Grey Hijab", price: 20.0, image: "/images/hijab4.png", description: "Classy grey hijab for daily use.",rating: { rate: 3.9, count: 15 } },
  { id: 1005, title: "Silk Black Hijab", price: 30.0, image: "/images/hijab5.png", description: "Silky smooth hijab in black.",rating: { rate: 4.6, count: 160 } },
  { id: 1006, title: "Soft Cotton Hijab", price: 17.5, image: "/images/hijab6.png", description: "Comfortable cotton hijab.",rating: { rate: 3.5, count: 110 } },
  { id: 1007, title: "Stylish Maroon Hijab", price: 24.0, image: "/images/hijab7.png", description: "Bold maroon hijab for fashion lovers.",rating: { rate: 3.8, count: 17 } },
  { id: 1008, title: "Light Beige Hijab", price: 19.99, image: "/images/hijab8.png", description: "Elegant light beige hijab.",rating: { rate: 4.5, count: 90 } },
];

export const Product = () => {

  const navigate = useNavigate();


  

  const dispatch = useDispatch();
  const addProduct = (Product) => {
  console.log("Dispatching ADD_CART for:", Product); // ✅ ADD THIS
  dispatch(addCart(Product)); 
};


  // const addProduct = (product) => {
  //   dispatch(addCart(product)); 
  // }


  const { id } = useParams();
  const [Product, setProduct] = useState({});
  const [Loading, setLoading] = useState(false);

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const numericId = parseInt(id);

      // Check if the product is a hijab item
      if (numericId >= 1000) {
        const hijabProduct = hijabItems.find(item => item.id === numericId);
        setProduct(hijabProduct || {});
        setLoading(false);
      } else {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        setLoading(false);
      }
    };

    getProduct();
  }, [id]);

  const LoadingUI = () => (
    <>
      <div className="col-md-6"><Skeleton height={400} /></div>
      <div className="col-md-6" style={{ lineHeight: 2 }}>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
        <Skeleton height={50} width={100} style={{ marginLeft: 6 }} />
      </div>
    </>
  );

  const ShowProduct = () => (
    <>

    
      <div className="col-md-6">
        <img src={Product.image} alt={Product.title} height="400px" width="400px" />
      </div>

      <div className="col-md-6">
        {Product.category && <h4 className="text-uppercase text-black-50">{Product.category}</h4>}
        <h1 className="display-5">{Product.title}</h1>
        {Product.rating && (
          <p className="lead fw-bolder">
            Rating {Product.rating.rate} <i className="bi bi-star-fill text-warning"></i>
          </p>

          
          
        )}
        <h1 className="display-6 fw-bolder">${Product.price}</h1>
        <p className="lead">{Product.description}</p>

      
        
        {/* {parseInt(id) >= 1000 && ( */}
          <div className="col-md-6 mt-3">
            <button className="btn btn-outline-dark px-4 ms-3" onClick={()=>addProduct(Product)}>Add to Cart</button>

            <button
  className="btn btn-dark px-4 ms-3"
  onClick={() => {
    // addProduct(Product);      // First add to cart
    setTimeout(() => {
      navigate('/cart');      // Then navigate after small delay
    }, 100);                  // Add slight delay so Redux can update
  }}
>
  Go to Cart
</button>

            {/* <button className="btn btn-dark px-4 ms-3" onClick={()=>navigate('/Cart')}>Go to Cart </button> */}
          </div>
        {/* )} */}
      </div>
    </>
  );

  return (
    <div className="container my-5 py-5">
      <div className="row">
        {Loading ? <LoadingUI /> : <ShowProduct />}
      </div>
    </div>
  );
};

export default Product;
