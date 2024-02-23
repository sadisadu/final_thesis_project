import { ethers } from "ethers";
import {useState} from "react"
import * as Supply from "../../contracts/SupplyChain.json"

function SellProductToSeller() {
  const [formValue, setFormValue] = useState({
    ProductSn: "",
    SellerCode: "",
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
    const signer = new ethers.Wallet("21a9af820aba9f6b3648af3ca6f6454435f13475909b16b61150e9126c3960cb", customHttpProvider);
    console.log("signer",signer);
    console.log("supply.abi",Supply.abi);
    const contractFactory = new ethers.Contract(
      "0xb8339a595babe7795f04b3e75da35969f8b40ef1",
      Supply.abi,
      signer
    );
    
    console.log("contractFactory",contractFactory);

    const transaction = await contractFactory.sellProductToSeller(
      " productSN", "sellerAddress"
    );
    console.log("transaction",transaction);
    

    const t = await transaction.wait();
    console.log("t.....",t);
    setCombineText(
       `Product Serial Number: ${formValue.ProductSn},\n Seller Code: ${formValue.SellerCode} `
    );
  };
  console.log(combineText);

  return (
    <>
      <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
        <div className="text-center pt-10 my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Sell To Seller</h1>
        </div>
        <div className="flex">
          <form onSubmit={handleSubmit}>
            <div className=" flex flex-wrap gap-10  justify-between  mx-20 items-end ">
              <div className="">
                <label htmlFor="Product SN ">Product SN : </label>
                <input
                  type="text"
                  name="ProductSn"
                  value={formValue.ProductSn}
                  onChange={handleChange}
                  className="p-2 border text-black border-slate-500 bg-slate-100 rounded-lg"
                />
              </div>
              <div>
                <label htmlFor="Seller Code : ">Seller Code : </label>
                <input
                  type="text"
                  name="SellerCode"
                  value={formValue.SellerCode}
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
                Sell To Seller
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellProductToSeller;