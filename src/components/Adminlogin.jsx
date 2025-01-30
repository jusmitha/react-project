import React from 'react';

function Adminlogin() {
  return (
    <div className="flex justify-center mt-50">
      <div className=" p-4 rounded w-110">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        <p className="text-xl text-center mb-6">Login to your account.</p>
        
        <form>
          <div className="mb-4">
            <label>E-mail Address</label>
            <input type="email" className="w-full py-2 border rounded"  />
          </div>

          <div className="mb-4">
            <label>Password</label>
            <input type="password" className="w-full py-2 border rounded"/>
          </div>

          <div className="flex justify-between mb-4">
            <div>
              <input type="checkbox"  className="mr-2" />
              <label>Remember me</label>
            </div>
            <a href="#">Reset Password?</a>
          </div>

          <button className="w-full bg-yellow-500 py-2 px-4 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
export default Adminlogin;
