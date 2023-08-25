import React from 'react';
import FormTabs from '../FormTabs/FormTabs';

const StepOne = ({ nextStep }) => {
  const handleNext = () => {
    nextStep();
  };

  return (
    <div>
      <FormTabs />
      <input type="text" placeholder="Name" />
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default StepOne;
