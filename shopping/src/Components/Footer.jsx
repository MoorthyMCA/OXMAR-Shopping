import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About OXMAR</h5>
            <p>
              At OXMAR, fashion is self-expression. We blend trend, elegance, and comfort to bring you handpicked styles that reflect your unique identity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/products" className="text-white text-decoration-none">Products</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5>Contact Us</h5>
            <p>Email: oxmarshopping@outlook.com</p>
            <p><i class="bi bi-telephone-outbound-fill"></i>   Phone: +91 9952653016</p>
            <p>Location: Dindigul, India</p>
          </div>

        </div>

        <div className="text-center mt-3">
          {/* <p className="mb-0">&copy; {new Date().getFullYear()} OXMAR Shopping. All rights reserved.</p> */}

          <p className="mb-0">
  &copy; {new Date().getFullYear()} OXMAR Shopping. All rights reserved. <br />
  Designed & Developed by Thatchana Moorthy.
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
