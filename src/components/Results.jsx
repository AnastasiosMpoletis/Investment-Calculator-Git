import { calculateInvestmentResults, formatter } from "../util/investment.js"

/**
 * @returns Results component
 */
export default function Results({ input }) {
    const resultsData = calculateInvestmentResults(input);
    console.log(resultsData);

    return (
        <table id="result">
            <thead>
                <tr>

                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
    );
}