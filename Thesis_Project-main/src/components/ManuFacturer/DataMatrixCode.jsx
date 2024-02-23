import {useEffect, useState} from "react";
import bwipjs from "bwip-js";

function DataMatrixCode({combineText}) {
  const [input, setInput] = useState("Counterfeit Check");
  const [src, setImageSrc] = useState();
  const [showCode, setShowCode] = useState(false);

  // console.log(`I am ${combineText}`);
  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    let canvas = document.createElement("canvas");
    bwipjs.toCanvas(canvas, {
      bcid: "datamatrix", // Barcode type
      text: input, // Text to encode
      scale: 5, // 3x scaling factor
      height: 18, // Bar height, in millimeters
      includetext: true, // Show human-readable text
      textxalign: "center", // Always good to set this
    });
    setImageSrc(canvas.toDataURL("image/png"));
  }, [input]);

  const handleDataChange = () => {
    setInput(combineText);
    setShowCode(!showCode);
  };

  return (
    <div className="flex flex-col items-center">
      {/* <input type="text" value={input} className="" onChange={onChange} /> */}
      <button
        className=" px-4 py-2 bg-amber-400 rounded-lg font-semibold"
        onClick={() => handleDataChange(combineText)}>
        Generate Data Matrix
      </button>
      {showCode ? (
        <img className="mt-10" src={src} alt={`data matrix from ${input}`} />
      ) : (
        ""
      )}
    </div>
  );
}

export default DataMatrixCode;
