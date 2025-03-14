import { useState } from "react";

import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { INITIAL_INVESTMENTS } from "./Constants.jsx";

/**
 * @deprecated
 * @param {@} param0 
 * @returns 
 */
function deriveInvestmentData({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  let investments = { ...INITIAL_INVESTMENTS };
  investments["initialInvestment"].inputValue = initialInvestment != undefined ? initialInvestment : investments["initialInvestment"].inputValue;
  investments["annualInvestment"].inputValue = annualInvestment != undefined ? annualInvestment : investments["annualInvestment"].inputValue;
  investments["expectedReturn"].inputValue = expectedReturn != undefined ? expectedReturn : investments["expectedReturn"].inputValue;
  investments["duration"].inputValue = duration != undefined ? duration : investments["duration"].inputValue;
  return investments;
}

function displayErrorMessage(label) {
  alert(`${label} cannot be negative.`);
}

function App() {
  const [investment, setInvestment] = useState(INITIAL_INVESTMENTS);
  
  function onInputChange(event) {
    const durationLimit = 1;
    const fieldLimit = 0;
    
    if (event.target.id === "duration" && event.target.value < durationLimit) {
      displayErrorMessage(investment[event.target.id].inputLabel);
      event.target.value = durationLimit;
    } else if (event.target.value < fieldLimit) {
      displayErrorMessage(investment[event.target.id].inputLabel);
      event.target.value = fieldLimit;
    } else {
      // Update the state with new values
      setInvestment((previousInvestment) => {
        const updatedInv = {
          ...previousInvestment,
          [event.target.id]: {
            ...previousInvestment[event.target.id],
            inputValue: event.target.value
          }
        };

        return updatedInv;
      });
    }
  }

  return (
    <>
      <UserInput investments={investment} onInputChange={onInputChange} />
      <Results investments={investment}/>
    </>
  )
}

export default App
