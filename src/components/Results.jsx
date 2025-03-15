import { RESULT_COLUMNS } from "../Constants.jsx";
import { deriveInvestmentValues } from "../Constants.jsx";
import { formatter } from "../util/investment.js";
import { calculateInvestmentResults } from "../util/investment.js";

/**
 * @returns Results component
 */
export default function Results({ investments }) {
    const investmentValues = deriveInvestmentValues(investments)
    const results = calculateInvestmentResults(investmentValues);
    console.log("Results: " + JSON.stringify(results));
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
                {results.map((investment) => (
                    <tr key={investment.year}>
                        <td>{investment.year}</td>
                        <td>{formatter.format(investment.annualInvestment)}</td>
                    </tr>
                ))}
            </tbody>
        </table >
    );
}