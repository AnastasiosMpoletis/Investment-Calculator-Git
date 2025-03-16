import { useState } from "react";

import Header from "./components/Header.jsx";
import UserInput from "./components/UserInput.jsx";
import Results from "./components/Results.jsx";

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 15000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  });

  /**
     * Handles input changes.
     * Notice the event parameter in the onChange function in UserInput's inputs.
     * 
     * @param {*} inputIdentifier 
     * @param {*} newValue 
     */
  function handleChange(inputIdentifier, newValue) {
    setUserInput((previousUserInput) => {
      return {
        ...previousUserInput,
        /**
         * !!!!!Input fields values are always extracted as strings!!!!!
         * By adding the '+' character below, we convert the input to a number so that the calculation is properly done.
         */
        [inputIdentifier]: +newValue
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      <Results input={userInput} />
    </>
  )
}

export default App