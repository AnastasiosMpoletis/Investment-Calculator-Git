import { useState } from "react";

import UserInput from "./components/UserInput.jsx"
import Results from "./components/Results.jsx"
import { INITIAL_INVESTMENTS } from "./Constants.jsx";

function App() {
  const [investment, setInvestment] = useState(INITIAL_INVESTMENTS);

  // Duration check
  const isInputValid = investment.duration.inputValue >= 1;

  /**
   * Input fields changeHandler that updates investment state with new values.
   * @param {*} event 
   */
  function onInputChange(event) {
    setInvestment((previousInvestment) => {
      const updatedInvestment = {
        ...previousInvestment,
        [event.target.id]: {
          ...previousInvestment[event.target.id],
          /**
           * !!!!!Input fields values are always extracted as strings!!!!!
           * By adding the '+' character below, we convert the input to a number so that the calculation is properly done.
           */
          inputValue: +event.target.value
        }
      };

      return updatedInvestment;
    });
  }

  return (
    <>
      <UserInput investment={investment} onInputChange={onInputChange} />
      {isInputValid ?
        <Results investment={investment} /> :
        <p className="center">Please enter a duration greater than zero.</p>
      }
    </>
  )
}

export default App
