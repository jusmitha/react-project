import React from 'react';

function Login() {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <div>
          <h2 className="text-2xl font-bold mb-4 text-blue-800">Login</h2>
          <p className=" mb-6">Login to your account.</p>
          
          <form>
            <div className="mb-4 ">
              <label className='text-blue-800'>E-mail Address</label>
              <input type="email" className="w-full py-2 border rounded" />
            </div>

            <div className="mb-4">
              <label className='text-blue-800'>Password</label>
              <input type="password" className="w-full py-2 border rounded" />
            </div>

            <div className="flex justify-between  mb-4">
              <div>
                <input type="checkbox"  className="mr-2" />
                <label>Remember me</label>
              </div>
              <a href="#" className="text-blue-800 ">Reset Password?</a>
            </div>

            <button className="w-full bg-blue-800  text-white  py-2 px-4 rounded" >
              Sign In
            </button>
          </form>

          <p className="text-center mt-4">
            Don’t have an account yet? 
            <a href="/register" className="text-blue-800 ">Join KRIS today.</a>
          </p>
        </div>
      </div>

       <div className="w-1/2 flex items-center justify-center bg-blue-900 text-white p-10">
        <div>
          <h2 className="text-2xl font-bold ">Manage all <span className="text-yellow-400">HR Operations</span>
          From <br></br> the comfort of your home.</h2>
        </div>
      </div>
    </div>
  );
}
export default Login;
