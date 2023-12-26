import React, { useState } from 'react';
import TradeSellerCompanyInfoForm from '../../../components/Forms/TradeSellerCompanyInfoForm'; // Import your actual component here
import Ship from '../../../assets/ship.png';
import TradeSellerServiceHoursForm from '../../../components/Forms/TradeSellerServiceHoursForm';
import TradeSellerFacilitiesForm from '../../../components/Forms/TradeSellerFacilitiesForm';

export default function TradeSeller() {
  const [currentStep, setCurrentStep] = useState(1);
  const circleSize = '50px';
  const barHeight = '5px';

  const handleNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const getTitleStyle = (step) => {
    return {
      color: step <= currentStep ? '#0D1A8B' : 'black',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '10px 0',
    };
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h2 style={{ display: 'flex', alignItems: 'center', color: 'blue', marginBottom: '20px' }}>
              <div style={{ backgroundColor: 'blue', width: '5px', height: '30px', marginRight: '10px' }}></div>
              Company Info
            </h2>
            <TradeSellerCompanyInfoForm />
          </div>
        );
      case 2:
        return (
         <TradeSellerServiceHoursForm/>
        );
      case 3:
        return (
          <TradeSellerFacilitiesForm/>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Left side (Form) */}
      <div style={{ width: '50%', padding: '20px', borderRight: '1px solid lightgrey', overflowY: 'auto' }}>
        {/* Title */}
        <h1>Sign up as a trade seller</h1>

        {/* Progress Indicator */}
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
          {[1, 2, 3].map((step, index) => (
            <React.Fragment key={step}>
              {index > 0 && (
                <div
                  style={{
                    width: '50px',
                    height: barHeight,
                    backgroundColor: step <= currentStep ? '#0D1A8B' : 'transparent',
                    flex: '1',
                  }}
                />
              )}
              <div style={{ margin: '0 10px', textAlign: 'center' }}>
                <div
                  style={{
                    width: circleSize,
                    height: circleSize,
                    borderRadius: '50%',
                    backgroundColor: step <= currentStep ? '#0D1A8B' : 'transparent',
                    color: step <= currentStep ? 'white' : '#0D1A8B',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    border: '2px solid #0D1A8B',
                    fontSize: '18px',
                    cursor: 'pointer',
                    marginBottom: '5px',
                  }}
                >
                  {step}
                </div>
                <div style={getTitleStyle(step)}>
                  {step === 1 && 'Service Hours'}
                  {step === 2 && 'Company Info'}
                  {step === 3 && 'Facilities'}
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Form Content */}
        {renderStepContent()}

        {/* Buttons */}
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          {currentStep > 1 && (
            <button
              onClick={handlePrevStep}
              style={{
                color: '#0D1A8B',
                padding: '15px',
                borderRadius: '5px',
                border: '1px solid #0D1A8B',
                backgroundColor: 'transparent',
              }}
            >
              Back
            </button>
          )}
          <button
            onClick={handleNextStep}
            style={{
              backgroundColor: '#0D1A8B',
              padding: '15px',
              borderRadius: '5px',
              color: 'white',
              border: 'none',
            }}
          >
            {currentStep < 3 ? 'Next' : 'Submit'}
          </button>
        </div>
      </div>

      {/* Right side (Image) */}
      <div style={{ width: '50%', overflow: 'hidden' }}>
        {/* Replace the image URL with your desired image */}
        <img
          src={Ship}
          alt="Ship"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>
    </div>
  );
}
