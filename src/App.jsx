import { useState } from "react";

import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { INITIAL_INVESTMENTS } from "./Constants.jsx";

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
