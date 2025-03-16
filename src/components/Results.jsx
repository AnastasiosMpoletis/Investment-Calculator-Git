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
                   
                </tr>
            </thead>
            <tbody>
               
            </tbody>
        </table>
    );
}