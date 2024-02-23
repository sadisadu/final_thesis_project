import React from "react";
import DataMatrixCode from "./DataMatrixCode";

function GenerateCode({combineText}) {
  return (
    <>
      <div className="container mx-auto  h-[400px] mb-20 ">
        <div className="flex flex-col items-center justify-center gap-10 ">
          <div className=" flex justify-center items-center z-[100]">
            <div>
              <DataMatrixCode combineText={combineText} />
            </div>
          </div>
          {/* <button className="bg-amber-400 px-4 py-2 rounded-lg font-semibold ">
            Download Data Matrix Code
          </button> */}
        </div>
      </div>
    </>
  );
}

export default GenerateCode;
