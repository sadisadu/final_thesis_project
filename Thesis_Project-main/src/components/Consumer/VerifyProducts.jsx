import {useState} from "react";
import { ethers } from "ethers";
import * as Supply from "../../contracts/SupplyChain.json"

function VerifyProducts() {
  const [formValue, setFormValue] = useState({
    productSerial: "",
    consumerCode: "",
  });

  const [combineText, setCombineText] = useState("");
  const [showRessult, setShowResult] = useState(false);
  const [verify, setVerify] = useState(true);
  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormValue((prevFormValue) => ({
      ...prevFormValue,
      [name]: value,
    }));
  };

    const handleSubmit = async(e) => {
      e.preventDefault();
      // const customHttpProvider = new ethers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/OHivOxRM6tnoUCZWR38KsAYaaO7xdH6v");
      // console.log("customHttpProvider",customHttpProvider);
      // const signer = new ethers.Wallet("0x370aebad9a9728e7bf766e6b77d9e105097bbab06280b1f72cd79c3f2474706d", customHttpProvider);
      // console.log("signer",signer);
      // console.log("supply.abi",Supply.abi);
      // const contractFactory = new ethers.Contract(
      //   "0x32e969b528550e3dd5a2c870a5e6dabeb096a076",
      //   Supply.abi,
      //   signer
      // );
      
      // console.log("contractFactory",contractFactory);
  
      // const transaction = await contractFactory.verifyProduct(
      //   BigInt(formValue.productSerial),
      //   BigInt(formValue.consumerCode),
      // );
      // console.log("transaction",transaction);
      
      
      // const t = await transaction.wait();
      // console.log("t.....",t);
    setCombineText(
      ` Product Serial Number: ${formValue.ProductSn},\n Consumer Code: ${formValue.ConsumerCode} `
    );
    setShowResult(() => !showRessult);
  };
  
  console.log(combineText);
  return (
    <>
      <div className="max-w-4xl mx-auto  h-auto my-20 bg-slate-200 ">
        <div className="text-center pt-10 my-10 shadow-lg">
          <h1 className="text-3xl pb-4 uppercase">Verify Products</h1>
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
                Get Product Status
              </button>
            </div>
          </form>
        </div>
      </div>
      {/*  */}
      {showRessult && (
        <div className="max-w-4xl mx-auto my-20 shadow-lg border border-amber-400 border-spacing-2 rounded-xl h-auto bg-slate-200">
          <div className="text-center  my-5 shadow-lg">
            <h1 className="text-3xl pb-4 uppercase">Real or Fake</h1>
          </div>

          {/* status show */}
          <div className="text-center m-10 text-2xl ">
            <h1>
              Product is:
              {verify ? (
                <span className="uppercase me-2 bg-green-600 px-4 py-1 rounded-lg ">
                  real
                </span>
              ) : (
                <span className="uppercase bg-red-600 px-4 py-1 rounded-lg ">
                  Fake
                </span>
              )}
            </h1>
          </div>
        </div>
      )}
    </>
  );
}

export default VerifyProducts;