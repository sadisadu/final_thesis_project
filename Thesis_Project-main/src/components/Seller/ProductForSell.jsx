import React from "react";

function ProductForSell() {
  return (
    <div className="max-w-4xl mx-auto my-20 shadow-lg border border-amber-400 border-spacing-2 rounded-xl h-auto bg-slate-200">
      <div className="text-center pt-10 my-10 shadow-lg">
        <h1 className="text-3xl pb-4 uppercase">Products for sale </h1>
      </div>
      <div className="flex flex-col gap-4 sm:gap-0 sm:flex-row sm:justify-evenly text-lg">
        <div className=" ">
          <div>
            <label htmlFor=" ">Seller Code : </label>
            <input placeholder="Enter Seller Code"
              type="text"
              name=" "
              className="w-full p-2 border border-slate-500 bg-slate-100 rounded-lg  "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-20">
        <button className="mb-16 px-4 py-2 bg-amber-400 rounded-lg font-semibold hover:bg-amber-500 duration-300">
          Submit
        </button>
      </div>
    </div>
  );
}

export default ProductForSell;
