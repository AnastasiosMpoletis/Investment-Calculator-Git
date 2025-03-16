/**
 * @returns UserInput component
 */
export default function UserInput({ investment, onInputChange }) {
    return (
        <section id="user-input">
            <div className="input-group">
                <p>
                    <label>{investment.initialInvestment.inputLabel}</label>
                    <input
                        id={investment.initialInvestment.inputId}
                        type="number" required
                        onChange={onInputChange}
                        placeholder={investment.initialInvestment.inputValue}
                        // min="0"
                    />
                </p>
                <p>
                    <label>{investment.annualInvestment.inputLabel}</label>
                    <input
                        id={investment.annualInvestment.inputId}
                        type="number"
                        required
                        onChange={onInputChange}
                        placeholder={investment.annualInvestment.inputValue}
                        // min="0"
                    />
                </p>
            </div>
            <div className="input-group">
                <p>
                    <label>{investment.expectedReturn.inputLabel}</label>
                    <input
                        id={investment.expectedReturn.inputId}
                        type="number" required
                        onChange={onInputChange}
                        placeholder={investment.expectedReturn.inputValue}
                        // min="0"
                    />
                </p>
                <p>
                    <label>{investment.duration.inputLabel}</label>
                    <input
                        id={investment.duration.inputId}
                        type="number" required
                        onChange={onInputChange}
                        placeholder={investment.duration.inputValue}
                        // min="1"
                    />
                </p>
            </div>
        </section>
    );
}