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
                {tableDataValues.map((annualDataObj) => (
                    <tr key={annualDataObj.year}>
                        <td>{annualDataObj.year}</td>
                        <td>{formatter.format(annualDataObj.tableDataInvestmentValue)}</td>
                        <td>{formatter.format(annualDataObj.tableDataInterestYear)}</td>
                        <td>{formatter.format(annualDataObj.tableDataTotalInterest)}</td>
                        <td>{formatter.format(annualDataObj.tableDataInvestedCapital)}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}