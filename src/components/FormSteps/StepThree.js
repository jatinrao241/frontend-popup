import React from 'react';
import FormTabs from '../FormTabs/FormTabs';

const StepThree = ({ prevStep }) => {
  const handleBack = () => {
    prevStep();
  };

  const handleSubmit = () => {
    alert('Form submitted successfully!');
  };

  return (
    <div>
      <FormTabs />
      <textarea placeholder="Comments"></textarea>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default StepThree;
