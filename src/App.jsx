//TODO ANBOL commit new branch
import { useState } from "react";

import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { INITIAL_INVESTMENTS } from "./Constants.jsx";

function displayErrorMessage(label) {
  alert(`${label} cannot be negative.`);
}

function App() {
  const [investment, setInvestment] = useState(INITIAL_INVESTMENTS);

  /**
   * Input fields changeHandler. 
   * Checks for input limits and updates investment state with new values.
   * @param {*} event 
   */
  function onInputChange(event) {
    const durationLimit = 1;
    const fieldLimit = 0;
    if (event.target.id === investment.duration.inputId && event.target.value < durationLimit) {
      displayErrorMessage(investment[event.target.id].inputLabel);
      event.target.value = durationLimit;
    } else if (event.target.value < fieldLimit) {
      displayErrorMessage(investment[event.target.id].inputLabel);
      event.target.value = fieldLimit;
    } else {
      setInvestment((previousInvestment) => {
        const updatedInvestment = {
          ...previousInvestment,
          [event.target.id]: {
            ...previousInvestment[event.target.id],
            inputValue: event.target.value
          }
        };

        return updatedInvestment;
      });
    }
  }

  return (
    <>
      <UserInput investment={investment} onInputChange={onInputChange} />
      <Results investment={investment} />
    </>
  )
}

export default App
