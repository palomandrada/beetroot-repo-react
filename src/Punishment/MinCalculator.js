// Write a function min(a,b) that returns the smaller of the numbers a and b.

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NumberInput from "./NumberInput";
import Button from "./Button";

export default function MinCalculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);

  const min = (a, b) => Math.min(a, b);

  const handleCalculate = () => {
    if (!num1 || !num2) return;
    setResult(min(Number(num1), Number(num2)));
  };

  return (
    <div className="d-flex justify-content-center align-items-center">
      <div className="card p-4">
        <h2 className="text-center">Find the Minimum</h2>
        
        {/* Input Component */}
        <NumberInput value={num1} onChange={setNum1} placeholder="Enter first number" />
        <NumberInput value={num2} onChange={setNum2} placeholder="Enter second number" />
        
        {/* Button Component */}
        <Button onClick={handleCalculate} />
        
        {/* Result */}
        {result !== null && (
          <div className="alert alert-info mt-3 text-center">
            <strong>Minimum Value: {result}</strong>
          </div>
        )}
      </div>
    </div>
  );
}

