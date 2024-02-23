import React from "react";
import {NavLink, useNavigate} from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const handleNavigate = ()=>{
    navigate("/login")
  }
  return (
    <div>
      <nav className="w-full h-16 shadow-lg text-white">
        <ul className="flex justify-center gap-10  md:gap-28 items-center p-4 uppercase font-bold ">
          <li className="">
            <NavLink
              to=""
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-400  
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                     hover:bg-gray-200 duration-500 rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }>
              Home
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="manufacturer"
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-400  
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                     hover:bg-gray-200 duration-500 rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }>
              Manufacturer
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="seller"
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-400  
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                     hover:bg-gray-200 duration-500 rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }>
              Seller
            </NavLink>
          </li>
          <li className="">
            <NavLink
              to="consumer"
              className={({isActive}) =>
                `block py-2 pr-4 pl-3 duration-400  
                    ${isActive ? "text-orange-700" : "text-gray-700"}
                     hover:bg-gray-200 duration-500 rounded-lg lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
              }>
              Consumer
            </NavLink>
          </li>
          <li className="ml-10">
          <button className="bg-blue-500 px-10 py-2 rounded-lg font-semibold" onClick={handleNavigate}>
            Login/SignUp
          </button>
        </li>
        </ul>
        
      </nav>
    </div>
  );
}

export default Navbar;
