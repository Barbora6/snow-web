import { AddressForm } from "./AddressForm";
import { PersonalForm } from "./PersonalForm";
import { SuccessForm } from "./SuccessForm";
import { useState } from "react";

export const MainForm = () => {
  const [step, setStep] = useState(1);

  const handleStep = () => {
    if (step === 3) return;
    setStep(step + 1);
  };

  return (
    <>
      {step === 1 && <PersonalForm handleStep={handleStep} />}
      {step === 2 && <AddressForm handleStep={handleStep} />}
      {step === 3 && <SuccessForm />}
    </>
  );
};
