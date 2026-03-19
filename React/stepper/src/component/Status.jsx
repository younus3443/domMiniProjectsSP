import { useState } from "react";

function Status() {

  const [step, setStep] = useState(1);

  const totalSteps = 4;

  const widthPercent = ((step - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="flex flex-col items-center mt-10">

      {/* Progress bar */}
      <div className="relative w-[400px] h-2 bg-red-200">

        <div
          className="absolute h-2 bg-blue-500 transition-all"
          style={{ width: `${widthPercent}%` }}
        ></div>

        <div className="absolute w-full flex justify-between -top-4">
          {[1, 2, 3, 4].map((btn) => (
            <button
              key={btn}
              className={`p-3 rounded-full ${
                btn <= step ? "bg-blue-500 text-white" : "bg-gray-300"
              }`}
            >
              {btn}
            </button>
          ))}
        </div>

      </div>

      {/* Buttons */}
      <div className="mt-10 flex gap-5">

        <button
          onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
          className="p-3 bg-gray-300 rounded"
        >
          Previous
        </button>

        <button
          onClick={() => setStep((prev) => Math.min(prev + 1, totalSteps))}
          className="p-3 bg-gray-300 rounded"
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Status;