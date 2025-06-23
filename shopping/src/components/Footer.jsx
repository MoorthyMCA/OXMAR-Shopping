import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>About <span className='text-warning'>OXMAR</span> </h5>
            <p>
              At OXMAR, fashion is self-expression. We blend trend, elegance, and comfort to bring you handpicked styles that reflect your unique identity.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5><i class="bi bi-box-arrow-up-left"></i> Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none"><i class="bi bi-house text-danger"></i> Home</a></li>
              {/* <li><a href="/about" className="text-white text-decoration-none"> About</a></li> */}
              
              <li><a href="/contact" className="text-white text-decoration-none"><i class="bi bi-file-earmark-person text-success"></i> About</a></li>

              <li><a href="/products" className="text-white text-decoration-none"><i class="bi bi-basket text-warning"></i> Products</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5><i class="bi bi-person-lines-fill text-primary"></i> Contact Us</h5>
            <p><i class="bi bi-envelope-at-fill text-warning"></i> Email: oxmarshopping@outlook.com</p>
            <p><i class="bi bi-telephone-outbound-fill text-secondary"></i>   Phone: +91 9952653016</p>
            <p><i class="bi bi-geo-alt text-success"></i> Location: Dindigul, India</p>
          </div>

        </div>

        <div className="text-center mt-3">
          {/* <p className="mb-0">&copy; {new Date().getFullYear()} OXMAR Shopping. All rights reserved.</p> */}

          <p className="mb-0">
  &copy; {new Date().getFullYear()} <span className='text-warning'>OXMAR Shopping.</span> All rights reserved. <br />
  Designed & Developed by Thatchana Moorthy.
</p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
