import React from "react";
import {useNavigate} from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };

  return (
    <>
      <div className="container mx-auto my-20   ">
        <div className="flex  ">
          <div className="w-[50%] my-5 px-10  mt-20">
            <div className="mb-10">
              <h1 className="text-3xl font-bold">Hello!</h1>
              <p className="text-xl text-gray-400">Please signup to Continue</p>
            </div>

            <div className=" ">
              <form action="" className="flex flex-col my-8">
                <label className="mt-3 text-gray-400" htmlFor="full name">
                  Full Name
                </label>
                <input
                  type="text"
                  className=" border-b-2 border-b-gray-400 mb-4 p-2 outline-none "
                />
                <label className="mt-3 text-gray-400 " htmlFor="email address">
                  Email Address
                </label>
                <input
                  type="text"
                  className=" border-b-2 border-b-gray-400 mb-4 p-2 outline-none "
                />
                <label className="mt-3 text-gray-400 " htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  className=" border-b-2 border-b-gray-400 mb-4 p-2 outline-none "
                />
                <label
                  className="mt-3 text-gray-400 "
                  htmlFor="confirm password">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className=" border-b-2 border-b-gray-400 mb-4 p-2 outline-none "
                />
              </form>
              <button
                className="w-full py-3 rounded-md bg-blue-500 font-semibold text-xl text-white"
                onClick={handleNavigate}>
                Sign Up
              </button>
            </div>
          </div>

          {/* side part  */}
          <div className="w-[50%]   bg-[#272727] ">
            <div className="flex flex-col   h-[85%] px-8 justify-center  ">
              <h1 className="text-3xl text-white font-semibold">
                Already have a an account!
              </h1>
              <div>
                <form action="" className="flex flex-col my-8">
                  <label
                    className="mt-3 text-gray-400 "
                    htmlFor="email address">
                    Email Address
                  </label>
                  <input
                    type="text"
                    className=" text-white  border-b-2 border-b-gray-400 mb-4 p-2 outline-none bg-[#272727]  "
                  />
                  <label className="mt-3 text-gray-400 " htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    className="text-white border-b-2 border-b-gray-400 mb-4 p-2 outline-none bg-[#272727] "
                  />
                </form>
                <button
                  className="w-full py-3 rounded-md bg-blue-500 font-semibold text-xl text-white"
                  onClick={handleNavigate}>
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
