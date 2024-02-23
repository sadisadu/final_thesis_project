import {useState} from "react";
import { ethers } from "ethers";
import * as Supply from "../../contracts/SupplyChain.json"
function SellToConsumer() {
  const [formValue, setFormValue] = useState({
    productSerial: "",
    ConsumerCode: "",
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

    const transaction = await contractFactory.sellToConsumer(
      BigInt(formValue.productSerial),
      BigInt(formValue.ConsumerCode),
    );
    console.log("transaction",transaction);
    

    // const t = await transaction.wait();
    // console.log("t.....",t);
    setCombineText(
     `  Product Serial Number: ${formValue.ProductSn},\n Consumer Code: ${formValue.ConsumerCode} `
    );
    console.log(combineText);
  };

  return (
    <>
      <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
        <div className="text-center pt-10 my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Sell To Cosumer</h1>
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
                <label htmlFor="Seller Code : ">Consumer Code : </label>
                <input
                  type="text"
                  name="ConsumerCode"
                  value={formValue.ConsumerCode}
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
                Sell To Consumer
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SellToConsumer;