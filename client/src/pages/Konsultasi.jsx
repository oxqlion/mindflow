import React from "react";
import { useState } from "react";
import { StepperContext } from "../contexts/StepperContext";
import Stepper from "../components/Stepper"
import StepperControl from "../components/StepperControl";
import Account from "../components/steps/Account"
import Details from "../components/steps/Details"
import Payment from "../components/steps/Payment"
import Final from "../components/steps/Final"

const Konsultasi = () => {

    const [currentStep, setCurrentStep] = useState(1);
    const [userData, setUserData] = useState('');
    const [finalData, setFinalData] = useState([]);
    const steps = [
        "Personal Details",
        "Choose package",
        "Complete"
    ];

const displayStep = (step) =>{
    switch(step){
        case 1:
            return <Account/>
        case 2:
            return <Details/>
        case 3:
            return <Final/>
        default:
    }
}

const handdleClick =(direction)=>{
    let newStep = currentStep;

    direction == "next" ? newStep++ : newStep--;
    //check if steps are within bounds 
    newStep > 0 && newStep <= steps.length && setCurrentStep(newStep);
}
  return (
    <div className="bg-bg w-full h-screen pt-20">
             <div className="md:w-2/3 mx-auto mt-20 shadow-xl rounded-2xl pb-2 bg-white ">
        
        <div className="container horizontal mt-5">
          <Stepper
          steps={steps}
          currentStep={currentStep}
           />
  
           {/* display Components */}
           <div className=" p-10">
              <StepperContext.Provider value={{ 
                  userData,
                  setUserData,
                  finalData,
                  setFinalData
               }}>
                  {displayStep(currentStep)}
              </StepperContext.Provider>
           </div>
          
          {/* Navigation Control */}
        </div>
        <StepperControl 
        handleClick={handdleClick}
        currentStep={currentStep}
        steps={steps}
        />
      </div>
        </div>
   
  );
};

export default Konsultasi;
