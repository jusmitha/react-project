import React from 'react';

function Register() {
  return (
    <div className="flex min-h-screen">

      <div className="w-1/2 flex items-center justify-center bg-blue-900 text-white p-10">
        <div>
          <h2 className="text-2xl font-bold mb-4">HR Management Platform</h2>
          <p className="text-md">Manage all employees, payrolls, and other human resource operations.</p>
          <div className="mt-6">
            <button className="bg-yellow-500 text-black font-xl py-2 px-6 rounded-md mr-6">Learn More</button>
            <button className="border border-white text-white font-xl py-2 px-6 rounded-md">Our Features</button>
          </div>
        </div>
      </div>


      <div className="w-1/2 flex items-center justify-center bg-white p-10">
        <div>
          <h2 className="text-2xl text-blue-700 font-bold mb-4">Welcome to KRIS</h2>
          <p className="text-gray-600  mb-8">Register your account</p>

          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-blue-700">First Name</label>
                <input type="text" className="w-full  py-2 border rounded" />
              </div>
              <div>
                <label className="text-blue-700">Last Name</label>
                <input type="text" className="w-full py-2 border rounded" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-blue-700">E-mail Address</label>
                <input type="email" className="w-full py-2 border rounded" />
              </div>
              <div>
                <label className="text-blue-700">Phone Number</label>
                <input type="text" className="w-full py-2 border rounded" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="text-blue-700">Password</label>
                <input type="password" className="w-full py-2 border rounded" />
              </div>
              <div>
                <label className="text-blue-700">Confirm Password</label>
                <input type="password" className="w-full py-2 border rounded" />
              </div>
            </div>

            <div className="mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">Yes, I want to receive KRIS newsletters</label>
            </div>

            <div className="mb-4">
              <input type="checkbox" className="mr-2" />
              <label className="text-gray-700">I agree to all the <a href="#" className="text-blue-700">Terms, Privacy Policy</a></label>
            </div>

            <button type="submit" className=" bg-blue-700 text-white py-2 px-10 rounded mb-6">
              Create Account
            </button>
          </form>

          <p>Already have an account? <a href="/login" className="text-blue-700">Log In</a></p>
        </div>
      </div>
    </div>
  );
}
export default Register;
