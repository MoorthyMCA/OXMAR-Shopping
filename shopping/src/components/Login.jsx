import React from 'react';
import './Login.css';

const Login = () => {
  return (
    // <div className="d-flex justify-content-center  min-vh-80 py-5  text-white">
    //   <div className="bg-dark p-5 rounded shadow" style={{ width: '100%', maxWidth: '500px' }}>
    //     <h1 className="text-center mb-4 fw-bold">Login</h1>
    //     <form>
    //       <div className="mb-3">
    //         <label htmlFor="exampleInputEmail1" className="form-label">Email address:</label>
    //         <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
    //         <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
    //       </div>

    //       <div className="mb-3">
    //         <label htmlFor="exampleInputPassword1" className="form-label">Password:</label>
    //         <input type="password" className="form-control" id="exampleInputPassword1" required />
    //       </div>

    //       <div className="mb-3 form-check">
    //         <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    //         <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
    //       </div>

    //       <button type="submit" className="btn btn-primary w-100">Submit</button>
    //     </form>
    //   </div>
    // </div>

    <div className="container d-flex justify-content-center align-items-center min-vh-100 py-5">
  <div className="w-100" style={{ maxWidth: '400px' }}>
    <div className="bg-dark p-4 rounded shadow text-white">
      <h2 className="text-center mb-4 fw-bold">Login</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address:</label>
          <input type="email" className="form-control" id="email" required />
          <div className="form-text text-light">We'll never share your email.</div>
        </div>

        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input type="password" className="form-control" id="password" required />
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="check" />
          <label className="form-check-label" htmlFor="check">Remember me</label>
        </div>

        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  </div>
</div>

  );
};

export default Login;
