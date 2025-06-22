import React from 'react'

export const Contact = () => {
  return (

    <div className="container my-5 text-center d-flex justify-content-center align-items-center flex-column">
        <div className="row">
             <div className="card mb-3" style={{ maxWidth: "1000px" }}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="/public/images/logo.jpg" className="img-fluid rounded-start" alt="background" />
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title fw-bolder fs-2">OXMAR Shopping <i className="bi bi-cart4 text-warning"></i></h5>
        <p className="card-text">
          Our mission is to deliver top-notch products that suit every lifestyle — whether you're dressing up, decorating your space, or gifting a loved one. We make online shopping trustworthy, stylish, and stress-free.
        </p>

           <p className="card-text">
         From fashion to lifestyle essentials, OXMAR offers a wide range of premium products tailored to your needs. Every item is hand-picked to ensure quality, comfort, and class. </p>

        <p className="card-text">
          <small className="text-body-secondary">The New Era</small>
        </p>
      </div>
    </div>
  </div>
</div>
        </div>
    </div>

  )
}
export default Contact;
