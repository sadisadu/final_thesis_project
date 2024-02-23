import {useState} from "react";
import AddProduct from "./AddProduct";
import AddSeller from "./AddSeller";
import SellToSeller from "./SellProductToSeller";
function Manufacturer() {
  const [showAddProduct, setShowAddProduct] = useState(true);
  const [showAddSeller, setAddSeller] = useState(false);
  const [sellToSeller, setSellToSeller] = useState(false);
  const handleAddProduct = (e) => {
    setShowAddProduct(!showAddProduct);
    if (showAddSeller) {
      setAddSeller(!setAddSeller);
    } else if (sellToSeller) {
      setSellToSeller(!sellToSeller);
    }
  };
  const handleAddSeller = (e) => {
    setAddSeller(!showAddSeller);
    if (showAddProduct) {
      setShowAddProduct(!showAddProduct);
    } else if (sellToSeller) {
      setSellToSeller(!sellToSeller);
    }
  };
  const handleSellToSeller = (e) => {
    setSellToSeller(!sellToSeller);
    if (showAddProduct) {
      setShowAddProduct(!showAddProduct);
    } else if (showAddSeller) {
      setAddSeller(!setAddSeller);
    }
  };

  return (
    <>
      <div className="w-auto mx-3  lg:mx-52  bg-gray-300 rounded-2xl  ">
        <div className=" flex justify-center  mt-16">
          <ul className="flex gap-36 lg:gap-28 p-10 ">
            <button
              onClick={handleAddProduct}
              name="addproduct"
              className=" px-4 py-2 bg-amber-400 font-semibold  rounded-lg hover:bg-amber-500 duration-300 ">
              Add Product
            </button>
            <button
              onClick={handleAddSeller}
              className="px-4 py-2 bg-amber-400 font-semibold  rounded-lg hover:bg-amber-500 duration-300">
              Add Seller
            </button>
            {/* <button
              onClick={handleSellToSeller}
              className="px-4 py-2 bg-amber-400 font-semibold  rounded-lg hover:bg-amber-500 duration-300">
              Sell Product To Seller
            </button> */}
          </ul>
        </div>
      </div>
      {showAddProduct && <AddProduct />}
      {showAddSeller && <AddSeller />}
      {/* {sellToSeller && <SellToSeller />} */}
     
    </>
  );
}

export default Manufacturer;
