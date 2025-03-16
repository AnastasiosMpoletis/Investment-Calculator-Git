import { INVESTMENT_TABLE_COLUMNS } from "../Constants.jsx";
import { calculateInvestmentResults, formatter } from "../util/investment.js";

/**
 * @param {*} investment 
 * @returns an object with values of investment, suitable for calculation.
 */
function deriveInvestmentValues(investment) {
    return {
        initialInvestment: investment.initialInvestment.inputValue,
        annualInvestment: investment.annualInvestment.inputValue,
        expectedReturn: investment.expectedReturn.inputValue,
        duration: investment.duration.inputValue
    }
}

/**
 * @returns Results component
 */
export default function Results({ investment }) {
    // Calculate table data
    const tableDataValues = calculateInvestmentResults(deriveInvestmentValues(investment));
    const initialInvestment = tableDataValues[0].valueEndOfYear - tableDataValues[0].interest - tableDataValues[0].annualInvestment;

    return (
        <table id="result">
            <thead>
                <tr>
                    {/* Add columns */}
                    {INVESTMENT_TABLE_COLUMNS.map((column, index) => {
                        return <th key={index}>{column}</th>;
                    })}
                </tr>
            </thead>
            <tbody>
                {/* Add table data */}
                {tableDataValues.map((annualDataObj) => {
                    const totalInterest = annualDataObj.valueEndOfYear - annualDataObj.annualInvestment * annualDataObj.year - initialInvestment;
                    const totalAmountInvested = annualDataObj.valueEndOfYear - totalInterest;

                    return (
                        <tr key={annualDataObj.year}>
                            <td>{annualDataObj.year}</td>
                            <td>{formatter.format(annualDataObj.valueEndOfYear)}</td>
                            <td>{formatter.format(annualDataObj.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmountInvested)}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
    );
}