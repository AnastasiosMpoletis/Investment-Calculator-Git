/**
 * @returns UserInput component
 */
export default function UserInput({ investments, onInputChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>{investments.initialInvestment.inputLabel}</label>
                    <input
                        id={investments.initialInvestment.inputId}
                        type="number" required
                        onChange={onInputChange}
                        placeholder={investments.initialInvestment.inputValue}
                        // min="0"
                    />
                </p>
                <p>
                    <label>{investments.annualInvestment.inputLabel}</label>
                    <input
                        id={investments.annualInvestment.inputId}
                        type="number"
                        required
                        onChange={onInputChange}
                        placeholder={investments.annualInvestment.inputValue}
                        // min="0"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>{investments.expectedReturn.inputLabel}</label>
                    <input
                        id={investments.expectedReturn.inputId}
                        type="number" required
                        onChange={onInputChange}
                        placeholder={investments.expectedReturn.inputValue}
                        // min="0"
                    />
                </p>
                <p>
                    <label>{investments.duration.inputLabel}</label>
                    <input
                        id={investments.duration.inputId}
                        type="number" required
                        onChange={onInputChange}
                        placeholder={investments.duration.inputValue}
                        // min="1"
                    />
                </p>
            </div>
        </section>
    );
}