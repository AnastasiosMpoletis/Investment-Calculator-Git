import { RESULT_COLUMNS } from "../Constants.jsx";

/**
 * @returns Results component
 */
export default function Results({ investments }) {
    console.log("Results: " + JSON.stringify(investments));
    //TODO ANBOL add logic from investment.js and display results
    //TODO ANBOL add currency formatter
    return (
        <table id="result">
            <thead>
                <tr>
                    {RESULT_COLUMNS.map((column, index) => {
                        return <th key={index}>{column}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{investments.duration.inputValue}</td>
                    <td>{investments.annualInvestment.inputValue}</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$1,000</td>
                </tr>

            </tbody>
        </table>
    );
}