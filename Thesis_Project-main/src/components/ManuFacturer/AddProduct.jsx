import {useState} from "react";
import GenerateCode from "./GenerateCode";
import { ethers } from "ethers";
import * as Supply from "../../contracts/SupplyChain.json"


function AddProduct() {
  const [formValue, setFormValue] = useState({
    ManfacturerId: "",
    ProductSerial: "",
    ProductName: "",
    ProductBrand: "",
    ProductPrice: "",
  });

  const [combineText, setCombineText] = useState(
    `Manufacturer ID: 123,\n Product Serial: 123, \n Product Name: abc,\n Product Brand: xyz,\n Product Price: 111`
 );

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const customHttpProvider = new ethers.JsonRpcProvider(
      "https://polygon-mumbai.g.alchemy.com/v2/OHivOxRM6tnoUCZWR38KsAYaaO7xdH6v"
    );
  
    const signer = new ethers.Wallet(
      "0x370aebad9a9728e7bf766e6b77d9e105097bbab06280b1f72cd79c3f2474706d",
      customHttpProvider
    );
  
    const contractFactory = new ethers.Contract(
      "0x32e969b528550e3dd5a2c870a5e6dabeb096a076",
      Supply.abi,
      signer
    );
  
    const transaction = await contractFactory.addProduct(
      BigInt(formValue.ManfacturerId),
      BigInt(formValue.ProductSerial),
      formValue.ProductName,
      formValue.ProductBrand,
      BigInt(formValue.ProductPrice)
    );
  
    console.log("transaction", transaction);
  
    // const t = await transaction.wait();
    // console.log("t.....", t);
  
    setCombineText(
      ` Manufacturer ID: ${formValue.ManfacturerId},\n Product Serial: ${formValue.ProductSerial}, \n Product Name: ${formValue.ProductName},\n Product Brand: ${formValue.ProductBrand},\n Product Price: ${formValue.ProductPrice}`
    );
  };
  
  
  
  

  return (
    <>
      <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
        <div className="text-center pt-10 my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Add Product</h1>
        </div>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-wrap gap-10  justify-between mx-20 items-end ">
              <div className="">
                <label htmlFor="Manufacturer Id: ">Manfacturer Id : </label>
                <input
                  type="text"
                  name="ManfacturerId"
                  value={formValue.ManfacturerId}
                  onChange={handleChange}
                  className="p-2 border text-black border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Serial: ">Product Serial : </label>
                <input
                  type="text"
                  name="ProductSerial"
                  value={formValue.ProductSerial}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Name:  ">Product Name : </label>
                <input
                  type="text"
                  name="ProductName"
                  value={formValue.ProductName}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Brand: ">Product Brand : </label>
                <input
                  type="text"
                  name="ProductBrand"
                  value={formValue.ProductBrand}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Product Price: ">Product Price : </label>
                <input
                  type="text"
                  name="ProductPrice"
                  value={formValue.ProductPrice}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
            </div>
            {/* button  */}
            <div className="my-20 flex justify-center">
              <button
                type="submit"
                className="px-4 py-2 bg-amber-400 rounded-lg">
                Add The Product
              </button>
            </div>
          </form>
        </div>
      </div>
      <div>
        <GenerateCode combineText={combineText} />
      </div>
    </>
  );
}

export default AddProduct;
