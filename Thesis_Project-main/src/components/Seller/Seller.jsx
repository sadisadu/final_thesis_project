import React, {useState} from "react";
import SellToConsumer from "./SellToConsumer";
import ProductForSell from "./ProductForSell";

function Manufacturer() {
  const [sellProduct, setSellProduct] = useState(true);
  const [productForSale, setProductForSale] = useState(false);

  const hanleSellProduct = (e) => {
    setSellProduct(!sellProduct);
    if (productForSale) {
      setProductForSale(!productForSale);
    }
  };
  const handleProductSale = (e) => {
    setProductForSale(!productForSale);
    if (sellProduct) {
      setSellProduct(!sellProduct);
    }
  };

  return (
    <>
      <div className="w-auto mx-3  lg:mx-52  bg-gray-300 rounded-2xl  ">
        <div className=" flex justify-center  mt-16">
          <ul className="flex gap-36 lg:gap-28 p-10 ">
            <button
              onClick={hanleSellProduct}
              name="addproduct"
              className=" px-4 py-2 bg-amber-400 font-semibold  rounded-lg hover:bg-amber-500 duration-300 ">
              Sell Product To Consumer
            </button>
            {/* <button
              onClick={handleProductSale}
              className="px-4 py-2 bg-amber-400 font-semibold  rounded-lg hover:bg-amber-500 duration-300">
              Product For Sale
            </button> */}
          </ul>
        </div>
      </div>
      {sellProduct && <SellToConsumer />}
      {/* {productForSale && <ProductForSell />} */}
    </>
  );
}

export default Manufacturer;
