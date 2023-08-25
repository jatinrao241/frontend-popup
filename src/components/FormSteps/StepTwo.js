import React from 'react';
import FormTabs from '../FormTabs/FormTabs';

const StepTwo = ({ nextStep, prevStep }) => {
  const handleNext = () => {
    nextStep();
  };

  const handleBack = () => {
    prevStep();
  };

  return (
    <div>
      <FormTabs />
      <input type="email" placeholder="Email" />
      <button onClick={handleBack}>Back</button>
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepTwo;
