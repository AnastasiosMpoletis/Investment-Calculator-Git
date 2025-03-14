import { FIELDS_LABELS } from '../util/investment.js';

/**
 * @returns UserInput component
 */
export default function UserInput() {

    function Group({ children }) {
        return (
            <div className="input-group">
                {children}
            </div>
        );
    }

    function Field({ label, onChangeDuration = undefined }) {
        return (
            <div>
                <label>{label}</label>
                <input type="number" required onChange={onChangeDuration}></input>
            </div>
        );
    }

    function handleDurationChange(event) {
        if (event.target.value < 1) {
            alert("Duration cannot be negative");
            event.target.value = 1;
        }
    }

    return (
        <div id="user-input">
            <Group>
                <>
                    <Field label={FIELDS_LABELS[0]} />
                    <Field label={FIELDS_LABELS[1]} />
                </>
            </Group>
            <Group>
                <>
                    <Field label={FIELDS_LABELS[2]} />
                    <Field label={FIELDS_LABELS[3]} onChangeDuration={handleDurationChange}/>
                </>
            </Group>
        </div>
    );
}