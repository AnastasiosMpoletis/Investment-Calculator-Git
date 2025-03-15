/**
 * @returns UserInput component
 */
export default function UserInput({ investments, onInputChange }) {

    /**
     * @param {*} param0 
     * @returns Group of fields to match css.
     */
    function Group({ children }) {
        return (
            <div className="input-group">
                {children}
            </div>
        );
    }

    /**
     * @param {*} param0 
     * @returns Field with label and input, to match tcss.
     */
    function Field({ inputId, inputValue, inputLabel }) {
        return (
            <p>
                <label>{inputLabel}</label>
                <input id={inputId} type="number" required onChange={onInputChange} value={inputValue} />
            </p>
        );
    }

    return (
        <section id="user-input">
            <Group>
                <>
                    <Field {...investments["initialInvestment"]} />
                    <Field {...investments["annualInvestment"]} />
                </>
            </Group>
            <Group>
                <>
                    <Field {...investments["expectedReturn"]} />
                    <Field {...investments["duration"]} />
                </>
            </Group>
        </section>
    );
}