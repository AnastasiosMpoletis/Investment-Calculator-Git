import { RESULT_COLUMNS } from "../util/investment.js";

/**
 * @returns Results component
 */
export default function Results() {
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
                    {/* <td>1</td>
                    <td>$1,000</td>
                    <td>$100</td>
                    <td>$100</td>
                    <td>$1,000</td> */}
                </tr>

            </tbody>
        </table>
    );
}