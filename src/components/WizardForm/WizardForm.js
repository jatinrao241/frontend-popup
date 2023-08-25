import React, {useState} from "react";
import StepOne from "../FormSteps/StepOne";
import StepThree from "../FormSteps/StepThree";
import StepTwo from "../FormSteps/StepTwo";
import "./WizardForm.css";


const WizardForm = () => {
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    const renderStep = () => {
        switch (step) {
        case 1:
            return <StepOne nextStep={nextStep} />;
        case 2:
            return <StepTwo nextStep={nextStep} prevStep={prevStep} />;
        case 3:
            return <StepThree prevStep={prevStep} />;
        default:
            return null;
        }
    };

    return(
        <>
            <div className="container wizard-form-background-center">
                <div className="row wizard-form-content">
                    <div className="col-12">
                        {renderStep()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default WizardForm;