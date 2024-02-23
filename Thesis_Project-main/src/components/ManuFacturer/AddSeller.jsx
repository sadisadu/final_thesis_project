import {useState} from "react";
import { ethers } from "ethers";
import * as Supply from "../../contracts/SupplyChain.json"

function AddSeller() {
  const [formValue, setFormValue] = useState({
    SellerName: "",
    SellerBrand: "",
    SellerCode: "",
    SellerPhone: "",
    ManufacId: "",
    SellerAddress: "",
  });

  const [combineText, setCombineText] = useState("");

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    const customHttpProvider = new ethers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/OHivOxRM6tnoUCZWR38KsAYaaO7xdH6v");
    console.log("customHttpProvider",customHttpProvider);
    const signer = new ethers.Wallet("0x370aebad9a9728e7bf766e6b77d9e105097bbab06280b1f72cd79c3f2474706d", customHttpProvider);
    console.log("signer",signer);
    console.log("supply.abi",Supply.abi);
    const contractFactory = new ethers.Contract(
      "0x32e969b528550e3dd5a2c870a5e6dabeb096a076",
      Supply.abi,
      signer
    );
    
    console.log("contractFactory",contractFactory);

    const transaction = await contractFactory.addSeller(
      formValue.SellerName,
      formValue.SellerBrand,
      BigInt(formValue.SellerCode),
      BigInt(formValue.SellerPhone),
      BigInt(formValue.ManufacId),
      formValue.SellerAddress

    );
    console.log("transaction",transaction);
    

    const t = await transaction.wait();
    console.log("t.....",t);
    setCombineText(
      ` Seller Name: ${formValue.SellerName},\n Seller Brand: ${formValue.SellerBrand}, \n Seller Code: ${formValue.SellerCode},\n Seller Phone Number: ${formValue.SellerPhone},\n Manufacturer ID: ${formValue.ManufacId}\n Seller Address: ${formValue.SellerAddress}`
    );
  };
  console.log(combineText);

  return (
    <>
      <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
        <div className="text-center pt-10 my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Add Seller</h1>
        </div>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-wrap gap-10  justify-between  mx-20 items-end ">
              <div className="">
                <label htmlFor="Seller Name : ">Seller Name : </label>
                <input
                  type="text"
                  name="SellerName"
                  value={formValue.SellerName}
                  onChange={handleChange}
                  className="p-2 border text-black border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Seller Brand : ">Seller Brand : </label>
                <input
                  type="text"
                  name="SellerBrand"
                  value={formValue.SellerBrand}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Seller Code:  ">Seller Code : </label>
                <input
                  type="text"
                  name="SellerCode"
                  value={formValue.SellerCode}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="SellerPhone ">Seller Phone Number : </label>
                <input
                  type="text"
                  name="SellerPhone"
                  value={formValue.SellerPhone}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="ManufacId">Manufacturer ID : </label>
                <input
                  type="text"
                  name="ManufacId"
                  value={formValue.ManufacId}
                  onChange={handleChange}
                  className="p-2 border border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="SellerAddress">Seller Address : </label>
                <input
                  type="text"
                  name="SellerAddress"
                  value={formValue.SellerAddress}
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
    </>
  );
}

export default AddSeller;