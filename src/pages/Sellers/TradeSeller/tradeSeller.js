import React, { useState } from 'react';

const TradeSeller = () => {
  const [step, setStep] = useState(1);

  const handleNext = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const handlePrev = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div>
      <div>
        {/* Display the step number */}
        <div>Step {step}</div>
      </div>

      {/* Render the form for the current step */}
      {step === 1 && (
        <div>
          <h1>Trade Seller - Step 1</h1>
          {/* Add your form fields for Step 1 */}
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 2 && (
        <div>
          <h1>Trade Seller - Step 2</h1>
          {/* Add your form fields for Step 2 */}
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 3 && (
        <div>
          <h1>Trade Seller - Step 3</h1>
          {/* Add your form fields for Step 3 */}
          <button onClick={handlePrev}>Previous</button>
          <button onClick={handleNext}>Next</button>
        </div>
      )}

      {/* You can continue adding more steps as needed */}
    </div>
  );
};

export default TradeSeller;
